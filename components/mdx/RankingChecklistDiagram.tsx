import { Check } from "lucide-react";
import DiagramFrame from "./DiagramFrame";

const items = [
  "NAP consistency across directories",
  "Core Web Vitals within recommended range",
  "E-E-A-T signals present on key pages",
  "Schema markup implemented and valid",
  "Internal linking between related pages",
];

export default function RankingChecklistDiagram({
  caption = "Run through this before assuming a rankings drop is Google's fault.",
}: {
  caption?: string;
}) {
  return (
    <DiagramFrame eyebrow="Self-Audit Checklist" caption={caption}>
      <ul className="mx-auto max-w-md space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold-light">
              <Check size={12} />
            </span>
            <span className="text-sm text-ink-muted sm:text-base">{item}</span>
          </li>
        ))}
      </ul>
    </DiagramFrame>
  );
}
