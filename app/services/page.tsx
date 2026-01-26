import Link from "next/link";

const coreServices = [
  {
    title: "Monthly reconciliations",
    body: "Reconcile bank accounts and credit cards to ensure every transaction is captured correctly."
  },
  {
    title: "Accounts payable + receivable",
    body: "Track bills, vendor payments, and customer invoices to improve cash flow visibility."
  },
  {
    title: "Financial statements",
    body: "Deliver monthly P&L, balance sheet, and cash flow statements with clear explanations."
  },
  {
    title: "Expense categorization",
    body: "Classify transactions accurately to ensure clean reports and deductible expenses are tracked."
  },
  {
    title: "Payroll coordination",
    body: "Sync payroll providers, map wages and taxes correctly, and reconcile payroll liabilities."
  },
  {
    title: "Sales tax + 1099 prep",
    body: "Track sales tax obligations, prepare 1099 data, and organize documents for your tax team."
  }
];

const advisoryServices = [
  {
    title: "Cash flow forecasting",
    body: "Rolling 3-12 month forecasts to track runway, hiring plans, and seasonal swings."
  },
  {
    title: "KPI dashboards",
    body: "Customized dashboards that highlight revenue, margins, burn rate, and client profitability."
  },
  {
    title: "Budgeting + scenario planning",
    body: "Annual budgets and what-if models to support growth, hiring, and investment decisions."
  },
  {
    title: "Financial clean-up",
    body: "Catch-up bookkeeping to repair prior periods and align your chart of accounts."
  }
];

export default function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950"></div>
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Services</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
            Bookkeeping services that keep your finances clean, compliant, and insightful.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            Every service is tailored to your size, industry, and tools. AG  Ledger focuses on monthly
            bookkeeping, reporting, and advisory so you always know where your business stands.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Core bookkeeping services</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          These are the essentials that keep your books accurate, tax-ready, and organized all year long.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {coreServices.map((service) => (
            <article key={service.title} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-900/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold">Advisory + reporting</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Beyond clean books, AG  Ledger provides insight so you can forecast, plan, and lead with clarity.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {advisoryServices.map((service) => (
              <div key={service.title} className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold">Add-on support</h2>
            <p className="mt-4 text-slate-300">
              Need something custom? These optional services are often layered on for growing teams.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>• Invoice creation and collections workflows</li>
              <li>• Vendor onboarding + bill approvals</li>
              <li>• Project or client-level profitability tracking</li>
              <li>• Month-end close checklists for internal teams</li>
              <li>• Tool integrations (Stripe, Gusto, Bill.com, HubSpot)</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h3 className="text-lg font-semibold">Not sure what you need?</h3>
            <p className="mt-3 text-sm text-slate-300">
              We’ll assess your current books and recommend a package that fits your goals, volume, and tools.
            </p>
            <Link
              className="mt-6 inline-flex items-center rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300"
              href="/contact"
            >
              Get a custom quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
