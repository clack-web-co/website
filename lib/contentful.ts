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
    name: "Starter",
    description: "A small website for businesses that need the basics covered.",
    price: "£500-£800",
    features: [
      "Homepage and key business information",
      "Mobile-friendly design",
      "Contact form and click-to-call details",
      "Basic search engine setup",
      "Hosting and domain guidance",
      "Launch support"
    ]
  },
  {
    name: "Professional",
    description: "A larger site for businesses with more services, photos or project work to show.",
    price: "£1,000-£1,500",
    features: [
      "Everything in Starter",
      "Portfolio or gallery section",
      "Testimonials or project examples",
      "Service pages written in plain language",
      "Hosting setup and domain connection",
      "Simple handover for content updates"
    ]
  },
  {
    name: "Premium",
    description: "A custom website for businesses that need booking, ecommerce, or more complex forms.",
    price: "£2,000+",
    features: [
      "Everything in Professional",
      "Booking or ecommerce setup",
      "Advanced forms",
      "Content management system setup",
      "Maintenance and updates",
      "Launch and support plan"
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
