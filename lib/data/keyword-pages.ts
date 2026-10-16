/**
 * Content for the personal "hire me" landing pages: /n8n-developer, /full-stack-developer, /growth-engineer.
 *
 * Keyword map (avoid cannibalization):
 * - These pages target role keywords: "n8n developer", "hire n8n developer", "full stack developer",
 *   "growth engineer", plus niche modifiers ("for law firms", "for local businesses").
 * - /services/* pages target service keywords ("n8n automation services", "full-stack web development").
 *   They link here with descriptive anchors and these pages link back to them.
 *
 * Every figure below is taken from a published case study (content/work) or an existing service FAQ.
 */

export type KeywordSlug = "n8n-developer" | "full-stack-developer" | "growth-engineer";

export type KeywordPage = {
  slug: KeywordSlug;
  /** Breadcrumb and nav label */
  label: string;
  seo: { title: string; description: string };
  hero: { eyebrow: string; h1: string; intro: string[]; proof: { value: string; label: string }[] };
  /** Main "what I do" block */
  what: { title: string; intro?: string; items: { title: string; text: string; href?: string; linkText?: string }[] };
  /** One focused narrative section (niche or explainer) */
  focus: { title: string; paragraphs: string[]; links?: { href: string; text: string }[] };
  process: { title: string; steps: { title: string; text: string }[]; note?: string };
  tech: { title: string; text: string; tools: string[] };
  caseStudies: { title: string; slugs: string[] };
  faqs: { q: string; a: string }[];
  /** Related service pages and posts, linked with descriptive anchors */
  related: { href: string; text: string }[];
  cta: { title: string; text: string };
};

