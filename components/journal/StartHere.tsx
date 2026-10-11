import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import Reveal from "@/components/projects/Reveal";
import InsightCover from "./InsightCover";
import { categoryStyle, formatDate } from "./format";
import type { PostSummary } from "@/lib/mdx";

export default function StartHere({ post }: { post: PostSummary }) {
  return (
    <section aria-labelledby="start-here" className="bg-jn-pale/70 py-16 sm:py-24">
      <div className="container-px mx-auto max-w-[1240px]">
        <Reveal>
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-sv-goldtext">
            <span className="h-0.5 w-8 rounded bg-jn-gold" /> Featured
          </p>
          <h2 id="start-here" className="mt-3 font-display text-4xl font-extrabold text-sv-navy sm:text-5xl">
            Start Here
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="group relative mt-10 grid items-center gap-0 lg:grid-cols-[1.35fr_1fr]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-sv-border bg-white shadow-2xl shadow-amber-900/10 lg:aspect-[4/3]">
              <InsightCover
                src={post.image}
                alt={`Cover image for ${post.title}`}
                category={post.category}
                sizes="(max-width: 1024px) 100vw, 740px"
                priority
                className="transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="relative z-10 -mt-10 rounded-3xl border border-sv-border bg-white p-7 shadow-xl sm:p-10 lg:-ml-16 lg:mt-0">
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${categoryStyle(post.category)}`}>
                {post.category}
              </span>
              <h3 className="mt-4 font-display text-2xl font-extrabold leading-tight text-sv-navy sm:text-3xl lg:text-4xl">
                <Link
                  href={`/blog/${post.slug}`}
                  className="after:absolute after:inset-0 focus:outline-none focus-visible:underline"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="mt-4 line-clamp-4 text-base leading-relaxed text-jn-body">{post.excerpt}</p>
              <div className="mt-5 flex items-center gap-3 text-sm text-jn-body">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} aria-hidden="true" /> {post.readTime}
                </span>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sv-blue px-6 py-3 text-sm font-semibold text-white transition group-hover:bg-blue-700">
                Read the Story <ArrowUpRight size={15} aria-hidden="true" />
              </span>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
