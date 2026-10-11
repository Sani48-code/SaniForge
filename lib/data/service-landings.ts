import { services, type ServiceSlug } from "@/lib/data/services";
import { bw } from "@/lib/data/blog-writing-page";

/**
 * Landing-page content for each /services/[slug] page.
 * Rules used for all copy: first person, only claims backed by the portfolio (SEO copywriting since 2023,
 * 20+ businesses, real engineering work at Growminion, listed projects), no testimonials, no invented
 * metrics, no pricing or turnaround promises. Offers and FAQs come from lib/data/services.ts.
 */

export type LandingImage = { src: string; alt: string; w: number; h: number };

export type ProofItem = { title: string; text: string; tag: string; href?: string; external?: boolean; image: LandingImage };

export type ServiceLanding = {
  slug: ServiceSlug;
  seo: { title: string; description: string };
  hero: { eyebrow: string; titleLead: string; titleAccent: string; titleTail: string; pain: string; proofs: string[] };
  images: { hero: LandingImage; sub?: LandingImage; subExample?: "gsc" | "pipeline"; side: LandingImage };
  usps: { title: string; text: string }[];
  trust: { title: string; text: string };
  steps: { title: string; text: string }[];
  tools: { category: string; tools: string; benefit: string }[];
  vetting: { title: string; paras: string[] };
  compare: { factor: string; cheap: string; agency: string; me: string }[];
  proofTitle: string;
  proofText: string;
  proof: ProofItem[];
  profiles: string[];
  startingPoints: { problem: string; fix: string }[];
  industries: string[];
  closing: { title: string; text: string };
};

const photo = (name: string, alt: string, h = 933): LandingImage => ({ src: `/images/stock/${name}.jpg`, alt, w: 1400, h });
const shot = (src: string, alt: string, w = 1672, h = 941): LandingImage => ({ src, alt, w, h });

const sample = (title: string, tag: string, url: string, img: string, alt: string): ProofItem => ({
  title,
  tag,
  text: "Read the full document.",
  href: url,
  external: true,
  image: { src: img, alt, w: 900, h: 600 },
});

export const MEDSPA = sample("Med spa content", "Writing sample", "https://docs.google.com/document/d/1MNRrdGx6PLKwYlErmXwvSSwrT4tvw6KvT03J_tOQGPc/edit", "/images/projects/medspa.jpg", "A calm medical spa treatment room");
export const REALESTATE = sample("Real estate content", "Writing sample", "https://docs.google.com/document/d/1a5r45mWlLQLTEfqBmPorJDEKYdalR2w7_D5xUxZWSIQ/edit", "/images/projects/realestate.jpg", "A laptop showing a property map");
export const INSURANCE = sample("Insurance agency content", "Writing sample", "https://docs.google.com/document/d/1nft-8dYQSUjO2vOlDqCuxC3CnYOhbVNJZhrF73ZQTwM/edit", "/images/projects/insurance.jpg", "A person signing an insurance document");

const productProof = (title: string, text: string, img: string, alt: string, href: string): ProofItem => ({
  title, text, tag: "Product I helped build", href, external: true, image: { src: img, alt, w: 1672, h: 941 },
});

const generalVetting = (what: string): string[] => [
  `Hiring for ${what} is risky when you cannot tell who actually does the work. Everything on my services is done by me, personally. I do not hand projects to unvetted subcontractors or pass them to junior staff.`,
  "I review my own work before it reaches you, and I explain my decisions in plain language so you can judge them. If something is outside what I do well, I will say so and suggest a better option.",
];

const generalClosing = (what: string) => ({
  title: "Ready to Fix the Bottleneck?",
  text: `Stop paying for makeshift fixes. A short call is the quickest way to find out whether ${what} is the right next step for your business.`,
});

