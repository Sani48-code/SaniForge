import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Check,
  Clock,
  Code2,
  FileText,
  MousePointerClick,
  PenLine,
  Timer,
  Trophy,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { getAllCaseStudies } from "@/lib/mdx";
import { getCaseStudyStory } from "@/lib/data/case-study-stories";
import { industries } from "@/lib/data/who-we-help";
import { site } from "@/lib/data/site";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import AnimatedIcon, { type IconTone } from "@/components/ui/AnimatedIcon";
import Reveal from "@/components/projects/Reveal";
import { industryIcons } from "@/components/who-we-help/icons";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies: Websites, SEO Content & Automation Results",
  description:
    "Real SaniForge projects with real numbers: law firm SEO pages, AI content automation, lead pipelines, website redesigns and SaaS landing pages.",
  path: "/case-studies",
});

const GRADIENT_TEXT = "bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#FBBF24] bg-clip-text text-transparent";

const CATEGORY: Record<string, { icon: LucideIcon; tone: IconTone; text: string }> = {
  Automation: { icon: Workflow, tone: "emerald", text: "text-emerald-600" },
  Copywriting: { icon: PenLine, tone: "amber", text: "text-amber-600" },
  "Web Development": { icon: Code2, tone: "blue", text: "text-blue-600" },
};

const METRIC_ICONS = [BarChart3, Clock, Trophy];

const heroStats: { value: string; label: string; icon: LucideIcon; tone: IconTone }[] = [
  { value: "89", label: "Articles published in month one", icon: FileText, tone: "amber" },
  { value: "#1–3", label: "Google rankings for a law firm", icon: Trophy, tone: "violet" },
  { value: "3x", label: "Lead forms in 90 days", icon: MousePointerClick, tone: "blue" },
  { value: "<2 min", label: "Lead response time", icon: Timer, tone: "emerald" },
];

