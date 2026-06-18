import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceCard from "@/components/ServiceCard";
import { pricingPageFlag } from "@/flags";
import { getServicePlans } from "@/lib/contentful";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Clear website packages for small local businesses with transparent pricing and no hidden fees."
};

const faqs = [
  ["Do I need to know how to update my website?", "No. I can handle updates for you, or show you how to make simple content changes."],
  ["Can I add my own content?", "Yes. The site can be connected to Contentful so you can update pages, services, and portfolio items without touching code."],
  ["How long does it take?", "Most small business sites launch in two to six weeks, depending on content, feedback, and feature complexity."],
  ["What if I need changes later?", "You can request one-off changes or set up an ongoing support plan for regular updates."]
];

export default async function PricingPage() {
  const showPricing = await pricingPageFlag();
  if (!showPricing) notFound();

  const plans = await getServicePlans();

  return (
    <section className="section bg-cream">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">Services and pricing</p>
          <h1 className="mt-4 font-display text-5xl font-semibold">Clear packages. No hidden fees.</h1>
          <p className="mt-5 text-lg leading-8 text-ink/70">
            Choose the level that fits your business today. Every package is
            designed to create a polished, practical website that helps customers
            understand what you do and get in touch. All prices are in GBP.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <ServiceCard key={plan.name} plan={plan} featured={index === 1} />
          ))}
        </div>
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-4xl font-semibold">Common questions</h2>
            <p className="mt-4 leading-7 text-ink/70">
              The goal is to make the process feel straightforward from the
              first conversation through launch.
            </p>
            <Link href="/contact" className="mt-6 inline-flex rounded bg-clay px-5 py-4 font-bold text-white hover:bg-ink">
              Ask About Your Website
            </Link>
          </div>
          <div className="grid gap-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="rounded-lg border border-line bg-white p-5">
                <summary className="cursor-pointer font-bold">{question}</summary>
                <p className="mt-3 text-sm leading-6 text-ink/70">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
