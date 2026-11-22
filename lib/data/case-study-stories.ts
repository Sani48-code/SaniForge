/**
 * Long-form story content for each case study page, keyed by the case study slug.
 *
 * The MDX file in content/work holds the listing data (title, tagline, metrics, chart). This file holds
 * the page story: summary, before/after table, problems solved, process, illustration and lessons.
 *
 * Rules: only facts the client project actually produced. Client names stay confidential.
 * Illustrations are drawn with sample data and are always labeled that way on the page.
 */

export type HighlightText = { pre?: string; highlight: string; post?: string };

export type ChangeRow = { metric: string; before: string; after: string; change: string; strong?: boolean };

export type Spotlight = { label: string; before: string; after: string; change: string };

export type ProblemRow = { title: string; detail: string; solution: string; result: string };

export type IllustrationKind =
  | "content-pipeline"
  | "serp-and-page"
  | "lead-flow"
  | "mobile-before-after"
  | "landing-before-after"
  | "topic-cluster";

export type CaseStudyStory = {
  /** H1, with the part to highlight. */
  headline: HighlightText;
  /** Short descriptor used instead of the confidential client name. */
  client: string;
  chips: string[];
  heroStat: { value: string; label: string };
  heroLine: HighlightText;
  intro: string;
  glance: { challenge: string; solution: string; result: string };
  kpis: { value: string; label: string; note: string }[];
  summary: string[];
  changes: ChangeRow[];
  spotlight: [Spotlight, Spotlight];
  startingPoint: { lead: string; limits: string[]; needs: string[] };
  shift: {
    lead: string;
    root: { title: string; sub: string };
    branches: { title: string; items: string[] }[];
    formula: string[];
    formulaNote: string;
  };
  steps: { title: string; short: string; body: string }[];
  problems: ProblemRow[];
  illustration: { kind: IllustrationKind; title: string; lead: string; caption: string };
  evidenceLead: string;
  interpret: { label: string; badge: string; text: string }[];
  quote?: { text: string; by: string };
  why: { lead: string; items: { title: string; text: string }[] };
  takeaways: string[];
  next: string;
  outcome: string;
};

