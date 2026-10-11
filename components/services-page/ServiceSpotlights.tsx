import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/projects/Reveal";
import Heading from "./Heading";
import ServiceIllustration from "@/components/services/ServiceIllustration";
import { accents } from "./ServiceCards";
import { services } from "@/lib/data/services";
import { site } from "@/lib/data/site";

const sectionBg = ["bg-sv-soft", "bg-white", "bg-sv-palegold/70", "bg-white", "bg-sv-mint/70", "bg-white"];

export default function ServiceSpotlights() {
  return (
    <>
      <section className="bg-white pt-20 sm:pt-28">
        <div className="container-px mx-auto max-w-[1240px] pb-12">
          <Heading
            eyebrow="Service Spotlights"
            title="Solutions for Every Stage of Your Digital Growth"
            text="A closer look at the problem each service solves, how I approach it and what you receive."
          />
        </div>
      </section>
      {services.map((s, i) => {
        const a = accents[s.slug];
        const flip = i % 2 === 1;
        return (
          <section key={s.slug} className={`${sectionBg[i]} py-14 sm:py-20`}>
            <div className="container-px mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={flip ? "lg:order-2" : ""}>
                <div className="rounded-3xl border border-sv-border bg-white p-3 shadow-xl shadow-slate-200/60">
                  <div className="aspect-[4/3] w-full">
                    <ServiceIllustration slug={s.slug} />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <p className={`text-xs font-bold uppercase tracking-[0.18em] ${a.text}`}>
                  {String(i + 1).padStart(2, "0")} / {s.label}
                </p>
                <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight text-sv-navy text-balance">
                  {s.headline}
                </h3>
                <dl className="mt-5 space-y-4 text-base leading-relaxed text-sv-slate">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-sv-navy">The problem</dt>
                    <dd className="mt-1">{s.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-sv-navy">My approach</dt>
                    <dd className="mt-1">{s.approach}</dd>
                  </div>
                </dl>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-sv-navy">Key deliverables</p>
                <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                  {s.offers.slice(0, 4).map((o) => (
                    <li key={o.title} className="flex items-start gap-2 text-sm text-sv-slate">
                      <Check size={16} className={`mt-0.5 shrink-0 ${a.text}`} aria-hidden="true" />
                      {o.title}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools">
                  {s.tools.slice(0, 5).map((t) => (
                    <li key={t} className="rounded-full border border-sv-border bg-white px-3 py-1 text-xs font-semibold text-sv-navy">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-sv-blue px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-gold"
                  >
                    Explore {s.label} <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                  <a
                    href={site.bookCallLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-xl border border-sv-border bg-white px-5 py-3 text-sm font-semibold text-sv-navy transition hover:border-sv-gold hover:bg-sv-palegold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-gold"
                  >
                    Discuss This Service
                  </a>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}
    </>
  );
}
