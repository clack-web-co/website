import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-paper py-6 md:py-10" data-reveal="fade">
      <div className="container max-w-2xl">
        <p className="border-l-2 border-rust pl-4 text-sm font-bold uppercase tracking-[0.16em] text-moss">
          404
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-6xl">
          Page not found.
        </h1>
        <p className="mt-5 text-lg leading-8 text-ink/70">
          The page may have moved, or the link may be wrong. You can head back
          to the main site or send an enquiry if you were looking for help with
          a website.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="bg-ink px-6 py-4 text-center font-bold text-white transition hover:bg-rust"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="border border-ink/20 bg-white px-6 py-4 text-center font-bold text-ink transition hover:border-ink"
          >
            Start an Enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
