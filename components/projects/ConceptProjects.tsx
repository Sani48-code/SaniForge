import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import BrowserShot from "./BrowserShot";
import { conceptProjects } from "@/lib/data/projects-page";

export default function ConceptProjects() {
  return (
    <section id="concepts" className="scroll-mt-24 bg-pf-gray py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1240px]">
        <SectionHead
          eyebrow="Web Applications"
          title="Designing Solutions for Everyday Problems"
          text="Web applications and websites I designed and built, each one solving a practical problem for a different industry."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {conceptProjects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.08}>
              <article className="group flex h-full flex-col rounded-2xl border border-pf-border bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <BrowserShot src={p.image} url={p.url} title={p.title} />
                <div className="mt-5 flex flex-1 flex-col">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-pf-yellow px-3 py-1 text-xs font-semibold text-pf-navy">
                      {p.industry}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-pf-navy">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-pf-slate">{p.description}</p>
                  <dl className="mt-4 space-y-2 text-sm text-pf-slate">
                    <div>
                      <dt className="inline font-semibold text-pf-navy">Problem: </dt>
                      <dd className="inline">{p.problem}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold text-pf-navy">Solution: </dt>
                      <dd className="inline">{p.solution}</dd>
                    </div>
                  </dl>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-pf-navy underline decoration-pf-yellow decoration-2 underline-offset-4 hover:text-sv-goldtext focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pf-yellow"
                  >
                    View Live Site <ArrowUpRight size={14} />
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
