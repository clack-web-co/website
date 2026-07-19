import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ContactForm from "@/components/ContactForm";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Send a free 30-second website project enquiry to Clack Web Co., based in North East England.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Contact", path: "/contact" }]} />
      <section className="bg-paper pb-14 pt-8 md:pb-20 md:pt-12 lg:pb-24 lg:pt-14" data-reveal="fade">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="border-l-2 border-rust pl-4 text-sm font-bold uppercase tracking-[0.16em] text-moss">Contact</p>
            <h1 className="mt-4 font-display text-5xl font-semibold">Tell me about your website.</h1>
            <p className="mt-5 border-l-2 border-rust pl-4 text-base font-bold leading-7 text-ink">
              The enquiry is free and does not lock you into anything. If I am
              not the right fit, I will say so.
            </p>
          </div>
          <ContactForm />
          <div className="border border-line bg-white p-6 lg:col-span-2">
            <h2 className="font-bold">What happens next?</h2>
            <ol className="mt-4 grid gap-3 text-sm leading-6 text-ink/75 md:grid-cols-3">
              <li>1. I read your enquiry.</li>
              <li>2. I reply with whether I can help.</li>
              <li>3. If it makes sense, we talk through scope, price, and timeline.</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
