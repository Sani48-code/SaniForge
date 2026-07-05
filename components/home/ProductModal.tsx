"use client";

import { Check } from "lucide-react";
import Modal from "@/components/ui/Modal";
import Badge from "@/components/ui/Badge";
import DashboardMockup from "@/components/visuals/DashboardMockup";
import type { Product } from "@/lib/data/products";

type Variant = "craftminion" | "rankdominator" | "growforge";

export default function ProductModal({
  product,
  variant,
  onClose,
}: {
  product: Product | null;
  variant: Variant | null;
  onClose: () => void;
}) {
  return (
    <Modal open={!!product} onClose={onClose} labelledBy="product-modal-title">
      {product && variant && (
        <div className="px-6 pb-10 pt-14 sm:px-10 sm:pb-14 sm:pt-16">
          <Badge>{product.badge}</Badge>
          <h2
            id="product-modal-title"
            className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-5xl text-balance"
          >
            {product.name}
          </h2>
          <p className="mt-3 font-display text-xl italic text-blue-soft">{product.tagline}</p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {product.description}
          </p>

          <div className="mx-auto mt-10 max-w-xl">
            <DashboardMockup variant={variant} />
          </div>

          <div className="mt-10">
            <p className="mb-4 font-mono text-sm uppercase tracking-wider text-gold-light">
              What It Does
            </p>
            <ul className="space-y-3">
              {product.whatItDoes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-ink-muted sm:text-lg">
                  <Check size={16} className="mt-0.5 shrink-0 text-gold-light" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Modal>
  );
}
