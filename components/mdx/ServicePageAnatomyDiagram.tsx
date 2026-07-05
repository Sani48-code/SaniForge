import DiagramFrame from "./DiagramFrame";

const sections = [
  { label: "Hero: clear headline + one primary CTA", height: "h-16" },
  { label: "Trust signals: reviews, credentials, real photos", height: "h-10" },
  { label: "Service details + proof blocks", height: "h-20" },
  { label: "FAQ: SEO + objection handling", height: "h-14" },
  { label: "Closing CTA + contact form", height: "h-12" },
];

export default function ServicePageAnatomyDiagram({
  caption = "The section order that shows up on every high-converting service page I build.",
}: {
  caption?: string;
}) {
  return (
    <DiagramFrame eyebrow="Page Anatomy" caption={caption}>
      <div className="mx-auto flex max-w-md flex-col gap-2">
        {sections.map((s) => (
          <div
            key={s.label}
            className={`flex ${s.height} items-center rounded-lg border border-gold/25 bg-gold/5 px-4`}
          >
            <span className="text-xs text-ink-muted sm:text-sm">{s.label}</span>
          </div>
        ))}
      </div>
    </DiagramFrame>
  );
}
