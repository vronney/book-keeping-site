import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui"

interface ProcessStepProps {
    stepNumber: number
    title: string
    description: string
    icon?: LucideIcon
    isLast?: boolean
}

export function ProcessStep({ stepNumber, title, description, icon: Icon, isLast = false }: ProcessStepProps) {
    return (
        <div className="relative flex gap-8 pb-16 last:pb-0">
            {/* Connecting Line */}
            {!isLast && (
                <div className="absolute left-[28px] top-14 h-full w-[2px] bg-slate-800" />
            )}

            {/* Step Number/Icon Bubble */}
            <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-900 border-2 border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)] ring-4 ring-slate-950">
                {Icon ? <Icon className="h-6 w-6" /> : <span className="text-xl font-bold">{stepNumber}</span>}
            </div>

            {/* Content Card */}
            <div className="pt-2 flex-1">
                <Card className="border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 transition-colors">
                    <CardContent className="p-6">
                        <div className="mb-2 flex items-center gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-bold text-emerald-500">
                                {stepNumber}
                            </span>
                            <h3 className="text-xl font-bold text-slate-100">{title}</h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed">{description}</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
