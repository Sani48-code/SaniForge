"use client";

import { useState } from "react";
import {
  Users,
  Award,
  Zap,
  CheckCircle2,
  Lightbulb,
  ArrowRight,
  Phone,
  Globe,
  Sparkles,
  RotateCw,
} from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import { site } from "@/lib/data/site";

export default function WhyChooseUsSection() {
  // Track flipped state for all 5 cards
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="why-choose-us"
      className="relative scroll-mt-24 overflow-hidden bg-[#2D0A4E] py-16 sm:py-20 lg:py-24 text-white"
    >
      {/* ================= PURPLE CIRCULAR BACKGROUND CURVES & AMBIENT AURA ================= */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[650px] w-[650px] rounded-full bg-[#3D0F6A]/90 blur-[1px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-10 h-[700px] w-[700px] rounded-full bg-[#24063F]/95 blur-[1px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-10 bottom-[-10%] h-[550px] w-[550px] rounded-full bg-[#4A1078]/80 blur-[2px]"
        aria-hidden="true"
      />
      {/* Soft radiant ambient glow */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[#E000B0]/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        {/* ================= TOP BRAND & CONTACT BAR ================= */}
        <FadeIn className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#D600A5] to-[#FF2EB9] text-white shadow-lg shadow-[#D600A5]/30">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white">
              SaniForge &amp; Co.
            </span>
          </div>

          {/* Quick Contact Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-purple-200">
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">
                <Phone className="h-3 w-3" />
              </span>
              <span>+880 1745-947359</span>
            </a>

            <a
              href="https://saniforge.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">
                <Globe className="h-3 w-3" />
              </span>
              <span>@saniforge.com</span>
            </a>
          </div>
        </FadeIn>

        {/* ================= MAIN HERO HEADLINE (COMPACT & BALANCED) ================= */}
        <FadeIn className="pt-8 sm:pt-10 pb-8 sm:pb-10 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Why <span className="text-[#E600B3]">Trust</span>{" "}
            <span className="inline-block text-white transition-transform hover:translate-x-2">
              <ArrowRight className="inline h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 stroke-[3]" />
            </span>
            <br />
            <span className="text-[#FF2EB9]">Our Company?</span>
          </h2>
          <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm text-purple-200/90 font-medium">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E600B3]/30 text-[#FF2EB9]">
              <RotateCw className="h-3 w-3 animate-spin" style={{ animationDuration: "6s" }} />
            </span>
            <span>Click any card below to flip and explore verified details.</span>
          </div>
        </FadeIn>

        {/* ================= BALANCED & PROPORTIONATE 3D FLIP BENTO GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Proven Experience (Fuchsia / Violet Gradient) */}
          <FadeIn delay={0.05}>
            <div
              onClick={() => toggleFlip("proven-experience")}
              className="group relative cursor-pointer h-[260px] sm:h-[280px] w-full [perspective:1200px]"
              role="button"
              tabIndex={0}
              aria-label="Toggle Proven Experience card"
            >
              <div
                className={`relative h-full w-full rounded-[28px] transition-transform duration-700 [transform-style:preserve-3d] ${
                  flipped["proven-experience"] ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* FRONT FACE */}
                <div className="absolute inset-0 flex flex-col justify-between rounded-[28px] bg-gradient-to-br from-[#E600B3] via-[#D100A3] to-[#A80083] p-7 text-white shadow-xl shadow-[#E600B3]/25 border border-white/20 [backface-visibility:hidden]">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-1 mb-2 text-amber-300">
                        <span className="text-sm">★</span>
                        <span className="text-base font-bold">★</span>
                        <span className="text-sm">★</span>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 border border-white/30 backdrop-blur-md shadow-inner">
                        <Award className="h-6 w-6 text-white stroke-[2.2]" />
                      </div>
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white/90 group-hover:bg-white group-hover:text-[#D100A3] transition-colors">
                      <RotateCw className="h-4 w-4 transition-transform group-hover:rotate-180 duration-500" />
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      Proven Experience
                    </h3>
                    <p className="mt-1 text-xs text-white/80 font-medium">Verified Client Satisfaction</p>
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="absolute inset-0 flex flex-col justify-between rounded-[28px] bg-[#1A0530] p-7 text-white shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)] border border-[#E600B3]/40">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF2EB9]">
                        Track Record
                      </span>
                      <RotateCw className="h-4 w-4 text-purple-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Proven Experience</h4>
                    <p className="mt-2 text-sm leading-relaxed text-purple-200/90 font-normal">
                      Years of delivering high-performance websites and client solutions across diverse industries with consistent client satisfaction and verified results.
                    </p>
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" /> 100% Quality Assurance Standard
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Dedicated Team & Craft (Crisp White Card) */}
          <FadeIn delay={0.1}>
            <div
              onClick={() => toggleFlip("dedicated-team")}
              className="group relative cursor-pointer h-[260px] sm:h-[280px] w-full [perspective:1200px]"
              role="button"
              tabIndex={0}
              aria-label="Toggle Dedicated Team card"
            >
              <div
                className={`relative h-full w-full rounded-[28px] transition-transform duration-700 [transform-style:preserve-3d] ${
                  flipped["dedicated-team"] ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* FRONT FACE (WHITE) */}
                <div className="absolute inset-0 flex flex-col justify-between rounded-[28px] bg-white p-7 text-slate-900 shadow-xl border border-slate-100 [backface-visibility:hidden]">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-[#C90098] border border-purple-100 shadow-sm">
                      <Users className="h-7 w-7 stroke-[2]" />
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 group-hover:bg-purple-100 group-hover:text-[#C90098] transition-colors">
                      <RotateCw className="h-4 w-4 transition-transform group-hover:rotate-180 duration-500" />
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                      Dedicated Team
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 font-medium">Skilled Engineers &amp; SEO Architects</p>
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="absolute inset-0 flex flex-col justify-between rounded-[28px] bg-slate-950 p-7 text-white shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)] border border-purple-500/40">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF2EB9]">
                        Core Specialists
                      </span>
                      <RotateCw className="h-4 w-4 text-slate-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Dedicated Team</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300 font-normal">
                      Skilled full-stack engineers and SEO architects working together to provide the best results for every custom business requirement.
                    </p>
                  </div>
                  <div className="text-[11px] font-semibold text-blue-400 flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Direct One-on-One Collaboration
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 3: On-Time Delivery (Fuchsia Gradient) */}
          <FadeIn delay={0.15}>
            <div
              onClick={() => toggleFlip("on-time-delivery")}
              className="group relative cursor-pointer h-[260px] sm:h-[280px] w-full [perspective:1200px]"
              role="button"
              tabIndex={0}
              aria-label="Toggle On-Time Delivery card"
            >
              <div
                className={`relative h-full w-full rounded-[28px] transition-transform duration-700 [transform-style:preserve-3d] ${
                  flipped["on-time-delivery"] ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* FRONT FACE */}
                <div className="absolute inset-0 flex flex-col justify-between rounded-[28px] bg-gradient-to-br from-[#E600B3] via-[#C90098] to-[#9E0077] p-7 text-white shadow-xl shadow-[#E600B3]/25 border border-white/20 [backface-visibility:hidden]">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 border border-white/30 backdrop-blur-md shadow-inner">
                      <Zap className="h-7 w-7 text-white stroke-[2.2]" />
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white/90 group-hover:bg-white group-hover:text-[#D100A3] transition-colors">
                      <RotateCw className="h-4 w-4 transition-transform group-hover:rotate-180 duration-500" />
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      On-Time Delivery
                    </h3>
                    <p className="mt-1 text-xs text-white/80 font-medium">Agile Sprints &amp; Clear Milestones</p>
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="absolute inset-0 flex flex-col justify-between rounded-[28px] bg-[#1A0530] p-7 text-white shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)] border border-[#E600B3]/40">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF2EB9]">
                        Rapid Delivery
                      </span>
                      <RotateCw className="h-4 w-4 text-purple-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white">On-Time Delivery</h4>
                    <p className="mt-2 text-sm leading-relaxed text-purple-200/90 font-normal">
                      Fast turnarounds moving from kickoff to launch in weeks, with regular milestone updates and zero delays or guesswork.
                    </p>
                  </div>
                  <div className="text-[11px] font-semibold text-amber-400 flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Launch in Weeks, Not Months
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 4: Quality Focus (Fuchsia Gradient) */}
          <FadeIn delay={0.2}>
            <div
              onClick={() => toggleFlip("quality-focus")}
              className="group relative cursor-pointer h-[260px] sm:h-[280px] w-full [perspective:1200px]"
              role="button"
              tabIndex={0}
              aria-label="Toggle Quality Focus card"
            >
              <div
                className={`relative h-full w-full rounded-[28px] transition-transform duration-700 [transform-style:preserve-3d] ${
                  flipped["quality-focus"] ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* FRONT FACE */}
                <div className="absolute inset-0 flex flex-col justify-between rounded-[28px] bg-gradient-to-br from-[#D900A8] via-[#BF0094] to-[#8F006F] p-7 text-white shadow-xl shadow-[#D900A8]/25 border border-white/20 [backface-visibility:hidden]">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 border border-white/30 backdrop-blur-md shadow-inner">
                      <CheckCircle2 className="h-7 w-7 text-white stroke-[2.2]" />
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white/90 group-hover:bg-white group-hover:text-[#D100A3] transition-colors">
                      <RotateCw className="h-4 w-4 transition-transform group-hover:rotate-180 duration-500" />
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      Quality Focus
                    </h3>
                    <p className="mt-1 text-xs text-white/80 font-medium">Core Web Vitals &amp; Performance</p>
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="absolute inset-0 flex flex-col justify-between rounded-[28px] bg-[#1A0530] p-7 text-white shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)] border border-[#D900A8]/40">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF2EB9]">
                        Zero Compromise
                      </span>
                      <RotateCw className="h-4 w-4 text-purple-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Quality Focus</h4>
                    <p className="mt-2 text-sm leading-relaxed text-purple-200/90 font-normal">
                      Uncompromising standards in clean code, mobile responsiveness, Core Web Vitals, and conversion rate optimization.
                    </p>
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" /> 95+ PageSpeed &amp; SEO Standards
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 5: Affordable Solutions (Crisp White Card) */}
          <FadeIn delay={0.25}>
            <div
              onClick={() => toggleFlip("affordable-solutions")}
              className="group relative cursor-pointer h-[260px] sm:h-[280px] w-full [perspective:1200px]"
              role="button"
              tabIndex={0}
              aria-label="Toggle Affordable Solutions card"
            >
              <div
                className={`relative h-full w-full rounded-[28px] transition-transform duration-700 [transform-style:preserve-3d] ${
                  flipped["affordable-solutions"] ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* FRONT FACE (WHITE) */}
                <div className="absolute inset-0 flex flex-col justify-between rounded-[28px] bg-white p-7 text-slate-900 shadow-xl border border-slate-100 [backface-visibility:hidden]">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-[#C90098] border border-purple-100 shadow-sm">
                      <Lightbulb className="h-7 w-7 stroke-[2]" />
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 group-hover:bg-purple-100 group-hover:text-[#C90098] transition-colors">
                      <RotateCw className="h-4 w-4 transition-transform group-hover:rotate-180 duration-500" />
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                      Affordable Solutions
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 font-medium">ROI-Focused Transparent Pricing</p>
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="absolute inset-0 flex flex-col justify-between rounded-[28px] bg-slate-950 p-7 text-white shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)] border border-purple-500/40">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF2EB9]">
                        Value Engineering
                      </span>
                      <RotateCw className="h-4 w-4 text-slate-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Affordable Solutions</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300 font-normal">
                      Cost-effective options designed to fit ambitious budgets while maintaining exceptional service and engineering standards.
                    </p>
                  </div>
                  <div className="text-[11px] font-semibold text-amber-400 flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" /> High ROI &amp; Clear Scope
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 6: Direct Support & Consultation (Callout Card) */}
          <FadeIn delay={0.3}>
            <div className="flex h-[260px] sm:h-[280px] w-full flex-col justify-between rounded-[28px] border border-white/15 bg-white/10 p-7 text-white backdrop-blur-xl shadow-xl">
              <div>
                <span className="inline-block rounded-full bg-[#E600B3]/30 border border-[#FF2EB9]/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-pink-200">
                  Let&apos;s Build
                </span>
                <h3 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Ready to Start?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-purple-200/90 leading-relaxed font-normal">
                  Get a free project consultation and technical audit to see how we can help your business grow.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-between rounded-xl bg-gradient-to-r from-[#E600B3] to-[#FF2EB9] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#E600B3]/35 transition-all hover:scale-[1.02]"
              >
                <span>Book a Free Call</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
