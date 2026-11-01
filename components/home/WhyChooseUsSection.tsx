import Link from "next/link";
import {
  Layers,
  Zap,
  TrendingUp,
  Gauge,
  MapPin,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Phone,
  Globe,
  Sparkles,
} from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import { site } from "@/lib/data/site";

/**
 * "Why businesses choose SaniForge". All text is visible in the DOM (no click-to-flip),
 * and every figure comes from a published case study or the site's own stats.
 */
const usps = [
  {
    icon: Layers,
    title: "One owner for dev, content and automation",
    text: "You work with one person who builds the site, writes the pages and wires the workflows, so nothing gets lost between three vendors.",
    tone: "fuchsia",
  },
  {
    icon: Zap,
    title: "Speed-to-lead built in",
    text: "n8n pipelines answer every enquiry instantly. One rebuild cut first response from 6.5 hours to under 2 minutes and lifted lead-to-meeting conversion from 11% to 19%.",
    href: "/case-studies/lead-automation-pipeline",
    linkText: "Lead automation case study",
    tone: "white",
  },
  {
    icon: TrendingUp,
    title: "Content that ranks and converts",
    text: "Rewritten law firm service pages grew organic traffic from 480 to 2,100 visits a month and consultation requests from about 3 to 22 a month.",
    href: "/case-studies/law-firm-service-pages",
    linkText: "Law firm case study",
    tone: "fuchsia",
  },
  {
    icon: Gauge,
    title: "Engineer-grade performance",
    text: "CSE fundamentals, a Core Web Vitals focus and clean code. The local service redesign loads in under 2 seconds on mobile.",
    href: "/case-studies/local-service-website-redesign",
    linkText: "Redesign case study",
    tone: "fuchsia",
  },
  {
    icon: MapPin,
    title: "Real US-market experience",
    // TODO(owner): the brief says "21+ engagements"; the site backs "20+ businesses served". See MANUAL_STEPS.md.
    text: "20+ businesses served across law, healthcare, real estate, home services and SaaS.",
    tone: "white",
  },
  {
    icon: MessageSquare,
    title: "Direct access",
    text: "You talk to me, not an account manager, and I reply within a business day.",
    tone: "fuchsia",
  },
] as const;

// Replaces the old flip-card claims ("100% Quality Assurance", "95+ PageSpeed", "Dedicated Team")
// with facts the site can back up.
const trustPoints = [
  "Since 2023",
  "Solo practice, backed by the GrowMinion team",
  "Launch in weeks, not months",
  "Core Web Vitals checked on every build",
  "Clear scope before any work starts",
];

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-title"
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
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#D600A5] to-[#FF2EB9] text-white shadow-lg shadow-[#D600A5]/30">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white">SaniForge</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-purple-200">
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">
                <Phone className="h-3 w-3" aria-hidden="true" />
              </span>
              <span>+880 1745-947359</span>
            </a>
            <span className="inline-flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">
                <Globe className="h-3 w-3" aria-hidden="true" />
              </span>
              <span>{new URL(site.url).host}</span>
            </span>
          </div>
        </FadeIn>

        {/* ================= HEADLINE ================= */}
        <FadeIn className="pt-8 sm:pt-10 pb-8 sm:pb-10 max-w-3xl">
          <h2
            id="why-choose-us-title"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Why businesses <span className="text-[#FF2EB9]">choose SaniForge</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-purple-100/90">
            Six reasons law firms, local businesses and agencies hire me, each backed by work you can check.
          </p>
        </FadeIn>

        {/* ================= USP GRID (all text visible) ================= */}
        <FadeIn>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {usps.map((u) => {
            const isWhite = u.tone === "white";
            return (
                <li
                  key={u.title}
                  className={`flex h-full flex-col rounded-[28px] p-7 shadow-xl ${
                    isWhite
                      ? "border border-slate-100 bg-white text-slate-900"
                      : "border border-white/20 bg-gradient-to-br from-[#E600B3] via-[#C90098] to-[#9E0077] text-white shadow-[#E600B3]/25"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      isWhite ? "border border-purple-100 bg-purple-50 text-[#C90098]" : "border border-white/30 bg-white/20 text-white"
                    }`}
                  >
                    <u.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className={`mt-5 font-display text-xl sm:text-2xl font-extrabold leading-tight ${isWhite ? "text-slate-950" : "text-white"}`}>
                    {u.title}
                  </h3>
                  <p className={`mt-3 text-sm sm:text-[15px] leading-relaxed ${isWhite ? "text-slate-600" : "text-white/90"}`}>{u.text}</p>
                  {"href" in u && u.href && (
                    <Link
                      href={u.href}
                      className={`mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold ${
                        isWhite ? "text-[#A80083] hover:text-[#7a005f]" : "text-white hover:text-pink-100"
                      }`}
                    >
                      {u.linkText} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </li>
            );
          })}
        </ul>
        </FadeIn>

        {/* ================= TRUST STRIP + CTA ================= */}
        <FadeIn className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <ul className="flex flex-wrap content-center gap-3 rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
            {trustPoints.map((t) => (
              <li key={t} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-purple-50">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>

          <div className="flex flex-col justify-between gap-5 rounded-[28px] border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold leading-tight text-white">Ready to start?</h3>
              <p className="mt-2 text-sm text-purple-100/90 leading-relaxed">
                Get a free 30-minute technical audit of your website and lead flow.
              </p>
            </div>
            <Link
              href={site.bookCallLink}
              className="inline-flex items-center justify-between rounded-xl bg-gradient-to-r from-[#E600B3] to-[#FF2EB9] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#E600B3]/35 transition-all hover:scale-[1.02]"
            >
              <span>Book a Free 30-Min Audit</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
