import { Container, Typography } from "@/components/ui"

export function Story() {
    return (
        <section className="py-20 lg:py-24">
            <Container>
                <div className="mx-auto max-w-3xl space-y-8">
                    <Typography variant="h2">Our Story</Typography>
                    <div className="prose prose-lg prose-invert text-slate-300">
                        <p>
                            BookkeeperPro started with a simple observation: too many small business owners were flying blind.
                            Passionate entrepreneurs were struggling not because their ideas were bad, but because they lacked
                            visibility into their financial health.
                        </p>
                        <p>
                            With over 15 years of experience in corporate finance and small business accounting, our team
                            set out to bridge that gap. We moved away from the "once-a-year tax scramble" model to
                            proactive, monthly partnership.
                        </p>
                        <p>
                            Today, we serve dozens of remote-first businesses, agencies, and consultants. We're not just
                            number crunchers; we are your financial peace of mind.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 pt-8 md:grid-cols-4">
                        <div>
                            <div className="text-3xl font-bold text-emerald-400">15+</div>
                            <div className="text-sm text-slate-400">Years Exp</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-emerald-400">100+</div>
                            <div className="text-sm text-slate-400">Clients</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-emerald-400">Certified</div>
                            <div className="text-sm text-slate-400">QuickBooks Pro</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-emerald-400">Zero</div>
                            <div className="text-sm text-slate-400">Tax Surprises</div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
