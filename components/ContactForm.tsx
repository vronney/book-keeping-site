"use client";

import { FormEvent, useState } from "react";
import { useContactStore } from "../stores/useContactStore";

export default function ContactForm() {
  const { draft, updateField, reset } = useContactStore();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form
      className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="text-xs uppercase tracking-wide text-slate-400" htmlFor="full-name">
          Full name
        </label>
        <input
          className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none"
          id="full-name"
          placeholder="Jordan Lee"
          type="text"
          value={draft.fullName}
          onChange={(event) => updateField("fullName", event.target.value)}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs uppercase tracking-wide text-slate-400" htmlFor="email">
            Email address
          </label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none"
            id="email"
            placeholder="jordan@company.com"
            type="email"
            value={draft.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-slate-400" htmlFor="phone">
            Phone number
          </label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none"
            id="phone"
            placeholder="(512) 555-0192"
            type="tel"
            value={draft.phone}
            onChange={(event) => updateField("phone", event.target.value)}
          />
        </div>
      </div>
      <div>
        <label className="text-xs uppercase tracking-wide text-slate-400" htmlFor="business-name">
          Business name
        </label>
        <input
          className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none"
          id="business-name"
          placeholder="Harper & Co. Studio"
          type="text"
          value={draft.businessName}
          onChange={(event) => updateField("businessName", event.target.value)}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs uppercase tracking-wide text-slate-400" htmlFor="industry">
            Industry
          </label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none"
            id="industry"
            placeholder="Agency, SaaS, consulting"
            type="text"
            value={draft.industry}
            onChange={(event) => updateField("industry", event.target.value)}
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-slate-400" htmlFor="years">
            Years in business
          </label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none"
            id="years"
            placeholder="2"
            type="number"
            min="0"
            value={draft.yearsInBusiness}
            onChange={(event) => updateField("yearsInBusiness", event.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs uppercase tracking-wide text-slate-400" htmlFor="revenue">
            Monthly revenue range
          </label>
          <select
            className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none"
            id="revenue"
            value={draft.revenueRange}
            onChange={(event) => updateField("revenueRange", event.target.value)}
          >
            <option value="">Select a range</option>
            <option>Under $10k</option>
            <option>$10k - $50k</option>
            <option>$50k - $150k</option>
            <option>$150k+</option>
          </select>
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-slate-400" htmlFor="transactions">
            Monthly transactions
          </label>
          <select
            className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none"
            id="transactions"
            value={draft.transactionVolume}
            onChange={(event) => updateField("transactionVolume", event.target.value)}
          >
            <option value="">Select volume</option>
            <option>0 - 100</option>
            <option>100 - 300</option>
            <option>300 - 700</option>
            <option>700+</option>
          </select>
        </div>
      </div>
      <div>
        <label className="text-xs uppercase tracking-wide text-slate-400" htmlFor="software">
          Current accounting software
        </label>
        <input
          className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none"
          id="software"
          placeholder="QuickBooks Online, Xero, Wave"
          type="text"
          value={draft.accountingSoftware}
          onChange={(event) => updateField("accountingSoftware", event.target.value)}
        />
      </div>
      <div>
        <label className="text-xs uppercase tracking-wide text-slate-400" htmlFor="service-interest">
          Service interest
        </label>
        <select
          className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none"
          id="service-interest"
          value={draft.serviceInterest}
          onChange={(event) => updateField("serviceInterest", event.target.value)}
        >
          <option value="">Select a focus</option>
          <option>Monthly bookkeeping</option>
          <option>Cleanup / catch-up</option>
          <option>Cash flow forecasting</option>
          <option>Fractional CFO support</option>
          <option>Payroll coordination</option>
        </select>
      </div>
      <div>
        <label className="text-xs uppercase tracking-wide text-slate-400" htmlFor="timeline">
          Ideal start date
        </label>
        <select
          className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none"
          id="timeline"
          value={draft.startTimeline}
          onChange={(event) => updateField("startTimeline", event.target.value)}
        >
          <option value="">Select a timeline</option>
          <option>Immediately</option>
          <option>Within 30 days</option>
          <option>In 2-3 months</option>
          <option>Just exploring</option>
        </select>
      </div>
      <div>
        <label className="text-xs uppercase tracking-wide text-slate-400" htmlFor="notes">
          What would you like help with?
        </label>
        <textarea
          className="mt-2 min-h-[140px] w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none"
          id="notes"
          placeholder="Share your current bookkeeping challenges, reporting needs, or goals."
          value={draft.notes}
          onChange={(event) => updateField("notes", event.target.value)}
        ></textarea>
      </div>
      <button
        className="w-full rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300"
        type="submit"
      >
        Submit request
      </button>
      <div className="flex flex-col gap-2 text-xs text-slate-400">
        <p>We’ll respond within one business day with next steps.</p>
        {submitted ? (
          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-3 text-emerald-200">
            <p>Thanks! Your intake draft is saved locally. We’ll be in touch soon.</p>
            <button
              className="mt-2 text-xs font-semibold text-emerald-200 underline"
              onClick={() => {
                reset();
                setSubmitted(false);
              }}
              type="button"
            >
              Clear draft
            </button>
          </div>
        ) : null}
      </div>
    </form>
  );
}
