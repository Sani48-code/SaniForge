import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  Sparkles,
  User,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import TableOfContents from "@/components/blog/TableOfContents";
import RelatedPosts from "@/components/blog/RelatedPosts";
import AuthorBio from "@/components/blog/AuthorBio";
import ShareButton from "@/components/case-study/ShareButton";
import { blogMdxComponents } from "@/components/mdx";
import { getAllPosts, getPostBySlug, getRelatedPosts, getAdjacentPosts, extractHeadings } from "@/lib/mdx";
import { site } from "@/lib/data/site";

// Posts scheduled for the future or added after the build are rendered on demand and cached.
export const revalidate = 300;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) return {};
  return {
    title: `${post.seoTitle} | SaniForge Blog`,
    description: post.seoDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: post.tags,
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.seoDescription,
      url: `${site.url}/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [site.founder],
      tags: post.tags,
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
  };
}

const categoryBadgeStyles: Record<string, string> = {
  "SEO & Content": "bg-amber-50 text-amber-700 border-amber-200/80",
  Automation: "bg-blue-50 text-blue-700 border-blue-200/80",
  "Web Development": "bg-emerald-50 text-emerald-700 border-emerald-200/80",
  "SaaS & Systems": "bg-purple-50 text-purple-700 border-purple-200/80",
  "Engineering Lessons": "bg-rose-50 text-rose-700 border-rose-200/80",
};

const blogLightMdxComponents = {
  ...blogMdxComponents,
  // CMS Markdown Image Handler
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <figure className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 p-2 sm:p-3 shadow-xs">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100">
        <Image
          src={props.src || ""}
          alt={props.alt || "Article graphic"}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
        />
      </div>
      {props.alt && (
        <figcaption className="mt-2.5 text-center font-mono text-xs text-slate-500 italic">
          {props.alt}
        </figcaption>
      )}
    </figure>
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-14 mb-5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 border-b border-slate-200/90 pb-3"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-10 mb-4 font-display text-xl sm:text-2xl font-bold text-slate-900"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="mb-6 text-lg leading-relaxed text-slate-700 font-normal"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="mb-6 space-y-2.5 list-disc list-outside pl-6 text-lg text-slate-700 leading-relaxed"
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="mb-6 space-y-2.5 list-decimal list-outside pl-6 text-lg text-slate-700 leading-relaxed"
      {...props}
    />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="text-slate-700 leading-relaxed pl-1" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-slate-900" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-8 border-l-4 border-blue-600 bg-blue-50/60 p-6 rounded-r-2xl italic text-slate-800 text-lg font-medium shadow-2xs"
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-blue-600 font-semibold underline underline-offset-4 decoration-blue-300 hover:text-blue-800 hover:decoration-blue-600 transition"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded bg-slate-100 px-2 py-0.5 font-mono text-sm font-medium text-slate-800 border border-slate-200"
      {...props}
    />
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-slate-50 border-b border-slate-200" {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-800"
      {...props}
    />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="border-b border-slate-100 px-5 py-3.5 text-slate-700" {...props} />
  ),
  hr: () => <hr className="my-12 border-slate-200" />,
};

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) notFound();

  const headings = extractHeadings(post.content);
  const related = getRelatedPosts(post);
  const { newer, older } = getAdjacentPosts(post);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    image: post.image,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { "@type": "Person", name: site.founder, url: site.url },
    publisher: { "@type": "Person", name: site.founder },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    articleSection: post.category,
    keywords: post.tags?.join(", "),
  };
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* Top Header / Breadcrumbs Bar */}
      <nav aria-label="Breadcrumb" className="border-b border-slate-200/80 bg-white/95 sticky top-[72px] z-40 backdrop-blur-md">
        <div className="container-px mx-auto flex max-w-content items-center justify-between py-3.5">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-medium text-slate-700 hover:text-blue-600 transition"
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <ChevronRight size={14} className="text-slate-300" />
            <span className="hidden md:inline font-mono text-slate-400">{post.category}</span>
            <ChevronRight size={14} className="hidden md:inline text-slate-300" />
            <span className="truncate max-w-[200px] sm:max-w-xs font-semibold text-slate-900">
              {post.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ShareButton title={post.title} />
            <a
              href={site.bookCallLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-blue-700 transition"
            >
              Book a Call <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Hero Header */}
      <header className="relative bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-100 py-12 sm:py-20">
        <div className="container-px mx-auto max-w-content">
          <FadeIn>
            {/* Category Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1 font-mono text-xs uppercase tracking-wider font-semibold ${
                  categoryBadgeStyles[post.category] || "bg-slate-100 text-slate-800 border-slate-200"
                }`}
              >
                <Sparkles size={12} />
                {post.category}
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-xs text-slate-600 shadow-2xs">
                Editorial Article
              </span>
            </div>

            {/* Post Title & Excerpt */}
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.14] text-balance">
              {post.title}
            </h1>
            <p className="mt-5 max-w-4xl text-xl sm:text-2xl font-normal leading-relaxed text-slate-600">
              {post.excerpt}
            </p>

            {/* Quick Metadata Info Strip */}
            <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs sm:grid-cols-4 sm:p-6">
              <div className="border-r border-slate-100 pr-4 last:border-0">
                <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-slate-400">
                  <User size={13} className="text-blue-600" /> Author
                </div>
                <div className="mt-1 font-semibold text-slate-900 text-sm sm:text-base">
                  {site.founder}
                </div>
              </div>

              <div className="border-r border-slate-100 pr-4 last:border-0">
                <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-slate-400">
                  <Calendar size={13} className="text-blue-600" /> Published
                </div>
                <div className="mt-1 font-semibold text-slate-900 text-sm sm:text-base">
                  {date}
                  {post.updated && post.updated !== post.date && (
                    <span className="block text-xs font-normal text-slate-500">
                      Updated {new Date(post.updated).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                    </span>
                  )}
                </div>
              </div>

              <div className="border-r border-slate-100 pr-4 last:border-0">
                <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-slate-400">
                  <Clock size={13} className="text-blue-600" /> Read Time
                </div>
                <div className="mt-1 font-semibold text-slate-900 text-sm sm:text-base">
                  {post.readTime}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-slate-400">
                  <CheckCircle2 size={13} className="text-emerald-600" /> Verified Content
                </div>
                <div className="mt-1 font-semibold text-emerald-700 text-sm sm:text-base">
                  Practical Systems Guide
                </div>
              </div>
            </div>

            {/* Featured Hero Visual */}
            <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/60">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </header>

      {/* Main Article Body & Sidebar */}
      <main className="container-px mx-auto max-w-content py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px]">
          {/* Main Article Column */}
          <article className="max-w-3xl">
            {(post.problem || post.approach || post.outcome) && (
              <aside aria-label="Problem, approach and outcome" className="mb-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <dl className="space-y-3 text-base text-slate-700">
                  {post.problem && (<div><dt className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700">Problem</dt><dd>{post.problem}</dd></div>)}
                  {post.approach && (<div><dt className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700">Approach</dt><dd>{post.approach}</dd></div>)}
                  {post.outcome && (<div><dt className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700">Outcome</dt><dd>{post.outcome}</dd></div>)}
                </dl>
              </aside>
            )}
            <div className="blog-article-content">
              <MDXRemote
                source={post.content}
                components={blogLightMdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeSlug],
                  },
                }}
              />
            </div>

            {(newer || older) && (
              <nav aria-label="More articles" className="mt-12 grid gap-4 sm:grid-cols-2">
                {older ? (
                  <Link href={`/blog/${older.slug}`} className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/40">
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-500">Previous article</span>
                    <span className="mt-1 block font-semibold text-slate-900">{older.title}</span>
                  </Link>
                ) : <span />}
                {newer ? (
                  <Link href={`/blog/${newer.slug}`} className="rounded-2xl border border-slate-200 p-5 text-right transition hover:border-blue-300 hover:bg-blue-50/40">
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-500">Next article</span>
                    <span className="mt-1 block font-semibold text-slate-900">{newer.title}</span>
                  </Link>
                ) : <span />}
              </nav>
            )}

            {/* High-Converting Bottom Strategy Call Banner */}
            <div className="mt-16 rounded-3xl border border-blue-200/90 bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-white p-8 sm:p-12 text-center shadow-lg shadow-blue-500/5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 font-mono text-xs uppercase tracking-wider font-semibold text-blue-800">
                <Sparkles size={12} /> Work With SaniForge
              </span>
              <h3 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-slate-900 text-balance">
                Need help applying this to your business?
              </h3>
              <p className="mt-4 mx-auto max-w-xl text-base sm:text-lg text-slate-600 leading-relaxed">
                Whether you need high-performance web development, SEO content that outranks competitors, or automated n8n workflows, let&apos;s talk through your strategy.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={site.bookCallLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-0.5 transition-all"
                >
                  Book a Free 15-Minute Call <ArrowUpRight size={16} />
                </a>
                <a
                  href={`mailto:${site.email}?subject=Inquiry%20from%20Blog:%20${encodeURIComponent(post.title)}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition"
                >
                  Send an Email
                </a>
              </div>
            </div>

            {/* Author Profile Bio */}
            <AuthorBio />
          </article>

          {/* Sticky Sidebar */}
          <aside className="space-y-6">
            <div className="lg:sticky lg:top-36 space-y-6">
              {/* Table of Contents */}
              <TableOfContents headings={headings} />

              {/* Author Quick Card */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-slate-200">
                    <Image
                      src="/images/portrait-suit-1.png"
                      alt={site.founder}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{site.founder}</h5>
                    <p className="text-xs text-slate-500">Systems &amp; Web Engineer</p>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  Ready to eliminate manual bottlenecks or build modern web experiences?
                </p>
                <a
                  href={site.bookCallLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 transition"
                >
                  Schedule 15-Min Strategy Call <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Share Box */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                  Share This Article
                </h5>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Found this practical? Share it with team members or founders who could benefit.
                </p>
                <div className="mt-4">
                  <ShareButton title={post.title} />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Related Posts */}
      <RelatedPosts posts={related} />
    </div>
  );
}
