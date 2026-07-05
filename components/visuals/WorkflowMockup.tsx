import { Mail, Sheet, MessageSquare, Zap, Globe, FileText } from "lucide-react";

const nodesByState = {
  after: [
    { icon: Globe, label: "Trigger" },
    { icon: Zap, label: "AI Draft" },
    { icon: FileText, label: "Format" },
    { icon: Sheet, label: "Publish" },
  ],
  before: [
    { icon: Mail, label: "Manual" },
    { icon: MessageSquare, label: "Follow-up" },
  ],
};

export default function WorkflowMockup({
  state = "after",
  className,
}: {
  state?: "before" | "after";
  className?: string;
}) {
  const nodes = nodesByState[state];
  const dim = state === "before";

  return (
    <div
      className={`relative flex h-full w-full flex-col overflow-hidden rounded-xl border ${
        dim ? "border-navy-border/60 bg-navy-deep/60" : "border-navy-border bg-navy-deep"
      } ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 border-b border-navy-border px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-navy-border" />
        <span className="h-2 w-2 rounded-full bg-navy-border" />
        <span className={`h-2 w-2 rounded-full ${dim ? "bg-ink-faint" : "bg-gold"}`} />
        <span className="ml-2 font-mono text-[9px] uppercase tracking-wider text-ink-faint">
          {dim ? "Manual Process" : "n8n Workflow"}
        </span>
      </div>

      <div className="flex flex-1 items-center justify-center gap-3 px-6 py-8">
        {nodes.map((node, i) => {
          const Icon = node.icon;
          return (
            <div key={node.label} className="flex items-center gap-3">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                    dim
                      ? "border-ink-faint/30 bg-navy-panel/40 text-ink-faint"
                      : "border-gold/40 bg-gold/10 text-gold-light"
                  }`}
                >
                  <Icon size={18} />
                </div>
                <span className="font-mono text-[8px] uppercase tracking-wider text-ink-faint">
                  {node.label}
                </span>
              </div>
              {i < nodes.length - 1 && (
                <div
                  className={`h-px w-6 ${dim ? "bg-ink-faint/30" : "bg-gold/40"}`}
                  aria-hidden="true"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
