import Link from "next/link";
import Image from "next/image";
import type { PortfolioItem } from "@/lib/contentful";

type PortfolioCardProps = {
  item: PortfolioItem;
};

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <article className="overflow-hidden border border-line bg-white shadow-sm" data-reveal="lift">
      <div className="aspect-[4/3] bg-paper p-3">
        {item.previewImage ? (
          <div className="h-full overflow-hidden border border-ink/10 bg-white shadow-soft">
            <Image
              src={item.previewImage}
              alt={`${item.title} homepage preview`}
              width={1200}
              height={800}
              className="h-full w-full object-cover object-top"
            />
          </div>
        ) : (
          <div className="h-full border border-ink/10 bg-white p-5 shadow-soft">
            <div className="h-4 w-24 bg-clay/30" />
            <div className="mt-5 h-8 w-3/4 bg-ink/80" />
            <div className="mt-3 h-3 w-full bg-ink/15" />
            <div className="mt-2 h-3 w-5/6 bg-ink/15" />
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="h-16 bg-moss/25" />
              <div className="h-16 bg-clay/20" />
              <div className="h-16 bg-ink/10" />
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-moss">
          {item.industry}
        </p>
        <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-ink/70">{item.summary}</p>
        <Link
          href={`/portfolio/${item.slug}`}
          className="mt-5 inline-flex border border-ink/20 px-4 py-3 text-sm font-bold text-ink hover:border-ink hover:bg-paper"
        >
          View Project
        </Link>
        <p className="mt-4 border-l-2 border-rust bg-paper px-3 py-2 text-sm font-semibold text-ink">
          {item.results}
        </p>
        <figure className="mt-4 border-l-2 border-clay/60 pl-4">
          <blockquote className="text-sm leading-6 text-ink/70">
            &ldquo;{item.testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-ink/45">
            {item.testimonial.author}
          </figcaption>
        </figure>
      </div>
    </article>
  );
}
