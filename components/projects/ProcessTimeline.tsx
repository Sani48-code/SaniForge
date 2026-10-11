import { Search, Map, PenTool, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { processSteps } from "@/lib/data/projects-page";

const icons = { search: Search, map: Map, pen: PenTool, check: CheckCircle2 };

export default function ProcessTimeline() {
  return (
    <section className="bg-pf-gray py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1240px]">
        <SectionHead eyebrow="Process" title="How I Turn Problems Into Solutions" />
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          <span
            aria-hidden="true"
            className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-pf-gold/50 md:left-[10%] md:right-[10%] md:top-[19px] md:h-px md:w-auto"
          />
          {processSteps.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal as="li" key={s.title} delay={i * 0.08} className="relative flex gap-5 md:block md:text-center">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-pf-gold bg-white text-pf-navy md:mx-auto">
                    <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <div className="md:mt-5">
                    <p className="font-mono text-sm font-semibold text-sv-goldtext">
                      Step {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold text-pf-navy">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-pf-slate">{s.text}</p>
                  </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