/** A case study's own image, if one has been added to public/images/case-studies/<slug>.(jpg|png|webp). */
function caseStudyImage(slug: string): string | null {
  for (const ext of ["jpg", "png", "webp"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", "images", "case-studies", `${slug}.${ext}`))) {
      return `/images/case-studies/${slug}.${ext}`;
    }
  }
  return null;
}

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies();
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "SaniForge case studies",
      url: `${site.url}/case-studies`,
      hasPart: studies.map((s) => ({
        "@type": "Article",
        headline: `${s.title}: ${s.tagline}`,
        url: `${site.url}/case-studies/${s.slug}`,
      })),
    },
    breadcrumbSchema([{ name: "Case Studies", path: "/case-studies" }]),
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-[#F5F7FC] font-sans text-[#0B1A3D]">
      <JsonLd data={jsonLd} />

      {/* ============ HERO ============ */}
      <header className="relative overflow-hidden bg-[#070B1A] text-white">
        <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-blue-600/25 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-32 top-0 h-[26rem] w-[26rem] rounded-full bg-amber-500/15 blur-3xl" />
        <div aria-hidden className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
        <div className="container-px relative mx-auto grid max-w-[1200px] items-center gap-12 pb-20 pt-16 sm:pt-20 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1 pl-1 pr-3 text-xs text-white/75">
              <span className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-2.5 py-0.5 font-semibold text-white">Case studies</span>
              Proof, not promises
            </p>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Real Projects.<br /> <span className={GRADIENT_TEXT}>Real Numbers.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              How we built websites, SEO content and automation systems for law firms, local businesses and SaaS teams, and exactly what
              changed after.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#all-case-studies"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-6 py-3.5 text-sm font-semibold text-[#0B1A3D] shadow-[0_10px_30px_-10px_rgba(251,191,36,0.7)] transition-transform hover:-translate-y-0.5"
              >
                Browse all {studies.length} case studies <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <Link href="/who-we-help" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold hover:bg-white/10">
                Who we help
              </Link>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-amber-400/25 via-transparent to-blue-600/30 blur-2xl" />
            <ul className="relative grid grid-cols-2 gap-3 rounded-[28px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:p-5">
              {heroStats.map((s, i) => (
                <li key={s.label} className="rounded-2xl border border-white/5 bg-white/5 p-5">
                  <AnimatedIcon icon={s.icon} tone={s.tone} size="sm" delay={i * 0.35} />
                  <p className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-xs leading-snug text-white/65">{s.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* ============ BROWSE BY INDUSTRY ============ */}
      <div className="border-b border-slate-200 bg-white">
        <div className="container-px mx-auto flex max-w-[1200px] flex-wrap items-center gap-3 py-5">
          <span className="mr-1 text-sm font-semibold text-slate-500">Browse by industry:</span>
          {industries.map((ind) => {
            const Icon = industryIcons[ind.icon];
            return (
              <Link
                key={ind.slug}
                href={`/who-we-help/${ind.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3.5 py-1.5 text-sm font-semibold text-slate-700 transition-colors hover:border-amber-400 hover:bg-amber-50"
              >
                <Icon size={15} className="text-amber-500" /> {ind.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ============ CASE STUDY CARDS ============ */}
      <main id="all-case-studies" className="container-px mx-auto max-w-[1200px] scroll-mt-24 pb-20 pt-16 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-violet-600">Pick a story</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">See What Changed, In Numbers</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Each one walks through the starting point, what we changed, the problems we solved and the measured result.
          </p>
        </div>

        <ol className="mt-14 space-y-10">
          {studies.map((study, i) => {
            const story = getCaseStudyStory(study.slug);
            const stat = story?.heroStat ?? { value: study.metrics[0]?.value, label: study.metrics[0]?.label };
            const cat = CATEGORY[study.category] ?? CATEGORY.Automation;
            const img = caseStudyImage(study.slug);
            const flip = i % 2 === 1;
            return (
              <Reveal as="li" key={study.slug}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group relative grid grid-cols-1 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/70 hover:shadow-[0_30px_80px_-30px_rgba(245,158,11,0.45)] lg:grid-cols-2"
                >
                  {/* Visual panel */}
                  <div className={`relative min-h-[300px] overflow-hidden bg-[#070B1A] text-white lg:min-h-[440px] ${flip ? "lg:order-2" : ""}`}>
                    {img ? (
                      <>
                        <Image
                          src={img}
                          alt={`${study.title}: ${study.tagline}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 600px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#070B1A]/90 via-[#070B1A]/20 to-transparent" />
                      </>
                    ) : (
                      <>
                        <div
                          aria-hidden
                          className={`absolute inset-0 ${
                            flip
                              ? "bg-[radial-gradient(380px_260px_at_10%_100%,rgba(245,158,11,0.45),transparent_70%),radial-gradient(300px_200px_at_100%_0%,rgba(59,130,246,0.3),transparent_70%)]"
                              : "bg-[radial-gradient(380px_260px_at_100%_20%,rgba(245,158,11,0.45),transparent_70%),radial-gradient(300px_200px_at_0%_100%,rgba(139,92,246,0.3),transparent_70%)]"
                          }`}
                        />
                        <div aria-hidden className="anim-spin-slow absolute -right-16 -top-16 h-56 w-56 rounded-full border border-dashed border-white/10" />
                        <div aria-hidden className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />
                      </>
                    )}
                    <span aria-hidden className="anim-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                    <div className="relative flex h-full flex-col p-7 sm:p-10">
                      <div className="flex items-center gap-3">
                        <AnimatedIcon icon={cat.icon} tone={cat.tone} size="sm" delay={i * 0.3} />
                        <p className="text-sm font-semibold text-white/85">
                          {study.category}
                          <span className="font-normal text-white/55"> · {study.industries[0]}</span>
                        </p>
                      </div>
                      <div className={`mt-auto ${img ? "rounded-2xl border border-white/15 bg-[#070B1A]/60 p-5 backdrop-blur-md" : "pt-12"}`}>
                        <p className="bg-gradient-to-b from-amber-100 via-[#FBBF24] to-[#D97706] bg-clip-text font-display text-6xl font-extrabold leading-none text-transparent sm:text-7xl">
                          {stat.value}
                        </p>
                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">{stat.label}</p>
                        <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/60">
                          <Clock size={14} /> {study.timeline}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Story panel */}
                  <div className="flex flex-col p-7 sm:p-10">
                    <p className={`text-xs font-bold uppercase tracking-[0.18em] ${cat.text}`}>Case study 0{i + 1}</p>
                    <h3 className="mt-3 font-display text-2xl font-extrabold leading-snug transition-colors group-hover:text-blue-600 sm:text-3xl">
                      {study.title}
                    </h3>
                    <p className="mt-1.5 text-base font-medium text-slate-500">{study.tagline}</p>
                    {story && <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{story.intro}</p>}
                    <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      {study.metrics.map((m, mi) => {
                        const MIcon = METRIC_ICONS[mi % METRIC_ICONS.length];
                        return (
                          <li key={m.label} className="rounded-2xl border border-slate-100 bg-[#F5F7FC] p-4 transition-colors group-hover:border-amber-200 group-hover:bg-amber-50/60">
                            <MIcon size={16} className="text-amber-500" />
                            <p className="mt-2 font-display text-xl font-extrabold">{m.value}</p>
                            <p className="mt-1 text-xs leading-snug text-slate-600">{m.label}</p>
                          </li>
                        );
                      })}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-3 self-start rounded-full bg-[#0B1A3D] py-2 pl-5 pr-2 text-sm font-bold text-white sm:mt-8">
                      Read the case study
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 text-[#0B1A3D] transition-transform group-hover:translate-x-1">
                        <ArrowRight size={15} />
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ol>

        {/* ============ CTA ============ */}
        <section className="relative mt-24 overflow-hidden rounded-[2rem] bg-[#070B1A] px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <div aria-hidden className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-blue-600/35 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-10 h-80 w-80 rounded-full bg-violet-600/35 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="relative">
            <span className="inline-flex">
              <AnimatedIcon icon={Trophy} tone="amber" size="lg" />
            </span>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Your Business Could Be <span className={GRADIENT_TEXT}>the Next Case Study.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/70">
              Book a free 30-minute call. We will look at your site, content or workflow and show you where the biggest gains are.
            </p>
            <ul className="mx-auto my-10 grid max-w-2xl grid-cols-1 gap-4 text-left sm:grid-cols-2">
              {[
                ["Websites that convert", "Fast, mobile-first, built for leads"],
                ["SEO content that ranks", "Written for buyers and for Google"],
                ["n8n automation", "Remove manual busywork"],
                ["Clear numbers", "Tracking from day one"],
              ].map(([t, s]) => (
                <li key={t} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                    <Check size={14} />
                  </span>
                  <span>
                    <span className="font-semibold">{t}</span>
                    <span className="block text-sm text-white/55">{s}</span>
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href={site.bookCallLink}
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 py-2 pl-6 pr-2 font-bold text-[#0B1A3D] shadow-[0_10px_40px_-8px_rgba(251,191,36,0.7)] transition-transform hover:-translate-y-0.5"
            >
              Book a Free Call
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0B1A3D] text-amber-300 transition-transform group-hover:translate-x-0.5">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
