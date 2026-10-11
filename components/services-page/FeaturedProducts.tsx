import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/projects/Reveal";
import StackChips from "@/components/projects/StackChips";
import Heading from "./Heading";
import { featuredProjects } from "@/lib/data/projects-page";

const bgs = ["bg-white", "bg-sv-soft", "bg-white"];

export default function FeaturedProducts() {
  return (
    <>
      <section className="bg-sv-soft/50 pt-20 sm:pt-28">
        <div className="container-px mx-auto max-w-[1240px] pb-12">
          <Heading
            eyebrow="Featured SaaS Products"
            title="From Ideas to Working Products"
            text="Explore software products and digital solutions I have contributed to building."
          />
        </div>
      </section>
      {featuredProjects.map((p, i) => (
        <section key={p.id} className={`${bgs[i % bgs.length]} py-14 sm:py-20`}>
          <div className="container-px mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="overflow-hidden rounded-2xl border border-sv-border bg-white p-2 shadow-xl shadow-slate-200/70">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  width={1672}
                  height={941}
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="h-auto w-full rounded-xl"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <span className="inline-block rounded-full bg-sv-palegold px-3 py-1 text-xs font-bold text-sv-goldtext">
                {p.category}
              </span>
              <h3 className="mt-4 font-display text-3xl font-extrabold text-sv-navy">{p.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-sv-slate">{p.overview}</p>
              <dl className="mt-5 space-y-4 text-sm leading-relaxed text-sv-slate">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-sv-blue">Problem addressed</dt>
                  <dd className="mt-1">{p.challenge}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-sv-blue">My role</dt>
                  <dd className="mt-1">{p.role}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-sv-blue">Key features</dt>
                  <dd className="mt-1">
                    <ul className="space-y-1.5">
                      {p.solution.slice(0, 4).map((f) => (
                        <li key={f} className="flex gap-2.5">
                          <span className="mt-2 h-1 w-3 shrink-0 rounded bg-sv-gold" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
              <div className="mt-5">
                <StackChips items={p.details.stack} />
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/projects#saas"
                  className="inline-flex items-center gap-2 rounded-xl bg-sv-blue px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-gold"
                >
                  View Case Study <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-sv-border bg-white px-5 py-3 text-sm font-semibold text-sv-navy transition hover:border-sv-gold hover:bg-sv-palegold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-gold"
                  >
                    Visit Live Product <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      ))}
    </>
  );
}
