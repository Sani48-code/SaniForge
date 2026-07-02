export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  pages: navItems,
  services: [
    { label: "Web Development", href: "/skills#web-development" },
    { label: "SEO Copywriting", href: "/skills#seo-copywriting" },
    { label: "n8n Automation", href: "/skills#n8n-automation" },
  ],
};
