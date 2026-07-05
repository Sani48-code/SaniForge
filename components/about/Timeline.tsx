import FadeIn from "@/components/motion/FadeIn";
import { experience } from "@/lib/data/experience";
import { site } from "@/lib/data/site";

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-navy-border sm:left-[9px]" />
      <div className="space-y-10">
        {experience.map((item, i) => (
          <FadeIn key={item.role} delay={i * 0.1} className="relative pl-8 sm:pl-10">
            <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-gold bg-navy-deep sm:h-5 sm:w-5" />
            <p className="font-mono text-sm uppercase tracking-wider text-gold-light">
              {item.period}
            </p>
            <h3 className="mt-2 font-display text-2xl text-ink">{item.role}</h3>
            <p className="text-base text-blue-soft">
              {item.org === "GrowMinion" ? (
                <a
                  href={site.growminionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-light hover:underline"
                >
                  {item.org}
                </a>
              ) : (
                item.org
              )}
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
              {item.description}
            </p>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
