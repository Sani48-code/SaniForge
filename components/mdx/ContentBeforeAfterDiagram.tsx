import DocumentMockup from "@/components/visuals/DocumentMockup";
import DiagramFrame from "./DiagramFrame";

export default function ContentBeforeAfterDiagram({
  caption = "Generic boilerplate copy restructured into a page built to rank and convert.",
}: {
  caption?: string;
}) {
  return (
    <DiagramFrame eyebrow="Before &amp; After" caption={caption}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <div className="aspect-[4/3] w-full">
            <DocumentMockup state="before" className="h-full" />
          </div>
          <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-wider text-ink-faint">
            Before
          </p>
        </div>
        <div>
          <div className="aspect-[4/3] w-full">
            <DocumentMockup state="after" className="h-full" />
          </div>
          <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-wider text-gold-light">
            After
          </p>
        </div>
      </div>
    </DiagramFrame>
  );
}
