export type ServiceSlug =
  | "copywriting"
  | "blog-writing"
  | "web-development"
  | "n8n-automation"
  | "lead-generation-ghl"
  | "saas-development";

export type Offer = { title: string; text: string; points: string[] };

export type Service = {
  slug: ServiceSlug;
  label: string;
  /** Short card / dropdown description */
  description: string;
  icon: "pen" | "file" | "code" | "workflow" | "target" | "layers";
  seoTitle: string;
  seoDescription: string;
  badge: string;
  headline: string;
  intro: string;
  /** Spotlight copy on the services overview page */
  problem: string;
  approach: string;
  /** Sub-services shown as colored cards */
  offers: Offer[];
  process: { title: string; text: string }[];
  /** Comparison table: criteria columns and a boolean row for each option */
  compare: {
    title: string;
    criteria: string[];
    me: boolean[];
    inHouse: boolean[];
    cheap: boolean[];
    ai: boolean[];
  };
  tools: string[];
  idealFor: string[];
  faqs: { q: string; a: string }[];
  proof: { label: string; url: string }[];
};

export const services: Service[] = [
  {
    slug: "copywriting",
    label: "Copywriting",
    description: "Conversion-focused copy for websites, ads, emails and sales pages.",
    icon: "pen",
    seoTitle: "Conversion Copywriting for Websites, Ads and Emails",
    seoDescription:
      "Hire a copywriter who turns visitors into leads. Website copy, landing pages, email sequences and ad copy for med spas, law firms, real estate and local service businesses.",
    badge: "Copywriting Service",
    headline: "Copywriting That Turns Visitors Into Booked Calls",
    intro:
      "Most business websites explain what the company does but never give a reason to act. I research your buyers, study what your competitors say and write clear, specific copy that earns trust and makes the next step obvious. Every page is written to convert and to rank.",
    problem:
      "Most websites say what the company does but never give a visitor a reason to act, so traffic leaks away.",
    approach:
      "I research your buyers and competitors first, then write one clear message per page with a single next step, and test headlines against real search intent.",
    offers: [
      {
        title: "Website Copywriting",
        text: "Home, about and service pages that explain your offer in plain language and guide visitors to one clear action.",
        points: ["Message hierarchy and headline options", "SEO keywords woven in naturally", "Calls to action on every section"],
      },
      {
        title: "Landing Page Copy",
        text: "Focused single-offer pages for ads and campaigns, written to cut distractions and lift conversion rates.",
        points: ["Offer and objection mapping", "Social proof and trust blocks", "A/B headline variations"],
      },
      {
        title: "Email Sequences",
        text: "Welcome, nurture and win-back emails that sound like a person and move leads toward a decision.",
        points: ["Subject line testing ideas", "5 to 7 email sequences", "Segmented by buyer stage"],
      },
      {
        title: "Ad Copywriting",
        text: "Google Search and Meta ad copy tied to real search intent and the pain points your buyers actually feel.",
        points: ["Multiple angles to test", "Character-limit ready", "Matched to the landing page"],
      },
      {
        title: "Sales and Offer Pages",
        text: "Long-form pages that answer objections in the order your buyer raises them, from doubt to decision.",
        points: ["Problem, solution, proof flow", "Pricing and guarantee framing", "FAQ that removes friction"],
      },
      {
        title: "Brand Voice Guide",
        text: "A short, practical guide so every writer, tool and teammate keeps the same tone across your channels.",
        points: ["Tone dos and don'ts", "Words to use and avoid", "Before and after examples"],
      },
    ],
    process: [
      { title: "Discovery", text: "A short call and questionnaire to learn your offer, customers and goals." },
      { title: "Research", text: "Competitor teardown, customer language mining and keyword checks." },
      { title: "Draft", text: "A first draft with headline options and notes on why each choice was made." },
      { title: "Revise", text: "Two rounds of edits until it sounds exactly like you on your best day." },
    ],
    compare: {
      title: "In-house writer or random freelancers? Neither.",
      criteria: ["Customer research", "SEO built in", "Conversion focus", "Fast turnaround", "Industry knowledge", "Affordable"],
      me: [true, true, true, true, true, true],
      inHouse: [true, false, true, false, true, false],
      cheap: [false, false, false, true, false, true],
      ai: [false, true, false, true, false, true],
    },
    tools: ["ChatGPT", "Claude", "Surfer SEO", "Ahrefs", "Grammarly", "Notion"],
    idealFor: ["Med spas and clinics", "Law firms", "Real estate teams", "Insurance agencies", "Local service businesses"],
    faqs: [
      { q: "How long does a website copy project take?", a: "A typical 5 page website takes 7 to 10 business days from kickoff to final delivery. Larger sites or ones with heavy research take longer, and I confirm the timeline before we start." },
      { q: "Do you write for my industry?", a: "I have written for med spa, real estate and insurance brands, and I research each niche, its regulations and its customers before writing a single line. For regulated fields I flag claims that need legal review." },
      { q: "Is the copy SEO friendly?", a: "Yes. Every page is written around a primary keyword and its related search intent, with proper headings, meta titles and descriptions. It reads naturally and is never stuffed." },
      { q: "How many revisions are included?", a: "Two full rounds of revisions are included in every project. Most clients are happy after the first, because the draft is built from your own customer language." },
      { q: "What do you need from me to start?", a: "Your current site or materials, your top competitors, a description of your ideal customer and any reviews or testimonials. If you do not have all of it, I fill the gaps through research and a short call." },
      { q: "Can you also publish the copy on my website?", a: "Yes. I can deliver in Google Docs, or place it directly into WordPress, Webflow or a custom Next.js site as part of a web development project." },
    ],
    proof: [
      { label: "Med spa copy sample", url: "https://docs.google.com/document/d/1MNRrdGx6PLKwYlErmXwvSSwrT4tvw6KvT03J_tOQGPc/edit?tab=t.b74zrc6h5sx" },
      { label: "Real estate copy sample", url: "https://docs.google.com/document/d/1a5r45mWlLQLTEfqBmPorJDEKYdalR2w7_D5xUxZWSIQ/edit?tab=t.bko3hrmvgk4w" },
    ],
  },
  {
    slug: "blog-writing",
    label: "Blog Writing",
    description: "SEO-driven articles that rank, educate and bring in qualified traffic.",
    icon: "file",
    seoTitle: "SEO Blog Writing Service That Ranks and Converts",
    seoDescription:
      "Research-backed, SEO optimized blog posts written by a specialist who has worked on content for med spas, real estate and insurance. Built to rank and to bring in leads.",
    badge: "Blog Writing Service",
    headline: "SEO Blog Writing That Brings In Buyers, Not Just Traffic",
    intro:
      "A blog only pays off when each post targets a real search, answers it better than the pages already ranking and leads the reader toward your service. I plan, write and optimize articles around a keyword map, so every post has a job to do for your business.",
    problem:
      "Blogs fail when posts chase topics nobody searches for or repeat what already ranks.",
    approach:
      "Every post starts from a keyword and intent map, studies what currently ranks, and is written to answer the question better and lead to your service.",
    offers: [
      {
        title: "Keyword and Topic Strategy",
        text: "A content calendar built from search demand, competition and how close each topic is to a sale.",
        points: ["Topic clusters and pillar pages", "Difficulty and intent scoring", "90 day publishing plan"],
      },
      {
        title: "Long-Form Articles",
        text: "Original 1,200 to 3,000 word posts with expert structure, sources and a clear point of view.",
        points: ["Human written and fact checked", "Scannable formatting", "Internal links to service pages"],
      },
      {
        title: "On-Page SEO",
        text: "Everything search engines read, handled before the post goes live.",
        points: ["Title tag and meta description", "Heading and FAQ structure", "Schema markup where it fits"],
      },
      {
        title: "Content Briefs",
        text: "Detailed outlines for your in-house or freelance writers, based on live search result analysis.",
        points: ["Competitor gap analysis", "Required entities and questions", "Word count and angle"],
      },
      {
        title: "Content Refreshes",
        text: "Update older posts that slipped in rankings so they win back traffic without starting from scratch.",
        points: ["Decay and gap audit", "Fresh data and examples", "Re-optimized titles and links"],
      },
      {
        title: "WordPress Publishing",
        text: "Posts delivered ready to go live, or published for you with images, links and formatting in place.",
        points: ["Formatted in the editor", "Featured image and alt text", "Scheduled publishing"],
      },
    ],
    process: [
      { title: "Keyword map", text: "We choose topics that match your services and your buyer's real questions." },
      { title: "Brief", text: "I analyze the top results and define the angle that will beat them." },
      { title: "Write", text: "Draft, fact check and optimize with clean, scannable formatting." },
      { title: "Publish and track", text: "Posts go live and we watch rankings and clicks to guide the next batch." },
    ],
    compare: {
      title: "Content agency, in-house team or cheap writers? Neither.",
      criteria: ["Keyword strategy", "Search intent match", "Original research", "Consistent output", "Lead focus", "Affordable"],
      me: [true, true, true, true, true, true],
      inHouse: [true, true, true, false, true, false],
      cheap: [false, false, false, true, false, true],
      ai: [false, false, false, true, false, true],
    },
    tools: ["Ahrefs", "Surfer SEO", "Grammarly", "Notion", "WordPress"],
    idealFor: ["Agencies that need a reliable writer", "Local businesses building topical authority", "Founders who want a content engine", "Legal and healthcare brands"],
    faqs: [
      { q: "Do you use AI to write the posts?", a: "I use AI tools for research, outlines and checking coverage, but every article is written, edited and fact checked by a human. That keeps the voice natural and the facts accurate." },
      { q: "How many posts per month can you deliver?", a: "Most clients start with 4 to 8 posts a month. We can scale up once rankings and leads show the strategy is working." },
      { q: "How long before blog posts rank?", a: "For a newer site, expect early movement in 2 to 4 months and compounding results after 6 months. Timing depends on competition, site authority and how consistently you publish." },
      { q: "Can you match our existing tone?", a: "Yes. I review your top pages and past posts first, then write to match. A short voice guide keeps everything consistent as we scale." },
      { q: "Will the posts include images and internal links?", a: "Yes. I add internal links to your service and related pages, suggest image placement and write alt text. I can also source or brief images on request." },
      { q: "Do you write for regulated industries?", a: "Yes, including legal, health and insurance. I cite reliable sources, avoid unsupported claims and flag anything your compliance team should review." },
    ],
    proof: [
      { label: "Insurance agency content sample", url: "https://docs.google.com/document/d/1nft-8dYQSUjO2vOlDqCuxC3CnYOhbVNJZhrF73ZQTwM/edit?tab=t.bj8cjrmoivhb" },
      { label: "Med spa content sample", url: "https://docs.google.com/document/d/1MNRrdGx6PLKwYlErmXwvSSwrT4tvw6KvT03J_tOQGPc/edit?tab=t.b74zrc6h5sx" },
    ],
  },
  {
    slug: "web-development",
    label: "Web Development (Full-Stack)",
    description: "Fast, modern full-stack websites and web apps built with Next.js.",
    icon: "code",
    seoTitle: "Full-Stack Web Development with Next.js and React",
    seoDescription:
      "Custom full-stack web development: fast Next.js websites, booking systems, dashboards and web apps built for speed, SEO and easy maintenance.",
    badge: "Full-Stack Development",
    headline: "Fast Websites and Web Apps Built to Grow With You",
    intro:
      "I design and build the whole stack, from the interface your visitors see to the database and API behind it. Every build is mobile first, tuned for Core Web Vitals and structured so search engines and future developers can understand it.",
    problem:
      "Slow template sites and spreadsheets-and-email processes hold businesses back as they grow.",
    approach:
      "I build the full stack myself, from interface to API and database, mobile first and structured for SEO, shipping weekly on a preview link.",
    offers: [
      {
        title: "Business Websites",
        text: "Multi-page sites with service pages, galleries and lead forms, built to load fast and convert.",
        points: ["Responsive, mobile first design", "Lead forms and tracking", "Easy content updates"],
      },
      {
        title: "Web Applications",
        text: "Booking, management and tracking apps with sign in, dashboards and real workflows.",
        points: ["Auth and user roles", "Admin dashboards", "Real time updates"],
      },
      {
        title: "APIs and Databases",
        text: "Secure Node.js backends with MongoDB or PostgreSQL, designed for clean data and growth.",
        points: ["REST API design", "Data modelling", "Validation and security"],
      },
      {
        title: "Technical SEO Foundations",
        text: "Search friendly structure from day one, so your site is easy to crawl, index and rank.",
        points: ["Server rendering and metadata", "Schema and sitemaps", "Core Web Vitals tuning"],
      },
      {
        title: "Integrations",
        text: "Connect the tools you already use so data flows without manual copy and paste.",
        points: ["Stripe and payment gateways", "CRM and email tools", "Booking and calendar APIs"],
      },
      {
        title: "Handover and Support",
        text: "A clean launch with the documentation and training you need, plus optional ongoing care.",
        points: ["Documentation and walkthrough", "Deployment on Vercel", "Maintenance plans"],
      },
    ],
    process: [
      { title: "Scope", text: "We define pages, features and success metrics before any code is written." },
      { title: "Design", text: "Wireframes and a responsive design you approve first." },
      { title: "Build", text: "Weekly progress on a live preview link, so nothing is a surprise." },
      { title: "Launch", text: "Testing, performance tuning, deployment and post launch monitoring." },
    ],
    compare: {
      title: "Template builders or cheap developers? Neither.",
      criteria: ["Custom design", "Page speed", "SEO structure", "Scales with you", "Clean code", "Affordable"],
      me: [true, true, true, true, true, true],
      inHouse: [true, true, true, true, true, false],
      cheap: [false, false, false, false, false, true],
      ai: [false, false, false, false, false, true],
    },
    tools: ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    idealFor: ["Businesses replacing a slow template site", "Startups that need an MVP", "Clinics and service firms needing online booking", "Agencies that need a dev partner"],
    faqs: [
      { q: "Can I see examples of your work?", a: "Yes. The projects page has live demos including a doctor appointment system, a library management app, a social friend manager and a tile store." },
      { q: "Will my site be good for SEO?", a: "Yes. I build with server rendering, structured data, clean URLs and fast load times, so pages are easy for Google to crawl and rank. On-page copy and SEO can be handled in the same project." },
      { q: "How long does a website take?", a: "A focused business site usually takes 2 to 4 weeks. Web apps with accounts, dashboards and integrations take longer, and you get a clear timeline after scoping." },
      { q: "Do you build in WordPress?", a: "My focus is custom Next.js and full-stack builds. I can still connect your site to WordPress as a headless content source if your team wants to keep editing there." },
      { q: "Who owns the code and the hosting?", a: "You do. I hand over the full source code, set up hosting under your own account and document how everything works." },
      { q: "Do you offer support after launch?", a: "Yes. I offer a short free bug fix window after launch and optional monthly maintenance for updates, monitoring and small improvements." },
    ],
    proof: [
      { label: "DocAppoint", url: "https://docappoint-client-final.vercel.app/" },
      { label: "BiblioDrop", url: "https://biblio-drop-frontend.vercel.app/" },
    ],
  },
  {
    slug: "n8n-automation",
    label: "Automation with n8n",
    description: "Custom workflows that connect your tools and remove repetitive work.",
    icon: "workflow",
    seoTitle: "n8n Automation Expert: Workflows That Save Hours",
    seoDescription:
      "Custom n8n workflow automation for lead handling, content pipelines, reporting and CRM syncing. Stop doing repetitive tasks by hand and let your tools talk to each other.",
    badge: "n8n Automation Service",
    headline: "n8n Automation That Gives Your Team Their Hours Back",
    intro:
      "If a task is repeated every day, it can usually be automated. I build reliable n8n workflows that move data between your apps, trigger actions at the right moment and alert you only when something needs a human decision.",
    problem:
      "Teams lose hours every week to copy-paste work: moving leads, forwarding forms, building reports.",
    approach:
      "I map the manual steps, then build n8n workflows with error handling that connect your tools and alert a human only when needed.",
    offers: [
      {
        title: "Lead Capture and Routing",
        text: "Forms, ads and messages land in your CRM instantly, get tagged and reach the right person.",
        points: ["Form and ad lead sync", "Instant team alerts", "Auto assignment rules"],
      },
      {
        title: "Content Pipelines",
        text: "Research, drafting, formatting and publishing steps chained together with a human review gate.",
        points: ["AI assisted drafts", "WordPress publishing", "Approval before going live"],
      },
      {
        title: "Reporting Automation",
        text: "Weekly client reports assembled automatically from your analytics, ranking and ads tools.",
        points: ["Data pulled on a schedule", "Branded summaries", "Delivered by email or Slack"],
      },
      {
        title: "AI-Powered Workflows",
        text: "Use language models inside your process to classify, summarize, reply and extract data.",
        points: ["Email and ticket triage", "Document data extraction", "Smart reply drafts"],
      },
      {
        title: "Data Syncing",
        text: "Keep Google Sheets, Airtable, CRMs and databases consistent without manual copy and paste.",
        points: ["Two way sync logic", "Duplicate prevention", "Scheduled and real time"],
      },
      {
        title: "Monitoring and Error Handling",
        text: "Retries, logs and alerts so workflows never fail silently and issues get fixed fast.",
        points: ["Failure notifications", "Retry and fallback paths", "Run history and logs"],
      },
    ],
    process: [
      { title: "Audit", text: "We map the manual tasks that cost you the most time." },
      { title: "Design", text: "I draw the workflow, define triggers and agree on edge cases." },
      { title: "Build and test", text: "Workflows are built and tested with real data in a safe environment." },
      { title: "Document", text: "You get a short guide and a recorded walkthrough." },
    ],
    compare: {
      title: "Zapier chains or hiring an ops person? Neither.",
      criteria: ["Custom logic", "Handles complex flows", "Low running cost", "Error handling", "AI built in", "Fast setup"],
      me: [true, true, true, true, true, true],
      inHouse: [true, true, false, true, false, false],
      cheap: [false, false, true, false, false, true],
      ai: [false, false, true, false, true, true],
    },
    tools: ["n8n", "OpenAI API", "Google Sheets", "Gmail", "Slack", "Webhooks"],
    idealFor: ["Agencies drowning in manual reporting", "Sales teams with slow lead follow up", "Founders who want to scale without hiring", "Content teams with repeatable pipelines"],
    faqs: [
      { q: "Why n8n instead of Zapier or Make?", a: "n8n is more flexible, supports custom code and can be self hosted. That keeps costs low at higher volumes and your data under your control." },
      { q: "Can you work with my existing tools?", a: "If a tool has an API or a webhook, it can almost always be connected. If it has neither, we look for an export, an email trigger or another workaround." },
      { q: "What happens if a workflow breaks?", a: "Every workflow includes error handling, retries and alerts. I also offer a monitoring plan where I watch runs and fix issues before they affect your business." },
      { q: "Do I need to host n8n myself?", a: "Not necessarily. I can use n8n Cloud or set up a self hosted instance on a small server, and I will recommend the option that fits your volume and budget." },
      { q: "Can you add AI to my workflows?", a: "Yes. I use OpenAI and Claude APIs for classification, summaries, drafting and data extraction, always with a review step where accuracy matters." },
      { q: "How long does an automation take to build?", a: "Simple workflows take a few days. Multi-step systems with several integrations usually take 1 to 3 weeks, including testing and documentation." },
    ],
    proof: [
      { label: "Content writing SaaS tool", url: "https://seo.growminion.ca/" },
      { label: "Local SEO management tool", url: "https://local-seo.growminion.ca/" },
    ],
  },
  {
    slug: "lead-generation-ghl",
    label: "Lead Gen with GHL",
    description: "GoHighLevel funnels, CRM pipelines and follow-up automations.",
    icon: "target",
    seoTitle: "GoHighLevel (GHL) Lead Generation Setup and Automation",
    seoDescription:
      "Done for you GoHighLevel lead generation: funnels, CRM pipelines, missed call text back, review requests and follow up automations that turn leads into booked calls.",
    badge: "GoHighLevel Service",
    headline: "GoHighLevel Lead Generation That Follows Up Before Your Competitor Does",
    intro:
      "Most leads are lost because nobody replies fast enough. I set up GoHighLevel so every enquiry gets an instant response, lands in the right pipeline stage and is nurtured automatically until it books or buys.",
    problem:
      "Leads go cold because replies are slow and follow-up depends on someone remembering.",
    approach:
      "I set up GoHighLevel pipelines, instant replies and automated follow-up sequences, and write the messages so they sound human.",
    offers: [
      {
        title: "Funnels and Landing Pages",
        text: "High converting pages and forms with tracking built in, connected straight to your CRM.",
        points: ["Lead and booking funnels", "Conversion tracking", "Mobile optimized"],
      },
      {
        title: "CRM Pipelines",
        text: "Clear stages, tags and smart lists so no lead slips through and your team knows what to do next.",
        points: ["Stage and tag structure", "Smart lists and views", "Task automation"],
      },
      {
        title: "Speed-to-Lead Automation",
        text: "Instant SMS and email replies plus missed call text back to catch leads while they are hot.",
        points: ["Missed call text back", "Instant form replies", "Human handoff triggers"],
      },
      {
        title: "Appointment Booking",
        text: "Calendars with confirmations and reminders that fill your schedule and cut no shows.",
        points: ["Round robin and team calendars", "SMS and email reminders", "Reschedule flows"],
      },
      {
        title: "Reputation Management",
        text: "Automated review requests that grow your Google rating after every happy customer.",
        points: ["Review request sequences", "Negative feedback routing", "Google Business link flow"],
      },
      {
        title: "Reporting Dashboards",
        text: "See leads, bookings, sources and revenue in one place so you know what is working.",
        points: ["Source and campaign tracking", "Pipeline value view", "Weekly summary reports"],
      },
    ],
    process: [
      { title: "Strategy", text: "We map your customer journey from first click to paid job." },
      { title: "Setup", text: "Pipelines, funnels, calendars and integrations are configured." },
      { title: "Automate", text: "Follow up sequences are written and wired to the right triggers." },
      { title: "Optimize", text: "We review the numbers and refine messaging and timing." },
    ],
    compare: {
      title: "DIY setup or an expensive agency? Neither.",
      criteria: ["Speed to lead", "Copy written for you", "Custom pipelines", "Tracking set up", "Ongoing tweaks", "Affordable"],
      me: [true, true, true, true, true, true],
      inHouse: [true, false, true, true, true, false],
      cheap: [false, false, false, false, false, true],
      ai: [true, false, false, false, false, true],
    },
    tools: ["GoHighLevel", "n8n", "Webhooks", "Google Sheets"],
    idealFor: ["Med spas and clinics", "Home service companies", "Law firms", "Real estate agents", "Marketing agencies reselling GHL"],
    faqs: [
      { q: "Do I need my own GoHighLevel account?", a: "Yes, or I can set up a sub account under your agency account. I guide you through whichever option suits your business." },
      { q: "Can you connect GHL to my website?", a: "Yes. Forms, chat widgets and tracking can be embedded on any site, including custom Next.js builds and WordPress." },
      { q: "Will you write the follow up messages?", a: "Yes. As a copywriter, I write every SMS and email sequence so it sounds human, follows the rules and converts." },
      { q: "What is missed call text back?", a: "When a call goes unanswered, GHL instantly texts the caller and starts a conversation. It is one of the simplest ways to stop losing local leads." },
      { q: "How fast can my system go live?", a: "A core setup with pipeline, forms, booking and follow ups usually goes live within 1 to 2 weeks, depending on how many funnels and integrations you need." },
      { q: "Do you handle SMS compliance?", a: "I set up opt in language, opt out handling and A2P registration guidance so your messaging follows carrier and local rules." },
    ],
    proof: [
      { label: "Local SEO management tool", url: "https://local-seo.growminion.ca/" },
      { label: "Content and copywriting tool", url: "https://seo.growminion.ca/" },
    ],
  },
  {
    slug: "saas-development",
    label: "SaaS Development",
    description: "From MVP to launch: auth, billing, dashboards and scalable backends.",
    icon: "layers",
    seoTitle: "SaaS Development: From MVP to Launch",
    seoDescription:
      "Full-stack SaaS development with authentication, subscriptions, dashboards and AI features. Built by an engineer who ships real SaaS products at GrowMinion.",
    badge: "SaaS Development",
    headline: "SaaS Development That Takes Your Idea From MVP to Launch",
    intro:
      "I help build real SaaS products at GrowMinion, including a local SEO management platform, an AI content tool and an HR management system. I bring the same approach to your idea: ship a focused MVP quickly, then grow it on solid foundations.",
    problem:
      "Repeated internal processes pay for expensive tools that never quite fit the workflow.",
    approach:
      "I scope the smallest useful product, then build it in code with auth, dashboards and APIs, the same way the Growminion products were built.",
    offers: [
      {
        title: "MVP Planning",
        text: "Cut the idea down to the smallest product that proves demand, then plan the build around it.",
        points: ["Feature prioritization", "User flows and wireframes", "Scope and timeline"],
      },
      {
        title: "Auth and User Roles",
        text: "Secure sign in, teams and permission levels so each user sees exactly what they should.",
        points: ["Email and social login", "Team and role permissions", "Password and session security"],
      },
      {
        title: "Subscriptions and Billing",
        text: "Stripe powered plans, trials and invoices that make charging customers simple and reliable.",
        points: ["Plans and free trials", "Upgrade and cancel flows", "Invoices and webhooks"],
      },
      {
        title: "Dashboards and Reporting",
        text: "Clear data views, charts and exports that help your users see value every time they log in.",
        points: ["Charts and KPIs", "Filters and exports", "White label reports"],
      },
      {
        title: "AI Features",
        text: "Language model features inside your product, from content generation to analysis and automation.",
        points: ["OpenAI and Claude integration", "Prompt and cost control", "Human review steps"],
      },
      {
        title: "Scalable Architecture",
        text: "Clean APIs, background jobs and cloud deployment designed to handle growth without rewrites.",
        points: ["Modular backend design", "Queues and scheduled jobs", "Monitoring and backups"],
      },
    ],
    process: [
      { title: "Validate", text: "We define the user, the problem and the core flow." },
      { title: "Design", text: "Wireframes, data model and a clickable prototype." },
      { title: "Build", text: "Iterative sprints with working demos every week." },
      { title: "Launch and iterate", text: "Deploy, collect feedback and prioritize the next release." },
    ],
    compare: {
      title: "Dev agency, no-code or a full hire? Neither.",
      criteria: ["Production experience", "Custom features", "Fast MVP", "Code you own", "AI features", "Affordable"],
      me: [true, true, true, true, true, true],
      inHouse: [true, true, false, true, true, false],
      cheap: [false, false, true, true, false, true],
      ai: [false, false, true, false, true, true],
    },
    tools: ["TypeScript", "React", "Node.js", "Express", "SQL", "REST API"],
    idealFor: ["Founders with a validated idea", "Agencies productizing their service", "Teams replacing spreadsheets with software", "Startups needing a technical partner"],
    faqs: [
      { q: "Have you built SaaS products before?", a: "Yes. I have helped build three live SaaS tools at GrowMinion, covering local SEO management, content and copywriting, and HR management." },
      { q: "How long does an MVP take?", a: "Most focused MVPs take 4 to 10 weeks, depending on scope and integrations. You see working demos every week, so there are no long silent stretches." },
      { q: "Who owns the code?", a: "You do. Full source code, infrastructure access and documentation are handed over at launch." },
      { q: "Can you add AI features to my product?", a: "Yes. I integrate language models for generation, summarizing, search and analysis, with cost controls and review steps built in." },
      { q: "What tech stack do you use?", a: "Mostly Next.js, React, Node.js, MongoDB or PostgreSQL, Stripe and cloud hosting on Vercel or AWS. I choose based on your product, not habit." },
      { q: "Can you work with my existing team or codebase?", a: "Yes. I can join as a technical partner, take over a stalled build or add features to an existing product after a short code review." },
    ],
    proof: [
      { label: "Local SEO management tool", url: "https://local-seo.growminion.ca/" },
      { label: "Content and copywriting tool", url: "https://seo.growminion.ca/" },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
