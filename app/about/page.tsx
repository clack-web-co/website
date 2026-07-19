import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About Joe Clack",
  description:
    "Meet Joe Clack, the North East web designer behind Clack Web Co.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "About", path: "/about" }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": `${siteConfig.url}/about/#joe-clack`,
          name: "Joe Clack",
          url: `${siteConfig.url}/about`,
          image: `${siteConfig.url}/images/joe-headshot.jpg`,
          worksFor: {
            "@id": `${siteConfig.url}/#organization`
          }
        }}
      />
      <section className="section bg-paper" data-reveal="fade">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal="lift">
            <div className="aspect-[4/5] overflow-hidden border border-line bg-white shadow-soft">
              <Image
                src="/images/joe-headshot.jpg"
                alt="Joe Clack"
                width={1200}
                height={1600}
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>
          </div>
          <div data-reveal="lift">
            <p className="border-l-2 border-rust pl-4 text-sm font-bold uppercase tracking-[0.16em] text-moss">About</p>
            <h1 className="mt-4 font-display text-5xl font-semibold">About Joe Clack.</h1>
            <div className="mt-6 grid gap-5 text-lg leading-8 text-ink/72">
              <p>
                I am based in North East England and work with business owners
                both in person and online.
              </p>
              <p>
                I build websites for small businesses that need a clearer,
                more professional online presence.
              </p>
              <p>
                That includes the page structure, design, build, contact forms,
                hosting setup and launch.
              </p>
              <p>
                You can work with me in person or online, and you deal with one
                person throughout the project.
              </p>
            </div>
            <div className="mt-8 border border-line bg-white p-6">
              <h2 className="text-xl font-bold">What I help with</h2>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-ink/75">
                <li>Planning the pages.</li>
                <li>Writing clear website copy.</li>
                <li>Designing and building the site.</li>
                <li>Launching it and making changes later.</li>
              </ul>
            </div>
            <Link href="/contact" className="mt-8 inline-flex bg-ink px-6 py-4 font-bold text-white hover:bg-rust">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
