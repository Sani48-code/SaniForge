import { services } from "./services";

export type NavItem = {
  label: string;
  href: string;
};

/** Plain top-level links. The logo links home, so there is no "Home" item. */
export const navItems: NavItem[] = [
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

/** The "Work" dropdown merges the two portfolio pages. */
export const workLinks: (NavItem & { description: string })[] = [
  { label: "Case Studies", href: "/case-studies", description: "Real projects with before and after numbers" },
  { label: "Projects", href: "/projects", description: "SaaS products, web apps and writing samples" },
];

/** Personal "hire us" landing pages (see lib/data/keyword-pages.ts). */
export const hireLinks: NavItem[] = [
  { label: "n8n Developer", href: "/n8n-developer" },
  { label: "Full-Stack Developer", href: "/full-stack-developer" },
  { label: "Growth Engineer", href: "/growth-engineer" },
];

export const footerLinks = {
  pages: [
    { label: "Home", href: "/" },
    { label: "About SaniForge", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Who We Help", href: "/who-we-help" },
    { label: "Blog", href: "/blog" },
    { label: "Book a Call", href: "/book-a-call" },
  ] as NavItem[],
  hire: hireLinks,
  services: services.map((s) => ({
    label: s.label,
    href: `/services/${s.slug}`,
  })) as NavItem[],
};
