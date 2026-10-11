import Image from "next/image";

/** Browser-framed screenshot of a demo site, stored locally in /public. */
export default function BrowserShot({
  src,
  url,
  title,
}: {
  src: string;
  url: string;
  title: string;
}) {
  const host = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="overflow-hidden rounded-xl border border-pf-border bg-white shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-pf-border bg-pf-gray px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-pf-yellow" />
        <span className="h-2 w-2 rounded-full bg-pf-border" />
        <span className="h-2 w-2 rounded-full bg-pf-border" />
        <span className="ml-2 truncate rounded bg-white px-2 py-0.5 font-mono text-[11px] text-pf-slate">
          {host}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-pf-gray">
        <Image
          src={src}
          alt={`Screenshot of the ${title} demo website`}
          fill
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
    </div>
  );
}
