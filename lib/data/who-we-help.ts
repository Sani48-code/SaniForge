/**
 * "Who We Help" industry pages. Only real proof goes here: published case studies, live products
 * and client work already shown elsewhere on the site. No invented results or testimonials.
 */

export type IndustryIcon = "scale" | "home" | "building" | "rocket";
export type IndustryTone = "amber" | "blue" | "emerald" | "violet";

export type Industry = {
  slug: string;
  name: string;
  /** Short label for menus. */
  short: string;
  /** Plural phrase used inside sentences, e.g. "law firms". */
  audience: string;
  menuLine: string;
  icon: IndustryIcon;
  tone: IndustryTone;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  headline: { pre: string; highlight: string };
  intro: string;
  pains: { title: string; text: string }[];
  solutions: { title: string; text: string; service: string; serviceLabel: string }[];
  builds: string[];
  caseStudies: string[];
  /** Optional in-depth guide from the blog for this industry. */
  guide?: { href: string; title: string; text: string };
  proofNote: string;
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: "law-firms",
    name: "Law Firms",
    short: "Law Firms",
    audience: "law firms",
    menuLine: "Practice-area pages, legal content and intake automation",
    icon: "scale",
    tone: "amber",
    seoTitle: "Websites, SEO Content & Automation for Law Firms",
    seoDescription:
      "Law firm websites, practice-area pages that rank and n8n intake automation. Real results: top 3 Google rankings and 89 legal articles published in a month.",
    eyebrow: "For law firms",
    headline: { pre: "More Signed Cases From the Clients ", highlight: "Already Searching for You." },
    intro:
      "Prospective clients compare firms on Google before they ever call. We build fast law firm websites, write practice-area pages that answer their real questions, and automate intake so no enquiry waits overnight.",
    pains: [
      { title: "Practice pages that never rank", text: "Thin service pages stuck on page two or three while competitors take the calls." },
      { title: "No time to write", text: "Attorneys know the answers, but every article competes with billable work." },
      { title: "Slow intake follow-up", text: "Web enquiries sit in an inbox for hours, and the client signs with the firm that called first." },
      { title: "A dated website", text: "Slow on mobile and hard to trust, so visitors leave before they read anything." },
    ],
    solutions: [
      { title: "Practice-area pages that rank", text: "Built around the client's situation, real attorney answers, FAQ schema and local signals.", service: "copywriting", serviceLabel: "SEO copywriting" },
      { title: "Legal content at scale", text: "An n8n and AI pipeline that drafts, formats and stages articles for attorney review.", service: "n8n-automation", serviceLabel: "n8n automation" },
      { title: "Intake that answers in minutes", text: "Forms, calls and chats routed to the right person with an instant confirmation.", service: "lead-generation-ghl", serviceLabel: "Lead gen with GHL" },
      { title: "A fast, credible firm website", text: "Mobile-first, accessible and structured for search from the first line of code.", service: "web-development", serviceLabel: "Web development" },
    ],
    builds: ["Law firm websites", "Practice-area pages", "Attorney bio pages", "Legal blog content", "Intake forms and CRM", "Review and follow-up automation"],
    caseStudies: ["law-firm-service-pages", "ai-legal-content-automation"],
    guide: {
      href: "/blog/n8n-for-law-firms",
      title: "n8n for Law Firms: 5 Workflows for Intake, Follow-Up and Content",
      text: "The intake, follow-up, content, review and reporting workflows we build for firms, plus the confidentiality checks to include.",
    },
    proofNote: "Trusted by firms like Substance Law and Maana Law.",
    faqs: [
      { q: "Do you write content that is accurate for legal topics?", a: "Yes. Drafts are built from the firm's own answers and sources, include the right disclaimers, and an attorney approves every page before it goes live." },
      { q: "Can you work with our existing website?", a: "Yes. We can rewrite and restructure pages on your current site, or rebuild it if speed and structure are holding it back." },
      { q: "Which practice areas have you worked with?", a: "Intellectual property, personal injury, family, immigration and business law, among others. The approach is the same: answer the client's real questions better than anyone else." },
    ],
  },
  {
    slug: "home-services",
    name: "Home Services & Roofing",
    short: "Home Services",
    audience: "home service companies",
    menuLine: "Roofers, restoration and local trades",
    icon: "home",
    tone: "blue",
    seoTitle: "Websites & Lead Generation for Roofers and Home Services",
    seoDescription:
      "Fast, mobile-first websites, local SEO and automated follow-up for roofing, restoration and home service companies. One redesign tripled lead forms in 90 days.",
    eyebrow: "For home services & roofing",
    headline: { pre: "Turn Local Searches Into ", highlight: "Booked Jobs." },
    intro:
      "When a roof leaks or a pipe bursts, homeowners call whoever looks trustworthy and answers first. We build fast local websites, service-area pages and instant follow-up so you win more of those calls.",
    pains: [
      { title: "Ranking but not getting calls", text: "Traffic arrives, but a slow, cluttered mobile site sends it straight to a competitor." },
      { title: "One page for every service", text: "Roofing, siding and gutters crammed together, so none of them rank well." },
      { title: "Missed leads after hours", text: "Forms and missed calls wait until morning, and the job is gone by then." },
      { title: "No idea what works", text: "No call or form tracking, so marketing spend is a guess." },
    ],
    solutions: [
      { title: "A website built to get calls", text: "Click-to-call everywhere, short forms and load times under two seconds on mobile.", service: "web-development", serviceLabel: "Web development" },
      { title: "Service and area pages", text: "One focused page per service and city, written for homeowners and for Google.", service: "copywriting", serviceLabel: "SEO copywriting" },
      { title: "Instant lead follow-up", text: "Missed-call text back, form confirmations and job routing with GoHighLevel and n8n.", service: "lead-generation-ghl", serviceLabel: "Lead gen with GHL" },
      { title: "Tracking from day one", text: "Calls and form submissions measured so you know which pages bring in work.", service: "n8n-automation", serviceLabel: "n8n automation" },
    ],
    builds: ["Roofing and contractor websites", "Service-area pages", "Quote and booking forms", "Missed-call text back", "Review request automation", "Call and form tracking"],
    caseStudies: ["local-service-website-redesign"],
    proofNote: "Work includes Ohio Roof Masters and a local restoration company.",
    faqs: [
      { q: "How fast can a new site go live?", a: "A typical home service website redesign takes about six weeks, including moving your existing content and keeping your rankings." },
      { q: "Will a redesign hurt my Google rankings?", a: "Not when it is done carefully. We keep your URLs or redirect them, carry over what already ranks, and improve speed and structure." },
      { q: "Do you work with GoHighLevel?", a: "Yes. We set up funnels, pipelines and follow-up in GoHighLevel, and use n8n when you need custom connections." },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    short: "Real Estate",
    audience: "real estate teams",
    menuLine: "Agents, brokerages and property teams",
    icon: "building",
    tone: "emerald",
    seoTitle: "Real Estate Websites, Content & Lead Automation",
    seoDescription:
      "Real estate websites, neighborhood content and lead automation that responds in under two minutes. Built for agents, brokerages and property teams.",
    eyebrow: "For real estate",
    headline: { pre: "Answer Every Buyer and Seller ", highlight: "Before Your Competitors Do." },
    intro:
      "Real estate leads go cold in minutes. We build property and agent websites, write neighborhood content that ranks, and automate lead capture and routing so every enquiry gets a fast, personal reply.",
    pains: [
      { title: "Leads from everywhere", text: "Portals, ads, forms and referrals, all copied into the CRM by hand." },
      { title: "Slow first response", text: "Hours pass before a buyer hears back, and they have already toured with someone else." },
      { title: "A generic agent site", text: "Template pages that look like everyone else's and rank for nothing." },
      { title: "No local content", text: "Nothing that shows you know the neighborhoods buyers are searching for." },
    ],
    solutions: [
      { title: "One lead pipeline", text: "Every source flows into one system that removes duplicates, routes the lead and replies in minutes.", service: "n8n-automation", serviceLabel: "n8n automation" },
      { title: "A website that sells you", text: "Fast agent and listing pages with clear calls to action and IDX-ready structure.", service: "web-development", serviceLabel: "Web development" },
      { title: "Neighborhood and market content", text: "Area guides and market updates written for local buyers and sellers.", service: "blog-writing", serviceLabel: "Blog writing" },
      { title: "Nurture that keeps you top of mind", text: "Drip emails and texts in GoHighLevel for leads who are not ready yet.", service: "lead-generation-ghl", serviceLabel: "Lead gen with GHL" },
    ],
    builds: ["Agent and brokerage websites", "Listing and property pages", "Neighborhood guides", "Lead capture and routing", "CRM and drip campaigns", "Custom property dashboards"],
    caseStudies: ["lead-automation-pipeline"],
    proofNote: "The lead pipeline approach cut first response from 6.5 hours to under 2 minutes.",
    faqs: [
      { q: "Can you connect our lead sources to our CRM?", a: "Yes. We connect forms, ad platforms, email and most CRMs with n8n, so leads arrive cleaned, de-duplicated and assigned." },
      { q: "Do you build listing or property platforms?", a: "Yes. From a simple listings site to a custom property portal with search, saved homes and agent dashboards." },
      { q: "Can you write content for our local market?", a: "Yes. Neighborhood guides, market updates and buyer or seller resources, written around what people in your area search for." },
    ],
  },
  {
    slug: "saas-startups",
    name: "SaaS & Startups",
    short: "SaaS & Startups",
    audience: "SaaS teams and startups",
    menuLine: "MVPs, SaaS platforms, landing pages and content",
    icon: "rocket",
    tone: "violet",
    seoTitle: "SaaS Development, Landing Pages & Content for Startups",
    seoDescription:
      "We build SaaS products, web apps and CMS platforms from MVP to launch, plus landing pages and SEO content that convert. 2.4x demo bookings and 12/12 page-one articles.",
    eyebrow: "For SaaS & startups",
    headline: { pre: "From Idea to a Product ", highlight: "People Pay For." },
    intro:
      "We design and build SaaS products, web apps and custom CMS platforms in code, then help them grow with landing pages that convert and content that ranks. Three products are already live at GrowMinion.",
    pains: [
      { title: "An idea without a build team", text: "Freelancers for the front end, someone else for the API, and nobody owns the whole product." },
      { title: "Traffic that doesn't convert", text: "Visitors land on the homepage and leave without booking a demo." },
      { title: "A blog nobody reads", text: "Dozens of posts and almost no organic traffic or signups." },
      { title: "Tools that don't fit", text: "Paying per seat for software that only does half of what you need." },
    ],
    solutions: [
      { title: "SaaS and web apps built in code", text: "Auth, billing, dashboards, APIs and a SQL backend, from MVP to launch.", service: "saas-development", serviceLabel: "SaaS development" },
      { title: "Landing pages that convert", text: "A clear headline, real product screenshots, proof and one action.", service: "web-development", serviceLabel: "Web development" },
      { title: "SEO content that brings signups", text: "Keyword-cluster articles written to be the best answer for buyers.", service: "blog-writing", serviceLabel: "Blog writing" },
      { title: "Automation inside your product", text: "AI steps, integrations and workflows with n8n where they save real time.", service: "n8n-automation", serviceLabel: "n8n automation" },
    ],
    builds: ["SaaS MVPs and platforms", "Custom web apps", "Custom CMS and admin panels", "Landing pages", "SEO blog content", "AI features and integrations"],
    caseStudies: ["saas-landing-page-design", "seo-blog-content-series"],
    proofNote: "Helped build CraftMinion, RankDominator and MinionHR at GrowMinion.",
    faqs: [
      { q: "Can you build our whole product?", a: "Yes. Frontend, backend and database in one team, with the code and documentation handed over to you." },
      { q: "Do you build custom CMS platforms?", a: "Yes. When an off-the-shelf CMS doesn't fit, we build one around your content and workflow, with roles, drafts and publishing." },
      { q: "How long does an MVP take?", a: "It depends on scope. We start with the smallest product that proves the idea, usually a matter of weeks, then grow it on solid foundations." },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
