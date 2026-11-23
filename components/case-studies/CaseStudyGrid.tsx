"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Code2, LayoutGrid, PenLine, Workflow, type LucideIcon } from "lucide-react";
import AnimatedIcon, { type IconTone } from "@/components/ui/AnimatedIcon";

export type CaseStudyCardData = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  industry: string;
  timeline: string;
  image: string | null;
  intro: string | null;
  stat: { value: string; label: string };
  metrics: { value: string; label: string }[];
};

const CATEGORY: Record<string, { icon: LucideIcon; tone: IconTone; chip: string; glow: string }> = {
  Automation: { icon: Workflow, tone: "emerald", chip: "bg-emerald-400/15 text-emerald-300 ring-emerald-400/30", glow: "group-hover:shadow-[0_30px_80px_-30px_rgba(16,185,129,0.55)]" },
  Copywriting: { icon: PenLine, tone: "amber", chip: "bg-amber-400/15 text-amber-300 ring-amber-400/30", glow: "group-hover:shadow-[0_30px_80px_-30px_rgba(245,158,11,0.55)]" },
  "Web Development": { icon: Code2, tone: "blue", chip: "bg-sky-400/15 text-sky-300 ring-sky-400/30", glow: "group-hover:shadow-[0_30px_80px_-30px_rgba(59,130,246,0.55)]" },
};
const fallback = CATEGORY.Automation;

const STAT_TEXT = "bg-gradient-to-b from-white via-amber-100 to-amber-400 bg-clip-text text-transparent";

