import { Metadata } from "next"
import { AboutHero, Story, WhyChooseUs, CTASection } from "@/components/marketing"

export const metadata: Metadata = {
    title: "About Us | BookkeeperPro",
    description: "Meet the team dedicated to your financial clarity. Experienced, proactive, and technology-driven bookkeeping.",
}

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <AboutHero />
            <Story />
            <WhyChooseUs />
            <CTASection />
        </main>
    )
}
