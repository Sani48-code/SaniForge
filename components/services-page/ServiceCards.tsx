import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/projects/Reveal";
import Heading from "./Heading";
import ServiceIcon from "@/components/services/ServiceIcon";
import { services, type ServiceSlug } from "@/lib/data/services";

export const accents: Record<
  ServiceSlug,
  { card: string; chip: string; text: string; ring: string }
> = {
  copywriting: { card: "bg-white", chip: "bg-sv-soft text-sv-blue", text: "text-sv-blue", ring: "hover:border-sv-blue" },
  "blog-writing": { card: "bg-sv-palegold", chip: "bg-white text-sv-goldtext", text: "text-sv-goldtext", ring: "hover:border-sv-gold" },
  "web-development": { card: "bg-sv-soft", chip: "bg-white text-sv-blue", text: "text-sv-blue", ring: "hover:border-sv-blue" },
  "n8n-automation": { card: "bg-sv-mint", chip: "bg-white text-emerald-700", text: "text-emerald-700", ring: "hover:border-emerald-500" },
  "lead-generation-ghl": { card: "bg-white", chip: "bg-sv-palegold text-sv-goldtext", text: "text-sv-goldtext", ring: "hover:border-sv-gold" },
  "saas-development": { card: "bg-sv-lavender", chip: "bg-white text-violet-700", text: "text-violet-700", ring: "hover:border-violet-500" },
};

export default function ServiceCards() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1240px]">
        <Heading
          eyebrow="Services"
          title="Services Built Around Your Business Needs"
          text="From content and visibility to software and automation, explore the solutions I can help you build."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const a = accents[s.slug];
            return (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/services/${s.slug}`}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-sv-border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-blue ${a.card} ${a.ring}`}
                >
                  <span aria-hidden="true" className={`absolute -right-6 -top-6 flex h-28 w-28 items-end justify-start rounded-full p-6 opacity-60 ${a.chip}`} />
                  <span className={`relative flex h-12 w-12 items-center justify-center rounded-xl shadow-sm transition group-hover:scale-110 ${a.chip}`}>
                    <ServiceIcon name={s.icon} />
                  </span>
                  <h3 className="relative mt-5 font-display text-xl font-bold text-sv-navy">{s.label}</h3>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-sv-slate">{s.description}</p>
                  <span className={`relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${a.text}`}>
                    Explore Service
                    <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
