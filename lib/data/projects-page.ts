/**
 * Editable content for the Projects page.
 * Anything marked "[Confirm: ...]" is a placeholder that needs verified project details.
 */

export type Category = {
  id: string;
  title: string;
  text: string;
  icon: "app" | "saas" | "seo" | "content";
  href: string;
};

export const categories: Category[] = [
  { id: "web", title: "Web Applications", text: "Business-focused websites and management systems.", icon: "app", href: "#concepts" },
  { id: "saas", title: "SaaS Products", text: "Digital tools designed to simplify business workflows.", icon: "saas", href: "#saas" },
  { id: "seo", title: "SEO Solutions", text: "Local SEO workflows and content optimization tools.", icon: "seo", href: "#saas" },
  { id: "content", title: "Content & Copywriting", text: "Niche-specific content designed around business goals.", icon: "content", href: "#writing" },
];

export type FeaturedProject = {
  id: string;
  number: string;
  title: string;
  category: string;
  context: string;
  url?: string;
  /** Shown beside the link when the URL still needs confirming */
  urlNote?: string;
  image: string;
  imageAlt: string;
  overview: string;
  challenge: string;
  role: string;
  solution: string[];
  outcome: string;
  cta: string;
  details: { approach: string; deliverables: string[]; stack: string[] };
};

export const buildBenefits = [
  { title: "Lower cost", text: "No per-seat or per-scan license fees for the tool itself. Agencies stop renting software that charges more as they grow.", icon: "wallet" as const },
  { title: "Easy maintenance", text: "One codebase the team understands. Changes ship in days, not as a feature request to a vendor.", icon: "wrench" as const },
  { title: "Better output", text: "Built around the agency workflow, so the tool fits the job instead of forcing the job to fit the tool.", icon: "sparkles" as const },
  { title: "Full ownership", text: "The data, the logic and the roadmap stay in house. No lock-in and no surprise pricing changes.", icon: "key" as const },
];

export const productStack = ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Node.js", "Express.js", "REST API", "SQL", "JWT", "Git", "GitHub", "Cloud hosting"];

