"use client";

import { useEffect, useMemo, useState } from "react";
import InsightCard from "./InsightCard";
import { cn } from "@/lib/utils";
import { BLOG_CATEGORIES } from "@/lib/blog-categories";
import type { PostSummary } from "@/lib/mdx";

const ALL = "All Insights";
const PAGE_SIZE = 9;

export default function InsightExplorer({ posts }: { posts: PostSummary[] }) {
  const [active, setActive] = useState<string>(ALL);
  const [visible, setVisible] = useState(PAGE_SIZE);

  // Allow deep links such as /blog?category=Automation
  useEffect(() => {
    const c = new URLSearchParams(window.location.search).get("category");
    if (c && (BLOG_CATEGORIES as readonly string[]).includes(c)) setActive(c);
  }, []);

  const counts = useMemo(() => {
    const map: Record<string, number> = { [ALL]: posts.length };
    for (const c of BLOG_CATEGORIES) map[c] = posts.filter((p) => p.category === c).length;
    return map;
  }, [posts]);

  const filtered = useMemo(
    () => (active === ALL ? posts : posts.filter((p) => p.category === active)),
    [active, posts]
  );
  const shown = filtered.slice(0, visible);

  function select(cat: string) {
    setActive(cat);
    setVisible(PAGE_SIZE);
    const url = new URL(window.location.href);
    if (cat === ALL) url.searchParams.delete("category");
    else url.searchParams.set("category", cat);
    window.history.replaceState(null, "", url);
  }

  return (
    <div>
      <div role="group" aria-label="Filter articles by topic" className="flex flex-wrap gap-2.5">
        {[ALL, ...BLOG_CATEGORIES].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => select(cat)}
            aria-pressed={active === cat}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light",
              active === cat
                ? "border-gold bg-gold/10 text-gold-light"
                : "border-navy-border text-ink-muted hover:border-gold/40 hover:text-ink"
            )}
          >
            {cat}
            <span className="ml-2 text-xs opacity-60">{counts[cat]}</span>
          </button>
        ))}
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        Showing {shown.length} of {filtered.length} articles
      </p>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-xl border border-dashed border-navy-border p-10 text-center text-ink-muted">
          No articles in this topic yet. New posts appear here as soon as they are published.
        </div>
      ) : (
        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((post) => (
            <li key={post.slug}>
              <InsightCard post={post} />
            </li>
          ))}
        </ul>
      )}

      {filtered.length > visible && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="rounded-full border border-gold/40 px-7 py-3 text-sm font-semibold text-ink transition hover:border-gold hover:bg-gold/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
          >
            Load more articles ({filtered.length - visible} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
