import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import BlogCard from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/mdx";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="py-24 sm:py-32">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading
          eyebrow="From the Blog"
          title="Practical notes on SEO, automation & web dev"
          description="No fluff — just what actually works, written from doing the work."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.1}>
              <BlogCard post={post} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-14 flex justify-center">
          <Button href="/blog" variant="outline" size="lg">
            Read All Posts
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
