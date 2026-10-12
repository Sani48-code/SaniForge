import Reveal from "./Reveal";
import { site } from "@/lib/data/site";

export default function ProjectsCta() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-px mx-auto max-w-[1240px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-pf-navy px-6 py-16 text-center sm:px-12">
            <span aria-hidden="true" className="absolute left-8 top-8 h-2 w-16 rounded bg-pf-yellow" />
            <span aria-hidden="true" className="absolute bottom-8 right-8 h-20 w-20 rounded-full border-2 border-pf-gold/40" />
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-white sm:text-5xl text-balance">
              Have a Business Challenge in Mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Let&apos;s discuss your idea and explore a digital solution that fits your goals.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={site.bookCallLink}
                className="inline-flex items-center justify-center rounded-lg bg-pf-yellow px-7 py-3.5 text-base font-semibold text-pf-navy transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start a Project
              </a>
              <a
                href={site.mailtoLink}
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/60 px-7 py-3.5 text-base font-semibold text-white transition hover:border-pf-yellow hover:text-pf-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Me
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
