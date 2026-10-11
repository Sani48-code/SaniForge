"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin, Menu, X, Phone, ArrowRight } from "lucide-react";
import { navItems } from "@/lib/data/nav";
import { services } from "@/lib/data/services";
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
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className="fixed inset-0 top-[72px] z-40 bg-white/98 backdrop-blur-xl">
          <nav className="flex flex-col gap-1 px-6 py-8">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    setOpen(false);
                    if (item.href === "/" && pathname === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={cn(
                    "border-b border-slate-100 py-4 font-display text-2xl font-bold transition-colors",
                    active ? "text-blue-600" : "text-slate-800 hover:text-blue-600"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="border-b border-slate-100 py-4">
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-bold text-slate-800 hover:text-blue-600"
              >
                Services
              </Link>
              <div className="mt-3 flex flex-col gap-2 pl-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-slate-600 hover:text-blue-600"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
            <a
              href={site.bookCallLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-center font-semibold text-white shadow-lg shadow-blue-500/25"
            >
              <Phone size={15} className="fill-white" />
              <span>Book a Call</span>
              <ArrowRight size={15} />
            </a>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow"
              >
                <Linkedin size={18} fill="currentColor" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
