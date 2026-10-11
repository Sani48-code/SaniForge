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

export const footerLinks = {
  pages: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
  ] as NavItem[],
  services: services.map((s) => ({
    label: s.label,
    href: `/services/${s.slug}`,
  })) as NavItem[],
};
