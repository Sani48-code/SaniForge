import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-navy-border bg-navy-panel/60 backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:shadow-card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
