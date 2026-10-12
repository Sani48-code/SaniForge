import type { Metadata } from "next";
import { CheckCircle2, Clock, MessagesSquare, Target } from "lucide-react";
import BookingFlow from "@/components/booking/BookingFlow";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Book a 30-minute discovery call to discuss your goals, project requirements, and the best way to move forward.",
  alternates: { canonical: "/book-a-call" },
  openGraph: {
    title: "Book a Discovery Call | SaniForge",
    description: "A 30-minute call to discuss your goals, requirements and next steps.",
    url: `${site.url}/book-a-call`,
    type: "website",
  },
};

const expectations = [
  { icon: Target, text: "We clarify your goals and what success looks like." },
  { icon: MessagesSquare, text: "You walk me through your requirements, tools and timeline." },
  { icon: CheckCircle2, text: "I recommend a clear next step, with no obligation." },
];

export default function BookACallPage() {
  return (
    <div data-light-page className="bg-white font-sans text-sv-navy">
      <section className="bg-gradient-to-br from-white via-sv-soft to-jn-pale/70 py-14 sm:py-20">
        <div className="container-px mx-auto max-w-[1100px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sv-goldtext">Book a Call</p>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-sv-navy sm:text-5xl">
            Let&apos;s Discuss Your Project
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-jn-body">
            Book a 30-minute discovery call to discuss your goals, project requirements, and the best way to move forward.
          </p>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-sv-navy shadow-sm ring-1 ring-sv-border">
                <Clock size={16} className="text-sv-blue" aria-hidden="true" /> 30 minutes · Video call · Free
              </p>
              <h2 className="font-display text-xl font-bold text-sv-navy">What to expect</h2>
              <ul className="space-y-4">
                {expectations.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex gap-3 text-base text-sv-slate">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-sv-blue shadow-sm ring-1 ring-sv-border">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    <span className="pt-1">{text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-sv-slate">
                Prefer to write instead?{" "}
                <a href={site.mailtoLink} className="font-semibold text-sv-blue underline underline-offset-2">
                  Email me
                </a>{" "}
                or{" "}
                <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-sv-blue underline underline-offset-2">
                  message on WhatsApp
                </a>
                .
              </p>
            </aside>

            <div className="min-w-0">
              <BookingFlow />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
