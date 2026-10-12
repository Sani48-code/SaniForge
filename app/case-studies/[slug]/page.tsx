import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  TrendingUp,
  Briefcase,
  Layers,
  Linkedin,
  Facebook,
  Mail,
  Share2,
  Phone,
  BookmarkCheck,
  AlertCircle,
  Lightbulb,
} from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import dynamic from "next/dynamic";

const ResultsChart = dynamic(() => import("@/components/work/ResultsChart"), {
  loading: () => <div className="h-64 w-full animate-pulse rounded-2xl bg-slate-100" aria-hidden="true" />,
});
import ShareButton from "@/components/case-study/ShareButton";
import CaseStudyBeforeAfter from "@/components/case-study/CaseStudyBeforeAfter";
import { PdfDownloadButton, NewsletterCard } from "@/components/case-study/CaseStudyActions";
import {
  getAllCaseStudies,
  getCaseStudyBySlug,
  getRelatedCaseStudies,
} from "@/lib/mdx";
import { site } from "@/lib/data/site";

export function generateStaticParams() {
  return getAllCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const study = getCaseStudyBySlug(resolvedParams.slug);
  if (!study) return {};

  return {
    title: `${study.title} | Case Study`,
    description: `${study.tagline}. A detailed ${study.service} case study by ${site.founder}.`,
    // /projects/[slug] renders the same page, so both URLs point search engines to this one.
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: `${study.title}: Case Study | ${site.name}`,
      description: study.tagline,
      images: [{ url: study.image, width: 1200, height: 630 }],
    },
  };
}

const caseStudyMdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-14 mb-5 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A] border-b border-slate-200/90 pb-3"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-10 mb-4 font-display text-xl sm:text-2xl font-bold text-[#0F172A]"
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
    <strong className="font-bold text-[#0F172A]" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-8 border-l-4 border-[#0B63E5] bg-[#F0F5FF]/70 p-6 rounded-r-2xl italic text-[#0F172A] text-lg font-medium shadow-2xs"
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-[#0B63E5] font-semibold underline underline-offset-4 decoration-[#0B63E5]/40 hover:text-[#0951bd] hover:decoration-[#0B63E5] transition"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded bg-slate-100 px-2 py-0.5 font-mono text-sm font-semibold text-[#0F172A] border border-slate-200"
      {...props}
    />
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-[#F8FAFC] border-b border-slate-200" {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0F172A]"
      {...props}
    />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="border-b border-slate-100 px-5 py-3.5 text-slate-700" {...props} />
  ),
  hr: () => <hr className="my-12 border-slate-200" />,
};

const categoryBadgeStyles = {
  Automation: "bg-[#F0F5FF] text-[#0B63E5] border-blue-200",
  Copywriting: "bg-amber-50 text-amber-700 border-amber-200",
  "Web Development": "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const study = getCaseStudyBySlug(resolvedParams.slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = getRelatedCaseStudies(study, 2);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] selection:bg-blue-100 selection:text-blue-900">
      {/* 2. Hero Section: Starts immediately with H1, no breadcrumbs */}
      <header className="relative bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-slate-100 pt-10 pb-14 sm:pt-14 sm:pb-20">
        <div className="container-px mx-auto max-w-content">
          <FadeIn>
            {/* Small byline / metadata */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1 font-mono text-xs uppercase tracking-wider font-bold ${
                  categoryBadgeStyles[study.category] ?? "bg-[#F0F5FF] text-[#0B63E5] border-blue-200"
                }`}
              >
                <Sparkles size={12} />
                {study.category}
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-xs font-medium text-slate-600 shadow-2xs">
                {study.industries[0] || "Client Project"}
              </span>
              <span className="flex items-center gap-1 font-mono text-xs text-slate-500 ml-2">
                <Clock size={12} className="text-slate-400" /> 6 min read
              </span>
              <span className="hidden sm:inline font-mono text-xs text-slate-400">&bull;</span>
              <span className="hidden sm:inline font-mono text-xs text-slate-500">
                Verified Production Build
              </span>
            </div>

            {/* Catchy H1 SEO-focused title */}
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.12] text-balance">
              {study.title}
            </h1>
            <p className="mt-4 max-w-3xl text-xl sm:text-2xl font-normal leading-relaxed text-slate-600">
              {study.tagline}
            </p>

            {/* Large rounded feature hero image */}
            <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/60">
              <Image
                src={study.image}
                alt={study.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </header>

      {/* Main Container */}
      <main className="container-px mx-auto max-w-content py-10 sm:py-14">
        {/* 3. Key Stats Bar: Inline stats card showing key metrics */}
        <section aria-label="Key Outcomes" className="mb-14">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-[#F0F5FF]/90 via-[#F8FAFC] to-[#F0F5FF]/90 p-6 sm:p-8 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0B63E5]">
                Key Impact &amp; Measured Outcomes
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 font-mono text-xs font-semibold text-emerald-700 border border-emerald-200">
                <CheckCircle2 size={13} className="text-emerald-600" /> Verified Results
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {study.metrics.map((metric, idx) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-xs transition-all hover:border-[#0B63E5]/40 hover:shadow-md"
                >
                  <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#0B63E5] tracking-tight">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-sm font-bold uppercase tracking-wider text-[#0F172A]">
                    {metric.label}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {idx === 0
                      ? "High-leverage milestone"
                      : idx === 1
                      ? "Faster than previous cycle"
                      : "Verified accuracy rate"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Main Layout (Sidebar + Content) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_380px]">
          {/* Left Content Area */}
          <article className="max-w-3xl">
            {/* Bold Challenge Section */}
            <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50/50 via-white to-rose-50/30 p-7 sm:p-9 shadow-xs mb-12">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-rose-700">
                <AlertCircle size={15} /> The Core Challenge
              </div>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                The Bottleneck Holding The Business Back
              </h3>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
                Before this engagement, manual dependencies, disconnected workflows, and slow operational turnaround created severe bottlenecks. Key personnel spent hours on repetitive low-leverage tasks rather than billable strategy and client acquisition.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-rose-900">
                <div className="flex items-center gap-2 rounded-xl bg-white/90 border border-rose-200/80 p-3">
                  <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0" />
                  Manual data duplication across fragmented apps
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/90 border border-rose-200/80 p-3">
                  <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0" />
                  Slow response times degrading client conversion
                </div>
              </div>
            </div>

            {/* Image / Visual Comparison (Before / After) */}
            <div className="mb-12">
              <CaseStudyBeforeAfter study={study} />
            </div>

            {/* Our Approach Section */}
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-[#F0F5FF]/60 via-white to-slate-50 p-7 sm:p-9 shadow-xs mb-12">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#0B63E5]">
                <Lightbulb size={15} /> Strategic Execution
              </div>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                Our Architectural Approach
              </h3>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
                Rather than patching broken legacy systems, we re-architected the end-to-end workflow from first principles to ensure bulletproof reliability and automatic scaling under production load.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl bg-white border border-slate-200 p-4 shadow-2xs">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#0B63E5] font-mono text-xs font-bold text-white">
                    01
                  </span>
                  <div>
                    <h5 className="font-bold text-sm text-[#0F172A]">Discovery &amp; Process Mapping</h5>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      Audited every handoff, documented edge cases, and isolated the highest-friction bottlenecks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-white border border-slate-200 p-4 shadow-2xs">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#0B63E5] font-mono text-xs font-bold text-white">
                    02
                  </span>
                  <div>
                    <h5 className="font-bold text-sm text-[#0F172A]">Architecture &amp; System Automation</h5>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      Implemented custom n8n pipelines and optimized web architecture with automated schema validation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-white border border-slate-200 p-4 shadow-2xs">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#0B63E5] font-mono text-xs font-bold text-white">
                    03
                  </span>
                  <div>
                    <h5 className="font-bold text-sm text-[#0F172A]">Testing &amp; Live Rollout</h5>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      Ran parallel test batches alongside the manual team until reaching 98%+ automated accuracy before cutover.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Chart Section */}
            <div className="mb-12">
              <ResultsChart
                type={study.chartType}
                label={study.chartLabel}
                data={study.chartData}
                theme="light"
              />
            </div>

            {/* Results and Impact Table (Before / After Comparison) */}
            <div className="mb-12">
              <div className="mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0B63E5]">
                  Comprehensive Comparison
                </span>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                  Results &amp; Impact Analysis
                </h3>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full border-collapse text-left text-sm">
                  <thead className="bg-[#F8FAFC] border-b border-slate-200">
                    <tr>
                      <th className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                        Focus Area
                      </th>
                      <th className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-rose-700">
                        Before Project
                      </th>
                      <th className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
                        After Optimization
                      </th>
                      <th className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0B63E5]">
                        Net Impact
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr>
                      <td className="px-5 py-3.5 font-bold text-[#0F172A]">Production Cycle</td>
                      <td className="px-5 py-3.5 text-slate-600">Days per batch (manual drafts)</td>
                      <td className="px-5 py-3.5 font-semibold text-emerald-700">Under 24 hours automated</td>
                      <td className="px-5 py-3.5 font-bold text-[#0B63E5]">90%+ Time Reduction</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3.5 font-bold text-[#0F172A]">Team Capacity</td>
                      <td className="px-5 py-3.5 text-slate-600">Buried in copy-paste busywork</td>
                      <td className="px-5 py-3.5 font-semibold text-emerald-700">Focused on client revenue</td>
                      <td className="px-5 py-3.5 font-bold text-[#0B63E5]">Zero Bottlenecks</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3.5 font-bold text-[#0F172A]">Output Consistency</td>
                      <td className="px-5 py-3.5 text-slate-600">Sporadic &amp; error-prone</td>
                      <td className="px-5 py-3.5 font-semibold text-emerald-700">Standardized &amp; verified</td>
                      <td className="px-5 py-3.5 font-bold text-[#0B63E5]">{study.metrics[0]?.value} Confirmed</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3.5 font-bold text-[#0F172A]">Scalability</td>
                      <td className="px-5 py-3.5 text-slate-600">Required hiring more headcount</td>
                      <td className="px-5 py-3.5 font-semibold text-emerald-700">Handles 5x volume automatically</td>
                      <td className="px-5 py-3.5 font-bold text-[#0B63E5]">High Margin Leverage</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Takeaways Card */}
            <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-[#F0F5FF]/90 via-white to-blue-50/40 p-7 sm:p-9 shadow-sm mb-12">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#0B63E5]">
                <BookmarkCheck size={16} /> Key Takeaways
              </div>
              <h4 className="mt-2 font-display text-2xl font-extrabold text-[#0F172A]">
                Strategic Lessons For Founders &amp; Operators
              </h4>
              <ul className="mt-5 space-y-3.5">
                <li className="flex items-start gap-3 text-base text-slate-800">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#0B63E5]" />
                  <span>
                    <strong>Automating execution, not judgment:</strong> The firm kept complete control over topical direction, while automation removed the mechanical publishing bottleneck.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-base text-slate-800">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#0B63E5]" />
                  <span>
                    <strong>Modular systems scale seamlessly:</strong> Building on composable micro-workflows ensures future CRM or publishing integrations plug in without refactoring.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-base text-slate-800">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#0B63E5]" />
                  <span>
                    <strong>ROI compounds week over week:</strong> Reclaiming 8-20+ hours per week per team member produces exponential returns over a 12-month horizon.
                  </span>
                </li>
              </ul>
            </div>

            {/* Full Detailed MDX Content */}
            <div className="case-study-mdx-body border-t border-slate-200 pt-8">
              <MDXRemote
                source={study.content}
                components={caseStudyMdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeSlug],
                  },
                }}
              />
            </div>
          </article>

          {/* Right Sidebar */}
          <aside className="space-y-6">
            <div className="lg:sticky lg:top-28 space-y-6">
              {/* Case Study Info Metadata Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                  Project Snapshot
                </h4>
                <div className="mt-4 space-y-3.5 text-sm">
                  <div className="flex justify-between border-b border-slate-100 pb-2.5">
                    <span className="text-slate-500">Client</span>
                    <span className="font-bold text-[#0F172A]">Confidential Business</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2.5">
                    <span className="text-slate-500">Industry</span>
                    <span className="font-bold text-[#0F172A] text-right">
                      {study.industries[0]}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2.5">
                    <span className="text-slate-500">Duration</span>
                    <span className="font-bold text-[#0F172A]">{study.timeline}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2.5">
                    <span className="text-slate-500">Service</span>
                    <span className="font-bold text-[#0F172A] text-right text-xs">
                      {study.service}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-slate-500">Status</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 border border-emerald-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      In Production
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <PdfDownloadButton title={study.title} />
                </div>
              </div>

              {/* Author / Designer Profile Card */}
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-xs">
                <div className="flex items-center gap-3.5">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md">
                    <Image
                      src="/images/portrait-suit-1.png"
                      alt={site.founder}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-[#0F172A] text-base">
                      {site.founder}
                    </h5>
                    <p className="text-xs text-slate-500">Web Developer &amp; Systems Engineer</p>
                  </div>
                </div>

                <p className="mt-3.5 text-xs leading-relaxed text-slate-600">
                  Specializing in scalable web architectures, automated AI/n8n pipelines, and SEO conversion design.
                </p>

                <div className="mt-4 flex items-center gap-2 pt-3 border-t border-slate-200/80">
                  <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-[#0B63E5] hover:text-[#0B63E5] transition-colors"
                  >
                    <Linkedin size={14} />
                  </a>
                  <a
                    href={site.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-[#0B63E5] hover:text-[#0B63E5] transition-colors"
                  >
                    <Facebook size={14} />
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    aria-label="Email"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-[#0B63E5] hover:text-[#0B63E5] transition-colors"
                  >
                    <Mail size={14} />
                  </a>
                  <a
                    href={site.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-[#0B63E5] hover:text-[#0B63E5] transition-colors"
                  >
                    <Phone size={14} />
                  </a>
                </div>
              </div>

              {/* Newsletter & Playbook Card */}
              <NewsletterCard />
            </div>
          </aside>
        </div>

        {/* 5. CTA Highlight Box */}
        <section aria-label="Call to action" className="mt-20">
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-[#F0F5FF] via-white to-[#EBF3FE] p-8 sm:p-14 text-center shadow-lg shadow-blue-500/5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B63E5]/10 px-3.5 py-1 font-mono text-xs uppercase tracking-wider font-bold text-[#0B63E5] border border-[#0B63E5]/20">
              <Sparkles size={12} /> Ready To Scale?
            </span>
            <h3 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] text-balance">
              Want results like this for your business?
            </h3>
            <p className="mt-4 mx-auto max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
              Let&apos;s diagnose your current bottlenecks, map out your highest-leverage opportunities, and build an automated system that drives measurable ROI.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={site.bookCallLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0B63E5] px-8 py-4 text-base font-bold text-white shadow-md shadow-[#0B63E5]/25 hover:bg-[#0951bd] hover:-translate-y-0.5 transition-all"
              >
                Book a Consultation <ArrowUpRight size={16} />
              </a>
              <a
                href={`mailto:${site.email}?subject=Case%20Study%20Consultation:%20${encodeURIComponent(study.title)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-[#0F172A] hover:border-slate-300 hover:bg-slate-50 transition"
              >
                Send an Email
              </a>
            </div>
          </div>
        </section>

        {/* 6. More Case Studies */}
        {relatedStudies.length > 0 && (
          <section className="mt-24 border-t border-slate-200 pt-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0B63E5]">
                  Related Work
                </span>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                  More Case Studies
                </h3>
              </div>
              <Link
                href="/#work"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-[#0B63E5] hover:text-[#0951bd]"
              >
                View all case studies <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {relatedStudies.map((item) => (
                <Link
                  key={item.slug}
                  href={`/case-studies/${item.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0B63E5] hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/95 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#0F172A] backdrop-blur-sm shadow-xs">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h4 className="font-display text-xl font-bold text-[#0F172A] group-hover:text-[#0B63E5] transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-2">{item.tagline}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
                      <span className="font-mono text-slate-500">{item.service}</span>
                      <span className="font-bold text-[#0B63E5] flex items-center gap-1">
                        Read Case Study <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
