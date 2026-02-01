import { MessageSquare, ScanSearch, Laptop2 } from "lucide-react"
import { Container, Typography, Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui"

const reasons = [
    {
        title: "Obsessive Attention to Detail",
        description: "We don't just categorize transactions; we understand the context. Every penny is accounted for ensuring your reports are decision-ready.",
        icon: ScanSearch
    },
    {
        title: "Proactive Communication",
        description: "No more chasing your accountant. We provide monthly video updates and respond to emails within 24 hours.",
        icon: MessageSquare
    },
    {
        title: "Technology Forward",
        description: "We leverage the best modern tools (QuickBooks Online, Xero, Gusto) to automate the routine and focus on strategy.",
        icon: Laptop2
    }
]

export function WhyChooseUs() {
    return (
        <section className="bg-muted/40 py-20 lg:py-24">
            <Container>
                <div className="mb-12 text-center">
                    <Typography variant="h2" className="mb-4">Why Businesses Trust Us</Typography>
                    <Typography variant="lead" className="text-slate-300">
                        More than just a vendor, we are a partner in your growth.
                    </Typography>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {reasons.map((reason) => (
                        <Card key={reason.title} className="bg-background">
                            <CardHeader>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                                    <reason.icon className="h-6 w-6" />
                                </div>
                                <CardTitle>{reason.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base text-slate-300">
                                    {reason.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    )
}
