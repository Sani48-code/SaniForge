import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import Button from "@/components/ui/Button";
import BlogCoverArt from "@/components/visuals/BlogCoverArt";
import TableOfContents from "@/components/blog/TableOfContents";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { getAllPosts, getPostBySlug, getRelatedPosts, extractHeadings } from "@/lib/mdx";
import { site } from "@/lib/data/site";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    openGraph: { title: post.seoTitle, description: post.seoDescription },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);
  const related = getRelatedPosts(post);
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article>
      <section className="relative overflow-hidden border-b border-navy-border">
        <BlogCoverArt
          theme={post.coverTheme}
          category={post.category}
          className="absolute inset-0 h-full"
        />
        <div className="relative bg-navy-deep/60">
          <div className="container-px mx-auto max-w-3xl py-20 sm:py-28">
            <FadeIn>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-gold-light"
              >
                <ArrowLeft size={14} /> Back to Blog
              </Link>
              <p className="mt-6 font-mono text-xs uppercase tracking-wider text-gold-light">
                {post.category}
              </p>
              <h1 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-5xl text-balance">
                {post.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-ink-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} /> {date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} /> {post.readTime}
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-content py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_260px]">
          <FadeIn className="mdx-content max-w-3xl">
            <MDXRemote
              source={post.content}
              options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
            />

            <div className="mt-16 rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl text-ink sm:text-3xl">
                Want help with this on your own site?
              </h2>
              <p className="mt-3 text-sm text-ink-muted sm:text-base">
                Book a free 15-minute call and let&apos;s talk through it.
              </p>
              <div className="mt-6">
                <Button href={site.bookCallLink} size="lg" external>
                  Book a Call
                </Button>
              </div>
            </div>
          </FadeIn>

          <aside>
            <TableOfContents headings={headings} />
          </aside>
        </div>
      </section>

      <RelatedPosts posts={related} />
    </article>
  );
}
