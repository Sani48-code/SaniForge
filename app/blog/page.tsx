import type { Metadata } from "next";
import JournalHero from "@/components/journal/JournalHero";
import FeaturedInsight from "@/components/journal/FeaturedInsight";
import InsightExplorer from "@/components/journal/InsightExplorer";
import ProblemsSolved from "@/components/journal/ProblemsSolved";
import { ApproachSection, JournalCta } from "@/components/journal/JournalClosing";
import FadeIn from "@/components/motion/FadeIn";
import { getAllPosts, getFeaturedPost, toSummary } from "@/lib/mdx";
import { site } from "@/lib/data/site";

// Re-evaluate periodically so scheduled posts go live once their date passes.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "The SaniForge Journal: Web Development, Automation and SEO Lessons",
  description:
    "Lessons from building websites, SaaS tools, automation workflows and SEO systems. Real problems, technical breakdowns and honest experiments from Abdul Kalyum Sani.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The SaniForge Journal",
    description:
      "Real experience and practical insights from building websites, SaaS tools, automation workflows and SEO systems.",
    url: `${site.url}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = getFeaturedPost(posts);
  const summaries = posts.map(toSummary);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The SaniForge Journal",
    url: `${site.url}/blog`,
    author: { "@type": "Person", name: site.founder, url: site.url },
    blogPost: posts.slice(0, 10).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${site.url}/blog/${p.slug}`,
      datePublished: p.date,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <JournalHero />

      {featured ? (
        <FeaturedInsight post={toSummary(featured)} />
      ) : null}

      <section id="latest" className="scroll-mt-24 py-16 sm:py-24" aria-labelledby="latest-title">
        <div className="container-px mx-auto max-w-content">
          <FadeIn>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-gold-light">
              Explore by topic
            </p>
            <h2 id="latest-title" className="mb-10 font-display text-3xl font-medium text-ink sm:text-5xl">
              Latest Insights
            </h2>
          </FadeIn>
          {summaries.length === 0 ? (
            <div className="rounded-xl border border-dashed border-navy-border p-12 text-center text-ink-muted">
              The first articles are on their way. Check back soon.
            </div>
          ) : (
            <InsightExplorer posts={summaries} />
          )}
        </div>
      </section>

      <ProblemsSolved posts={summaries} />
      <ApproachSection />
      <JournalCta />
    </>
  );
}