export const featuredProjects: FeaturedProject[] = [
  {
    id: "local-seo",
    number: "01",
    title: "Local Rank Tracker (GeoGrid)",
    category: "SaaS / Local SEO",
    context: "Built in-house at Growminion as an alternative to paid GeoGrid tools.",
    url: "https://local-seo.growminion.ca/",
    image: "/images/projects/saas-local-seo.png",
    imageAlt: "Local SEO command center with grid rank tracking, GBP management, SERP results and geotag images",
    overview:
      "A local rank tracking platform that scans Google results block by block on a map grid, so an agency can see where a business ranks in every part of its service area.",
    challenge:
      "A single average ranking hides the truth: a business can rank first near its office and vanish a few blocks away. Paid GeoGrid tools solve this, but charge per scan, per location or per seat, which gets expensive for an agency with many clients.",
    role: "Web and automation engineer on the Growminion team. I helped design and build the product end to end, across the interface, the backend and the database.",
    solution: [
      "GeoGrid scans on a configurable grid (for example 7 by 7 pins)",
      "Target business profile with address and phone, plus a movable scan center",
      "Keyword tracking with suggested keywords and auto generation",
      "Standalone scans or scans added to a saved business profile",
      "Multi-location dashboards and white-label reporting for agencies",
    ],
    outcome:
      "Growminion now runs GeoGrid scans on a tool it owns, with no per-scan or per-seat license fee for the software itself. Hosting and map data costs still apply. [Confirm: add measured results, such as scans run or monthly savings, if you want numbers shown.]",
    cta: "Explore Live Product",
    details: {
      approach:
        "Started from the agency routine: pick a client, choose keywords, run a scan, read the grid and report it. Each screen was built around those steps, then tested on real client locations and refined.",
      deliverables: [
        "Interactive map with scan grid and ranking pins",
        "Business profile and keyword management",
        "Scan history and ranking trends",
        "Branded client reports",
      ],
      stack: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Node.js", "Express.js", "REST API", "SQL", "JWT", "Maps", "Git", "GitHub", "Cloud hosting"],
    },
  },
  {
    id: "seo-content-tools",
    number: "02",
    title: "AI Content Engine for Local SEO",
    category: "SaaS / Content and SEO",
    context: "Built in-house at Growminion as an alternative to paid AI writing and page-builder tools.",
    url: "https://seo.growminion.ca/",
    image: "/images/projects/saas-content.png",
    imageAlt: "CraftMinion AI SEO content and strategy platform with content writer, meta optimizer and competitor research",
    overview:
      "An AI content tool that analyzes competitors, writes location and service pages in a consistent brand voice and publishes them straight to WordPress.",
    challenge:
      "Local SEO needs dozens of unique location and service pages. Writing them by hand is slow, and generic paid AI tools produce off-brand copy and charge by volume.",
    role: "Web and automation engineer on the Growminion team. I helped design and build the product end to end, across the interface, the backend, the database and the publishing integration.",
    solution: [
      "Competitor analysis that feeds each page brief",
      "Page generation from structured location and service data",
      "Prompt templates that enforce voice, structure and SEO rules",
      "One-click publishing to WordPress, or into a human review queue",
      "On-page formatting: headings, internal links and schema",
    ],
    outcome:
      "Growminion can produce and publish location pages from one system it owns, with a review step before anything goes live, and no per-page fee from a third-party tool. AI model and hosting costs still apply. [Confirm: add measured results, such as pages published per month, if you want numbers shown.]",
    cta: "Explore Live Product",
    details: {
      approach:
        "Mapped the manual content workflow first (research, draft, format, publish), then automated each step and kept a human review gate where quality matters most.",
      deliverables: [
        "Structured data input for locations and services",
        "Prompt and template system",
        "WordPress publishing integration",
        "Review queue and content history",
      ],
      stack: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Node.js", "Express.js", "REST API", "SQL", "JWT", "AI", "Git", "GitHub", "Cloud hosting"],
    },
  },
  {
    id: "hr-management",
    number: "03",
    title: "MinionHR: HR and Management Tool",
    category: "SaaS / HR and Business Operations",
    context: "Built in-house for Growminion LLC as an alternative to paid HR and team management software.",
    url: "https://hr.growminion.ca/",
    image: "/images/projects/saas-hr.png",
    imageAlt: "MinionHR platform with employees, attendance, leave, recruitment, onboarding and performance modules",
    overview:
      "An all-in-one HR and team operations system covering people, attendance, leave, projects, meetings, timesheets, recruitment, onboarding and performance in one dashboard.",
    challenge:
      "Growing teams end up with HR in one tool, time tracking in another and chat in a third. Paid suites charge per employee and still leave gaps for how the agency actually works.",
    role: "Web and automation engineer on the Growminion team. I helped design and build the product end to end, across the interface, the backend and the database.",
    solution: [
      "Dashboard with attendance, on-time projects, hours logged and leave balance",
      "Employees, attendance, leave and timesheets",
      "Daily plan and end-of-day reports, team dashboard and team feed",
      "Projects, meetings, chat and documents",
      "Recruitment, onboarding, performance, goals and OKRs, and employee verification",
    ],
    outcome:
      "Growminion runs people operations from one system built around its own workflow, with no per-employee license fee for the software itself. [Confirm: add measured results, such as hours saved on admin, if you want numbers shown.]",
    cta: "Explore Live Product",
    details: {
      approach:
        "Listed every HR and operations routine the team repeated each week, grouped them into modules, and shipped the daily-use ones first (check in, leave, timesheets) before recruitment and performance.",
      deliverables: [
        "Role-based dashboards for staff and managers",
        "Attendance, leave and timesheet modules",
        "Goals and OKRs, performance and onboarding",
        "Team chat, meetings and documents",
      ],
      stack: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Node.js", "Express.js", "REST API", "SQL", "JWT", "Real-time", "File storage", "Git", "GitHub", "Cloud hosting"],
    },
  },
];

export type ConceptProject = {
  id: string;
  title: string;
  industry: string;
  url: string;
  description: string;
  problem: string;
  solution: string;
  image: string;
};

export const conceptProjects: ConceptProject[] = [
  {
    id: "docappoint",
    title: "Doctor Appointment System",
    industry: "Healthcare",
    url: "https://docappoint-client-final.vercel.app/",
    description: "A web app for exploring doctors and booking appointments.",
    problem: "Finding the right doctor and booking a visit can feel confusing and slow.",
    solution: "A clear doctor directory with a simple appointment-booking flow.",
    image: "/images/projects/docappoint.png",
  },
  {
    id: "keenkeeper",
    title: "Social Media Management",
    industry: "Marketing",
    url: "http://keen-keeper-ruby.vercel.app/",
    description: "An app for organizing social content and management workflows.",
    problem: "Social content and follow ups are easy to lose across channels and notes.",
    solution: "One organized interface for tracking, planning and managing activity.",
    image: "/images/projects/keenkeeper.png",
  },
  {
    id: "bibliodrop",
    title: "Library Management App",
    industry: "Education",
    url: "https://biblio-drop-frontend.vercel.app/",
    description: "An app for organizing book catalogs and availability.",
    problem: "Readers and librarians need to see what is available without manual lookups.",
    solution: "A browsable catalog with clear availability and library workflows.",
    image: "/images/projects/bibliodrop.png",
  },
  {
    id: "tiles",
    title: "Tiles Sales Website",
    industry: "Retail / E-commerce",
    url: "https://sani-tiles-574x.vercel.app/all-tiles",
    description: "A storefront for browsing tile collections.",
    problem: "Large product ranges are hard to browse when presentation is cluttered.",
    solution: "A clean catalog that makes tile collections easier to discover and compare.",
    image: "/images/projects/tiles.png",
  },
];

export type WritingSample = {
  id: string;
  title: string;
  industry: string;
  url: string;
  summary: string;
  focus: string[];
  image: string;
  imageAlt: string;
};

