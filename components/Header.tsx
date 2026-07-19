"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
  const [activeMarker, setActiveMarker] = useState({
    left: 0,
    width: 0,
    ready: false
  });
  const pathname = usePathname();
  const desktopNavRef = useRef<HTMLElement>(null);
  const desktopLinkRefs = useRef(new Map<string, HTMLAnchorElement>());
  const visibleNavItems = showPricing
    ? navItems
    : navItems.filter((item) => item.href !== "/pricing");

  function closeMenu() {
    setIsOpen(false);
  }

  function isActivePath(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const activeNavItem = visibleNavItems.find((item) => isActivePath(item.href));

  useEffect(() => {
    function updateMarker() {
      if (!activeNavItem || !desktopNavRef.current) {
        setActiveMarker((current) => ({ ...current, ready: false }));
        return;
      }

      const activeLink = desktopLinkRefs.current.get(activeNavItem.href);
      if (!activeLink) return;

      const navRect = desktopNavRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      setActiveMarker({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        ready: true
      });
    }

    updateMarker();
    window.addEventListener("resize", updateMarker);

    return () => window.removeEventListener("resize", updateMarker);
  }, [activeNavItem]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/94 backdrop-blur">
      <div className="container flex min-h-20 items-center justify-between gap-5">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Clack Web Co. home"
          onClick={closeMenu}
        >
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-ink">
            Clack Web Co.
          </span>
        </Link>
        <nav
          ref={desktopNavRef}
          className="relative hidden items-center gap-7 text-sm font-semibold text-ink/75 md:flex"
        >
          <span
            className={`absolute bottom-0 h-0.5 bg-rust transition-[transform,width,opacity] duration-300 ease-out motion-reduce:transition-none ${
              activeMarker.ready ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: activeMarker.width,
              transform: `translateX(${activeMarker.left}px)`
            }}
            aria-hidden="true"
          />
          {visibleNavItems.map((item) => {
            const isActive = isActivePath(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                ref={(element) => {
                  if (element) {
                    desktopLinkRefs.current.set(item.href, element);
                  } else {
                    desktopLinkRefs.current.delete(item.href);
                  }
                }}
                className={`py-2 transition ${
                  isActive
                    ? "text-ink"
                    : "hover:text-ink"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
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
        className={`absolute inset-x-0 top-full grid overflow-hidden border-t bg-paper shadow-lg transition-[grid-template-rows,opacity,transform,visibility,border-color] duration-200 ease-out motion-reduce:transition-none md:hidden ${
          isOpen
            ? "visible translate-y-0 border-line opacity-100 [grid-template-rows:1fr]"
            : "invisible -translate-y-2 border-transparent opacity-0 [grid-template-rows:0fr]"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="container grid gap-2 py-4">
            {visibleNavItems.map((item) => {
              const isActive = isActivePath(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border px-3 py-3 text-base font-bold transition ${
                    isActive
                      ? "border-rust bg-white text-ink"
                      : "border-transparent text-ink hover:border-line hover:bg-white"
                  }`}
                  onClick={closeMenu}
                  tabIndex={isOpen ? undefined : -1}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
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
