import Reveal from "@/components/projects/Reveal";

export default function Heading({
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
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sv-goldtext">
          <span className="h-0.5 w-6 rounded bg-sv-gold" /> {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-sv-navy sm:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-relaxed text-sv-slate sm:text-lg">{text}</p>}
    </Reveal>
  );
}
