import Image from "next/image";
import { ArrowUpRight, FileText } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { writingSamples } from "@/lib/data/projects-page";

export default function WritingSamples() {
  return (
    <section id="writing" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1240px]">
        <SectionHead
          eyebrow="Content & Copywriting"
          title="Words Built Around Business Goals"
          text="Content and copywriting samples tailored to different audiences, industries, and business needs."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {writingSamples.map((w, i) => (
            <Reveal key={w.id} delay={i * 0.07}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-pf-border bg-white transition duration-300 hover:-translate-y-1 hover:border-pf-gold hover:shadow-lg">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={w.image}
                    alt={w.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/95 text-pf-gold shadow">
                    <FileText size={18} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pf-gold">
                  {w.industry}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-pf-navy">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-pf-slate">{w.summary}</p>
                <ul className="mt-5 space-y-2 border-t border-pf-border pt-5 text-sm text-pf-slate">
                  {w.focus.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-2 h-1 w-3 shrink-0 rounded bg-pf-yellow" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-pf-navy underline decoration-pf-yellow decoration-2 underline-offset-4 hover:text-pf-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pf-yellow"
                >
                  Read Writing Sample <ArrowUpRight size={14} />
                </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
