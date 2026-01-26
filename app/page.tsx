import Link from "next/link";
import HealthBadge from "../components/HealthBadge";

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950"></div>
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Bookkeeping for modern founders</p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
              Clear financials, confident decisions, and calm month-end closes.
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              Harper Ledger keeps your books clean, your cash flow visible, and your tax season stress-free. Get
              monthly reconciliations, custom dashboards, and proactive support tailored to your business.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300"
                href="/contact"
              >
                Book a discovery call
              </Link>
              <Link
                className="rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-300 hover:text-emerald-200"
                href="/services"
              >
                View services
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div>
                <p className="text-2xl font-semibold">12+</p>
                <p className="text-sm text-slate-400">Years of experience</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">350+</p>
                <p className="text-sm text-slate-400">Monthly closes delivered</p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-xs text-slate-300">
              <span className="uppercase tracking-[0.3em] text-emerald-200">Status</span>
              <HealthBadge />
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl">
            <h2 className="text-xl font-semibold">Monthly bookkeeping, built around you</h2>
            <p className="mt-3 text-slate-300">
              A boutique service for founders who want clarity without hiring in-house. Dedicated communication,
              automated reporting, and strategic guidance included.
            </p>
            <div className="mt-6 space-y-4">
              {[
                "Bank + card reconciliation with a 5-day close target.",
                "Custom cash flow forecasts and KPI dashboards.",
                "Proactive alerts for anomalies, unpaid invoices, and burn rate."
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 h-3 w-3 rounded-full bg-emerald-400"></div>
                  <p className="text-sm text-slate-300">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-slate-950/70 p-5 text-sm text-slate-300">
              "Harper Ledger helped us see our runway and cut expenses within 30 days. I finally trust our numbers."
              <p className="mt-3 text-xs uppercase tracking-wide text-emerald-200">
                — Amina J., Creative Agency Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold">About Harper Ledger</h2>
            <p className="mt-4 text-slate-300">
              Harper Ledger is a boutique bookkeeping studio supporting founders across wellness, SaaS, and
              professional services. Each engagement includes clean bookkeeping, thoughtful insights, and simple
              workflows to keep you focused on growth.
            </p>
            <p className="mt-4 text-slate-300">
              Expect a financial partner who translates numbers into clear decisions, keeps your books audit-ready,
              and provides hands-on support.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-lg font-semibold">Certified QuickBooks ProAdvisor</h3>
                <p className="mt-2 text-sm text-slate-400">Advanced QuickBooks Online setup and cleanup.</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-lg font-semibold">Fractional CFO mindset</h3>
                <p className="mt-2 text-sm text-slate-400">Decision support built into every report.</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h3 className="text-lg font-semibold">Specialties</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• Monthly close + reconciliations</li>
              <li>• Accounts payable / receivable workflows</li>
              <li>• Budgeting + cash flow forecasting</li>
              <li>• Payroll coordination + 1099 prep</li>
              <li>• Dashboarding + KPI reports</li>
            </ul>
            <div className="mt-6 rounded-2xl bg-slate-950/60 p-5">
              <p className="text-sm text-slate-300">
                "Harper brought order to our finances and built a reporting cadence our team relies on every week."
              </p>
              <p className="mt-3 text-xs uppercase tracking-wide text-emerald-200">— Devon R., SaaS COO</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Services</p>
              <h2 className="mt-3 text-3xl font-semibold">Flexible support for every stage</h2>
            </div>
            <p className="max-w-xl text-slate-300">
              Choose the service package that meets you where you are — or mix and match. Every package comes with a
              dedicated Slack channel, 48-hour response time, and monthly report walkthroughs.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Foundation",
                body: "Ideal for solo founders who need clean monthly books.",
                bullets: ["Monthly reconciliation", "Income statement + balance sheet", "Quarterly tax-ready package"],
                price: "Starting at $450/mo"
              },
              {
                title: "Growth",
                body: "For teams who want insights and cash flow visibility.",
                bullets: ["Foundation package", "Cash flow forecasting", "KPI dashboard + quarterly reviews"],
                price: "Starting at $900/mo",
                highlight: true
              },
              {
                title: "Strategic",
                body: "Fractional CFO support + custom analytics.",
                bullets: ["Growth package", "Budgeting + scenario planning", "Board-ready reporting"],
                price: "Custom pricing"
              }
            ].map((plan) => (
              <article
                key={plan.title}
                className={`rounded-3xl border p-6 ${
                  plan.highlight
                    ? "border-emerald-400 bg-emerald-400/10"
                    : "border-slate-800 bg-slate-950/70"
                }`}
              >
                <h3 className="text-xl font-semibold">{plan.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{plan.body}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-200">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
                <p className="mt-6 text-emerald-200">{plan.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">The process</p>
            <h2 className="mt-3 text-3xl font-semibold">Onboarding in three simple steps</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                title: "1. Discovery + diagnostics",
                copy: "We map your current financial stack, review your books, and build a cleanup plan."
              },
              {
                title: "2. Setup + automation",
                copy: "We optimize your chart of accounts, connect tools, and establish workflows."
              },
              {
                title: "3. Monthly rhythm",
                copy: "Expect clean books, timely reports, and strategic guidance every month."
              }
            ].map((step) => (
              <div key={step.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/70 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold">Let’s make your books effortless</h2>
              <p className="mt-4 text-slate-300">
                Share a few details and we’ll follow up with availability, a tailored proposal, and next steps.
              </p>
              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <p>
                  <span className="text-emerald-200">Email:</span> hello@harperledger.com
                </p>
                <p>
                  <span className="text-emerald-200">Phone:</span> (512) 555-0192
                </p>
                <p>
                  <span className="text-emerald-200">Location:</span> Austin, Texas · Serving US remote teams
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
              <p className="text-sm text-slate-300">
                Prefer a full intake? Visit the contact page to share detailed information about your current
                bookkeeping setup.
              </p>
              <Link
                className="mt-6 inline-flex rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300"
                href="/contact"
              >
                Go to intake form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
