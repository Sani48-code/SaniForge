import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { ArrowRight, ArrowUpRight, Check, Info, Quote } from "lucide-react";
import dynamic from "next/dynamic";
import ShareButton from "@/components/case-study/ShareButton";
import { PdfDownloadButton } from "@/components/case-study/CaseStudyActions";
import CaseStudyIllustration from "@/components/case-study/CaseStudyIllustration";
import { getAllCaseStudies, getCaseStudyBySlug, getRelatedCaseStudies, type WorkCategory } from "@/lib/mdx";
import { getCaseStudyStory, type HighlightText } from "@/lib/data/case-study-stories";
import { site } from "@/lib/data/site";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

const ResultsChart = dynamic(() => import("@/components/work/ResultsChart"), {
  loading: () => <div className="h-64 w-full animate-pulse rounded-2xl bg-slate-100" aria-hidden="true" />,
});

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

  // /projects/[slug] renders the same page, so both URLs point search engines to /case-studies/<slug>.
  return buildMetadata({
    title: `${study.title} | Case Study`,
    description: `${study.tagline}. A detailed ${study.service} case study by SaniForge.`,
    path: `/case-studies/${study.slug}`,
    socialTitle: `${study.title}: Case Study | ${site.name}`,
    socialDescription: study.tagline,
    type: "article",
    // Share image comes from app/case-studies/[slug]/opengraph-image.tsx.
    image: null,
  });
}

/* Brand tokens: navy surfaces, SaniForge blue for actions, amber as the highlight accent. */
const AMBER = "text-[#F59E0B]";

/** Closing call to action, matched to the kind of work in the case study. */
const CTA_BY_CATEGORY: Record<WorkCategory, { headline: string; text: string; checklist: [string, string][] }> = {
  Automation: {
    headline: "Still copying, pasting and chasing work by hand?",
    text: "Every week without a system is another week of manual entry, slow follow-up and work that waits on someone's free time. Let's map the process and automate the parts that should never need a person.",
    checklist: [
      ["Process mapping", "Find the steps worth automating"],
      ["n8n workflows", "Built, tested and documented"],
      ["Human checkpoints", "People approve what matters"],
      ["Live dashboards", "See what the system is doing"],
    ],
  },
  Copywriting: {
    headline: "Your best pages could already be ranking and bringing in leads.",
    text: "Thin pages and posts written for the wrong reader cost you searches every day. Let's find the pages with the most to gain and rewrite them for your clients and for Google.",
    checklist: [
      ["Keyword & intent research", "Topics your buyers search"],
      ["Client-first copy", "Written for the reader's situation"],
      ["On-page SEO & schema", "Titles, FAQs, local signals"],
      ["Clear calls to action", "One easy next step"],
    ],
  },
  "Web Development": {
    headline: "Your website should be your best salesperson.",
    text: "A slow page, a long form or a hidden phone number quietly turns visitors away. Let's rebuild the pages that matter around the one action you need visitors to take.",
    checklist: [
      ["Mobile-first build", "Fast on every phone"],
      ["Conversion design", "One obvious next step"],
      ["Speed optimization", "Under 2 second loads"],
      ["Tracking setup", "Know what generates leads"],
    ],
  },
};

