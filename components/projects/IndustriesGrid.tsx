import Image from "next/image";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { industries } from "@/lib/data/projects-page";

export default function IndustriesGrid() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1240px]">
        <SectionHead
          eyebrow="Industries"
          title="Industries I Work With"
          text="Each card shows a common business challenge. The label tells you whether it is backed by a project on this page or is part of my broader service scope."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => {
            return (
            <Reveal key={ind.title} delay={(i % 4) * 0.05}>
              <div className="h-full overflow-hidden rounded-xl border border-pf-border bg-white transition duration-300 hover:-translate-y-1 hover:border-pf-gold hover:shadow-md">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                <span
                  className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                    ind.basis === "demonstrated"
                      ? "bg-pf-navy text-white"
                      : "border border-pf-gold text-pf-navy"
                  }`}
                >
                  {ind.basis === "demonstrated" ? "Project on this page" : "Service capability"}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-pf-navy">{ind.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-pf-slate">
                  <span className="font-semibold text-pf-navy">Challenge: </span>
                  {ind.challenge}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-pf-slate">
                  <span className="font-semibold text-pf-navy">How I help: </span>
                  {ind.help}
                </p>
                </div>
              </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
