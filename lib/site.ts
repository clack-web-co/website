import type { Metadata } from "next";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://side-proj.vercel.app";

export const siteConfig = {
  name: "Clack Web Co.",
  url: configuredSiteUrl.replace(/\/+$/, ""),
  description:
    "Professional, mobile-friendly websites for small businesses across North East England.",
  areaServed: "North East England"
};

export const allowSearchIndexing =
  process.env.VERCEL_ENV === undefined ||
  process.env.VERCEL_ENV === "production";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false
}: PageMetadataOptions): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