export const caseStudyStories: Record<string, CaseStudyStory> = {
  "ai-legal-content-automation": {
    headline: {
      pre: "From a Whiteboard of Ideas to ",
      highlight: "89 Published Articles",
      post: ": AI Content Automation for a Law Firm",
    },
    client: "IP & personal injury law firm",
    chips: ["Case study", "n8n", "AI content", "WordPress"],
    heroStat: { value: "89", label: "Articles published in the first month" },
    heroLine: {
      pre: "For an IP and personal injury law firm, ",
      highlight: "turning a whiteboard of topics",
      post: " into a review-ready publishing pipeline",
    },
    intro:
      "An IP and personal injury law firm had far more content ideas than time to write them. We built an n8n and AI pipeline that turns its topic list into researched, formatted WordPress drafts, while a person at the firm still signs off before anything goes live.",
    glance: {
      challenge: "A whiteboard full of topics, attorneys too busy to write, and drafts that never got published",
      solution: "An n8n research, drafting and WordPress pipeline with human review before publishing",
      result: "89 articles published in the first month, with a 98% draft-to-publish success rate",
    },
    kpis: [
      { value: "89", label: "Articles published", note: "In the first month" },
      { value: "24h", label: "Saved per batch", note: "Writing time near zero" },
      { value: "98%", label: "Draft-to-publish success", note: "Was inconsistent" },
      { value: "Minutes", label: "Idea to draft", note: "Was days, if it happened at all" },
    ],
    summary: [
      "The firm needed a steady stream of educational content, from trademark guides and copyright explainers to DMCA walkthroughs and LLC vs. corporation comparisons, so prospective clients would find it while researching. Ideas were never the problem. The only people who could write accurately were the attorneys and paralegals, and every article competed with billable client work. Billable work always won, so the content calendar lived on a whiteboard and WordPress filled up with unfinished drafts.",
      "Instead of trying to free up attorney hours, we moved the writing and publishing work into an automated pipeline. The firm keeps control of topics, keywords and tone. The system researches, outlines, drafts, formats and stages each article in WordPress for review. In the first month, 89 articles went from idea to published, with a 98% draft-to-publish success rate.",
    ],
    changes: [
      { metric: "Articles published", before: "Sporadic, unpredictable", after: "89 in the first month", change: "Consistent output", strong: true },
      { metric: "Time from idea to draft", before: "Days, if it happened at all", after: "Minutes", change: "Days to minutes", strong: true },
      { metric: "Time saved per batch", before: "N/A", after: "24 hours", change: "+24h per batch", strong: true },
      { metric: "Draft-to-publish success", before: "Inconsistent", after: "98%", change: "98% success" },
      { metric: "Progress tracking", before: "A whiteboard", after: "Live dashboard", change: "Full visibility" },
    ],
    spotlight: [
      { label: "Time from idea to draft", before: "Days", after: "Minutes", change: "Days to minutes" },
      { label: "Articles published", before: "Sporadic", after: "89", change: "In the first month" },
    ],
    startingPoint: {
      lead: "The firm had good topics and real expertise. What it lacked was a way to turn topics into published content without taking attorneys away from client matters.",
      limits: [
        "Subject-matter expertise locked inside the busiest people in the building",
        "Content ideas piling up on a whiteboard faster than anyone could write them",
        "Every article a one-off effort, with no repeatable process behind it",
        "Finished drafts left unpublished because formatting and uploading took time nobody had",
        "Content work competing directly with billable client hours",
        "No trustworthy view of what was drafted, published or still waiting",
      ],
      needs: [
        "The firm stays in control of topics, keywords and tone",
        "The topic list becomes a queue a system can work through",
        "Research and drafting done without pulling attorneys off client work",
        "Accuracy-conscious language, disclaimers and a firm-appropriate tone on every draft",
        "Drafts formatted, illustrated and waiting in WordPress for review",
        "One dashboard showing what is generated, in review and published",
      ],
    },
    shift: {
      lead: "We did not try to find more attorney hours. We took the writing and publishing work out of their week and kept their judgement where it matters most: choosing topics and approving drafts.",
      root: { title: "AI content pipeline", sub: "Built on n8n, publishing to WordPress" },
      branches: [
        { title: "Input", items: ["Topic & keyword queue", "Practice-area targets", "Form trigger"] },
        { title: "Research & draft", items: ["Research agent", "Structured outline", "Legal prompt template"] },
        { title: "Review", items: ["Auto formatting", "Matched image", "WordPress draft for sign-off"] },
        { title: "Visibility", items: ["Live dashboard", "Generate to publish pipeline", "Recent activity feed"] },
      ],
      formula: ["the firm's topics", "automated research and drafting", "human sign-off"],
      formulaNote: "Accurate, on-brand content that gets published without competing with billable work",
    },
    steps: [
      {
        title: "Topic queue",
        short: "Whiteboard to queue",
        body: "Practice areas and target keywords such as personal injury, wrongful death, car accident, securities fraud and class action became rows in a content queue the automation pulls from continuously.",
      },
      {
        title: "Research",
        short: "Research agent",
        body: "A form submission triggers the n8n workflow, and a research agent gathers accurate, up-to-date information on the topic before any writing starts.",
      },
      {
        title: "Outline & draft",
        short: "Legal prompt template",
        body: "The workflow builds a structured outline, then a full draft, governed by a prompt template tuned for legal content: accuracy-conscious language, proper disclaimers and the firm's tone.",
      },
      {
        title: "Format & stage",
        short: "WordPress draft",
        body: "Each draft is formatted automatically, given a matched image and pushed into WordPress as a ready-to-review post.",
      },
      {
        title: "Review",
        short: "Human sign-off",
        body: "Legal content carries real liability, so nothing publishes blindly. A person at the firm checks each draft before it goes live.",
      },
      {
        title: "Track",
        short: "Live dashboard",
        body: "A dashboard shows content generated, articles published, time saved and success rate, plus the Generate, Optimize, Review, Publish pipeline for every piece.",
      },
    ],
    problems: [
      {
        title: "Expertise locked in busy people",
        detail: "The only people qualified to write accurate legal content were also the least available.",
        solution: "A research agent and a legal-specific prompt template produce the draft. Attorneys only review.",
        result: "Attorneys stay on billable client work.",
      },
      {
        title: "Ideas piled up, nothing shipped",
        detail: "The whiteboard kept growing while the published count did not.",
        solution: "The topic list became a queue the automation works through continuously.",
        result: "Adding a topic is adding a row.",
      },
      {
        title: "No repeatable process",
        detail: "Every article that did get written was a one-off effort.",
        solution: "One n8n workflow runs every article through the same research, outline, draft and format steps.",
        result: "Every article follows the same standard.",
      },
      {
        title: "Drafts never got published",
        detail: "Uploading, formatting and scheduling took time nobody had, so finished drafts sat unpublished.",
        solution: "Drafts are formatted, given a matched image and staged in WordPress automatically.",
        result: "98% draft-to-publish success.",
      },
      {
        title: "Legal content cannot be wrong",
        detail: "Publishing blindly was not an option for content that carries real liability.",
        solution: "The workflow stops at a review-ready draft, and a person signs off before anything goes live.",
        result: "Speed without giving up accuracy.",
      },
      {
        title: "No visibility into progress",
        detail: "A whiteboard was the only record, and nobody trusted it.",
        solution: "A live dashboard and pipeline view show where every piece of content stands.",
        result: "Anyone on the team can check status at a glance.",
      },
    ],
    illustration: {
      kind: "content-pipeline",
      title: "Inside the Pipeline",
      lead: "The workflow behind every article, and the dashboard that replaced the whiteboard.",
      caption: "Workflow and dashboard (sample data): pipeline steps, results and recent activity",
    },
    evidenceLead: "Articles published, cumulative across the first four weeks of the rollout.",
    interpret: [
      { label: "Articles published", badge: "89 in month one", text: "The total that went from topic to live post in the first month, after the firm's review." },
      { label: "Time saved", badge: "24h per batch", text: "The writing and formatting time the pipeline removes from each batch of articles." },
      { label: "Success rate", badge: "98%", text: "The share of generated drafts that went on to be published after review." },
      { label: "Idea to draft", badge: "Days to minutes", text: "How long a topic waits before there is a full draft to review." },
    ],
    why: {
      lead: "The pipeline worked because it automated execution, not judgement. The firm still decides what to write and approves every article.",
      items: [
        { title: "Control", text: "Topics, keywords and tone come from the firm. The system never picks its own subjects." },
        { title: "Consistency", text: "Every article runs through the same research, outline, draft and format steps." },
        { title: "Safety", text: "A human review step sits before publishing, so liability stays managed." },
        { title: "Visibility", text: "One dashboard replaced a whiteboard nobody trusted as a source of truth." },
      ],
    },
    takeaways: [
      "The bottleneck usually is not ideas, it is execution",
      "High-stakes content still benefits from automation, as long as review stays in the loop",
      "Visibility matters as much as speed",
      "Once the pipeline exists, new topics are just new rows in the queue",
    ],
    next: "The same pipeline scales across practice areas. Adding topics such as securities fraud, class action or DMCA takes new rows in the queue, with no extra engineering.",
    outcome:
      "A whiteboard of crossed-out ideas became a live activity feed. 89 articles were published in the first month while the attorneys stayed on client work.",
  },

  "law-firm-service-pages": {
    headline: {
      pre: "Six Thin Practice Pages to ",
      highlight: "Top 3 Google Rankings",
      post: ": SEO Copywriting for a Law Firm",
    },
    client: "Multi-practice law firm",
    chips: ["Case study", "SEO copywriting", "Local SEO", "Schema"],
    heroStat: { value: "#1-3", label: "Google rankings for target practice-area terms" },
    heroLine: {
      pre: "For a multi-practice law firm, ",
      highlight: "rebuilding six service pages",
      post: " into client-first pages that rank and convert",
    },
    intro:
      "A multi-practice law firm had six practice-area pages that never ranked past page two or three. We rebuilt all six from scratch around the client's situation, real attorney answers, FAQ schema and local search signals.",
    glance: {
      challenge: "Six 300 to 400 word service pages stuck on page 2 to 3 of Google",
      solution: "All six rebuilt: client-first copy, FAQs with schema, local SEO and specific calls to action",
      result: "Top 3 rankings, 2,100 organic visits a month and about 22 consultation requests a month",
    },
    kpis: [
      { value: "#1-3", label: "Target keyword rankings", note: "Was page 2 to 3" },
      { value: "2,100/mo", label: "Organic traffic", note: "Was 480/mo" },
      { value: "~22/mo", label: "Consultation requests", note: "Was ~3/mo" },
      { value: "2m 04s", label: "Average time on page", note: "Was 51 seconds" },
    ],
    summary: [
      "The firm had strong attorneys and a good track record, but none of it showed up on its practice-area pages. Each page ran 300 to 400 words of dense legal language written the way attorneys talk to each other. There were no FAQs, almost no local signals, and every page ended with the same generic Contact Us button.",
      "We rebuilt all six pages with one framework: open with the visitor's situation, add depth from the attorneys' real answers, answer long-tail questions in FAQs with schema, weave in local signals, and end with a small, specific next step. Within three months the average position for target terms moved from about 45 to 3, and consultation requests from organic search rose from about 3 to about 22 a month.",
    ],
    changes: [
      { metric: "Ranking position (target keywords)", before: "Page 2 to 3", after: "#1 to 3", change: "First page", strong: true },
      { metric: "Organic traffic to practice pages", before: "480/mo", after: "2,100/mo", change: "4.4x", strong: true },
      { metric: "Consultation requests from organic", before: "~3/mo", after: "~22/mo", change: "~7x", strong: true },
      { metric: "Average time on page", before: "51s", after: "2m 04s", change: "2.4x" },
      { metric: "Words per practice page", before: "300 to 400", after: "1,200 to 1,800", change: "Real depth" },
    ],
    spotlight: [
      { label: "Average position, target terms", before: "45", after: "3", change: "Within three months" },
      { label: "Consultation requests a month", before: "~3", after: "~22", change: "About 7x" },
    ],
    startingPoint: {
      lead: "The firm was invisible for the searches that bring in cases. The pages, not the firm, were the problem.",
      limits: [
        "Thin pages of 300 to 400 words competing for tough local legal terms",
        "Dense legal language written for attorneys, not for anxious clients",
        "No FAQ sections to catch question-based searches",
        "A city name mentioned once, and no local or legal service schema",
        "A generic Contact Us button as the only next step",
        "Six pages, each built differently, with no shared framework",
      ],
      needs: [
        "Pages that open with the visitor's exact situation",
        "Depth drawn from the attorneys' real answers to client questions",
        "FAQ sections marked up so Google can show the answers",
        "Local signals throughout the copy, plus Attorney and LegalService schema",
        "A small, specific first step instead of an open-ended ask",
        "One framework applied the same way across all six pages",
      ],
    },
    shift: {
      lead: "We stopped treating the pages as brochures about the firm and rebuilt them as answers to the client's problem, structured for both the reader and Google.",
      root: { title: "Practice-area page framework", sub: "Applied to all six pages" },
      branches: [
        { title: "Client-first", items: ["Situation-led opening", "Plain-language copy"] },
        { title: "Depth", items: ["1,200 to 1,800 words", "Answers from real consultations"] },
        { title: "Search signals", items: ["FAQ + FAQ schema", "City & region throughout", "Attorney & LegalService schema"] },
        { title: "Conversion", items: ["Free 15-minute consultation", "Low-commitment first step"] },
      ],
      formula: ["the client's situation", "real attorney answers", "local search signals"],
      formulaNote: "Pages that both Google and anxious prospective clients trust",
    },
    steps: [
      {
        title: "Situation first",
        short: "Client-first structure",
        body: "Every page now opens by naming the visitor's exact situation. Someone searching for a divorce attorney reads their own circumstances in the first two sentences, not the firm's history.",
      },
      {
        title: "Real depth",
        short: "1,200 to 1,800 words",
        body: "Pages grew from 300 to 400 words to 1,200 to 1,800. The added length comes from the attorneys' own answers to the questions clients ask in consultations.",
      },
      {
        title: "FAQs + schema",
        short: "Long-tail coverage",
        body: "Each page has an FAQ section aimed at question-based legal searches, marked up with FAQ schema so Google can surface the answers in results.",
      },
      {
        title: "Local SEO",
        short: "City, region, schema",
        body: "City and region names run naturally through the copy, and Attorney and LegalService schema tells search engines who the firm is, where it works and what it practices.",
      },
      {
        title: "Specific CTAs",
        short: "Smaller first step",
        body: "Generic Contact Us buttons became specific, low-commitment actions such as Schedule a Free 15-Minute Consultation.",
      },
      {
        title: "Six pages",
        short: "One framework",
        body: "All six practice-area pages were rebuilt from scratch, not edited, using the same framework so quality is consistent across the site.",
      },
    ],
    problems: [
      {
        title: "Thin content could not compete",
        detail: "At 300 to 400 words, the pages lacked the depth to rank for competitive local legal terms.",
        solution: "Rewrote each page to 1,200 to 1,800 words using attorneys' real answers, not filler.",
        result: "Depth that signals authority to readers and Google.",
      },
      {
        title: "No long-tail visibility",
        detail: "A large share of legal searches are questions, and no page answered them directly.",
        solution: "Added FAQ sections targeting question-based searches, marked up with FAQ schema.",
        result: "Answers eligible to appear in search results.",
      },
      {
        title: "Local SEO almost missing",
        detail: "One city mention near the top, and no local business or legal service schema.",
        solution: "Wove city and region names through the copy and added Attorney and LegalService schema.",
        result: "Clear local relevance for every practice area.",
      },
      {
        title: "Written for attorneys, not clients",
        detail: "Dense legal language and firm credentials pushed the reader's actual problem down the page.",
        solution: "Opened every page with the visitor's situation, in plain language.",
        result: "Time on page rose from 51s to over 2 minutes.",
      },
      {
        title: "The CTA asked too much, too soon",
        detail: "Contact Us is a big ask for someone anxious who has only just started researching.",
        solution: "Replaced it with specific, low-commitment actions like a free 15-minute consultation.",
        result: "Consultation requests rose from ~3 to ~22 a month.",
      },
    ],
    illustration: {
      kind: "serp-and-page",
      title: "What Changed on the Page",
      lead: "How a rebuilt practice-area page is structured, and how it shows up in search.",
      caption: "Search result and page outline (sample data): situation-led copy, FAQ schema, local signals and one clear CTA",
    },
    evidenceLead: "Average ranking position for target keywords, month by month after the rewrite. Lower is better.",
    interpret: [
      { label: "Rankings", badge: "45 to 3", text: "Average position moved from about 45 to 22 in month one, 9 in month two and 3 or better by month three." },
      { label: "Organic traffic", badge: "480 to 2,100", text: "Monthly organic visits to the six practice-area pages after the rebuild." },
      { label: "Consultations", badge: "~3 to ~22", text: "Monthly consultation requests that came from organic search." },
      { label: "Time on page", badge: "51s to 2m 04s", text: "People were not just landing on the pages, they were reading them." },
    ],
    quote: {
      text: "Prospective clients are anxious when they're searching for a lawyer. These pages finally speak to that, and Google noticed too. We're now on the first page for the searches that actually bring in cases.",
      by: "Managing Partner, Multi-Practice Law Firm",
    },
    why: {
      lead: "Rankings, traffic and leads moved together because the same pages were fixed for the reader and for Google at once.",
      items: [
        { title: "Relevance", text: "Pages speak to the searcher's situation in the first two sentences." },
        { title: "Depth", text: "Real attorney answers give the page substance, not filler." },
        { title: "Signals", text: "FAQ, Attorney and LegalService schema plus local copy make the page easy to understand." },
        { title: "Conversion", text: "A free 15-minute consultation is a smaller step than Contact Us." },
      ],
    },
    takeaways: [
      "Write for the client's situation, not the firm's resume",
      "FAQ sections capture long-tail searches and handle objections at the same time",
      "Depth signals authority to both readers and Google",
      "Small, specific CTAs outperform generic ones with anxious searchers",
    ],
    next: "The same framework extends to new practice areas and service-area pages, and the FAQ sections can keep growing from the questions clients ask in consultations.",
    outcome:
      "Six thin pages became the firm's best source of cases: top 3 rankings, 2,100 organic visits a month and about 22 consultation requests a month.",
  },

  "lead-automation-pipeline": {
    headline: {
      pre: "From Copy-Paste Lead Entry to ",
      highlight: "2-Minute Response Times",
      post: ": A Lead Automation Pipeline",
    },
    client: "Growing B2B sales team",
    chips: ["Case study", "Automation", "CRM", "Webhooks"],
    heroStat: { value: "8 hrs", label: "Of manual lead entry removed every week" },
    heroLine: {
      pre: "For a growing sales team, ",
      highlight: "replacing copy-paste lead entry",
      post: " from four sources with one automated pipeline",
    },
    intro:
      "A growing sales team was copying leads by hand from four different sources into its CRM. We built a pipeline that captures, cleans, routes and answers every lead automatically, so first responses go out in under two minutes.",
    glance: {
      challenge: "Leads copied by hand from 4+ sources into the CRM, some left untouched for 24 hours or more",
      solution: "Webhook intake, deduplication, enrichment, smart routing and instant follow-up",
      result: "Under 2 minute first response, and lead-to-meeting conversion up from 11% to 19%",
    },
    kpis: [
      { value: "8 hrs", label: "Manual work removed", note: "Every week" },
      { value: "<2 min", label: "First-response time", note: "Was 6.5 hours" },
      { value: "19%", label: "Lead-to-meeting rate", note: "Was 11%" },
      { value: "<1%", label: "Duplicate records", note: "Was ~15% a month" },
    ],
    summary: [
      "Leads arrived through web forms, an ad platform, a chat widget and email. Someone on the sales team copied each one into the CRM, tagged it, assigned it and only then sent a follow-up. That cost more than a full workday every week across the team, and some leads sat untouched for 24 hours or more.",
      "We replaced the whole manual chain. Every source now feeds one automation hub that checks for duplicates, adds firmographic data, routes the lead by service, territory and workload, and sends a personalized confirmation while alerting the assigned rep. Average first response dropped from 6.5 hours to 2 minutes, and lead-to-meeting conversion rose from 11% to 19%.",
    ],
    changes: [
      { metric: "Manual hours a week on lead entry", before: "8 hrs", after: "0 hrs", change: "-100%", strong: true },
      { metric: "Average first-response time", before: "6.5 hrs", after: "2 min", change: "Minutes, not hours", strong: true },
      { metric: "Duplicate lead records", before: "~15%/mo", after: "<1%/mo", change: "Near zero" },
      { metric: "Lead-to-meeting conversion", before: "11%", after: "19%", change: "+8 pts", strong: true },
    ],
    spotlight: [
      { label: "Average first-response time", before: "6.5 hrs", after: "2 min", change: "Minutes, not hours" },
      { label: "Lead-to-meeting conversion", before: "11%", after: "19%", change: "+8 points" },
    ],
    startingPoint: {
      lead: "The team was spending selling time on data entry, and the slowest step decided how fast every lead heard back.",
      limits: [
        "Leads spread across web forms, an ad platform, a chat widget and email",
        "Every lead copied into the CRM by hand",
        "Tagging and assignment done manually, one lead at a time",
        "Follow-up only sent after all of that was finished",
        "Some leads untouched for 24 hours or more",
        "Around 15% of records each month were duplicates",
      ],
      needs: [
        "Every lead source flowing into one place automatically",
        "New leads checked against existing CRM records",
        "Firmographic data added without anyone looking it up",
        "Routing by service type, territory and current workload",
        "An instant confirmation to the lead and an alert to the rep",
        "No new tool for reps to learn",
      ],
    },
    shift: {
      lead: "We did not ask the team to enter leads faster. We removed the entry step entirely and let the pipeline handle capture, clean-up, routing and the first reply.",
      root: { title: "Lead automation hub", sub: "One pipeline for every source" },
      branches: [
        { title: "Intake", items: ["Web forms", "Ad platform", "Chat widget", "Email"] },
        { title: "Clean", items: ["Deduplication", "Firmographic enrichment"] },
        { title: "Route", items: ["Service type", "Territory", "Current workload"] },
        { title: "Respond", items: ["Personalized confirmation", "Real-time rep alert"] },
      ],
      formula: ["every source", "clean data", "instant follow-up"],
      formulaNote: "Leads that reach the right rep, and hear back, in minutes",
    },
    steps: [
      {
        title: "Centralized intake",
        short: "Webhooks",
        body: "Every lead source connects through webhook triggers into one automation hub, so nothing waits in a separate inbox.",
      },
      {
        title: "Deduplicate",
        short: "Check the CRM",
        body: "Each incoming lead is checked against existing CRM records before anything new is created.",
      },
      {
        title: "Enrich",
        short: "Firmographic data",
        body: "Firmographic data is appended automatically, so reps see the context without looking it up.",
      },
      {
        title: "Route",
        short: "Rules engine",
        body: "A rules engine assigns each lead by service type, territory and current workload.",
      },
      {
        title: "Respond",
        short: "Under 2 minutes",
        body: "A personalized confirmation email goes out immediately, and the assigned rep gets a real-time notification.",
      },
    ],
    problems: [
      {
        title: "Four disconnected sources",
        detail: "Web forms, an ad platform, a chat widget and email each had to be checked separately.",
        solution: "Connected every source through webhooks into one automation hub.",
        result: "One intake point for every lead.",
      },
      {
        title: "A workday lost to data entry",
        detail: "Copying, tagging and assigning leads cost over 8 hours a week across the team.",
        solution: "Removed the manual entry step entirely.",
        result: "8 hours a week back for selling.",
      },
      {
        title: "Slow first response",
        detail: "Follow-up waited until manual entry was done, averaging 6.5 hours and sometimes 24+.",
        solution: "Automatic confirmation email plus a real-time alert to the assigned rep.",
        result: "First response in under 2 minutes.",
      },
      {
        title: "Duplicate records",
        detail: "About 15% of lead records each month were duplicates.",
        solution: "Every lead is checked against existing CRM records on arrival.",
        result: "Duplicates below 1% a month.",
      },
      {
        title: "Manual assignment",
        detail: "Someone had to decide who owned each lead.",
        solution: "A rules engine routes by service type, territory and workload.",
        result: "The right rep, every time, without a handoff.",
      },
    ],
    illustration: {
      kind: "lead-flow",
      title: "Inside the Pipeline",
      lead: "How a lead moves from any source to the right rep, and what the team sees.",
      caption: "Lead flow and CRM view (sample data): sources, clean-up, routing and response times",
    },
    evidenceLead: "Share of leads logged automatically within seconds, week by week after launch (%).",
    interpret: [
      { label: "Manual hours", badge: "8 to 0 a week", text: "Time the team spent copying, tagging and assigning leads by hand." },
      { label: "First response", badge: "6.5 hrs to 2 min", text: "Average time between a lead arriving and the first reply." },
      { label: "Duplicates", badge: "~15% to <1%", text: "Share of lead records each month that duplicated an existing contact." },
      { label: "Conversion", badge: "11% to 19%", text: "Share of leads that turned into a booked meeting. Faster replies nearly doubled it." },
    ],
    why: {
      lead: "The gains came from removing a step, not speeding it up. Once nobody had to touch a lead, speed and accuracy followed.",
      items: [
        { title: "Speed", text: "Leads hear back in minutes, while their interest is highest." },
        { title: "Accuracy", text: "Automatic checks remove duplicate and mistyped records." },
        { title: "Routing", text: "Rules send each lead to the right rep based on service, territory and workload." },
        { title: "Invisible", text: "Reps kept their existing workflow. There was no new tool to learn." },
      ],
    },
    takeaways: [
      "Speed-to-lead is a direct revenue lever",
      "Automation removes human error, not just human effort",
      "The best automations are invisible to the team's existing workflow",
    ],
    next: "With every lead in one clean pipeline, new sources only need a new webhook, and routing rules can change as the team grows.",
    outcome:
      "A full workday of data entry a week became zero. Leads hear back in under 2 minutes, and lead-to-meeting conversion rose from 11% to 19%.",
  },

  "local-service-website-redesign": {
    headline: {
      pre: "A Slow, Desktop-Era Site to ",
      highlight: "3x More Lead Forms",
      post: ": A Local Service Website Redesign",
    },
    client: "Local restoration company",
    chips: ["Case study", "Web development", "Mobile-first", "Tracking"],
    heroStat: { value: "3x", label: "Lead form submissions in 90 days" },
    heroLine: {
      pre: "For a local restoration company, ",
      highlight: "rebuilding the website",
      post: " around one job: getting a homeowner in a crisis to call",
    },
    intro:
      "A local restoration company ranked well but was not getting the calls. We rebuilt its site mobile-first around click-to-call and a short form, split its services into dedicated pages, cut load time and added conversion tracking.",
    glance: {
      challenge: "A 6.2 second mobile load, a 6-field form, a hidden phone number and no tracking",
      solution: "Mobile-first rebuild, four service pages, a 3-field form, speed work and conversion tracking",
      result: "36 form submissions a month, up from about 12, and a 1.8 second mobile load",
    },
    kpis: [
      { value: "3x", label: "Lead form submissions", note: "~12 to 36 a month" },
      { value: "1.8s", label: "Mobile load time", note: "Was 6.2s" },
      { value: "3", label: "Required form fields", note: "Was 6" },
      { value: "Yes", label: "Conversion tracking", note: "Was none" },
    ],
    summary: [
      "Most of this company's visitors arrive in the middle of a crisis: a flooded basement at midnight, storm damage, a leak that just got worse. They search on their phones. They found a site that took over 6 seconds to load, a six-field form, and a phone number that disappeared into the mobile menu. The company ranked well enough. The site just was not converting, and with no tracking, nobody could see it.",
      "We treated the redesign as a conversion problem first. The site was rebuilt mobile-first with an always-visible call button and a short form, the single services page became four dedicated pages, mobile load time fell to 1.8 seconds, and Google Tag Manager now tracks every form and call tap. Form submissions doubled in the first 30 days and tripled by day 90.",
    ],
    changes: [
      { metric: "Lead form submissions per month", before: "~12", after: "36", change: "3x", strong: true },
      { metric: "Mobile load time", before: "6.2s", after: "1.8s", change: "71% faster", strong: true },
      { metric: "Required form fields", before: "6", after: "3", change: "Half the friction" },
      { metric: "Service pages", before: "1 shared page", after: "4 dedicated pages", change: "Direct match" },
      { metric: "Conversion tracking", before: "No", after: "Yes", change: "Data-led decisions", strong: true },
    ],
    spotlight: [
      { label: "Mobile load time", before: "6.2s", after: "1.8s", change: "71% faster" },
      { label: "Form submissions a month", before: "~12", after: "36", change: "3x in 90 days" },
    ],
    startingPoint: {
      lead: "The company was visible in local search. What happened after someone landed on the site was the problem.",
      limits: [
        "Mobile load time over 6 seconds, from oversized images, unused plugins and blocking scripts",
        "A contact form with six required fields",
        "A phone number hidden in the collapsed mobile menu",
        "Water, fire, mold and storm damage all crammed into one long page",
        "No conversion tracking, so ad spend was a guess",
        "A site several years old that was never built for mobile",
      ],
      needs: [
        "A call button visible on every screen without scrolling",
        "A form that asks only for what starts the conversation",
        "One page per service, written in the homeowner's words",
        "A mobile load time under 2 seconds",
        "Tracking for every form submission and call tap",
        "A safe launch with no lost leads during the switch",
      ],
    },
    shift: {
      lead: "The redesign was not about a new look. It was about removing everything standing between a stressed homeowner and a phone call or form submission.",
      root: { title: "Conversion-first rebuild", sub: "Mobile first, built around the call" },
      branches: [
        { title: "Mobile first", items: ["Persistent click-to-call", "Request form above the fold"] },
        { title: "Service pages", items: ["Water damage", "Fire damage", "Mold remediation", "Storm damage"] },
        { title: "Speed", items: ["Next-gen images", "Unused plugins removed", "Deferred scripts"] },
        { title: "Tracking", items: ["Google Tag Manager", "Form + call conversions", "Analytics & ad platform"] },
      ],
      formula: ["fast pages", "an obvious next step", "real conversion data"],
      formulaNote: "A site that turns emergency searches into calls, and shows which ones did",
    },
    steps: [
      {
        title: "Mobile first",
        short: "Smallest screen up",
        body: "The front end was rebuilt from the smallest screen up. A click-to-call button stays visible at all times, and a short request form sits above the fold on every page.",
      },
      {
        title: "Service pages",
        short: "1 page to 4",
        body: "Water, fire, mold and storm damage each got a dedicated page in the homeowner's own search language, with the conversion element at the top and internal links between them.",
      },
      {
        title: "Short form",
        short: "6 fields to 3",
        body: "The form now asks for name, phone number and a brief description. Address, service type and scheduling moved to the follow-up call.",
      },
      {
        title: "Speed",
        short: "6.2s to 1.8s",
        body: "Images were compressed and converted to next-generation formats, unused plugins removed and render-blocking scripts deferred or eliminated.",
      },
      {
        title: "Tracking",
        short: "GTM conversions",
        body: "Google Tag Manager fires conversion events on form submissions and click-to-call taps, passed to Google Analytics and the ad platform.",
      },
      {
        title: "Safe launch",
        short: "Verified in staging",
        body: "The old site stayed live through the six-week build. The new one launched only after tracking was verified in staging and the form was confirmed to reach the right inbox.",
      },
    ],
    problems: [
      {
        title: "Over 6 seconds to load",
        detail: "Someone in an emergency will hit back and call whoever loads first.",
        solution: "Compressed next-gen images, removed unused plugins, deferred blocking scripts.",
        result: "Mobile load time of 1.8 seconds.",
      },
      {
        title: "A six-field form",
        detail: "People in an emergency want to talk to someone, not fill in an intake profile.",
        solution: "Cut the form to name, phone and a short description. Everything else moved to the call.",
        result: "Form submissions tripled by day 90.",
      },
      {
        title: "A hidden phone number",
        detail: "On mobile, the number collapsed into the menu and disappeared.",
        solution: "A persistent click-to-call button visible on every screen without scrolling.",
        result: "Click-to-call activity rose once it was always visible.",
      },
      {
        title: "One page for every service",
        detail: "Water, fire, mold and storm damage shared one long scroll with no direct route.",
        solution: "Four dedicated service pages with clear headlines and internal links.",
        result: "Visitors land on the service they searched for.",
      },
      {
        title: "No conversion tracking",
        detail: "Marketing decisions were made without knowing what generated calls or forms.",
        solution: "GTM events for forms and call taps, sent to Analytics and the ad platform.",
        result: "Budget moved to what works within the first month.",
      },
    ],
    illustration: {
      kind: "mobile-before-after",
      title: "Before and After, on a Phone",
      lead: "What a homeowner in a crisis saw on their phone, before and after the rebuild.",
      caption: "Mobile screens (sample data): the old layout compared with the rebuilt, call-first layout",
    },
    evidenceLead: "Lead form submissions in each 30-day window after launch.",
    interpret: [
      { label: "Form submissions", badge: "~12 to 36", text: "Monthly form submissions. Double in the first 30 days, triple by day 90." },
      { label: "Mobile speed", badge: "6.2s to 1.8s", text: "Time for the site to load on a phone, where most emergency searches happen." },
      { label: "Form fields", badge: "6 to 3", text: "Required fields between a visitor and a submitted request." },
      { label: "Tracking", badge: "None to full", text: "Form submissions and call taps are now measured by page and traffic source." },
    ],
    quote: {
      text: "We were ranking fine, we just weren't getting the calls. Now we can actually see where leads are coming from, and the form is getting filled out. It's a different situation entirely.",
      by: "Owner, Local Restoration Company",
    },
    why: {
      lead: "Every change removed a reason for a stressed homeowner to leave, and tracking proved which changes mattered.",
      items: [
        { title: "Speed", text: "A sub-2-second load keeps emergency visitors from bouncing." },
        { title: "Clarity", text: "Call and request actions are impossible to miss on any device." },
        { title: "Relevance", text: "Each service has its own page in the homeowner's words." },
        { title: "Data", text: "Tracking turned guesses into budget decisions." },
      ],
    },
    takeaways: [
      "Ranking and converting are two different problems",
      "Every field on a contact form is a reason to leave",
      "Speed is not optional for emergency service businesses",
      "Tracking changes how the budget gets spent",
    ],
    next: "The new page structure is a repeatable template. Three months after launch, the client built a page for a new service line themselves, without a designer or developer.",
    outcome:
      "A slow, desktop-era site became a call-first lead machine: 36 form submissions a month, up from about 12, with a 1.8 second mobile load and full tracking.",
  },

  "saas-landing-page-design": {
    headline: {
      pre: "A Polished but Quiet Homepage to ",
      highlight: "2.4x Demo Bookings",
      post: ": SaaS Landing Page Design",
    },
    client: "Early-stage B2B SaaS company",
    chips: ["Case study", "Landing page", "CRO", "B2B SaaS"],
    heroStat: { value: "2.4x", label: "Demo booking rate" },
    heroLine: {
      pre: "For an early-stage SaaS company, ",
      highlight: "rebuilding the homepage",
      post: " its paid and organic traffic was already landing on",
    },
    intro:
      "An early-stage SaaS company was sending real traffic to a polished homepage that did not convert. We rebuilt it around clarity: a benefit-led headline, a real product screenshot, proof next to the CTA, one action and a three-field form.",
    glance: {
      challenge: "Generic hero copy, stock photos, a vague Learn More CTA and a demanding demo form",
      solution: "A benefit-led hero with a real screenshot, proof above the fold, one CTA and a 3-field form",
      result: "Demo booking rate up from 1.8% to 4.3%, and bounce rate down from 68% to 41%",
    },
    kpis: [
      { value: "2.4x", label: "Demo booking rate", note: "1.8% to 4.3%" },
      { value: "+140%", label: "Page conversion rate", note: "Across the whole page" },
      { value: "41%", label: "Bounce rate", note: "Was 68%" },
      { value: "1m 12s", label: "Average time on page", note: "Was 38 seconds" },
    ],
    summary: [
      "The page looked polished, but it buried the product. Generic hero copy and stock photography stood where a screenshot should be, the main button just said Learn More, and the demo form asked for a phone number and company size before visitors had any reason to trust the company.",
      "We rebuilt the page around clarity. A specific, benefit-driven headline sits next to a real product screenshot, customer logos and a quantified result sit beside the CTA, every button says Book a Demo, and the form asks only for name, work email and company. The demo booking rate rose from 1.8% to 4.3%.",
    ],
    changes: [
      { metric: "Demo booking rate", before: "1.8%", after: "4.3%", change: "2.4x", strong: true },
      { metric: "Overall page conversion rate", before: "Baseline", after: "+140%", change: "+140%", strong: true },
      { metric: "Average time on page", before: "38s", after: "1m 12s", change: "+89%" },
      { metric: "Bounce rate", before: "68%", after: "41%", change: "-27 pts", strong: true },
      { metric: "Demo form fields", before: "Included phone & company size", after: "Name, work email, company", change: "Less friction" },
    ],
    spotlight: [
      { label: "Demo booking rate", before: "1.8%", after: "4.3%", change: "2.4x" },
      { label: "Bounce rate", before: "68%", after: "41%", change: "-27 points" },
    ],
    startingPoint: {
      lead: "Traffic was not the problem. The page visitors landed on did not show them the product or give them a clear reason to book.",
      limits: [
        "Generic hero copy that could describe any product",
        "Stock photography instead of the actual product",
        "No product screenshots above the fold",
        "A vague Learn More as the primary call to action",
        "A demo form asking for phone number and company size up front",
        "Customer proof kept away from the main call to action",
      ],
      needs: [
        "A headline that names a specific benefit",
        "The real product visible in the first screen",
        "Proof placed right next to the call to action",
        "One consistent action across the whole page",
        "A form that asks only what is needed to start a conversation",
        "A page that earns trust before asking for anything",
      ],
    },
    shift: {
      lead: "We stopped decorating the product and started showing it. Every element of the page was judged by one question: does it move a visitor closer to booking a demo?",
      root: { title: "Clarity-first landing page", sub: "Built to book demos" },
      branches: [
        { title: "Hero", items: ["Benefit-driven headline", "Real product screenshot"] },
        { title: "Proof", items: ["Customer logos", "A quantified result"] },
        { title: "Action", items: ["One Book a Demo CTA", "Same button everywhere"] },
        { title: "Form", items: ["Name", "Work email", "Company name"] },
      ],
      formula: ["clear value", "visible proof", "one easy action"],
      formulaNote: "A page that shows the product, earns trust and makes booking the obvious next step",
    },
    steps: [
      {
        title: "Clear hero",
        short: "Benefit + screenshot",
        body: "A specific, benefit-driven headline paired with a real product screenshot instead of stock imagery.",
      },
      {
        title: "Proof early",
        short: "Logos + result",
        body: "Customer logos and a quantified result moved above the fold, next to the primary call to action.",
      },
      {
        title: "One action",
        short: "Book a Demo",
        body: "Every button on the page changed to a single, consistent Book a Demo call to action.",
      },
      {
        title: "Short form",
        short: "3 fields",
        body: "The demo request form was cut to name, work email and company name.",
      },
    ],
    problems: [
      {
        title: "Generic hero copy",
        detail: "The headline could have described any product, so it described none.",
        solution: "A specific, benefit-driven headline about what the product does for the buyer.",
        result: "Bounce rate fell from 68% to 41%.",
      },
      {
        title: "Stock photos hid the product",
        detail: "Visitors never saw what they would be buying.",
        solution: "A real product screenshot in the hero.",
        result: "Time on page rose from 38s to 1m 12s.",
      },
      {
        title: "A vague call to action",
        detail: "Learn More gave visitors no clear next step, and other buttons competed with it.",
        solution: "One consistent Book a Demo button across the page.",
        result: "Demo booking rate rose from 1.8% to 4.3%.",
      },
      {
        title: "Proof buried down the page",
        detail: "Customer proof was not visible where the decision happens.",
        solution: "Customer logos and a quantified result next to the primary CTA.",
        result: "Trust built before the ask.",
      },
      {
        title: "A demanding demo form",
        detail: "Asking for phone number and company size before earning trust lost visitors.",
        solution: "Only name, work email and company name.",
        result: "Overall page conversion up 140%.",
      },
    ],
    illustration: {
      kind: "landing-before-after",
      title: "Before and After, Above the Fold",
      lead: "The first screen a visitor sees, before and after the redesign.",
      caption: "Landing page layouts (sample data): stock-photo hero compared with a product-first hero",
    },
    evidenceLead: "Demo bookings per week, before the relaunch and in the weeks after it.",
    interpret: [
      { label: "Demo booking rate", badge: "1.8% to 4.3%", text: "Share of visitors who booked a demo. The number the page exists to move." },
      { label: "Page conversion", badge: "+140%", text: "Overall conversion across every action on the page." },
      { label: "Bounce rate", badge: "68% to 41%", text: "Fewer visitors left without interacting once the page showed the product." },
      { label: "Time on page", badge: "38s to 1m 12s", text: "Visitors stayed long enough to understand the product." },
    ],
    why: {
      lead: "Every change made the page easier to understand and easier to act on. Nothing was added just to look good.",
      items: [
        { title: "Clarity", text: "A specific headline and a real screenshot explain the product in seconds." },
        { title: "Trust", text: "Proof sits right where the visitor decides." },
        { title: "Focus", text: "One call to action instead of several competing ones." },
        { title: "Ease", text: "Three form fields instead of a qualification interview." },
      ],
    },
    takeaways: [
      "Show the product, not a metaphor for the product",
      "One CTA beats many. Competing calls to action dilute all of them",
      "Every form field costs conversions. Ask for the minimum needed to start",
    ],
    next: "With a page that converts, the next gains come from testing headline and proof variations and from sending more traffic to a page that now pays it back.",
    outcome:
      "A polished but quiet homepage became the company's demo engine: a 2.4x higher booking rate, 140% better page conversion and a bounce rate down 27 points.",
  },

  "seo-blog-content-series": {
    headline: {
      pre: "40 Posts Nobody Read to ",
      highlight: "12 of 12 on Page One",
      post: ": An SEO Blog Content Series",
    },
    client: "B2B company with an underperforming blog",
    chips: ["Case study", "SEO content", "Topic clusters", "Keyword research"],
    heroStat: { value: "12/12", label: "Articles on Google's first page" },
    heroLine: {
      pre: "For a company with 40+ posts and almost no traffic, ",
      highlight: "replacing scattershot blogging",
      post: " with one keyword cluster strategy",
    },
    intro:
      "The client had more than 40 blog posts and almost no organic traffic. We built a 12-article series around one keyword cluster strategy, and every one of the 12 reached Google's first page.",
    glance: {
      challenge: "40+ posts ranking on page 4 or beyond, with no keyword research or content calendar",
      solution: "12 articles in three topic clusters, built on buyer-intent keyword research",
      result: "12 of 12 on page one, average position #6, and about 18 blog leads a month",
    },
    kpis: [
      { value: "12/12", label: "Articles on page one", note: "Was 0 of 12" },
      { value: "#6", label: "Average keyword position", note: "Was #47" },
      { value: "3,400/mo", label: "Organic blog sessions", note: "Was 210/mo" },
      { value: "~18/mo", label: "Blog-attributed leads", note: "Was ~1/mo" },
    ],
    summary: [
      "The blog had more than 40 published posts and almost no organic traffic. Most ranked on page four or beyond. They were written for the internal team rather than for what customers searched, with no keyword research, no content calendar and no clear link to business goals.",
      "Instead of another batch of posts, we built one series around a keyword cluster strategy: 12 buyer-intent opportunities, grouped into three clusters with pillar pages and deliberate internal links, each written to be the best answer available. All 12 articles reached page one, average position moved from #47 to #6, and blog leads rose from about 1 to about 18 a month.",
    ],
    changes: [
      { metric: "Articles ranking on page 1", before: "0 of 12", after: "12 of 12", change: "Every article", strong: true },
      { metric: "Average keyword position", before: "#47", after: "#6", change: "+41 places", strong: true },
      { metric: "Organic blog traffic", before: "210 sessions/mo", after: "3,400 sessions/mo", change: "16x" },
      { metric: "Blog-attributed leads", before: "~1/mo", after: "~18/mo", change: "~18x", strong: true },
    ],
    spotlight: [
      { label: "Average keyword position", before: "#47", after: "#6", change: "Page 5 to page 1" },
      { label: "Blog-attributed leads a month", before: "~1", after: "~18", change: "About 18x" },
    ],
    startingPoint: {
      lead: "The company had published plenty. None of it was aimed at what customers actually searched for.",
      limits: [
        "40+ posts generating almost no organic traffic",
        "Most posts ranking on page 4 or beyond",
        "Topics written for the internal team, not for customers",
        "No keyword research process",
        "No content calendar",
        "No clear tie between content and business goals",
      ],
      needs: [
        "Keyword opportunities chosen for buyer intent, not vanity volume",
        "Articles grouped so they build authority together",
        "Every article the best answer available for its query",
        "On-page SEO done the same way on every article",
        "A clear job for each article to do",
        "Results measured in leads, not just traffic",
      ],
    },
    shift: {
      lead: "We stopped publishing isolated posts and built a connected series. Twelve articles that support each other can do what forty unrelated ones could not.",
      root: { title: "Keyword cluster strategy", sub: "12 articles, 3 clusters" },
      branches: [
        { title: "Research", items: ["Buyer-intent keywords", "12 opportunities"] },
        { title: "Structure", items: ["3 topic clusters", "Pillar pages", "Internal links"] },
        { title: "Depth", items: ["1,500 to 2,500 words", "Expert insight"] },
        { title: "On-page", items: ["Titles & metas", "Header hierarchy", "Schema"] },
      ],
      formula: ["buyer intent", "topic clusters", "the best answer"],
      formulaNote: "Content that ranks together and turns readers into leads",
    },
    steps: [
      {
        title: "Research",
        short: "Buyer intent",
        body: "We identified 12 keyword opportunities, prioritizing buyer intent over vanity search volume.",
      },
      {
        title: "Cluster",
        short: "3 pillars",
        body: "The 12 articles were grouped into three clusters, each anchored by a pillar page with deliberate internal linking.",
      },
      {
        title: "Write",
        short: "1,500 to 2,500 words",
        body: "Every article was written to be the best answer available, drawing on subject-matter expert insight rather than generic overviews.",
      },
      {
        title: "Optimize",
        short: "On-page SEO",
        body: "Every article shipped with optimized title tags, meta descriptions, header hierarchy, internal links and schema.",
      },
    ],
    problems: [
      {
        title: "Lots of posts, no traffic",
        detail: "40+ posts brought in only about 210 sessions a month.",
        solution: "12 focused articles built around one keyword cluster strategy.",
        result: "3,400 organic sessions a month.",
      },
      {
        title: "Written for the wrong reader",
        detail: "Topics reflected the internal team, not what customers searched for.",
        solution: "Keyword and intent research chose topics with buyer intent.",
        result: "Blog leads rose from ~1 to ~18 a month.",
      },
      {
        title: "Isolated posts",
        detail: "Each post competed alone, with nothing building shared authority.",
        solution: "Three clusters, each with a pillar page and deliberate internal links.",
        result: "Compounding authority across the series.",
      },
      {
        title: "Shallow overviews",
        detail: "Generic content had no reason to outrank anything.",
        solution: "1,500 to 2,500 word articles with subject-matter expert insight.",
        result: "Average position from #47 to #6.",
      },
      {
        title: "Inconsistent on-page SEO",
        detail: "No set standard for titles, metas, headers or links.",
        solution: "The same on-page checklist applied to every article, including schema.",
        result: "12 of 12 articles on page one.",
      },
    ],
    illustration: {
      kind: "topic-cluster",
      title: "How the Series Was Structured",
      lead: "Three clusters, each anchored by a pillar page, and where the articles landed.",
      caption: "Cluster map and ranking report (sample data): pillar pages, supporting articles and positions",
    },
    evidenceLead: "Monthly organic visits added across the 12-article cluster in the first three months.",
    interpret: [
      { label: "Page-one articles", badge: "0 to 12", text: "How many of the 12 series articles rank on Google's first page." },
      { label: "Average position", badge: "#47 to #6", text: "Average ranking position across the target keywords." },
      { label: "Organic traffic", badge: "210 to 3,400", text: "Monthly organic sessions to the blog." },
      { label: "Leads", badge: "~1 to ~18", text: "Monthly leads attributed to the blog." },
    ],
    why: {
      lead: "Every article had one job, and the series was built so each article helped the others do theirs.",
      items: [
        { title: "Intent", text: "Topics chosen for buyer intent attract readers who become leads." },
        { title: "Structure", text: "Pillar pages and internal links build authority across the cluster." },
        { title: "Depth", text: "Expert insight makes each article the best answer for its query." },
        { title: "Discipline", text: "The same on-page standard on every article, every time." },
      ],
    },
    takeaways: [
      "12 focused articles outperformed 40 unfocused ones",
      "Topic clusters build compounding authority instead of isolated bets",
      "Search intent matters more than word count",
    ],
    next: "With three clusters ranking, new articles can attach to the existing pillars and inherit their authority, and older posts can be merged or redirected into the clusters.",
    outcome:
      "A blog of 40 posts nobody read became a lead source: 12 of 12 articles on page one, 3,400 organic sessions a month and about 18 leads a month.",
  },
};

export function getCaseStudyStory(slug: string): CaseStudyStory | undefined {
  return caseStudyStories[slug];
}
