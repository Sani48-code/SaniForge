import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/projects/Reveal";
import Heading from "./Heading";
import ServiceIcon from "@/components/services/ServiceIcon";
import { services, type ServiceSlug } from "@/lib/data/services";

/** Asymmetric 6-column layout: each service gets its own light background and width. */
const panel: Record<ServiceSlug, { bg: string; span: string; icon: string; text: string; border: string }> = {
  copywriting: { bg: "bg-jn-pale", span: "lg:col-span-3", icon: "bg-white text-sv-goldtext", text: "text-sv-goldtext", border: "border-jn-gold/40" },
  "blog-writing": { bg: "bg-white", span: "lg:col-span-3", icon: "bg-sv-soft text-sv-blue", text: "text-sv-blue", border: "border-sv-border" },
  "web-development": { bg: "bg-sv-soft", span: "lg:col-span-4", icon: "bg-white text-sv-blue", text: "text-sv-blue", border: "border-sv-blue/20" },
  "n8n-automation": { bg: "bg-sv-mint", span: "lg:col-span-2", icon: "bg-white text-emerald-700", text: "text-emerald-700", border: "border-emerald-600/20" },
  "lead-generation-ghl": { bg: "bg-white", span: "lg:col-span-2", icon: "bg-jn-pale text-sv-goldtext", text: "text-sv-goldtext", border: "border-sv-border" },
  "saas-development": { bg: "bg-sv-lavender", span: "lg:col-span-4", icon: "bg-white text-violet-700", text: "text-violet-700", border: "border-violet-500/20" },
};

export default function ServicePanels() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1240px]">
        <Heading
          eyebrow="Services I Offer"
          title="From Ideas to Working Solutions."
          text="Choose the expertise that fits your business goals. Every service is designed around a clear problem, a practical solution, and a useful outcome."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {services.map((s, i) => {
            const p = panel[s.slug];
            return (
              <Reveal key={s.slug} delay={(i % 2) * 0.06} className={p.span}>
                <Link
                  href={`/services/${s.slug}`}
                  className={`group flex h-full flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-blue sm:p-8 ${p.bg} ${p.border}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm transition group-hover:scale-110 ${p.icon}`}>
                      <ServiceIcon name={s.icon} />
                    </span>
                    <span className="font-mono text-sm font-bold text-sv-slate">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight text-sv-navy">{s.label}</h3>
                  <p className="mt-2.5 text-base leading-relaxed text-jn-body">{s.description}</p>
                  <p className="mt-5 text-xs font-bold uppercase tracking-wider text-sv-navy">What I can deliver</p>
                  <ul className="mt-2 space-y-1.5">
                    {s.offers.slice(0, 3).map((o) => (
                      <li key={o.title} className="flex items-start gap-2 text-sm text-jn-body">
                        <Check size={15} className={`mt-0.5 shrink-0 ${p.text}`} aria-hidden="true" />
                        {o.title}
                      </li>
                    ))}
                  </ul>
                  <span className={`mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold ${p.text}`}>
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
