import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import Card from "@/components/ui/Card";
import BlogCoverArt from "@/components/visuals/BlogCoverArt";
import type { BlogPost } from "@/lib/mdx";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full overflow-hidden">
        <div className="relative h-40 w-full">
          <BlogCoverArt theme={post.coverTheme} category={post.category} className="h-full" />
          <span className="absolute left-4 top-4 rounded-full border border-gold/30 bg-navy-deep/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gold-light backdrop-blur-sm">
            {post.category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="font-display text-lg leading-snug text-ink">{post.title}</h3>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-muted">
            {post.excerpt}
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-navy-border pt-4">
            <span className="flex items-center gap-1.5 text-xs text-ink-faint">
              <Clock size={12} /> {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-sm font-medium text-gold-light">
              Read <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
