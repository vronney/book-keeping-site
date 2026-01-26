import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" }
];

export default function SiteHeader() {
  return (
    <header className="bg-slate-900/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <button
            aria-label="Open navigation menu"
            className="inline-flex items-center justify-center rounded-md border border-emerald-400/70 p-2 text-emerald-200 transition hover:bg-emerald-400 hover:text-slate-900 md:hidden"
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
          <Link className="text-lg font-semibold tracking-wide" href="/">
            Harper Ledger
          </Link>
        </div>
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link key={item.href} className="hover:text-emerald-300" href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          className="rounded-full border border-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400 hover:text-slate-900"
          href="/contact"
        >
          Schedule a call
        </Link>
      </nav>
    </header>
  );
}
