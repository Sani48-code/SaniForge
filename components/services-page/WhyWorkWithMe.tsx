import Reveal from "@/components/projects/Reveal";

const hl = "rounded bg-jn-gold/40 px-1 font-semibold text-sv-navy";
const hb = "font-semibold text-sv-blue";

function Visual({ kind }: { kind: "mindset" | "business" | "end" | "auto" }) {
  const box = "rounded-xl bg-white p-4 shadow-sm ring-1 ring-sv-border";
  if (kind === "mindset")
    return (
      <div className={`${box} flex items-center gap-1.5`} aria-hidden="true">
        {["bg-sv-blue", "bg-jn-gold", "bg-emerald-400"].map((c, i) => (
          <span key={c} className="flex items-center gap-1.5">
            <span className={`h-9 w-9 rounded-lg ${c}`} />
            {i < 2 && <span className="h-0.5 w-4 bg-sv-navy/30" />}
          </span>
        ))}
        <span className="ml-2 font-mono text-[11px] text-sv-slate">parts → system</span>
      </div>
    );
  if (kind === "business")
    return (
      <div className={`${box} flex items-center gap-2 font-mono text-[11px] font-bold`} aria-hidden="true">
        <span className="rounded-md bg-jn-pale px-2 py-1 text-sv-goldtext">Goal</span>
        <span className="text-sv-slate">→</span>
        <span className="rounded-md bg-sv-soft px-2 py-1 text-sv-blue">Solution</span>
        <span className="text-sv-slate">→</span>
        <span className="rounded-md bg-sv-mint px-2 py-1 text-emerald-700">Result</span>
      </div>
    );
  if (kind === "end")
    return (
      <div className={`${box} space-y-1.5 font-mono text-[11px] font-bold`} aria-hidden="true">
        {[["UI", "bg-sv-soft text-sv-blue w-full"], ["Logic + API", "bg-jn-pale text-sv-goldtext w-[85%]"], ["Database", "bg-sv-lavender text-violet-700 w-[70%]"]].map(([t, c]) => (
          <div key={t} className={`rounded-md px-2 py-1 ${c}`}>{t}</div>
        ))}
      </div>
    );
  return (
    <div className={`${box} flex items-center gap-2 font-mono text-[11px] font-bold`} aria-hidden="true">
      <span className="rounded-md bg-sv-slate/10 px-2 py-1 text-sv-slate">Repeat</span>
      <span className="text-sv-slate">→</span>
      <span className="rounded-md bg-sv-blue px-2 py-1 text-white">n8n</span>
      <span className="text-sv-slate">→</span>
      <span className="rounded-md bg-sv-mint px-2 py-1 text-emerald-700">Done</span>
    </div>
  );
}

export default function WhyWorkWithMe() {
  return (
    <section className="relative overflow-hidden bg-sv-soft py-20 sm:py-28">
      <span aria-hidden="true" className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-white/70" />
      <div className="container-px relative mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sv-goldtext">
            <span className="h-0.5 w-6 rounded bg-jn-gold" /> Why work with me
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-sv-navy sm:text-5xl xl:text-6xl">
            More Than Execution. A{" "}
            <span className="text-sv-blue">Problem-Solving</span> Mindset.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-jn-body">
            I look beyond the immediate task to understand the problem, the system behind
            it, and the solution that makes the most sense.
          </p>
        </Reveal>

        <div className="space-y-6">
          {[
            {
              n: "01",
              title: "Engineering Mindset",
              body: (<>I approach projects by understanding <span className={hl}>how the pieces fit together</span>, identifying underlying problems, and choosing <span className={hb}>practical technical solutions</span>.</>),
              kind: "mindset" as const,
              offset: "",
            },
            {
              n: "02",
              title: "Business-First Thinking",
              body: (<>I connect technical implementation, content, and automation with the <span className={hl}>actual objectives of the business</span>.</>),
              kind: "business" as const,
              offset: "lg:ml-10",
            },
            {
              n: "03",
              title: "End-to-End Understanding",
              body: (<>I consider the <span className={hb}>complete solution</span>, from the user interface and application logic to <span className={hl}>databases, APIs, integrations, and delivery</span>.</>),
              kind: "end" as const,
              offset: "",
            },
            {
              n: "04",
              title: "Practical Automation",
              body: (<>I look for <span className={hl}>repetitive processes</span> and opportunities to <span className={hb}>simplify workflows</span> through thoughtful automation.</>),
              kind: "auto" as const,
              offset: "lg:ml-10",
            },
          ].map((b, i) => (
            <Reveal key={b.n} delay={i * 0.06} className={b.offset}>
              <div className="grid gap-5 rounded-3xl bg-white/70 p-6 ring-1 ring-sv-border backdrop-blur sm:grid-cols-[auto_1fr] sm:p-8">
                <span className="font-display text-5xl font-extrabold leading-none text-sv-blue sm:text-6xl">{b.n}</span>
                <div>
                  <h3 className="font-display text-2xl font-extrabold text-sv-navy">{b.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-jn-body">{b.body}</p>
                  <div className="mt-4"><Visual kind={b.kind} /></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
