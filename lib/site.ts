/**
 * Single source of truth for the public origin and identity of the site.
 *
 * Every absolute URL (metadataBase, canonicals, og:url, og:image, sitemap, robots, JSON-LD)
 * is built from SITE_URL, so moving to a custom domain is a config change:
 * set NEXT_PUBLIC_SITE_URL in Vercel and redeploy. See DOMAIN_MIGRATION.md.
 */

const DEFAULT_SITE_URL = "https://www.saniforge.space";

// `||` rather than `??` so an empty NEXT_PUBLIC_SITE_URL= line in an env file falls back too.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, "");

export const SITE_NAME = "SaniForge";
export const AUTHOR_NAME = "Abdul Kaiyum Sani";
export const AUTHOR_ROLE = "n8n Developer, Full-Stack Developer & Growth Engineer";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/sani48",
  github: "https://github.com/Sani48-code",
  facebook: "https://www.facebook.com/abdulkaiyum.sani.50",
} as const;

/**
 * Last meaningful edit to the static pages (home, services, projects, booking).
 * Bump this when their content changes so the sitemap's lastModified stays honest.
 */
export const STATIC_CONTENT_UPDATED = "2026-10-16";

/**
 * Only the production deployment may be indexed. Vercel sets VERCEL_ENV to
 * "production", "preview" or "development"; when it is absent (local `next start`,
 * other hosts) the site is treated as production so it is never accidentally hidden.
 */
export const IS_INDEXABLE = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true;

/** Turn a site-relative path into an absolute URL on SITE_URL. Absolute URLs pass through. */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`.replace(/\/$/, "") || SITE_URL;
}
