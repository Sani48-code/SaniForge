import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarClock,
  Check,
  Eye,
  Info,
  Layers,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Wrench,
  X,
} from "lucide-react";
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

/** Closing call to action, matched to the kind of work in the case study. */
const CTA_BY_CATEGORY: Record<WorkCategory, { headline: string; text: string; checklist: [string, string][] }> = {
  Automation: {
    headline: "Still copying, pasting and chasing work by hand?",
    text: "Let's map your process and automate the parts that should never need a person, while your team keeps the decisions that matter.",
    checklist: [
      ["Process mapping", "Find the steps worth automating"],
      ["n8n workflows", "Built, tested and documented"],
      ["Human checkpoints", "People approve what matters"],
      ["Live dashboards", "See what the system is doing"],
    ],
  },
  Copywriting: {
    headline: "Your best pages could already be ranking and bringing in leads.",
    text: "Let's find the pages with the most to gain and rewrite them for your clients and for Google.",
    checklist: [
      ["Keyword & intent research", "Topics your buyers search"],
      ["Client-first copy", "Written for the reader's situation"],
      ["On-page SEO & schema", "Titles, FAQs, local signals"],
      ["Clear calls to action", "One easy next step"],
    ],
  },
  "Web Development": {
    headline: "Your website should be your best salesperson.",
    text: "Let's rebuild the pages that matter around the one action you need visitors to take.",
    checklist: [
      ["Mobile-first build", "Fast on every phone"],
      ["Conversion design", "One obvious next step"],
      ["Speed optimization", "Under 2 second loads"],
      ["Tracking setup", "Know what generates leads"],
    ],
  },
};

const PILLAR_STYLES = [
  { bar: "from-[#0B63E5] to-sky-400", dot: "bg-[#0B63E5]", tint: "bg-blue-50/60" },
  { bar: "from-indigo-500 to-violet-400", dot: "bg-indigo-500", tint: "bg-indigo-50/60" },
  { bar: "from-violet-600 to-fuchsia-400", dot: "bg-violet-600", tint: "bg-violet-50/60" },
  { bar: "from-emerald-500 to-teal-400", dot: "bg-emerald-500", tint: "bg-emerald-50/60" },
];
const WHY_ICONS = [Target, Layers, ShieldCheck, Eye];

function Highlighted({ text, className = "text-[#F59E0B]" }: { text: HighlightText; className?: string }) {
  return (
    <>
      {text.pre}
      <span className={className}>{text.highlight}</span>
      {text.post}
    </>
  );
}

/** Numbered eyebrow + heading used by every story section. */
function SectionTitle({
  n,
  eyebrow,
  title,
  lead,
  dark = false,
  center = false,
}: {
  n: string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div
        className={`inline-flex items-center gap-2 rounded-full px-1 py-1 pr-3.5 text-xs font-bold uppercase tracking-[0.14em] ${
          dark ? "bg-white/10 text-slate-200" : "bg-white text-slate-600 ring-1 ring-slate-200"
        }`}
      >
        <span className="grid h-6 min-w-6 place-items-center rounded-full bg-[#0F172A] px-1.5 text-[11px] text-[#F59E0B]">{n}</span>
        {eyebrow}
      </div>
      <h2 className={`mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-[40px] ${dark ? "text-white" : "text-[#0F172A]"}`}>
        {title}
      </h2>
      {lead && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>{lead}</p>}
    </div>
  );
}

function Accent({ children }: { children: React.ReactNode }) {
  return <span className="bg-gradient-to-r from-[#0B63E5] to-indigo-500 bg-clip-text text-transparent">{children}</span>;
}

