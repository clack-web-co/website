import type { MetadataRoute } from "next";
import { allowSearchIndexing, siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!allowSearchIndexing) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/"
      }
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url
  };
}
