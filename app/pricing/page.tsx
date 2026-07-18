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
    "Clear GBP website build prices and optional monthly care for small businesses.",
  path: "/pricing"
});

const monthlyCare = [
  {
    name: "Basic care",
    price: "£45/month",
    description: "For keeping the site live, checked and looked after.",
    features: [
      "Managed hosting",
      "Uptime checks",
      "Form checks",
      "Small fixes",
      "Basic analytics monitoring"
    ]
  },
  {
    name: "Content support",
    price: "£95/month",
    description: "For businesses that want help keeping the site current.",
    features: [
      "Everything in Basic care",
      "Small wording and image updates",
      "New sections when needed",
      "Simple analytics summary",
      "Search and content suggestions"
    ]
  },
  {
    name: "Ongoing partner",
    price: "From £150/month",
    description: "For businesses that want regular improvements and quicker support.",
    features: [
      "Everything in Content support",
      "Priority support",
      "Regular site improvements",
      "New page support",
      "Monthly recommendations"
    ]
  }
];

const includedWithBuild = [
  "Basic analytics setup",
  "Search Console setup",
  "Contact form tracking where possible",
  "Mobile-friendly build",
  "Domain and hosting setup",
  "Launch support"
];

const faqs = [
  ["Can I just ask if you are a good fit?", "Yes. Send a simple enquiry and I will tell you honestly whether I can help. It is free and does not lock you into anything."],
  ["Do I have to pay monthly?", "No. The monthly care plans are optional. You can pay once for the website build and only ask for changes when you need them."],
  ["What does the build price depend on?", "Mostly size, page count, content, forms, photos and how much structure the site needs."],
  ["Is analytics included?", "Yes. I set up basic analytics so you can see whether people are finding and using the site."],
  ["How long does it take?", "Most small business sites launch in two to six weeks, depending on content, feedback and complexity."]
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
            Pay once to get the site built. Add monthly care only if you want me
            to keep it looked after. After a quick call, I can give you a fixed
            scope, price and likely timeline. All prices are in GBP.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <ServiceCard key={plan.name} plan={plan} featured={index === 1} />
          ))}
        </div>
        <div className="mt-10 grid gap-10 border border-line bg-white p-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-moss">
              Included with every build
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              The basics are part of launch.
            </h2>
          </div>
          <div className="grid border-t border-line sm:grid-cols-2">
            {includedWithBuild.map((item) => (
              <div
                key={item}
                className="border-b border-line py-4 font-bold sm:odd:border-r sm:odd:pr-5 sm:even:pl-5"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-moss">
              Optional monthly care
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              Keep it looked after after launch.
            </h2>
            <p className="mt-4 leading-7 text-ink/70">
              Monthly care is for hosting, updates, small fixes and keeping an
              eye on the basics. It is useful if you do not want the site to
              become another thing on your list.
            </p>
          </div>
          <div className="mt-10 grid gap-px border border-line bg-line lg:grid-cols-3">
            {monthlyCare.map((plan) => (
              <article key={plan.name} className="bg-white p-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">
                  {plan.description}
                </p>
                <p className="mt-6 font-display text-3xl font-semibold">
                  {plan.price}
                </p>
                <ul className="mt-6 grid gap-3 text-sm text-ink/80">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-px w-4 shrink-0 bg-moss" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
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
            <p className="mt-3 max-w-sm text-sm leading-6 text-ink/65">
              A simple enquiry is free. It does not lock you into anything, and
              I will tell you if I think I am a good fit.
            </p>
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
