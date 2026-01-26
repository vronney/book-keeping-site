import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950"></div>
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">About AG  Ledger</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
            A bookkeeper who turns financial noise into calm, confident decision-making.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            AG  Ledger is led by AG  James, a former controller and FP&A lead who partners with service-based
            businesses, agencies, and product studios. The goal is always the same: clear books, timely insights, and
            a financial system that grows with your team.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-3xl font-semibold">Why clients choose AG </h2>
          <p className="mt-4 text-slate-300">
            You deserve more than transactional bookkeeping. AG  Ledger focuses on accurate accounting, proactive
            communication, and practical guidance you can use right away. Every month you’ll know your numbers, what
            they mean, and what to do next.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { title: "12+ years of experience", body: "From early-stage startups to multi-entity teams." },
              { title: "Systems + strategy", body: "Automation, clean workflows, and financial insight." },
              { title: "Certified QuickBooks ProAdvisor", body: "Setup, cleanup, and training for QBO teams." },
              { title: "Dedicated support", body: "48-hour response time and a monthly review call." }
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <h3 className="text-lg font-semibold">AG ’s finance philosophy</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>• Keep your books audit-ready year round.</li>
            <li>• Translate data into decisions that impact cash and profit.</li>
            <li>• Build a predictable monthly close rhythm.</li>
            <li>• Create dashboards that teams actually use.</li>
            <li>• Provide clarity without the corporate overhead.</li>
          </ul>
          <div className="mt-6 rounded-2xl bg-slate-950/60 p-5">
            <p className="text-sm text-slate-300">
              "AG  is the steady, strategic finance partner I needed. Our numbers are finally reliable and
              actionable."
            </p>
            <p className="mt-3 text-xs uppercase tracking-wide text-emerald-200">— Maya L., Design Studio Founder</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold">Meet AG  James</h2>
              <p className="mt-4 text-slate-300">
                AG  started in public accounting, moved into corporate finance, and now helps founders build
                healthy financial foundations. She works with service businesses and subscription brands that need a
                reliable back office without the cost of a full-time hire.
              </p>
              <p className="mt-4 text-slate-300">
                Expect a partner who is detail-oriented, calm under pressure, and deeply invested in building a
                financial system you can trust.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8">
              <h3 className="text-lg font-semibold">Credentials</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>• MBA in Finance, University of Texas</li>
                <li>• 350+ monthly closes delivered</li>
                <li>• Specialized in SaaS, agencies, and consultants</li>
                <li>• Partner-ready reporting and compliance support</li>
              </ul>
              <Link
                className="mt-6 inline-flex items-center rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300"
                href="/contact"
              >
                Work with AG
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
