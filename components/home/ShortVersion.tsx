import Link from "next/link";
import { Layers, Scale, BarChart3, Rocket, CalendarCheck } from "lucide-react";
import { site } from "@/lib/data/site";

/**
 * "The short version": key takeaways right after the hero.
 * Every figure is taken from a published case study or an existing service FAQ.
 */
const points = [
  {
    icon: Layers,
    title: "One person, three skills.",
    text: "Developer, SEO writer and automation engineer in one, so nothing gets lost in handoffs between vendors.",
  },
  {
    icon: Scale,
    title: "Built for local and legal.",
    text: "Most of my work is for law firms, home service companies and real estate teams across the US.",
  },
  {
    icon: BarChart3,
    title: "Proof, not promises.",
    text: "Case studies show real numbers, like first response cut from 6.5 hours to under 2 minutes.",
    href: "/case-studies/lead-automation-pipeline",
    linkText: "See the lead automation case study",
  },
  {
    icon: Rocket,
    title: "Fast launch.",
    text: "Focused business sites ship in 2 to 4 weeks. The local service redesign loads in under 2 seconds on mobile.",
    href: "/case-studies/local-service-website-redesign",
    linkText: "See the redesign case study",
  },
  {
    icon: CalendarCheck,
    title: "Free first step.",
    text: "A 30-minute technical audit of your site and lead flow, with no obligation.",
    href: site.bookCallLink,
    linkText: "Book the free audit",
  },
];

export default function ShortVersion() {
  return (
    <section aria-labelledby="short-version-title" className="border-t border-slate-200/70 bg-white py-14 sm:py-16">
      <div className="container-px mx-auto max-w-[1240px]">
        <h2 id="short-version-title" className="font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          The short version
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {points.map((p) => (
            <li key={p.title} className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-700">
                <p.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                <strong className="block font-semibold text-slate-900">{p.title}</strong>
                {p.text}
              </p>
              {p.href && (
                <Link href={p.href} className="mt-auto pt-3 text-sm font-semibold text-blue-700 hover:text-blue-900">
                  {p.linkText} →
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
