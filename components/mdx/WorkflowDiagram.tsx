import {
  FileInput,
  ShieldCheck,
  Database,
  Slack,
  Sheet,
  Mail,
  Sparkles,
  FileText,
  Globe,
} from "lucide-react";
import DiagramFrame from "./DiagramFrame";

const variants = {
  leadcapture: {
    eyebrow: "Workflow Example",
    caption: "A web form submission reaches the CRM and sales Slack channel within seconds.",
    nodes: [
      { icon: FileInput, label: "Form Submit" },
      { icon: ShieldCheck, label: "Validate" },
      { icon: Database, label: "CRM" },
      { icon: Slack, label: "Slack Alert" },
    ],
  },
  sync: {
    eyebrow: "Workflow Example",
    caption: "New rows in a Google Sheet trigger a matching email sequence automatically.",
    nodes: [
      { icon: Sheet, label: "New Row" },
      { icon: ShieldCheck, label: "Dedupe" },
      { icon: Mail, label: "Email Sequence" },
    ],
  },
  contentpipeline: {
    eyebrow: "Workflow Example",
    caption: "A content brief becomes a formatted, published page with a human approval gate.",
    nodes: [
      { icon: FileInput, label: "Brief" },
      { icon: Sparkles, label: "AI Draft" },
      { icon: FileText, label: "Format" },
      { icon: Globe, label: "Publish" },
    ],
  },
};

export default function WorkflowDiagram({
  variant = "contentpipeline",
  caption,
}: {
  variant?: keyof typeof variants;
  caption?: string;
}) {
  const config = variants[variant] ?? variants.contentpipeline;

  return (
    <DiagramFrame eyebrow={config.eyebrow} caption={caption ?? config.caption}>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {config.nodes.map((node, i) => {
          const Icon = node.icon;
          return (
            <div key={node.label} className="flex items-center gap-3">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-gold-light">
                  <Icon size={22} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                  {node.label}
                </span>
              </div>
              {i < config.nodes.length - 1 && (
                <div className="h-px w-8 bg-gold/40" aria-hidden="true" />
              )}
            </div>
          );
        })}
      </div>
    </DiagramFrame>
  );
}
