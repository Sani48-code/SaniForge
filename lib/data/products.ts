export type Product = {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  highlights: string[];
  whatItDoes: string[];
};

export const products: Product[] = [
  {
    id: "craftminion",
    name: "CraftMinion",
    tagline: "An AI content engine for local SEO",
    badge: "SaaS Product · GrowMinion",
    description:
      "An AI content engine for local SEO. Generates fully-optimized location and service pages and publishes directly to WordPress in one click.",
    highlights: ["AI page generation", "One-click WordPress publish", "Local SEO structure built-in"],
    whatItDoes: [
      "Generates location and service pages from a structured data input (spreadsheet or database)",
      "Drafts every page with an engineered prompt template that enforces voice, structure, and SEO requirements",
      "Applies on-page SEO formatting automatically: headers, internal links, schema, and topic-matched images",
      "Publishes directly to WordPress via the REST API, either straight to live or into a human review queue",
      "Scales to dozens of pages a month without adding writer headcount",
    ],
  },
  {
    id: "rankdominator",
    name: "RankDominator",
    tagline: "A local SEO GeoGrid rank-tracking dashboard",
    badge: "SaaS Product · GrowMinion",
    description:
      "A local SEO GeoGrid rank-tracking dashboard. See exactly where a business ranks block by block, plus white-label reporting.",
    highlights: ["Block-by-block GeoGrid tracking", "White-label reports", "Multi-location dashboards"],
    whatItDoes: [
      "Tracks Google rankings on a block-by-block GeoGrid instead of a single average position",
      "Generates white-label, branded PDF reports ready to send straight to clients",
      "Supports multi-location dashboards for agencies managing rankings across many businesses at once",
      "Charts historical ranking trends over time to show real movement, not just a snapshot",
      "Surfaces competitor rank comparisons for the same target keywords and grid points",
    ],
  },
  {
    id: "growforge",
    name: "GrowForge",
    tagline: "An AI-powered legal SEO content system",
    badge: "SaaS Product · GrowMinion",
    description:
      "An AI-powered legal SEO content system built with a 4-phase content pipeline for law firm content at scale.",
    highlights: ["4-phase content pipeline", "Built for legal SEO", "Scales practice-area content"],
    whatItDoes: [
      "Runs a 4-phase pipeline (research, draft, format, publish) purpose-built for law firm content",
      "Applies LegalService and Attorney schema markup automatically on every practice-area page",
      "Structures pages around real client questions instead of generic legal boilerplate",
      "Scales practice-area content across multiple offices and service areas from one system",
      "Keeps a human review gate in place before anything goes live, given the legal accuracy bar",
    ],
  },
];
