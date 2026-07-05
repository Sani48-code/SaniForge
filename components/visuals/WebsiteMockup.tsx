import Image from "next/image";
import { cn } from "@/lib/utils";

const images = {
  before:
    "https://images.unsplash.com/photo-1766941234615-ffc4cf1e029e?auto=format&fit=crop&w=900&q=70",
  after:
    "https://images.unsplash.com/photo-1686061594183-8c864f508b00?auto=format&fit=crop&w=900&q=70",
};

export default function WebsiteMockup({
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
        <div
          className={`ml-2 flex-1 rounded-full px-3 py-1 font-mono text-[8px] ${
            dim ? "bg-navy-panel/40 text-ink-faint" : "bg-navy-panel/60 text-ink-faint"
          }`}
        >
          {dim ? "old-site.com" : "your-site.com"}
        </div>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <Image
          src={images[state]}
          alt={dim ? "Outdated website interface" : "Modern website interface"}
          fill
          sizes="(max-width: 640px) 90vw, 400px"
          className={cn("object-cover", dim && "grayscale-[50%] brightness-75 contrast-90")}
        />
      </div>
    </div>
  );
}
