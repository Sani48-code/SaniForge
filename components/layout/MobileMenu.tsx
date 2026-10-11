"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Linkedin, Mail, Menu, Phone, X } from "lucide-react";
import { navItems } from "@/lib/data/nav";
import { services } from "@/lib/data/services";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

const GITHUB = "https://github.com/Sani48-code";
const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  // Close after navigating to another page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock page scroll, close on Escape, keep keyboard focus inside the menu.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const linkBase =
    "flex min-h-[52px] items-center justify-between rounded-xl px-4 font-display text-lg font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600";

  const panel = (
    <div className="fixed inset-0 z-[100] md:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={-1}
        onClick={close}
        className="absolute inset-0 bg-slate-900/30 backdrop-blur-[2px]"
      />
      <div
        ref={panelRef}
        className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-white pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-2xl motion-safe:animate-[menuIn_220ms_ease-out]"
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
          <span className="font-display text-lg font-bold text-slate-900">Menu</span>
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-col gap-1 px-3 py-4">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(linkBase, active ? "bg-blue-50 text-blue-700" : "text-slate-800 hover:bg-slate-50")}
              >
                {item.label}
              </Link>
            );
          })}

          <div>
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-controls="mobile-services"
              className={cn(
                linkBase,
                "w-full",
                pathname.startsWith("/services") ? "bg-blue-50 text-blue-700" : "text-slate-800 hover:bg-slate-50"
              )}
            >
              Services
              <ChevronDown
                size={20}
                aria-hidden="true"
                className={cn("transition-transform", servicesOpen && "rotate-180")}
              />
            </button>
            {servicesOpen && (
              <ul id="mobile-services" className="mb-1 ml-4 mt-1 space-y-0.5 border-l-2 border-amber-300 pl-3">
                <li>
                  <Link href="/services" className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-semibold text-slate-800 hover:bg-slate-50">
                    All services
                  </Link>
                </li>
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      aria-current={pathname === `/services/${s.slug}` ? "page" : undefined}
                      className={cn(
                        "flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium hover:bg-slate-50",
                        pathname === `/services/${s.slug}` ? "text-blue-700" : "text-slate-600"
                      )}
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        <div className="mt-auto space-y-4 px-4 pt-2">
          <a
            href={site.bookCallLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-base font-semibold text-white shadow-lg shadow-blue-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <Phone size={16} aria-hidden="true" /> Book a Call <ArrowRight size={16} aria-hidden="true" />
          </a>
          <div className="flex items-center justify-center gap-3 border-t border-slate-100 pt-4">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Linkedin size={18} fill="currentColor" aria-hidden="true" />
            </a>
            <a href={site.mailtoLink} aria-label="Email" className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800">
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
      >
        <Menu size={20} aria-hidden="true" />
      </button>
      {mounted && open ? createPortal(panel, document.body) : null}
    </div>
  );
}
