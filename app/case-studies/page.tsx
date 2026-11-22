import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { getAllCaseStudies } from "@/lib/mdx";
import { getCaseStudyStory } from "@/lib/data/case-study-stories";
import { site } from "@/lib/data/site";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies: Websites, SEO Content & Automation Results",
  description:
    "Real SaniForge projects with real numbers: law firm SEO pages, AI content automation, lead pipelines, website redesigns and SaaS landing pages.",
  path: "/case-studies",
});

const CATEGORY_CHIP: Record<string, string> = {
  Automation: "border-blue-300/60 text-blue-200",
  Copywriting: "border-amber-300/60 text-amber-200",
  "Web Development": "border-emerald-300/60 text-emerald-200",
};

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
    <div className="min-h-screen overflow-x-clip bg-white bg-[radial-gradient(#E4E4E4_1.2px,transparent_1.2px)] [background-size:22px_22px] text-[#0F172A]">
      <JsonLd data={jsonLd} />

      {/* ============ HERO ============ */}
      <header className="relative overflow-hidden rounded-b-[40px] bg-[#070B14] bg-[radial-gradient(1100px_480px_at_85%_-10%,rgba(245,158,11,0.13),transparent_60%),radial-gradient(700px_400px_at_0%_0%,rgba(11,99,229,0.18),transparent_60%)] px-4 pb-52 pt-14 text-center text-white sm:pt-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-20 h-[520px] w-[520px] rounded-full border border-white/5 shadow-[0_0_0_60px_rgba(255,255,255,0.015)]" />
        <div className="relative mx-auto max-w-4xl">
          <span className="rounded-full border border-[#F59E0B]/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F59E0B]">
            Case Studies
          </span>
          <h1 className="mt-6 font-display text-[32px] font-extrabold leading-[1.15] tracking-tight text-balance sm:text-5xl">
            Real Projects. <span className="text-[#F59E0B]">Real Numbers.</span> No Fluff.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            How we built websites, SEO content and automation systems for law firms, local businesses and SaaS teams, and exactly what changed after.
          </p>
          <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              ["Projects", `${studies.length} detailed case studies`],
              ["Services", "Web, SEO content, automation"],
              ["Built by", site.name],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-sm font-semibold text-white">{k}</dt>
                <dd className="mt-1 text-sm text-slate-400">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* Overlapping highlight card */}
      <div className="relative z-10 mx-auto -mt-40 max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-[28px] border border-[#F59E0B]/20 bg-[#030509] px-6 py-10 text-center text-white shadow-[0_30px_80px_rgba(2,6,23,0.35)] sm:px-10 sm:py-12">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(420px_240px_at_100%_35%,rgba(245,158,11,0.45),transparent_70%),radial-gradient(420px_220px_at_0%_100%,rgba(245,158,11,0.28),transparent_70%)]" />
          <svg aria-hidden="true" viewBox="0 0 1000 400" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
            <path d="M0 290 C160 220 300 210 470 265 S780 320 900 220 S980 90 1000 70" fill="none" stroke="#F59E0B" strokeWidth="8" opacity=".35" style={{ filter: "blur(6px)" }} />
            <path d="M0 290 C160 220 300 210 470 265 S780 320 900 220 S980 90 1000 70" fill="none" stroke="#FBBF24" strokeWidth="2.5" />
          </svg>
          <div className="relative">
            <div className="text-sm font-medium tracking-[0.2em] text-slate-300">INSIDE THE WORK</div>
            <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                ["89", "Articles published in month one"],
                ["#1-3", "Google rankings for law firm pages"],
                ["3x", "Lead forms in 90 days"],
                ["<2 min", "Lead response time"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="bg-gradient-to-b from-amber-100 via-[#FBBF24] to-[#B45309] bg-clip-text font-display text-4xl font-extrabold text-transparent sm:text-5xl">{v}</div>
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FBBF24]">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============ CASE STUDY CARDS ============ */}
      <main className="mx-auto max-w-content px-4 pb-20 pt-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">All Case Studies</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Each one walks through the starting point, what we changed, the problems we solved and the measured result.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {studies.map((study, i) => {
            const story = getCaseStudyStory(study.slug);
            const stat = story?.heroStat ?? { value: study.metrics[0]?.value, label: study.metrics[0]?.label };
            return (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group grid grid-cols-1 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F59E0B] hover:shadow-xl lg:grid-cols-[0.85fr_1.15fr]"
              >
                {/* Dark stat panel */}
                <div className="relative overflow-hidden bg-[#030509] px-7 py-10 text-white sm:px-10">
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 ${
                      i % 2
                        ? "bg-[radial-gradient(320px_200px_at_0%_100%,rgba(245,158,11,0.45),transparent_70%)]"
                        : "bg-[radial-gradient(320px_220px_at_100%_30%,rgba(245,158,11,0.45),transparent_70%)]"
                    }`}
                  />
                  <div className="relative flex h-full flex-col">
                    <div className="flex flex-wrap gap-2">
                      <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${CATEGORY_CHIP[study.category] ?? "border-white/30 text-white"}`}>
                        {study.category}
                      </span>
                      <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-slate-300">{study.industries[0]}</span>
                    </div>
                    <div className="mt-8 bg-gradient-to-b from-amber-100 via-[#FBBF24] to-[#B45309] bg-clip-text font-display text-6xl font-extrabold leading-none text-transparent sm:text-7xl">
                      {stat.value}
                    </div>
                    <div className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#FBBF24]">{stat.label}</div>
                    <div className="mt-auto pt-8 text-sm text-slate-400">{study.timeline}</div>
                  </div>
                </div>

                {/* Story panel */}
                <div className="flex flex-col p-7 sm:p-10">
                  <h3 className="font-display text-2xl font-extrabold leading-snug transition-colors group-hover:text-[#0B63E5] sm:text-3xl">
                    {study.title}
                  </h3>
                  <p className="mt-1.5 text-base font-medium text-slate-500">{study.tagline}</p>
                  {story && <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{story.intro}</p>}
                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="rounded-2xl bg-slate-100 p-4">
                        <div className="font-display text-xl font-extrabold">{m.value}</div>
                        <div className="mt-1 text-xs leading-snug text-slate-600">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <span className="mt-7 inline-flex items-center gap-3 self-start rounded-full bg-[#0F172A] py-2 pl-5 pr-2 text-sm font-bold text-white">
                    Read the case study
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-[#F59E0B] text-[#0F172A] transition-transform group-hover:translate-x-0.5">
                      <ArrowRight size={14} />
                    </span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ============ CTA ============ */}
        <section className="mt-20 rounded-[30px] bg-[#0F172A] px-6 py-14 text-center text-white sm:px-12">
          <div className="text-xs font-semibold tracking-[0.22em] text-[#F59E0B]">START WITH {site.name.toUpperCase()}</div>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Your business could be the next case study.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Book a free 30-minute call. We will look at your site, content or workflow and show you where the biggest gains are.
          </p>
          <ul className="mx-auto my-8 grid max-w-2xl grid-cols-1 gap-4 text-left sm:grid-cols-2">
            {[
              ["Websites that convert", "Fast, mobile-first, built for leads"],
              ["SEO content that ranks", "Written for buyers and for Google"],
              ["n8n automation", "Remove manual busywork"],
              ["Clear numbers", "Tracking from day one"],
            ].map(([t, s]) => (
              <li key={t} className="flex gap-3">
                <Check size={18} className="mt-0.5 shrink-0 text-[#F59E0B]" />
                <span>
                  <span className="font-semibold">{t}</span>
                  <span className="block text-sm text-slate-400">{s}</span>
                </span>
              </li>
            ))}
          </ul>
          <a
            href={site.bookCallLink}
            className="inline-flex items-center gap-3 rounded-full bg-[#F59E0B] py-2 pl-6 pr-2 font-bold text-[#0F172A] transition-transform hover:-translate-y-0.5"
          >
            Book a Free Call
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#0F172A] text-[#F59E0B]">
              <ArrowRight size={16} />
            </span>
          </a>
        </section>
      </main>
    </div>
  );
}
