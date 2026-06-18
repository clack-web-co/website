import Link from "next/link";
import Image from "next/image";
import type { PortfolioItem } from "@/lib/contentful";

type PortfolioCardProps = {
  item: PortfolioItem;
};

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-line bg-white shadow-sm">
      <div className="aspect-[4/3] bg-gradient-to-br from-moss/20 via-cream to-clay/20 p-4">
        {item.previewImage ? (
          <div className="h-full overflow-hidden rounded border border-ink/10 bg-white shadow-soft">
            <div className="flex h-7 items-center gap-1.5 border-b border-line bg-cream px-3">
              <span className="h-2.5 w-2.5 rounded-full bg-clay/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-moss/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/25" />
              <span className="ml-2 truncate text-[10px] font-semibold text-ink/45">
                {item.liveUrl.replace(/^https?:\/\//, "")}
              </span>
            </div>
            <Image
              src={item.previewImage}
              alt={`${item.title} homepage preview`}
              width={1200}
              height={800}
              className="h-[calc(100%-1.75rem)] w-full object-cover object-top"
            />
          </div>
        ) : (
          <div className="h-full rounded border border-ink/10 bg-white p-5 shadow-soft">
            <div className="h-4 w-24 rounded bg-clay/30" />
            <div className="mt-5 h-8 w-3/4 rounded bg-ink/80" />
            <div className="mt-3 h-3 w-full rounded bg-ink/15" />
            <div className="mt-2 h-3 w-5/6 rounded bg-ink/15" />
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="h-16 rounded bg-moss/25" />
              <div className="h-16 rounded bg-clay/20" />
              <div className="h-16 rounded bg-ink/10" />
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
        <p className="mt-4 rounded bg-cream px-3 py-2 text-sm font-semibold text-ink">
          {item.results}
        </p>
        <Link
          href={`/portfolio/${item.slug}`}
          className="mt-5 inline-flex text-sm font-bold text-clay hover:text-ink"
        >
          View project
        </Link>
      </div>
    </article>
  );
}
