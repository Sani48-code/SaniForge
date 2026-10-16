import type { MetadataRoute } from "next";
import { getAllPosts, getAllCaseStudies } from "@/lib/mdx";
import { services } from "@/lib/data/services";
import { site } from "@/lib/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  // The blog index and homepage change whenever a new post goes live.
  const latestPost = posts[0] ? new Date(posts[0].updated ?? posts[0].date) : new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: latestPost, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/services`, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${site.url}/blog`, lastModified: latestPost, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/projects`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/book-a-call`, changeFrequency: "yearly", priority: 0.6 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Only the canonical /case-studies URL is listed; /projects/[slug] renders the same page.
  const caseStudyRoutes: MetadataRoute.Sitemap = getAllCaseStudies().map((study) => ({
    url: `${site.url}/case-studies/${study.slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes, ...caseStudyRoutes];
}
