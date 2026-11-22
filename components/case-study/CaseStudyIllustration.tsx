/**
 * Product-style illustrations for case study pages. Every screen is drawn with sample data
 * (no client names or real account figures) and is labeled as such where it is shown.
 */
import type { ReactNode } from "react";
import type { IllustrationKind } from "@/lib/data/case-study-stories";

function BrowserFrame({ url, children, className = "" }: { url: string; children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-slate-300/80 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.10)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 flex-1 max-w-xs truncate rounded-md border border-slate-200 bg-white px-2.5 py-0.5 font-mono text-[11px] text-slate-500">
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}

function PhoneFrame({ label, tone, children }: { label: string; tone: "before" | "after"; children: ReactNode }) {
  return (
    <figure className="flex flex-col items-center gap-3">
      <span
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
          tone === "before" ? "bg-rose-50 text-rose-700 border border-rose-200" : "bg-emerald-50 text-emerald-700 border border-emerald-200"
        }`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${tone === "before" ? "bg-rose-500" : "bg-emerald-500"}`} />
        {label}
      </span>
      <div className="w-[260px] rounded-[2.2rem] border-[10px] border-slate-900 bg-slate-900 shadow-2xl">
        <div className="relative h-[500px] overflow-hidden rounded-[1.6rem] bg-white">
          <div className="absolute left-1/2 top-1.5 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-slate-900" />
          {children}
        </div>
      </div>
    </figure>
  );
}

