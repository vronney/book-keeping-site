"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui"
import { cn } from "@/lib/utils"

interface MobileNavProps {
    items: { title: string; href: string }[]
}

export function MobileNav({ items }: MobileNavProps) {
    const [isOpen, setIsOpen] = React.useState(false)
    const [mounted, setMounted] = React.useState(false)
    const pathname = usePathname()

    // Handle mounting for portal
    React.useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    // Lock body scroll when menu is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    // Close menu when route changes
    React.useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    const menuContent = (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-lg md:hidden"
                >
                    {/* Close button area - clicking left side closes menu */}
                    <div
                        className="absolute inset-0"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Menu content on the right */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        className="absolute inset-y-0 right-0 w-full max-w-xs bg-slate-950 p-6 shadow-2xl border-l border-slate-800"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-xl font-bold tracking-tight text-[#c9a227]">BookkeeperPro</span>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close menu"
                                className="text-slate-100 hover:text-[#c9a227]"
                            >
                                <X className="h-6 w-6" />
                            </Button>
                        </div>

                        <nav className="flex flex-col space-y-4">
                            {items.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-lg font-bold transition-colors hover:text-[#c9a227] px-3 py-2 rounded-md hover:bg-slate-800/50",
                                        pathname === item.href
                                            ? "text-[#c9a227]"
                                            : "text-white"
                                    )}
                                >
                                    {item.title}
                                </Link>
                            ))}
                            <div className="pt-6 mt-6 border-t border-slate-800">
                                <Button className="w-full bg-[#c9a227] hover:bg-[#c9a227]/90 text-slate-950 font-bold" size="lg" asChild>
                                    <Link href="/contact">Get Started</Link>
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )

    return (
        <div className="md:hidden">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                className="text-slate-100 hover:text-[#c9a227]"
            >
                <Menu className="h-6 w-6" />
            </Button>

            {mounted && createPortal(menuContent, document.body)}
        </div>
    )
}
