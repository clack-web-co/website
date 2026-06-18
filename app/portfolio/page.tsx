import type { Metadata } from "next";
import PortfolioCard from "@/components/PortfolioCard";
import { getPortfolioItems } from "@/lib/contentful";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "See examples of polished, lead-focused websites for local businesses."
};

export default async function PortfolioPage() {
  const items = await getPortfolioItems();
  const industries = Array.from(new Set(items.map((item) => item.industry)));

  return (
    <section className="section bg-cream">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">Portfolio</p>
          <h1 className="mt-4 font-display text-5xl font-semibold">See real businesses helped by clearer websites.</h1>
          <p className="mt-5 text-lg leading-8 text-ink/70">
            Each project is built around a simple business outcome: earn trust
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
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
