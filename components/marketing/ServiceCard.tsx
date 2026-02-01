import { LucideIcon, CheckCircle2 } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui"

interface ServiceCardProps {
    title: string
    description: string
    features: string[]
    icon: LucideIcon
}

export function ServiceCard({ title, description, features, icon: Icon }: ServiceCardProps) {
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="text-base text-slate-300">{description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
                <ul className="space-y-3">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                            <span className="text-sm text-slate-300">{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}
