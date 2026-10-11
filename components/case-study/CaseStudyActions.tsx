"use client";

import { useState } from "react";
import { Download, Mail, CheckCircle2, ArrowRight } from "lucide-react";

export function PdfDownloadButton({ title }: { title: string }) {
  const [downloading, setDownloading] = useState(false);

  function handleDownload() {
    setDownloading(true);
    if (typeof window !== "undefined") {
      window.print();
    }
    setTimeout(() => setDownloading(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 px-4 text-xs font-semibold text-white transition-all hover:bg-slate-800 active:scale-[0.98]"
    >
      <Download size={14} />
      <span>{downloading ? "Preparing PDF..." : "Download Case Study (PDF)"}</span>
    </button>
  );
}

export function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  }

  return (
    <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-[#F0F5FF]/90 to-white p-6 shadow-xs">
      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0B63E5]">
        <Mail size={14} /> Systems Growth Playbook
      </div>
      <h5 className="mt-2 font-display text-base font-bold text-[#0F172A]">
        Get Bi-Weekly Case Studies &amp; Playbooks
      </h5>
      <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
        No fluff. Real system architectures, SEO frameworks, and automation workflows delivered to your inbox.
      </p>

      {subscribed ? (
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs font-medium text-emerald-800">
          <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
          <span>You&apos;re subscribed! Check your inbox for our latest frameworks.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 space-y-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-[#0B63E5] focus:outline-none focus:ring-2 focus:ring-[#0B63E5]/20"
          />
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#0B63E5] py-2.5 px-4 text-xs font-semibold text-white shadow-sm hover:bg-[#0951bd] transition-colors"
          >
            <span>Subscribe for Free</span>
            <ArrowRight size={13} />
          </button>
        </form>
      )}
    </div>
  );
}

