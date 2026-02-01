import { ReactNode } from "react"
import { Container, Typography } from "@/components/ui"

interface LegalPageLayoutProps {
    title: string
    lastUpdated: string
    children: ReactNode
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
    return (
        <main className="min-h-screen py-20 lg:py-24">
            <Container>
                <div className="mx-auto max-w-3xl">
                    <div className="mb-12 border-b pb-8">
                        <Typography variant="h1" className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                            {title}
                        </Typography>
                        <p className="text-sm text-slate-400">
                            Last Updated: {lastUpdated}
                        </p>
                    </div>
                    <div className="prose prose-invert max-w-none prose-headings:text-emerald-400 prose-h3:text-2xl prose-h3:mt-12 prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-strong:text-white">
                        {children}
                    </div>
                </div>
            </Container>
        </main>
    )
}
