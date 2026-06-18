import type { Metadata } from "next";

export const siteConfig = {
  name: "Clack Web Co.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://side-proj.vercel.app",
  description:
    "Professional, mobile-friendly websites for small businesses across North East England.",
  areaServed: "North East England"
};

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
