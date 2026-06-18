import Link from "next/link";
import PortfolioCard from "@/components/PortfolioCard";
import ServiceCard from "@/components/ServiceCard";
import { fallbackPortfolio, fallbackServices } from "@/lib/contentful";

const testimonials = [
  {
    quote:
      "The process was simple, the website finally looks like our business, and customers know exactly how to book.",
    name: "Independent salon owner"
  },
  {
    quote:
      "We stopped sending people to a messy Facebook page. Now our services, reviews, and phone number are clear.",
    name: "Local trade business"
  }
];

export default function Home() {
  return (
    <>
      <section className="bg-cream">
        <div className="container grid min-h-[calc(100vh-80px)] items-center gap-12 py-12 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">
              Websites for local businesses
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-ink md:text-7xl">
              Get a professional website without the technical headache.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/72">
              I help busy owners turn unclear, outdated, or missing websites
              into polished online presences that make customers trust them and
              get in touch.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="rounded bg-clay px-6 py-4 text-center font-bold text-white hover:bg-ink">
                Get Your Website Today
              </Link>
              <Link href="/pricing" className="rounded border border-ink/20 px-6 py-4 text-center font-bold text-ink hover:border-ink">
                See Pricing
              </Link>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-6 text-sm">
              <div><strong className="block text-2xl">2-6</strong> weeks to launch</div>
              <div><strong className="block text-2xl">100%</strong> mobile-friendly</div>
              <div><strong className="block text-2xl">Clear</strong> fixed packages</div>
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
            <h2 className="mt-3 font-display text-4xl font-semibold">Realistic examples of the businesses this is built for.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {fallbackPortfolio.slice(0, 3).map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {fallbackServices.map((plan, index) => (
              <ServiceCard key={plan.name} plan={plan} featured={index === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="rounded-lg border border-line p-6">
              <p className="font-display text-2xl leading-9">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-5 text-sm font-bold text-moss">{testimonial.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
