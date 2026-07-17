import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ServiceCard from "@/components/ServiceCard";
import { pricingPageFlag } from "@/flags";
import { getServicePlans } from "@/lib/contentful";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Website Packages and Pricing",
  description:
    "Clear GBP website packages for small businesses, with transparent pricing and no hidden fees.",
  path: "/pricing"
});

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
    <>
      <BreadcrumbJsonLd items={[{ name: "Pricing", path: "/pricing" }]} />
      <section className="section bg-paper">
        <div className="container">
        <div className="max-w-3xl">
          <p className="border-l-2 border-rust pl-4 text-sm font-bold uppercase tracking-[0.16em] text-moss">Services and pricing</p>
          <h1 className="mt-4 font-display text-5xl font-semibold">Website packages and prices.</h1>
          <p className="mt-5 text-lg leading-8 text-ink/70">
            A rough guide to what different types of small business website cost.
            After a quick call, I can give you a fixed scope, price and likely
            timeline. All prices are in GBP.
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
              A few practical details before you get in touch.
            </p>
            <Link href="/contact" className="mt-6 inline-flex bg-ink px-5 py-4 font-bold text-white hover:bg-rust">
              Ask About Your Website
            </Link>
          </div>
          <div className="grid gap-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="border border-line bg-white p-5">
                <summary className="cursor-pointer font-bold">{question}</summary>
                <p className="mt-3 text-sm leading-6 text-ink/70">{answer}</p>
              </details>
            ))}
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
