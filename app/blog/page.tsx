import type { Metadata } from "next";
import FadeIn from "@/components/motion/FadeIn";
import CategoryFilter from "@/components/blog/CategoryFilter";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical, no-fluff notes on SEO, n8n automation, and web development from Abdul Kalyum Sani.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="relative overflow-hidden bg-navy-radial py-20 sm:py-28">
        <div className="container-px mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-light">
              Blog
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl text-balance">
              Notes on SEO, automation &amp;{" "}
              <em className="italic text-gold-light">building things</em>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
              Practical write-ups from actually doing the work — no fluff, no
              recycled listicles.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-px mx-auto max-w-content">
          <CategoryFilter posts={posts} />
        </div>
      </section>
    </>
  );
}
