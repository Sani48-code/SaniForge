"use client";

import Image from "next/image";
import { ArrowRight, Calendar, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import { site } from "@/lib/data/site";

type Role = {
  period: string;
  badge: string;
  org: string;
  title: string;
  description: string;
  tags: string[];
  logo?: string;
  href?: string;
  dateImage: string;
  dateImageAlt: string;
  image: string;
  imageAlt: string;
  accentGradient: string;
  dateBadgeBg: string;
  tagColor: string;
};

const roles: Role[] = [
  {
    period: "2024 — Present",
    badge: "Current Role",
    org: "GrowMinion",
    title: "Core Team Member & Web / Automation Engineer",
    description:
      "Building client websites, SEO content systems, and n8n automation pipelines; helped build 3 internal SaaS products used to scale content and rank-tracking for local businesses.",
    tags: ["Web Development", "SEO Content", "n8n Automation"],
    logo: "/images/growminion-mark.png",
    href: site.growminionUrl,
    dateImage: "/images/experience/timeline-engineer.jpg",
    dateImageAlt: "Automation and modern development team engineering",
    image: "/images/experience/web-dev.jpg",
    imageAlt: "Modern web development workspace and software engineering",
    accentGradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    dateBadgeBg: "from-blue-600 to-indigo-600 text-white shadow-blue-500/25",
    tagColor: "border-blue-500/30 bg-blue-500/10 text-blue-300",
  },
  {
    period: "2023 — Present",
    badge: "Personal Practice",
    org: "SaniForge",
    title: "Founder & Lead Digital Craftsman",
    description:
      "Personal practice covering bespoke web development, high-ranking SEO copywriting, and custom business automations for companies across the US.",
    tags: ["Web Engineering", "SEO Architecture", "Workflow Automations"],
    logo: "/images/saniforge-mark.png",
    dateImage: "/images/experience/timeline-agency.jpg",
    dateImageAlt: "Digital agency and client solutions workstation",
    image: "/images/experience/code-practice.jpg",
    imageAlt: "Clean programming workstation and creative digital engineering",
    accentGradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    dateBadgeBg: "from-amber-500 to-orange-600 text-white shadow-amber-500/25",
    tagColor: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  },
  {
    period: "2023",
    badge: "Foundation",
    org: "Started with SEO Copywriting",
    title: "Freelance Copywriter at GrowMinion",
    description:
      "My journey began at GrowMinion as a freelance copywriter, writing keyword-researched, high-converting service pages for law firms, home service companies, and real estate businesses.",
    tags: ["Law Firms", "Home Services", "Real Estate"],
    dateImage: "/images/experience/timeline-writing.jpg",
    dateImageAlt: "Content research, copywriting and editorial drafting",
    image: "/images/experience/seo-writing.jpg",
    imageAlt: "Research-driven SEO copywriting and analytical drafting",
    accentGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    dateBadgeBg: "from-emerald-600 to-teal-600 text-white shadow-emerald-500/25",
    tagColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  },
];

const turningPointSteps = [
  {
    step: "01",
    title: "Joined as a Freelance Copywriter",
    subtitle: "Research & Content Creation",
    text: "I started at GrowMinion as a freelance copywriter, creating research-backed SEO content for local businesses.",
    image: "/images/experience/joined-as-freelancer.png",
    alt: "Abdul Kaiyum Sani starting as freelance copywriter at GrowMinion",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    step: "02",
    title: "Showed an Engineering Mindset",
    subtitle: "Automations & Code Exploration",
    text: "I kept finding ways to automate repetitive workflows, optimize pipelines, and build tools. This mindset stood out.",
    image: "/images/experience/showed-engineer-mindset.png",
    alt: "Demonstrating software engineering and automation mindset",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  {
    step: "03",
    title: "Got Promoted to Engineer",
    subtitle: "Core Team & Systems Builder",
    text: "GrowMinion promoted me to Web/Automation Engineer, where I now build full-stack websites, scalable SEO systems, and automation pipelines.",
    image: "/images/experience/promoted-to-engineer.png",
    alt: "Promoted to Web and Automation Engineer at GrowMinion",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
];

const disciplines = [
  {
    title: "Development",
    sub: "Builds the product",
    img: "/images/experience/web-dev.jpg",
    accent: "border-blue-500/40 text-blue-400",
  },
  {
    title: "Copywriting",
    sub: "Brings the message",
    img: "/images/experience/seo-writing.jpg",
    accent: "border-amber-500/40 text-amber-400",
  },
  {
    title: "Automation",
    sub: "Keeps it moving",
    img: "/images/experience/n8n-automation.jpg",
    accent: "border-emerald-500/40 text-emerald-400",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative scroll-mt-24 overflow-hidden border-t border-blue-200/50 bg-[#EBF3FD] py-20 sm:py-28 lg:py-32 text-slate-900">
      {/* 1. Exact Triangular Geometric Mesh Background from Reference */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90 mix-blend-multiply"
        style={{ backgroundImage: `url('/images/experience/geometric-mesh-bg.png')` }}
        aria-hidden="true"
      />

      {/* 2. Soft Pastel Radiant Glows (Sky-Blue, Lavender, Violet Aura) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-[#E2F0FE]/80 via-[#EDECFE]/70 to-[#FCEEF9]/80"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-36 top-10 z-0 h-[600px] w-[600px] rounded-full bg-sky-200/60 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-5%] top-1/3 z-0 h-[650px] w-[650px] rounded-full bg-purple-200/50 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/3 bottom-10 z-0 h-[500px] w-[500px] rounded-full bg-indigo-200/40 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* ================= HEADING ================= */}
        <FadeIn className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/80 bg-white/80 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-blue-700 shadow-sm backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
              <span>Career Journey</span>
            </div>
            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              How I{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent italic">
                got here
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg font-medium">
              A journey of continuous learning, building real-world products, and solving
              hands-on problems across content, modern web engineering, and smart automation.
            </p>
          </div>

          <div className="rounded-2xl border border-white/80 bg-white/85 p-4.5 shadow-lg shadow-indigo-100/50 backdrop-blur-md hidden sm:block">
            <p className="-rotate-2 font-display text-lg italic text-amber-600 font-semibold">
              Different roles.
              <br />
              <span className="text-slate-900 font-bold">Same goal: Growth &amp; Results.</span>
            </p>
          </div>
        </FadeIn>

        {/* ================= TIMELINE WITH BEAUTIFUL DATE CARDS ================= */}
        <div className="relative mt-16 space-y-8">
          {roles.map((r, i) => (
            <FadeIn key={r.org} delay={i * 0.12}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/85 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/80 hover:shadow-2xl hover:shadow-blue-500/15">
                {/* Subtle top edge glow */}
                <div
                  className={`pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r ${r.accentGradient}`}
                />

                <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr_260px] lg:items-center xl:grid-cols-[250px_1fr_280px]">
                  {/* 1. ELEGANT DATE CARD WITH CLEAN VISUAL PHOTO */}
                  <div className="group/date relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-md">
                    {/* Related Photo thumbnail with clean uncluttered presentation */}
                    <div className="relative h-32 sm:h-36 lg:h-32 w-full overflow-hidden bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={r.dateImage}
                        alt={r.dateImageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover/date:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                      {/* Period Year overlay cleanly placed at bottom */}
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                        <div className="font-display text-lg sm:text-xl font-bold tracking-tight text-white drop-shadow-sm">
                          {r.period}
                        </div>
                        <span className="rounded-md border border-white/30 bg-white/20 px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase text-white backdrop-blur-md">
                          {r.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 2. ROLE DETAILS & DESCRIPTION */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3">
                      {r.logo ? (
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={r.logo}
                            alt={`${r.org} logo`}
                            className="h-full w-full object-contain rounded-lg"
                          />
                        </div>
                      ) : (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-50 text-emerald-700 font-black shadow-xs">
                          SEO
                        </div>
                      )}

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                            {r.href ? (
                              <a
                                href={r.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 transition-colors hover:text-blue-600"
                              >
                                {r.org}
                                <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />
                              </a>
                            ) : (
                              r.org
                            )}
                          </h3>
                        </div>
                        <p className="text-sm sm:text-base font-bold text-blue-700">
                          {r.title}
                        </p>
                      </div>
                    </div>

                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                      {r.description}
                    </p>

                    {/* Skill tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {r.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-slate-200/90 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 3. CONTEXTUAL WORKSPACE PHOTO CARD */}
                  <div className="relative h-44 sm:h-48 lg:h-40 xl:h-44 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.image}
                      alt={r.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-medium text-white">
                      <span className="truncate drop-shadow-sm">{r.imageAlt}</span>
                      <span className="shrink-0 rounded-full bg-white/90 px-2 py-0.5 border border-white text-[10px] text-blue-700 font-bold shadow-xs">
                        Live Craft
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ================= THE TURNING POINT (LIGHT MODE SHADE CONTRAST) ================= */}
        <FadeIn className="mt-20 overflow-hidden rounded-3xl border border-white/90 bg-gradient-to-b from-white/95 via-[#F8FAFF]/95 to-white/95 p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_-15px_rgba(79,70,229,0.12)] text-slate-900">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-700 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                <span>The Turning Point</span>
              </div>
              <h3 className="mt-3 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl tracking-tight">
                How I ended up at GrowMinion
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
                A photographic timeline of evolution — from writing high-converting SEO copy to architecting automations and scaling engineering systems.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-md self-start sm:self-auto backdrop-blur-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/growminion-mark.png"
                alt="GrowMinion brand"
                className="h-10 w-10 rounded-xl object-contain border border-slate-100 shadow-sm"
              />
              <div>
                <p className="text-xs text-slate-500 font-medium">Company</p>
                <p className="text-sm font-bold text-slate-900">GrowMinion</p>
              </div>
            </div>
          </div>

          {/* 3 Step Story Cards with Real Sani Photos - Clean Light-Mode Bento styling */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 xl:gap-8">
            {turningPointSteps.map((step, idx) => (
              <div
                key={step.step}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-lg transition-all duration-300 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Photo frame: Built to fit the full 16:10 / 16:9 landscape photo completely */}
                <div className="relative aspect-[16/10.5] w-full overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content description with crisp dark typography and step numbering */}
                <div className="flex flex-1 flex-col p-6 sm:p-7 bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[11px] font-black text-white font-mono shadow-xs">
                      {step.step}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      {step.subtitle}
                    </span>
                  </div>
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h4>
                  <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout Banner in Warm / Light Gradient Accent */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 via-indigo-50 to-amber-50/70 p-6 sm:p-7 shadow-inner">
            <div className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/25">
                <CheckCircle2 className="h-6 w-6 stroke-[2.5]" />
              </span>
              <div>
                <h5 className="text-base sm:text-lg font-bold text-slate-900">
                  From a freelance copywriter to an engineer.
                </h5>
                <p className="text-xs sm:text-sm text-slate-600">
                  All because I cared about the bigger picture, solved architectural bottlenecks, and automated repetitive workflows.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-blue-600"
            >
              <span>Build With Me</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>

        {/* ================= ONE PERSON, THREE DISCIPLINES ================= */}
        <FadeIn className="mt-14 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-[#0A1020] to-slate-950 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-blue-300">
                Full Synergy
              </div>
              <h3 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
                One person, three disciplines
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Most projects need a developer, a copywriter, and someone to automate the busywork in between. I combine
                all three, which means zero handoff friction, faster shipping velocity, and a system that actually talks to itself: the
                content pipeline, the web application, and the automation workflows all built by the same craftsman.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                {disciplines.map((d, i) => (
                  <div
                    key={d.title}
                    className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-3 shadow-md transition-all duration-300 hover:border-slate-700 text-center"
                  >
                    <div className="relative h-20 w-full overflow-hidden rounded-xl bg-slate-900 mb-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={d.img}
                        alt={d.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-slate-950/40" />
                    </div>
                    <p className={`text-sm font-bold text-white`}>
                      {d.title}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {d.sub}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center font-display text-sm font-semibold italic text-amber-300">
                Same person. Same goal. Better results.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