export const writingSamples: WritingSample[] = [
  {
    id: "medspa",
    title: "Medspa Content",
    industry: "Medical Spa / Wellness",
    url: "https://docs.google.com/document/d/1MNRrdGx6PLKwYlErmXwvSSwrT4tvw6KvT03J_tOQGPc/edit",
    summary: "Content written for a medical spa audience, explaining services in a clear and reassuring way.",
    focus: ["Service communication", "Audience needs", "Trust-building tone"],
    image: "/images/projects/medspa.jpg",
    imageAlt: "A calm treatment room in a medical spa",
  },
  {
    id: "realestate",
    title: "Real Estate Content",
    industry: "Real Estate",
    url: "https://docs.google.com/document/d/1a5r45mWlLQLTEfqBmPorJDEKYdalR2w7_D5xUxZWSIQ/edit",
    summary: "Property-related content written for buyers and sellers, with clear and relevant messaging.",
    focus: ["Property communication", "Audience relevance", "Clear messaging"],
    image: "/images/projects/realestate.jpg",
    imageAlt: "A laptop showing a property map and floor plan",
  },
  {
    id: "insurance",
    title: "Insurance Agency Content",
    industry: "Insurance",
    url: "https://docs.google.com/document/d/1nft-8dYQSUjO2vOlDqCuxC3CnYOhbVNJZhrF73ZQTwM/edit",
    summary: "Informative content that explains insurance services in plain language.",
    focus: ["Clear service explanations", "Informative writing", "Trust-building tone"],
    image: "/images/projects/insurance.jpg",
    imageAlt: "A person signing an insurance document",
  },
];

export const processSteps = [
  { title: "Discover", text: "Understand business objectives, user needs, existing workflows and pain points.", icon: "search" as const },
  { title: "Plan", text: "Define requirements, user journeys, information architecture and solution priorities.", icon: "map" as const },
  { title: "Design and Build", text: "Create user-focused interfaces, web applications, SaaS features or content solutions according to the project scope.", icon: "pen" as const },
  { title: "Test and Improve", text: "Validate functionality, usability and agreed requirements, then refine the solution.", icon: "check" as const },
];

export type Industry = {
  title: string;
  image: string;
  imageAlt: string;
  challenge: string;
  help: string;
  /** "demonstrated" means there is a project on this page; "capability" means broader service scope */
  basis: "demonstrated" | "capability";
};

export const industries: Industry[] = [
  { title: "Healthcare and Medspa", image: "/images/projects/medspa.jpg", imageAlt: "A calm medical spa treatment room", challenge: "Patients need clear information and easy booking.", help: "Clear service content and simple appointment flows.", basis: "demonstrated" },
  { title: "Real Estate", image: "/images/projects/realestate.jpg", imageAlt: "A laptop showing a property map and floor plan", challenge: "Listings and guides must speak to specific buyers.", help: "Audience-focused content and clean presentation.", basis: "demonstrated" },
  { title: "Local Businesses", image: "/images/projects/saas-local-seo.png", imageAlt: "Local SEO command center with grid rank tracking and business profile management", challenge: "Standing out in local search takes steady, organized effort.", help: "Local SEO workflows and location-based content.", basis: "capability" },
  { title: "SaaS and Technology", image: "/images/projects/saas-content.png", imageAlt: "An AI SEO content and strategy SaaS platform dashboard", challenge: "Complex workflows must feel simple to users.", help: "Product-minded web apps and dashboards.", basis: "demonstrated" },
  { title: "Retail and E-commerce", image: "/images/projects/tiles.png", imageAlt: "A tile store catalog website", challenge: "Large catalogs are hard to browse.", help: "Catalog design that improves product discovery.", basis: "demonstrated" },
  { title: "Insurance", image: "/images/projects/insurance.jpg", imageAlt: "A person signing an insurance document", challenge: "Customers need plain-language explanations.", help: "Informative, trust-building service content.", basis: "demonstrated" },
  { title: "HR and Business Operations", image: "/images/projects/saas-hr.png", imageAlt: "An HR, attendance and team productivity platform", challenge: "People data and admin tasks live in too many places.", help: "Organized management tools and workflows.", basis: "demonstrated" },
  { title: "Education and Libraries", image: "/images/projects/bibliodrop.png", imageAlt: "A library and book catalog web app", challenge: "Catalogs and availability need to be easy to check.", help: "Browsable catalogs and simple management flows.", basis: "demonstrated" },
];

export const whyCards = [
  { title: "Problem-First Thinking", text: "Understand the purpose behind a project before deciding how to approach it.", icon: "target" as const },
  { title: "Product-Oriented Approach", text: "Focus on usability, workflows and business requirements.", icon: "layers" as const },
  { title: "Flexible Solutions", text: "Work across web applications, SaaS tools, SEO-related workflows and content projects.", icon: "shuffle" as const },
  { title: "Privacy-Conscious Portfolio", text: "Respect client confidentiality and showcase work only in appropriate, authorized ways.", icon: "lock" as const },
];
