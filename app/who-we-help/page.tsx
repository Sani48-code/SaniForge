import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AppWindow, Database, LayoutDashboard, Sparkles } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { industries } from "@/lib/data/who-we-help";
import { site } from "@/lib/data/site";
import AnimatedIcon from "@/components/ui/AnimatedIcon";
import Reveal from "@/components/projects/Reveal";
import { industryIcons } from "@/components/who-we-help/icons";

const PATH = "/who-we-help";

export const metadata: Metadata = buildMetadata({
  title: "Who We Help: Law Firms, Home Services, Real Estate & SaaS",
  description:
    "SaniForge builds websites, SEO content, automation and custom software for law firms, home service companies, real estate teams and SaaS startups.",
  path: PATH,
});

const GRADIENT_TEXT = "bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#FBBF24] bg-clip-text text-transparent";

const anyBuild = [
  { icon: AppWindow, title: "Web apps", text: "Portals, booking systems and internal tools", tone: "blue" as const },
  { icon: LayoutDashboard, title: "SaaS products", text: "Auth, billing, dashboards and APIs", tone: "violet" as const },
  { icon: Database, title: "Custom CMS", text: "Content, roles and publishing your way", tone: "emerald" as const },
  { icon: Sparkles, title: "AI & automation", text: "n8n workflows and AI steps with review", tone: "amber" as const },
];

export default function WhoWeHelpPage() {
  return (
    <div className="bg-[#070B1A] font-sans text-white">
      <JsonLd data={[breadcrumbSchema([{ name: "Who We Help", path: PATH }])]} />

      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-violet-600/25 blur-3xl" />
        <div aria-hidden className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
        <div className="container-px relative mx-auto max-w-[1200px] py-20 text-center sm:py-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-amber-300">
            Who we help
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Built for the Businesses <span className={GRADIENT_TEXT}>We Know Best.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Websites, SEO content, automation and custom software for law firms, home service companies, real estate teams and SaaS
            startups, with real results in each.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1200px] pb-20">
        <ul className="grid gap-5 md:grid-cols-2">
          {industries.map((ind, i) => (
            <Reveal as="li" key={ind.slug} delay={(i % 2) * 0.08}>
              <Link
                href={`${PATH}/${ind.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#10162E] to-[#0B1022] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 sm:p-9"
              >
                <span aria-hidden className="anim-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <AnimatedIcon icon={industryIcons[ind.icon]} tone={ind.tone} size="lg" delay={i * 0.4} />
                <h2 className="mt-7 font-display text-2xl font-bold sm:text-3xl">{ind.name}</h2>
                <p className="mt-2 text-white/65">{ind.menuLine}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {ind.builds.slice(0, 4).map((b) => (
                    <li key={b} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                      {b}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-amber-300">
                  See how we help <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-white py-20 text-[#0B1A3D] sm:py-24">
        <div className="container-px mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-violet-600">Not on the list?</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">We can build any web app, SaaS product or CMS.</h2>
            <p className="mt-4 text-slate-600 sm:text-lg">
              The industries above are where we have the most proof, not the limit. If your business needs custom software, we design and
              build it in code, end to end.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {anyBuild.map((b, i) => (
              <Reveal as="li" key={b.title} delay={i * 0.06} className="rounded-2xl border border-slate-200 bg-[#F7F8FC] p-6">
                <AnimatedIcon icon={b.icon} tone={b.tone} delay={i * 0.3} />
                <h3 className="mt-5 font-display text-lg font-bold">{b.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{b.text}</p>
              </Reveal>
            ))}
          </ul>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href={site.bookCallLink}
              className="group inline-flex items-center gap-2 rounded-full bg-[#0B1A3D] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Tell us what you need <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/case-studies" className="inline-flex items-center rounded-full px-6 py-3.5 text-sm font-semibold ring-1 ring-slate-300 hover:bg-slate-50">
              See case studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
