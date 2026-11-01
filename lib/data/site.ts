import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_ROLE, SOCIAL_LINKS } from "@/lib/site";

export const site = {
  name: SITE_NAME,
  founder: AUTHOR_NAME,
  authorRole: AUTHOR_ROLE,
  title: "Abdul Kaiyum Sani | n8n Developer, Full Stack Dev & Growth Engineer",
  description:
    "Abdul Kaiyum Sani: n8n developer, full-stack dev and growth engineer. Fast websites, SEO content and automation for US law firms and local businesses.",
  // Canonical origin; see lib/site.ts.
  url: SITE_URL,
  email: "contact.sani@proton.me",
  whatsappNumber: "8801745947359",
  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
  bookCallLink: "/book-a-call",
  calendlyUrl: "https://calendly.com/nextgenitware/30min",
  get mailtoLink() {
    return `mailto:${this.email}`;
  },
  growminionUrl: "https://growminion.com/",
  github: SOCIAL_LINKS.github,
  socials: {
    linkedin: SOCIAL_LINKS.linkedin,
    facebook: SOCIAL_LINKS.facebook,
    whatsapp: "https://wa.me/8801745947359",
    email: "mailto:contact.sani@proton.me",
  },
  get sameAs() {
    return [this.socials.linkedin, this.socials.facebook, this.github];
  },
};
