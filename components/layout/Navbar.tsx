"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Phone, ArrowRight, ChevronDown, Trophy, FolderKanban } from "lucide-react";
import { usePathname } from "next/navigation";
import { navItems, workLinks } from "@/lib/data/nav";
import ServiceIcon from "@/components/services/ServiceIcon";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/who-we-help";
import { industryIcons } from "@/components/who-we-help/icons";
import { site } from "@/lib/data/site";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

const pill = (active: boolean) =>
  cn(
    "relative inline-flex items-center gap-1 whitespace-nowrap rounded-full px-4 py-2 text-[14px] font-semibold transition-all duration-200",
    active ? "bg-white text-[#0B63E5] shadow-sm ring-1 ring-slate-200" : "text-slate-600 hover:bg-white/70 hover:text-slate-900"
  );

export default function Navbar() {
  const pathname = usePathname();
  const servicesActive = pathname.startsWith("/services") || pathname.startsWith("/who-we-help");
  const workActive = workLinks.some((w) => pathname.startsWith(w.href));

  function handleHomeClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white text-slate-900 shadow-[0_1px_12px_rgba(15,23,42,0.06)] transition-colors">
      <div className="container-px mx-auto flex h-[72px] max-w-[1240px] items-center justify-between">
        {/* Logo is the home link */}
        <Link href="/" onClick={handleHomeClick} aria-label="SaniForge home" className="flex shrink-0 items-center gap-2.5">
          <Image src="/images/saniforge-logo-full.png" alt="SaniForge" width={900} height={256} priority className="h-11 w-auto" />
        </Link>

        {/* Center nav: Services and Work open dropdowns; the logo is the link home. */}
        <nav aria-label="Main" className="hidden items-center gap-1 rounded-full border border-slate-200/90 bg-slate-100/80 p-1 shadow-inner shadow-slate-200/60 lg:flex">
          {/* Services mega menu: services + industries */}
          <div className="group/svc relative">
            <Link href="/services" className={pill(servicesActive)}>
              Services
              <ChevronDown size={14} className="transition-transform group-hover/svc:rotate-180 group-focus-within/svc:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-4 opacity-0 transition-all group-hover/svc:visible group-hover/svc:opacity-100 group-focus-within/svc:visible group-focus-within/svc:opacity-100">
              <div className="grid grid-cols-[1.25fr_1fr] gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl ring-1 ring-slate-900/5">
                <div>
                  <Link href="/services" className="mb-1 flex items-center justify-between rounded-xl px-3 py-2 text-xs font-bold uppercase tracking-wider text-blue-600 hover:bg-blue-50">
                    What we do <ArrowRight size={13} />
                  </Link>
                  {services.map((s) => {
                    const on = pathname === `/services/${s.slug}`;
                    return (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className={cn("flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors", on ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50 hover:text-slate-900")}
                      >
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                          <ServiceIcon name={s.icon} size={16} />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold leading-tight">{s.label}</span>
                          <span className="mt-0.5 text-xs leading-snug text-slate-500 line-clamp-1">{s.description}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <div className="rounded-xl bg-slate-50 p-2">
                  <Link href="/who-we-help" className="mb-1 flex items-center justify-between rounded-xl px-3 py-2 text-xs font-bold uppercase tracking-wider text-amber-700 hover:bg-amber-50">
                    Who we help <ArrowRight size={13} />
                  </Link>
                  {industries.map((ind) => {
                    const Icon = industryIcons[ind.icon];
                    const on = pathname === `/who-we-help/${ind.slug}`;
                    return (
                      <Link
                        key={ind.slug}
                        href={`/who-we-help/${ind.slug}`}
                        className={cn("flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors", on ? "bg-white text-blue-700" : "text-slate-700 hover:bg-white hover:text-slate-900")}
                      >
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-300 to-orange-500 text-white">
                          <Icon size={15} />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold leading-tight">{ind.name}</span>
                          <span className="mt-0.5 text-xs leading-snug text-slate-500 line-clamp-2">{ind.menuLine}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Work: Case Studies + Projects */}
          <div className="group/work relative">
            <Link href="/case-studies" className={pill(workActive)}>
              Work
              <ChevronDown size={14} className="transition-transform group-hover/work:rotate-180 group-focus-within/work:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-4 opacity-0 transition-all group-hover/work:visible group-hover/work:opacity-100 group-focus-within/work:visible group-focus-within/work:opacity-100">
              <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl ring-1 ring-slate-900/5">
                {workLinks.map((w, i) => {
                  const Icon = i === 0 ? Trophy : FolderKanban;
                  const on = pathname.startsWith(w.href);
                  return (
                    <Link
                      key={w.href}
                      href={w.href}
                      className={cn("flex items-start gap-3 rounded-xl px-3 py-3 transition-colors", on ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50 hover:text-slate-900")}
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 text-white">
                        <Icon size={15} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold leading-tight">{w.label}</span>
                        <span className="mt-0.5 block text-xs leading-snug text-slate-500">{w.description}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={pill(active)}>
                {item.label}
                {active && <span className="absolute left-1/2 top-1 h-1 w-1 -translate-x-1/2 rounded-full bg-[#F59E0B]" aria-hidden="true" />}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: GitHub, Facebook, LinkedIn, Book a Call */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <div className="hidden items-center gap-0.5 rounded-full border border-slate-200 bg-white px-1 py-0.5 shadow-sm xl:flex">
          {/* GitHub Icon */}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-[34px] w-[34px] items-center justify-center rounded-full text-slate-800 transition-colors hover:bg-slate-100"
          >
            <svg className="h-[19px] w-[19px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* Facebook Icon */}
          <a
            href={site.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-[34px] w-[34px] items-center justify-center rounded-full text-[#0866FF] transition-colors hover:bg-blue-50"
          >
            <svg className="h-[19px] w-[19px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-[34px] w-[34px] items-center justify-center rounded-full text-[#0A66C2] transition-colors hover:bg-blue-50"
          >
            <Linkedin size={17} fill="currentColor" strokeWidth={0} />
          </a>

          </div>

          {/* Book a Call Button with Phone icon and arrow */}
          <a
            href={site.bookCallLink}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/35 hover:-translate-y-0.5"
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
