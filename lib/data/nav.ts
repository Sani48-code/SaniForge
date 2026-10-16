import { services } from "./services";

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

/** Personal "hire me" landing pages (see lib/data/keyword-pages.ts). */
export const hireLinks: NavItem[] = [
  { label: "n8n Developer", href: "/n8n-developer" },
  { label: "Full-Stack Developer", href: "/full-stack-developer" },
  { label: "Growth Engineer", href: "/growth-engineer" },
];

export const footerLinks = {
  pages: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Book a Call", href: "/book-a-call" },
  ] as NavItem[],
  hire: hireLinks,
  services: services.map((s) => ({
    label: s.label,
    href: `/services/${s.slug}`,
  })) as NavItem[],
};
