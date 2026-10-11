export const BLOG_CATEGORIES = [
  "Web Development",
  "Automation",
  "SEO & Content",
  "SaaS & Systems",
  "Engineering Lessons",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
