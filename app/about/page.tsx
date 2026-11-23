import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Facebook,
  Github,
  Linkedin,
  MessageSquare,
  Search,
  ShieldCheck,
  User,
  Workflow,
  Zap,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Reveal from "@/components/projects/Reveal";
import { RankingChart } from "@/components/about-page/Visuals";
import { breadcrumbSchema, personSchema, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/schema";
import { SITE_URL, SITE_NAME, AUTHOR_NAME, SOCIAL_LINKS, absoluteUrl } from "@/lib/site";
import { site } from "@/lib/data/site";
import { GrowMinionLink, linkifyGrowMinion } from "@/lib/linkify-growminion";

const PATH = "/about";

export const metadata: Metadata = buildMetadata({
  title: "About SaniForge: Web Development & Automation Company",
  description:
    "SaniForge is a digital engineering and automation company founded in 2023: websites, custom SaaS, SEO content and n8n automation, built as one connected system.",
  path: PATH,
  type: "profile",
  absoluteTitle: true,
});

function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}${PATH}#aboutpage`,
    url: absoluteUrl(PATH),
    name: `About ${SITE_NAME}`,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    mainEntity: { "@id": ORGANIZATION_ID },
  };
}

const GRADIENT_TEXT = "bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#FBBF24] bg-clip-text text-transparent";

const heroChips = [
  { label: "Web development", dot: "bg-sky-400" },
  { label: "SaaS & software", dot: "bg-violet-400" },
  { label: "n8n automation", dot: "bg-emerald-400" },
  { label: "SEO & content", dot: "bg-amber-400" },
];

const heroStats = [
  { value: "20+", label: "businesses served", color: "text-emerald-300" },
  { value: "3", label: "SaaS products built", color: "text-violet-300" },
  { value: "2023", label: "building since", color: "text-amber-300" },
];

const marquee = [
  { label: "Websites", color: "from-sky-400 to-blue-400" },
  { label: "SaaS Platforms", color: "from-violet-400 to-purple-500" },
  { label: "n8n Automation", color: "from-emerald-300 to-emerald-500" },
  { label: "SEO Content", color: "from-amber-300 to-amber-500" },
];

const introStats = [
  { value: "2023", label: "Founded", text: "text-blue-600", card: "from-blue-50 border-blue-100" },
  { value: "4+", label: "Core capabilities", text: "text-violet-600", card: "from-violet-50 border-violet-100" },
  { value: "20+", label: "Businesses served", text: "text-emerald-600", card: "from-emerald-50 border-emerald-100" },
  { value: "US", label: "Target market", text: "text-amber-600", card: "from-amber-50 border-amber-100" },
];

const results = [
  { label: "Organic traffic", value: "2,100/mo", note: "↑ from 480/mo", color: "text-amber-300", ring: "from-amber-400/10" },
  { label: "Consultation requests", value: "22/mo", note: "↑ from about 3/mo", color: "text-sky-300", ring: "from-sky-400/10" },
  { label: "Lead response time", value: "<2 min", note: "↓ from 6.5 hours", color: "text-emerald-300", ring: "from-emerald-400/10" },
  { label: "Form submissions", value: "3x", note: "↑ in 90 days", color: "text-violet-300", ring: "from-violet-400/10" },
];

const reasons = [
  { icon: Zap, title: "Fast Turnaround", text: "Most projects move from kickoff to launch in weeks, not months, without cutting corners on quality.", bg: "from-blue-500 to-blue-600" },
  { icon: MessageSquare, title: "Transparent Communication", text: "Regular updates and clear timelines throughout the project, no disappearing acts or guesswork.", bg: "from-violet-500 to-purple-600" },
  { icon: Search, title: "SEO Built In From Day One", text: "Every site and every page is structured for search from the start, not bolted on afterward.", bg: "from-amber-400 to-amber-500" },
  { icon: User, title: "One Point of Contact", text: "You work directly with the people building your project, not a rotating cast of account managers.", bg: "from-rose-400 to-rose-500" },
  { icon: Workflow, title: "Automation-Minded", text: "Wherever it makes sense, repetitive manual work gets automated so your team saves real time, every week.", bg: "from-emerald-400 to-emerald-600" },
  { icon: ShieldCheck, title: "Post-Launch Support", text: "Support doesn't end at launch. Fixes, updates and improvements are part of how we work.", bg: "from-cyan-400 to-cyan-600" },
];

