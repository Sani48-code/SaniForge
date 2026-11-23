import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  EyeOff,
  FileText,
  LineChart,
  MousePointerClick,
  Ruler,
  Timer,
  Trophy,
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
import CaseStudyGrid, { type CaseStudyCardData } from "@/components/case-studies/CaseStudyGrid";
import { industryIcons } from "@/components/who-we-help/icons";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies: Websites, SEO Content & Automation Results",
  description:
    "Real SaniForge projects with real numbers: law firm SEO pages, AI content automation, lead pipelines, website redesigns and SaaS landing pages.",
  path: "/case-studies",
});

const GRADIENT_TEXT = "bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#FBBF24] bg-clip-text text-transparent";

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

const measure: { icon: LucideIcon; tone: IconTone; title: string; text: string }[] = [
  { icon: Ruler, tone: "blue", title: "Baseline first", text: "Every before figure comes from before the project started." },
  { icon: LineChart, tone: "violet", title: "A stated window", text: "Every after figure covers the period named in the study, such as 90 days." },
  { icon: EyeOff, tone: "emerald", title: "Clients stay private", text: "Client names stay confidential and interface screens use sample data." },
];

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies();
  const cards: CaseStudyCardData[] = studies.map((study) => {
    const story = getCaseStudyStory(study.slug);
    return {
      slug: study.slug,
      title: study.title,
      tagline: study.tagline,
      category: study.category,
      industry: study.industries[0] ?? "",
      timeline: study.timeline,
      image: caseStudyImage(study.slug),
      intro: story?.intro ?? null,
      stat: story?.heroStat ?? { value: study.metrics[0]?.value ?? "", label: study.metrics[0]?.label ?? "" },
      metrics: study.metrics.slice(0, 3).map((m) => ({ value: m.value, label: m.label })),
    };
  });
  const collage = cards.filter((c) => c.image).slice(0, 3);
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
      <header className="relative overflow-hidden bg-[#060A18] text-white">
        <div aria-hidden className="pointer-events-none absolute -left-40 -top-48 h-[34rem] w-[34rem] rounded-full bg-blue-600/25 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute right-0 top-10 h-[28rem] w-[28rem] rounded-full bg-violet-600/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/3 h-[24rem] w-[40rem] rounded-full bg-amber-500/15 blur-3xl" />
        <div aria-hidden className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,#000_35%,transparent_75%)]" />

        <div className="container-px relative mx-auto grid max-w-[1240px] items-center gap-14 pb-24 pt-16 sm:pt-24 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1 pl-1 pr-3 text-xs text-white/75 backdrop-blur">
              <span className="rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-amber-400 px-2.5 py-0.5 font-semibold text-white">{studies.length} case studies</span>
              Proof, not promises
            </p>
            <h1 className="mt-7 font-display text-[44px] font-extrabold leading-[1.02] tracking-tight sm:text-7xl">
              Work That <span className={GRADIENT_TEXT}>Moved the Numbers.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Websites, SEO content and automation systems we built for law firms, local businesses and SaaS teams, with the before and after
              for each one.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#all-case-studies"
                className="group inline-flex min-h-[52px] items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-7 text-sm font-bold text-[#0B1A3D] shadow-[0_12px_32px_-10px_rgba(251,191,36,0.75)] transition-transform hover:-translate-y-0.5"
              >
                Explore the work <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <Link href={site.bookCallLink} className="inline-flex min-h-[52px] items-center rounded-full border border-white/20 bg-white/5 px-7 text-sm font-semibold hover:bg-white/10">
                Book a free call
              </Link>
            </div>
            <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {heroStats.map((s, i) => (
                <div key={s.label} className="flex flex-col">
                  <AnimatedIcon icon={s.icon} tone={s.tone} size="sm" delay={i * 0.35} />
                  <dt className="order-3 mt-1 text-[11px] leading-snug text-white/55">{s.label}</dt>
                  <dd className="order-2 mt-3 font-display text-2xl font-extrabold sm:text-3xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* collage */}
          <div className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[520px]" aria-hidden>
            {collage.map((c, i) => {
              const pos = [
                "left-0 top-6 w-[62%] -rotate-6",
                "right-0 top-0 w-[58%] rotate-3",
                "left-[18%] bottom-0 w-[66%] -rotate-1",
              ][i];
              return (
                <div key={c.slug} className={`anim-float absolute ${pos}`} style={{ animationDelay: `${i * 0.6}s`, animationDuration: "6s" }}>
                  <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-1.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                      <Image src={c.image as string} alt="" fill sizes="340px" className="object-cover" priority={i === 0} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <p className="absolute bottom-3 left-4 font-display text-3xl font-extrabold text-white">{c.stat.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </header>

      {/* ============ BROWSE BY INDUSTRY ============ */}
      <div className="border-b border-slate-200 bg-white">
        <div className="container-px mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-3 py-5">
          <span className="mr-1 text-sm font-semibold text-slate-500">Browse by industry:</span>
          {industries.map((ind) => {
            const Icon = industryIcons[ind.icon];
            return (
              <Link
                key={ind.slug}
                href={`/who-we-help/${ind.slug}`}
                className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition-colors hover:border-amber-400 hover:bg-amber-50"
              >
                <Icon size={15} className="text-amber-500" /> {ind.name}
              </Link>
            );
          })}
        </div>
      </div>

      <main id="all-case-studies" className="container-px mx-auto max-w-[1240px] scroll-mt-24 pb-24 pt-16 sm:pt-20">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">Pick a Story. See What Changed.</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Each one walks through the starting point, what we built, the problems we solved and the measured result.
          </p>
        </div>

        <CaseStudyGrid studies={cards} />

        {/* ============ HOW WE MEASURE ============ */}
        <section className="mt-24 grid gap-10 rounded-[32px] border border-slate-200 bg-white p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">Numbers You Can Trust</h2>
            <p className="mt-4 text-slate-600">Every case study follows the same three rules, so the results mean what they say.</p>
          </div>
          <ul className="grid gap-5 sm:grid-cols-3">
            {measure.map((m, i) => (
              <li key={m.title} className="rounded-2xl bg-[#F5F7FC] p-6">
                <AnimatedIcon icon={m.icon} tone={m.tone} size="md" delay={i * 0.4} />
                <p className="mt-5 font-display text-lg font-extrabold">{m.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ============ CTA ============ */}
        <section className="relative mt-10 overflow-hidden rounded-[32px] bg-[#060A18] text-white">
          <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-blue-600/35 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-amber-500/25 blur-3xl" />
          <div className="relative grid items-center gap-10 p-8 sm:p-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <AnimatedIcon icon={Trophy} tone="amber" size="lg" />
              <h2 className="mt-7 font-display text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                Your Business Could Be <span className={GRADIENT_TEXT}>the Next Case Study.</span>
              </h2>
              <p className="mt-5 max-w-xl text-white/70">
                Book a free 30-minute call. We will look at your site, content or workflow and show you where the biggest gains are.
              </p>
              <Link
                href={site.bookCallLink}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 py-2 pl-6 pr-2 font-bold text-[#0B1A3D] shadow-[0_10px_40px_-8px_rgba(251,191,36,0.7)] transition-transform hover:-translate-y-0.5"
              >
                Book a Free Call
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0B1A3D] text-amber-300 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>
            <ul className="grid gap-3">
              {[
                ["Websites that convert", "Fast, mobile-first, built for leads"],
                ["SEO content that ranks", "Written for buyers and for Google"],
                ["n8n automation", "Remove manual busywork"],
                ["Clear numbers", "Tracking from day one"],
              ].map(([t, sub]) => (
                <li key={t} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                    <Check size={15} />
                  </span>
                  <span>
                    <span className="font-semibold">{t}</span>
                    <span className="block text-sm text-white/55">{sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
