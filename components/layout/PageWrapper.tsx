"use client"

import { Header } from "./Header"
import { Footer } from "./Footer"

interface PageWrapperProps {
    children: React.ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Header />
            <main className="flex-1 w-full pt-[72px]">
                {children}
            </main>
            <Footer />
        </div>
    )
}
