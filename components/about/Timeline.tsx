import FadeIn from "@/components/motion/FadeIn";
import { experience } from "@/lib/data/experience";

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-navy-border sm:left-[9px]" />
      <div className="space-y-10">
        {experience.map((item, i) => (
          <FadeIn key={item.role} delay={i * 0.1} className="relative pl-8 sm:pl-10">
            <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-gold bg-navy-deep sm:h-5 sm:w-5" />
            <p className="font-mono text-xs uppercase tracking-wider text-gold-light">
              {item.period}
            </p>
            <h3 className="mt-2 font-display text-xl text-ink">{item.role}</h3>
            <p className="text-sm text-blue-soft">{item.org}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
              {item.description}
            </p>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
