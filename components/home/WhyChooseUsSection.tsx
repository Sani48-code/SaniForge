import {
  Zap,
  MessageSquare,
  Search,
  UserCheck,
  Workflow,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/motion/FadeIn";
import { whyChooseUs } from "@/lib/data/why-choose-us";

const icons: Record<string, LucideIcon> = {
  zap: Zap,
  "message-square": MessageSquare,
  search: Search,
  "user-check": UserCheck,
  workflow: Workflow,
  "life-buoy": LifeBuoy,
};

export default function WhyChooseUsSection() {
  return (
    <section className="bg-gradient-to-br from-[#2B1B66] via-[#231656] to-[#160E3B] py-24 sm:py-32">
      <div className="container-px mx-auto max-w-content">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-gold-light">
            Why Choose Us
          </p>
          <h2 className="font-display text-5xl font-medium leading-tight text-ink sm:text-6xl text-balance">
            What{" "}
            <span className="bg-gradient-to-r from-gold-light to-blue-accent bg-clip-text text-transparent">
              Sets This Work Apart
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted sm:text-xl">
            A quick look at what you actually get when we work together.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <FadeIn key={item.id} delay={i * 0.08}>
                <Card className="h-full p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold-light">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
