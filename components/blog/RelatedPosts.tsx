import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/blog/BlogCard";
import type { BlogPost } from "@/lib/mdx";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="border-t border-navy-border py-20 sm:py-24">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading eyebrow="Keep Reading" title="Related posts" align="left" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
