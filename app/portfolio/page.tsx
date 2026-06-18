import type { Metadata } from "next";
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
      <section className="section bg-cream">
        <div className="container">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">Portfolio</p>
          <h1 className="mt-4 font-display text-5xl font-semibold">A real project built to make a business easier to trust and contact.</h1>
          <p className="mt-5 text-lg leading-8 text-ink/70">
            This portfolio will grow over time. For now, it starts with one
            live project focused on a simple business outcome: earn trust
            quickly, explain the offer clearly, and make the next step obvious.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {industries.map((industry) => (
            <span key={industry} className="rounded border border-line bg-white px-4 py-2 text-sm font-semibold">
              {industry}
            </span>
          ))}
        </div>
        <div className="mt-10 grid max-w-md gap-6">
          {items.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>
        </div>
      </section>
    </>
  );
}
