import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/projects/Reveal";
import BrowserShot from "@/components/projects/BrowserShot";
import Heading from "./Heading";
import { conceptProjects } from "@/lib/data/projects-page";

export default function AppsShowcase() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1240px]">
        <Heading
          eyebrow="Web Applications"
          title="Practical Applications for Real-World Needs"
          text="Web applications and websites I designed and built, each solving a practical problem."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {conceptProjects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.08}>
              <article className="group flex h-full flex-col rounded-2xl border border-sv-border bg-sv-soft/40 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                <BrowserShot src={p.image} url={p.url} title={p.title} />
                <div className="mt-5 flex flex-1 flex-col">
                  <span className="w-fit rounded-full bg-sv-palegold px-3 py-1 text-xs font-bold text-sv-goldtext">
                    {p.industry}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-sv-navy">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-sv-slate">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-sv-blue underline decoration-sv-gold decoration-2 underline-offset-4 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-gold"
                    >
                      View Project <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                    <Link href="/projects#concepts" className="text-sm font-semibold text-sv-slate hover:text-sv-navy">
                      Learn More
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
