import type { Metadata } from "next";
import Link from "next/link";
import PortfolioCard from "@/components/PortfolioCard";
import ServiceCard from "@/components/ServiceCard";
import { pricingPageFlag } from "@/flags";
import { fallbackPortfolio, fallbackServices } from "@/lib/contentful";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Web Design for North East Businesses | Clack Web Co.",
  description:
    "Professional, mobile-friendly websites for small businesses across North East England. Work with Joe in person or online.",
  path: "/",
  absoluteTitle: true
});

const ownershipFeatures = [
  "Secure website setup",
  "Domain connection",
  "Managed hosting",
  "Maintenance options",
  "Search engine basics",
  "Clear launch support"
];

export default async function Home() {
  const showPricing = await pricingPageFlag();

  return (
    <>
      <section className="bg-cream">
        <div className="container grid min-h-[calc(100vh-80px)] items-center gap-12 py-12 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">
              North East web design for small businesses
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-ink md:text-7xl">
              Professional websites without the technical headache.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/72">
              Based in North East England, I work with business owners in person
              and online to turn unclear, outdated, or missing websites into
              polished online presences that win trust and enquiries.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="rounded bg-clay px-6 py-4 text-center font-bold text-white hover:bg-ink">
                Get Your Website Today
              </Link>
              {showPricing ? (
                <Link href="/pricing" className="rounded border border-ink/20 px-6 py-4 text-center font-bold text-ink hover:border-ink">
                  See Pricing
                </Link>
              ) : null}
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-6 text-sm">
              <div><strong className="block text-2xl">2-6</strong> weeks to launch</div>
              <div><strong className="block text-2xl">100%</strong> mobile-friendly</div>
              <div><strong className="block text-2xl">Clear</strong> project scope</div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg bg-white p-4 shadow-soft">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded border border-line bg-cream p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/50">Before</p>
                  <div className="mt-5 h-5 w-2/3 rounded bg-ink/20" />
                  <div className="mt-4 space-y-2">
                    <div className="h-3 rounded bg-ink/15" />
                    <div className="h-3 w-4/5 rounded bg-ink/15" />
                    <div className="h-3 w-2/3 rounded bg-ink/15" />
                  </div>
                  <div className="mt-8 h-28 rounded bg-ink/10" />
                </div>
                <div className="rounded border border-moss/25 bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-moss">After</p>
                  <div className="mt-5 h-7 w-3/4 rounded bg-ink" />
                  <div className="mt-4 h-24 rounded bg-moss/20" />
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="h-16 rounded bg-clay/20" />
                    <div className="h-16 rounded bg-ink/10" />
                  </div>
                  <div className="mt-5 h-10 rounded bg-clay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">Selected work</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">A real project showing the kind of practical website this service creates.</h2>
          </div>
          <div className="mt-10 grid max-w-md gap-6">
            {fallbackPortfolio.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      {showPricing ? (
        <section className="section bg-cream">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-3">
              {fallbackServices.map((plan, index) => (
                <ServiceCard key={plan.name} plan={plan} featured={index === 1} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section bg-white">
        <div className="container grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">What this shows</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">Built around the decision a customer needs to make.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {["Clear offer", "Mobile-first layout", "Easy enquiry path"].map((item) => (
              <div key={item} className="rounded-lg border border-line p-5">
                <p className="font-bold">{item}</p>
                <p className="mt-3 text-sm leading-6 text-ink/70">
                  The page makes it easier for visitors to understand the business and take the next step.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">
              What you get
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              The website, launch and ongoing setup handled properly.
            </h2>
            <p className="mt-4 leading-7 text-ink/70">
              A professional website is not just the design. I help with the
              practical pieces around it too, so you are not left trying to
              untangle domains, hosting, updates or technical setup yourself.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex rounded bg-ink px-5 py-4 font-bold text-white hover:bg-clay"
            >
              View Services
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {ownershipFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-lg border border-line bg-white p-5 font-bold"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