const BRANCH_COLORS = [
  { head: "bg-[#0B63E5]", chip: "bg-blue-50 border-blue-200 text-blue-900" },
  { head: "bg-indigo-500", chip: "bg-indigo-50 border-indigo-200 text-indigo-900" },
  { head: "bg-violet-600", chip: "bg-violet-50 border-violet-200 text-violet-900" },
  { head: "bg-emerald-600", chip: "bg-emerald-50 border-emerald-200 text-emerald-900" },
];
const STEP_GRID: Record<number, string> = { 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5", 6: "lg:grid-cols-6" };
const STEP_COLORS = ["bg-[#0B63E5]", "bg-[#0B63E5]", "bg-indigo-500", "bg-indigo-500", "bg-violet-600", "bg-emerald-600"];

function Highlighted({ text, className = AMBER }: { text: HighlightText; className?: string }) {
  return (
    <>
      {text.pre}
      <span className={className}>{text.highlight}</span>
      {text.post}
    </>
  );
}

function SectionHeading({ id, title, lead, dark = false }: { id?: string; title: string; lead?: string; dark?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 id={id} className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${dark ? "text-white" : "text-[#0F172A]"}`}>
        {title}
      </h2>
      {lead && <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>{lead}</p>}
    </div>
  );
}

function CallButton({ children = "Book a Free Call", dark = false }: { children?: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href={site.bookCallLink}
      className={`inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm sm:text-base font-bold transition-transform hover:-translate-y-0.5 ${
        dark ? "bg-[#F59E0B] text-[#0F172A]" : "bg-[#0B63E5] text-white shadow-lg shadow-blue-500/25"
      }`}
    >
      {children}
      <span className={`grid h-8 w-8 place-items-center rounded-full ${dark ? "bg-[#0F172A] text-[#F59E0B]" : "bg-white text-[#0B63E5]"}`}>
        <ArrowRight size={16} />
      </span>
    </a>
  );
}

const fallbackMdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-12 mb-4 font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A]" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="mb-5 text-lg leading-relaxed text-slate-700" {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-6 list-disc space-y-2 pl-6 text-lg text-slate-700" {...props} />
  ),
};

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const study = getCaseStudyBySlug(resolvedParams.slug);
  if (!study) notFound();

  const story = getCaseStudyStory(study.slug);
  const relatedStudies = getRelatedCaseStudies(study, 2);
  const path = `/case-studies/${study.slug}`;
  const cta = CTA_BY_CATEGORY[study.category];
  const jsonLd = [
    articleSchema({
      type: "Article",
      headline: `${study.title}: ${study.tagline}`,
      description: story?.intro ?? study.tagline,
      path,
      images: [`${path}/opengraph-image`, study.image],
      dateModified: study.updated,
      section: study.category,
      keywords: [study.service, ...study.industries],
    }),
    breadcrumbSchema([
      { name: "Projects", path: "/projects" },
      { name: study.title, path },
    ]),
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-[#0F172A] selection:bg-amber-100">
      <JsonLd data={jsonLd} />

      {/* ============ HERO ============ */}
      <header className="relative overflow-hidden rounded-b-[40px] bg-[#070B14] bg-[radial-gradient(1100px_480px_at_85%_-10%,rgba(245,158,11,0.13),transparent_60%),radial-gradient(700px_400px_at_0%_0%,rgba(11,99,229,0.18),transparent_60%)] px-4 pb-56 pt-12 text-white sm:pt-16">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-20 h-[520px] w-[520px] rounded-full border border-white/5 shadow-[0_0_0_60px_rgba(255,255,255,0.015)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full border border-[#F59E0B]/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F59E0B]">
              {study.category}
            </span>
            {study.industries.slice(0, 2).map((ind) => (
              <span key={ind} className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-medium text-slate-300">
                {ind}
              </span>
            ))}
          </div>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-[30px] font-extrabold leading-[1.15] tracking-tight text-balance sm:text-5xl">
            {story ? <Highlighted text={story.headline} /> : study.title}
          </h1>
          {!story && <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">{study.tagline}</p>}

          <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              ["Client", story?.client ?? study.industries[0]],
              ["Service", study.service],
              ["Timeline", study.timeline],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-sm font-semibold text-white">{k}</dt>
                <dd className="mt-1 text-sm text-slate-400">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* Hero stat card, overlapping the dark header */}
      <div className="relative z-10 mx-auto -mt-44 max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-[28px] border border-[#F59E0B]/20 bg-[#030509] px-6 pb-10 pt-8 text-center text-white shadow-[0_30px_80px_rgba(2,6,23,0.35)] sm:px-10 sm:pb-14">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(420px_240px_at_100%_35%,rgba(245,158,11,0.45),transparent_70%),radial-gradient(420px_220px_at_0%_100%,rgba(245,158,11,0.28),transparent_70%),radial-gradient(360px_220px_at_50%_0%,rgba(11,99,229,0.25),transparent_70%)]" />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(245,180,40,0.7)_1px,transparent_1.4px)] [background-size:8px_8px] [mask-image:radial-gradient(420px_240px_at_95%_40%,#000,transparent_70%)]"
          />
          <svg aria-hidden="true" viewBox="0 0 1000 400" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
            <path d="M0 290 C160 220 300 210 470 265 S780 320 900 220 S980 90 1000 70" fill="none" stroke="#F59E0B" strokeWidth="8" opacity=".35" style={{ filter: "blur(6px)" }} />
            <path d="M0 290 C160 220 300 210 470 265 S780 320 900 220 S980 90 1000 70" fill="none" stroke="#FBBF24" strokeWidth="2.5" />
          </svg>
          <div className="relative">
            {story && (
              <div className="flex flex-wrap justify-center gap-2">
                {story.chips.map((c) => (
                  <span key={c} className="rounded-full border border-[#F59E0B]/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#F59E0B]">
                    {c}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-6 text-sm font-medium tracking-[0.2em] text-slate-300">INSIDE THE PROJECT</div>
            <div className="mt-2 bg-gradient-to-b from-amber-100 via-[#FBBF24] to-[#B45309] bg-clip-text font-display text-7xl font-extrabold leading-none text-transparent drop-shadow-[0_0_18px_rgba(245,158,11,0.35)] sm:text-8xl lg:text-9xl">
              {story?.heroStat.value ?? study.metrics[0]?.value}
            </div>
            <div className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#FBBF24] sm:text-sm">
              {story?.heroStat.label ?? study.metrics[0]?.label}
            </div>
            {story && (
              <p className="mx-auto mt-10 max-w-3xl text-lg font-semibold uppercase leading-snug sm:text-2xl">
                <Highlighted text={story.heroLine} />
              </p>
            )}
          </div>
        </div>
      </div>

      <main>
        {/* ============ INTRO + AT A GLANCE ============ */}
        <section className="mx-auto max-w-content px-4 pt-14 sm:px-6">
          {story ? (
            <>
              <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-slate-700">{story.intro}</p>

              <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-amber-300 border-l-8 bg-amber-50 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0F172A] text-[#F59E0B]">
                    <Info size={16} />
                  </span>
                  <h2 className="text-lg font-bold text-[#0F172A]">How we measured</h2>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-4 text-sm leading-relaxed text-slate-800 sm:grid-cols-3">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800">Figures</div>
                    Before figures are from before the project. After figures cover the period stated with each number.
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800">Client</div>
                    The client is described, not named, to keep their business confidential.
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800">Screens</div>
                    Interface screens are illustrations built with sample data. No client data appears.
                  </div>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white lg:grid-cols-5">
                {[
                  ["Client", story.client],
                  ["Challenge", story.glance.challenge],
                  ["Solution", story.glance.solution],
                  ["Result", story.glance.result],
                  ["Timeline", study.timeline],
                ].map(([k, v], i) => (
                  <div
                    key={k}
                    className={`border-b border-r border-slate-200 p-4 sm:p-5 lg:border-b-0 ${i === 0 ? "col-span-2 bg-[#0F172A] lg:col-span-1" : ""} ${i === 4 ? "col-span-2 lg:col-span-1 lg:border-r-0" : ""}`}
                  >
                    <div className={`text-[11px] font-bold uppercase tracking-[0.14em] ${i === 0 ? "text-[#F59E0B]" : "text-slate-500"}`}>{k}</div>
                    <p className={`mt-1.5 text-sm leading-snug ${i === 0 ? "font-semibold text-white" : "text-slate-800"}`}>{v}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {story.kpis.map((k, i) => (
                  <div key={k.label} className={`rounded-2xl p-5 sm:p-6 ${i === 0 ? "bg-[#0F172A]" : "bg-slate-100"}`}>
                    <div className={`font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${i === 0 ? "text-[#F59E0B]" : "text-[#0F172A]"}`}>{k.value}</div>
                    <div className={`mt-2 text-sm font-semibold ${i === 0 ? "text-white" : "text-slate-800"}`}>{k.label}</div>
                    <div className={`text-xs ${i === 0 ? "text-slate-400" : "text-slate-500"}`}>{k.note}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 print:hidden">
                <ShareButton title={study.title} />
                <div className="w-56">
                  <PdfDownloadButton title={study.title} />
                </div>
              </div>
            </>
          ) : (
            <article className="mx-auto max-w-3xl">
              <MDXRemote
                source={study.content}
                components={fallbackMdxComponents}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
              />
            </article>
          )}
        </section>

        {story && (
          <>
            {/* ============ EXECUTIVE SUMMARY ============ */}
            <section className="mx-auto max-w-content px-4 pt-20 sm:px-6">
              <div className="text-center">
                <h2 className="inline-block rounded-lg bg-slate-200 px-5 py-1 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Executive Summary
                </h2>
              </div>
              {story.summary.map((p) => (
                <p key={p.slice(0, 24)} className="mx-auto mt-5 max-w-4xl text-center text-base leading-relaxed text-slate-700 sm:text-lg">
                  {p}
                </p>
              ))}

              <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-[#0F172A] text-white">
                      {["Metric", "Before", "After", "Change"].map((h) => (
                        <th key={h} className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {story.changes.map((r, i) => (
                      <tr key={r.metric} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                        <td className="border-t border-slate-200 px-5 py-3.5 font-semibold text-[#0F172A]">{r.metric}</td>
                        <td className="border-t border-slate-200 px-5 py-3.5 text-slate-500">{r.before}</td>
                        <td className="border-t border-slate-200 px-5 py-3.5 font-semibold text-[#0F172A]">{r.after}</td>
                        <td className="border-t border-slate-200 px-5 py-3.5">
                          <span className={`inline-block rounded-lg px-2.5 py-1 text-xs font-bold ${r.strong ? "bg-[#0F172A] text-[#F59E0B]" : "bg-amber-50 text-slate-700"}`}>
                            {r.change}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                <h3 className="font-display text-2xl font-extrabold">The Transformation</h3>
                <p className="mt-1 text-sm text-slate-500">The two numbers that moved the most.</p>
                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                  {story.spotlight.map((s, i) => {
                    const blue = i === 0;
                    return (
                      <div key={s.label} className={`rounded-2xl border p-6 ${blue ? "border-blue-200 bg-gradient-to-br from-blue-50 to-white" : "border-violet-200 bg-gradient-to-br from-violet-50 to-white"}`}>
                        <div className="text-xs font-bold uppercase tracking-[0.1em] text-slate-800">{s.label}</div>
                        <div className="mt-4 flex items-end justify-between gap-3">
                          <div>
                            <div className="text-xs text-slate-500">Before</div>
                            <div className="text-3xl font-medium text-slate-400">{s.before}</div>
                          </div>
                          <div className={`relative mb-4 h-0.5 flex-1 ${blue ? "bg-[#0B63E5]" : "bg-violet-600"}`}>
                            <span className={`absolute -right-0.5 -top-[5px] border-y-[6px] border-l-[9px] border-y-transparent ${blue ? "border-l-[#0B63E5]" : "border-l-violet-600"}`} />
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-slate-500">After</div>
                            <div className={`text-3xl font-extrabold ${blue ? "text-[#0B63E5]" : "text-violet-600"}`}>{s.after}</div>
                          </div>
                        </div>
                        <div className="mt-3 text-right text-lg font-bold text-emerald-600">{s.change}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ============ STARTING POINT ============ */}
            <section className="mx-auto max-w-content px-4 pt-20 sm:px-6">
              <SectionHeading title="The Starting Point" lead={story.startingPoint.lead} />
              <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-100 p-7 sm:p-8">
                  <h3 className="text-xl font-bold">What was holding them back</h3>
                  <ul className="mt-4 divide-y divide-black/5">
                    {story.startingPoint.limits.map((l) => (
                      <li key={l} className="flex gap-3 py-2.5 text-[15px] text-slate-800">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl bg-[#0F172A] p-7 text-slate-200 sm:p-8">
                  <h3 className="text-xl font-bold text-[#F59E0B]">What they needed</h3>
                  <ul className="mt-4 divide-y divide-white/10">
                    {story.startingPoint.needs.map((n) => (
                      <li key={n} className="flex gap-3 py-2.5 text-[15px]">
                        <Check size={16} className="mt-1 shrink-0 text-[#F59E0B]" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ============ MID CTA ============ */}
            <section className="mx-auto max-w-4xl px-4 pt-20 sm:px-6 print:hidden">
              <div className="relative overflow-hidden rounded-3xl bg-[#0F172A] px-7 py-10 text-white sm:px-12 sm:py-12">
                <svg aria-hidden="true" viewBox="0 0 200 200" className="absolute -right-10 top-1/2 h-64 w-64 -translate-y-1/2 opacity-30 sm:right-8 sm:opacity-100">
                  <defs>
                    <linearGradient id="cs-bolt" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#FEF3C7" />
                      <stop offset=".5" stopColor="#F59E0B" />
                      <stop offset="1" stopColor="#92400E" />
                    </linearGradient>
                  </defs>
                  <path d="M120 8 L40 112 H94 L74 192 L164 78 H108 Z" fill="#F59E0B" opacity=".3" style={{ filter: "blur(6px)" }} />
                  <path d="M120 8 L40 112 H94 L74 192 L164 78 H108 Z" fill="url(#cs-bolt)" stroke="#FDE68A" strokeWidth="2" />
                </svg>
                <span className="relative inline-block rounded-full border border-white/30 px-3.5 py-1 text-xs text-slate-300">{site.name}</span>
                <p className="relative mt-4 max-w-md font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                  Want results like this for <span className={AMBER}>your business?</span>
                </p>
                <div className="relative mt-6">
                  <CallButton dark />
                </div>
              </div>
            </section>

            {/* ============ STRATEGIC SHIFT ============ */}
            <section className="mx-auto max-w-content px-4 pt-20 sm:px-6">
              <div className="rounded-[28px] bg-slate-100 px-5 py-12 sm:px-10 sm:py-14">
                <SectionHeading title="The Strategic Shift" lead={story.shift.lead} />
                <div className="mt-10 rounded-3xl border border-slate-200 bg-white px-5 py-8 sm:px-8">
                  <div className="relative mx-auto w-max max-w-full rounded-xl bg-[#0F172A] px-7 py-3 text-center text-white shadow-lg">
                    <div className="font-bold">{story.shift.root.title}</div>
                    <div className="text-xs text-slate-400">{story.shift.root.sub}</div>
                    <span aria-hidden="true" className="absolute -bottom-5 left-1/2 hidden h-5 w-px bg-slate-300 md:block" />
                  </div>
                  <div className="relative mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                    <span aria-hidden="true" className="absolute -top-5 left-[12.5%] right-[12.5%] hidden h-px bg-slate-300 md:block" />
                    {story.shift.branches.map((b, i) => (
                      <div key={b.title} className="relative text-center">
                        <span aria-hidden="true" className="absolute -top-5 left-1/2 hidden h-5 w-px bg-slate-300 md:block" />
                        <div className={`rounded-xl px-3 py-3.5 text-sm font-bold text-white shadow-md ${BRANCH_COLORS[i % 4].head}`}>{b.title}</div>
                        <div className="mt-2.5 space-y-2">
                          {b.items.map((it) => (
                            <div key={it} className={`rounded-lg border px-2 py-1.5 text-xs ${BRANCH_COLORS[i % 4].chip}`}>
                              {it}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-center text-sm font-bold sm:text-base">
                    {story.shift.formula.map((f, i) => (
                      <span key={f}>
                        {i > 0 && <span className="mx-2.5 text-slate-400">+</span>}
                        {f}
                      </span>
                    ))}
                  </p>
                  <p className="mt-1 text-center text-xs text-slate-500">{story.shift.formulaNote}</p>
                </div>
              </div>
            </section>

            {/* ============ WHAT WE DID ============ */}
            <section className="mx-auto max-w-content px-4 pt-20 sm:px-6">
              <SectionHeading
                title="What We Did"
                lead="Each step solved a specific problem from the starting point, in the order the work actually happened."
              />
              <ol className={`relative mt-12 grid grid-cols-2 gap-y-8 sm:grid-cols-3 ${STEP_GRID[story.steps.length] ?? "lg:grid-cols-6"}`}>
                <span aria-hidden="true" className="absolute left-[8%] right-[8%] top-[22px] hidden h-0.5 bg-gradient-to-r from-blue-200 via-violet-200 to-emerald-200 lg:block" />
                {story.steps.map((s, i) => (
                  <li key={s.title} className="relative px-2 text-center">
                    <span className={`mx-auto grid h-11 w-11 place-items-center rounded-full text-sm font-bold text-white ring-[6px] ring-white ${STEP_COLORS[i % 6]}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="mt-3 text-sm font-bold">{s.title}</div>
                    <div className="mt-0.5 text-xs leading-snug text-slate-500">{s.short}</div>
                  </li>
                ))}
              </ol>
              <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {story.steps.map((s, i) => (
                  <div key={s.title} className="rounded-2xl bg-slate-100 p-6">
                    <span className="text-sm font-semibold text-slate-400">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-2 text-base font-bold leading-snug">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ============ PROBLEMS SOLVED ============ */}
            <section className="mx-auto max-w-content px-4 pt-20 sm:px-6">
              <SectionHeading
                title="Problems We Faced and How We Solved Them"
                lead="The specific issues behind the numbers, what we changed, and what each change produced."
              />
              <div className="mt-10 hidden grid-cols-[1.05fr_1.2fr_0.85fr] px-5 text-xs font-bold uppercase tracking-[0.08em] text-slate-400 md:grid">
                <span>Problem</span>
                <span>Solution</span>
                <span>Result</span>
              </div>
              <div className="mt-3 space-y-3.5">
                {story.problems.map((p) => (
                  <div key={p.title} className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white text-sm md:grid-cols-[1.05fr_1.2fr_0.85fr]">
                    <div className="bg-rose-50/60 p-5">
                      <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.1em] text-rose-600 md:hidden">Problem</div>
                      <div className="font-bold text-[#0F172A]">{p.title}</div>
                      <p className="mt-1 text-slate-600">{p.detail}</p>
                    </div>
                    <div className="p-5">
                      <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#0B63E5] md:hidden">Solution</div>
                      <p className="text-slate-700">{p.solution}</p>
                    </div>
                    <div className="bg-emerald-50/70 p-5">
                      <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.1em] text-emerald-700 md:hidden">Result</div>
                      <p className="font-semibold text-emerald-900">{p.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ============ ILLUSTRATION ============ */}
            <section className="mx-auto max-w-content px-4 pt-20 sm:px-6">
              <div className="rounded-[28px] bg-slate-100 px-4 py-12 sm:px-10 sm:py-14">
                <SectionHeading title={story.illustration.title} lead={story.illustration.lead} />
                <div className="mt-10">
                  <CaseStudyIllustration kind={story.illustration.kind} />
                </div>
                <p className="mt-6 text-center text-sm text-slate-600">{story.illustration.caption}</p>
                <p className="mt-1 text-center text-xs text-slate-500">
                  Illustration built with sample data. No real client names or figures are shown.
                </p>
              </div>
            </section>

            {/* ============ PERFORMANCE EVIDENCE ============ */}
            <section className="mx-auto max-w-content px-4 pt-20 sm:px-6">
              <SectionHeading title="Performance Evidence" lead={story.evidenceLead} />
              <div className="mt-10">
                <ResultsChart type={study.chartType} label={study.chartLabel} data={study.chartData} theme="light" />
              </div>
              <h3 className="mt-12 text-center font-display text-2xl font-extrabold">How to Read the Numbers</h3>
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {story.interpret.map((m) => (
                  <div key={m.label} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-base font-bold">{m.label}</span>
                      <span className="rounded-lg bg-[#0F172A] px-2.5 py-1 text-xs font-bold text-[#F59E0B]">{m.badge}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.text}</p>
                  </div>
                ))}
              </div>
              {story.quote && (
                <figure className="mx-auto mt-12 max-w-3xl rounded-3xl border-l-8 border-[#F59E0B] bg-amber-50 p-7 sm:p-9">
                  <Quote className="text-[#F59E0B]" size={28} aria-hidden="true" />
                  <blockquote className="mt-3 text-lg font-medium leading-relaxed text-[#0F172A] sm:text-xl">{story.quote.text}</blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-slate-600">{story.quote.by}</figcaption>
                </figure>
              )}
            </section>

            {/* ============ WHY IT WORKED ============ */}
            <section className="mt-20 bg-[#070B14] px-4 py-20 sm:px-6">
              <div className="mx-auto max-w-content">
                <SectionHeading dark title="Why the Strategy Worked" lead={story.why.lead} />
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {story.why.items.map((w) => (
                    <div key={w.title} className="rounded-2xl bg-white p-6">
                      <h3 className="text-lg font-bold">{w.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{w.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ============ LESSONS + OUTCOME ============ */}
            <section className="mx-auto grid max-w-content grid-cols-1 gap-5 px-4 pt-20 sm:px-6 md:grid-cols-2">
              <div className="rounded-3xl bg-slate-100 p-7 sm:p-8">
                <h2 className="font-display text-2xl font-extrabold">What This Project Teaches</h2>
                <ul className="mt-4 divide-y divide-slate-200">
                  {story.takeaways.map((t) => (
                    <li key={t} className="flex gap-3 py-3 text-[15px] text-slate-800">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#0F172A] text-[#F59E0B]">
                        <Check size={12} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col rounded-3xl bg-[#0F172A] p-7 text-slate-300 sm:p-8">
                <h2 className="font-display text-2xl font-extrabold text-[#F59E0B]">Where It Goes From Here</h2>
                <p className="mt-4 text-[15px] leading-relaxed">{story.next}</p>
                <div className="mt-6 rounded-2xl bg-[#F59E0B] p-6 text-[#0F172A] md:mt-auto">
                  <h3 className="text-lg font-bold">Final outcome</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed">{story.outcome}</p>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ============ START WITH US ============ */}
        <section className="mx-auto max-w-content px-4 pt-20 sm:px-6 print:hidden">
          <div className="rounded-[30px] bg-[#0F172A] px-6 py-14 text-center text-white sm:px-12">
            <div className="text-xs font-semibold tracking-[0.22em] text-[#F59E0B]">START WITH {site.name.toUpperCase()}</div>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-4xl">{cta.headline}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">{cta.text}</p>
            <ul className="mx-auto my-8 grid max-w-2xl grid-cols-1 gap-4 text-left sm:grid-cols-2">
              {cta.checklist.map(([t, s]) => (
                <li key={t} className="flex gap-3">
                  <Check size={18} className="mt-0.5 shrink-0 text-[#F59E0B]" />
                  <span>
                    <span className="font-semibold">{t}</span>
                    <span className="block text-sm text-slate-400">{s}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <CallButton dark />
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(`Project inquiry: ${study.title}`)}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Send an Email
              </a>
            </div>
            <p className="mt-6 text-xs text-slate-500">Free 30-minute call · No obligation · {site.email}</p>
          </div>
        </section>

        {/* ============ MORE CASE STUDIES ============ */}
        {relatedStudies.length > 0 && (
          <section className="mx-auto max-w-content px-4 pb-20 pt-20 sm:px-6 print:hidden">
            <div className="mb-8 flex items-end justify-between">
              <h2 className="font-display text-2xl font-extrabold sm:text-3xl">More Case Studies</h2>
              <Link href="/projects" className="hidden items-center gap-1 text-sm font-bold text-[#0B63E5] hover:text-[#0951bd] sm:inline-flex">
                View all projects <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {relatedStudies.map((item) => (
                <Link
                  key={item.slug}
                  href={`/case-studies/${item.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-[#0B63E5] hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold transition-colors group-hover:text-[#0B63E5]">{item.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-slate-600">{item.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#0B63E5]">
                      Read Case Study <ArrowUpRight size={14} />
                    </span>
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
