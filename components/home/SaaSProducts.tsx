"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/motion/FadeIn";
import DashboardMockup from "@/components/visuals/DashboardMockup";
import ProductModal from "@/components/home/ProductModal";
import { products } from "@/lib/data/products";
import { linkifyGrowMinion } from "@/lib/linkify-growminion";
import { Check, ArrowUpRight } from "lucide-react";

const variants = ["craftminion", "rankdominator", "growforge"] as const;

export default function SaaSProducts() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedIndex = products.findIndex((p) => p.id === selectedId);
  const selectedProduct = selectedIndex >= 0 ? products[selectedIndex] : null;
  const selectedVariant = selectedIndex >= 0 ? variants[selectedIndex] : null;

  return (
    <section className="bg-navy-panel/30 py-24 sm:py-32">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading
          eyebrow={linkifyGrowMinion("Built at GrowMinion")}
          title="SaaS products I've helped build"
          description={linkifyGrowMinion(
            "As a Web/Automation Engineer on the GrowMinion team, I've helped design, build, and ship three AI-driven products that power client work at scale."
          )}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {products.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.1}>
              <Card className="h-full p-6">
                <DashboardMockup variant={variants[i]} />
                <Badge className="mt-6">{product.badge}</Badge>
                <h3 className="mt-4 font-display text-2xl text-ink">{product.name}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  {product.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-base text-ink-muted">
                      <Check size={14} className="mt-0.5 shrink-0 text-gold-light" />
                      {h}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setSelectedId(product.id)}
                  className="mt-6 flex items-center gap-1.5 text-base font-medium text-gold-light"
                  aria-haspopup="dialog"
                >
                  View Details <ArrowUpRight size={14} />
                </button>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        variant={selectedVariant}
        onClose={() => setSelectedId(null)}
      />
    </section>
  );
}
