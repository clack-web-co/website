"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

type HeaderProps = {
  showPricing: boolean;
};

export default function Header({ showPricing }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const visibleNavItems = showPricing
    ? navItems
    : navItems.filter((item) => item.href !== "/pricing");

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/94 backdrop-blur">
      <div className="container flex min-h-20 items-center justify-between gap-5">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Clack Web Co. home"
          onClick={closeMenu}
        >
          <span className="grid h-10 w-10 place-items-center border border-ink bg-ink text-sm font-bold text-white">
            C
          </span>
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-ink">
            Clack Web Co.
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-ink/75 md:flex">
          {visibleNavItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden bg-ink px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-rust sm:inline-flex"
            onClick={closeMenu}
          >
            Start a Project
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center border border-ink/15 bg-white text-ink shadow-sm md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="relative block h-5 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-5 rounded bg-current transition duration-200 ease-out ${
                  isOpen ? "-translate-y-1/2 rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded bg-current transition duration-150 ease-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-5 rounded bg-current transition duration-200 ease-out ${
                  isOpen ? "-translate-y-1/2 -rotate-45" : "translate-y-1.5"
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className={`grid overflow-hidden border-t bg-paper transition-[grid-template-rows,opacity,transform,visibility,border-color] duration-200 ease-out motion-reduce:transition-none md:hidden ${
          isOpen
            ? "visible translate-y-0 border-line opacity-100 [grid-template-rows:1fr]"
            : "invisible -translate-y-2 border-transparent opacity-0 [grid-template-rows:0fr]"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="container grid gap-2 py-4">
            {visibleNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-transparent px-3 py-3 text-base font-bold text-ink transition hover:border-line hover:bg-white"
                onClick={closeMenu}
                tabIndex={isOpen ? undefined : -1}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 bg-ink px-4 py-4 text-center font-bold text-white transition hover:bg-rust"
              onClick={closeMenu}
              tabIndex={isOpen ? undefined : -1}
            >
              Start a Project
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
