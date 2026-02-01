import { Metadata } from "next"
import Link from "next/link"
import { Calculator, Users, FileText, ArrowRight } from "lucide-react"
import { ServiceCard, CTASection } from "@/components/marketing"
import { Button, Container, Typography } from "@/components/ui"

export const metadata: Metadata = {
    title: "Services | BookkeeperPro",
    description: "Comprehensive bookkeeping, payroll, and tax support services for growing businesses.",
}

const servicesList = [
    {
        title: "Bookkeeping",
        description: "Keep your financial records clean, organized, and audit-ready every month.",
        icon: Calculator,
        features: [
            "Monthly bookkeeping",
            "Bank & credit card reconciliation",
            "Financial statements (P&L, balance sheet)",
            "Accounts payable/receivable tracking"
        ]
    },
    {
        title: "Payroll",
        description: "Ensure your team gets paid on time and compliant with all regulations.",
        icon: Users,
        features: [
            "Payroll processing & filing",
            "Employee direct deposits",
            "Contractor payments (1099)",
            "Year-end W-2/1099 preparation"
        ]
    },
    {
        title: "Tax Support",
        description: "We prepare everything your CPA needs to file your taxes stress-free.",
        icon: FileText,
        features: [
            "Year-end prep for CPA",
            "Tax filing support (no filing)",
            "Tax document organization",
            "Financial statement review"
        ]
    }
]

export default function ServicesPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <section className="bg-muted/40 py-20 lg:py-32 border-b">
                <Container>
                    <div className="mx-auto max-w-[58rem] text-center">
                        <Typography variant="h1" className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Our Services
                        </Typography>
                        <Typography variant="lead" className="text-slate-300">
                            We handle the financial details so you can focus on growing your business.
                        </Typography>
                    </div>
                </Container>
            </section>

            <section className="py-16 lg:py-24">
                <Container>
                    <div className="grid gap-8 md:grid-cols-3">
                        {servicesList.map((service) => (
                            <ServiceCard key={service.title} {...service} />
                        ))}
                    </div>

                    <div className="mt-16 rounded-lg border bg-muted/40 p-8 text-center">
                        <Typography variant="h4" className="mb-2">Important Note on Taxes</Typography>
                        <p className="text-slate-300">
                            We prepare your books for tax filing ensuring they are clean and accurate.
                            However, <strong>we do not file income taxes</strong>. We work directly with your CPA
                            to make the filing process seamless.
                        </p>
                    </div>
                </Container>
            </section>

            <CTASection />
        </main>
    )
}
