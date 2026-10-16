const isProd = process.env.NODE_ENV === "production";

// Only the production deployment may be indexed (mirrors IS_INDEXABLE in lib/site.ts).
// Vercel preview and development deployments get a site-wide X-Robots-Tag: noindex.
const isIndexable = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true;

// Custom domain migration (see DOMAIN_MIGRATION.md). Leave CUSTOM_DOMAIN unset until the domain is live.
// When set (e.g. CUSTOM_DOMAIN=saniforge.com), every request that reaches the old vercel.app host is
// permanently (301) redirected to the same path on the custom domain.
const customDomain = process.env.CUSTOM_DOMAIN?.replace(/^https?:\/\//, "").replace(/\/+$/, "");
const legacyHost = process.env.LEGACY_HOST || "saniforge.vercel.app";

// Content Security Policy. Next.js needs inline scripts and styles for hydration and JSON-LD,
// so 'unsafe-inline' stays; everything else is limited to this site and https images.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isProd ? "" : " 'unsafe-eval'"}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://*.supabase.co wss://*.supabase.co",
  "media-src 'self'",
  "frame-src https://calendly.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isProd ? ["upgrade-insecure-requests"] : []),
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  ...(isProd
    ? [
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        { key: "Content-Security-Policy", value: csp },
      ]
    : []),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets a production build (NEXT_DIST_DIR=.next-prod) run without clobbering the dev server cache.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  // One URL per page: /about, never /about/. Next.js 308-redirects the trailing-slash variant.
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ibb.co" },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
    // Generated share images read vendored fonts and /public images from disk; make sure
    // those files ship with the serverless functions that may regenerate them at runtime.
    outputFileTracingIncludes: {
      "/opengraph-image": ["./assets/**/*"],
      "/twitter-image": ["./assets/**/*"],
      "/blog/[slug]/opengraph-image": ["./assets/**/*", "./content/blog/**/*", "./public/images/blog/**/*"],
      "/blog/[slug]/twitter-image": ["./assets/**/*", "./content/blog/**/*", "./public/images/blog/**/*"],
      "/case-studies/[slug]/opengraph-image": ["./assets/**/*", "./content/work/**/*"],
      "/case-studies/[slug]/twitter-image": ["./assets/**/*", "./content/work/**/*"],
      "/projects/[slug]/opengraph-image": ["./assets/**/*", "./content/work/**/*"],
      "/projects/[slug]/twitter-image": ["./assets/**/*", "./content/work/**/*"],
    },
  },
  async redirects() {
    if (!customDomain) return [];
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: legacyHost }],
        destination: `https://${customDomain}/:path*`,
        statusCode: 301,
      },
    ];
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      ...(isIndexable
        ? []
        : [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }]),
      {
        // Internal CMS template kept in /public; not a real page.
        source: "/case-study-template.html",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        // Static files in /public: cache for a week and revalidate, so renamed or replaced files still update.
        source: "/(images|icons)/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
      },
    ];
  },
};

export default nextConfig;
