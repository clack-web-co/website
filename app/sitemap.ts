import type { MetadataRoute } from "next";
import { pricingPageFlag } from "@/flags";
import { getPortfolioItems } from "@/lib/contentful";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [portfolioItems, showPricing] = await Promise.all([
    getPortfolioItems(),
    pricingPageFlag()
  ]);

  const paths = ["/", "/portfolio", "/about", "/contact"];
  if (showPricing) paths.push("/pricing");

  const staticPages = paths.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.7
  }));

  const portfolioPages = portfolioItems.map((item) => ({
    url: new URL(`/portfolio/${item.slug}`, siteConfig.url).toString(),
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  return [...staticPages, ...portfolioPages];
}
