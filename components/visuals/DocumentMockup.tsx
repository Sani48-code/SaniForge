import Image from "next/image";
import { cn } from "@/lib/utils";

const images = {
  before:
    "https://images.unsplash.com/photo-1566699270403-3f7e3f340664?auto=format&fit=crop&w=900&q=70",
  after:
    "https://images.unsplash.com/photo-1524635962361-d7f8ae9c79b1?auto=format&fit=crop&w=900&q=70",
};

export default function DocumentMockup({
  state = "after",
  className,
}: {
  state?: "before" | "after";
  className?: string;
}) {
  const dim = state === "before";

  return (
    <div
      className={`relative flex h-full w-full flex-col overflow-hidden rounded-xl border ${
        dim ? "border-navy-border/60 bg-navy-deep/60" : "border-navy-border bg-navy-deep"
      } ${className ?? ""}`}
    >
      <div className="relative z-10 flex items-center gap-2 border-b border-navy-border px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-navy-border" />
        <span className="h-2 w-2 rounded-full bg-navy-border" />
        <span className={`h-2 w-2 rounded-full ${dim ? "bg-ink-faint" : "bg-gold"}`} />
        <span className="ml-2 font-mono text-[9px] uppercase tracking-wider text-ink-faint">
          {dim ? "Old Service Page" : "Optimized Service Page"}
        </span>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <Image
          src={images[state]}
          alt={dim ? "Outdated, unstructured service page" : "Optimized, well-structured service page"}
          fill
          sizes="(max-width: 640px) 90vw, 400px"
          className={cn("object-cover", dim && "grayscale-[50%] brightness-75 contrast-90")}
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent px-4 pb-3 pt-8">
          {!dim && (
            <div className="flex flex-wrap gap-1.5">
              {["H1", "Schema", "FAQ", "CTA"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 font-mono text-[8px] text-gold-light backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {dim && (
            <span className="rounded-full border border-ink-faint/30 bg-navy-deep/60 px-2 py-0.5 font-mono text-[8px] text-ink-faint backdrop-blur-sm">
              No structure
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