export const landings: Record<ServiceSlug, ServiceLanding> = {
  copywriting: {
    slug: "copywriting",
    seo: {
      title: "Conversion Copywriting for Service Businesses",
      description: "Website, landing page and email copy that explains your offer clearly and gives visitors one next step. SEO-aware copy from a writer who also builds sites.",
    },
    hero: {
      eyebrow: "Copywriting Service",
      titleLead: "Copywriting That Turns Visitors Into",
      titleAccent: "Booked Calls",
      titleTail: "",
      pain: "Most business websites describe what the company does and then stop. Visitors read, nod and leave. I write clear, specific copy that explains your offer, answers the doubts buyers have and points to a single next step.",
      proofs: ["SEO copywriting since 2023", "Content shipped for 20+ businesses", "Keyword research behind every page", "Written to match your voice and offer"],
    },
    images: {
      hero: photo("copy-hero", "Hands writing in a notebook on a desk with a laptop video call", 934),
      subExample: "gsc",
      side: photo("copy-side", "A woman working on a laptop at a bright desk with flowers", 951),
    },
    usps: [
      { title: "Buyer-first research", text: "I start with your customers' words, your competitors' pages and the searches people actually make, not with a blank page." },
      { title: "One page, one action", text: "Each page has a single job and a single next step, so visitors are never unsure what to do." },
      { title: "SEO built in", text: "Keywords, headings, titles and meta descriptions are planned with the copy, so pages can rank as well as convert." },
      { title: "A writer who understands the build", text: "I build websites too, so the copy fits the layout and can be placed straight into your site." },
    ],
    trust: {
      title: "A Writing Partner, Not a Word Factory",
      text: "I work with founders and business owners directly. I learn how you win customers, then write copy that sounds like you on your best day. Because I also work with automation and web development, I can connect the message to the forms, funnels and pages that carry it.",
    },
    steps: [
      { title: "Discovery and research", text: "You share your offer, customers and goals. I study your market, reviews and competitors, and note the gaps your copy can fill." },
      { title: "Message and structure", text: "I agree the main message and page structure with you before writing, so nobody wastes time on the wrong direction." },
      { title: "Draft, edit and deliver", text: "You get a draft with headline options and notes on why choices were made. We edit together, and I deliver it ready to publish." },
    ],
    tools: [
      { category: "Research and strategy", tools: "Ahrefs, Surfer SEO, Notion", benefit: "Keyword and competitor facts behind every page" },
      { category: "Drafting and editing", tools: "ChatGPT, Claude, Grammarly", benefit: "Faster research and cleaner drafts, always reviewed by me" },
      { category: "Delivery", tools: "Google Docs, Markdown, MDX", benefit: "Copy you can paste straight into your site" },
      { category: "Placement", tools: "WordPress, Next.js", benefit: "Copy that fits the layout it will live in" },
    ],
    vetting: { title: "Who Actually Writes Your Copy", paras: generalVetting("copywriting") },
    compare: [
      { factor: "Strategic depth", cheap: "Generic, copy-pasted phrases", agency: "Template packages", me: "Built from your buyers and competitors" },
      { factor: "Subject knowledge", cheap: "Little research", agency: "Rotating writers", me: "Researched per niche, plus engineering fluency" },
      { factor: "Communication", cheap: "Unclear, slow replies", agency: "Layers of meetings", me: "Direct, with the person writing" },
      { factor: "Main goal", cheap: "Finish the word count", agency: "Fill the retainer", me: "Pages that give visitors a clear next step" },
    ],
    proofTitle: "Writing I Have Done",
    proofText: "Read full documents written for different industries.",
    proof: [MEDSPA, REALESTATE, INSURANCE],
    profiles: ["Service businesses that rely on their website for enquiries", "Founders launching or relaunching an offer", "Agencies that need a reliable copy partner", "Teams with traffic but few enquiries"],
    startingPoints: [
      { problem: "The home page explains the company but does not ask for anything.", fix: "Rewrite around one offer and one clear call to action." },
      { problem: "Service pages all say the same thing as competitors.", fix: "Research what buyers ask, then build pages that answer it directly." },
      { problem: "Landing page gets clicks but nobody enquires.", fix: "Tighten the promise, handle objections in order and simplify the action." },
      { problem: "Emails sound generic and get ignored.", fix: "Write shorter, specific sequences in your own voice." },
    ],
    industries: ["Legal", "Real estate", "Healthcare and med spa", "Home services", "Finance and insurance", "SaaS and technology", "Agencies", "Local businesses"],
    closing: generalClosing("better copy"),
  },

  "blog-writing": {
    slug: "blog-writing",
    seo: { title: bw.seo.title, description: bw.seo.description },
    hero: {
      eyebrow: bw.hero.eyebrow,
      titleLead: "SEO Blog Writing That Brings In",
      titleAccent: "Buyers",
      titleTail: ", Not Just Traffic",
      pain: bw.hero.lead,
      proofs: ["SEO copywriting since 2023", "Content shipped for 20+ businesses", "Keyword, intent and entity planning", "Every article ends with a clear next step"],
    },
    images: {
      hero: photo("blog-hero", "A tablet showing marketing notes next to glasses and a plant", 915),
      sub: photo("blog-sub", "A hand writing notes beside printed charts", 927),
      side: photo("blog-side", "Printed reports with colorful charts on a wooden desk", 927),
    },
    usps: bw.usps.map((u) => ({ title: u.title, text: u.text })),
    trust: { title: bw.about.title, text: bw.about.paragraphs.join(" ") },
    steps: bw.process.steps,
    tools: [
      { category: "Research and strategy", tools: "Ahrefs, Surfer SEO, Google Search Console", benefit: "Topics chosen from real search data" },
      { category: "Writing and editing", tools: "ChatGPT, Claude, Grammarly", benefit: "Faster research and clean drafts, reviewed by me" },
      { category: "Planning and delivery", tools: "Notion, Google Docs, Markdown, MDX", benefit: "Briefs and drafts your team can use right away" },
      { category: "Publishing", tools: "WordPress, Next.js", benefit: "Formatted for your CMS, with metadata ready" },
    ],
    vetting: { title: "Technical Writing You Can Trust", paras: [bw.trust.text, "Every draft is researched, written and checked by me. I do not outsource to freelancer pools, and I flag anything that needs a subject expert's review."] },
    compare: [
      { factor: "Strategic depth", cheap: "Writes what you ask, nothing more", agency: "Fixed content packages", me: "Topics chosen from buyer intent and gaps" },
      { factor: "Technical accuracy", cheap: "No technical background", agency: "General account managers", me: "Hands-on engineering experience" },
      { factor: "Communication", cheap: "Unpredictable", agency: "Layers of meetings", me: "Direct, with the person writing" },
      { factor: "Main goal", cheap: "Hit the word count", agency: "Keep the retainer going", me: "Articles that lead readers to act" },
    ],
    proofTitle: bw.samples.title,
    proofText: bw.samples.text,
    proof: [MEDSPA, REALESTATE, INSURANCE],
    profiles: ["Software and SaaS teams building organic inbound", "Agencies that want a dependable content writer", "Local and service businesses building topical authority", "Founders who want a steady content engine"],
    startingPoints: bw.startingPoints.items.map((i) => ({ problem: i.problem, fix: i.fix })),
    industries: ["B2B SaaS", "Developer tools and APIs", "Workflow automation and AI tools", "Software and web agencies", "Legal", "Real estate", "Healthcare and med spa", "Home services"],
    closing: { title: bw.finalCta.title, text: bw.finalCta.text },
  },

  "web-development": {
    slug: "web-development",
    seo: {
      title: "Full-Stack Web Development for Business",
      description: "Fast, maintainable websites and web apps built end to end: interface, API and database. React, Node.js and SQL, with SEO structure from day one.",
    },
    hero: {
      eyebrow: "Full-Stack Web Development",
      titleLead: "Websites and Web Apps That Are Fast, Clear and",
      titleAccent: "Built to Grow",
      titleTail: "",
      pain: "Slow template sites and spreadsheet-and-email processes cost businesses time and customers. I build the whole thing, from the interface to the API and database, so it works well today and stays easy to change tomorrow.",
      proofs: ["Real products built with the Growminion team", "Frontend, backend and database in one pair of hands", "Mobile first, structured for SEO", "Code you own, with clear handover"],
    },
    images: {
      hero: photo("web-hero", "A laptop showing code on a cafe table with a coffee", 935),
      sub: photo("web-sub", "A developer at a desk with a monitor and laptop", 933),
      side: photo("web-side", "Code on a dark editor screen", 753),
    },
    usps: [
      { title: "Business-first scoping", text: "I start from what the site or app must achieve, then decide features, so you do not pay for things you do not need." },
      { title: "End-to-end skills", text: "Interface, API logic and database design are handled together, which avoids gaps between separate specialists." },
      { title: "Modern, maintainable code", text: "React, TypeScript, Node.js and Tailwind, written to be readable by the next developer." },
      { title: "Built to be found and to convert", text: "Clean structure, metadata and fast loading are part of the build, not an afterthought." },
    ],
    trust: {
      title: "A Developer Who Understands the Business Side",
      text: "I came into engineering through content and SEO work, so I think about leads, rankings and usability, not only code. I work directly with owners and teams, explain trade-offs in plain language and hand over something your people can actually use.",
    },
    steps: [
      { title: "Scope and plan", text: "We define pages, features and success measures. I review any existing site or system and agree the approach before building." },
      { title: "Design and build", text: "I design the interface and build it in steps, sharing a live preview so you can react early." },
      { title: "Test, launch and hand over", text: "I test across devices, tune performance, deploy and document how everything works." },
    ],
    tools: [
      { category: "Frontend", tools: "HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React, Next.js", benefit: "Fast, responsive, maintainable interfaces" },
      { category: "Backend", tools: "Node.js, Express.js, REST APIs, JWT", benefit: "Reliable logic and secure sign in" },
      { category: "Data", tools: "SQL, MongoDB", benefit: "Clean, dependable data storage" },
      { category: "Delivery", tools: "Git, GitHub, cloud hosting", benefit: "Versioned code and smooth deployment" },
    ],
    vetting: { title: "Your Code Is Written by the Person You Talk To", paras: generalVetting("web development") },
    compare: [
      { factor: "Fit to your needs", cheap: "Reused templates", agency: "Standard packages", me: "Built around your actual workflow" },
      { factor: "Technical depth", cheap: "Front end only, or plugins", agency: "Handed to a junior team", me: "Hands-on across front end, back end and data" },
      { factor: "Communication", cheap: "Hard to reach", agency: "Layers of meetings", me: "Direct, with the person building" },
      { factor: "Main goal", cheap: "Close the ticket", agency: "Billable hours", me: "A working, maintainable result" },
    ],
    proofTitle: "Real Products and Apps",
    proofText: "Selected work. The Projects page has the full detail.",
    proof: [
      productProof("Local rank tracker", "A GeoGrid tracker that shows where a business ranks across its service area.", "/images/projects/saas-local-seo.png", "Local SEO command center with grid rank tracking", "https://local-seo.growminion.ca/"),
      productProof("MinionHR", "An HR and team operations platform with attendance, leave, projects and more.", "/images/projects/saas-hr.png", "HR and team productivity platform", "https://hr.growminion.ca/"),
      { title: "Doctor appointment system", tag: "Web application", text: "Browse doctors and book appointments.", href: "https://docappoint-client-final.vercel.app/", external: true, image: { src: "/images/projects/docappoint.png", alt: "Doctor appointment web application", w: 1440, h: 900 } },
    ],
    profiles: ["Businesses replacing a slow or outdated website", "Founders who need a first working version of a product", "Clinics and service firms that need online booking", "Agencies that need a dependable developer"],
    startingPoints: [
      { problem: "The current site is slow and hard to edit.", fix: "Rebuild with a fast stack and a content setup your team can manage." },
      { problem: "Bookings and tracking happen in spreadsheets and email.", fix: "Build a small web app with sign in, dashboards and the exact steps you use." },
      { problem: "A prototype works but breaks under real use.", fix: "Review the code, fix the weakest parts and add tests where they matter." },
      { problem: "The site does not show up in search.", fix: "Improve structure, metadata, performance and internal links." },
    ],
    industries: ["Healthcare", "Education and libraries", "Retail and e-commerce", "Real estate", "Local businesses", "SaaS and technology", "HR and operations", "Marketing agencies"],
    closing: generalClosing("a custom website or web app"),
  },

  "n8n-automation": {
    slug: "n8n-automation",
    seo: {
      title: "n8n Automation for Business Workflows",
      description: "Custom n8n workflows that connect your tools, capture leads and remove repetitive manual work, with error handling and clear documentation.",
    },
    hero: {
      eyebrow: "n8n Automation Service",
      titleLead: "n8n Automation That Gives Your Team Their",
      titleAccent: "Hours Back",
      titleTail: "",
      pain: "Teams lose hours every week to copy-paste work: moving leads between tools, forwarding forms, building reports by hand. I build reliable n8n workflows that do this for you, and tell you when something needs a person.",
      proofs: ["Automation work as an engineer at Growminion", "Lead capture, CRM and content pipelines built", "Workflows with error handling and alerts", "Documented so your team can maintain them"],
    },
    images: {
      hero: photo("n8n-hero", "A woman working at dual monitors showing code", 934),
      sub: photo("n8n-sub", "Developer screens with code and a pair of glasses", 1050),
      side: photo("n8n-side", "A futuristic interface on a computer screen", 933),
    },
    usps: [
      { title: "Process before tools", text: "I map the manual steps first. A broken process automated is still broken, so we fix the flow before building it." },
      { title: "Hands-on engineering", text: "I write custom code nodes and API calls when a pre-built integration is not enough." },
      { title: "Reliable by design", text: "Retries, logs and alerts are built in, so workflows do not fail silently." },
      { title: "AI where it helps", text: "I use language models for sorting, summarising and drafting, with a human review step where accuracy matters." },
    ],
    trust: {
      title: "A Builder Who Works With Your Team",
      text: "I work as an integrated partner, not a ticket taker. I sit with the people who do the task today, learn the exceptions and build the workflow around how the business really runs. You get documentation and a walkthrough so you are never locked in.",
    },
    steps: [
      { title: "Audit the manual work", text: "You show me the tasks that eat time. I map the steps, the tools involved and where mistakes happen." },
      { title: "Design the workflow", text: "I draw the trigger, steps and exceptions, agree them with you and choose how errors are handled." },
      { title: "Build, test and document", text: "I build in a safe environment, test with real data, then deploy with a short guide and walkthrough." },
    ],
    tools: [
      { category: "Orchestration", tools: "n8n, webhooks", benefit: "Flexible workflows that react to events" },
      { category: "Data and apps", tools: "Google Sheets, Gmail, Slack, REST APIs", benefit: "Your tools talk to each other without manual steps" },
      { category: "AI", tools: "OpenAI API", benefit: "Classify, summarise and draft inside the flow" },
      { category: "Publishing", tools: "WordPress REST API", benefit: "Content pipelines that publish after review" },
    ],
    vetting: { title: "Automation You Can Rely On", paras: generalVetting("automation") },
    compare: [
      { factor: "Fit to your process", cheap: "A copied template flow", agency: "Standard automation packages", me: "Built around your actual steps" },
      { factor: "Handles complex logic", cheap: "Breaks on exceptions", agency: "Limited to simple triggers", me: "Custom code and API calls where needed" },
      { factor: "Reliability", cheap: "No alerts or logs", agency: "Support tickets", me: "Error handling and alerts built in" },
      { factor: "Main goal", cheap: "Deliver a flow", agency: "Sell more tools", me: "Fewer manual hours for your team" },
    ],
    proofTitle: "Related Reading and Work",
    proofText: "Real articles and a product that automates a content workflow.",
    proof: [
      { title: "How I use n8n to automate repetitive business tasks", tag: "Article", text: "Four real workflows and how to start.", href: "/blog/automate-repetitive-business-tasks-with-n8n", image: { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=70", alt: "A close-up of a circuit board", w: 900, h: 600 } },
      { title: "Building a lead capture automation in under an hour", tag: "Article", text: "A simple form to notification workflow.", href: "/blog/build-lead-capture-automation-under-an-hour", image: { src: "https://images.unsplash.com/photo-1524635962361-d7f8ae9c79b1?auto=format&fit=crop&w=900&q=70", alt: "A dark code editor interface", w: 900, h: 600 } },
      productProof("AI content engine", "A tool that writes location pages and publishes to WordPress.", "/images/projects/saas-content.png", "An AI content engine platform", "https://seo.growminion.ca/"),
    ],
    profiles: ["Agencies drowning in manual reporting", "Sales teams that follow up on leads too slowly", "Founders who want to scale without hiring early", "Content teams with a repeatable publishing process"],
    startingPoints: [
      { problem: "Leads arrive from forms, ads and messages and someone sorts them by hand.", fix: "Route every lead into one place, tag it and notify the right person instantly." },
      { problem: "Weekly reports are copied together from several tools.", fix: "Pull the data on a schedule and deliver a ready summary." },
      { problem: "Content goes through many manual publishing steps.", fix: "Chain research, drafting, review and publishing with a human approval gate." },
      { problem: "Workflows fail and nobody notices.", fix: "Add retries, logs and alerts so problems surface quickly." },
    ],
    industries: ["Marketing and SEO agencies", "Local service businesses", "Real estate", "Legal", "Healthcare", "SaaS and technology", "E-commerce", "HR and operations"],
    closing: generalClosing("automation"),
  },

  "lead-generation-ghl": {
    slug: "lead-generation-ghl",
    seo: {
      title: "GoHighLevel Lead Generation Setup",
      description: "GoHighLevel funnels, CRM pipelines and follow-up automations that reply to leads quickly and keep them moving until they book, set up and written for you.",
    },
    hero: {
      eyebrow: "GoHighLevel Service",
      titleLead: "A GoHighLevel Lead System That Follows Up",
      titleAccent: "Before Competitors Do",
      titleTail: "",
      pain: "Most leads are lost because nobody replies fast enough or follows up consistently. I set up GoHighLevel so every enquiry gets a quick response, lands in the right pipeline stage and is nurtured until it books or buys.",
      proofs: ["Copywriter and automation engineer in one", "Follow-up messages written for you", "Connects with your website, forms and n8n", "Clear pipelines your team can follow"],
    },
    images: {
      hero: photo("ghl-hero", "Two people shaking hands after agreeing a deal", 933),
      subExample: "pipeline",
      side: photo("ghl-side", "A team reviewing charts and documents around a table", 787),
    },
    usps: [
      { title: "Speed to lead", text: "Instant replies and missed-call text back so interested people are not left waiting." },
      { title: "Messages that sound human", text: "As a copywriter, I write the SMS and email sequences myself, so they read like a person, not a template." },
      { title: "A pipeline your team understands", text: "Clear stages, tags and tasks mean everyone knows what happens next with every lead." },
      { title: "Connected to the rest of your stack", text: "I link GHL to your website, forms and n8n workflows so data does not get stuck." },
    ],
    trust: {
      title: "One Person for Copy, Setup and Automation",
      text: "Lead systems break down at the handoffs: between the ad, the page, the message and the CRM. I handle the copy, the configuration and the automation together, so those handoffs are designed rather than patched.",
    },
    steps: [
      { title: "Map the customer journey", text: "We trace how a lead moves from first click to paid job, and where they drop out today." },
      { title: "Set up and write", text: "I configure pipelines, forms, calendars and integrations, and write the messages for each stage." },
      { title: "Test and refine", text: "I test the full flow with real scenarios, then adjust messaging and timing with you." },
    ],
    tools: [
      { category: "CRM and funnels", tools: "GoHighLevel", benefit: "Pipelines, forms, calendars and messaging in one place" },
      { category: "Automation", tools: "n8n, webhooks", benefit: "Custom logic beyond built-in workflows" },
      { category: "Data", tools: "Google Sheets, Gmail, Slack", benefit: "Reports and alerts in the tools you already use" },
      { category: "Copy", tools: "ChatGPT, Claude, Grammarly", benefit: "Drafts reviewed and polished by me" },
    ],
    vetting: { title: "Set Up by the Person Who Writes the Messages", paras: generalVetting("lead generation setup") },
    compare: [
      { factor: "Strategy", cheap: "Copied snapshot, no planning", agency: "Standard onboarding", me: "Built from your actual customer journey" },
      { factor: "Message quality", cheap: "Generic templates", agency: "Outsourced copy", me: "Written by me for your business" },
      { factor: "Integration", cheap: "Stops at GHL", agency: "Add-on fees", me: "Connected to your site and n8n workflows" },
      { factor: "Main goal", cheap: "Finish setup", agency: "Upsell tools", me: "Faster, more consistent follow-up" },
    ],
    proofTitle: "Related Reading",
    proofText: "Articles that show how I think about lead capture and follow-up.",
    proof: [
      { title: "Building a lead capture automation in under an hour", tag: "Article", text: "A simple form to notification workflow.", href: "/blog/build-lead-capture-automation-under-an-hour", image: { src: "https://images.unsplash.com/photo-1524635962361-d7f8ae9c79b1?auto=format&fit=crop&w=900&q=70", alt: "A dark code editor interface", w: 900, h: 600 } },
      { title: "How to write service pages that convert", tag: "Article", text: "The page structure that moves visitors to act.", href: "/blog/how-to-write-service-pages-that-convert", image: { src: "https://images.unsplash.com/photo-1643148636630-0b0fb138fc74?auto=format&fit=crop&w=900&q=70", alt: "A hand writing in a notebook", w: 900, h: 600 } },
    ],
    profiles: ["Clinics and med spas that depend on bookings", "Home service companies with missed calls", "Law firms and agents who follow up manually", "Agencies that need GHL set up properly for clients"],
    startingPoints: [
      { problem: "Calls and enquiries go unanswered outside office hours.", fix: "Set up missed-call text back and instant replies to start a conversation." },
      { problem: "Leads sit in an inbox with no clear owner.", fix: "Create a pipeline with stages, tags and tasks for each lead." },
      { problem: "Appointments are booked, then missed.", fix: "Add confirmations and reminders by SMS and email." },
      { problem: "Happy customers never leave reviews.", fix: "Send a simple, well-timed review request after each job." },
    ],
    industries: ["Med spas and clinics", "Home services", "Law firms", "Real estate agents", "Insurance agencies", "Marketing agencies", "Local businesses", "Consultants"],
    closing: generalClosing("a lead system"),
  },

  "saas-development": {
    slug: "saas-development",
    seo: {
      title: "SaaS Development from MVP to Launch",
      description: "Custom SaaS products built in code: auth, dashboards, billing, APIs and a SQL backend. From an engineer who helped build three SaaS products at Growminion.",
    },
    hero: {
      eyebrow: "SaaS Development",
      titleLead: "Turn a Repeated Process Into a Working",
      titleAccent: "SaaS Product",
      titleTail: "",
      pain: "Paying for tools that never quite fit your workflow gets expensive as you grow. I help businesses and founders build custom products in code: a focused first version, then solid foundations to grow on.",
      proofs: ["Helped build 3 SaaS products at Growminion", "TypeScript, React, Node.js and SQL", "Frontend, backend and database in one team", "Code and documentation handed to you"],
    },
    images: {
      hero: photo("saas-hero", "A team collaborating around a table with laptops", 934),
      sub: photo("saas-sub", "Hands typing code on a laptop", 927),
      side: photo("saas-side", "A team planning a product around a table with papers", 1050),
    },
    usps: [
      { title: "Smallest useful version first", text: "We cut the idea down to what proves value, so you launch sooner and learn from real use." },
      { title: "Built by someone who has shipped products", text: "I helped build a rank tracker, an AI content engine and an HR platform, in code, from interface to database." },
      { title: "Modern, maintainable architecture", text: "Clean APIs, role-based access and a SQL database designed to grow without rewrites." },
      { title: "Ownership stays with you", text: "You get the code, access and documentation, with no lock-in." },
    ],
    trust: {
      title: "A Technical Partner, Not Just a Contractor",
      text: "I work with founders and operators as a product-minded engineer. I ask why before I build, flag risks early and keep the scope honest, so the product you launch is one people will actually use.",
    },
    steps: [
      { title: "Define and prioritise", text: "We agree on the user, the problem and the first version, and write down what is in and out of scope." },
      { title: "Design and build", text: "I design the data model and interface, then build in short steps with working demos along the way." },
      { title: "Launch and iterate", text: "I deploy, hand over the code and docs, and we decide the next release from real feedback." },
    ],
    tools: [
      { category: "Frontend", tools: "HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React", benefit: "Responsive, maintainable interfaces" },
      { category: "Backend", tools: "Node.js, Express.js, REST APIs, JWT", benefit: "Secure logic, auth and integrations" },
      { category: "Data", tools: "SQL", benefit: "Reliable, queryable data" },
      { category: "AI and automation", tools: "OpenAI API, n8n", benefit: "AI features and background workflows" },
    ],
    vetting: { title: "Built by the Engineer You Talk To", paras: generalVetting("SaaS development") },
    compare: [
      { factor: "Fit to your workflow", cheap: "Recycled code", agency: "Generic builds", me: "Built around your actual process" },
      { factor: "Experience with products", cheap: "Few finished products", agency: "Mixed teams", me: "Real SaaS products shipped with Growminion" },
      { factor: "Communication", cheap: "Inconsistent", agency: "Layers of project managers", me: "Direct, with the engineer" },
      { factor: "Main goal", cheap: "Deliver features", agency: "Maximise hours", me: "A product people use and you control" },
    ],
    proofTitle: "SaaS Products I Helped Build",
    proofText: "Real, live products. See the Projects page for full case studies.",
    proof: [
      productProof("Local rank tracker (GeoGrid)", "Block-by-block local ranking tracker for agencies.", "/images/projects/saas-local-seo.png", "Local rank tracker dashboard", "https://local-seo.growminion.ca/"),
      productProof("AI content engine", "Generates and publishes local SEO pages.", "/images/projects/saas-content.png", "AI content engine platform", "https://seo.growminion.ca/"),
      productProof("MinionHR", "HR, attendance and team productivity platform.", "/images/projects/saas-hr.png", "MinionHR dashboard", "https://hr.growminion.ca/"),
    ],
    profiles: ["Founders with a validated idea", "Agencies turning a service into a product", "Teams replacing spreadsheets with software", "Businesses tired of per-seat tool costs"],
    startingPoints: [
      { problem: "A manual process runs on spreadsheets and email.", fix: "Build a small internal product with the exact steps your team uses." },
      { problem: "A paid tool costs more each month and still does not fit.", fix: "Replace the part you use with a focused custom tool." },
      { problem: "A prototype exists but cannot handle real users.", fix: "Review it, harden the backend and add proper auth and data handling." },
      { problem: "You are not sure what to build first.", fix: "Define the smallest version that proves the idea." },
    ],
    industries: ["SEO and marketing agencies", "HR and operations", "SaaS startups", "Healthcare", "Education", "Retail and e-commerce", "Real estate", "Professional services"],
    closing: generalClosing("a custom product"),
  },
};

export function getLanding(slug: string) {
  return (landings as Record<string, ServiceLanding>)[slug];
}

export const sharedConsult = [
  { title: "A short technical conversation", text: "We talk through what you have now and where the gaps are." },
  { title: "A practical plan", text: "I outline quick wins and the larger priorities, in a sensible order." },
  { title: "Clear scope and options", text: "You get a clear recommendation and scope before any work starts." },
];

export { services };
