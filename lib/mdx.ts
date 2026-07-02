import fs from "fs";
import path from "path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const WORK_DIR = path.join(process.cwd(), "content/work");

export type BlogCategory = "SEO" | "Automation" | "Web Development";

export type BlogFrontmatter = {
  title: string;
  slug: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  coverTheme: string;
  seoTitle: string;
  seoDescription: string;
};

export type BlogPost = BlogFrontmatter & {
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
  metrics: Metric[];
  coverTheme: string;
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

export function getAllPosts(): BlogPost[] {
  const files = getMdxFiles(BLOG_DIR);
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      ...(data as BlogFrontmatter),
      content,
      readTime: readingTime(content),
    };
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 2): BlogPost[] {
  return getAllPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit);
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
