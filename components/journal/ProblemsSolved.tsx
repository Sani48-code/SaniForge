import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import type { PostSummary } from "@/lib/mdx";

/** Only renders posts that carry a real `problem` summary in their frontmatter. */
export default function ProblemsSolved({ posts }: { posts: PostSummary[] }) {
  const items = posts.filter((p) => p.problem).slice(0, 4);
  if (items.length === 0) return null;

  return (
    <section className="border-y border-navy-border bg-navy-panel/30 py-20 sm:py-24">
      <div className="container-px mx-auto max-w-content">
        <FadeIn className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-gold-light">
            From the field
          </p>
          <h2 className="font-display text-3xl font-medium text-ink sm:text-5xl text-balance">
            Problems I&apos;ve Solved. Lessons I&apos;ve Learned.
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.06}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col rounded-xl border border-navy-border bg-navy/60 p-6 transition hover:border-gold/40 hover:shadow-card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light"
              >
                <span className="font-mono text-[11px] uppercase tracking-wider text-gold-light">
                  {p.category}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{p.title}</h3>
                <dl className="mt-4 space-y-3 text-sm leading-relaxed text-ink-muted">
                  <div>
                    <dt className="font-semibold text-ink">Problem</dt>
                    <dd>{p.problem}</dd>
                  </div>
                  {p.approach && (
                    <div>
                      <dt className="font-semibold text-ink">Approach</dt>
                      <dd>{p.approach}</dd>
                    </div>
                  )}
                  {p.outcome && (
                    <div>
                      <dt className="font-semibold text-ink">Outcome</dt>
                      <dd>{p.outcome}</dd>
                    </div>
                  )}
                </dl>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-gold-light">
                  Read the full article <ArrowUpRight size={15} aria-hidden="true" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
