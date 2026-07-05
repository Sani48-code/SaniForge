"use client";

import Image from "next/image";
import Modal from "@/components/ui/Modal";
import BeforeAfterCompare from "@/components/work/BeforeAfterCompare";
import ResultsChart from "@/components/work/ResultsChart";
import type { CaseStudy } from "@/lib/mdx";

type ModalStudy = CaseStudy & { contentNode: React.ReactNode };

export default function CaseStudyModal({
  study,
  onClose,
}: {
  study: ModalStudy | null;
  onClose: () => void;
}) {
  function handleGetInTouch() {
    onClose();
    window.setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  }

  return (
    <Modal open={!!study} onClose={onClose} labelledBy="case-study-modal-title">
      {study && (
        <article>
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={study.image}
              alt={study.title}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-panel via-navy-panel/10 to-transparent" />
          </div>

          <div className="px-6 pb-10 pt-2 sm:px-10 sm:pb-14">
            <p className="font-mono text-sm uppercase tracking-wider text-gold-light">
              {study.category} &middot; {study.industries.join(" · ")}
            </p>
            <h2
              id="case-study-modal-title"
              className="mt-3 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-5xl text-balance"
            >
              {study.title}
            </h2>
            <p className="mt-4 font-display text-xl italic text-blue-soft">{study.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm uppercase tracking-wider text-ink-faint">
              <span>Service: {study.service}</span>
              <span>Timeline: {study.timeline}</span>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {study.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-navy-border bg-navy-deep/50 p-5 text-center"
                >
                  <div className="font-display text-2xl text-gold-light sm:text-3xl">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-sm text-ink-muted">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <BeforeAfterCompare category={study.category} />
            </div>

            <div className="mt-10">
              <ResultsChart type={study.chartType} label={study.chartLabel} data={study.chartData} />
            </div>

            <div className="mdx-content mt-10 max-w-3xl">{study.contentNode}</div>

            <div className="mt-12 rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center sm:p-10">
              <h3 className="font-display text-2xl text-ink sm:text-3xl">
                Want results like this for your business?
              </h3>
              <div className="mt-6">
                <button
                  onClick={handleGetInTouch}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-base font-medium text-navy-deep shadow-gold-glow transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
                >
                  Book a Call
                </button>
              </div>
            </div>
          </div>
        </article>
      )}
    </Modal>
  );
}
