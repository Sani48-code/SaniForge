import { Bot, Database, Mail, MessageSquare, Webhook } from "lucide-react";

/** Lead automation flow: form -> validate & score -> CRM -> alert team / auto-reply. Decorative. */
export function AutomationFlow() {
  return (
    <div aria-hidden className="relative flex h-full min-h-[190px] items-center justify-between gap-2 px-2 sm:px-6">
      <div className="flex flex-col items-center gap-2">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-rose-400">
          <Webhook size={24} />
        </span>
        <span className="text-[11px] font-semibold text-white/80">Website form</span>
      </div>
      <span className="h-px flex-1 border-t border-dashed border-emerald-400/60" />
      <div className="flex items-center gap-2 rounded-xl border border-emerald-400/70 bg-emerald-400/10 px-3 py-2 shadow-[0_0_24px_-6px_rgba(52,211,153,0.6)]">
        <Bot size={16} className="text-emerald-300" />
        <div>
          <p className="text-xs font-semibold text-white">Validate &amp; score</p>
          <p className="hidden text-[10px] text-white/55 sm:block">spam out, owner assigned</p>
        </div>
      </div>
      <span className="h-px w-4 border-t border-dashed border-emerald-400/60 sm:w-6" />
      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sky-400">
        <Database size={18} />
      </span>
      <div className="flex flex-col gap-6 pl-1">
        <span className="flex items-center gap-2 text-[11px] font-semibold text-white/85">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-violet-300">
            <MessageSquare size={14} />
          </span>
          <span className="hidden sm:inline">Alert team</span>
        </span>
        <span className="flex items-center gap-2 text-[11px] font-semibold text-white/85">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-amber-300">
            <Mail size={14} />
          </span>
          <span className="hidden sm:inline">Auto-reply</span>
        </span>
      </div>
    </div>
  );
}

/** Organic traffic growth curve, 480 -> 2,100 visits a month. */
export function TrafficCurve() {
  return (
    <svg viewBox="0 0 300 110" className="h-28 w-full" aria-hidden preserveAspectRatio="none">
      <defs>
        <linearGradient id="traffic-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 100 C 60 98, 110 92, 160 76 S 240 30, 300 18 L300 110 L0 110 Z" fill="url(#traffic-fill)" />
      <path d="M0 100 C 60 98, 110 92, 160 76 S 240 30, 300 18" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/** Browser mock with a page skeleton. Decorative. */
export function BrowserMock() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[300px] rounded-xl bg-[#F6F8FC] p-3 shadow-2xl">
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-rose-400" />
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="ml-2 h-3 flex-1 rounded bg-slate-200/80" />
      </div>
      <div className="mt-4 h-2.5 w-3/4 rounded bg-[#0B1A3D]" />
      <div className="mt-2 h-2 w-1/2 rounded bg-slate-300" />
      <div className="mt-3 h-4 w-16 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
      <div className="mt-4 grid grid-cols-3 gap-2">
        <span className="h-8 rounded-md bg-blue-100" />
        <span className="h-8 rounded-md bg-violet-100" />
        <span className="h-8 rounded-md bg-amber-100" />
      </div>
    </div>
  );
}

const GRID = [
  ["#34D399", "#34D399", "#A3E635", "#FBBF24", "#FBBF24", "#FB923C", "#FB7185"],
  ["#34D399", "#34D399", "#34D399", "#A3E635", "#FBBF24", "#FBBF24", "#FB923C"],
  ["#A3E635", "#34D399", "#34D399", "#34D399", "#A3E635", "#FBBF24", "#FBBF24"],
];

/** Illustrative GeoGrid rank view (RankDominator style). */
export function GeoGrid() {
  return (
    <div aria-hidden className="flex gap-3">
      <div className="hidden w-24 shrink-0 rounded-lg bg-white/5 p-2.5 sm:block">
        <p className="text-[10px] font-bold text-white">RankDominator</p>
        <span className="mt-2 block h-1 rounded bg-violet-500" />
        <span className="mt-1.5 block h-1 w-4/5 rounded bg-white/15" />
        <span className="mt-1.5 block h-1 w-3/5 rounded bg-white/15" />
        <span className="mt-1.5 block h-1 w-4/5 rounded bg-white/15" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold text-white/85">Local GeoGrid rank view</p>
          <p className="text-[10px] text-white/40">Illustrative</p>
        </div>
        <div className="mt-2 grid grid-cols-7 gap-1.5 rounded-lg bg-white/5 p-2">
          {GRID.flat().map((c, i) => (
            <span key={i} className="aspect-square rounded-full" style={{ backgroundColor: c }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Average Google position for target keywords, month 0-3: 45 -> 22 -> 9 -> 3 (lower is better). */
export function RankingChart() {
  // y = 20 + (position - 1) / 49 * 180, x spread across 4 months
  const pts = [
    { x: 50, y: 182, v: 45 },
    { x: 230, y: 97, v: 22 },
    { x: 410, y: 49, v: 9 },
    { x: 580, y: 27, v: 3 },
  ];
  const line = "M50 182 C 120 150, 170 105, 230 97 S 350 56, 410 49 S 530 30, 580 27";
  return (
    <svg viewBox="0 0 620 230" className="h-auto w-full" role="img" aria-label="Average position improved from 45 to 22, 9 and then 3 over three months">
      <defs>
        <linearGradient id="rank-line" x1="0" x2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="55%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
        <linearGradient id="rank-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[{ y: 20, l: "1" }, { y: 108, l: "25" }, { y: 200, l: "50" }].map((g) => (
        <g key={g.l}>
          <line x1="40" x2="600" y1={g.y} y2={g.y} stroke="rgba(255,255,255,0.08)" />
          <text x="0" y={g.y + 4} fill="rgba(255,255,255,0.45)" fontSize="12">{g.l}</text>
        </g>
      ))}
      <path d={`${line} L580 200 L50 200 Z`} fill="url(#rank-fill)" />
      <path d={line} fill="none" stroke="url(#rank-line)" strokeWidth="3" strokeLinecap="round" />
      {pts.map((p, i) => (
        <g key={p.v}>
          <circle cx={p.x} cy={p.y} r={i === 3 ? 7 : 6} fill={i === 3 ? "#FBBF24" : "#0D1326"} stroke={i === 3 ? "#FBBF24" : "#A78BFA"} strokeWidth="2.5" />
          <text x={p.x + (i === 3 ? -22 : 8)} y={p.y - 10} fill="#fff" fontSize="13" fontWeight="700">{p.v}</text>
          <text x={p.x} y="222" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="12">Month {i}</text>
        </g>
      ))}
    </svg>
  );
}
