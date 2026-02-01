import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button, Card, CardHeader, CardTitle, CardContent, CardDescription, Container, Typography } from "@/components/ui"

const services = [
    {
        title: "Bookkeeping",
        description: "Monthly reconciliation and financial reporting.",
    },
    {
        title: "Payroll",
        description: "Seamless payroll management and compliance.",
    },
    {
        title: "Tax Support",
        description: "Year-round tax preparation and planning.",
    },
]

export function ServicesOverview() {
    return (
        <section className="py-20 lg:py-32">
            <Container>
                <div className="mb-12 text-center">
                    <Typography variant="h2" className="mb-4">Our Services</Typography>
                    <Typography variant="lead" className="mx-auto max-w-[42rem] text-slate-300">
                        Comprehensive financial solutions tailored to your business needs.
                    </Typography>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service) => (
                        <Card key={service.title} className="flex flex-col">
                            <CardHeader>
                                <CardTitle>{service.title}</CardTitle>
                                <CardDescription className="text-base text-slate-300">{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="mt-auto pt-0">
                                <Button variant="link" asChild className="px-0 text-emerald-400 hover:text-emerald-300">
                                    <Link href="/services">
                                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    )
}
