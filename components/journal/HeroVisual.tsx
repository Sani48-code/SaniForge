import Image from "next/image";
import { categoryStyle } from "./format";
import type { PostSummary } from "@/lib/mdx";

/** Illustrative composition: real article preview plus small technical cards. */
export default function HeroVisual({ post }: { post?: PostSummary }) {
  return (
    <div className="relative mx-auto aspect-[6/5] w-full max-w-[600px]" aria-hidden={post ? undefined : true}>
      {/* soft shapes */}
      <span aria-hidden="true" className="absolute left-[8%] top-[6%] h-[62%] w-[62%] rounded-full bg-jn-blue" />
      <span aria-hidden="true" className="absolute bottom-[4%] right-[2%] h-[46%] w-[46%] rounded-full bg-jn-pale" />
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(#2563EB22 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
        }}
      />

      {/* A: latest article preview (real data) */}
      {post && (
        <div className="absolute left-0 top-[4%] w-[62%] overflow-hidden rounded-2xl border border-sv-border bg-white shadow-xl shadow-slate-300/50">
          <div className="relative aspect-[16/9] w-full bg-jn-blue">
            {post.image && (
              <Image src={post.image} alt="" fill sizes="(max-width: 1024px) 60vw, 360px" priority className="object-cover" />
            )}
          </div>
          <div className="p-3 sm:p-4">
            <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold sm:text-[11px] ${categoryStyle(post.category)}`}>
              {post.category}
            </span>
            <p className="mt-2 line-clamp-2 font-display text-xs font-bold leading-snug text-sv-navy sm:text-sm">
              {post.title}
            </p>
          </div>
        </div>
      )}

      {/* B: performance chart */}
      <div className="absolute right-0 top-[22%] w-[44%] rounded-2xl border border-sv-border bg-white p-3 shadow-lg shadow-slate-300/40 sm:p-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-sv-slate sm:text-[11px]">Core Web Vitals</p>
        <div className="mt-2 flex items-end gap-2">
          {[["LCP", "h-10 bg-sv-blue"], ["INP", "h-7 bg-jn-gold"], ["CLS", "h-12 bg-emerald-400"]].map(([l, c]) => (
            <div key={l} className="flex flex-1 flex-col items-center gap-1">
              <span className={`w-full rounded-t ${c}`} />
              <span className="text-[9px] font-semibold text-sv-slate">{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* C: workflow diagram */}
      <div className="absolute bottom-[8%] left-[4%] hidden w-[50%] rounded-2xl border border-sv-border bg-white p-4 shadow-lg shadow-slate-300/40 sm:block">
        <p className="text-[11px] font-bold uppercase tracking-wider text-sv-slate">Automation workflow</p>
        <div className="mt-3 flex items-center gap-1.5">
          {["Form", "n8n", "CRM"].map((n, i) => (
            <div key={n} className="flex flex-1 items-center gap-1.5">
              <span className={`flex-1 rounded-lg px-2 py-1.5 text-center text-[11px] font-bold ${i === 1 ? "bg-sv-blue text-white" : "bg-sv-soft text-sv-navy"}`}>
                {n}
              </span>
              {i < 2 && <span className="text-sv-goldtext">→</span>}
            </div>
          ))}
        </div>
      </div>

      {/* D: code card */}
      <div className="absolute bottom-0 right-[4%] hidden w-[40%] rounded-2xl border border-sv-border bg-sv-lavender p-4 shadow-lg shadow-slate-300/40 sm:block">
        <p className="font-mono text-[11px] leading-relaxed text-violet-800">
          <span className="text-sv-slate">{"// ship, measure, learn"}</span>
          <br />
          audit(site);
          <br />
          fix(bottleneck);
        </p>
      </div>

      {/* handwritten note */}
      <p className="absolute right-[2%] top-0 hidden -rotate-3 font-display text-sm italic text-sv-goldtext sm:block">
        notes from real work
      </p>
    </div>
  );
}
