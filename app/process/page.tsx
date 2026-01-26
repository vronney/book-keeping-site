import Link from "next/link";

const steps = [
  {
    title: "Step 1: Discovery + diagnostics",
    body: "Review your financial stack, access existing files, and outline what needs cleanup or catching up."
  },
  {
    title: "Step 2: Cleanup + catch-up",
    body: "Reconcile past periods, fix categorization issues, and confirm a clean starting point."
  },
  {
    title: "Step 3: Workflow setup",
    body: "Implement monthly close checklists, approval workflows, and reporting dashboards."
  },
  {
    title: "Step 4: Monthly rhythm",
    body: "Receive monthly reports, a walkthrough call, and action items for the next cycle."
  }
];

const expectations = [
  {
    title: "Clear communication",
    body: "Dedicated Slack channel, shared progress tracker, and a 48-hour response time."
  },
  {
    title: "Documented close",
    body: "Close checklists and monthly deliverables shared in a secure folder."
  },
  {
    title: "Actionable insights",
    body: "A short list of priorities each month so you know what to focus on next."
  }
];

export default function ProcessPage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950"></div>
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Process</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
            A calm, collaborative onboarding experience from day one.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            AG  Ledger delivers a structured, transparent process so you always know what happens next. From
            intake to your first close, every milestone is documented and communicated.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold">Onboarding timeline</h2>
            <p className="mt-4 text-slate-300">
              Most clients complete onboarding within 2-3 weeks, depending on the state of their books.
            </p>
          </div>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold">What you can expect</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {expectations.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-emerald-400 bg-emerald-400/10 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Ready to get started?</h2>
              <p className="mt-2 text-sm text-slate-200">
                Share a few details about your business and we’ll send a tailored plan.
              </p>
            </div>
            <Link
              className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300"
              href="/contact"
            >
              Start onboarding
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
