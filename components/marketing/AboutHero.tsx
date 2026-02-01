import { Container, Typography } from "@/components/ui"
import Image from "next/image"

export function AboutHero() {
    return (
        <section className="bg-slate-900 border-b relative overflow-hidden py-24 lg:py-32">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <Container>
                <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
                    <div className="flex-1 space-y-8">
                        <Typography variant="h1" className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Empowering Business Owners with Financial Clarity
                        </Typography>
                        <Typography variant="lead" className="text-slate-300">
                            We believe every business deserves enterprise-grade bookkeeping. Focus on your vision while we ensure your foundation is solid.
                        </Typography>
                    </div>
                    {/* Placeholder for professional image */}
                    <div className="flex-1">
                        <div className="aspect-square relative w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-slate-800 border flex items-center justify-center">
                            <Typography className="text-slate-500">Founder Photo</Typography>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
