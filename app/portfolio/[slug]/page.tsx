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
      <section className="section bg-paper" data-reveal="fade">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-reveal="lift">
            <p className="border-l-2 border-rust pl-4 text-sm font-bold uppercase tracking-[0.16em] text-moss">{item.industry}</p>
            <h1 className="mt-4 font-display text-5xl font-semibold">{item.title}</h1>
            <p className="mt-5 text-lg leading-8 text-ink/70">{item.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="bg-ink px-5 py-4 text-center font-bold text-white hover:bg-rust">
                Build Something Similar
              </Link>
              <a href={item.liveUrl} className="border border-ink/20 px-5 py-4 text-center font-bold hover:border-ink hover:bg-white">
                View Live Website
              </a>
            </div>
          </div>
          <div className="border border-line bg-white p-4 shadow-soft sm:p-6" data-reveal="lift">
            <div className="aspect-[16/10] bg-paper p-3">
              {item.previewImage ? (
                <div className="h-full overflow-hidden border border-ink/10 bg-white shadow-soft">
                  <Image
                    src={item.previewImage}
                    alt={`${item.title} homepage preview`}
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover object-top"
                    priority
                  />
                </div>
              ) : (
                <div className="h-full border border-ink/10 bg-white p-6">
                  <div className="h-5 w-28 bg-clay/30" />
                  <div className="mt-6 h-10 w-2/3 bg-ink" />
                  <div className="mt-4 h-4 w-full bg-ink/15" />
                  <div className="mt-3 h-4 w-4/5 bg-ink/15" />
                  <div className="mt-10 grid grid-cols-3 gap-4">
                    <div className="h-24 bg-moss/25" />
                    <div className="h-24 bg-clay/20" />
                    <div className="h-24 bg-ink/10" />
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
            <div className="mt-8 border-t border-line pt-6">
              <h2 className="font-bold">Work completed</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {item.services.map((service) => (
                  <li
                    key={service}
                    className="border-l-2 border-moss/50 pl-3 text-sm leading-6 text-ink/70"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <figure className="mt-8 border-l-2 border-rust bg-paper p-5">
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
