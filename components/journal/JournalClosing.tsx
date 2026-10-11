import { Phone } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import { site } from "@/lib/data/site";

export function ApproachSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-px mx-auto max-w-3xl text-center">
        <FadeIn>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-gold-light">
            About my approach
          </p>
          <h2 className="font-display text-3xl font-medium text-ink sm:text-5xl text-balance">
            Built in Practice, Shared with Purpose.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Every project comes with its own challenges, trade-offs, and lessons. This
            journal documents the thinking behind the solutions, the mistakes worth
            learning from, and the ideas that can help others build better systems.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export function JournalCta() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="container-px mx-auto max-w-content">
        <FadeIn>
          <div className="rounded-3xl border border-gold/30 bg-navy-panel/60 px-6 py-14 text-center shadow-gold-glow sm:px-12">
            <h2 className="font-display text-3xl font-medium text-ink sm:text-5xl text-balance">
              Building Something Interesting?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-muted">
              Have a technical challenge, an automation idea, or a project in mind?
              Let&apos;s talk.
            </p>
            <a
              href={site.bookCallLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-lg font-semibold text-navy-deep transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
            >
              <Phone size={18} aria-hidden="true" /> Let&apos;s Work Together
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
