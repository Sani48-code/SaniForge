import { cn } from "@/lib/utils";
import FadeIn from "@/components/motion/FadeIn";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <FadeIn
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-gold-light">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-tight text-ink text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-ink-muted text-lg sm:text-xl leading-relaxed">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
