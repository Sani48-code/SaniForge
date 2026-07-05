export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
];

export const footerLinks = {
  pages: [
    { label: "About", href: "/#about" },
    { label: "Work", href: "/#work" },
    { label: "Contact", href: "/#contact" },
    { label: "Blog", href: "/blog" },
  ] as NavItem[],
  services: [
    { label: "Web Development", href: "/skills#web-development" },
    { label: "SEO Copywriting", href: "/skills#seo-copywriting" },
    { label: "n8n Automation", href: "/skills#n8n-automation" },
  ],
};
