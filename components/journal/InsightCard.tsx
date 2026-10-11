import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import InsightCover from "./InsightCover";
import { formatDate } from "./format";
import type { PostSummary } from "@/lib/mdx";

export default function InsightCard({ post }: { post: PostSummary }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-navy-border bg-navy-panel/60 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-card-hover focus-within:border-gold/60">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-deep">
        <InsightCover
          src={post.image}
          alt={`Cover image for ${post.title}`}
          category={post.category}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full border border-gold/30 bg-navy-deep/85 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-gold-light backdrop-blur-sm">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-ink-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <Clock size={12} aria-hidden="true" /> {post.readTime}
          </span>
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-ink">
          <Link
            href={`/blog/${post.slug}`}
            className="after:absolute after:inset-0 focus:outline-none focus-visible:underline"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-ink-muted">{post.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-gold-light transition-colors group-hover:text-gold-soft">
          Read Article
          <ArrowUpRight size={15} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
