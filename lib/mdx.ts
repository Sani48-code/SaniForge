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
  status?: "published" | "draft";
  featured?: boolean;
  updated?: string;
  tags?: string[];
  problem?: string;
  approach?: string;
  outcome?: string;
};

/** Post without its body, safe to send to client components. */
export type PostSummary = Omit<BlogPost, "content">;

export function toSummary(post: BlogPost): PostSummary {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { content, ...rest } = post;
  return rest;
}

export type BlogPost = Omit<BlogFrontmatter, "category"> & {
  category: BlogCategory;
  content: string;
  readTime: string;
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

function isPublic(data: Partial<BlogFrontmatter>): boolean {
  if (!data.title || !data.slug || !data.date) return false;
  if (data.status === "draft") return false;
  const time = new Date(data.date).getTime();
  if (Number.isNaN(time)) return false;
  return time <= Date.now();
}

/** All publicly visible posts, newest first. Drafts and scheduled posts are excluded. */
export function getAllPosts(): BlogPost[] {
  const files = getMdxFiles(BLOG_DIR);
  const posts: BlogPost[] = [];
  for (const file of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    const fm = data as BlogFrontmatter;
    if (!isPublic(fm)) continue;
    posts.push({
      ...fm,
      category: normalizeCategory(fm.category),
      tags: fm.tags ?? [],
      content,
      readTime: readingTime(content),
    });
  }
  const seen = new Set<string>();
  return posts
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
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