const steps = [
  { title: "Understand", text: "The business, the problem, the users and the outcome you want.", color: "bg-blue-600" },
  { title: "Plan", text: "Choose the approach, define the scope and the requirements that matter.", color: "bg-violet-600" },
  { title: "Build", text: "Develop with suitable technology and maintainable code.", color: "bg-pink-600" },
  { title: "Test & Refine", text: "Check every function, fix issues and polish the experience.", color: "bg-amber-600" },
  { title: "Deliver & Improve", text: "Launch, then find sensible ways to keep improving.", color: "bg-emerald-600" },
];

const journey = [
  {
    badge: "'23",
    badgeBg: "bg-blue-600",
    period: "2023",
    periodColor: "text-blue-600",
    title: "The Beginning",
    text: "Started with SEO copywriting and digital growth work for law firms, home services and real estate.",
    img: "/images/experience/joined-as-freelancer.png",
    alt: "Abdul Kaiyum Sani starting out with SEO copywriting",
  },
  {
    badge: "'24",
    badgeBg: "bg-violet-600",
    period: "2023–2024",
    periodColor: "text-violet-600",
    title: "Building SaniForge",
    text: "Expanded into web development and business automation, and moved into engineering as a GrowMinion core team member.",
    img: "/images/experience/promoted-to-engineer.png",
    alt: "Promoted to engineer as a GrowMinion core team member",
  },
  {
    badge: "logo",
    badgeBg: "bg-[#0B1A3D]",
    period: "2024–Present",
    periodColor: "text-amber-600",
    title: "Engineering What's Next",
    text: "Advanced into SaaS development, intelligent automation and connected business solutions.",
    img: "/images/experience/showed-engineer-mindset.png",
    alt: "Engineering SaaS and automation at SaniForge",
  },
];

const capabilities = [
  {
    title: "Business Automation",
    text: "Intelligent workflows that route every lead, update your CRM and follow up for you.",
    tags: "n8n workflows · GoHighLevel funnels and CRM · AI steps with human review",
    href: "/services/n8n-automation",
    img: "/images/services/n8n-automation.png",
    alt: "n8n automation workspace connecting forms, CRM, email and Slack",
    badge: "Leads answered in under 2 min",
    accent: "text-emerald-300",
    border: "border-emerald-400/25 hover:border-emerald-400/60",
    chip: "border border-emerald-400/40 bg-[#0B1022]/85 text-emerald-300",
  },
  {
    title: "SEO & Content",
    text: "Search-focused content and organic growth built around what buyers actually search for.",
    tags: "Service pages · Blog content · Technical SEO",
    href: "/services/copywriting",
    img: "/images/projects/saas-content.png",
    alt: "CraftMinion, the AI SEO content and strategy platform we helped build",
    badge: "2,100 visits/mo, from 480",
    accent: "text-amber-300",
    border: "border-amber-400/25 hover:border-amber-400/60",
    chip: "border border-amber-400/40 bg-[#0B1022]/85 text-amber-300",
  },
  {
    title: "Web Development",
    text: "High-performance websites and web apps, from the interface to the API and database.",
    tags: "Next.js · Core Web Vitals · SEO-ready structure",
    href: "/services/web-development",
    img: "/images/projects/docappoint.png",
    alt: "DocAppoint, a doctor appointment booking web app we built",
    badge: "Under 2s on mobile",
    accent: "text-sky-300",
    border: "border-sky-400/25 hover:border-sky-400/60",
    chip: "border border-sky-400/40 bg-[#0B1022]/85 text-sky-300",
  },
  {
    title: "SaaS & Software",
    text: "Custom platforms built around how a business works. CraftMinion, RankDominator and GrowForge were built this way.",
    tags: "MVP to launch · Logins, billing and dashboards · AI features",
    href: "/services/saas-development",
    img: "/images/projects/saas-local-seo.png",
    alt: "RankDominator local SEO command center with GeoGrid rank tracking",
    badge: "Live product: RankDominator",
    accent: "text-violet-300",
    border: "border-violet-400/25 hover:border-violet-400/60",
    chip: "border border-violet-400/40 bg-[#0B1022]/85 text-violet-300",
  },
];

