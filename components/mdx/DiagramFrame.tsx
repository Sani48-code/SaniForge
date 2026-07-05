import FadeIn from "@/components/motion/FadeIn";

export default function DiagramFrame({
  eyebrow,
  caption,
  children,
}: {
  eyebrow: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <FadeIn className="not-prose my-10 overflow-hidden rounded-2xl border border-navy-border bg-navy-panel/40">
      <div className="border-b border-navy-border px-6 py-3">
        <p className="font-mono text-[10px] uppercase tracking-wider text-gold-light">
          {eyebrow}
        </p>
      </div>
      <div className="p-6 sm:p-8">{children}</div>
      <div className="border-t border-navy-border px-6 py-3">
        <p className="text-xs text-ink-muted">{caption}</p>
      </div>
    </FadeIn>
  );
}
