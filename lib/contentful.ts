import { createClient } from "contentful";

export type PortfolioItem = {
  title: string;
  slug: string;
  industry: string;
  summary: string;
  problem: string;
  results: string;
  services: string[];
  liveUrl: string;
  previewImage?: string;
  testimonial: {
    quote: string;
    author: string;
  };
};

export type ServicePlan = {
  name: string;
  description: string;
  price: string;
  features: string[];
};

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export const contentfulClient =
  space && accessToken
    ? createClient({
        space,
        accessToken
      })
    : null;

export const fallbackPortfolio: PortfolioItem[] = [
  {
    title: "Jude C Fitness",
    slug: "jude-c-fitness",
    industry: "Fitness coaching",
    summary:
      "A website for a fitness coach with service information and an enquiry route.",
    problem:
      "The business needed one place to send people instead of relying on social links.",
    results:
      "A live site with coaching information, contact details and a simple enquiry path.",
    services: [
      "Page structure",
      "Responsive website design",
      "Coaching enquiry route",
      "Website launch"
    ],
    liveUrl: "https://judecfitness.com",
    previewImage:
      "https://image.thum.io/get/width/1200/crop/800/https://judecfitness.com",
    testimonial: {
      quote:
        "Joe created a website that clearly showcases my new business and gives me a professional way to reach new clients.",
      author: "Jude C Fitness"
    }
  }
];

export const fallbackServices: ServicePlan[] = [
  {
    name: "Starter site",
    description: "A small website for businesses that need one clear place to send people.",
    price: "From £750",
    features: [
      "1-3 pages",
      "Key business information",
      "Mobile-friendly design",
      "Contact form and click-to-call details",
      "Basic analytics and search setup",
      "Launch support"
    ]
  },
  {
    name: "Business site",
    description: "A fuller website for businesses with more services, photos or proof to show.",
    price: "From £1,200",
    features: [
      "4-6 pages",
      "Clear service pages",
      "Portfolio or gallery section",
      "Testimonials or project examples",
      "Basic analytics and search setup",
      "Hosting setup and domain connection",
      "Launch support"
    ]
  },
  {
    name: "Larger site",
    description: "A more structured site for businesses with several services, locations or content needs.",
    price: "From £1,800",
    features: [
      "7+ pages",
      "More detailed page structure",
      "Booking or enquiry form setup",
      "Advanced forms",
      "Content management setup if needed",
      "Basic analytics and search setup",
      "Launch support"
    ]
  }
];

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  if (!contentfulClient) return fallbackPortfolio;

  const entries = await contentfulClient.getEntries({
    content_type: "portfolioItem",
    order: ["fields.displayOrder"]
  });

  return entries.items.map((entry) => ({
    title: String(entry.fields.title ?? "Untitled project"),
    slug: String(entry.fields.slug ?? ""),
    industry: String(entry.fields.industry ?? "Local business"),
    summary: "A website built to explain the business and make it easier to get in touch.",
    problem: "The business needed a clearer website.",
    results: String(entry.fields.results ?? "A simpler path from first visit to enquiry."),
    services: Array.isArray(entry.fields.services)
      ? entry.fields.services.map(String)
      : ["Website strategy", "Responsive design", "Launch support"],
    liveUrl: String(entry.fields.liveUrl ?? "#"),
    previewImage:
      typeof entry.fields.previewImage === "string" ? entry.fields.previewImage : undefined,
    testimonial: {
      quote: String(
        entry.fields.testimonialQuote ??
          "Client testimonial awaiting approval. This space is ready for signed-off project feedback."
      ),
      author: String(entry.fields.testimonialAuthor ?? entry.fields.title ?? "Client")
    }
  }));
}

export async function getPortfolioItem(slug: string): Promise<PortfolioItem | undefined> {
  const items = await getPortfolioItems();
  return items.find((item) => item.slug === slug);
}

export async function getServicePlans(): Promise<ServicePlan[]> {
  return fallbackServices;
}
