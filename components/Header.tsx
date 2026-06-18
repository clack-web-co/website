"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-cream/92 backdrop-blur">
      <div className="container flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="Go home" onClick={closeMenu}>
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
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded bg-clay px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-ink sm:inline-flex"
            onClick={closeMenu}
          >
            Get Started
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded border border-ink/15 bg-white text-ink shadow-sm md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="relative block h-5 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-1 h-0.5 w-5 rounded bg-current transition ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 h-0.5 w-5 rounded bg-current transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded bg-current transition ${
                  isOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className={`border-t border-line bg-cream md:hidden ${isOpen ? "block" : "hidden"}`}
        aria-label="Mobile navigation"
      >
        <div className="container grid gap-2 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded border border-transparent px-3 py-3 text-base font-bold text-ink hover:border-line hover:bg-white"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 rounded bg-clay px-4 py-4 text-center font-bold text-white"
            onClick={closeMenu}
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
