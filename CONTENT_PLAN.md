# Content Plan: supporting posts

Six posts that support the role pages (`/n8n-developer`, `/full-stack-developer`, `/growth-engineer`) and the 2026 lead generation post. Each one targets a narrower question than its role page, so they rank for long-tail searches and pass authority up with descriptive internal links instead of competing for the same keyword.

Rules for every post (same as the rest of the site):

- Use only numbers from published case studies, or results you can show. No invented stats, quotes or testimonials.
- One H1, a `seoTitle` of 60 characters or less, a `seoDescription` of 155 or less, and a slug that matches the target keyword.
- Link to the role page with a descriptive anchor (e.g. "hire an n8n developer", not "click here"), to one service page, and to at least two existing posts. Then add a link back from at least one older post.
- Add `tags` and `keywords` in frontmatter so related posts and JSON-LD pick them up.

| # | Working title | Target keyword | Search intent | Links to | Links from |
|---|---|---|---|---|---|
| 1 | n8n vs Zapier vs Make for Lead Routing: Which One Fits Your Business? | n8n vs zapier | Commercial (comparing tools before buying) | `/n8n-developer` ("when to hire an n8n developer"), `/services/n8n-automation`, `/blog/build-lead-capture-automation-under-an-hour`, `/blog/why-traditional-lead-generation-is-dead-2026` | `/blog/automate-repetitive-business-tasks-with-n8n`, `/n8n-developer` FAQ on Zapier vs n8n |
| 2 | How to Capture Website Leads With an n8n Webhook (Step by Step) | n8n webhook tutorial | Informational (how-to) | `/n8n-developer`, `/services/n8n-automation`, `/blog/build-lead-capture-automation-under-an-hour`, `/case-studies/lead-automation-pipeline` | `/blog/build-lead-capture-automation-under-an-hour`, `/blog/why-traditional-lead-generation-is-dead-2026` (Shift 1) |
| 3 | What Does an n8n Developer Cost? Pricing Models and What Drives the Price | n8n developer cost | Commercial (budgeting before hiring) | `/n8n-developer` ("hire an n8n developer"), `/book-a-call`, `/services/n8n-automation` | `/n8n-developer`, `/blog/automate-repetitive-business-tasks-with-n8n` |
| 4 | Growth Engineer vs Growth Marketer: Which Does Your Business Need? | growth engineer vs growth marketer | Informational / commercial | `/growth-engineer`, `/services/copywriting`, `/blog/how-to-write-service-pages-that-convert`, `/case-studies/law-firm-service-pages` | `/growth-engineer` FAQ, `/blog/why-traditional-lead-generation-is-dead-2026` (Shift 3) |
| 5 | n8n Workflows for Law Firms: Intake, Follow-Up and Content | n8n for law firms | Commercial (niche) | `/n8n-developer` ("n8n developer for law firms"), `/case-studies/ai-legal-content-automation`, `/case-studies/law-firm-service-pages`, `/services/lead-generation-ghl` | `/n8n-developer` (law firm section), `/blog/why-traditional-lead-generation-is-dead-2026` |
| 6 | The Next.js Stack I Use for Local Business Websites (and Why) | next.js for local business website | Informational / commercial | `/full-stack-developer` ("work with a full-stack developer"), `/services/web-development`, `/blog/why-modern-fast-frameworks-for-client-websites`, `/blog/why-i-audit-every-websites-core-web-vitals`, `/case-studies/local-service-website-redesign` | `/blog/why-modern-fast-frameworks-for-client-websites`, `/full-stack-developer` |

## Notes per post

1. **n8n vs Zapier vs Make.** Lead with a comparison table (pricing model, self-hosting, custom code, branching and error handling), then a "which to pick" section by situation. Be fair to Zapier and Make: they are the right answer for simple two-step automations. Include a short "when to hire an n8n developer" section linking to `/n8n-developer`.
2. **n8n webhook tutorial.** Screenshots of a real (anonymized) workflow: Webhook node → validation → CRM node → notification → auto-reply → wait/escalate. Link n8n's official Webhook node docs. Add a code block for the form `fetch()` POST. Publish as `.mdx` so you can reuse the workflow diagram images.
3. **n8n developer cost.** Explain what drives cost (number of integrations, error handling, hosting, AI steps, documentation) and the common models (fixed project, monthly retainer, hourly). Only quote your own prices if you are willing to publish them; otherwise give the factors and a "get a quote in a 30-minute call" CTA.
4. **Growth engineer vs growth marketer.** Define both without hype, show where they overlap, and use the law firm and SEO blog series case studies as examples of engineering-led growth. Good candidate for FAQ markup in the post body.
5. **n8n for law firms.** Three workflows: consultation intake routing, follow-up and reminders, and content production (the 89-articles case study). Add a short compliance note: human review for legal content, no legal advice in automated replies, and data handling. Check any state bar advertising rules before claiming results.
6. **Next.js stack for local business sites.** Explain the stack choices (Next.js, Tailwind, Vercel, a headless CMS or MDX, tracking via Google Tag Manager) in business terms: speed, Core Web Vitals, cost and ownership. Use the local service redesign numbers (under 2 seconds on mobile, 3x form submissions in 90 days).

## Publishing cadence

One post every 2 weeks keeps the blog active without thin content. Suggested order: 2, 1, 5, 4, 6, 3 (tutorials and comparisons earn links fastest; the cost post benefits from the others existing first).