function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold ${className}`}>{children}</span>;
}

/* ---------------------------------------------------------------- AI content pipeline */

function ContentPipeline() {
  const nodes = [
    { t: "Form trigger", s: "New topic in queue", c: "bg-slate-800" },
    { t: "Research agent", s: "Facts & sources", c: "bg-[#0B63E5]" },
    { t: "Outline", s: "Structured H2s", c: "bg-[#0B63E5]" },
    { t: "AI draft", s: "Legal prompt template", c: "bg-indigo-600" },
    { t: "Format + image", s: "Matched featured image", c: "bg-violet-600" },
    { t: "WordPress", s: "Draft for review", c: "bg-emerald-600" },
  ];
  const activity = [
    { t: "How to Register a Trademark in the US", s: "Published", c: "bg-emerald-100 text-emerald-700" },
    { t: "Understanding Copyright Fair Use", s: "Published", c: "bg-emerald-100 text-emerald-700" },
    { t: "What is Intellectual Property?", s: "In review", c: "bg-amber-100 text-amber-800" },
    { t: "The DMCA Takedown Process, Step by Step", s: "Drafting", c: "bg-blue-100 text-blue-700" },
  ];
  return (
    <div className="space-y-6">
      <BrowserFrame url="n8n.example.com/workflow/legal-content">
        <div className="overflow-x-auto">
          <div className="min-w-[860px] bg-[radial-gradient(#d9dee7_1px,transparent_1.2px)] [background-size:18px_18px] bg-slate-50 p-6">
            <div className="flex items-center">
              {nodes.map((n, i) => (
                <div key={n.t} className="flex items-center">
                  <div className="w-[118px] rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm">
                    <div className={`mb-2 h-7 w-7 rounded-lg ${n.c}`} />
                    <div className="text-xs font-bold text-slate-900">{n.t}</div>
                    <div className="text-[10px] text-slate-500 leading-tight mt-0.5">{n.s}</div>
                  </div>
                  {i < nodes.length - 1 && <div className="mx-1 h-0.5 w-5 bg-slate-300" />}
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Workflow active · runs on every new topic in the queue
            </div>
          </div>
        </div>
      </BrowserFrame>

      <BrowserFrame url="content-dashboard.example.com">
        <div className="overflow-x-auto">
          <div className="grid min-w-[760px] grid-cols-[150px_1fr]">
            <div className="bg-[#0F172A] p-3 text-[11px] text-slate-400">
              <div className="mb-4 flex items-center gap-2 text-xs font-bold text-white">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#F59E0B] text-[9px] text-slate-900">C</span>
                Content Hub
              </div>
              {["Dashboard", "Content queue", "Pipeline", "Published", "Settings"].map((x, i) => (
                <div key={x} className={`mb-0.5 rounded-md px-2 py-1.5 ${i === 0 ? "bg-white/10 text-[#F59E0B]" : ""}`}>
                  {x}
                </div>
              ))}
            </div>
            <div className="bg-slate-50 p-4">
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  ["Articles published", "89", "First month"],
                  ["Time saved", "24h", "Per batch"],
                  ["Success rate", "98%", "Draft to publish"],
                ].map(([l, v, s]) => (
                  <div key={l} className="rounded-lg border border-slate-200 bg-white p-2.5">
                    <div className="text-[10px] text-slate-500">{l}</div>
                    <div className="text-lg font-extrabold text-slate-900">{v}</div>
                    <div className="text-[10px] text-emerald-600">{s}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-lg border border-slate-200 bg-white p-3">
                <div className="mb-2 text-[11px] font-bold text-slate-900">Pipeline</div>
                <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-semibold">
                  {["Generate", "Optimize", "Review", "Publish"].map((s, i) => (
                    <div key={s} className={`rounded-md py-1.5 ${i === 3 ? "bg-emerald-500 text-white" : i === 2 ? "bg-amber-400 text-slate-900" : "bg-[#0B63E5] text-white"}`}>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3 rounded-lg border border-slate-200 bg-white p-3">
                <div className="mb-2 text-[11px] font-bold text-slate-900">Recent activity</div>
                {activity.map((a) => (
                  <div key={a.t} className="flex items-center justify-between border-t border-slate-100 py-1.5 text-[11px] first:border-0">
                    <span className="text-slate-700">{a.t}</span>
                    <Pill className={a.c}>{a.s}</Pill>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BrowserFrame>
    </div>
  );
}

/* ---------------------------------------------------------------- Law firm SERP + page outline */

function SerpAndPage() {
  const outline = [
    { t: "H1 · Divorce attorney in [City] who puts your family first", n: "situation + location", c: "bg-[#0F172A] text-white border-[#0F172A]" },
    { t: "Intro · names the reader's situation in two sentences", n: "client-first", c: "bg-blue-50 text-blue-900 border-blue-200" },
    { t: "H2 · What happens in a [City] divorce, step by step", n: "real attorney answers", c: "bg-emerald-50 text-emerald-900 border-emerald-200" },
    { t: "H2 · Serving families across [City] and [Region]", n: "local signals", c: "bg-violet-50 text-violet-900 border-violet-200" },
    { t: "FAQ · 6 questions clients ask in consultations", n: "FAQPage schema", c: "bg-amber-50 text-amber-900 border-amber-200" },
    { t: "CTA · Schedule a Free 15-Minute Consultation", n: "low-commitment step", c: "bg-[#F59E0B] text-slate-900 border-amber-500" },
  ];
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <BrowserFrame url="google.com/search?q=family+law+attorney+near+me">
        <div className="space-y-4 p-5 text-left">
          <div className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm">family law attorney near me</div>
          <div className="text-[11px] text-slate-500">Sample search result</div>
          <div className="rounded-xl border-2 border-[#0B63E5]/40 bg-blue-50/40 p-3">
            <div className="flex items-center gap-2 text-[11px] text-slate-600">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-slate-200 text-[9px] font-bold">SL</span>
              samplelawgroup.com › family-law
              <Pill className="ml-auto bg-[#0B63E5] text-white">#1</Pill>
            </div>
            <div className="mt-1 text-[15px] font-semibold text-[#1a0dab]">Family Law Attorney in [City] | Free 15-Minute Consultation</div>
            <p className="mt-1 text-xs text-slate-600">Going through a divorce or custody dispute? Our [City] family lawyers explain your options in plain language...</p>
            <div className="mt-2 space-y-1">
              {["How long does a divorce take in [State]?", "How is child custody decided?", "Do I need a lawyer for an uncontested divorce?"].map((q) => (
                <div key={q} className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] text-slate-700">
                  {q} <span className="text-slate-400">⌄</span>
                </div>
              ))}
            </div>
          </div>
          {[2, 3].map((n) => (
            <div key={n} className="rounded-xl p-3 opacity-60">
              <div className="h-2.5 w-40 rounded bg-slate-200" />
              <div className="mt-2 h-3 w-64 rounded bg-blue-200" />
              <div className="mt-2 h-2 w-full rounded bg-slate-100" />
            </div>
          ))}
        </div>
      </BrowserFrame>

      <BrowserFrame url="samplelawgroup.com/family-law">
        <div className="p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900">Page outline</span>
            <Pill className="bg-slate-100 text-slate-600">1,200 to 1,800 words</Pill>
          </div>
          <div className="space-y-2">
            {outline.map((o) => (
              <div key={o.t} className={`rounded-lg border px-3 py-2 text-xs font-semibold ${o.c}`}>
                {o.t}
                <span className="ml-2 font-normal opacity-70">{o.n}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-3 font-mono text-[10.5px] leading-relaxed text-slate-600">
            {'{ "@type": ["Attorney", "LegalService"], "areaServed": "[City], [Region]" }'}
            <br />
            {'{ "@type": "FAQPage", "mainEntity": [ 6 questions ] }'}
          </div>
        </div>
      </BrowserFrame>
    </div>
  );
}

/* ---------------------------------------------------------------- Lead automation flow + CRM */

function LeadFlow() {
  const sources = ["Web forms", "Ad platform", "Chat widget", "Email"];
  const leads = [
    { n: "J. Carter", src: "Web form", svc: "Consulting", rep: "Rep A", t: "1m 08s" },
    { n: "M. Alvarez", src: "Ad platform", svc: "Onboarding", rep: "Rep C", t: "0m 54s" },
    { n: "R. Singh", src: "Chat widget", svc: "Consulting", rep: "Rep B", t: "1m 31s" },
    { n: "L. Chen", src: "Email", svc: "Support plan", rep: "Rep A", t: "1m 12s" },
  ];
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          <div className="space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Sources</div>
            {sources.map((s) => (
              <div key={s} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                {s}
              </div>
            ))}
          </div>
          <div className="hidden text-2xl text-slate-300 md:block">→</div>
          <div className="rounded-2xl bg-[#0F172A] p-4 text-center text-white shadow-lg">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#F59E0B]">Automation hub</div>
            <div className="mt-3 space-y-2 text-left text-xs">
              {["Webhook intake", "Duplicate check vs CRM", "Firmographic enrichment", "Route: service · territory · workload"].map((x) => (
                <div key={x} className="rounded-md bg-white/10 px-2.5 py-1.5">✓ {x}</div>
              ))}
            </div>
          </div>
          <div className="hidden text-2xl text-slate-300 md:block">→</div>
          <div className="space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Within 2 minutes</div>
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800">Personalized confirmation email</div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-800">Real-time alert to assigned rep</div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">Lead logged in CRM, tagged</div>
          </div>
        </div>
      </div>

      <BrowserFrame url="crm.example.com/leads">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-xs">
            <thead className="bg-slate-50 text-[10.5px] uppercase tracking-wider text-slate-500">
              <tr>
                {["Lead", "Source", "Service", "Assigned to", "First response", "Status"].map((h) => (
                  <th key={h} className="px-4 py-2.5 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leads.map((l) => (
                <tr key={l.n} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-slate-900">{l.n}</td>
                  <td className="px-4 py-2.5 text-slate-600">{l.src}</td>
                  <td className="px-4 py-2.5 text-slate-600">{l.svc}</td>
                  <td className="px-4 py-2.5 text-slate-600">{l.rep}</td>
                  <td className="px-4 py-2.5 font-mono text-emerald-700">{l.t}</td>
                  <td className="px-4 py-2.5"><Pill className="bg-emerald-100 text-emerald-700">Auto-routed</Pill></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </BrowserFrame>
    </div>
  );
}

/* ---------------------------------------------------------------- Mobile before / after */

function MobileBeforeAfter() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-10">
      <PhoneFrame label="Before · 6.2s load" tone="before">
        <div className="flex h-full flex-col bg-slate-100 pt-7 text-slate-700">
          <div className="flex items-center justify-between bg-slate-700 px-3 py-2.5 text-white">
            <span className="text-xs font-bold">Restoration Co.</span>
            <span className="text-lg leading-none">≡</span>
          </div>
          <div className="mx-3 mt-3 h-24 rounded bg-slate-300" />
          <div className="mx-3 mt-3 space-y-1.5">
            <div className="h-2.5 w-4/5 rounded bg-slate-300" />
            <div className="h-2 w-full rounded bg-slate-200" />
            <div className="h-2 w-11/12 rounded bg-slate-200" />
            <div className="h-2 w-3/4 rounded bg-slate-200" />
          </div>
          <div className="mx-3 mt-3 rounded border border-slate-300 bg-white p-2">
            <div className="mb-1.5 text-[10px] font-bold">Contact us (all fields required)</div>
            {["Name", "Email", "Phone", "Address", "Service type", "Describe the problem"].map((f) => (
              <div key={f} className="mb-1 rounded border border-slate-200 px-1.5 py-1 text-[9px] text-slate-400">{f} *</div>
            ))}
          </div>
          <div className="mt-auto bg-rose-600 py-2 text-center text-[10px] font-semibold text-white">Phone number hidden in menu</div>
        </div>
      </PhoneFrame>

      <PhoneFrame label="After · 1.8s load" tone="after">
        <div className="flex h-full flex-col bg-white pt-7">
          <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2.5">
            <span className="text-xs font-extrabold text-[#0F172A]">Restoration Co.</span>
            <span className="rounded-full bg-[#0B63E5] px-2.5 py-1 text-[10px] font-bold text-white">Call 24/7</span>
          </div>
          <div className="px-3 pt-3">
            <div className="text-[15px] font-extrabold leading-tight text-[#0F172A]">Water damage? We&apos;re on the way, day or night.</div>
            <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-2">
              <div className="mb-1.5 text-[10px] font-bold text-slate-800">Request service</div>
              {["Name", "Phone", "What happened?"].map((f) => (
                <div key={f} className="mb-1 rounded border border-slate-200 bg-white px-1.5 py-1 text-[9px] text-slate-400">{f}</div>
              ))}
              <div className="mt-1 rounded bg-[#F59E0B] py-1.5 text-center text-[10px] font-bold text-slate-900">Get help now</div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-1.5 text-[10px] font-semibold">
              {["Water damage", "Fire damage", "Mold remediation", "Storm damage"].map((s) => (
                <div key={s} className="rounded-md border border-blue-100 bg-blue-50 px-2 py-2 text-blue-900">{s} →</div>
              ))}
            </div>
          </div>
          <div className="mt-auto m-3 rounded-full bg-emerald-600 py-2.5 text-center text-xs font-bold text-white shadow-lg">📞 Tap to call now</div>
        </div>
      </PhoneFrame>
    </div>
  );
}

/* ---------------------------------------------------------------- Landing page before / after */

function LandingBeforeAfter() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div>
        <div className="mb-2"><Pill className="bg-rose-50 text-rose-700 border border-rose-200">BEFORE</Pill></div>
        <BrowserFrame url="product.example.com">
          <div className="p-5">
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span className="font-bold text-slate-600">Product</span>
              <span>Features · Pricing · About</span>
            </div>
            <div className="mt-5 text-lg font-bold leading-tight text-slate-800">The future of work, reimagined.</div>
            <div className="mt-1 text-xs text-slate-500">A smarter way to do more of what matters.</div>
            <div className="mt-3 inline-block rounded border border-slate-300 px-3 py-1.5 text-[11px] text-slate-600">Learn More</div>
            <div className="mt-4 grid h-28 place-items-center rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 text-[10px] font-semibold text-slate-500">
              Stock photo: people in a meeting
            </div>
            <div className="mt-3 rounded border border-slate-200 p-2">
              <div className="mb-1 text-[10px] font-bold text-slate-600">Request a demo</div>
              <div className="grid grid-cols-2 gap-1 text-[9px] text-slate-400">
                {["Name", "Work email", "Phone number *", "Company size *", "Company", "Role"].map((f) => (
                  <div key={f} className="rounded border border-slate-200 px-1.5 py-1">{f}</div>
                ))}
              </div>
            </div>
          </div>
        </BrowserFrame>
      </div>
      <div>
        <div className="mb-2"><Pill className="bg-emerald-50 text-emerald-700 border border-emerald-200">AFTER</Pill></div>
        <BrowserFrame url="product.example.com">
          <div className="p-5">
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span className="font-bold text-slate-800">Product</span>
              <span className="rounded-full bg-[#0B63E5] px-2.5 py-1 font-bold text-white">Book a Demo</span>
            </div>
            <div className="mt-5 text-lg font-extrabold leading-tight text-[#0F172A]">Close your month-end reports in hours, not days.</div>
            <div className="mt-1 text-xs text-slate-500">A specific benefit, in the buyer&apos;s own words.</div>
            <div className="mt-3 flex items-center gap-2">
              <span className="rounded-full bg-[#0B63E5] px-3 py-1.5 text-[11px] font-bold text-white">Book a Demo</span>
              <span className="text-[10px] text-slate-500">Name · Work email · Company</span>
            </div>
            <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
              <div className="flex gap-1 border-b border-slate-200 bg-white px-2 py-1.5">
                <span className="h-1.5 w-8 rounded bg-slate-200" /><span className="h-1.5 w-8 rounded bg-blue-200" /><span className="h-1.5 w-8 rounded bg-slate-200" />
              </div>
              <div className="grid grid-cols-3 gap-1.5 p-2">
                <div className="h-10 rounded bg-white border border-slate-200" />
                <div className="h-10 rounded bg-white border border-slate-200" />
                <div className="h-10 rounded bg-blue-100 border border-blue-200" />
                <div className="col-span-3 h-12 rounded bg-gradient-to-r from-blue-100 to-indigo-100" />
              </div>
              <div className="px-2 pb-1.5 text-[9px] text-slate-400">Real product screenshot</div>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((n) => <span key={n} className="h-3 w-10 rounded bg-slate-300" />)}
              </div>
              <span className="text-[10px] font-bold text-emerald-700">Customer logos + a quantified result</span>
            </div>
          </div>
        </BrowserFrame>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- Topic cluster map + rankings */

function TopicCluster() {
  const clusters = [
    { name: "Cluster A", color: "bg-[#0B63E5]", soft: "bg-blue-50 border-blue-200 text-blue-900" },
    { name: "Cluster B", color: "bg-violet-600", soft: "bg-violet-50 border-violet-200 text-violet-900" },
    { name: "Cluster C", color: "bg-emerald-600", soft: "bg-emerald-50 border-emerald-200 text-emerald-900" },
  ];
  const rows = [
    ["Pillar A", 3], ["Article A1", 5], ["Article A2", 4], ["Article A3", 8],
    ["Pillar B", 2], ["Article B1", 7], ["Article B2", 9], ["Article B3", 6],
    ["Pillar C", 4], ["Article C1", 8], ["Article C2", 10], ["Article C3", 6],
  ] as const;
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">12 articles · 3 clusters</div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {clusters.map((c, ci) => (
            <div key={c.name} className="flex flex-col items-center gap-2">
              <div className={`w-full rounded-xl ${c.color} px-3 py-3 text-center text-sm font-bold text-white shadow-md`}>
                Pillar page
                <div className="text-[10px] font-normal opacity-80">{c.name}</div>
              </div>
              <div className="h-4 w-px bg-slate-300" />
              {[1, 2, 3].map((n) => (
                <div key={n} className={`w-full rounded-lg border px-3 py-2 text-center text-xs font-semibold ${c.soft}`}>
                  Article {String.fromCharCode(65 + ci)}{n}
                  <div className="text-[10px] font-normal opacity-70">links to pillar</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 px-3 py-2 text-center text-xs text-slate-600">
          Buyer-intent keywords · 1,500 to 2,500 words each · titles, metas, headers, links and schema
        </div>
      </div>
      <BrowserFrame url="rank-report.example.com">
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900">Ranking report</span>
            <Pill className="bg-emerald-100 text-emerald-700">12 / 12 on page 1</Pill>
          </div>
          <table className="w-full text-left text-[11px]">
            <tbody>
              {rows.map(([name, pos]) => (
                <tr key={name} className="border-t border-slate-100">
                  <td className="py-1.5 text-slate-700">{name}</td>
                  <td className="py-1.5 w-1/2">
                    <div className="h-1.5 rounded-full bg-slate-100">
                      <div className="h-1.5 rounded-full bg-[#0B63E5]" style={{ width: `${100 - (pos - 1) * 9}%` }} />
                    </div>
                  </td>
                  <td className="py-1.5 text-right font-mono font-bold text-slate-900">#{pos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </BrowserFrame>
    </div>
  );
}

const ILLUSTRATIONS: Record<IllustrationKind, () => JSX.Element> = {
  "content-pipeline": ContentPipeline,
  "serp-and-page": SerpAndPage,
  "lead-flow": LeadFlow,
  "mobile-before-after": MobileBeforeAfter,
  "landing-before-after": LandingBeforeAfter,
  "topic-cluster": TopicCluster,
};

export default function CaseStudyIllustration({ kind }: { kind: IllustrationKind }) {
  const Illustration = ILLUSTRATIONS[kind];
  return <Illustration />;
}
