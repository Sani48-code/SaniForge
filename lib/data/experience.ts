export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Web Developer & Automation Engineer",
    org: "GrowMinion",
    period: "2024 — Present",
    description:
      "Building client websites, SEO content systems, and n8n automation pipelines; co-built 3 internal SaaS products used to scale content and rank-tracking for local businesses.",
  },
  {
    role: "Founder",
    org: "SaniForge",
    period: "2023 — Present",
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
    "I'm the founder of SaniForge and work at GrowMinion as a web developer and automation engineer, where I help run the technical side of a digital marketing agency serving businesses across the US.",
    "At GrowMinion, I've helped build three AI-powered SaaS products: CraftMinion, an AI content engine for local SEO; RankDominator, a local GeoGrid SEO rank-tracking dashboard; and GrowForge, an AI-powered legal SEO content system.",
    "Outside of product work, I've written and published dozens of SEO blogs, service pages, and landing pages for clients — many of which now rank on page one of Google.",
    "What ties it together is full-stack capability: MERN stack development, SEO content strategy, and n8n workflow automation combined into one system, instead of three separate vendors.",
  ],
  closing:
    "Every project ships to move a real number — leads, rankings, time saved, deals closed.",
};
