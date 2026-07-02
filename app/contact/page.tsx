import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MessageCircle, CalendarCheck } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's talk about your project — website, SEO content, or automation. Book a free 15-minute call with Abdul Kalyum Sani.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-navy-radial py-20 sm:py-28">
      <div className="container-px mx-auto grid max-w-content grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <FadeIn>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-light">
              Contact
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl text-balance">
              Let&apos;s talk about{" "}
              <em className="italic text-gold-light">your project</em>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
              Ready to build something that works? Reach out directly or book
              a free 15-minute call — no obligation.
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
                <p className="text-sm font-medium text-ink">Book a Free Call</p>
                <p className="text-xs text-ink-muted">15 minutes, no obligation</p>
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
                <p className="text-sm font-medium text-ink">WhatsApp</p>
                <p className="text-xs text-ink-muted">+880 1745-947359</p>
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
                <p className="text-sm font-medium text-ink">Email</p>
                <p className="text-xs text-ink-muted">{site.email}</p>
              </div>
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="rounded-2xl border border-navy-border bg-navy-panel/40 p-8 sm:p-10">
          <h2 className="font-display text-2xl text-ink">Send a message</h2>
          <p className="mt-2 text-sm text-ink-muted">
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
