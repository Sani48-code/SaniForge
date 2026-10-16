export const site = {
  name: "SaniForge",
  founder: "Abdul Kaiyum Sani",
  authorRole: "n8n Developer, Full-Stack Developer & Growth Engineer",
  title: "n8n Developer, Full Stack Dev & Growth Engineer | SaniForge",
  description:
    "Abdul Kaiyum Sani is an n8n developer, full-stack dev and growth engineer. Fast websites, SEO content and automations for US law firms and local businesses.",
  // Canonical origin for metadata, sitemap and JSON-LD. Set NEXT_PUBLIC_SITE_URL when the custom domain goes live.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://saniforge.vercel.app").replace(/\/+$/, ""),
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
  github: "https://github.com/Sani48-code",
  socials: {
    linkedin: "https://www.linkedin.com/in/sani48",
    facebook: "https://www.facebook.com/abdulkaiyum.sani.50",
    whatsapp: "https://wa.me/8801745947359",
    email: "mailto:contact.sani@proton.me",
  },
  get sameAs() {
    return [this.socials.linkedin, this.socials.facebook, this.github];
  },
};
