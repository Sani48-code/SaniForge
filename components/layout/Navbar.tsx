"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data/nav";
import { site } from "@/lib/data/site";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-navy-border/80 bg-navy/85 backdrop-blur-md">
      <div className="container-px mx-auto flex h-[72px] max-w-content items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="SaniForge logo"
            width={36}
            height={36}
            priority
            className="h-9 w-9 object-contain"
          />
          <span className="font-display text-lg font-semibold text-ink">
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
                className={cn(
                  "relative text-sm font-medium transition-colors",
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

        <div className="hidden md:block">
          <a
            href={site.bookCallLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-medium text-navy-deep shadow-gold-glow transition-all hover:brightness-110 hover:-translate-y-0.5"
          >
            Book a Call
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