export const keywordPages: Record<KeywordSlug, KeywordPage> = {
  "n8n-developer": {
    slug: "n8n-developer",
    label: "n8n Developer",
    seo: {
      title: "n8n Developer for Law Firms & Local Businesses",
      description:
        "Hire an n8n developer for lead routing, CRM automation and GoHighLevel integrations. Abdul Kaiyum Sani builds n8n workflows for US law firms and agencies.",
    },
    hero: {
      eyebrow: "Hire an n8n developer",
      h1: "n8n Developer for Law Firms, Agencies and Local Businesses",
      intro: [
        "I'm Abdul Kaiyum Sani, an n8n developer and automation engineer on the GrowMinion core team. I build n8n workflows that capture a lead the moment it arrives, route it to the right person, update your CRM and send a useful reply, so no enquiry waits in an inbox overnight.",
        "Most of my automation work is for law firms, agencies and local service businesses in the US, where a slow reply usually means the lead calls the next firm on the list.",
      ],
      proof: [
        { value: "89", label: "legal articles published in 24 hours by an n8n pipeline" },
        { value: "<2 min", label: "first response to new leads (from 6.5 hours)" },
        { value: "8 hrs/week", label: "of manual lead entry removed" },
      ],
    },
    what: {
      title: "What I build as your n8n developer",
      intro: "Each workflow is built for one job, tested with real data and documented so your team can run it.",
      items: [
        {
          title: "Lead capture and routing",
          text: "Website forms, ad leads, chat widgets and email land in one workflow through webhooks. Each lead is validated, checked for duplicates, tagged by service and location, and assigned to the right person.",
        },
        {
          title: "CRM automation",
          text: "Contacts, deals and tasks are created or updated automatically, with sync between your CRM, Google Sheets or Airtable so records stay consistent without copy and paste.",
        },
        {
          title: "GoHighLevel integrations",
          text: "For teams that run on GoHighLevel, I connect GHL to your website, forms and n8n so pipelines, tags and follow-up sequences fire from real data.",
          href: "/services/lead-generation-ghl",
          linkText: "GoHighLevel lead generation setup",
        },
        {
          title: "Instant follow-up and alerts",
          text: "The lead gets an immediate, personal reply. Your team gets an SMS, email or Slack alert, and an escalation fires if nobody responds within a set window.",
        },
        {
          title: "AI-assisted workflows",
          text: "Language models inside n8n sort enquiries, summarise messages and draft content, always with a human review step where accuracy matters.",
        },
        {
          title: "Monitoring and error handling",
          text: "Retries, logs and failure alerts are built in, so a workflow never breaks silently and problems get fixed before they cost you leads.",
        },
      ],
    },
    focus: {
      title: "An n8n developer for law firms",
      paragraphs: [
        "Law firms have two problems that automation fixes well: intake that depends on someone checking an inbox, and content that never gets written because the only people who can write it are busy with billable work.",
        "For an intellectual property and personal injury firm, I built an AI content system on an n8n workflow. Topics and keywords moved from a whiteboard into a content queue, and the workflow researched, outlined and drafted each article with a prompt template tuned for legal content, including disclaimers and a firm-appropriate tone. It published 89 articles in 24 hours with a 98% success rate.",
        "The same thinking applies to intake. Every consultation request gets an instant acknowledgment, lands in the right practice-area pipeline and alerts the right attorney or paralegal, so a potential client hears back in minutes instead of the next morning.",
      ],
      links: [
        { href: "/case-studies/ai-legal-content-automation", text: "Read the AI legal content automation case study" },
        { href: "/blog/why-traditional-lead-generation-is-dead-2026", text: "Why response speed now decides who wins the lead" },
      ],
    },
    process: {
      title: "How I work",
      steps: [
        { title: "Audit the manual work", text: "You show me where the time goes. I map every step, tool and hand-off, and where leads or data get lost." },
        { title: "Design the workflow", text: "I draw the trigger, the steps and the exceptions, agree them with you and decide how errors are handled before building anything." },
        { title: "Build and test with real data", text: "Workflows are built in a safe environment and tested with real submissions before they are switched on." },
        { title: "Document and hand over", text: "You get a short written guide and a recorded walkthrough, so your team can run and adjust the workflow." },
      ],
      note: "Simple workflows take a few days. Multi-step systems with several integrations usually take 1 to 3 weeks, including testing and documentation.",
    },
    tech: {
      title: "Tools I use",
      text: "When a pre-built node is not enough, I write custom code nodes and call APIs directly. That comes from my full-stack development work, which also means I can fix the form or website that feeds the workflow.",
      tools: ["n8n (Cloud or self-hosted)", "Webhooks", "GoHighLevel", "OpenAI API", "Claude", "Google Sheets", "Gmail", "Slack", "WordPress REST API", "Node.js", "JavaScript"],
    },
    caseStudies: {
      title: "Results from automation projects",
      slugs: ["ai-legal-content-automation", "lead-automation-pipeline"],
    },
    faqs: [
      {
        q: "What does an n8n developer do?",
        a: "An n8n developer designs, builds and maintains automated workflows in n8n: connecting apps through APIs and webhooks, writing custom logic when pre-built nodes fall short, and adding error handling so the automation is reliable in production.",
      },
      {
        q: "Why hire an n8n developer instead of using Zapier or Make?",
        a: "n8n is more flexible, supports custom code and can be self-hosted, which keeps costs low at higher volumes and your data under your control. Zapier or Make are fine for simple two-step automations. An n8n developer helps most when routing rules, your CRM and follow-up logic need to work together.",
      },
      {
        q: "Can you work with my existing CRM and tools?",
        a: "If a tool has an API or a webhook, it can almost always be connected. If it has neither, we look for an export, an email trigger or another workaround.",
      },
      {
        q: "Do I need to host n8n myself?",
        a: "Not necessarily. I can use n8n Cloud or set up a self-hosted instance on a small server, and I will recommend the option that fits your volume and budget.",
      },
      {
        q: "What happens if a workflow breaks?",
        a: "Every workflow includes error handling, retries and alerts. I also offer a monitoring plan where I watch runs and fix issues before they affect your business.",
      },
      {
        q: "How long does an n8n project take?",
        a: "Simple workflows take a few days. Multi-step systems with several integrations usually take 1 to 3 weeks, including testing and documentation.",
      },
    ],
    related: [
      { href: "/services/n8n-automation", text: "n8n automation services: what is included" },
      { href: "/services/lead-generation-ghl", text: "GoHighLevel lead generation setup" },
      { href: "/blog/automate-repetitive-business-tasks-with-n8n", text: "How I use n8n to automate repetitive business tasks" },
      { href: "/blog/build-lead-capture-automation-under-an-hour", text: "Build a lead capture automation in under an hour" },
      { href: "/full-stack-developer", text: "Full-stack development for the website behind the workflow" },
    ],
    cta: {
      title: "Stop losing leads to a slow inbox",
      text: "Book a free 30-minute audit. I will look at how enquiries reach you today and tell you the first workflow I would build.",
    },
  },

  "full-stack-developer": {
    slug: "full-stack-developer",
    label: "Full-Stack Developer",
    seo: {
      title: "Full Stack Developer for Fast Business Websites",
      description:
        "Full-stack developer (MERN, TypeScript, Next.js) building fast websites, web apps and SaaS with Core Web Vitals and technical SEO built in, for US businesses.",
    },
    hero: {
      eyebrow: "Full-stack dev",
      h1: "Full-Stack Developer for Fast Websites, Web Apps and SaaS",
      intro: [
        "I'm Abdul Kaiyum Sani, a full-stack developer working with the MERN stack, TypeScript and Next.js. I build the whole product myself: the interface your visitors use, the API behind it and the database that stores it, so nothing falls into the gap between a front-end and a back-end contractor.",
        "I'm also a CSE student, so the fundamentals are solid: data structures, databases, networking and system design. On the GrowMinion core team I have helped build three SaaS products in code, and for clients I build business websites that load fast, rank and turn visitors into enquiries.",
      ],
      proof: [
        { value: "3x", label: "lead form submissions in 90 days after a rebuild" },
        { value: "<2s", label: "mobile load time (from over 6 seconds)" },
        { value: "2.4x", label: "demo booking rate on a SaaS landing page" },
      ],
    },
    what: {
      title: "What I build as a full-stack dev",
      items: [
        {
          title: "Business websites",
          text: "Multi-page sites with service pages, lead forms and tracking, built mobile first with Next.js and Tailwind CSS so they load fast and are easy to update.",
        },
        {
          title: "Web applications",
          text: "Booking, management and tracking apps with sign-in, user roles and dashboards, such as a doctor appointment system where patients browse doctors and book appointments.",
          href: "/projects",
          linkText: "See web app projects",
        },
        {
          title: "SaaS products",
          text: "From MVP to launch: authentication, billing, dashboards and APIs. At GrowMinion I helped build a GeoGrid rank tracker, an AI content engine and an HR platform.",
          href: "/services/saas-development",
          linkText: "SaaS development service",
        },
        {
          title: "APIs and databases",
          text: "Node.js and Express APIs with MongoDB or PostgreSQL, designed with clean data models, validation and room to grow.",
        },
        {
          title: "Integrations",
          text: "Stripe, CRMs, calendars and n8n workflows connected to your site, so data moves between tools without copy and paste.",
          href: "/n8n-developer",
          linkText: "n8n developer for workflow automation",
        },
      ],
    },
    focus: {
      title: "Performance and SEO are part of the build",
      paragraphs: [
        "A beautiful site that takes six seconds to load on a phone loses the visitor before the form is visible. Google's Core Web Vitals set the bar: Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds and Cumulative Layout Shift under 0.1.",
        "I build with server rendering, optimized images, minimal JavaScript, clean URLs, metadata and structured data from day one, so pages are easy for Google to crawl and fast for people to use.",
        "For a local restoration company, I rebuilt the site mobile first, added a click-to-call button and a one-field service request form, and set up conversion tracking through Google Tag Manager and Google Analytics. Mobile load time dropped from over 6 seconds to under 2, and lead form submissions tripled within 90 days.",
      ],
      links: [
        { href: "/case-studies/local-service-website-redesign", text: "Read the local service redesign case study" },
        { href: "/blog/why-i-audit-every-websites-core-web-vitals", text: "Why I audit every website's Core Web Vitals" },
      ],
    },
    process: {
      title: "How a build works",
      steps: [
        { title: "Scope", text: "We define pages, features and success measures before any code is written, so you only pay for what the site needs to do." },
        { title: "Design", text: "Wireframes and a responsive design you approve first." },
        { title: "Build", text: "Weekly progress on a live preview link, so nothing is a surprise." },
        { title: "Launch and hand over", text: "Testing across devices, performance tuning, deployment and documentation. You own the code and the hosting." },
      ],
      note: "A focused business site usually takes 2 to 4 weeks. Web apps with accounts, dashboards and integrations take longer, and you get a clear timeline after scoping.",
    },
    tech: {
      title: "Tech stack",
      text: "I choose the stack from the product, not from habit. Most builds use Next.js and React on the front end, Node.js on the back end and a hosted database, deployed on Vercel.",
      tools: ["React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express", "MongoDB", "PostgreSQL / SQL", "Tailwind CSS", "REST APIs", "Stripe", "Vercel", "GitHub"],
    },
    caseStudies: {
      title: "Results from web development projects",
      slugs: ["local-service-website-redesign", "saas-landing-page-design"],
    },
    faqs: [
      {
        q: "What does a full-stack developer do?",
        a: "A full-stack developer builds both sides of a website or app: the front end people see and use, and the back end, meaning the server, API and database. You get one person who understands how every part fits together.",
      },
      {
        q: "How long does a website take?",
        a: "A focused business site usually takes 2 to 4 weeks. Web apps with accounts, dashboards and integrations take longer, and you get a clear timeline after scoping.",
      },
      {
        q: "Will my site be good for SEO?",
        a: "Yes. I build with server rendering, structured data, clean URLs and fast load times, so pages are easy for Google to crawl and rank. On-page copy and SEO can be handled in the same project.",
      },
      {
        q: "Do you build in WordPress?",
        a: "My focus is custom Next.js and full-stack builds. I can still connect your site to WordPress as a headless content source if your team wants to keep editing there.",
      },
      {
        q: "Who owns the code and the hosting?",
        a: "You do. I hand over the full source code, set up hosting under your own account and document how everything works.",
      },
      {
        q: "Do you offer support after launch?",
        a: "Yes. I offer a short free bug-fix window after launch and optional monthly maintenance for updates, monitoring and small improvements.",
      },
    ],
    related: [
      { href: "/services/web-development", text: "Full-stack web development service details" },
      { href: "/services/saas-development", text: "SaaS development from MVP to launch" },
      { href: "/blog/why-modern-fast-frameworks-for-client-websites", text: "Why modern frameworks beat page builders for client sites" },
      { href: "/blog/why-i-audit-every-websites-core-web-vitals", text: "Core Web Vitals: why they matter and how to improve them" },
      { href: "/growth-engineer", text: "Growth engineering: content, conversion and automation" },
    ],
    cta: {
      title: "Need a site that loads fast and brings in leads?",
      text: "Book a free 30-minute audit. I will check your current site's speed, structure and lead forms and tell you what I would fix first.",
    },
  },

  "growth-engineer": {
    slug: "growth-engineer",
    label: "Growth Engineer",
    seo: {
      title: "Growth Engineer for Law Firms & Local Businesses",
      description:
        "What a growth engineer does, and how Abdul Kaiyum Sani combines SEO content, n8n automation and conversion-focused websites to get US businesses more calls.",
    },
    hero: {
      eyebrow: "Growth engineer",
      h1: "Growth Engineer for SEO, Automation and Conversion",
      intro: [
        "A growth engineer works on the whole path from a search result to a signed client, with the technical skills to change any part of it. I'm Abdul Kaiyum Sani, and that is the job I do for law firms and local businesses across the US.",
        "I write the content that brings in the right visitors, build the pages that turn them into enquiries and automate the follow-up so none of them go cold. Because one person owns all three, nothing gets lost between a writer, a developer and an automation contractor.",
      ],
      proof: [
        { value: "480 → 2,100", label: "organic visits a month for a law firm" },
        { value: "~3 → 22", label: "consultation requests a month" },
        { value: "12 of 12", label: "articles on Google's first page" },
      ],
    },
    what: {
      title: "What a growth engineer does",
      intro:
        "A marketer usually owns a channel. A developer usually owns the codebase. A growth engineer owns the number in between: how many visitors become leads, and how many leads become booked calls. In practice that means finding the step where people drop out, then fixing it with whatever the fix needs to be.",
      items: [
        {
          title: "SEO content that brings in buyers",
          text: "Service pages and articles written around real search intent and real client questions. For one law firm, rewritten service pages moved target practice areas into the top three results and lifted consultation requests from about 3 to 22 a month.",
          href: "/case-studies/law-firm-service-pages",
          linkText: "Law firm service pages case study",
        },
        {
          title: "Pages built to convert",
          text: "One clear next step, proof placed early and forms that ask only for what is needed. A SaaS landing page rebuilt this way went from a 1.8% to a 4.3% demo booking rate.",
          href: "/case-studies/saas-landing-page-design",
          linkText: "SaaS landing page case study",
        },
        {
          title: "Automation that protects every lead",
          text: "Instant replies, routing and reminders, so interest does not decay while a lead waits. One pipeline cut first response from 6.5 hours to under 2 minutes and lifted lead-to-meeting conversion from 11% to 19%.",
          href: "/n8n-developer",
          linkText: "How I work as an n8n developer",
        },
        {
          title: "Measurement you can act on",
          text: "Conversion tracking on form submissions and click-to-call taps, so decisions are based on calls and enquiries rather than guesses.",
        },
      ],
    },
    focus: {
      title: "How the pieces fit together",
      paragraphs: [
        "Most lead problems sit in the gaps between specialists. The developer builds a fast site but does not know what the copy needs to do. The copywriter writes a strong page that the form cannot support. The automation person inherits a form they did not design.",
        "When one person owns the website, the words and the workflow, those gaps close. The form is built for the automation, the copy is written for the page layout, and the page loads fast because someone cares about the conversion it carries.",
        "For a 4-month SEO blog series, every one of 12 articles reached Google's first page, the average keyword position moved from 47 to 6, and blog-attributed leads grew from about 1 to 18 a month. That only happens when the content, the site and the follow-up are planned together.",
      ],
      links: [
        { href: "/case-studies/seo-blog-content-series", text: "Read the SEO blog content series case study" },
        { href: "/blog/why-traditional-lead-generation-is-dead-2026", text: "Why traditional lead generation is “dead” in 2026" },
      ],
    },
    process: {
      title: "How a growth engagement works",
      steps: [
        { title: "Audit the funnel", text: "A free 30-minute audit of your site speed, your top service pages and what happens after someone submits a form." },
        { title: "Fix the biggest leak first", text: "We agree the one change that should move booked calls the most, whether that is a page, a form or a reply time." },
        { title: "Build, write and automate", text: "I make the change across the stack: content, code and workflow, with tracking in place before launch." },
        { title: "Measure and iterate", text: "We review rankings, enquiries and response times, then pick the next leak to fix." },
      ],
      note: "SEO content usually shows early movement in 2 to 4 months and compounds after 6. Automation and conversion fixes start working as soon as they go live.",
    },
    tech: {
      title: "Tools I use",
      text: "The tools change with the problem. These are the ones I use most for content, conversion and automation work.",
      tools: ["Ahrefs", "SurferSEO", "Google Analytics", "Google Tag Manager", "n8n", "GoHighLevel", "Next.js", "WordPress", "OpenAI API", "Claude"],
    },
    caseStudies: {
      title: "Proof from growth work",
      slugs: ["law-firm-service-pages", "seo-blog-content-series", "lead-automation-pipeline"],
    },
    faqs: [
      {
        q: "What is a growth engineer?",
        a: "A growth engineer is a technical marketer who improves the path from visitor to customer by changing whatever is in the way: content, page design, site speed, forms, tracking or follow-up automation. The focus is a business number, such as booked calls, rather than a single channel.",
      },
      {
        q: "What is the difference between a growth engineer and a growth marketer?",
        a: "A growth marketer usually plans campaigns and channels. A growth engineer can also build and change the website, the tracking and the automations that sit behind those campaigns, so fixes do not wait in a developer's queue.",
      },
      {
        q: "Is this only for law firms?",
        a: "No. Most of my work is for law firms, home service companies and real estate teams, and I also work with agencies and SaaS companies. The approach is the same: find where leads drop out and fix it.",
      },
      {
        q: "How soon will I see results?",
        a: "Automation and conversion fixes start working as soon as they go live. SEO content takes longer: for a newer site, expect early movement in 2 to 4 months and compounding results after 6 months.",
      },
      {
        q: "What does the free audit cover?",
        a: "A 30-minute call where we look at your site speed, your most important service pages and how enquiries are handled after someone submits a form. You leave with the first thing I would fix, whether or not we work together.",
      },
    ],
    related: [
      { href: "/services/copywriting", text: "Conversion copywriting for service businesses" },
      { href: "/services/blog-writing", text: "SEO blog writing that brings in buyers" },
      { href: "/services/lead-generation-ghl", text: "GoHighLevel lead generation setup" },
      { href: "/blog/how-to-write-service-pages-that-convert", text: "How to write service pages that convert" },
      { href: "/full-stack-developer", text: "Full-stack development for fast, crawlable sites" },
    ],
    cta: {
      title: "Find the leak in your lead flow",
      text: "Book a free 30-minute audit. I will look at your traffic, your top pages and your follow-up and tell you the first fix worth making.",
    },
  },
};

export const keywordPageList = Object.values(keywordPages);
