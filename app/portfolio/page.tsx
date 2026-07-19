import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import PortfolioCard from "@/components/PortfolioCard";
import { getPortfolioItems } from "@/lib/contentful";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Small Business Website Portfolio",
  description:
    "See website projects created by Clack Web Co. for small businesses.",
  path: "/portfolio"
});

export default async function PortfolioPage() {
  const items = await getPortfolioItems();
  const industries = Array.from(new Set(items.map((item) => item.industry)));

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Portfolio", path: "/portfolio" }]} />
      <section className="section bg-paper" data-reveal="fade">
        <div className="container">
          <div className="max-w-3xl" data-reveal="lift">
            <p className="border-l-2 border-rust pl-4 text-sm font-bold uppercase tracking-[0.16em] text-moss">Portfolio</p>
            <h1 className="mt-4 font-display text-5xl font-semibold">Website projects.</h1>
            <p className="mt-5 text-lg leading-8 text-ink/70">
              This portfolio will grow over time. For now, it starts with one
              live project for Jude C Fitness: a site for a fitness coach who
              needed somewhere clear to send potential clients.
            </p>
            {items[0] ? (
              <Link
                href={`/portfolio/${items[0].slug}`}
                className="mt-6 inline-flex bg-ink px-5 py-4 font-bold text-white hover:bg-rust"
              >
                View the Case Study
              </Link>
            ) : null}
          </div>
          <div className="mt-8 flex flex-wrap gap-3" data-reveal="lift">
            {industries.map((industry) => (
              <span key={industry} className="border border-line bg-white px-4 py-2 text-sm font-semibold">
                {industry}
              </span>
            ))}
          </div>
          <div className="mt-10 grid max-w-xl gap-6">
            {items.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
