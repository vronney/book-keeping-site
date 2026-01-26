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
        <Link className="text-lg font-semibold tracking-wide" href="/">
          Harper Ledger
        </Link>
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
