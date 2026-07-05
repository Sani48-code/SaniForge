import DiagramFrame from "./DiagramFrame";

export default function PerformanceGaugeDiagram({
  beforeLabel = "WordPress (typical)",
  afterLabel = "Next.js (typical)",
  beforeValue = 78,
  afterValue = 22,
  caption = "Illustrative mobile load time comparison. Actual results depend on hosting, plugins, and optimization work.",
}: {
  beforeLabel?: string;
  afterLabel?: string;
  beforeValue?: number;
  afterValue?: number;
  caption?: string;
}) {
  return (
    <DiagramFrame eyebrow="Load Time" caption={caption}>
      <div className="space-y-6">
        <div>
          <div className="mb-1.5 flex justify-between text-xs text-ink-muted">
            <span>{beforeLabel}</span>
            <span>~4.0s</span>
          </div>
          <div className="h-3 rounded-full bg-navy-border">
            <div
              className="h-3 rounded-full bg-blue-accent"
              style={{ width: `${beforeValue}%` }}
            />
          </div>
        </div>
        <div>
          <div className="mb-1.5 flex justify-between text-xs text-ink-muted">
            <span>{afterLabel}</span>
            <span>~1.1s</span>
          </div>
          <div className="h-3 rounded-full bg-navy-border">
            <div className="h-3 rounded-full bg-gold" style={{ width: `${afterValue}%` }} />
          </div>
        </div>
      </div>
    </DiagramFrame>
  );
}
