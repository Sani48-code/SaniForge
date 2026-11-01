import fs from "fs";
import path from "path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const WORK_DIR = path.join(process.cwd(), "content/work");

import { BLOG_CATEGORIES, type BlogCategory } from "@/lib/blog-categories";

export { BLOG_CATEGORIES };
export type { BlogCategory };

/** Older posts used "SEO"; map legacy values onto the current category list. */
const LEGACY_CATEGORIES: Record<string, BlogCategory> = {
  SEO: "SEO & Content",
};

export function normalizeCategory(raw: string | undefined): BlogCategory {
  if (!raw) return "Engineering Lessons";
  if ((BLOG_CATEGORIES as readonly string[]).includes(raw)) return raw as BlogCategory;
  return LEGACY_CATEGORIES[raw] ?? "Engineering Lessons";
}

/**
 * Frontmatter for content/blog/*.mdx. Required: title, slug, excerpt, category, date, image.
 * Optional: status ("draft" hides the post), featured, updated, tags, problem/approach/outcome.
 * A post is public only when status !== "draft" AND date <= now (future dates are scheduled).
 */
export type BlogFrontmatter = {
  title: string;
  slug: string;
  excerpt: string;
  category: BlogCategory | "SEO";
  date: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
  /** Alt text for the cover image; falls back to the title. */
  imageAlt?: string;
  /** Social share overrides; default to image, seoTitle and seoDescription. */
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  /** Target search phrases, emitted in JSON-LD and the keywords meta tag. */
  keywords?: string[];
  status?: "published" | "draft";
  featured?: boolean;
  updated?: string;
  tags?: string[];
  problem?: string;
  approach?: string;
  lesson?: string;
  outcome?: string;
};

/** Post without its body, safe to send to client components. */
export type PostSummary = Omit<BlogPost, "content">;

export function toSummary(post: BlogPost): PostSummary {
  const rest: Partial<BlogPost> = { ...post };
  delete rest.content;
  return rest as PostSummary;
}

export type BlogPost = Omit<BlogFrontmatter, "category"> & {
  category: BlogCategory;
  content: string;
  readTime: string;
  /** "mdx" for .mdx files (JSX components allowed), "md" for plain Markdown drafts. */
  format: "mdx" | "md";
};

export type WorkCategory = "Automation" | "Copywriting" | "Web Development";

export type Metric = { value: string; label: string };

export type WorkFrontmatter = {
  title: string;
  slug: string;
  tagline: string;
  category: WorkCategory;
  industries: string[];
  service: string;
  timeline: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  metrics: Metric[];
  chartType: "bar" | "line";
  chartLabel: string;
  chartData: { label: string; value: number }[];
  /** Optional YYYY-MM-DD of the last edit; used for sitemap lastModified and Article dateModified. */
  updated?: string;
};

export type CaseStudy = WorkFrontmatter & {
  content: string;
};

function readingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function getMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
}

/** Blog posts may be .mdx or plain .md (README.md is documentation, not a post). */
function getPostFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => (f.endsWith(".mdx") || f.endsWith(".md")) && f.toLowerCase() !== "readme.md");
}

/** YAML turns unquoted dates into Date objects; normalize to YYYY-MM-DD. */
function toDateString(v: unknown): string | undefined {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return typeof v === "string" ? v : undefined;
}

/**
 * Plain .md drafts use a different frontmatter vocabulary (meta_title, description, og_*, modified,
 * primary_keyword...). Map it onto BlogFrontmatter so .md and .mdx posts render the same way.
 */
function normalizeFrontmatter(data: Record<string, unknown>): Partial<BlogFrontmatter> {
  const str = (k: string) => (typeof data[k] === "string" ? (data[k] as string) : undefined);
  const list = (k: string) => (Array.isArray(data[k]) ? (data[k] as string[]) : undefined);
  const keywords = [str("primary_keyword"), ...(list("secondary_keywords") ?? [])].filter(Boolean) as string[];
  return {
    ...(data as Partial<BlogFrontmatter>),
    date: toDateString(data.date),
    updated: toDateString(data.updated) ?? toDateString(data.modified),
    excerpt: str("excerpt") ?? str("description"),
    seoTitle: str("seoTitle") ?? str("meta_title") ?? str("title"),
    seoDescription: str("seoDescription") ?? str("description"),
    ogTitle: str("ogTitle") ?? str("og_title"),
    ogDescription: str("ogDescription") ?? str("og_description"),
    ogImage: str("ogImage") ?? str("og_image"),
    image: str("image") ?? str("og_image"),
    imageAlt: str("imageAlt") ?? str("image_alt"),
    keywords: list("keywords") ?? (keywords.length ? keywords : undefined),
  };
}

