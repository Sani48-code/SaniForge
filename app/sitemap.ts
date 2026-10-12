import type { MetadataRoute } from "next";
import { getAllPosts, getAllCaseStudies } from "@/lib/mdx";
import { services } from "@/lib/data/services";
import { site } from "@/lib/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", ...services.map((s) => `/services/${s.slug}`), "/book-a-call", "/projects", "/blog"].map((route) => ({
    url: `${site.url}${route}`,
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date).toISOString(),
  }));

  const caseStudyRoutes = getAllCaseStudies().map((study) => ({
    url: `${site.url}/case-studies/${study.slug}`,
  }));

  return [...staticRoutes, ...postRoutes, ...caseStudyRoutes];
}
