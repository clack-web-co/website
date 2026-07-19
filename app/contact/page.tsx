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
      <section className="section bg-paper" data-reveal="fade">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="border-l-2 border-rust pl-4 text-sm font-bold uppercase tracking-[0.16em] text-moss">Contact</p>
          <h1 className="mt-4 font-display text-5xl font-semibold">Tell me what you need.</h1>
          <p className="mt-5 text-lg leading-8 text-ink/70">
            I am based in North East England and available in person or online.
            Send a few details about the website you want and I will reply with
            the next step.
          </p>
          <p className="mt-4 max-w-2xl border-l-2 border-rust pl-4 text-base font-bold leading-7 text-ink">
            A simple enquiry is free and does not lock you into anything. If I
            am not the right fit, I will say so.
          </p>
          <div className="mt-8 border border-line bg-white p-6">
            <h2 className="font-bold">What happens next?</h2>
            <ol className="mt-4 grid gap-3 text-sm leading-6 text-ink/75">
              <li>1. I read your enquiry.</li>
              <li>2. We talk through the project.</li>
              <li>3. I send a scope, price, and timeline.</li>
            </ol>
          </div>
        </div>
        <ContactForm />
        </div>
      </section>
    </>
  );
}
