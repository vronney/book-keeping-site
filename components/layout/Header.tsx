"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button, Container } from "@/components/ui"
import { MobileNav } from "./MobileNav"

const navItems = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Process", href: "/process" },
    { title: "Pricing", href: "/pricing" },
    { title: "About", href: "/about" },
]

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-slate-950/90 backdrop-blur-lg border-b border-slate-800 py-3"
                    : "bg-slate-950/70 backdrop-blur-md border-b border-slate-800/50 py-5"
            )}
        >
            <Container className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-[#c9a227]">
                        BookkeeperPro
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.filter(item => item.title !== "Home").map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-[#c9a227]",
                                pathname === item.href ? "text-[#c9a227]" : "text-slate-300"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                    <Button asChild className="bg-[#c9a227] hover:bg-[#c9a227]/90 text-slate-950 font-bold">
                        <Link href="/contact">Get Started</Link>
                    </Button>
                </nav>

                {/* Mobile Nav */}
                <MobileNav items={navItems} />
            </Container>
        </header>
    )
}
