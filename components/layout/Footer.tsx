import Link from "next/link"
import { Container, Typography } from "@/components/ui"

const navigation = {
    main: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Process", href: "/process" },
        { name: "Pricing", href: "/pricing" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Data Handling", href: "/data-handling" },
    ],
}

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-slate-950 border-t border-slate-800">
            <Container>
                <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2 space-y-4">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold text-slate-100">BookkeeperPro</span>
                        </Link>
                        <p className="text-slate-400 max-w-sm">
                            Clear financials, confident decisions, and calm month-end closes.
                            Bookkeeping and advisory services for modern founders.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-100 mb-4">Company</h3>
                        <ul className="space-y-3">
                            {navigation.main.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-400 hover:text-emerald-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-100 mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {navigation.legal.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-400 hover:text-emerald-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="py-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        &copy; {currentYear} BookkeeperPro. All rights reserved.
                    </p>
                    <p className="text-sm text-slate-500">
                        Based in San Antonio, TX · Serving US remote teams
                    </p>
                </div>
            </Container>
        </footer>
    )
}
