import DiagramFrame from "./DiagramFrame";

const rows = [
  { label: "Page Speed", nextjs: 92, wordpress: 58 },
  { label: "SEO Control", nextjs: 85, wordpress: 65 },
  { label: "Setup Cost", nextjs: 55, wordpress: 85 },
  { label: "Self-Editing", nextjs: 45, wordpress: 90 },
];

export default function FrameworkComparisonDiagram({
  caption = "Illustrative comparison. Actual numbers vary by build and hosting setup.",
}: {
  caption?: string;
}) {
  return (
    <DiagramFrame eyebrow="Next.js vs WordPress" caption={caption}>
      <div className="mb-4 flex justify-end gap-6 text-xs">
        <span className="flex items-center gap-1.5 text-gold-light">
          <span className="h-2 w-2 rounded-full bg-gold" /> Next.js
        </span>
        <span className="flex items-center gap-1.5 text-blue-soft">
          <span className="h-2 w-2 rounded-full bg-blue-accent" /> WordPress
        </span>
      </div>
      <div className="space-y-5">
        {rows.map((row) => (
          <div key={row.label}>
            <p className="mb-1.5 text-xs text-ink-muted">{row.label}</p>
            <div className="space-y-1">
              <div className="h-2 rounded-full bg-navy-border">
                <div
                  className="h-2 rounded-full bg-gold"
                  style={{ width: `${row.nextjs}%` }}
                />
              </div>
              <div className="h-2 rounded-full bg-navy-border">
                <div
                  className="h-2 rounded-full bg-blue-accent"
                  style={{ width: `${row.wordpress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </DiagramFrame>
  );
}
