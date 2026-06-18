import { createClient } from "contentful";

export type PortfolioItem = {
  title: string;
  slug: string;
  industry: string;
  summary: string;
  problem: string;
  results: string;
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
      "A focused website for a fitness coach, giving potential clients a clear place to understand the offer and make contact.",
    problem:
      "The business needed a dedicated online presence that felt more professional than relying on scattered social links alone.",
    results:
      "A clearer first impression for prospective clients and a direct path to enquire about coaching.",
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
    description: "A sharp, credible website for businesses that need the essentials done properly.",
    price: "£500-£800",
    features: [
      "Professional homepage and key business information",
      "Mobile-friendly design",
      "Contact form and click-to-call details",
      "Basic search engine setup",
      "Launch support"
    ]
  },
  {
    name: "Professional",
    description: "A fuller site for businesses that want to show proof, services, and customer trust.",
    price: "£1,000-£1,500",
    features: [
      "Everything in Starter",
      "Portfolio or gallery section",
      "Testimonials and trust-building content",
      "Service pages written in plain language",
      "Simple training for content updates"
    ]
  },
  {
    name: "Premium",
    description: "A custom website for businesses that need booking, ecommerce, or advanced workflows.",
    price: "£2,000+",
    features: [
      "Everything in Professional",
      "Booking or ecommerce setup",
      "Advanced forms and customer flows",
      "Content management system setup",
      "Priority launch and support plan"
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
    summary: "A professional website designed to make the business easier to trust and contact.",
    problem: "The business needed a clearer, more credible online presence.",
    results: String(entry.fields.results ?? "A simpler path from first visit to enquiry."),
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
