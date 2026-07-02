"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data/nav";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-border text-ink"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open && (
        <div className="fixed inset-0 top-[72px] z-40 bg-navy-deep/98 backdrop-blur-md">
          <nav className="flex flex-col gap-1 px-6 py-8">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "border-b border-navy-border py-4 font-display text-2xl transition-colors",
                    active ? "text-gold-light" : "text-ink hover:text-gold-light"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={site.bookCallLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gold-gradient px-6 py-3 text-center font-medium text-navy-deep"
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
