import Image from "next/image";

/** Cover image with a consistent light fallback when a post has no image. */
export default function InsightCover({
  src,
  alt,
  category,
  sizes,
  priority,
  className = "",
}: {
  src?: string;
  alt: string;
  category: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  if (!src) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-sv-soft to-jn-pale ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-sv-goldtext">{category}</span>
      </div>
    );
  }
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} />;
}
