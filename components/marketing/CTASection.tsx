import Link from "next/link"
import { Button, Container, Typography } from "@/components/ui"

export function CTASection() {
    return (
        <section className="border-t bg-primary py-20 text-primary-foreground">
            <Container>
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center">
                    <Typography variant="h2" className="text-white">Ready to get started?</Typography>
                    <Typography variant="lead" className="max-w-[42rem] text-primary-foreground/80">
                        Let's discuss how we can help your business grow with clear financial insights.
                    </Typography>
                    <Button asChild size="lg" variant="secondary" className="mt-4 h-12 px-8 text-base font-semibold">
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </Container>
        </section>
    )
}
