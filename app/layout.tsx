import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { pricingPageFlag } from "@/flags";
import { allowSearchIndexing, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: "Clack Web Co.",
  title: {
    default: "Web Design for North East Businesses | Clack Web Co.",
    template: "%s | Clack Web Co."
  },
  description: siteConfig.description,
  openGraph: {
    title: "Web Design for North East Businesses | Clack Web Co.",
    description: siteConfig.description,
    url: "/",
    siteName: "Clack Web Co.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design for North East Businesses | Clack Web Co.",
    description: siteConfig.description
  },
  robots: allowSearchIndexing
    ? {
        index: true,
        follow: true
      }
    : {
        index: false,
        follow: false,
        noarchive: true
      }
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showPricing = await pricingPageFlag();
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      founder: {
        "@type": "Person",
        name: "Joe Clack"
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: siteConfig.areaServed
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: {
        "@id": `${siteConfig.url}/#organization`
      }
    }
  ];

  return (
    <html lang="en">
      <body>
        <JsonLd data={structuredData} />
        <Header showPricing={showPricing} />
        <ScrollReveal />
        <main>{children}</main>
        <Footer showPricing={showPricing} />
        <Analytics />
      </body>
    </html>
  );
}
