import Reveal from "./Reveal";

export default function SectionHead({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-pf-gold">
          <span className="h-px w-6 bg-pf-gold" /> {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight text-pf-navy sm:text-4xl text-balance">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-relaxed text-pf-slate sm:text-lg">{text}</p>}
    </Reveal>
  );
}
