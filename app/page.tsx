import type { Metadata } from "next";
import Image from "next/image";
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
  "Page wording",
  "Mobile layout",
  "Contact form",
  "Domain connection",
  "Hosting setup",
  "Launch support"
];

const projectNotes = [
  {
    title: "What was needed",
    detail:
      "A simple place to send people who wanted to know about coaching."
  },
  {
    title: "What was built",
    detail:
      "A mobile-friendly website with service information and a contact route."
  },
  {
    title: "What it replaced",
    detail:
      "Scattered social links and repeated explanations in messages."
  }
];

const commonProblems = [
  "The site looks out of date",
  "It does not work well on phones",
  "People cannot find prices, services or opening details",
  "You rely too much on Instagram or Facebook",
  "You need one proper place to send people",
  "You do not want to sort domains, hosting or forms yourself"
];

const builderComparison = [
  {
    title: "A builder gives you the tools",
    detail:
      "You still have to plan the pages, write the words, choose the layout and connect everything."
  },
  {
    title: "I shape the site around the business",
    detail:
      "We work out what customers need to see, then I turn that into a clear, mobile-friendly site."
  },
  {
    title: "The setup is handled for you",
    detail:
      "Forms, hosting, domain connection and launch are part of the job, not extra homework."
  },
  {
    title: "You have someone to come back to",
    detail:
      "If something needs changing later, you can ask me instead of digging through settings."
  }
];

const businessTypes = [
  "Trades",
  "Fitness coaches",
  "Salons",
  "Cafes",
  "Consultants",
  "Local services"
];

const processSteps = [
  "Agree the pages and content",
  "Design the site",
  "Build and test it",
  "Launch it properly"
];

