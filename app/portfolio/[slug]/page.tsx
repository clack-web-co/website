import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { fallbackPortfolio, getPortfolioItem } from "@/lib/contentful";
import { createPageMetadata } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return fallbackPortfolio.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = await getPortfolioItem(slug);
  if (!item) {
    return {
      title: "Project"
    };
  }

  return createPageMetadata({
    title: `${item.title} Website Project`,
    description: item.summary,
    path: `/portfolio/${item.slug}`
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const item = await getPortfolioItem(slug);
  if (!item) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Portfolio", path: "/portfolio" },
          { name: item.title, path: `/portfolio/${item.slug}` }
        ]}
      />
      <section className="section bg-cream">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-moss">{item.industry}</p>
          <h1 className="mt-4 font-display text-5xl font-semibold">{item.title}</h1>
          <p className="mt-5 text-lg leading-8 text-ink/70">{item.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="rounded bg-clay px-5 py-4 text-center font-bold text-white hover:bg-ink">
              Build Something Similar
            </Link>
            <a href={item.liveUrl} className="rounded border border-ink/20 px-5 py-4 text-center font-bold hover:border-ink">
              View Live Website
            </a>
          </div>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-soft sm:p-6">
          <div className="aspect-[16/10] rounded bg-gradient-to-br from-moss/20 via-cream to-clay/20 p-5">
            {item.previewImage ? (
              <div className="h-full overflow-hidden rounded border border-ink/10 bg-white shadow-soft">
                <div className="flex h-8 items-center gap-1.5 border-b border-line bg-cream px-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-clay/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-moss/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/25" />
                  <span className="ml-2 truncate text-[11px] font-semibold text-ink/45">
                    {item.liveUrl.replace(/^https?:\/\//, "")}
                  </span>
                </div>
                <Image
                  src={item.previewImage}
                  alt={`${item.title} homepage preview`}
                  width={1200}
                  height={800}
                  className="h-[calc(100%-2rem)] w-full object-cover object-top"
                  priority
                />
              </div>
            ) : (
              <div className="h-full rounded border border-ink/10 bg-white p-6">
                <div className="h-5 w-28 rounded bg-clay/30" />
                <div className="mt-6 h-10 w-2/3 rounded bg-ink" />
                <div className="mt-4 h-4 w-full rounded bg-ink/15" />
                <div className="mt-3 h-4 w-4/5 rounded bg-ink/15" />
                <div className="mt-10 grid grid-cols-3 gap-4">
                  <div className="h-24 rounded bg-moss/25" />
                  <div className="h-24 rounded bg-clay/20" />
                  <div className="h-24 rounded bg-ink/10" />
                </div>
              </div>
            )}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div>
              <h2 className="font-bold">Problem solved</h2>
              <p className="mt-2 text-sm leading-6 text-ink/70">{item.problem}</p>
            </div>
            <div>
              <h2 className="font-bold">Business result</h2>
              <p className="mt-2 text-sm leading-6 text-ink/70">{item.results}</p>
            </div>
          </div>
          <figure className="mt-8 rounded bg-cream p-5">
            <blockquote className="text-base leading-7 text-ink/75">
              &ldquo;{item.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm font-bold text-ink">
              {item.testimonial.author}
            </figcaption>
          </figure>
        </div>
        </div>
      </section>
    </>
  );
}
