import { Metadata } from "next"
import { Hero, ValueProps, ServicesOverview, ProcessPreview, CTASection } from "@/components/marketing"

export const metadata: Metadata = {
  title: "BookkeeperPro | Expert Bookkeeping Services",
  description: "Professional bookkeeping services for growing businesses. Accurate books, tax-ready financials, and time saved for what matters most.",
  openGraph: {
    title: "BookkeeperPro | Expert Bookkeeping Services",
    description: "Focus on running your business. We'll handle the numbers.",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ValueProps />
      <ServicesOverview />
      <ProcessPreview />
      <CTASection />
    </main>
  )
}
