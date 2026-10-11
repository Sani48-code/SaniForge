"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/mdx";

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (!headings || headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0% -60% 0%" }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length === 0) return null;

  return (
    <nav className="sticky top-32 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
        Table of Contents
      </h4>
      <ul className="mt-4 space-y-2.5">
        {headings.map((h) => {
          const isActive = activeId === h.id;
          return (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`block text-sm transition-all ${
                  isActive
                    ? "font-semibold text-blue-600 translate-x-1"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
