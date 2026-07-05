export const site = {
  name: "SaniForge",
  founder: "Abdul Kalyum Sani",
  title: "SaniForge: Web Development, SEO Copywriting & n8n Automation",
  description:
    "I'm Abdul Kalyum Sani, a web developer, SEO content writer, and automation engineer at GrowMinion. I build fast websites, write content that ranks, and automate the repetitive work so businesses can scale faster.",
  url: "https://saniforge.com",
  email: "abdulkaiyumsani48@gmail.com",
  whatsappNumber: "8801745947359",
  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
  get bookCallLink() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(
      "Hi Abdul, I'd like to book a free 15-min call to talk about a project."
    )}`;
  },
  get mailtoLink() {
    return `mailto:${this.email}`;
  },
  growminionUrl: "https://growminion.com/",
  socials: {
    linkedin: "https://www.linkedin.com/in/sani48",
    facebook: "https://www.facebook.com/abdulkaiyum.sani.50",
    whatsapp: "https://wa.me/8801745947359",
    email: "mailto:abdulkaiyumsani48@gmail.com",
  },
  get sameAs() {
    return [this.socials.linkedin, this.socials.facebook, this.growminionUrl];
  },
};
