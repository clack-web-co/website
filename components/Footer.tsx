import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/60">
            Clack Web Co.
          </p>
          <h2 className="mt-3 max-w-sm font-display text-3xl">
            Professional websites made simple for local businesses.
          </h2>
        </div>
        <div>
          <p className="font-bold">Pages</p>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="font-bold">Next step</p>
          <p className="mt-4 text-sm leading-6 text-white/70">
            Tell me what your business needs and I will reply with a clear path,
            timeline, and price range.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded bg-white px-4 py-3 text-sm font-bold text-ink"
          >
            Request a Consultation
          </Link>
        </div>
      </div>
    </footer>
  );
}
