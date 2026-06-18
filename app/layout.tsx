import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://side-proj.vercel.app"),
  title: {
    default: "Professional Websites for Small Local Businesses",
    template: "%s | Small Business Website Builder"
  },
  description:
    "Professional, easy-to-manage websites for local businesses that need a polished online presence without the technical headache.",
  openGraph: {
    title: "Professional Websites Made Simple",
    description:
      "A clear, trusted path to a better website for restaurants, salons, trades, shops, and local service businesses.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
