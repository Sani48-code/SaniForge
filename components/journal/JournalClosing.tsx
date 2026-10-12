import { Phone } from "lucide-react";
import Reveal from "@/components/projects/Reveal";
import { site } from "@/lib/data/site";

export function ApproachSection() {
  return (
    <section className="relative overflow-hidden bg-sv-lavender py-16 sm:py-24">
      <span aria-hidden="true" className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-white/60" />
      <div className="container-px relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-700">About my approach</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-sv-navy sm:text-5xl text-balance">
            Built in Practice. Shared with Purpose.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-jn-body">
            Every project comes with its own challenges, trade-offs, and lessons. This
            journal documents the thinking behind the solutions, the mistakes worth
            learning from, and the ideas that can help others build better systems.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function JournalCta() {
  return (
    <section className="bg-jn-pale py-16 sm:py-24">
      <div className="container-px mx-auto max-w-[1240px]">
        <Reveal>
          <div className="rounded-3xl border border-jn-gold/40 bg-white px-6 py-14 text-center shadow-xl shadow-amber-900/10 sm:px-12">
            <h2 className="font-display text-3xl font-extrabold text-sv-navy sm:text-5xl text-balance">
              Building Something Interesting?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-jn-body">
              Have a technical challenge, an automation idea, or a project in mind? Let&apos;s talk.
            </p>
            <a
              href={site.bookCallLink}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sv-blue px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jn-gold"
            >
              <Phone size={18} aria-hidden="true" /> Let&apos;s Work Together
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
