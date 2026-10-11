import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import InsightCover from "./InsightCover";
import { categoryStyle, formatDate } from "./format";
import type { PostSummary } from "@/lib/mdx";

export type CardVariant = "standard" | "large" | "wide";

export default function InsightCard({
  post,
  variant = "standard",
}: {
  post: PostSummary;
  variant?: CardVariant;
}) {
  const wide = variant === "wide";
  const large = variant === "large";

  return (
    <article
      className={`group relative flex h-full overflow-hidden rounded-2xl border border-sv-border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sv-blue/40 hover:shadow-xl focus-within:border-sv-blue ${
        wide ? "flex-col md:flex-row" : "flex-col"
      }`}
    >
      <div
        className={`relative w-full shrink-0 overflow-hidden bg-sv-soft ${
          wide ? "aspect-[16/10] md:aspect-auto md:w-[42%] md:min-h-[260px]" : large ? "aspect-[16/9]" : "aspect-[16/10]"
        }`}
      >
        <InsightCover
          src={post.image}
          alt={`Cover image for ${post.title}`}
          category={post.category}
          sizes={large ? "(max-width: 1024px) 100vw, 66vw" : wide ? "(max-width: 768px) 100vw, 40vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className={`flex flex-1 flex-col ${large || wide ? "p-6 sm:p-8" : "p-6"}`}>
        <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${categoryStyle(post.category)}`}>
          {post.category}
        </span>
        <h3
          className={`mt-3 font-display font-extrabold leading-snug text-sv-navy ${
            large ? "text-2xl sm:text-3xl" : wide ? "text-2xl" : "text-xl"
          }`}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="after:absolute after:inset-0 focus:outline-none focus-visible:underline"
          >
            {post.title}
          </Link>
        </h3>
        <p className={`mt-2.5 text-sm leading-relaxed text-jn-body ${large || wide ? "line-clamp-4 sm:text-base" : "line-clamp-3"}`}>
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-sm text-jn-body">
          <span className="flex items-center gap-2">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={13} aria-hidden="true" /> {post.readTime}
            </span>
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-sv-blue">
            Read Article
            <ArrowUpRight size={15} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
