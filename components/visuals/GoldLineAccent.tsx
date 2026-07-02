import { cn } from "@/lib/utils";

export default function GoldLineAccent({
  className,
  position = "right",
}: {
  className?: string;
  position?: "left" | "right";
}) {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute top-0 h-full w-40 opacity-40",
        position === "right" ? "right-0" : "left-0 -scale-x-100",
        className
      )}
      viewBox="0 0 200 800"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="180" y1="0" x2="20" y2="800" stroke="url(#goldLine1)" strokeWidth="1" />
      <line x1="140" y1="0" x2="-20" y2="800" stroke="url(#goldLine2)" strokeWidth="1" />
      <line x1="200" y1="100" x2="60" y2="900" stroke="url(#goldLine1)" strokeWidth="1" />
      <defs>
        <linearGradient id="goldLine1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="goldLine2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A7FE8" stopOpacity="0" />
          <stop offset="50%" stopColor="#4A7FE8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4A7FE8" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
