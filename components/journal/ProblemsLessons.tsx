import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/projects/Reveal";
import { categoryStyle } from "./format";
import type { PostSummary } from "@/lib/mdx";

/** Built only from posts that carry a real `problem` summary; no invented outcomes. */
export default function ProblemsLessons({ posts }: { posts: PostSummary[] }) {
  const items = posts.filter((p) => p.problem).slice(0, 4);
  if (items.length === 0) return null;

  return (
    <section className="bg-sv-mint/70 py-16 sm:py-24">
      <div className="container-px mx-auto max-w-[1240px]">
        <Reveal className="max-w-3xl">
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-emerald-800">
            <span className="h-0.5 w-8 rounded bg-emerald-500" /> From the field
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-sv-navy sm:text-4xl lg:text-5xl text-balance">
            Problems I&apos;ve Solved. Lessons I&apos;ve Learned.
          </h2>
          <p className="mt-4 text-lg text-jn-body">
            Not just what works, but why it works, what went wrong, and what I learned along the way.
          </p>
        </Reveal>

        <ol className="mt-12 space-y-5">
          {items.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 0.05} className="grid gap-5 rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm md:grid-cols-[0.9fr_1.1fr_1.1fr_auto] md:items-start md:gap-8 md:p-7">
                <div>
                  <span className="font-mono text-sm font-bold text-emerald-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`ml-3 rounded-full px-3 py-1 text-xs font-bold ${categoryStyle(p.category)}`}>
                    {p.category}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-extrabold leading-snug text-sv-navy">
                    {p.title}
                  </h3>
                </div>
                <dl className="space-y-3 text-sm leading-relaxed text-jn-body">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-sv-navy">The problem</dt>
                    <dd>{p.problem}</dd>
                  </div>
                  {p.approach && (
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wider text-sv-navy">My approach</dt>
                      <dd>{p.approach}</dd>
                    </div>
                  )}
                </dl>
                <div className="rounded-xl bg-jn-pale p-4 text-sm leading-relaxed text-sv-navy">
                  <p className="text-xs font-bold uppercase tracking-wider text-sv-goldtext">The lesson</p>
                  <p className="mt-1">{p.lesson ?? p.outcome ?? "Read the full article for the takeaway."}</p>
                </div>
                <Link
                  href={`/blog/${p.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-sv-blue underline decoration-jn-gold decoration-2 underline-offset-4 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-blue md:self-end"
                >
                  Read full article <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
