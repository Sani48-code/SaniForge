# SEO Audit: saniforge.vercel.app

Framework: **Next.js 14.2.35, App Router** (`app/` directory, metadata API, `next-mdx-remote` for MDX content).

## How this audit was run

- **Before** = commit `bbc71b0` (the `main` branch as deployed before this work), built with `next build` and served with `next start` locally.
- **After** = the `seo-overhaul` branch, built and served the same way.
- On-page data was collected by crawling every URL in `sitemap.xml` plus a `/projects/<slug>` duplicate and a 404 URL.
- Lighthouse 13.5 (mobile preset: Moto G-class CPU throttling, slow 4G) was run 3 times per page through the Lighthouse Node API with Microsoft Edge 155; the median run by performance score is reported.
- Local measurement note: Lighthouse could not record a trace while the site sent `Cross-Origin-Opener-Policy: same-origin` (the COOP process swap hides the navigation start event, error `NO_NAVSTART`). A local-only proxy removed COOP, HSTS and the CSP `upgrade-insecure-requests` directive (which breaks plain-http localhost). None of these headers change what is downloaded or rendered, so the numbers are comparable. Absolute numbers on Vercel's CDN will differ; use the before/after delta, then confirm with PageSpeed Insights after deploying.

## Before

### Robots and sitemap

```
User-Agent: *
Allow: /

Sitemap: https://saniforge.com/sitemap.xml
```

- `robots.txt` and every sitemap URL pointed to **https://saniforge.com**, a domain that is not live. The site is served from `saniforge.vercel.app`.
- Every page's canonical tag also pointed to `https://saniforge.com/...`. That tells Google the real page lives on a host that does not resolve, which is the main reason the vercel.app pages could struggle to be indexed.
- The sitemap had no `lastModified` for static pages or case studies.
- No `noindex` protection for Vercel preview deployments.

### Hardcoded domain and name issues

- `lib/data/site.ts`: `url: "https://saniforge.com"` (feeds `metadataBase`, canonicals, OG URLs, sitemap, robots, JSON-LD).
- `components/home/WhyChooseUsSection.tsx`: a link to `https://saniforge.com` and the label `@saniforge.com`.
- The owner's name was spelled **"Abdul Kalyum Sani"** in 5 files (site config, which feeds the Person JSON-LD and the meta description; blog and projects page descriptions; contact image alt text; the lead confirmation email) and "Abdul Kaiyum Sani" elsewhere.

### Per-route on-page data

