"use client";

import { useEffect, useMemo, useState } from "react";
import InsightCard, { type CardVariant } from "./InsightCard";
import Reveal from "@/components/projects/Reveal";
import { cn } from "@/lib/utils";
import { BLOG_CATEGORIES } from "@/lib/blog-categories";
import type { PostSummary } from "@/lib/mdx";

const ALL = "All Insights";
const PAGE_SIZE = 9;

/** Magazine rhythm repeated every 9 posts: large, standard x4, wide, standard x3. */
function layoutFor(index: number, total: number): { variant: CardVariant; span: string } {
  if (total === 1) return { variant: "wide", span: "lg:col-span-3 md:col-span-2" };
  const i = index % PAGE_SIZE;
  if (i === 0) return { variant: "large", span: "md:col-span-2" };
  if (i === 5) return { variant: "wide", span: "md:col-span-2 lg:col-span-3" };
  return { variant: "standard", span: "" };
}

export default function InsightExplorer({ posts }: { posts: PostSummary[] }) {
  const [active, setActive] = useState<string>(ALL);
  const [visible, setVisible] = useState(PAGE_SIZE);

  // Deep links such as /blog?category=Automation
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
    <>
      <section id="latest" className="scroll-mt-24 bg-jn-alt py-14 sm:py-20" aria-labelledby="topics-title">
        <div className="container-px mx-auto max-w-[1240px]">
          <Reveal className="max-w-2xl">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-sv-goldtext">
              <span className="h-0.5 w-8 rounded bg-jn-gold" /> Browse by topic
            </p>
            <h2 id="topics-title" className="mt-3 font-display text-3xl font-extrabold text-sv-navy sm:text-4xl lg:text-5xl">
              Explore What I&apos;m Learning and Building
            </h2>
            <p className="mt-3 text-lg text-jn-body">Practical notes across the areas I work in every day.</p>
          </Reveal>
          <div
            role="group"
            aria-label="Filter articles by topic"
            className="-mx-4 mt-8 flex gap-2.5 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
          >
            {[ALL, ...BLOG_CATEGORIES].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => select(cat)}
                aria-pressed={active === cat}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-blue",
                  active === cat
                    ? "border-sv-blue bg-sv-blue text-white shadow-md shadow-blue-600/20"
                    : "border-sv-border bg-white text-sv-navy hover:border-sv-blue/50 hover:bg-white"
                )}
              >
                {cat}
                <span className={cn("ml-2 text-xs", active === cat ? "text-white/80" : "text-jn-body")}>{counts[cat]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20" aria-labelledby="latest-title">
        <div className="container-px mx-auto max-w-[1240px]">
          <h2 id="latest-title" className="font-display text-3xl font-extrabold text-sv-navy sm:text-5xl">
            Latest Insights
          </h2>
          <p className="sr-only" role="status" aria-live="polite">
            Showing {shown.length} of {filtered.length} articles
          </p>

          {filtered.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-dashed border-sv-border bg-sv-soft/50 p-10 text-center text-jn-body">
              No articles in this topic yet. New posts appear here as soon as they are published.
            </div>
          ) : (
            <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {shown.map((post, i) => {
                const { variant, span } = layoutFor(i, filtered.length);
                return (
                  <li key={post.slug} className={span}>
                    <InsightCard post={post} variant={variant} />
                  </li>
                );
              })}
            </ul>
          )}

          {filtered.length > visible && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="rounded-xl border-2 border-sv-navy bg-white px-7 py-3 text-sm font-semibold text-sv-navy transition hover:border-jn-gold hover:bg-jn-pale focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-blue"
              >
                Load more articles ({filtered.length - visible} remaining)
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
