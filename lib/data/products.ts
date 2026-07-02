export type Product = {
  id: string;
  name: string;
  badge: string;
  description: string;
  highlights: string[];
};

export const products: Product[] = [
  {
    id: "craftminion",
    name: "CraftMinion",
    badge: "SaaS Product · GrowMinion",
    description:
      "An AI content engine for local SEO. Generates fully-optimized location and service pages and publishes directly to WordPress in one click.",
    highlights: ["AI page generation", "One-click WordPress publish", "Local SEO structure built-in"],
  },
  {
    id: "rankdominator",
    name: "RankDominator",
    badge: "SaaS Product · GrowMinion",
    description:
      "A local SEO GeoGrid rank-tracking dashboard. See exactly where a business ranks block by block, plus white-label reporting.",
    highlights: ["Block-by-block GeoGrid tracking", "White-label reports", "Multi-location dashboards"],
  },
  {
    id: "growforge",
    name: "GrowForge",
    badge: "SaaS Product · GrowMinion",
    description:
      "An AI-powered legal SEO content system built with a 4-phase content pipeline for law firm content at scale.",
    highlights: ["4-phase content pipeline", "Built for legal SEO", "Scales practice-area content"],
  },
];
