import Link from "next/link";

const navItems = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-cream/92 backdrop-blur">
      <div className="container flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="Go home">
          <span className="grid h-10 w-10 place-items-center rounded bg-ink text-sm font-bold text-white">
            JC
          </span>
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-ink">
            Joe Clack
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-ink/75 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded bg-clay px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-ink"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
