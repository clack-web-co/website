import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Web Design Services in North East England",
  description:
    "Professional website design, redesigns, booking and ecommerce setup, and ongoing support for North East small businesses.",
  path: "/services"
});

const services = [
  {
    name: "Small business websites",
    description:
      "A clear, credible website that explains what you do, builds trust and gives customers an obvious way to contact you."
  },
  {
    name: "Website redesigns",
    description:
      "A practical refresh for an outdated or unclear website, with stronger messaging, mobile usability and customer journeys."
  },
  {
    name: "Booking and ecommerce",
    description:
      "Booking, payment and online shop features shaped around how your customers actually buy or arrange your services."
  },
  {
    name: "Ongoing website support",
    description:
      "Straightforward help with content changes, new pages and improvements after launch, without technical jargon."
  }
];

const process = [
  {
    name: "Understand the business",
    description:
      "We discuss your customers, your current online presence and the action the website needs visitors to take."
  },
  {
    name: "Shape the content and design",
    description:
      "I organise the message and page structure, then create a professional design suited to your business."
  },
  {
    name: "Build and test",
    description:
      "The site is built for phones and larger screens, then checked for usability, accessibility and performance."
  },
  {
    name: "Launch and support",
    description:
      "I handle the launch and provide a clear route for updates or future improvements."
  }
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Services", path: "/services" }]} />
      <section className="section bg-cream">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">
              Web design services
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold">
              Professional websites for North East small businesses.
            </h1>
          </div>
          <p className="text-lg leading-8 text-ink/70">
            Based in North East England, I work with business owners in person
            and online to create websites that are easier to trust, understand
            and act on.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
            {services.map((service) => (
              <article key={service.name} className="bg-white p-7 sm:p-8">
                <h2 className="text-xl font-bold">{service.name}</h2>
                <p className="mt-3 leading-7 text-ink/70">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">
              The process
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              A straightforward route from idea to launch.
            </h2>
          </div>
          <ol className="grid gap-8 sm:grid-cols-2">
            {process.map((step, index) => (
              <li key={step.name} className="border-t border-line pt-5">
                <p className="text-sm font-bold text-clay">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-bold">{step.name}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-ink text-white">
        <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-4xl font-semibold">
              Tell me what your website needs to achieve.
            </h2>
            <p className="mt-3 text-white/70">
              You will get a clear recommendation, scope and next step.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded bg-white px-6 py-4 font-bold text-ink hover:bg-cream"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
