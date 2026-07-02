export type SkillPillar = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  tools: string[];
};

export const skillPillars: SkillPillar[] = [
  {
    id: "web-development",
    title: "Web Development",
    tagline: "Fast, modern sites that hold up under real traffic",
    description:
      "Custom-built websites and applications on the MERN stack and WordPress, engineered for speed, structure, and clean on-page SEO from day one.",
    bullets: [
      "Custom responsive websites & landing pages",
      "MERN stack applications",
      "WordPress sites, redesigns & speed optimization",
      "Basic on-page SEO & Core Web Vitals setup",
      "Ongoing maintenance",
    ],
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind",
      "HTML/CSS/JS",
      "WordPress",
    ],
  },
  {
    id: "seo-copywriting",
    title: "SEO Copywriting",
    tagline: "Content built to rank, not just to read",
    description:
      "Keyword-researched blogs, service pages, and briefs that have shipped for 20+ businesses across legal, real estate, healthcare, home services, and finance — many landing on Google's first page.",
    bullets: [
      "SEO-optimized blogs & articles",
      "Service page copywriting",
      "Keyword-researched content briefs",
      "On-page SEO & schema markup",
      "Content shipped for 20+ businesses",
    ],
    tools: ["ChatGPT", "Claude", "SurferSEO", "Ahrefs", "Grammarly", "Notion"],
  },
  {
    id: "n8n-automation",
    title: "n8n Automation",
    tagline: "Systems that do the repetitive work for you",
    description:
      "Workflow automation that connects lead capture, CRMs, and AI content pipelines so businesses stop losing hours to manual, repeatable tasks.",
    bullets: [
      "Workflow automation",
      "Lead capture & CRM automation",
      "AI-powered content pipelines",
      "Tool integrations (Sheets, Gmail, Slack, APIs)",
      "Process automation consulting",
    ],
    tools: [
      "n8n",
      "OpenAI API",
      "Google Sheets",
      "Gmail",
      "Slack",
      "Webhooks",
      "WordPress REST API",
    ],
  },
];
