import type { ServicePlan } from "@/lib/contentful";

type ServiceCardProps = {
  plan: ServicePlan;
  featured?: boolean;
};

export default function ServiceCard({ plan, featured = false }: ServiceCardProps) {
  return (
    <article
      className={`rounded-lg border p-6 ${
        featured
          ? "border-clay bg-white shadow-soft"
          : "border-line bg-white/75 shadow-sm"
      }`}
    >
      {featured ? (
        <p className="mb-4 inline-flex rounded bg-clay px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
          Most popular
        </p>
      ) : null}
      <h3 className="text-2xl font-bold">{plan.name}</h3>
      <p className="mt-3 text-sm leading-6 text-ink/70">{plan.description}</p>
      <p className="mt-6 font-display text-4xl font-semibold">{plan.price}</p>
      <ul className="mt-6 grid gap-3 text-sm text-ink/80">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-moss" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