| Route | Title (chars) | Meta description (chars) | Canonical | H1 | OG image | Twitter | JSON-LD | Img no alt |
|---|---|---|---|---|---|---|---|---|
| `/` | SaniForge: Web Development, SEO Copywriting & n8n Automation (60) | 212 | `https://saniforge.com` | 1 | yes | summary_large_image | Person, WebSite | 0 |
| `/services` | Services: Web Development, Automation, SaaS, Copywriting and SEO Content \| SaniForge (84) | 185 | `https://saniforge.com/services` | 1 | yes | summary_large_image | Person, ItemList, FAQPage | 0 |
| `/services/copywriting` | Conversion Copywriting for Service Businesses \| SaniForge (57) | 155 | `https://saniforge.com/services/copywriting` | 1 | yes | summary_large_image | Person, Service, FAQPage, BreadcrumbList | 0 |
| `/services/blog-writing` | SEO Blog Writing That Brings In Buyers \| SaniForge (50) | 152 | `https://saniforge.com/services/blog-writing` | 1 | yes | summary_large_image | Person, Service, FAQPage, BreadcrumbList | 0 |
| `/services/web-development` | Full-Stack Web Development for Business \| SaniForge (51) | 144 | `https://saniforge.com/services/web-development` | 1 | yes | summary_large_image | Person, Service, FAQPage, BreadcrumbList | 0 |
| `/services/n8n-automation` | n8n Automation for Business Workflows \| SaniForge (49) | 139 | `https://saniforge.com/services/n8n-automation` | 1 | yes | summary_large_image | Person, Service, FAQPage, BreadcrumbList | 0 |
| `/services/lead-generation-ghl` | GoHighLevel Lead Generation Setup \| SaniForge (45) | 154 | `https://saniforge.com/services/lead-generation-ghl` | 1 | yes | summary_large_image | Person, Service, FAQPage, BreadcrumbList | 0 |
| `/services/saas-development` | SaaS Development from MVP to Launch \| SaniForge (47) | 155 | `https://saniforge.com/services/saas-development` | 1 | yes | summary_large_image | Person, Service, FAQPage, BreadcrumbList | 0 |
| `/book-a-call` | Book a Call \| SaniForge (23) | 110 | `https://saniforge.com/book-a-call` | 1 | **no** | summary_large_image | Person | 0 |
| `/projects` | Projects and Case Studies: SaaS, Web Apps and Content Writing \| SaniForge (73) | 172 | `https://saniforge.com/projects` | 1 | yes | summary_large_image | Person, CollectionPage | 0 |
| `/blog` | The SaniForge Journal: Web Development, Automation and SEO Lessons \| SaniForge (78) | 156 | `https://saniforge.com/blog` | 1 | **no** | summary_large_image | Person, Blog | 0 |
| `/blog/why-i-audit-every-websites-core-web-vitals` | Core Web Vitals Explained: Why They Matter and How to Improve Them \| SaniForge Blog \| SaniForge (95) | 158 | `https://saniforge.com/blog/why-i-audit-every-websites-core-web-vitals` | 1 | yes | summary_large_image | Person, BlogPosting | 0 |
| `/blog/build-lead-capture-automation-under-an-hour` | Build a Lead Capture Automation in Under an Hour: A Simple Guide \| SaniForge Blog \| SaniForge (93) | 138 | `https://saniforge.com/blog/build-lead-capture-automation-under-an-hour` | 1 | yes | summary_large_image | Person, BlogPosting | 0 |
| `/blog/how-to-write-service-pages-that-convert` | How to Write Service Pages That Convert \| Structure & Mistakes \| SaniForge Blog \| SaniForge (91) | 163 | `https://saniforge.com/blog/how-to-write-service-pages-that-convert` | 1 | yes | summary_large_image | Person, BlogPosting | 0 |
| `/blog/why-modern-fast-frameworks-for-client-websites` | Why Modern Frameworks Beat Legacy Page Builders for Client Sites \| SaniForge Blog \| SaniForge (93) | 154 | `https://saniforge.com/blog/why-modern-fast-frameworks-for-client-websites` | 1 | yes | summary_large_image | Person, BlogPosting | 0 |
| `/blog/automate-repetitive-business-tasks-with-n8n` | How to Automate Repetitive Business Tasks With n8n \| SaniForge Blog \| SaniForge (79) | 156 | `https://saniforge.com/blog/automate-repetitive-business-tasks-with-n8n` | 1 | yes | summary_large_image | Person, BlogPosting | 0 |
| `/blog/seo-copywriting-mistakes-freelancers-make` | 5 SEO Copywriting Mistakes Freelancers Make (And How to Fix Them) \| SaniForge Blog \| SaniForge (94) | 177 | `https://saniforge.com/blog/seo-copywriting-mistakes-freelancers-make` | 1 | yes | summary_large_image | Person, BlogPosting | 0 |
| `/case-studies/ai-legal-content-automation` | AI-Powered Legal Content Automation \| Case Study \| SaniForge (60) | 135 | `https://saniforge.com/case-studies/ai-legal-content-automation` | 1 | yes | summary_large_image | Person | 0 |
| `/case-studies/law-firm-service-pages` | Law Firm Service Pages \| Case Study \| SaniForge (47) | 108 | `https://saniforge.com/case-studies/law-firm-service-pages` | 1 | yes | summary_large_image | Person | 0 |
| `/case-studies/lead-automation-pipeline` | Lead Automation Pipeline \| Case Study \| SaniForge (49) | 120 | `https://saniforge.com/case-studies/lead-automation-pipeline` | 1 | yes | summary_large_image | Person | 0 |
| `/case-studies/local-service-website-redesign` | Local Service Website Redesign \| Case Study \| SaniForge (55) | 115 | `https://saniforge.com/case-studies/local-service-website-redesign` | 1 | yes | summary_large_image | Person | 0 |
| `/case-studies/saas-landing-page-design` | SaaS Landing Page Design \| Case Study \| SaniForge (49) | 114 | `https://saniforge.com/case-studies/saas-landing-page-design` | 1 | yes | summary_large_image | Person | 0 |
| `/case-studies/seo-blog-content-series` | SEO Blog Content Series \| Case Study \| SaniForge (48) | 109 | `https://saniforge.com/case-studies/seo-blog-content-series` | 1 | yes | summary_large_image | Person | 0 |
| `/projects/lead-automation-pipeline` | Lead Automation Pipeline \| Case Study \| SaniForge (49) | 120 | `https://saniforge.com/case-studies/lead-automation-pipeline` | 1 | yes | summary_large_image | Person | 0 |
| `/this-page-does-not-exist` | SaniForge: Web Development, SEO Copywriting & n8n Automation (60) | 212 | `none` | 1 | yes | summary_large_image | Person | 0 |
Other findings:

- Blog post titles were rendered as `Post title | SaniForge Blog | SaniForge` (double suffix), 79 to 95 characters, so Google truncates them.
- Case study pages had no Article JSON-LD and no BreadcrumbList.
- Links inside blog posts all opened in a new tab, including internal links.
- No page targeted the personal "hire me" keywords (`n8n developer`, `full stack developer`, `growth engineer`).
- Homepage trust cards made claims the site does not back up ("100% Quality Assurance Standard", "95+ PageSpeed", "Dedicated Team / Skilled Engineers" for a solo practice), and their detail text was only visible after clicking to flip a card.

### Lighthouse (mobile, before)

| Page | Perf | A11y | Best practices | SEO | LCP | TBT | CLS | FCP | valid runs |
|---|---|---|---|---|---|---|---|---|---|
| `/` | 78 | 99 | 100 | 100 | 4.0 s | 320 ms | 0.000 | 2.0 s | 3 |
| `/blog/why-i-audit-every-websites-core-web-vitals` | 91 | 96 | 100 | 100 | 3.3 s | 54 ms | 0.000 | 1.8 s | 3 |
| `/services/n8n-automation` | 91 | 100 | 100 | 100 | 3.3 s | 41 ms | 0.000 | 1.8 s | 3 |

Main homepage issues reported by Lighthouse:

- The mobile LCP element is the hero H1 text, with about 0.8 s of element render delay.
- 3.6 s of main-thread work, mostly from 16 floating tech badges each running an infinite framer-motion animation in JavaScript.
- `geometric-mesh-bg.png` used as a CSS background (about 227 KiB could be saved).
- Trusted-logo `<img>` tags had no width and height (unsized images).
- Heading order skipped from H1 to H3 (hero capability chips).
- The flip cards' accessible names did not match their visible text.

## After

_Filled in after Phase 7._
