import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import Card from "@/components/ui/Card";
import type { BlogPost } from "@/lib/mdx";

const categoryBadgeLight: Record<string, string> = {
  "SEO & Content": "bg-amber-50 text-amber-700 border-amber-200",
  Automation: "bg-blue-50 text-blue-700 border-blue-200",
  "Web Development": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "SaaS & Systems": "bg-purple-50 text-purple-700 border-purple-200",
  "Engineering Lessons": "bg-rose-50 text-rose-700 border-rose-200",
};

export default function BlogCard({
  post,
  sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  theme = "dark",
}: {
  post: BlogPost;
  sizes?: string;
  theme?: "dark" | "light";
}) {
  const isLight = theme === "light";

  if (isLight) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-2xl"
      >
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes={sizes}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span
              className={`absolute left-4 top-4 rounded-full border px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider shadow-xs backdrop-blur-sm ${
                categoryBadgeLight[post.category] || "bg-white/95 text-slate-800 border-slate-200"
              }`}
            >
              {post.category}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-display text-xl font-bold leading-snug text-slate-900 group-hover:text-blue-600 transition-colors">
              {post.title}
            </h3>
            <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-slate-600">
              {post.excerpt}
            </p>
            <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <Clock size={13} className="text-slate-400" /> {post.readTime}
              </span>
              <span className="flex items-center gap-1.5 text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                Read Blog <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Dark theme (for dark sections like BlogPreview)
  return (
    <Link
      href={`/blog/${post.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-2xl"
    >
      <Card className="h-full overflow-hidden hover:-translate-y-1.5 transition-all duration-300">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-navy-deep/15 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full border border-gold/30 bg-navy-deep/80 px-3 py-1 font-mono text-xs uppercase tracking-wider text-gold-light backdrop-blur-sm shadow-xs">
            {post.category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl leading-snug text-ink group-hover:text-gold-light transition-colors">
            {post.title}
          </h3>
          <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-ink-muted">
            {post.excerpt}
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-navy-border pt-4">
            <span className="flex items-center gap-1.5 text-xs text-ink-faint">
              <Clock size={13} /> {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-sm font-semibold text-gold-light group-hover:text-gold transition-colors">
              Read Blog <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
