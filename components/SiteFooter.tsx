import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" }
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-slate-200">Harper Ledger</p>
          <p className="mt-2">Bookkeeping and advisory for service-based businesses.</p>
        </div>
        <div className="flex flex-wrap gap-6">
          {navItems.map((item) => (
            <Link key={item.href} className="hover:text-emerald-200" href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
