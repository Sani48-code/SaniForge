"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { X, CalendarCheck } from "lucide-react";
import { site } from "@/lib/data/site";

/**
 * Intro video dialog. Loaded with next/dynamic from the hero on the first "Watch Intro" click,
 * so framer-motion is not part of the homepage's initial JavaScript.
 */
export default function IntroVideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm"
            onClick={onClose}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="intro-video-title"
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 id="intro-video-title" className="text-lg font-bold text-slate-900">
                    Meet Abdul Kaiyum Sani
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">n8n Developer, Full-Stack Dev &amp; Growth Engineer</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close intro video"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-5 aspect-video w-full overflow-hidden rounded-xl bg-black shadow-lg ring-1 ring-slate-900/10">
                <video
                  src="/video/intro-main.mp4"
                  className="h-full w-full object-contain"
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  controlsList="nodownload"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-slate-500">Ready to start a project? Schedule a quick discovery chat.</p>
                <Link
                  href={site.bookCallLink}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  Book a Free 30-Min Call
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
