"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <button
            aria-label="Open navigation menu"
            className="inline-flex items-center justify-center rounded-md border border-emerald-400/70 p-2 text-emerald-200 transition hover:bg-emerald-400 hover:text-slate-900 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
          >
            <span className="sr-only">Open navigation menu</span>
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link className="text-lg font-semibold tracking-wide text-white" href="/">
            Harper Ledger
          </Link>
        </div>
        <div className="hidden items-center gap-8 text-sm font-medium text-white md:flex">
          {navItems.map((item) => (
            <Link key={item.href} className="hover:text-emerald-300" href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          className="hidden rounded-full border border-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400 hover:text-slate-900 md:inline-block"
          href="/contact"
        >
          Schedule a call
        </Link>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2 sm:px-3 bg-slate-900 border-t border-emerald-800">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-emerald-400 hover:text-slate-900"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="mt-4 block w-full rounded-md border border-emerald-400 px-3 py-2 text-center text-base font-medium text-emerald-200 hover:bg-emerald-400 hover:text-slate-900"
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              Schedule a call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
