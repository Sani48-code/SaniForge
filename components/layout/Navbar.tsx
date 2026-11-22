"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Phone, ArrowRight, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data/nav";
import { services } from "@/lib/data/services";
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
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 text-slate-900 backdrop-blur-md transition-colors">
      <div className="container-px mx-auto flex h-[72px] max-w-[1240px] items-center justify-between">
        {/* Brand Logo matching screenshot */}
        <Link href="/" onClick={handleHomeClick} className="flex shrink-0 items-center gap-2.5">
          <Image src="/images/saniforge-logo-full.png" alt="SaniForge" width={900} height={256} priority className="h-11 w-auto" />
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : item.href.startsWith("/#")
                ? false
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={item.href === "/" ? handleHomeClick : undefined}
                className={cn(
                  "relative text-sm font-semibold transition-colors",
                  active
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-blue-600" />
                )}
              </Link>
            );
          })}

          {/* Services dropdown */}
          <div className="group relative">
            <Link
              href="/services"
              className={cn(
                "relative inline-flex items-center gap-1 text-sm font-semibold transition-colors",
                pathname.startsWith("/services")
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              Services
              <ChevronDown size={14} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
              {pathname.startsWith("/services") && (
                <span className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-blue-600" />
              )}
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl ring-1 ring-slate-900/5">
                {/* All services link at top */}
                <Link
                  href="/services"
                  className="mb-1 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold uppercase tracking-wider text-blue-600 transition-colors hover:bg-blue-50"
                >
                  All Services →
                </Link>
                <div className="my-1 border-t border-slate-100" />
                {services.map((s) => {
                  const icons: Record<string, React.ReactNode> = {
                    pen: <span className="text-base">✍️</span>,
                    file: <span className="text-base">📝</span>,
                    code: <span className="text-base">💻</span>,
                    workflow: <span className="text-base">⚙️</span>,
                    target: <span className="text-base">🎯</span>,
                    layers: <span className="text-base">🚀</span>,
                  };
                  const isActive = pathname === `/services/${s.slug}`;
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className={cn(
                        "flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors",
                        isActive
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      <span className="mt-0.5 flex-shrink-0 leading-none">{icons[s.icon]}</span>
                      <span>
                        <span className="block text-sm font-semibold leading-tight">{s.label}</span>
                        <span className="mt-0.5 block text-xs text-slate-500 leading-snug line-clamp-1">{s.description}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>

        {/* Right Actions: Facebook, LinkedIn, Book a Call */}
        <div className="hidden items-center gap-3.5 md:flex">
          {/* Facebook Icon */}
          <a
            href={site.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#0866FF] transition-opacity hover:opacity-80"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
            </svg>
          </a>

          {/* LinkedIn Icon with subtle blue rounded badge */}
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white transition-opacity hover:opacity-90"
          >
            <Linkedin size={16} fill="currentColor" />
          </a>

          {/* Book a Call Button with Phone icon and arrow */}
          <a
            href={site.bookCallLink}
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/35 hover:-translate-y-0.5"
          >
            <Phone size={14} className="fill-white" />
            <span>Book a Call</span>
            <ArrowRight size={14} />
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
