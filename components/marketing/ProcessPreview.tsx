import Link from "next/link"
import { Button, Container, Typography } from "@/components/ui"

const steps = [
    {
        id: 1,
        label: "Intake",
        description: "Tell us about your business needs via our simple form."
    },
    {
        id: 2,
        label: "Qualify",
        description: "We review your requirements to ensure we're a perfect match."
    },
    {
        id: 3,
        label: "Discovery",
        description: "A consultation to dive deep into your financial goals."
    },
    {
        id: 4,
        label: "Onboard",
        description: "We align systems and kick off your stress-free bookkeeping."
    },
]

export function ProcessPreview() {
    return (
        <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
            <Container>
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <Typography variant="h2">How It Works</Typography>
                    <Typography variant="lead" className="max-w-[42rem] text-slate-300">
                        A simple, transparent process to get your books in order.
                    </Typography>
                </div>

                <div className="mx-auto mt-16 max-w-4xl">
                    <div className="relative flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0">
                        {/* Connecting Line */}
                        <div className="absolute top-6 left-0 h-0.5 w-full bg-border -z-10 hidden md:block" />

                        {steps.map((step) => (
                            <div key={step.id} className="flex flex-col items-center gap-4 bg-background p-4 md:bg-transparent md:p-0 rounded-lg shadow-sm md:shadow-none max-w-[200px] text-center">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xl font-bold text-emerald-400 shadow-lg ring-4 ring-background">
                                    {step.id}
                                </div>
                                <div>
                                    <Typography variant="h4" className="text-lg font-semibold mb-2">
                                        {step.label}
                                    </Typography>
                                    <p className="text-sm text-slate-400">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Button asChild size="lg" variant="secondary">
                        <Link href="/process">See Full Process</Link>
                    </Button>
                </div>
            </Container>
        </section>
    )
}
