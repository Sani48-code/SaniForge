"use client";

import { useState } from "react";
import { Download } from "lucide-react";

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
