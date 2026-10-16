import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/motion/MotionProvider";
import { site } from "@/lib/data/site";
import { IS_INDEXABLE } from "@/lib/site";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder, url: site.url }],
  creator: site.founder,
  keywords: ["n8n developer", "full stack dev", "full-stack developer", "growth engineer", "n8n automation", "GoHighLevel", "SEO copywriting"],
  // Preview deployments are never indexed (see lib/site.ts and next.config.mjs).
  robots: IS_INDEXABLE
    ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
      }
    : { index: false, follow: false },
  // Set GOOGLE_SITE_VERIFICATION to the Search Console HTML-tag token to verify ownership.
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [{ url: "/images/portrait-suit-1.png", width: 1024, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.founder,
  url: site.url,
  jobTitle: site.authorRole,
  knowsAbout: ["n8n", "Workflow Automation", "Full-Stack Development", "Growth Engineering", "Technical SEO", "GoHighLevel"],
  sameAs: site.sameAs,
  worksFor: {
    "@type": "Organization",
    name: "GrowMinion",
    url: site.growminionUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-navy font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(personJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-lg"
        >
          Skip to main content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main" className="min-h-screen">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
