import Link from "next/link"
import { Button, Container, Typography } from "@/components/ui"

export function Hero() {
    return (
        <div className="relative overflow-hidden border-b bg-background/50 pb-20 pt-20 lg:pb-32 lg:pt-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <Container>
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center">
                    <Typography variant="h1" className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl lg:leading-[1.1]">
                        Expert Bookkeeping Services for Growing Businesses
                    </Typography>
                    <Typography variant="lead" className="max-w-[46rem] text-slate-300 sm:text-xl sm:leading-8">
                        Focus on running your business. We'll handle the numbers.
                    </Typography>
                    <div className="flex flex-wrap items-center justify-center gap-4 py-4">
                        <Button asChild variant="secondary" size="lg" className="h-12 px-8 text-base font-semibold">
                            <Link href="/pricing">See Our Pricing</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
                            <Link href="/process">Learn How It Works</Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
