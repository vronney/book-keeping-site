import { Metadata } from "next"
import { PricingCard, CTASection } from "@/components/marketing"
import { Container, Typography } from "@/components/ui"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export const metadata: Metadata = {
    title: "Pricing | BookkeeperPro",
    description: "Transparent pricing for bookkeeping services. Choose the plan that fits your business stage.",
}

const packages = [
    {
        name: "Essentials",
        price: "$300",
        description: "Perfect for solopreneurs and early-stage startups.",
        features: [
            "Monthly bookkeeping",
            "Bank & credit card reconciliation",
            "Financial statements (P&L, balance sheet)"
        ]
    },
    {
        name: "Growth",
        price: "$500",
        description: "For growing teams with payroll needs.",
        popular: true,
        features: [
            "Everything in Essentials",
            "Payroll processing & filing"
        ]
    },
    {
        name: "Premium",
        price: "$800",
        description: "Full-service financial management including tax prep support.",
        features: [
            "Everything in Growth",
            "Year-end prep for CPA",
            "Tax filing support (no filing)"
        ]
    }
]

const faqs = [
    {
        question: "Is there a setup fee?",
        answer: "We typically have a one-time onboarding fee to set up your chart of accounts and connect your bank feeds. This varies based on complexity."
    },
    {
        question: "Do I need to change my bank?",
        answer: "No, we work with all major US banks and credit cards. We connect securely with read-only access."
    },
    {
        question: "Can I upgrade later?",
        answer: "Absolutely. As your business grows, you can move to a higher tier plan seamlessly at any time."
    },
    {
        question: "What if I'm behind on my books?",
        answer: "We offer catch-up services to bring your past months (or years) up to date. We'll quote this separately after a quick review."
    }
]

export default function PricingPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <section className="bg-muted/40 py-20 lg:py-32 border-b">
                <Container>
                    <div className="mx-auto max-w-[58rem] text-center">
                        <Typography variant="h1" className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Simple, Transparent Pricing
                        </Typography>
                        <Typography variant="lead" className="text-slate-300">
                            No hidden fees. Just clean books and expert support.
                        </Typography>
                    </div>
                </Container>
            </section>

            <section className="py-16 lg:py-24">
                <Container>
                    <div className="grid gap-8 md:grid-cols-3">
                        {packages.map((pkg) => (
                            <PricingCard key={pkg.name} {...pkg} />
                        ))}
                    </div>

                    <div className="mt-12 text-center text-slate-400 text-sm italic">
                        * Final pricing determined after intake review based on actual transaction volume and complexity.
                    </div>
                </Container>
            </section>

            <section className="bg-muted/40 py-16 lg:py-24">
                <Container>
                    <div className="mx-auto max-w-2xl">
                        <Typography variant="h2" className="mb-8 text-center">Frequently Asked Questions</Typography>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent className="text-slate-300">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </Container>
            </section>

            <CTASection />
        </main>
    )
}