export default async function Home() {
  const showPricing = await pricingPageFlag();
  const featuredProject = fallbackPortfolio[0];

  return (
    <>
      <section className="bg-paper" data-reveal="fade">
        <div className="container grid gap-10 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:items-center lg:py-24">
          <div className="pb-4">
            <p className="max-w-md border-l-2 border-rust pl-4 text-sm font-bold uppercase tracking-[0.16em] text-moss">
              Web design in North East England
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] text-ink md:text-7xl">
              A proper website for your business.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
              I design and build websites for trades, coaches, salons, cafes,
              consultants and local service businesses. Pages, wording, contact
              forms, hosting and launch can all be handled for you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="bg-ink px-6 py-4 text-center font-bold text-white hover:bg-rust">
                Start a Project
              </Link>
              {showPricing ? (
                <Link href="/pricing" className="border border-ink/20 px-6 py-4 text-center font-bold text-ink hover:border-ink hover:bg-white">
                  See Pricing
                </Link>
              ) : null}
            </div>
            <div className="mt-12 grid max-w-2xl border-y border-line text-sm sm:grid-cols-3">
              <div className="py-5 sm:pr-5">
                <strong className="block font-display text-4xl font-semibold text-rust">2-6</strong>
                weeks to launch
              </div>
              <div className="border-t border-line py-5 sm:border-l sm:border-t-0 sm:px-5">
                <strong className="block font-display text-4xl font-semibold text-rust">1:1</strong>
                direct work with Joe
              </div>
              <div className="border-t border-line py-5 sm:border-l sm:border-t-0 sm:pl-5">
                <strong className="block font-display text-4xl font-semibold text-rust">No</strong>
                tech handoff
              </div>
            </div>
          </div>

          <div className="grid gap-5 lg:pb-4">
            <div className="grid grid-cols-[0.74fr_1fr] items-end gap-4">
              <div className="overflow-hidden border border-line bg-white">
                <Image
                  src="/images/joe-headshot.jpg"
                  alt="Joe Clack"
                  width={900}
                  height={1200}
                  className="aspect-[4/5] h-full w-full object-cover object-top"
                  priority
                />
              </div>
              <div className="border border-line bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-moss">
                  Based in North East England
                </p>
                <p className="mt-4 font-display text-3xl leading-tight">
                  You deal with one person from first call to launch.
                </p>
              </div>
            </div>
            <figure className="border-l-2 border-rust bg-white px-5 py-4 shadow-sm">
              <blockquote className="text-lg leading-7 text-ink/78">
                &ldquo;Joe created a website that clearly showcases my new business
                and gives me a professional way to reach new clients.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-ink/45">
                Jude C Fitness
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section bg-white" data-reveal="lift">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-moss">
              Common reasons people get in touch
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              When the current setup is not doing the job.
            </h2>
            <p className="mt-4 leading-7 text-ink/70">
              Most projects start with something simple: the website is old,
              missing, hard to update or not giving people the information they
              need.
            </p>
          </div>
          <div className="grid border-t border-line sm:grid-cols-2">
            {commonProblems.map((problem) => (
              <div
                key={problem}
                className="border-b border-line py-5 font-bold sm:odd:border-r sm:odd:pr-5 sm:even:pl-5"
              >
                {problem}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper" data-reveal="lift">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-moss">
              Wix and Squarespace
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              A builder gives you the tools. I do the work.
            </h2>
            <p className="mt-4 leading-7 text-ink/70">
              Website builders can be fine if you want to do it yourself. Most
              business owners do not get stuck because the tool is impossible;
              they get stuck on the time, wording, layout, setup and launch.
            </p>
          </div>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {builderComparison.map((item) => (
              <article key={item.title} className="bg-white p-6" data-reveal="lift">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper" data-reveal="lift">
        <div className="container grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-moss">
              Built for local businesses
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              The site should fit the way your business actually works.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {businessTypes.map((type) => (
              <span
                key={type}
                className="border border-line bg-white px-4 py-3 text-sm font-bold"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white" data-reveal="lift">
        <div className="container grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-moss">Selected work</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              Recent work: Jude C Fitness.
            </h2>
            <p className="mt-4 leading-7 text-ink/70">
              A live site for a fitness coach who needed one place to explain
              the business and send potential clients.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
            <PortfolioCard item={featuredProject} />
            <div className="grid gap-4">
              {projectNotes.map((note) => (
                <article key={note.title} className="border-t border-line pt-5" data-reveal="lift">
                  <h3 className="text-lg font-bold">{note.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/70">{note.detail}</p>
                </article>
              ))}
              <Link
                href={`/portfolio/${featuredProject.slug}`}
                className="mt-2 inline-flex w-fit border border-ink/20 px-5 py-3 text-sm font-bold hover:border-ink hover:bg-paper"
              >
                Read the case study
              </Link>
            </div>
          </div>
        </div>
      </section>

      {showPricing ? (
        <section className="section bg-cream" data-reveal="lift">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-3">
              {fallbackServices.map((plan, index) => (
                <ServiceCard key={plan.name} plan={plan} featured={index === 1} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section bg-paper" data-reveal="lift">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-moss">Working style</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              A simple process.
            </h2>
            <p className="mt-4 leading-7 text-ink/70">
              You will know what is being built, what it costs and what needs
              to happen before launch.
            </p>
          </div>
          <ol className="grid gap-px border border-line bg-line md:grid-cols-2">
            {processSteps.map((step, index) => (
              <li key={step} className="bg-paper p-6">
                <p className="font-display text-3xl font-semibold text-rust">
                  0{index + 1}
                </p>
                <p className="mt-3 font-bold">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-white" data-reveal="lift">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-moss">
              What you get
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              The bits around the website are handled too.
            </h2>
            <p className="mt-4 leading-7 text-ink/70">
              You do not need to know how to connect domains, choose hosting or
              wire up forms. I can sort the setup and explain what you need to
              know in plain English.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex bg-ink px-5 py-4 font-bold text-white hover:bg-rust"
            >
              View Services
            </Link>
          </div>
          <div className="grid border-t border-line sm:grid-cols-2">
            {ownershipFeatures.map((feature) => (
              <div
                key={feature}
                className="border-b border-line py-5 font-bold sm:odd:border-r sm:odd:pr-5 sm:even:pl-5"
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
