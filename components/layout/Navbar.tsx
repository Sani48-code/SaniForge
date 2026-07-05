"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin } from "lucide-react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data/nav";
import { site } from "@/lib/data/site";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  function handleHomeClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-navy-border/80 bg-navy/85 backdrop-blur-md">
      <div className="container-px mx-auto flex h-[72px] max-w-content items-center justify-between">
        <Link href="/" onClick={handleHomeClick} className="flex shrink-0 items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="SaniForge logo"
            width={88}
            height={88}
            className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
          />
          <span className="font-display text-lg font-semibold text-ink sm:text-xl">
            Sani<span className="text-gold-light">Forge</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={item.href === "/" ? handleHomeClick : undefined}
                className={cn(
                  "relative text-base font-medium transition-colors",
                  active ? "text-gold-light" : "text-ink-muted hover:text-ink"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-gold-light" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
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
          <a
            href={site.bookCallLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-gold-gradient px-5 py-2.5 text-base font-medium text-navy-deep shadow-gold-glow transition-all hover:brightness-110 hover:-translate-y-0.5"
          >
            Book a Call
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
