import { Target, Layers, Shuffle, Lock } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { whyCards } from "@/lib/data/projects-page";

const icons = { target: Target, layers: Layers, shuffle: Shuffle, lock: Lock };

export default function WhyWorkWithMe() {
  return (
    <section className="bg-pf-gray py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1240px]">
        <SectionHead
          eyebrow="Why Work With Me"
          title="Thoughtful Solutions. Clear Communication. Practical Results."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyCards.map((c, i) => {
            const Icon = icons[c.icon];
            return (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-pf-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-pf-gold hover:shadow-md">
                  <Icon size={24} strokeWidth={1.6} className="text-pf-gold" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-bold text-pf-navy">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-pf-slate">{c.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
