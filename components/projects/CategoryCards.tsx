import { AppWindow, Boxes, Search, PenLine } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { categories, type Category } from "@/lib/data/projects-page";

const icons: Record<Category["icon"], typeof AppWindow> = {
  app: AppWindow,
  saas: Boxes,
  seo: Search,
  content: PenLine,
};

export default function CategoryCards() {
  return (
    <section className="bg-pf-gray py-20 sm:py-24" aria-labelledby="categories-title">
      <div className="container-px mx-auto max-w-[1240px]">
        <SectionHead
          title="A Look at What I Build"
          text="Different challenges. Thoughtful solutions. Practical digital experiences."
        />
        <h2 id="categories-title" className="sr-only">Work categories</h2>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => {
            const Icon = icons[c.icon];
            return (
              <Reveal key={c.id} delay={i * 0.06}>
                <a
                  href={c.href}
                  className="group block h-full rounded-xl border border-pf-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-pf-gold hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pf-yellow"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-pf-gold/40 text-pf-gold transition group-hover:bg-pf-yellow group-hover:text-pf-navy">
                    <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-pf-navy">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-pf-slate">{c.text}</p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
