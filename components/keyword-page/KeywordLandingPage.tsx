import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Heading from "@/components/services-page/Heading";
import Reveal from "@/components/projects/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getCaseStudyBySlug } from "@/lib/mdx";
import { site } from "@/lib/data/site";
import type { KeywordPage, KeywordSlug } from "@/lib/data/keyword-pages";

const portraits: Record<KeywordSlug, { src: string; alt: string }> = {
  "n8n-developer": { src: "/images/portrait-office.png", alt: "Abdul Kaiyum Sani, n8n developer, at his desk with a laptop" },
  "full-stack-developer": { src: "/images/portrait-hero.png", alt: "Abdul Kaiyum Sani, full-stack developer, in front of code on a monitor" },
  "growth-engineer": { src: "/images/portrait-contact.png", alt: "Abdul Kaiyum Sani, growth engineer, in a navy suit" },
};

function BookCta({ className = "" }: { className?: string }) {
  return (
    <Link
      href={site.bookCallLink}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-sv-navy px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-sv-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-blue ${className}`}
    >
      Book a Free 30-Min Audit <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}

export default function KeywordLandingPage({ page }: { page: KeywordPage }) {
  const path = `/${page.slug}`;
  const portrait = portraits[page.slug];
  const studies = page.caseStudies.slugs.map((s) => getCaseStudyBySlug(s)).filter((s): s is NonNullable<typeof s> => Boolean(s));
  const primaryService = page.related.find((r) => r.href.startsWith("/services/"));

  return (
    <div data-light-page className="bg-white font-sans text-sv-navy">
      <JsonLd data={[breadcrumbSchema([{ name: page.label, path }]), faqSchema(page.faqs)]} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-sv-border bg-white">
        <ol className="container-px mx-auto flex max-w-[1240px] items-center gap-1.5 py-3 text-sm text-sv-slate">
          <li>
            <Link href="/" className="hover:text-sv-blue">Home</Link>
          </li>
          <li aria-hidden="true"><ChevronRight size={14} /></li>
          <li aria-current="page" className="font-semibold text-sv-navy">{page.label}</li>
        </ol>
      </nav>

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-sv-soft to-jn-pale/70 py-14 sm:py-20">
        <div className="container-px mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sv-goldtext">
              <span className="h-0.5 w-6 rounded bg-sv-gold" /> {page.hero.eyebrow}
            </p>
            <h1 className="font-display text-[34px] font-extrabold leading-[1.1] tracking-tight text-sv-navy sm:text-5xl lg:text-[52px] text-balance">
              {page.hero.h1}
            </h1>
            {page.hero.intro.map((p) => (
              <p key={p.slice(0, 24)} className="mt-5 max-w-2xl text-base leading-relaxed text-sv-slate sm:text-lg">
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BookCta />
              {primaryService && (
                <Link
                  href={primaryService.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-sv-navy bg-white px-6 py-4 text-base font-semibold text-sv-navy transition hover:-translate-y-0.5 hover:border-jn-gold hover:bg-jn-pale"
                >
                  {primaryService.text}
                </Link>
              )}
            </div>
            <ul aria-label="Results from client work" className="mt-10 grid gap-4 sm:grid-cols-3">
              {page.hero.proof.map((p) => (
                <li key={p.label} className="rounded-2xl border border-sv-border bg-white/80 p-4 shadow-sm">
                  <span className="block font-display text-2xl font-extrabold text-sv-navy">{p.value}</span>
                  <span className="mt-1 block text-sm leading-snug text-sv-slate">{p.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="overflow-hidden rounded-3xl border-4 border-white bg-white shadow-2xl shadow-slate-400/40">
              <Image
                src={portrait.src}
                alt={portrait.alt}
                width={900}
                height={1125}
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 384px, 460px"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. What I do */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-px mx-auto max-w-[1240px]">
          <Heading title={page.what.title} text={page.what.intro} />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.what.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 0.05} className="flex h-full flex-col rounded-2xl border border-sv-border bg-sv-soft/60 p-6">
                <h3 className="font-display text-lg font-extrabold text-sv-navy">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-jn-body">{item.text}</p>
                {item.href && (
                  <Link href={item.href} className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-sv-blue hover:underline">
                    {item.linkText} <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                )}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Focus narrative */}
      <section className="bg-jn-alt py-20 sm:py-24">
        <div className="container-px mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold leading-tight text-sv-navy sm:text-4xl text-balance">{page.focus.title}</h2>
          {page.focus.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-5 text-base leading-relaxed text-jn-body sm:text-lg">
              {p}
            </p>
          ))}
          {page.focus.links && (
            <ul className="mt-6 space-y-2">
              {page.focus.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex items-center gap-1.5 font-semibold text-sv-blue hover:underline">
                    {l.text} <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* 4. Case studies */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-px mx-auto max-w-[1240px]">
          <Heading eyebrow="Case studies" title={page.caseStudies.title} />
          <ul className={`mt-12 grid gap-6 ${studies.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
            {studies.map((s) => (
              <li key={s.slug} className="flex h-full flex-col rounded-2xl border border-sv-border bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-sv-goldtext">{s.service}</p>
                <h3 className="mt-2 font-display text-xl font-extrabold text-sv-navy">{s.title}</h3>
                <p className="mt-1 text-sm text-sv-slate">{s.tagline}</p>
                <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-sv-border pt-5">
                  {s.metrics.slice(0, 3).map((m) => (
                    <div key={m.label}>
                      <dt className="sr-only">{m.label}</dt>
                      <dd className="font-display text-xl font-extrabold text-sv-blue">{m.value}</dd>
                      <dd className="mt-0.5 text-xs leading-snug text-sv-slate">{m.label}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href={`/case-studies/${s.slug}`}
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-sv-blue hover:underline"
                >
                  Read the {s.title.toLowerCase()} case study <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Process + tech */}
      <section className="bg-sv-soft/70 py-20 sm:py-24">
        <div className="container-px mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-sv-navy sm:text-4xl">{page.process.title}</h2>
            <ol className="mt-8 space-y-5">
              {page.process.steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sv-navy font-display text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-extrabold text-sv-navy">{step.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-jn-body">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            {page.process.note && <p className="mt-6 rounded-xl border border-sv-border bg-white p-4 text-sm text-sv-slate">{page.process.note}</p>}
          </div>
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-sv-navy sm:text-4xl">{page.tech.title}</h2>
            <p className="mt-5 text-base leading-relaxed text-jn-body">{page.tech.text}</p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {page.tech.tools.map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5 rounded-full border border-sv-border bg-white px-3.5 py-1.5 text-sm font-medium text-sv-navy">
                  <Check size={14} className="text-sv-blue" aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. FAQ (all answers visible) */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-px mx-auto max-w-3xl">
          <Heading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-10 space-y-4">
            {page.faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-sv-border bg-white px-6 py-5">
                <h3 className="font-display text-lg font-semibold text-sv-navy">{f.q}</h3>
                <p className="mt-2 text-base leading-relaxed text-sv-slate">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Related reading + CTA */}
      <section className="bg-gradient-to-br from-sv-navy to-[#12306F] py-20 text-white sm:py-24">
        <div className="container-px mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">{page.cta.title}</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{page.cta.text}</p>
            <BookCta className="mt-8 bg-white !text-sv-navy hover:!bg-jn-pale" />
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold">Related services and reading</h2>
            <ul className="mt-5 space-y-3">
              {page.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="inline-flex items-center gap-2 font-semibold text-white/90 underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white">
                    {r.text} <ArrowRight size={15} aria-hidden="true" />
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
