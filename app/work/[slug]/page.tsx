import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { ArrowLeft } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import Button from "@/components/ui/Button";
import BlogCoverArt from "@/components/visuals/BlogCoverArt";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/mdx";
import { site } from "@/lib/data/site";

export function generateStaticParams() {
  return getAllCaseStudies().map((study) => ({ slug: study.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.tagline,
    openGraph: { title: study.title, description: study.tagline },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();

  return (
    <article>
      <section className="relative overflow-hidden border-b border-navy-border">
        <BlogCoverArt
          theme={study.coverTheme}
          category={study.category}
          className="absolute inset-0 h-full"
        />
        <div className="relative bg-navy-deep/60">
          <div className="container-px mx-auto max-w-3xl py-20 sm:py-28">
            <FadeIn>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-gold-light"
              >
                <ArrowLeft size={14} /> Back to Work
              </Link>
              <p className="mt-6 font-mono text-xs uppercase tracking-wider text-gold-light">
                {study.category} · {study.industries.join(" · ")}
              </p>
              <h1 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-5xl text-balance">
                {study.title}
              </h1>
              <p className="mt-5 font-display text-xl italic text-blue-soft">
                {study.tagline}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-3xl py-16 sm:py-20">
        <FadeIn className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {study.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-navy-border bg-navy-panel/50 p-5 text-center"
            >
              <div className="font-display text-2xl text-gold-light sm:text-3xl">
                {metric.value}
              </div>
              <div className="mt-1 text-xs text-ink-muted">{metric.label}</div>
            </div>
          ))}
        </FadeIn>

        <FadeIn delay={0.1} className="mdx-content">
          <MDXRemote
            source={study.content}
            options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
          />
        </FadeIn>

        <FadeIn delay={0.2} className="mt-16 rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center sm:p-10">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Want results like this for your business?
          </h2>
          <div className="mt-6">
            <Button href={site.bookCallLink} size="lg" external>
              Book a Call
            </Button>
          </div>
        </FadeIn>
      </section>
    </article>
  );
}
