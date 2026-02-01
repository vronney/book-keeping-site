"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 backdrop-blur-lg transition-colors ${isOpen ? 'bg-slate-950' : 'bg-slate-900/90'}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <button
            aria-label="Open navigation menu"
            className="inline-flex items-center justify-center rounded-md border border-slate-700 p-2 text-slate-100 transition hover:bg-slate-800 md:hidden"
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
          <Link className="text-xl font-bold tracking-tight text-[#c9a227]" href="/">
            BookkeeperPro
          </Link>
        </div>
        <div className="hidden items-center gap-8 text-sm font-medium text-white md:flex">
          {navItems.filter(item => item.label !== "Home").map((item) => (
            <Link key={item.href} className="hover:text-[#c9a227] transition-colors" href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          className="hidden rounded-full border border-[#c9a227] px-4 py-2 text-sm font-semibold text-[#c9a227] transition hover:bg-[#c9a227] hover:text-slate-950 md:inline-block"
          href="/contact"
        >
          Schedule a call
        </Link>
      </nav>
      {isOpen && (
        <div className="md:hidden animate-in slide-in-from-top-5 duration-200">
          <div className="space-y-1 px-4 pb-6 pt-2 sm:px-3 bg-slate-950 border-t border-slate-800 shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="block rounded-md px-3 py-3 text-lg font-bold text-white hover:bg-slate-800 hover:text-[#c9a227] transition-colors"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="mt-6 block w-full rounded-md bg-[#c9a227] px-3 py-3 text-center text-lg font-bold text-slate-950 hover:bg-[#c9a227]/90 transition-colors"
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
