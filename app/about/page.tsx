import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Joe Clack, the person behind Clack Web Co."
};

export default function AboutPage() {
  return (
    <section className="section bg-cream">
      <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="aspect-[4/5] overflow-hidden rounded-lg bg-white shadow-soft">
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
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">About</p>
          <h1 className="mt-4 font-display text-5xl font-semibold">Every business deserves a great website.</h1>
          <div className="mt-6 grid gap-5 text-lg leading-8 text-ink/72">
            <p>
              I started this because local business owners often have the same
              problem: they are excellent at serving customers, but their website
              does not reflect the quality of the business.
            </p>
            <p>
              My job is to make the web side simpler. That means clear messaging,
              strong design, mobile-friendly pages, and a practical setup that
              does not leave you stuck managing technical details.
            </p>
            <p>
              Compared with DIY website builders, you get a site shaped around
              your business, your customers, and the actions that matter: calls,
              bookings, enquiries, and trust.
            </p>
          </div>
          <div className="mt-8 rounded-lg border border-line bg-white p-6">
            <h2 className="text-xl font-bold">Why choose this over doing it yourself?</h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-ink/75">
              <li>Clear guidance from first idea to launch.</li>
              <li>Professional design without a template-heavy feel.</li>
              <li>Plain-language content focused on customer decisions.</li>
              <li>Support options when the site needs to change later.</li>
            </ul>
          </div>
          <Link href="/contact" className="mt-8 inline-flex rounded bg-clay px-6 py-4 font-bold text-white hover:bg-ink">
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
