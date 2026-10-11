import Image from "next/image";

export type ImageGridItem = {
  src: string;
  alt?: string;
  caption?: string;
};

export default function ImageGrid({
  images,
  cols = 2,
  caption,
}: {
  images: ImageGridItem[];
  cols?: 2 | 3;
  caption?: string;
}) {
  const colClass = cols === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2";

  return (
    <figure className="my-8 rounded-2xl border border-slate-200 bg-slate-50/60 p-3 sm:p-4 shadow-xs">
      <div className={`grid ${colClass} gap-3 sm:gap-4`}>
        {images.map((item, idx) => (
          <div key={idx} className="group flex flex-col">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200/80">
              <Image
                src={item.src}
                alt={item.alt || `Visual ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {item.caption && (
              <span className="mt-2 text-center font-mono text-[11px] text-slate-500 italic">
                {item.caption}
              </span>
            )}
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-mono text-xs text-slate-500 italic border-t border-slate-200/60 pt-2.5">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