function CapabilityCard({ c, delay }: { c: (typeof capabilities)[number]; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link href={c.href} className={`group flex h-full flex-col overflow-hidden rounded-3xl border bg-[#0D1326] transition-colors ${c.border}`}>
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={c.img}
            alt={c.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 640px"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0D1326] via-[#0D1326]/10 to-transparent" />
          <span className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold backdrop-blur-md ${c.chip}`}>{c.badge}</span>
        </div>
        <div className="flex flex-1 flex-col p-7 pt-2">
          <h3 className={`font-display text-2xl font-bold ${c.accent}`}>{c.title}</h3>
          <p className="mt-2 text-white/70">{c.text}</p>
          <p className="mt-4 text-sm text-white/55">{c.tags}</p>
          <span className={`mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold ${c.accent}`}>
            Learn more <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-[#070B1A] font-sans text-white">
      <JsonLd data={[aboutPageSchema(), personSchema(), breadcrumbSchema([{ name: "About", path: PATH }])]} />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden lg:min-h-[720px]">
        <div className="relative aspect-[16/10] w-full lg:absolute lg:inset-0 lg:aspect-auto">
          <Image
            src="/images/about-hero-founder.jpg"
            alt={`${AUTHOR_NAME}, founder of SaniForge, reviewing a project on a tablet`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[30%_center]"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#070B1A] via-[#070B1A]/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#070B1A]/30 lg:to-[#070B1A]/90" />
          <div aria-hidden className="absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-[#070B1A] to-transparent lg:block" />
        </div>

        <div className="container-px relative mx-auto max-w-[1200px] pb-10 lg:max-w-[1480px] lg:pb-12 lg:pt-14 xl:px-16">
          <div className="-mt-10 lg:ml-auto lg:mt-0 lg:max-w-[520px] xl:max-w-[560px]">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1 pl-1 pr-3 text-xs text-white/75 backdrop-blur">
              <span className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-2.5 py-0.5 font-semibold text-white">About SaniForge</span>
              Digital engineering &amp; automation
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[64px]">
              We Build the Technology <span className={GRADIENT_TEXT}>Behind Better Businesses.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              SaniForge is a digital engineering and automation company. High-performance websites, custom SaaS platforms, SEO and intelligent
              automation, built as one connected system so your business works smarter and grows further.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={site.bookCallLink}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-6 py-3.5 text-sm font-semibold text-[#0B1A3D] shadow-[0_10px_30px_-10px_rgba(251,191,36,0.7)] transition-transform hover:-translate-y-0.5"
              >
                Let&apos;s Work Together
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Explore Our Work
              </Link>
            </div>
            <ul className="mt-7 flex flex-wrap gap-2">
              {heroChips.map((c) => (
                <li key={c.label} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85">
                  <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                  {c.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md lg:mt-16 grid-cols-3 lg:grid-cols-4">
            <a
              href={site.growminionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-3 flex items-center gap-4 bg-[#0B1022]/85 px-5 py-4 transition-colors hover:bg-[#0B1022] lg:col-span-1"
            >
              <Image src="/images/growminion-logo.png" alt="GrowMinion" width={884} height={273} className="h-7 w-auto" />
              <span className="text-xs leading-tight text-white/60">
                Proud part of
                <br />
                <span className="font-bold text-white">GrowMinion</span>
              </span>
            </a>
            {heroStats.map((s) => (
              <div key={s.label} className="bg-[#0B1022]/85 px-5 py-4">
                <p className={`font-display text-2xl font-extrabold ${s.color}`}>{s.value}</p>
                <p className="text-xs text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <div aria-hidden className="overflow-hidden border-y border-white/5 bg-[#0A1024] py-5">
        <div className="trusted-marquee flex w-max">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {[...marquee, ...marquee].map((m, i) => (
                <span key={`${dup}-${i}`} className="flex items-center">
                  <span className={`bg-gradient-to-r ${m.color} bg-clip-text px-8 font-display text-2xl font-extrabold text-transparent sm:text-3xl`}>
                    {m.label}
                  </span>
                  <span className="text-xl text-white/25">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ================= BUILD. AUTOMATE. GROW. ================= */}
      <section className="bg-white py-20 text-[#0B1A3D] sm:py-24">
        <div className="container-px mx-auto max-w-[1200px]">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="text-sm font-semibold text-violet-600">A better way to build</p>
              <p className="mt-4 font-display text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
                <span className="block text-blue-600">Build.</span>
                <span className="block text-violet-600">Automate.</span>
                <span className="block text-amber-600">Grow.</span>
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl font-semibold leading-snug sm:text-3xl">
                Businesses shouldn&apos;t need five disconnected vendors to succeed online.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                SaniForge brings web development, software engineering, SEO and business automation together into connected systems. The site,
                the content and the follow-up are planned as one, so nothing gets lost between them and every part keeps creating value after
                launch.
              </p>
            </Reveal>
          </div>
          <dl className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {introStats.map((s) => (
              <div key={s.label} className={`rounded-2xl border bg-gradient-to-br to-white p-6 ${s.card}`}>
                <dd className={`font-display text-4xl font-extrabold sm:text-5xl ${s.text}`}>{s.value}</dd>
                <dt className="mt-1 text-sm text-slate-600">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="container-px relative mx-auto max-w-[1200px]">
          <div className="text-center">
            <p className="text-sm font-semibold text-violet-300">Our capabilities</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              What We <span className={GRADIENT_TEXT}>Actually Build</span>
            </h2>
            <p className="mt-4 text-white/65">Four capabilities, one team. Use one on its own or connect them into a single system.</p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.45fr_1fr]">
            {capabilities.slice(0, 2).map((c, i) => (
              <CapabilityCard key={c.title} c={c} delay={i * 0.08} />
            ))}
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1.15fr]">
            {capabilities.slice(2).map((c, i) => (
              <CapabilityCard key={c.title} c={c} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="pb-20 sm:pb-28">
        <div className="container-px mx-auto max-w-[1200px]">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold text-sky-300">Proof, not promises</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                Results You <span className={GRADIENT_TEXT}>Can Check</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm text-white/60">Every number below comes from a published SaniForge case study.</p>
          </div>

          <Reveal className="mt-10">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#10162E] to-[#0B1022] p-5 shadow-[0_40px_80px_-40px_rgba(59,130,246,0.45)] sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Image src="/images/saniforge-mark.png" alt="" width={32} height={32} className="h-8 w-8" />
                  <div>
                    <p className="font-display font-bold">Client results</p>
                    <p className="text-xs text-white/55">Law firm SEO, lead automation and a local website redesign</p>
                  </div>
                </div>
                <Link href="/case-studies" className="rounded-lg border border-white/15 px-3 py-1.5 text-xs text-white/80 transition-colors hover:bg-white/5">
                  From our case studies
                </Link>
              </div>

              <ul className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {results.map((r) => (
                  <li key={r.label} className={`rounded-2xl border border-white/10 bg-gradient-to-br ${r.ring} to-transparent p-4`}>
                    <p className="text-xs text-white/65">{r.label}</p>
                    <p className={`mt-2 font-display text-2xl font-extrabold sm:text-3xl ${r.color}`}>{r.value}</p>
                    <p className="mt-1 text-xs text-emerald-300/90">{r.note}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-4 grid gap-4 lg:grid-cols-[1.75fr_1fr]">
                <div className="rounded-2xl border border-white/10 bg-[#0A0F21] p-5">
                  <p className="mb-3 text-xs text-white/65">Average Google position for target keywords (lower is better)</p>
                  <RankingChart />
                </div>
                <div className="flex flex-col justify-center rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/10 to-transparent p-6">
                  <p className="font-display text-6xl font-extrabold text-amber-300">#1–3</p>
                  <p className="mt-3 text-sm text-white/80">Google rankings for the firm&apos;s target terms, up from page two and three</p>
                  <Link href="/case-studies/law-firm-service-pages" className="mt-5 text-sm font-semibold text-amber-300 underline underline-offset-4 hover:text-amber-200">
                    Read the case study →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= WHY CHOOSE US + PROCESS ================= */}
      <section className="bg-[#F5F7FC] py-20 text-[#0B1A3D] sm:py-28">
        <div className="container-px mx-auto max-w-[1200px]">
          <p className="text-sm font-semibold text-pink-600">Why businesses choose us</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Engineering Quality. Agency Speed. One Team.
          </h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal as="li" key={r.title} delay={(i % 3) * 0.06} className="rounded-2xl border border-slate-200/70 bg-white p-6 transition-shadow hover:shadow-lg">
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white ${r.bg}`}>
                  <r.icon size={18} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.text}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-16">
            <div className="rounded-3xl border border-slate-200/70 bg-white p-7 sm:p-10">
              <p className="text-sm font-semibold text-cyan-600">How we work</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">A Clear Process. Thoughtful Execution.</h2>
              <ol className="relative mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
                <span aria-hidden className="absolute left-4 right-4 top-4 hidden h-0.5 bg-gradient-to-r from-blue-600 via-pink-600 to-emerald-600 lg:block" />
                {steps.map((s, i) => (
                  <li key={s.title} className="relative">
                    <span className={`relative flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white ring-4 ring-white ${s.color}`}>
                      {i + 1}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= MEET THE FOUNDER ================= */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="container-px relative mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="relative rounded-3xl bg-gradient-to-br from-amber-400 via-violet-500 to-blue-500 p-[1.5px]">
              <div className="relative aspect-video overflow-hidden rounded-[22px] bg-black">
                <video
                  src="/video/intro-main.mp4"
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  controlsList="nodownload"
                  aria-label={`Intro video: ${AUTHOR_NAME}, founder of SaniForge`}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <a
              href={site.growminionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mt-4 flex w-fit items-center gap-3 rounded-xl border border-white/10 bg-[#0B1022]/95 px-4 py-2.5 shadow-xl backdrop-blur transition-colors hover:border-[#F5D90A]/50"
            >
              <Image src="/images/growminion-logo.png" alt="GrowMinion" width={884} height={273} className="h-6 w-auto" />
              <span className="text-xs leading-tight">
                <span className="block font-bold text-white">GrowMinion core team member</span>
                <span className="text-white/65">Web &amp; Automation Engineer</span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm font-semibold text-amber-300">Meet the founder</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Built With Vision. <span className={GRADIENT_TEXT}>Driven by Engineering.</span>
            </h2>
            <p className="mt-6 font-display text-xl font-bold">{AUTHOR_NAME}</p>
            <p className="text-sm text-white/55">Founder &amp; Lead Engineer, SaniForge</p>
            <p className="mt-5 leading-relaxed text-white/75">
              {linkifyGrowMinion(
                "SaniForge was founded by Abdul Kaiyum Sani to make modern technology more accessible and useful for growing businesses. Combining full-stack development, SEO strategy, SaaS engineering and workflow automation, he focuses on solutions that create measurable business value. He is also a core team member at GrowMinion."
              )}
            </p>
            <ul className="mt-7 grid grid-cols-3 gap-3">
              <li className="rounded-xl border border-sky-400/25 bg-sky-400/5 p-4">
                <p className="font-display text-xl font-extrabold text-sky-300">Core member</p>
                <p className="text-xs text-white/60">
                  at <GrowMinionLink />
                </p>
              </li>
              <li className="rounded-xl border border-violet-400/25 bg-violet-400/5 p-4">
                <p className="font-display text-xl font-extrabold text-violet-300">3 SaaS</p>
                <p className="text-xs text-white/60">products helped build</p>
              </li>
              <li className="rounded-xl border border-amber-400/25 bg-amber-400/5 p-4">
                <p className="font-display text-xl font-extrabold text-amber-300">CSE</p>
                <p className="text-xs text-white/60">engineering foundation</p>
              </li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-5 text-sm font-semibold text-sky-300">
              <a href={SOCIAL_LINKS.linkedin} rel="me noopener" target="_blank" className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:text-sky-200">
                <Linkedin size={15} /> LinkedIn
              </a>
              <a href={SOCIAL_LINKS.github} rel="me noopener" target="_blank" className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:text-sky-200">
                <Github size={15} /> GitHub
              </a>
              <a href={SOCIAL_LINKS.facebook} rel="me noopener" target="_blank" className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:text-sky-200">
                <Facebook size={15} /> Facebook
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= JOURNEY + CTA ================= */}
      <section className="bg-white py-20 text-[#0B1A3D] sm:py-28">
        <div className="container-px mx-auto max-w-[1200px]">
          <p className="text-sm font-semibold text-blue-600">Our journey</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">From One Desk to a Digital Forge</h2>

          <div aria-hidden className="relative mt-10 hidden h-12 items-center md:flex">
            <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-blue-600 via-violet-600 to-amber-500" />
            <div className="relative grid w-full grid-cols-3 gap-6">
              {journey.map((j) => (
                <span key={j.title} className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white ring-4 ring-white ${j.badgeBg}`}>
                  {j.badge === "logo" ? <Image src="/images/saniforge-mark.png" alt="" width={28} height={28} className="h-7 w-7" /> : j.badge}
                </span>
              ))}
            </div>
          </div>

          <ol className="mt-6 grid gap-8 md:grid-cols-3 md:gap-6">
            {journey.map((j, i) => (
              <Reveal as="li" key={j.title} delay={i * 0.08}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image src={j.img} alt={j.alt} fill sizes="(max-width: 768px) 100vw, 380px" className="object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <p className={`mt-5 text-sm font-bold ${j.periodColor}`}>{j.period}</p>
                <h3 className="mt-1 font-display text-2xl font-bold">{j.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{linkifyGrowMinion(j.text)}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-24">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#070B1A] px-6 py-16 text-center text-white sm:px-12 sm:py-20">
              <div aria-hidden className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-blue-600/35 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -right-20 -top-10 h-80 w-80 rounded-full bg-violet-600/35 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />
              <div className="relative">
                <p className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-amber-300">
                  Let&apos;s build something better
                </p>
                <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Have an Idea? Let&apos;s Turn It Into <span className={GRADIENT_TEXT}>Something Powerful.</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-white/70">
                  Whether you need a website, custom software or smarter business automation, we&apos;re ready to help you build what&apos;s next.
                </p>
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  <a
                    href={site.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-7 py-3.5 text-sm font-semibold text-[#0B1A3D] shadow-[0_10px_40px_-8px_rgba(251,191,36,0.7)] transition-transform hover:-translate-y-0.5"
                  >
                    Start a Conversation
                    <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <Link
                    href={site.bookCallLink}
                    className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Book a free 30-min call
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
