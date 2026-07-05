"use client";

import { useState, useMemo } from "react";
import BlogCard from "@/components/blog/BlogCard";
import FadeIn from "@/components/motion/FadeIn";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/mdx";

const categories = ["All", "SEO", "Automation", "Web Development"] as const;

export default function CategoryFilter({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? posts : posts.filter((p) => p.category === active)),
    [active, posts]
  );

  return (
    <div>
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-5 py-2 font-mono text-sm uppercase tracking-wider transition-colors",
              active === cat
                ? "border-gold bg-gold/10 text-gold-light"
                : "border-navy-border text-ink-muted hover:border-gold/30 hover:text-ink"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-ink-muted">No posts in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.06}>
              <BlogCard post={post} />
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  );
}
