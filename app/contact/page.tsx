import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950"></div>
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Contact</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
            Tell us about your business, and we’ll share a custom pricing proposal.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            The more context you share, the more accurate your proposal will be. We respond within one business day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-2xl font-semibold">What happens next?</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>• We review your intake and confirm the scope.</li>
                <li>• You receive a tailored proposal with pricing.</li>
                <li>• We schedule a kickoff call and request access.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <h3 className="text-lg font-semibold">Direct contact</h3>
              <p className="mt-3 text-sm text-slate-300">
                Prefer email or phone? Reach us directly and we’ll follow up quickly.
              </p>
              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <p>
                  <span className="text-emerald-200">Email:</span> hello@AG ledger.com
                </p>
                <p>
                  <span className="text-emerald-200">Phone:</span> (512) 555-0192
                </p>
                <p>
                  <span className="text-emerald-200">Location:</span> San Antonio, Texas · Serving US remote teams
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
