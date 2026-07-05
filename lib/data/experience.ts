export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Core Team Member & Web/Automation Engineer",
    org: "GrowMinion",
    period: "2024 to Present",
    description:
      "Building client websites, SEO content systems, and n8n automation pipelines; helped build 3 internal SaaS products used to scale content and rank-tracking for local businesses.",
  },
  {
    role: "Founder",
    org: "SaniForge",
    period: "2023 to Present",
    description:
      "Personal practice covering web development, SEO copywriting, and automation for businesses across the US.",
  },
  {
    role: "Started with SEO Copywriting",
    org: "Freelance",
    period: "2023",
    description:
      "Began writing keyword-researched service pages for law firms, home service companies, and real estate businesses.",
  },
];

export const aboutBio = {
  paragraphs: [
    "I'm the founder of SaniForge and also a core team member at GrowMinion, a digital growth agency, working as a Web and Automation Engineer helping run the technical side of client work for businesses across the US.",
    "At GrowMinion, I've helped build three AI-powered SaaS products: CraftMinion, an AI content engine for local SEO; RankDominator, a local GeoGrid SEO rank-tracking dashboard; and GrowForge, an AI-powered legal SEO content system.",
    "Outside of product work, I've written and published dozens of SEO blogs, service pages, and landing pages for clients, many of which now rank on page one of Google.",
    "What ties it together is full-stack capability: MERN stack development, SEO content strategy, and n8n workflow automation combined into one system, instead of three separate vendors.",
  ],
  closing:
    "Every project ships to move a real number: leads, rankings, time saved, deals closed.",
};
