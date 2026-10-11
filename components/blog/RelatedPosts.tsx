import BlogCard from "@/components/blog/BlogCard";
import type { BlogPost } from "@/lib/mdx";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="border-t border-slate-200 bg-slate-50/70 py-16 sm:py-24">
      <div className="container-px mx-auto max-w-content">
        <div className="mb-10 text-center sm:text-left">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
            Keep Reading
          </span>
          <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-slate-900">
            Related Articles
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              post={post}
              theme="light"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
