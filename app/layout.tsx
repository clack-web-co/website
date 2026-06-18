import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
