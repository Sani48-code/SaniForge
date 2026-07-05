import Image from "next/image";
import { Linkedin, Facebook } from "lucide-react";
import { site } from "@/lib/data/site";
import { linkifyGrowMinion } from "@/lib/linkify-growminion";

export default function AuthorBio() {
  return (
    <div className="mt-16 flex flex-col items-start gap-5 rounded-2xl border border-navy-border bg-navy-panel/40 p-6 sm:flex-row sm:items-center sm:p-8">
      <Image
        src="/images/portrait-about.png"
        alt="Abdul Kalyum Sani"
        width={72}
        height={72}
        className="h-16 w-16 shrink-0 rounded-full object-cover"
      />
      <div className="flex-1">
        <p className="font-display text-xl text-ink">Abdul Kalyum Sani</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-muted">
          {linkifyGrowMinion(
            "Founder of SaniForge and Web/Automation Engineer at GrowMinion."
          )}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <a
          href={site.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-border text-ink-muted transition-colors hover:border-gold/40 hover:text-gold-light"
        >
          <Linkedin size={15} />
        </a>
        <a
          href={site.socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-border text-ink-muted transition-colors hover:border-gold/40 hover:text-gold-light"
        >
          <Facebook size={15} />
        </a>
      </div>
    </div>
  );
}
