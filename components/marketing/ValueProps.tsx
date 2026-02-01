import { CheckCircle2, Clock, FileCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Container, Typography } from "@/components/ui"

const props = [
    {
        title: "Precision & Accuracy",
        description: "We don't just record transactions; we verify them. Every month, we reconcile your bank and credit card accounts to ensure every penny is accounted for, giving you a crystal-clear view of your financial health.",
        icon: CheckCircle2,
    },
    {
        title: "Reclaim Your Time",
        description: "Stop spending your evenings wrestling with spreadsheets. We handle the manual data entry and categorization so you can focus on growing your business, serving your clients, or just enjoying your weekend.",
        icon: Clock,
    },
    {
        title: "Tax-Season Peace of Mind",
        description: "No more January panic. We keep your books CPA-ready all year round. When tax season arrives, we seamlessly coordinate with your tax professional to ensure a smooth, stress-free filing process.",
        icon: FileCheck,
    },
]

export function ValueProps() {
    return (
        <section className="bg-muted/40 py-16 lg:py-24">
            <Container>
                <div className="grid gap-8 md:grid-cols-3">
                    {props.map((prop) => (
                        <Card key={prop.title} className="bg-background">
                            <CardHeader>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                                    <prop.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">{prop.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base text-slate-300">{prop.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    )
}
