import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowRight, CheckCircle2, Clock, FileWarning, Gauge, Sparkles } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getIndustry, industries } from "@/lib/data/who-we-help";
import { getAllCaseStudies } from "@/lib/mdx";
import { getCaseStudyStory } from "@/lib/data/case-study-stories";
import { site } from "@/lib/data/site";
import AnimatedIcon from "@/components/ui/AnimatedIcon";
import Reveal from "@/components/projects/Reveal";
import { industryIcons } from "@/components/who-we-help/icons";

type Params = { slug: string };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Params | Promise<Params> }): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);
  const ind = getIndustry(slug);
  if (!ind) return {};
  return buildMetadata({ title: ind.seoTitle, description: ind.seoDescription, path: `/who-we-help/${ind.slug}` });
}

const GRADIENT_TEXT = "bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#FBBF24] bg-clip-text text-transparent";
const PAIN_ICONS = [FileWarning, Clock, AlertTriangle, Gauge];

export default async function IndustryPage({ params }: { params: Params | Promise<Params> }) {
  const { slug } = await Promise.resolve(params);
  const ind = getIndustry(slug);
  if (!ind) notFound();

  const Icon = industryIcons[ind.icon];
  const studies = getAllCaseStudies().filter((s) => ind.caseStudies.includes(s.slug));
  const others = industries.filter((i) => i.slug !== ind.slug);
  const path = `/who-we-help/${ind.slug}`;

  return (
    <div className="bg-[#070B1A] font-sans text-white">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Who We Help", path: "/who-we-help" },
            { name: ind.name, path },
          ]),
          faqSchema(ind.faqs),
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -left-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-blue-600/25 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl" />
        <div aria-hidden className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
        <div className="container-px relative mx-auto grid max-w-[1200px] items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <nav aria-label="Breadcrumb" className="text-xs text-white/50">
              <Link href="/who-we-help" className="hover:text-white">Who We Help</Link> <span className="mx-1.5">/</span> {ind.name}
            </nav>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-amber-300">
              {ind.eyebrow}
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {ind.headline.pre}
              <span className={GRADIENT_TEXT}>{ind.headline.highlight}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">{ind.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={site.bookCallLink}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-6 py-3.5 text-sm font-semibold text-[#0B1A3D] shadow-[0_10px_30px_-10px_rgba(251,191,36,0.7)] transition-transform hover:-translate-y-0.5"
              >
                Book a free call <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#results" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold hover:bg-white/10">
                See the results
              </a>
            </div>
          </div>

          <Reveal>
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#10162E] to-[#0B1022] p-7">
              <div aria-hidden className="anim-spin-slow pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-dashed border-white/10" />
              <AnimatedIcon icon={Icon} tone={ind.tone} size="lg" />
              <p className="mt-6 text-sm font-semibold text-white/60">What we build for {ind.audience}</p>
              <ul className="mt-4 space-y-2.5">
                {ind.builds.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm text-white/85">
                    <CheckCircle2 size={16} className="shrink-0 text-emerald-400" /> {b}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/10 pt-4 text-xs text-white/55">{ind.proofNote}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PAINS */}
      <section className="bg-white py-20 text-[#0B1A3D] sm:py-24">
        <div className="container-px mx-auto max-w-[1200px]">
          <p className="text-sm font-semibold text-rose-600">Sound familiar?</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            What holds most {ind.audience} back online
          </h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ind.pains.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.06} className="rounded-2xl border border-slate-200 bg-[#F7F8FC] p-6">
                <AnimatedIcon icon={PAIN_ICONS[i % PAIN_ICONS.length]} tone="rose" size="sm" delay={i * 0.3} />
                <h3 className="mt-5 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="container-px relative mx-auto max-w-[1200px]">
          <div className="text-center">
            <p className="text-sm font-semibold text-violet-300">How we help</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              One Team for the <span className={GRADIENT_TEXT}>Whole System</span>
            </h2>
          </div>
          <ul className="mt-14 grid gap-5 md:grid-cols-2">
            {ind.solutions.map((s, i) => (
              <Reveal as="li" key={s.title} delay={(i % 2) * 0.08}>
                <Link
                  href={`/services/${s.service}`}
                  className="group relative flex h-full gap-5 overflow-hidden rounded-3xl border border-white/10 bg-[#0D1326] p-7 transition-colors hover:border-white/25"
                >
                  <span aria-hidden className="anim-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <span className="font-display text-4xl font-extrabold text-white/15">0{i + 1}</span>
                  <span className="flex flex-col">
                    <span className="font-display text-xl font-bold">{s.title}</span>
                    <span className="mt-2 text-white/65">{s.text}</span>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-300">
                      {s.serviceLabel} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* RESULTS */}
      {studies.length > 0 && (
        <section id="results" className="scroll-mt-24 pb-20 sm:pb-28">
          <div className="container-px mx-auto max-w-[1200px]">
            <p className="text-sm font-semibold text-sky-300">Proof, not promises</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Real results for {ind.audience}</h2>
            <ul className={`mt-10 grid gap-5 ${studies.length > 1 ? "md:grid-cols-2" : ""}`}>
              {studies.map((study) => {
                const story = getCaseStudyStory(study.slug);
                const stat = story?.heroStat ?? { value: study.metrics[0]?.value, label: study.metrics[0]?.label };
                return (
                  <li key={study.slug}>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="group flex h-full flex-col rounded-3xl border border-amber-400/25 bg-gradient-to-br from-amber-400/10 via-transparent to-transparent p-7 transition-colors hover:border-amber-400/60 sm:p-9"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">{study.category}</p>
                      <p className="mt-5 bg-gradient-to-b from-amber-100 via-[#FBBF24] to-[#D97706] bg-clip-text font-display text-6xl font-extrabold leading-none text-transparent">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm text-white/70">{stat.label}</p>
                      <h3 className="mt-6 font-display text-xl font-bold">{study.title}</h3>
                      <p className="mt-1 text-sm text-white/55">{study.tagline}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-amber-300">
                        Read the case study <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ + CTA */}
      <section className="bg-white py-20 text-[#0B1A3D] sm:py-24">
        <div className="container-px mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold text-blue-600">Questions</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">What {ind.audience} usually ask</h2>
              <p className="mt-4 text-slate-600">
                We can also build any web app, SaaS product or custom CMS your business needs, beyond what is listed here.
              </p>
            </div>
            <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
              {ind.faqs.map((f) => (
                <details key={f.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-bold">
                    {f.q}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#070B1A] px-6 py-14 text-center text-white sm:px-12 sm:py-16">
            <div aria-hidden className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-600/35 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-10 h-72 w-72 rounded-full bg-violet-600/35 blur-3xl" />
            <div className="relative">
              <span className="inline-flex"><AnimatedIcon icon={Sparkles} tone="amber" /></span>
              <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
                Let&apos;s build what your business needs next.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/70">A free 30-minute call. We look at your site, content and workflow and show you where the biggest gains are.</p>
              <Link
                href={site.bookCallLink}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-7 py-3.5 text-sm font-semibold text-[#0B1A3D] transition-transform hover:-translate-y-0.5"
              >
                Book a free call <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="mt-14">
            <p className="text-sm font-semibold text-slate-500">We also help</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/who-we-help/${o.slug}`} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold hover:bg-slate-50">
                    {o.name} <ArrowRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
