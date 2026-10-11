"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Light scroll reveal: content is always visible and only slides up slightly when it enters the viewport.
 * It uses IntersectionObserver and a CSS transition, so it ships no animation library, and it respects
 * prefers-reduced-motion by skipping the movement entirely.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Render as a list item when the reveal wraps content inside a <ul> or <ol>. */
  as?: "div" | "li";
}) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`motion-safe:transition-transform motion-safe:duration-[600ms] motion-safe:ease-out ${
        shown ? "translate-y-0" : "translate-y-4"
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
