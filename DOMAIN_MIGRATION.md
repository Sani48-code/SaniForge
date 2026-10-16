# Moving from saniforge.vercel.app to a custom domain

The code is domain-agnostic. Every absolute URL (canonical tags, `og:url`, `og:image`, `sitemap.xml`, `robots.txt`, JSON-LD) is built from one value, `SITE_URL` in `lib/site.ts`, which reads `NEXT_PUBLIC_SITE_URL`. The move is configuration only. No code changes are needed.

Replace `saniforge.com` below with the domain you actually buy.

## 1. Before you switch

- [ ] Buy the domain.
- [ ] Make sure `saniforge.vercel.app` is verified in Google Search Console (see `MANUAL_STEPS.md`). Change of Address only works from a property you already own.
- [ ] Note your current indexed pages: Search Console → Indexing → Pages. You will compare against this later.

## 2. Add the domain in Vercel

1. Vercel → Project → **Settings → Domains → Add** `saniforge.com`.
2. Add `www.saniforge.com` as well and set it to **redirect to** `saniforge.com` (or the reverse; pick one and never change it).
3. Point DNS at Vercel as the dashboard instructs (an `A` record for the apex, a `CNAME` for `www`), or move nameservers to Vercel.
4. Wait for the domain to show **Valid Configuration** and an issued SSL certificate.
5. Mark `saniforge.com` as the **Primary** domain.

## 3. Set the environment variables (Production)

Vercel → Settings → **Environment Variables**, scope **Production**:

| Variable | Value | Effect |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://saniforge.com` | All canonicals, OG URLs, sitemap, robots and JSON-LD switch to the new domain. No trailing slash. |
| `CUSTOM_DOMAIN` | `saniforge.com` | Turns on the 301 redirect in `next.config.mjs`: any request to `saniforge.vercel.app/<path>` goes to `https://saniforge.com/<path>`. |
| `LEGACY_HOST` | leave empty | Defaults to `saniforge.vercel.app`. Only set it if the old host was different. |

`NEXT_PUBLIC_*` values are baked in at build time, so **redeploy** (Deployments → latest → Redeploy) after saving them.

You can use either Vercel's own domain redirect (Domains → `saniforge.vercel.app` → Redirect to `saniforge.com`, 301) or the `CUSTOM_DOMAIN` redirect in `next.config.mjs`. Both preserve the path. Vercel's is enforced at the edge; the code version is a fallback that works on any host. Using both is harmless.

## 4. Verify the switch

Run these against the live site:

```bash
curl -sI https://saniforge.vercel.app/blog | grep -i -E "^HTTP|^location"   # expect 301 → https://saniforge.com/blog
curl -s https://saniforge.com/robots.txt                                      # Sitemap line uses saniforge.com
curl -s https://saniforge.com/sitemap.xml | head -20                          # every <loc> uses saniforge.com
curl -s https://saniforge.com/ | grep -o '<link rel="canonical"[^>]*>'        # canonical uses saniforge.com
```

Also paste the homepage and one blog post into Google's [Rich Results Test](https://search.google.com/test/rich-results) and confirm the JSON-LD URLs use the new domain.

## 5. Tell Google and Bing

1. **Google Search Console:** add a **Domain property** for `saniforge.com` (DNS TXT verification covers http, https, www and non-www).
2. In the **old** property (`saniforge.vercel.app`): Settings → **Change of Address** → select `saniforge.com` → validate → confirm. Google checks that the 301s are in place.
   - Google's Change of Address tool can refuse some shared hosting subdomains. If it does, the 301 redirects plus the updated canonicals and sitemap still carry the signals over; it just takes longer.
3. In the new property, submit `https://saniforge.com/sitemap.xml`, then use **URL Inspection → Request indexing** for the homepage, `/n8n-developer`, `/full-stack-developer`, `/growth-engineer` and the newest blog post.
4. **Bing Webmaster Tools:** add the new site (it can import from Search Console), submit the sitemap, and use its **Site Move** tool.

## 6. Update every external link

Point all of these at `https://saniforge.com`:

- [ ] LinkedIn: profile website and Featured section
- [ ] GitHub: profile website field and any repo `homepage` fields
- [ ] Facebook: profile intro and website
- [ ] GrowMinion team / about page (ask them)
- [ ] Email signature, Calendly profile, WhatsApp business profile
- [ ] Any directory, freelance or portfolio listing (Upwork, Fiverr, Clutch, etc.)
- [ ] `EMAIL_FROM` for Resend if you start sending from the new domain (verify the domain in Resend first)

## 7. Keep the old host redirecting

- Keep `saniforge.vercel.app` attached to the project and redirecting for **at least 6 months** (ideally permanently; it costs nothing). Removing the redirect early loses the ranking signals and breaks old links.
- Watch Search Console for 4 to 8 weeks: indexed pages should move from the old property to the new one, and the **Crawl stats** report should show 301s on the old host.

## Rolling back

Clear `CUSTOM_DOMAIN` and `NEXT_PUBLIC_SITE_URL`, set `saniforge.vercel.app` as primary again, and redeploy. The site falls back to `https://saniforge.vercel.app` automatically.
