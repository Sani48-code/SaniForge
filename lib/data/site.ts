export const site = {
  name: "SaniForge",
  founder: "Abdul Kalyum Sani",
  title: "SaniForge: Web Development, SEO Copywriting & n8n Automation",
  description:
    "I'm Abdul Kalyum Sani, a web developer, SEO content writer, and automation engineer at GrowMinion. I build fast websites, write content that ranks, and automate the repetitive work so businesses can scale faster.",
  url: "https://saniforge.com",
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
  socials: {
    linkedin: "https://www.linkedin.com/in/sani48",
    facebook: "https://www.facebook.com/abdulkaiyum.sani.50",
    whatsapp: "https://wa.me/8801745947359",
    email: "mailto:contact.sani@proton.me",
  },
  get sameAs() {
    return [this.socials.linkedin, this.socials.facebook, this.growminionUrl];
  },
};
