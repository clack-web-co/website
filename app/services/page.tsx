import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Web Design Services in North East England",
  description:
    "Professional website design, redesigns, booking forms, contact forms and ongoing support for North East small businesses.",
  path: "/services"
});

const services = [
  {
    name: "Small business websites",
    description:
      "A website with the main pages your business needs: home, services, about and contact."
  },
  {
    name: "Website redesigns",
    description:
      "Updates for a site that looks old, reads badly, or does not work well on phones."
  },
  {
    name: "Booking and enquiry forms",
    description:
      "Simple booking, enquiry and contact routes set up around how people get in touch."
  },
  {
    name: "Ongoing website support",
    description:
      "Help with edits, new pages and fixes after the site is live."
  }
];

const included = [
  {
    name: "Secure website setup",
    description:
      "HTTPS, form handling and basic privacy setup included."
  },
  {
    name: "Domain management",
    description:
      "I can help choose, connect and manage your domain name, including the DNS settings that usually trip people up."
  },
  {
    name: "Managed hosting",
    description:
      "Hosting and deployment set up so you do not need to manage servers."
  },
  {
    name: "Maintenance and updates",
    description:
      "Content changes, new sections, fixes and small improvements after launch."
  },
  {
    name: "Backups and recovery route",
    description:
      "The project is kept in version control so changes can be tracked."
  },
  {
    name: "Search and analytics basics",
    description:
      "Page titles, descriptions, sitemap setup and analytics guidance."
  }
];

const process = [
  {
    name: "Understand the business",
    description:
      "We go through what pages you need and what content you already have."
  },
  {
    name: "Shape the content and design",
    description:
      "I organise the page structure and design the site."
  },
  {
    name: "Build and test",
    description:
      "The site is built for phones, tablets and larger screens."
  },
  {
    name: "Launch and support",
    description:
      "I handle launch and can help with changes after it is live."
  }
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Services", path: "/services" }]} />
      <section className="section bg-paper">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="border-l-2 border-rust pl-4 text-sm font-bold uppercase tracking-[0.16em] text-moss">
              Web design services
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold">
              Websites, redesigns and support.
            </h1>
          </div>
          <p className="text-lg leading-8 text-ink/70">
            If your current site is missing, dated, hard to update or not
            explaining the business properly, I can help sort it.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-moss">
              Website services
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              What I can help with.
            </h2>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
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

      <section className="section bg-white pt-0">
        <div className="container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-moss">
              Handled for you
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              Setup included.
            </h2>
            <p className="mt-4 leading-7 text-ink/70">
              The practical work matters. I can help with domains, hosting,
              forms, search basics, updates and launch.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {included.map((item) => (
              <article key={item.name} className="border border-line bg-white p-5">
                <h3 className="font-bold">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-moss">
              The process
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              How the work usually runs.
            </h2>
          </div>
          <ol className="grid gap-8 sm:grid-cols-2">
            {process.map((step, index) => (
              <li key={step.name} className="border-t border-line pt-5">
                <p className="font-display text-3xl font-semibold text-rust">0{index + 1}</p>
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
              Tell me what you need built.
            </h2>
            <p className="mt-3 text-white/70">
              I will reply with the next step, price range and likely timeline.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-white px-6 py-4 font-bold text-ink hover:bg-paper"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
