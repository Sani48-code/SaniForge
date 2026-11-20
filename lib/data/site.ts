import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_ROLE, SOCIAL_LINKS } from "@/lib/site";

export const site = {
  name: SITE_NAME,
  founder: AUTHOR_NAME,
  authorRole: AUTHOR_ROLE,
  // Homepage title. Leads with the brand so Google associates the site name with "SaniForge".
  title: "SaniForge | Web Development, SEO & n8n Automation Company",
  description:
    "SaniForge is a web development, SEO content and n8n automation company helping US law firms and local businesses turn visitors into booked calls.",
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