function CallButton({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href={site.bookCallLink}
      className={`inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-bold transition-transform hover:-translate-y-0.5 sm:text-base ${
        dark ? "bg-[#F59E0B] text-[#0F172A] shadow-lg shadow-amber-500/20" : "bg-[#0B63E5] text-white shadow-lg shadow-blue-500/25"
      }`}
    >
      Book a Free Call
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
      { name: "Case Studies", path: "/case-studies" },
      { name: study.title, path },
    ]),
  ];
  const stat = story?.heroStat ?? { value: study.metrics[0]?.value, label: study.metrics[0]?.label };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#F7F8FB] text-[#0F172A] selection:bg-amber-100">
      <JsonLd data={jsonLd} />

      {/* ============ HERO ============ */}
      <header className="relative overflow-hidden bg-[#070B14] text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(900px_420px_at_90%_0%,rgba(245,158,11,0.16),transparent_60%),radial-gradient(800px_480px_at_0%_100%,rgba(11,99,229,0.25),transparent_60%)]" />
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
        <div className="relative mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.25fr_1fr] lg:pb-24">
          <div>
            <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-white">
              ← All case studies
            </Link>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#F59E0B] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0F172A]">{study.category}</span>
              {study.industries.slice(0, 2).map((ind) => (
                <span key={ind} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-300">
                  {ind}
                </span>
              ))}
            </div>
            <h1 className="mt-5 font-display text-[32px] font-extrabold leading-[1.12] tracking-tight text-balance sm:text-5xl">
              {story ? <Highlighted text={story.headline} /> : study.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{story?.intro ?? study.tagline}</p>
            <dl className="mt-8 grid max-w-xl grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              {[
                ["Client", story?.client ?? study.industries[0]],
                ["Service", study.service],
                ["Timeline", study.timeline],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#F59E0B]">{k}</dt>
                  <dd className="mt-1 text-sm text-slate-200">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Result card */}
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#F59E0B]/30 via-transparent to-[#0B63E5]/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
                <Sparkles size={14} className="text-[#F59E0B]" /> The headline result
              </div>
              <div className="mt-4 bg-gradient-to-br from-amber-100 via-[#FBBF24] to-[#D97706] bg-clip-text font-display text-7xl font-extrabold leading-none text-transparent sm:text-8xl">
                {stat.value}
              </div>
              <div className="mt-3 text-base font-semibold text-white">{stat.label}</div>
              <div className="mt-7 space-y-2.5 border-t border-white/10 pt-6">
                {study.metrics.slice(1).map((m) => (
                  <div key={m.label} className="flex items-center justify-between gap-4 rounded-xl bg-white/5 px-4 py-3">
                    <span className="text-sm text-slate-300">{m.label}</span>
                    <span className="font-display text-lg font-extrabold text-white">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {story ? (
          <>
            {/* ============ SNAPSHOT ============ */}
            <section className="relative z-10 mx-auto -mt-10 max-w-content px-4 sm:px-6">
              <div className="grid grid-cols-1 gap-3 rounded-3xl bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.10)] ring-1 ring-slate-200/70 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: Building2, k: "Who", v: story.client },
                  { icon: AlertTriangle, k: "The problem", v: story.glance.challenge },
                  { icon: Wrench, k: "What we built", v: story.glance.solution },
                  { icon: TrendingUp, k: "What changed", v: story.glance.result },
                ].map(({ icon: Icon, k, v }) => (
                  <div key={k} className="rounded-2xl bg-slate-50 p-5">
                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      <Icon size={14} className="text-[#0B63E5]" /> {k}
                    </div>
                    <p className="mt-2 text-sm leading-snug text-slate-800">{v}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {story.kpis.map((k, i) => (
                  <div key={k.label} className="group relative overflow-hidden rounded-2xl bg-white p-5 ring-1 ring-slate-200 transition-shadow hover:shadow-lg sm:p-6">
                    <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${PILLAR_STYLES[i % 4].bar}`} />
                    <div className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{k.value}</div>
                    <div className="mt-2 text-sm font-semibold text-slate-800">{k.label}</div>
                    <div className="text-xs text-slate-500">{k.note}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-col items-start gap-4 rounded-2xl border border-dashed border-slate-300 bg-white/70 p-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex gap-2.5">
                  <Info size={16} className="mt-0.5 shrink-0 text-[#0B63E5]" />
                  <span>
                    <strong className="text-slate-800">The fine print, upfront.</strong> Before figures are from before the project, after figures cover the period stated. The client stays confidential, and interface screens use sample data.
                  </span>
                </p>
                <div className="flex shrink-0 items-center gap-2 print:hidden">
                  <ShareButton title={study.title} />
                  <div className="w-52">
                    <PdfDownloadButton title={study.title} />
                  </div>
                </div>
              </div>
            </section>

            {/* ============ 01 STORY IN 60 SECONDS ============ */}
            <section className="mx-auto max-w-content px-4 pt-24 sm:px-6">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
                <div>
                  <SectionTitle n="01" eyebrow="The overview" title={<>The Story in <Accent>60 Seconds</Accent></>} />
                  {story.summary.map((p) => (
                    <p key={p.slice(0, 24)} className="mt-5 text-base leading-relaxed text-slate-700 sm:text-[17px]">
                      {p}
                    </p>
                  ))}
                </div>
                <div className="space-y-4 lg:pt-14">
                  {story.spotlight.map((s, i) => (
                    <div key={s.label} className="rounded-3xl bg-white p-6 ring-1 ring-slate-200">
                      <div className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{s.label}</div>
                      <div className="mt-4 flex items-center gap-4">
                        <div className="flex-1 rounded-2xl bg-rose-50 p-4 text-center">
                          <div className="text-[11px] font-semibold uppercase tracking-wider text-rose-600">Before</div>
                          <div className="mt-1 font-display text-2xl font-bold text-slate-500 line-through decoration-rose-300 decoration-2">{s.before}</div>
                        </div>
                        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-white ${i === 0 ? "bg-[#0B63E5]" : "bg-indigo-500"}`}>
                          <ArrowRight size={18} />
                        </span>
                        <div className="flex-1 rounded-2xl bg-emerald-50 p-4 text-center">
                          <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700">After</div>
                          <div className="mt-1 font-display text-2xl font-extrabold text-emerald-700">{s.after}</div>
                        </div>
                      </div>
                      <div className="mt-3 text-center text-sm font-bold text-slate-700">{s.change}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scoreboard */}
              <div className="mt-12 overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200">
                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                  <h3 className="font-display text-xl font-extrabold">The Scoreboard</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Before vs after</span>
                </div>
                <div className="divide-y divide-slate-100">
                  {story.changes.map((r) => (
                    <div key={r.metric} className="grid grid-cols-2 items-center gap-x-4 gap-y-2 px-6 py-4 text-sm md:grid-cols-[1.4fr_1fr_1fr_auto]">
                      <div className="col-span-2 font-semibold text-[#0F172A] md:col-span-1">{r.metric}</div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-rose-400" />
                        {r.before}
                      </div>
                      <div className="flex items-center gap-2 font-semibold text-[#0F172A]">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                        {r.after}
                      </div>
                      <span
                        className={`col-span-2 justify-self-start rounded-full px-3 py-1 text-xs font-bold md:col-span-1 md:justify-self-end ${
                          r.strong ? "bg-[#0F172A] text-[#F59E0B]" : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {r.change}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ============ 02 WHERE THINGS WERE BREAKING ============ */}
            <section className="mx-auto max-w-content px-4 pt-24 sm:px-6">
              <SectionTitle n="02" eyebrow="The starting point" title={<>Where Things Were <Accent>Breaking</Accent></>} lead={story.startingPoint.lead} />
              <div className="relative mt-10 grid grid-cols-1 overflow-hidden rounded-3xl ring-1 ring-slate-200 md:grid-cols-2">
                <div className="bg-white p-7 sm:p-9">
                  <h3 className="flex items-center gap-2 text-lg font-bold">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-rose-100 text-rose-600"><X size={15} /></span>
                    The friction
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {story.startingPoint.limits.map((l) => (
                      <li key={l} className="flex gap-3 text-[15px] leading-snug text-slate-700">
                        <X size={16} className="mt-0.5 shrink-0 text-rose-400" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#0F172A] p-7 text-slate-200 sm:p-9">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-[#F59E0B] text-[#0F172A]"><Check size={15} /></span>
                    The wishlist
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {story.startingPoint.needs.map((n) => (
                      <li key={n} className="flex gap-3 text-[15px] leading-snug">
                        <Check size={16} className="mt-0.5 shrink-0 text-[#F59E0B]" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
                <span aria-hidden="true" className="absolute left-1/2 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#F59E0B] text-[#0F172A] shadow-xl ring-8 ring-[#F7F8FB] md:grid">
                  <ArrowRight size={20} />
                </span>
              </div>
            </section>

            {/* ============ MID CTA ============ */}
            <section className="mx-auto max-w-content px-4 pt-20 sm:px-6 print:hidden">
              <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B63E5] to-indigo-600 px-7 py-9 text-white sm:flex-row sm:items-center sm:px-10">
                <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
                <div aria-hidden="true" className="absolute -bottom-20 right-40 h-40 w-40 rounded-full bg-[#F59E0B]/30 blur-2xl" />
                <div className="relative">
                  <p className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">Seeing your own business in this story?</p>
                  <p className="mt-1.5 text-blue-100">A free 30-minute call is enough to find where you stand.</p>
                </div>
                <div className="relative shrink-0">
                  <CallButton dark />
                </div>
              </div>
            </section>

            {/* ============ 03 THE BIG IDEA ============ */}
            <section className="mx-auto max-w-content px-4 pt-24 sm:px-6">
              <SectionTitle n="03" eyebrow="The strategy" title={<>The <Accent>Big Idea</Accent></>} />
              <blockquote className="mt-6 max-w-4xl border-l-4 border-[#F59E0B] pl-5 font-display text-xl font-semibold leading-relaxed text-slate-800 sm:text-2xl">
                {story.shift.lead}
              </blockquote>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {story.shift.branches.map((b, i) => (
                  <div key={b.title} className={`relative overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-slate-200`}>
                    <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${PILLAR_STYLES[i % 4].bar}`} />
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Pillar {i + 1}</div>
                    <h3 className="mt-1 text-xl font-extrabold">{b.title}</h3>
                    <ul className={`mt-4 space-y-2 rounded-2xl p-4 ${PILLAR_STYLES[i % 4].tint}`}>
                      {b.items.map((it) => (
                        <li key={it} className="flex items-center gap-2.5 text-sm text-slate-700">
                          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${PILLAR_STYLES[i % 4].dot}`} />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-2 rounded-2xl bg-[#0F172A] px-5 py-4 text-sm text-white">
                <span className="mr-1 text-xs font-bold uppercase tracking-[0.14em] text-[#F59E0B]">The formula</span>
                {story.shift.formula.map((f, i) => (
                  <span key={f} className="flex items-center gap-2">
                    {i > 0 && <span className="text-slate-500">+</span>}
                    <span className="rounded-full bg-white/10 px-3 py-1 font-semibold">{f}</span>
                  </span>
                ))}
                <span className="text-slate-500">=</span>
                <span className="text-slate-300">{story.shift.formulaNote}</span>
              </div>
            </section>

            {/* ============ 04 STEP BY STEP ============ */}
            <section className="mx-auto max-w-content px-4 pt-24 sm:px-6">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <SectionTitle
                    n="04"
                    eyebrow="The build"
                    title={<>How We Built It, <Accent>Step by Step</Accent></>}
                    lead="Each step answered a specific problem from the starting point, in the order the work actually happened."
                  />
                </div>
                <ol className="relative space-y-5 before:absolute before:bottom-6 before:left-[22px] before:top-6 before:w-0.5 before:bg-gradient-to-b before:from-[#0B63E5] before:via-indigo-400 before:to-emerald-400">
                  {story.steps.map((s, i) => (
                    <li key={s.title} className="relative flex gap-5">
                      <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#0F172A] text-sm font-bold text-[#F59E0B] ring-4 ring-[#F7F8FB]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 rounded-2xl bg-white p-5 ring-1 ring-slate-200 sm:p-6">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-bold">{s.title}</h3>
                          <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-[#0B63E5]">{s.short}</span>
                        </div>
                        <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{s.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* ============ 05 ROADBLOCKS ============ */}
            <section className="mx-auto max-w-content px-4 pt-24 sm:px-6">
              <SectionTitle
                n="05"
                eyebrow="Problems solved"
                title={<>Roadblocks We <Accent>Cleared</Accent></>}
                lead="The specific issues behind the numbers, what we changed, and what each change paid back."
              />
              <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                {story.problems.map((p, i) => (
                  <div key={p.title} className="flex flex-col rounded-3xl bg-white p-6 ring-1 ring-slate-200 transition-shadow hover:shadow-lg sm:p-7">
                    <div className="flex items-start gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-rose-50 text-sm font-bold text-rose-600">{i + 1}</span>
                      <div>
                        <h3 className="text-lg font-bold leading-snug">{p.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-500">{p.detail}</p>
                      </div>
                    </div>
                    <div className="mt-5 space-y-2.5 border-t border-dashed border-slate-200 pt-5 text-sm">
                      <div className="flex gap-3">
                        <span className="w-16 shrink-0 text-[11px] font-bold uppercase tracking-wider text-[#0B63E5]">Our fix</span>
                        <span className="text-slate-700">{p.solution}</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="w-16 shrink-0 text-[11px] font-bold uppercase tracking-wider text-emerald-600">Payoff</span>
                        <span className="font-semibold text-emerald-800">{p.result}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ============ 06 A LOOK INSIDE ============ */}
            <section className="mx-auto max-w-content px-4 pt-24 sm:px-6">
              <div className="relative overflow-hidden rounded-[32px] bg-[#0F172A] px-4 py-12 sm:px-10 sm:py-14">
                <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(600px_300px_at_100%_0%,rgba(11,99,229,0.35),transparent_70%),radial-gradient(500px_300px_at_0%_100%,rgba(245,158,11,0.18),transparent_70%)]" />
                <div className="relative">
                  <SectionTitle n="06" eyebrow="A look inside" title={story.illustration.title} lead={story.illustration.lead} dark center />
                  <div className="mt-10 rounded-3xl bg-slate-100 p-4 sm:p-8">
                    <CaseStudyIllustration kind={story.illustration.kind} />
                  </div>
                  <p className="mt-5 text-center text-sm text-slate-300">{story.illustration.caption}</p>
                  <p className="mt-1 text-center text-xs text-slate-500">Built with sample data. No real client names or figures are shown.</p>
                </div>
              </div>
            </section>

            {/* ============ 07 PROOF ============ */}
            <section className="mx-auto max-w-content px-4 pt-24 sm:px-6">
              <SectionTitle n="07" eyebrow="The evidence" title={<>Proof in the <Accent>Numbers</Accent></>} lead={story.evidenceLead} />
              <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
                <ResultsChart type={study.chartType} label={study.chartLabel} data={study.chartData} theme="light" />
                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">What each number really means</h3>
                  {story.interpret.map((m) => (
                    <div key={m.label} className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-bold">{m.label}</span>
                        <span className="rounded-full bg-[#0F172A] px-2.5 py-0.5 text-xs font-bold text-[#F59E0B]">{m.badge}</span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{m.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              {story.quote && (
                <figure className="relative mt-10 overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-slate-200 sm:p-10">
                  <Quote aria-hidden="true" className="absolute -right-4 -top-4 h-32 w-32 text-amber-100" />
                  <blockquote className="relative max-w-3xl font-display text-xl font-semibold leading-relaxed text-[#0F172A] sm:text-2xl">
                    &ldquo;{story.quote.text}&rdquo;
                  </blockquote>
                  <figcaption className="relative mt-5 flex items-center gap-3 text-sm font-semibold text-slate-600">
                    <span className="h-0.5 w-8 bg-[#F59E0B]" /> {story.quote.by}
                  </figcaption>
                </figure>
              )}
            </section>

            {/* ============ 08 WHY IT WORKED ============ */}
            <section className="mt-24 bg-[#070B14] px-4 py-20 sm:px-6">
              <div className="mx-auto max-w-content">
                <SectionTitle
                  n="08"
                  eyebrow="The why"
                  title={<>Why It Worked <span className="text-[#F59E0B]">(and Will Work Again)</span></>}
                  lead={story.why.lead}
                  dark
                />
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {story.why.items.map((w, i) => {
                    const Icon = WHY_ICONS[i % WHY_ICONS.length];
                    return (
                      <div key={w.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#F59E0B]/50">
                        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#F59E0B]/15 text-[#F59E0B]">
                          <Icon size={20} />
                        </span>
                        <h3 className="mt-4 text-lg font-bold text-white">{w.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{w.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ============ 09 LESSONS + NEXT ============ */}
            <section className="mx-auto grid max-w-content grid-cols-1 gap-5 px-4 pt-24 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <SectionTitle n="09" eyebrow="Takeaways" title={<>Lessons Worth <Accent>Stealing</Accent></>} />
                <ol className="mt-8 space-y-3">
                  {story.takeaways.map((t, i) => (
                    <li key={t} className="flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                      <span className="font-display text-2xl font-extrabold text-slate-300">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-[15px] font-medium text-slate-800">{t}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="flex flex-col gap-4 lg:pt-[88px]">
                <div className="rounded-3xl bg-white p-7 ring-1 ring-slate-200">
                  <h3 className="flex items-center gap-2 text-lg font-bold">
                    <CalendarClock size={18} className="text-[#0B63E5]" /> What Comes Next
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{story.next}</p>
                </div>
                <div className="flex-1 rounded-3xl bg-gradient-to-br from-[#F59E0B] to-amber-400 p-7 text-[#0F172A]">
                  <h3 className="text-xs font-bold uppercase tracking-[0.16em]">The bottom line</h3>
                  <p className="mt-3 font-display text-xl font-bold leading-snug">{story.outcome}</p>
                </div>
              </div>
            </section>
          </>
        ) : (
          <article className="mx-auto max-w-3xl px-4 pt-14">
            <MDXRemote
              source={study.content}
              components={fallbackMdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
            />
          </article>
        )}

        {/* ============ YOUR TURN ============ */}
        <section className="mx-auto max-w-content px-4 pt-24 sm:px-6 print:hidden">
          <div className="relative overflow-hidden rounded-[32px] bg-[#0F172A] px-6 py-14 text-white sm:px-12">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(500px_260px_at_100%_100%,rgba(245,158,11,0.25),transparent_70%),radial-gradient(500px_260px_at_0%_0%,rgba(11,99,229,0.3),transparent_70%)]" />
            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#F59E0B]">Your turn</div>
                <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">{cta.headline}</h2>
                <p className="mt-4 max-w-xl text-slate-300">{cta.text}</p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <CallButton dark />
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(`Project inquiry: ${study.title}`)}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
                  >
                    Send an Email
                  </a>
                </div>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {cta.checklist.map(([t, s]) => (
                  <li key={t} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Check size={18} className="text-[#F59E0B]" />
                    <div className="mt-2 font-semibold">{t}</div>
                    <div className="text-sm text-slate-400">{s}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ============ MORE CASE STUDIES ============ */}
        {relatedStudies.length > 0 && (
          <section className="mx-auto max-w-content px-4 pb-24 pt-24 sm:px-6 print:hidden">
            <div className="mb-8 flex items-end justify-between">
              <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Keep Reading</h2>
              <Link href="/case-studies" className="hidden items-center gap-1 text-sm font-bold text-[#0B63E5] hover:text-[#0951bd] sm:inline-flex">
                View all case studies <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {relatedStudies.map((item) => (
                <Link
                  key={item.slug}
                  href={`/case-studies/${item.slug}`}
                  className="group block overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 transition-all duration-300 hover:shadow-xl hover:ring-[#0B63E5]"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
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
                      Read the case study <ArrowUpRight size={14} />
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
