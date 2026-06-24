import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ContactForm from "@/components/ContactForm";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Request a free website consultation with Clack Web Co., based in North East England.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Contact", path: "/contact" }]} />
      <section className="section bg-cream">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">Contact</p>
          <h1 className="mt-4 font-display text-5xl font-semibold">Take the easy first step.</h1>
          <p className="mt-5 text-lg leading-8 text-ink/70">
            I am based in North East England and available in person or online.
            Tell me a little about your business and what you need, and I will
            reply with a clear recommendation and expected timeline.
          </p>
          <div className="mt-8 rounded-lg border border-line bg-white p-6">
            <h2 className="font-bold">What happens next?</h2>
            <ol className="mt-4 grid gap-3 text-sm leading-6 text-ink/75">
              <li>1. I review your business and current online presence.</li>
              <li>2. We discuss the outcome your website needs to support.</li>
              <li>3. You receive a straightforward scope, price, and timeline.</li>
            </ol>
          </div>
        </div>
        <ContactForm />
        </div>
      </section>
    </>
  );
}
