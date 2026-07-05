import Image from "next/image";
import { Mail, MessageCircle, CalendarCheck, Building2, Linkedin, Facebook } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/lib/data/site";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 relative overflow-hidden border-t border-navy-border bg-navy-radial py-24 sm:py-32"
    >
      <div className="container-px mx-auto grid max-w-content grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <FadeIn>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-gold-light">
              Contact
            </p>
            <h2 className="mt-4 font-display text-5xl font-medium leading-tight text-ink sm:text-6xl text-balance">
              Let&apos;s Build Something{" "}
              <em className="italic text-gold-light">Together</em>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted sm:text-xl">
              Ready to build something that works? Reach out directly or book
              a free 15-minute call, no obligation.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="relative mt-10 max-w-xs overflow-hidden rounded-2xl border border-gold/20 shadow-gold-glow">
            <Image
              src="/images/portrait-suit-1.png"
              alt="Abdul Kalyum Sani"
              width={420}
              height={520}
              className="h-auto w-full object-cover"
            />
          </FadeIn>

          <FadeIn delay={0.25} className="mt-10 space-y-3">
            <a
              href={site.bookCallLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-navy-border bg-navy-panel/50 p-4 transition-colors hover:border-gold/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold-light">
                <CalendarCheck size={18} />
              </span>
              <div>
                <p className="text-base font-medium text-ink">Book a Free Call</p>
                <p className="text-sm text-ink-muted">15 minutes, no obligation</p>
              </div>
            </a>
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-navy-border bg-navy-panel/50 p-4 transition-colors hover:border-gold/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold-light">
                <MessageCircle size={18} />
              </span>
              <div>
                <p className="text-base font-medium text-ink">WhatsApp</p>
                <p className="text-sm text-ink-muted">+880 1745-947359</p>
              </div>
            </a>
            <a
              href={site.mailtoLink}
              className="flex items-center gap-3 rounded-xl border border-navy-border bg-navy-panel/50 p-4 transition-colors hover:border-gold/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold-light">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-base font-medium text-ink">Email</p>
                <p className="text-sm text-ink-muted">{site.email}</p>
              </div>
            </a>
            <a
              href={site.growminionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-navy-border bg-navy-panel/50 p-4 transition-colors hover:border-gold/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold-light">
                <Building2 size={18} />
              </span>
              <div>
                <p className="text-base font-medium text-ink">GrowMinion</p>
                <p className="text-sm text-ink-muted">The agency I work with</p>
              </div>
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-navy-border bg-navy-panel/50 p-4 transition-colors hover:border-gold/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold-light">
                <Linkedin size={18} />
              </span>
              <div>
                <p className="text-base font-medium text-ink">LinkedIn</p>
                <p className="text-sm text-ink-muted">Connect with me</p>
              </div>
            </a>
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-navy-border bg-navy-panel/50 p-4 transition-colors hover:border-gold/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold-light">
                <Facebook size={18} />
              </span>
              <div>
                <p className="text-base font-medium text-ink">Facebook</p>
                <p className="text-sm text-ink-muted">Follow along</p>
              </div>
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="rounded-2xl border border-navy-border bg-navy-panel/40 p-8 sm:p-10">
          <h3 className="font-display text-3xl text-ink">Send a message</h3>
          <p className="mt-2 text-base text-ink-muted">
            I&apos;ll get back to you within a business day.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