/**
 * Remove what the page template already renders or what must never be published:
 * a leading "# Title", a leading italic byline, a leading cover image, and everything from
 * "## Developer Notes" on.
 */
function cleanMarkdownBody(content: string): string {
  let body = content.replace(/\r\n/g, "\n");
  const notes = body.search(/^##\s+Developer Notes\b.*$/m);
  if (notes !== -1) body = body.slice(0, notes).replace(/\n-{3,}\s*$/, "\n");
  body = body.replace(/^\s*#\s+.+\n+/, "");
  body = body.replace(/^\s*\*By\s.+\*\s*\n+/, "");
  // A leading image is the cover, which the template already shows as the hero.
  body = body.replace(/^\s*!\[[^\]]*\]\([^)]*\)\s*\n+/, "");
  return body.trimEnd() + "\n";
}

function isPublic(data: Partial<BlogFrontmatter>): boolean {
  if (!data.title || !data.slug || !data.date) return false;
  if (data.status === "draft") return false;
  const time = new Date(data.date).getTime();
  if (Number.isNaN(time)) return false;
  return time <= Date.now();
}

/** All publicly visible posts, newest first. Drafts and scheduled posts are excluded. */
export function getAllPosts(): BlogPost[] {
  const files = getPostFiles(BLOG_DIR);
  const posts: BlogPost[] = [];
  for (const file of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content: rawContent } = matter(raw);
    const fm = normalizeFrontmatter(data) as BlogFrontmatter;
    if (!isPublic(fm)) continue;
    const format = file.endsWith(".mdx") ? "mdx" : "md";
    const content = cleanMarkdownBody(rawContent);
    posts.push({
      ...fm,
      category: normalizeCategory(fm.category),
      tags: fm.tags ?? [],
      content,
      readTime: readingTime(content),
      format,
    });
  }
  // When the same slug exists as .mdx and .md, the .mdx version (components, inline images) wins.
  const seen = new Set<string>();
  return posts
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.format === b.format ? 0 : a.format === "mdx" ? -1 : 1))
    .filter((p) => (seen.has(p.slug) ? false : (seen.add(p.slug), true)));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

/** The newest post marked featured, otherwise the newest published post. */
export function getFeaturedPost(posts: BlogPost[] = getAllPosts()): BlogPost | undefined {
  return posts.find((p) => p.featured) ?? posts[0];
}

export function getRelatedPosts(post: BlogPost, limit = 2): BlogPost[] {
  const others = getAllPosts().filter((p) => p.slug !== post.slug);
  const score = (p: BlogPost) =>
    (p.category === post.category ? 2 : 0) +
    (p.tags ?? []).filter((t) => (post.tags ?? []).includes(t)).length;
  return others
    .map((p) => ({ p, s: score(p) }))
    .sort((a, b) => b.s - a.s || (a.p.date < b.p.date ? 1 : -1))
    .slice(0, limit)
    .map((x) => x.p);
}

/** Neighbouring posts in publication order: `newer` was published after, `older` before. */
export function getAdjacentPosts(post: BlogPost): { newer?: BlogPost; older?: BlogPost } {
  const all = getAllPosts();
  const i = all.findIndex((p) => p.slug === post.slug);
  return { newer: i > 0 ? all[i - 1] : undefined, older: i >= 0 ? all[i + 1] : undefined };
}

export function getAllCaseStudies(): CaseStudy[] {
  const files = getMdxFiles(WORK_DIR);
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(WORK_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      ...(data as WorkFrontmatter),
      content,
    };
  });
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return getAllCaseStudies().find((study) => study.slug === slug);
}

export function getRelatedCaseStudies(study: CaseStudy, limit = 2): CaseStudy[] {
  return getAllCaseStudies()
    .filter((s) => s.slug !== study.slug)
    .slice(0, limit);
}

export type Heading = { text: string; id: string; depth: number };

export function extractHeadings(content: string): Heading[] {
  const slugger = new GithubSlugger();
  const lines = content.split("\n");
  const headings: Heading[] = [];
  for (const line of lines) {
    const match = /^(##)\s+(.+)$/.exec(line.trim());
    if (match) {
      const text = match[2].trim();
      headings.push({ text, id: slugger.slug(text), depth: match[1].length });
    }
  }
  return headings;
}
