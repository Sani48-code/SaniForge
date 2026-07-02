import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/motion/FadeIn";
import DashboardMockup from "@/components/visuals/DashboardMockup";
import { products } from "@/lib/data/products";
import { Check } from "lucide-react";

const variants = ["craftminion", "rankdominator", "growforge"] as const;

export default function SaaSProducts() {
  return (
    <section className="bg-navy-panel/30 py-24 sm:py-32">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading
          eyebrow="Built at GrowMinion"
          title="SaaS products I've helped build"
          description="Internal tools that power GrowMinion's client work at scale — three AI-driven products I helped design and ship."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {products.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.1}>
              <Card className="h-full p-6">
                <DashboardMockup variant={variants[i]} />
                <Badge className="mt-6">{product.badge}</Badge>
                <h3 className="mt-4 font-display text-xl text-ink">{product.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {product.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-ink-muted">
                      <Check size={14} className="mt-0.5 shrink-0 text-gold-light" />
                      {h}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
