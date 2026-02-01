import Link from "next/link"
import { Check } from "lucide-react"
import { Button, Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui"

interface PricingCardProps {
    name: string
    price: string
    description: string
    features: string[]
    popular?: boolean
    ctaText?: string
    ctaLink?: string
}

export function PricingCard({
    name,
    price,
    description,
    features,
    popular = false,
    ctaText = "Get Started",
    ctaLink = "/contact"
}: PricingCardProps) {
    return (
        <Card className={`flex flex-col ${popular ? 'border-emerald-400 bg-emerald-500/5 ring-1 ring-emerald-400' : ''}`}>
            <CardHeader>
                {popular && (
                    <div className="mb-4 inline-block rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-400 w-fit">
                        Most Popular
                    </div>
                )}
                <CardTitle className="text-2xl">{name}</CardTitle>
                <div className="mt-2 text-3xl font-bold">{price}<span className="text-base font-normal text-slate-400">/mo</span></div>
                <CardDescription className="text-slate-300">{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <ul className="space-y-3">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <Check className="h-5 w-5 shrink-0 text-emerald-400" />
                            <span className="text-sm text-slate-300">{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <Button asChild className={`w-full ${popular ? 'bg-emerald-400 text-slate-900 hover:bg-emerald-300' : ''}`} variant={popular ? 'default' : 'outline'}>
                    <Link href={ctaLink}>{ctaText}</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