function Visual({ study, sizes, className = "relative" }: { study: CaseStudyCardData; sizes: string; className?: string }) {
  return (
    <div className={`overflow-hidden bg-[#070B1A] ${className}`}>
      {study.image ? (
        <Image
          src={study.image}
          alt={`${study.title}: ${study.tagline}`}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
      ) : (
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(400px_260px_at_80%_20%,rgba(245,158,11,0.4),transparent_70%)]" />
      )}
      <span aria-hidden className="anim-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}

function FeaturedCard({ study }: { study: CaseStudyCardData }) {
  const cat = CATEGORY[study.category] ?? fallback;
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className={`group relative block overflow-hidden rounded-[32px] bg-[#070B1A] text-white ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1 ${cat.glow}`}
    >
      <Visual study={study} sizes="(max-width: 1024px) 100vw, 1200px" className="absolute inset-0" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#070B1A] via-[#070B1A]/70 to-transparent" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#070B1A] via-transparent to-transparent" />
      <div className="relative grid min-h-[560px] gap-10 p-7 sm:p-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-3 py-1 text-xs font-bold text-[#0B1A3D]">Featured</span>
            <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${cat.chip}`}>
              {study.category} · {study.industry}
            </span>
          </div>
          <h3 className="mt-8 max-w-xl font-display text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">{study.title}</h3>
          <p className="mt-3 max-w-xl text-lg font-medium text-white/70">{study.tagline}</p>
          {study.intro && <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">{study.intro}</p>}
          <span className="mt-auto inline-flex items-center gap-3 self-start pt-10 text-sm font-bold">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 text-[#0B1A3D] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={20} />
            </span>
            Read the full story
          </span>
        </div>
        <div className="flex flex-col justify-end gap-3 lg:items-end">
          <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl">
            <AnimatedIcon icon={cat.icon} tone={cat.tone} size="md" />
            <p className={`mt-5 font-display text-7xl font-extrabold leading-none tracking-tight ${STAT_TEXT}`}>{study.stat.value}</p>
            <p className="mt-3 text-sm font-semibold text-white/80">{study.stat.label}</p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-white/55"><Clock size={13} /> {study.timeline}</p>
          </div>
          <ul className="grid w-full max-w-sm grid-cols-3 gap-2">
            {study.metrics.map((m) => (
              <li key={m.label} className="rounded-2xl border border-white/10 bg-[#070B1A]/60 p-3 backdrop-blur-md">
                <p className="font-display text-lg font-extrabold">{m.value}</p>
                <p className="mt-1 text-[11px] leading-snug text-white/55">{m.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

function Card({ study, index, wide = false }: { study: CaseStudyCardData; index: number; wide?: boolean }) {
  const cat = CATEGORY[study.category] ?? fallback;
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className={`group relative h-full overflow-hidden rounded-[28px] ${wide ? "grid md:grid-cols-2" : "flex flex-col"} border border-slate-200/80 bg-white shadow-[0_20px_50px_-35px_rgba(15,23,42,0.45)] transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent ${cat.glow}`}
    >
      <div className="relative">
        <Visual study={study} sizes={wide ? "(max-width: 768px) 100vw, 640px" : "(max-width: 768px) 100vw, 600px"} className={`relative ${wide ? "aspect-[16/10] md:aspect-auto md:h-full md:min-h-[380px]" : "aspect-[16/10]"}`} />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#070B1A]/80 via-[#070B1A]/10 to-transparent" />
        <span className={`absolute left-5 top-5 inline-flex items-center rounded-full bg-[#070B1A]/70 px-3 py-1 text-xs font-semibold ring-1 backdrop-blur-md ${cat.chip}`}>
          {study.category} · {study.industry}
        </span>
        <span className="absolute right-5 top-5 font-display text-sm font-bold text-white/70">0{index + 1}</span>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <div>
            <p className={`font-display text-5xl font-extrabold leading-none tracking-tight sm:text-6xl ${STAT_TEXT}`}>{study.stat.value}</p>
            <p className="mt-2 max-w-[16rem] text-xs font-semibold text-white/85">{study.stat.label}</p>
          </div>
          <AnimatedIcon icon={cat.icon} tone={cat.tone} size="sm" delay={index * 0.3} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-extrabold leading-snug tracking-tight text-[#0B1A3D] transition-colors group-hover:text-blue-600 sm:text-2xl">
          {study.title}
        </h3>
        <p className="mt-1.5 text-[15px] font-medium text-slate-500">{study.tagline}</p>
        <ul className="mt-5 grid grid-cols-3 divide-x divide-slate-100 rounded-2xl bg-[#F5F7FC] py-3">
          {study.metrics.map((m) => (
            <li key={m.label} className="px-3">
              <p className="font-display text-base font-extrabold text-[#0B1A3D] sm:text-lg">{m.value}</p>
              <p className="mt-0.5 text-[11px] leading-snug text-slate-500">{m.label}</p>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500"><Clock size={13} /> {study.timeline}</span>
          <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1A3D]">
            Read case study
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0B1A3D] text-amber-300 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function CaseStudyGrid({ studies }: { studies: CaseStudyCardData[] }) {
  const categories = useMemo(() => Array.from(new Set(studies.map((s) => s.category))), [studies]);
  const [active, setActive] = useState<string>("All");
  const shown = active === "All" ? studies : studies.filter((s) => s.category === active);
  const [featured, ...rest] = shown;

  const tabs: { label: string; icon: LucideIcon; count: number }[] = [
    { label: "All", icon: LayoutGrid, count: studies.length },
    ...categories.map((c) => ({ label: c, icon: (CATEGORY[c] ?? fallback).icon, count: studies.filter((s) => s.category === c).length })),
  ];

  return (
    <div>
      <div role="tablist" aria-label="Filter case studies by service" className="flex flex-wrap justify-center gap-2">
        {tabs.map((t) => {
          const on = t.label === active;
          return (
            <button
              key={t.label}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setActive(t.label)}
              className={`inline-flex min-h-[44px] items-center gap-2 rounded-full px-5 text-sm font-semibold transition-all ${
                on
                  ? "bg-[#0B1A3D] text-white shadow-[0_10px_30px_-12px_rgba(11,26,61,0.8)]"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-[#0B1A3D]"
              }`}
            >
              <t.icon size={16} className={on ? "text-amber-300" : "text-slate-400"} />
              {t.label}
              <span className={`rounded-full px-2 py-0.5 text-[11px] ${on ? "bg-white/15" : "bg-slate-100"}`}>{t.count}</span>
            </button>
          );
        })}
      </div>

      <div key={active} className="mt-12 space-y-8 motion-safe:animate-[fadeUp_.5s_ease-out]">
        {featured && <FeaturedCard study={featured} />}
        {rest.length > 0 && (
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {rest.map((s, i) => {
              const wide = rest.length % 2 === 1 && i === rest.length - 1;
              return (
                <li key={s.slug} className={wide ? "md:col-span-2" : undefined}>
                  <Card study={s} index={studies.indexOf(s)} wide={wide} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
