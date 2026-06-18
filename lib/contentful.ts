import { createClient } from "contentful";

export type PortfolioItem = {
  title: string;
  slug: string;
  industry: string;
  summary: string;
  problem: string;
  results: string;
  liveUrl: string;
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
    title: "Harbour Table",
    slug: "harbour-table",
    industry: "Restaurant",
    summary: "A cleaner website for menus, opening hours, bookings, and local search.",
    problem: "The restaurant relied on social posts and outdated menu PDFs.",
    results: "More booking enquiries and fewer phone calls asking basic questions.",
    liveUrl: "#"
  },
  {
    title: "Elm & Ivy Studio",
    slug: "elm-ivy-studio",
    industry: "Salon",
    summary: "A calm, premium site that highlights services, reviews, and appointment booking.",
    problem: "The salon looked established in person but inconsistent online.",
    results: "A stronger first impression and clearer path to book appointments.",
    liveUrl: "#"
  },
  {
    title: "Northline Plumbing",
    slug: "northline-plumbing",
    industry: "Trades",
    summary: "A trust-focused service site built around emergency calls and quote requests.",
    problem: "Customers could not quickly see service areas, credentials, or phone details.",
    results: "Higher-quality enquiries from customers in the right service area.",
    liveUrl: "#"
  },
  {
    title: "Kindred Physio",
    slug: "kindred-physio",
    industry: "Health",
    summary: "A simple patient-friendly website explaining treatments and next steps.",
    problem: "The old site used clinical language and buried appointment information.",
    results: "Clearer patient journey from symptom research to booking.",
    liveUrl: "#"
  },
  {
    title: "Marlow Home Goods",
    slug: "marlow-home-goods",
    industry: "Retail",
    summary: "A polished local shop presence with seasonal collections and visit details.",
    problem: "The business needed a professional web presence without full ecommerce complexity.",
    results: "Better visibility for new customers discovering the shop online.",
    liveUrl: "#"
  },
  {
    title: "Oak Yard Landscaping",
    slug: "oak-yard-landscaping",
    industry: "Home Services",
    summary: "A project-led website showing transformations, services, and quote requests.",
    problem: "Great project photos were scattered across messages and social media.",
    results: "More confident enquiries backed by visible examples of finished work.",
    liveUrl: "#"
  }
];

export const fallbackServices: ServicePlan[] = [
  {
    name: "Starter",
    description: "A sharp, credible website for businesses that need the essentials done properly.",
    price: "$500-800",
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
    price: "$1,000-1,500",
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
    price: "$2,000+",
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
    liveUrl: String(entry.fields.liveUrl ?? "#")
  }));
}

export async function getPortfolioItem(slug: string): Promise<PortfolioItem | undefined> {
  const items = await getPortfolioItems();
  return items.find((item) => item.slug === slug);
}

export async function getServicePlans(): Promise<ServicePlan[]> {
  return fallbackServices;
}
