import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";
import { site } from "@/lib/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/skills", "/blog"].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
  }));

  return [...staticRoutes, ...postRoutes];
}
