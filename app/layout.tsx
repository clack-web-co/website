import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pricingPageFlag } from "@/flags";

export const metadata: Metadata = {
  metadataBase: new URL("https://side-proj.vercel.app"),
  applicationName: "Clack Web Co.",
  title: {
    default: "Clack Web Co. | Professional Websites for Local Businesses",
    template: "%s | Clack Web Co."
  },
  description:
    "Professional, easy-to-manage websites for local businesses that need a polished online presence without the technical headache.",
  openGraph: {
    title: "Clack Web Co. | Professional Websites Made Simple",
    description:
      "A clear, trusted path to a better website for restaurants, salons, trades, shops, and local service businesses.",
    siteName: "Clack Web Co.",
    type: "website"
  }
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showPricing = await pricingPageFlag();

  return (
    <html lang="en">
      <body>
        <Header showPricing={showPricing} />
        <main>{children}</main>
        <Footer showPricing={showPricing} />
      </body>
    </html>
  );
}
