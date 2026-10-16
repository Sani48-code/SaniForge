import type { MetadataRoute } from "next";
import { getAllPosts, getAllCaseStudies } from "@/lib/mdx";
import { services } from "@/lib/data/services";
import { SITE_URL, STATIC_CONTENT_UPDATED } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const staticUpdated = new Date(STATIC_CONTENT_UPDATED);
  // The homepage and blog index change whenever a new post goes live.
  const latestPost = posts[0] ? new Date(posts[0].updated ?? posts[0].date) : staticUpdated;
  const newest = (a: Date, b: Date) => (a > b ? a : b);

  const page = (path: string, lastModified: Date, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"], priority: number) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    page("", newest(latestPost, staticUpdated), "weekly", 1),
    page("/services", staticUpdated, "monthly", 0.8),
    ...services.map((s) => page(`/services/${s.slug}`, staticUpdated, "monthly", 0.8)),
    page("/blog", newest(latestPost, staticUpdated), "weekly", 0.7),
    ...posts.map((post) => page(`/blog/${post.slug}`, new Date(post.updated ?? post.date), "monthly", 0.7)),
    page("/projects", staticUpdated, "monthly", 0.6),
    // Only the canonical /case-studies URL is listed; /projects/<slug> renders the same page.
    ...getAllCaseStudies().map((study) =>
      page(`/case-studies/${study.slug}`, new Date(study.updated ?? STATIC_CONTENT_UPDATED), "yearly", 0.6),
    ),
    page("/book-a-call", staticUpdated, "yearly", 0.5),
  ];
}
