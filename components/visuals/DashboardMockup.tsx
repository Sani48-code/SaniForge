import { BarChart3, MapPin, Sparkles, TrendingUp, FileText, Scale } from "lucide-react";

type Variant = "craftminion" | "rankdominator" | "growforge";

const config: Record<
  Variant,
  {
    icon: React.ReactNode;
    label: string;
    accent: string;
    bars: number[];
  }
> = {
  craftminion: {
    icon: <Sparkles size={16} />,
    label: "CraftMinion: Content Engine",
    accent: "#D4AF37",
    bars: [40, 70, 55, 90, 65, 80],
  },
  rankdominator: {
    icon: <MapPin size={16} />,
    label: "RankDominator: GeoGrid",
    accent: "#4A7FE8",
    bars: [60, 45, 80, 50, 95, 70],
  },
  growforge: {
    icon: <Scale size={16} />,
    label: "GrowForge: Legal SEO",
    accent: "#E8B84B",
    bars: [30, 55, 45, 75, 60, 85],
  },
};

export default function DashboardMockup({ variant }: { variant: Variant }) {
  const c = config[variant];

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-navy-border bg-navy-deep">
      <div className="flex items-center justify-between border-b border-navy-border px-4 py-3">
        <div className="flex items-center gap-2 text-ink-muted">
          <span style={{ color: c.accent }}>{c.icon}</span>
          <span className="font-mono text-[10px] uppercase tracking-wider">{c.label}</span>
        </div>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-navy-border" />
          <span className="h-2 w-2 rounded-full bg-navy-border" />
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.accent }} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 p-4">
        <div className="col-span-2 rounded-lg border border-navy-border bg-navy-panel/60 p-3">
          <div className="mb-2 flex items-center gap-1.5 text-ink-faint">
            <TrendingUp size={11} />
            <span className="font-mono text-[9px] uppercase tracking-wider">Performance</span>
          </div>
          <div className="flex h-16 items-end gap-1.5">
            {c.bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{ height: `${h}%`, backgroundColor: c.accent, opacity: 0.3 + i * 0.1 }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="rounded-lg border border-navy-border bg-navy-panel/60 p-3">
            <BarChart3 size={12} className="mb-1" style={{ color: c.accent }} />
            <div className="font-display text-lg text-ink">98%</div>
            <div className="font-mono text-[8px] uppercase text-ink-faint">Score</div>
          </div>
          <div className="rounded-lg border border-navy-border bg-navy-panel/60 p-3">
            <FileText size={12} className="mb-1" style={{ color: c.accent }} />
            <div className="font-display text-lg text-ink">24</div>
            <div className="font-mono text-[8px] uppercase text-ink-faint">Live</div>
          </div>
        </div>
        <div className="col-span-3 space-y-2">
          {[1, 2, 3].map((row) => (
            <div
              key={row}
              className="flex items-center gap-2 rounded-md border border-navy-border/60 bg-navy-panel/40 px-3 py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c.accent }} />
              <div className="h-1.5 flex-1 rounded-full bg-navy-border" />
              <span className="font-mono text-[8px] text-ink-faint">{90 - row * 12}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
