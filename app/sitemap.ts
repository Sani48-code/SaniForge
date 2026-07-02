import type { MetadataRoute } from "next";
import { getAllPosts, getAllCaseStudies } from "@/lib/mdx";
import { site } from "@/lib/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/skills",
    "/work",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
  }));

  const workRoutes = getAllCaseStudies().map((study) => ({
    url: `${site.url}/work/${study.slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...postRoutes, ...workRoutes];
}
