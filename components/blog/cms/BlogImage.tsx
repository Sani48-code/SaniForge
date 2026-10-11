import Image from "next/image";

export default function BlogImage({
  src,
  alt = "Blog visual",
  caption,
  aspect = "aspect-[16/9]",
  className = "",
}: {
  src: string;
  alt?: string;
  caption?: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <figure className={`my-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 p-2 sm:p-3 shadow-xs ${className}`}>
      <div className={`relative ${aspect} w-full overflow-hidden rounded-xl bg-slate-100`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center font-mono text-xs text-slate-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

