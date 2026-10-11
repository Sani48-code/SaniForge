import Image from "next/image";
import { Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/data/site";
import { linkifyGrowMinion } from "@/lib/linkify-growminion";

export default function AuthorBio() {
  return (
    <div className="mt-16 flex flex-col items-start gap-6 rounded-3xl border border-slate-200 bg-slate-50/80 p-6 sm:flex-row sm:items-center sm:p-8 shadow-xs">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md">
        <Image
          src="/images/portrait-suit-1.png"
          alt={site.founder}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="font-display text-xl font-bold text-slate-900">{site.founder}</h4>
          <span className="rounded-full bg-blue-100 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-blue-700">
            Author &amp; Systems Engineer
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {linkifyGrowMinion(
            "Founder of SaniForge and Web/Automation Engineer at GrowMinion. Building scalable web architectures, high-ranking SEO content clusters, and reliable business automation pipelines."
          )}
        </p>
      </div>

      <div className="flex items-center gap-2.5">
        <a
          href={site.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-blue-300 hover:text-blue-600 shadow-2xs"
        >
          <Linkedin size={16} />
        </a>
        <a
          href={site.socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-blue-300 hover:text-blue-600 shadow-2xs"
        >
          <Facebook size={16} />
        </a>
        <a
          href={site.bookCallLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-blue-700 transition"
        >
          Consult <ArrowUpRight size={13} />
        </a>
      </div>
    </div>
  );
}
