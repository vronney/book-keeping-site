import { Metadata } from "next"
import { ClipboardList, FileSearch, PhoneCall, Rocket } from "lucide-react"
import { ProcessStep, CTASection } from "@/components/marketing"
import { Container, Typography } from "@/components/ui"

export const metadata: Metadata = {
    title: "Process | BookkeeperPro",
    description: "Our simple 4-step process to get your business finances in order.",
}

const steps = [
    {
        stepNumber: 1,
        title: "Complete Intake Form",
        description: "Start by telling us about your business, current accounting software, and specific needs via our secure intake form. This helps us understand your baseline immediately.",
        icon: ClipboardList,
    },
    {
        stepNumber: 2,
        title: "Qualification Review",
        description: "Our team reviews your details to ensure your business volume and industry are a good match for our services. We look for opportunities where we can add the most value.",
        icon: FileSearch,
    },
    {
        stepNumber: 3,
        title: "Discovery Call",
        description: "We schedule a focused 30-minute consultation to discuss your financial goals, answer your specific questions, and agree on the perfect service package.",
        icon: PhoneCall,
    },
    {
        stepNumber: 4,
        title: "Onboarding Launch",
        description: "We set up secure access to your accounts, configure your reporting dashboard, and kick off your first month of professional bookkeeping. Welcome aboard!",
        icon: Rocket,
    }
]

export default function ProcessPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <section className="bg-muted/40 py-20 lg:py-32 border-b">
                <Container>
                    <div className="mx-auto max-w-[58rem] text-center">
                        <Typography variant="h1" className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            How It Works
                        </Typography>
                        <Typography variant="lead" className="text-slate-300">
                            From chaos to clarity in four simple steps.
                        </Typography>
                    </div>
                </Container>
            </section>

            <section className="py-16 lg:py-24">
                <Container>
                    <div className="mx-auto max-w-2xl">
                        {steps.map((step, i) => (
                            <ProcessStep
                                key={step.stepNumber}
                                {...step}
                                isLast={i === steps.length - 1}
                            />
                        ))}
                    </div>
                </Container>
            </section>

            <CTASection />
        </main>
    )
}
