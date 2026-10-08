"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  Zap,
  BarChart3,
  Users,
  Filter,
  Workflow,
  Github,
  FileEdit,
  X,
  CalendarCheck,
} from "lucide-react";
import { site } from "@/lib/data/site";


const badgeText = "font-black tracking-tight leading-none";
const letterBox = `${badgeText} flex h-8 w-8 items-center justify-center rounded-md text-[11px]`;

type TechBadge = { name: string; pos: string; icon: ReactNode };

// "hidden lg:flex" badges are desktop-only extras; the rest also show on small screens.
const techBadges: TechBadge[] = [
  // ---- Left side: developer stack ----
  {
    name: "n8n",
    pos: "flex left-0 top-[8%]",
    icon: (
      <svg className="h-7 w-7 text-[#EA4B71]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="5" cy="12" r="3" fill="currentColor" />
        <circle cx="19" cy="6" r="3" fill="currentColor" />
        <circle cx="19" cy="18" r="3" fill="currentColor" />
        <path d="M5 12L19 6M5 12L19 18" />
      </svg>
    ),
  },
  {
    name: "React",
    pos: "flex left-0 top-[26%] lg:left-9 lg:top-[17%]",
    icon: (
      <svg className="h-8 w-8 text-[#61DAFB]" viewBox="-12 -12 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle r="2" fill="currentColor" stroke="none" />
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    pos: "flex left-0 top-[44%] lg:top-[26%]",
    icon: <span className={`${letterBox} items-end justify-end bg-[#3178C6] p-0.5 text-[13px] text-white`}>TS</span>,
  },
  {
    name: "JavaScript",
    pos: "flex left-0 top-[62%] lg:left-9 lg:top-[35%]",
    icon: <span className={`${letterBox} items-end justify-end bg-[#F7DF1E] p-0.5 text-[13px] text-slate-900`}>JS</span>,
  },
  {
    name: "HTML5",
    pos: "hidden lg:flex left-0 top-[44%]",
    icon: <span className={`${letterBox} bg-[#E34F26] text-white`}>HTML</span>,
  },
  {
    name: "CSS3",
    pos: "hidden lg:flex left-9 top-[53%]",
    icon: <span className={`${letterBox} bg-[#1572B6] text-white`}>CSS</span>,
  },
  {
    name: "Node.js",
    pos: "hidden lg:flex left-0 top-[62%]",
    icon: (
      <svg className="h-8 w-8 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.5l9.5 5.5v11L12 23.5 2.5 18V7L12 1.5z" />
        <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="900" fill="#fff" fontFamily="Inter, sans-serif">N</text>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    pos: "hidden lg:flex left-9 top-[71%]",
    icon: (
      <svg className="h-7 w-7 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  // ---- Right side: SEO + GoHighLevel + growth ----
  {
    name: "GoHighLevel",
    pos: "flex right-24 top-[3%] sm:right-28 lg:right-[72px] lg:top-[2%]",
    icon: (
      <span className={`${badgeText} flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-blue-600 text-[11px] text-white`}>GHL</span>
    ),
  },
  {
    name: "SEO",
    pos: "flex right-2 top-[12%] lg:right-0 lg:top-[8%]",
    icon: (
      <svg className="h-7 w-7 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M21 21l-5.2-5.2" />
        <path d="M7.5 12l2-2.2 1.8 1.4 2.2-3" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    pos: "flex right-0 top-[27%] lg:right-[72px] lg:top-[16%]",
    icon: <span className={`${badgeText} flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-[15px] text-white`}>N</span>,
  },
  {
    name: "Google Analytics",
    pos: "hidden lg:flex right-0 top-[24%]",
    icon: <BarChart3 className="h-7 w-7 text-[#F9AB00]" strokeWidth={2.6} />,
  },
  {
    name: "GHL CRM",
    pos: "hidden lg:flex right-[72px] top-[32%]",
    icon: <Users className="h-7 w-7 text-[#2563EB]" strokeWidth={2.2} />,
  },
  {
    name: "Sales Funnels",
    pos: "hidden lg:flex right-0 top-[40%]",
    icon: <Filter className="h-7 w-7 text-[#7C3AED]" strokeWidth={2.2} />,
  },
  {
    name: "Workflow Automation",
    pos: "hidden lg:flex right-[72px] top-[48%]",
    icon: <Workflow className="h-7 w-7 text-[#10B981]" strokeWidth={2.2} />,
  },
  {
    name: "GitHub",
    pos: "hidden lg:flex right-0 top-[56%]",
    icon: <Github className="h-7 w-7 text-slate-900" strokeWidth={2} />,
  },
];

type TrustedItem =
  | { kind: "logo"; name: string; src: string; className: string; label?: string }
  | { kind: "seo"; name: string; path: string };

const trustedItems: TrustedItem[] = [
  { kind: "logo", name: "Substance Law", src: "/images/trusted/substance-law.webp", className: "h-8 w-auto" },
  { kind: "seo", name: "Law Firm SEO", path: "M12 3v18M5 7h14M5 7l-3 7a3 3 0 006 0L5 7zm14 0l-3 7a3 3 0 006 0l-3-7z" },
  { kind: "logo", name: "Ohio Roof Masters", src: "/images/trusted/ohio-roof.webp", className: "h-11 w-auto" },
  { kind: "logo", name: "Maana Law", src: "/images/trusted/maana-law.png", className: "h-7 w-7", label: "Maana Law" },
  { kind: "seo", name: "Roofing SEO", path: "M2 12l10-9 10 9M5 10v10h14V10" },
  { kind: "logo", name: "Growminion", src: "/images/trusted/growminion-mark.png", className: "h-8 w-8", label: "Growminion" },
  { kind: "seo", name: "Local SEO", path: "M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12zm0-9a3 3 0 100-6 3 3 0 000 6z" },
];

function TrustedLogos() {
  return (
    <>
      {trustedItems.map((t) => (
        <div
          key={t.name}
          title={t.name}
          className="flex shrink-0 items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-slate-800 sm:text-base"
        >
          {t.kind === "logo" ? (
            <>
              <img src={t.src} alt={t.label ? "" : t.name} className={`${t.className} object-contain`} />
              {t.label && <span className="whitespace-nowrap">{t.label}</span>}
            </>
          ) : (
            <>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={t.path} />
              </svg>
              <span className="whitespace-nowrap">{t.name}</span>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative overflow-x-clip bg-gradient-to-b from-[#F8FAFF] via-[#F1F5FD] to-[#FFFFFF] text-slate-900 pt-8 pb-0 sm:pt-14 lg:pt-8">
      {/* Background ambient radial glow accents */}
      <div
        className="pointer-events-none absolute -top-40 right-10 h-[650px] w-[650px] rounded-full bg-blue-100/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-indigo-50/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-px mx-auto max-w-[1400px] lg:px-10 xl:px-16">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-24">
          {/* ================= LEFT COLUMN ================= */}
          <div className="relative z-10 flex flex-col pt-2 pb-16 lg:pb-24 lg:pr-4 xl:-ml-6">
            {/* Greeting badge */}
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl animate-bounce">👋</span>
              <div>
                <p className="text-xs sm:text-sm font-medium text-slate-500">Hi, I&apos;m</p>
                <p className="text-base sm:text-lg font-bold tracking-tight text-slate-900">
                  Abdul Kaiyum Sani
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[56px] xl:text-[60px] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              I Build Websites,
              <br />
              <span className="text-[#F59E0B]">Automations &amp;</span>
              <br />
              Digital Solutions
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
              I create fast, modern websites and smart automations to help businesses
              grow, save time and work smarter.
            </p>

            {/* Dual CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={site.bookCallLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:bg-blue-700 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                Let&apos;s Work Together
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-slate-200/90 bg-white px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-800 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:shadow hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
                  <Play className="h-2.5 w-2.5 fill-white ml-0.5" />
                </span>
                Watch Intro
              </button>
            </div>

            {/* Core Capability Feature Chips (row of 3) */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/90 border-t border-slate-200/80 pt-8 max-w-xl">
              {/* Chip 1 */}
              <div className="flex items-center gap-3 pr-4 py-2.5 sm:py-0">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 font-mono text-base font-bold text-blue-600">
                  &lt;/&gt;
                </span>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    Web Development
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-medium">
                    Modern &amp; Scalable
                  </p>
                </div>
              </div>

              {/* Chip 2 */}
              <div className="flex items-center gap-3 sm:px-4 py-2.5 sm:py-0">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <FileEdit className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    SEO Content Writing
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-medium">
                    Rank Higher
                  </p>
                </div>
              </div>

              {/* Chip 3 */}
              <div className="flex items-center gap-3 sm:pl-4 py-2.5 sm:py-0">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Zap className="h-4 w-4 fill-blue-600/20" />
                </span>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    N8N Automation
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-medium">
                    Save Time
                  </p>
                </div>
              </div>
            </div>

            {/* Trusted By / Tech Logo Strip */}
            <div className="mt-10 max-w-xl">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-slate-600 sm:text-base">
                TRUSTED BY BUSINESSES
              </p>
              <div className="marquee-mask relative mt-4 overflow-hidden">
                <div
                  className="flex w-max items-center text-slate-400 trusted-marquee hover:[animation-play-state:paused]"
                  style={{ animationDuration: "35s" }}
                >
                  <div className="flex shrink-0 items-center gap-8 pr-8 sm:gap-10 sm:pr-10">
                    <TrustedLogos />
                  </div>
                  <div className="flex shrink-0 items-center gap-8 pr-8 sm:gap-10 sm:pr-10" aria-hidden="true">
                    <TrustedLogos />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (PORTRAIT + BENTO CARDS) ================= */}
          <div className="relative mx-auto flex w-full overflow-visible items-end justify-center lg:justify-end lg:pr-4 xl:pr-0 min-h-[520px] sm:min-h-[640px] lg:min-h-[640px]">
            {/* 1. Backdrop Architectural Circle Halo (Layer z-10) */}
            <div
              className="pointer-events-none absolute left-1/2 lg:left-auto lg:right-0 bottom-[10%] -translate-x-1/2 lg:translate-x-0 z-10 h-[380px] w-[380px] sm:h-[480px] sm:w-[480px] lg:h-[540px] lg:w-[540px] rounded-full bg-gradient-to-tr from-blue-200/70 via-blue-100/80 to-indigo-100/60 shadow-[0_0_90px_rgba(59,130,246,0.18)]"
              aria-hidden="true"
            />

            {/* 2. Hand-drawn sunshine sparks above Sani's head (Layer z-30) */}
            <div className="absolute top-2 sm:top-6 right-14 sm:right-20 lg:right-24 z-30 pointer-events-none">
              <svg className="h-8 w-8 sm:h-10 sm:w-10 text-amber-400" viewBox="0 0 32 32" fill="none">
                <path d="M6 24L2 28" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
                <path d="M16 12V4" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
                <path d="M24 20L30 16" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
              </svg>
            </div>

            {/* 3. Floating tech-stack logo badges (Layer z-30) */}
            {techBadges.map((t, i) => (
              <motion.div
                key={t.name}
                title={t.name}
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4 + (i % 4) * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
                className={`absolute z-30 h-12 w-12 sm:h-[52px] sm:w-[52px] items-center justify-center rounded-2xl border border-slate-100 bg-white/95 shadow-xl shadow-slate-200/80 backdrop-blur-md ${t.pos}`}
              >
                {t.icon}
              </motion.div>
            ))}

            {/* 7. Grounded Coffee Mug Accent (Bottom Right, Layer z-30) */}
            <div className="absolute right-0 sm:right-2 bottom-0 z-30 pointer-events-none hidden">
              <div className="relative flex flex-col items-center justify-center rounded-xl bg-slate-900 text-white px-3.5 py-3 shadow-lg border border-slate-800">
                <span className="text-[9px] font-black tracking-wider uppercase text-amber-400 leading-tight">
                  Better Ideas
                </span>
                <span className="text-[8px] font-bold tracking-wide uppercase text-slate-300 leading-tight">
                  Bigger Results
                </span>
                {/* Mug handle */}
                <span className="absolute -right-2.5 top-2.5 h-6 w-3 rounded-r-lg border-2 border-slate-900 bg-transparent" />
              </div>
            </div>

            {/* 8. Dominant Portrait Cutout of Abdul Kaiyum Sani (Layer z-20) */}
            <div className="relative z-20 flex items-end justify-center lg:justify-end overflow-visible">
              <img 
                src="/images/heo-main.png" 
                alt="Abdul Kaiyum Sani" 
                className="relative z-20 h-[560px] sm:h-[640px] lg:h-[calc(100svh-120px)] lg:max-h-[800px] w-auto object-contain select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= INTRO VIDEO MODAL ================= */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Meet Abdul Kaiyum Sani
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Web Development, SEO Copywriting &amp; Automation
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setVideoOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-5 aspect-video w-full overflow-hidden rounded-xl bg-slate-900 flex flex-col items-center justify-center text-center p-6 text-white relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/90 text-white shadow-xl shadow-blue-500/30">
                  <Play className="h-7 w-7 fill-white ml-1" />
                </div>
                <h4 className="mt-4 text-lg font-bold">Introduction &amp; Case Study Walkthrough</h4>
                <p className="mt-1 text-sm text-slate-300 max-w-md">
                  Building scalable digital experiences, SEO content pipelines, and automated business workflows.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                  Ready to start a project? Schedule a quick discovery chat.
                </p>
                <a
                  href={site.bookCallLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Book a Free 15-Min Call
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
