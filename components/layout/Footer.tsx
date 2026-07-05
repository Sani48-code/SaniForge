import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Mail, MessageCircle } from "lucide-react";
import { footerLinks } from "@/lib/data/nav";
import { site } from "@/lib/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-navy-border bg-navy-deep">
      <div className="container-px mx-auto max-w-content py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="SaniForge logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="font-display text-lg font-semibold text-ink">
                Sani<span className="text-gold-light">Forge</span>
              </span>
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
                <li key={link.href}>
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
                <li key={link.href}>
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
            className="inline-flex items-center gap-2 rounded-full border border-navy-border px-4 py-1.5 font-mono text-sm text-ink-muted transition-colors hover:border-gold/40 hover:text-gold-light"
          >
            Part of GrowMinion
          </a>
        </div>
      </div>
    </footer>
  );
}
