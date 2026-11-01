import type { MetadataRoute } from "next";
import { SITE_URL, IS_INDEXABLE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Preview deployments: block everything so preview URLs never get crawled.
  if (!IS_INDEXABLE) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // API routes are not pages. Duplicate /projects/<slug> URLs stay crawlable so Google sees their canonical tag.
      disallow: ["/api/", "/case-study-template.html"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
