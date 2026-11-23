"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ArrowUpRight, Facebook, Linkedin, Mail, MessageCircle } from "lucide-react";
import { footerLinks } from "@/lib/data/nav";
import { site } from "@/lib/data/site";

const LIGHT_ROUTES = ["/services", "/projects", "/blog", "/n8n-developer", "/full-stack-developer", "/growth-engineer"];

export default function Footer() {
  const pathname = usePathname() ?? "";
  const light = LIGHT_ROUTES.some((r) => pathname === r || pathname.startsWith(`${r}/`));
  return (
    <footer
      data-theme={light ? "light" : "dark"}
      className={light ? "border-t border-[#DFE7F1] bg-[#EEF5FF]" : "border-t border-navy-border bg-navy-deep"}
    >
      <div className="container-px mx-auto max-w-content py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/saniforge-logo-full.png" alt="SaniForge" width={900} height={256} className="h-12 w-auto" />

            </Link>
            <p className="mt-4 max-w-xs text-base leading-relaxed text-ink-muted">
              Websites, words & automated systems for businesses that want to
              scale faster.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-gold-light">
              Pages
            </h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-gold-light">
              Hire Us
            </h3>
            <ul className="space-y-3">
              {footerLinks.hire.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-gold-light">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-gold-light">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-border text-ink-muted transition-colors hover:border-gold/40 hover:text-gold-light"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-border text-ink-muted transition-colors hover:border-gold/40 hover:text-gold-light"
              >
                <Facebook size={16} />
              </a>
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-border text-ink-muted transition-colors hover:border-gold/40 hover:text-gold-light"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={site.mailtoLink}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-border text-ink-muted transition-colors hover:border-gold/40 hover:text-gold-light"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-navy-border pt-8 sm:flex-row">
          <p className="text-sm text-ink-faint">
            © {new Date().getFullYear()} SaniForge. All rights reserved.
          </p>
          <a
            href={site.growminionUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SaniForge is part of GrowMinion (opens growminion.com)"
            className="group inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0B0F17] py-2.5 pl-5 pr-4 shadow-[0_8px_30px_-12px_rgba(245,217,10,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F5D90A]/60 hover:shadow-[0_12px_36px_-10px_rgba(245,217,10,0.55)]"
          >
            <span className="font-mono text-[11px] uppercase leading-tight tracking-[0.18em] text-white/60">
              Proud
              <br />
              part of
            </span>
            <span aria-hidden className="h-8 w-px bg-white/15" />
            <Image
              src="/images/growminion-logo.png"
              alt="GrowMinion"
              width={884}
              height={273}
              className="h-8 w-auto"
            />
            <ArrowUpRight
              size={16}
              aria-hidden
              className="text-white/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#F5D90A]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
