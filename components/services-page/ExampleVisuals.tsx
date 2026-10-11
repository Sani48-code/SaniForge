/**
 * Illustrative example graphics. They show what the tools look like and carry no real data or numbers.
 */

export function SearchConsoleExample() {
  const metrics = [
    { label: "Total clicks", bar: "bg-sv-blue", on: true },
    { label: "Impressions", bar: "bg-violet-500", on: true },
    { label: "Average CTR", bar: "bg-emerald-500", on: false },
    { label: "Average position", bar: "bg-jn-gold", on: false },
  ];
  return (
    <figure className="rounded-2xl bg-white p-3 shadow-xl ring-1 ring-sv-border sm:p-4" aria-label="Example of a Search Console performance report">
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-sv-soft text-[11px] font-black text-sv-blue">G</span>
        <p className="text-[11px] font-bold text-sv-navy sm:text-xs">Search Console · Performance</p>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-1.5">
        {metrics.map((m) => (
          <div key={m.label} className={`rounded-lg border px-2 py-1.5 ${m.on ? "border-sv-blue/30 bg-sv-soft" : "border-sv-border bg-white"}`}>
            <p className="text-[9px] font-semibold text-sv-slate sm:text-[10px]">{m.label}</p>
            <span className={`mt-1 block h-1.5 w-8 rounded ${m.bar}`} />
          </div>
        ))}
      </div>
      <svg viewBox="0 0 240 80" className="mt-2 h-auto w-full" role="img" aria-label="Clicks and impressions trending upward">
        <line x1="0" y1="70" x2="240" y2="70" stroke="#DFE7F1" />
        <line x1="0" y1="40" x2="240" y2="40" stroke="#DFE7F1" strokeDasharray="3 3" />
        <polyline points="0,62 30,58 60,60 90,48 120,50 150,36 180,30 210,22 240,14" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
        <polyline points="0,66 30,64 60,62 90,56 120,52 150,46 180,38 210,34 240,26" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <figcaption className="mt-1 text-[10px] text-sv-slate">Illustrative example of rankings and clicks rising over time. Not real data.</figcaption>
    </figure>
  );
}

export function PipelineExample() {
  const cols = [
    { name: "New lead", tone: "bg-sv-soft text-sv-blue", cards: 2 },
    { name: "Contacted", tone: "bg-jn-pale text-sv-goldtext", cards: 2 },
    { name: "Booked", tone: "bg-sv-mint text-emerald-700", cards: 1 },
    { name: "Won", tone: "bg-sv-lavender text-violet-700", cards: 1 },
  ];
  return (
    <figure className="rounded-2xl bg-white p-3 shadow-xl ring-1 ring-sv-border sm:p-4" aria-label="Example of a CRM pipeline board">
      <p className="text-[11px] font-bold text-sv-navy sm:text-xs">Sales pipeline · Example</p>
      <div className="mt-2 grid grid-cols-4 gap-1.5">
        {cols.map((c) => (
          <div key={c.name}>
            <p className={`rounded-md px-1 py-1 text-center text-[8px] font-bold sm:text-[10px] ${c.tone}`}>{c.name}</p>
            <div className="mt-1.5 space-y-1.5">
              {Array.from({ length: c.cards }).map((_, i) => (
                <div key={i} className="rounded-md border border-sv-border bg-white p-1.5">
                  <span className="block h-1.5 w-full rounded bg-sv-navy/15" />
                  <span className="mt-1 block h-1.5 w-2/3 rounded bg-sv-navy/10" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-1.5 rounded-md bg-sv-mint px-2 py-1 text-[9px] font-bold text-emerald-800 sm:text-[10px]">
        <span aria-hidden="true">⚡</span> Instant reply sent
      </div>
      <figcaption className="mt-1 text-[10px] text-sv-slate">Example layout of a lead pipeline. No real data.</figcaption>
    </figure>
  );
}
