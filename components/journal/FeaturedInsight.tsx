import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import InsightCover from "./InsightCover";
import { formatDate } from "./format";
import type { PostSummary } from "@/lib/mdx";

export default function FeaturedInsight({ post }: { post: PostSummary }) {
  return (
    <section aria-labelledby="featured-title" className="pb-6 sm:pb-10">
      <div className="container-px mx-auto max-w-content">
        <FadeIn>
          <p id="featured-title" className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-gold-light">
            <span className="h-px w-8 bg-gold/60" /> Featured Insight
          </p>
          <article className="group relative grid overflow-hidden rounded-2xl border border-navy-border bg-navy-panel/60 transition duration-300 hover:border-gold/40 hover:shadow-card-hover lg:grid-cols-[1.25fr_1fr]">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-deep lg:aspect-auto lg:min-h-[380px]">
              <InsightCover
                src={post.image}
                alt={`Cover image for ${post.title}`}
                category={post.category}
                sizes="(max-width: 1024px) 100vw, 700px"
                priority
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <span className="w-fit rounded-full border border-gold/30 bg-gold/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-gold-light">
                {post.category}
              </span>
              <h2 className="mt-5 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                <Link
                  href={`/blog/${post.slug}`}
                  className="after:absolute after:inset-0 focus:outline-none focus-visible:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 line-clamp-4 text-base leading-relaxed text-ink-muted">{post.excerpt}</p>
              <div className="mt-6 flex items-center gap-3 text-sm text-ink-muted">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} aria-hidden="true" /> {post.readTime}
                </span>
              </div>
              <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-navy-deep">
                Read the Story <ArrowUpRight size={15} aria-hidden="true" />
              </span>
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
