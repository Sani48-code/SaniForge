import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import JournalHero from "@/components/journal/JournalHero";
import StartHere from "@/components/journal/StartHere";
import InsightExplorer from "@/components/journal/InsightExplorer";
import ProblemsLessons from "@/components/journal/ProblemsLessons";
import BehindTheBuild from "@/components/journal/BehindTheBuild";
import { ApproachSection, JournalCta } from "@/components/journal/JournalClosing";
import { getAllPosts, getFeaturedPost, toSummary } from "@/lib/mdx";
import { site } from "@/lib/data/site";

// Re-evaluate periodically so scheduled posts go live once their date passes.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "The SaniForge Journal: Web Development, Automation and SEO Lessons",
  description:
    "Notes from building websites, SaaS tools, automation workflows and SEO systems. Lessons, technical decisions and practical solutions from Abdul Kalyum Sani.",
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
  const summaries = posts.map(toSummary);
  const featured = getFeaturedPost(posts);

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
    <div data-light-page className="bg-white font-sans text-sv-navy">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <JournalHero latest={summaries[0]} />
      {featured && <StartHere post={toSummary(featured)} />}
      {summaries.length === 0 ? (
        <section id="latest" className="py-20 text-center text-jn-body">
          The first articles are on their way. Check back soon.
        </section>
      ) : (
        <InsightExplorer posts={summaries} />
      )}
      <ProblemsLessons posts={summaries} />
      <BehindTheBuild posts={summaries} />
      <ApproachSection />
      <JournalCta />
    </div>
  );
}
