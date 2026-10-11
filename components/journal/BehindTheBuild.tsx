import Link from "next/link";
import { Cog, Workflow, Search } from "lucide-react";
import Reveal from "@/components/projects/Reveal";
import type { BlogCategory } from "@/lib/blog-categories";
import type { PostSummary } from "@/lib/mdx";

const blocks: {
  title: string;
  text: string;
  icon: typeof Cog;
  categories: BlogCategory[];
  bg: string;
  accent: string;
}[] = [
  {
    title: "Engineering Decisions",
    text: "Why I choose certain frameworks and how I weigh speed, maintainability and trade-offs.",
    icon: Cog,
    categories: ["Web Development", "SaaS & Systems", "Engineering Lessons"],
    bg: "bg-sv-soft",
    accent: "text-sv-blue",
  },
  {
    title: "Automation Experiments",
    text: "Workflows I build to remove repetitive work, and what I learn from running them.",
    icon: Workflow,
    categories: ["Automation"],
    bg: "bg-sv-mint",
    accent: "text-emerald-700",
  },
  {
    title: "SEO & Content Learnings",
    text: "What I have learned about writing content that is built to rank and to convert.",
    icon: Search,
    categories: ["SEO & Content"],
    bg: "bg-jn-pale",
    accent: "text-sv-goldtext",
  },
];

export default function BehindTheBuild({ posts }: { posts: PostSummary[] }) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-px mx-auto max-w-[1240px]">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-sv-goldtext">
            <span className="h-0.5 w-8 rounded bg-jn-gold" /> Behind the build
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-sv-navy sm:text-4xl lg:text-5xl">
            Behind the Build
          </h2>
          <p className="mt-4 text-lg text-jn-body">
            Every project involves decisions, trade-offs, experiments, and lessons worth sharing.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {blocks.map(({ title, text, icon: Icon, categories, bg, accent }, i) => {
            const links = posts.filter((p) => categories.includes(p.category)).slice(0, 3);
            return (
              <Reveal key={title} delay={i * 0.07}>
                <div className={`flex h-full flex-col rounded-2xl border border-sv-border p-7 ${bg}`}>
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm ${accent}`}>
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-extrabold text-sv-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-jn-body">{text}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-sv-navy/10 pt-5">
                    {links.length === 0 ? (
                      <li className="text-sm text-jn-body">Articles on this theme are coming soon.</li>
                    ) : (
                      links.map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/blog/${p.slug}`}
                            className={`text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-blue ${accent}`}
                          >
                            {p.title}
                          </Link>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
