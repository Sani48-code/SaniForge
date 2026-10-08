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
  services: [
    { label: "Web Development", href: "/#skills" },
    { label: "SEO Copywriting", href: "/#skills" },
    { label: "n8n Automation", href: "/#skills" },
  ],
};
