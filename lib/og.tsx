import { readFile } from "fs/promises";
import path from "path";
import { ImageResponse } from "next/og";
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from "@/lib/site";

/** Shared renderer for generated Open Graph images (app/**\/opengraph-image.tsx). */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Fonts are vendored (OFL) so builds and runtime regeneration never depend on the network.
// They are listed in outputFileTracingIncludes in next.config.mjs.
const fontDir = path.join(process.cwd(), "assets/fonts");

async function loadFonts() {
  const [display, regular, semibold] = await Promise.all([
    readFile(path.join(fontDir, "plus-jakarta-sans-latin-800-normal.woff")),
    readFile(path.join(fontDir, "inter-latin-400-normal.woff")),
    readFile(path.join(fontDir, "inter-latin-600-normal.woff")),
  ]);
  return [
    { name: "Jakarta", data: display, weight: 800 as const, style: "normal" as const },
    { name: "Inter", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Inter", data: semibold, weight: 600 as const, style: "normal" as const },
  ];
}

/** Read a file from /public as a data URL for <img> inside ImageResponse. */
export async function publicImageDataUrl(publicPath: string): Promise<string | null> {
  if (!publicPath.startsWith("/")) return null;
  const ext = path.extname(publicPath).slice(1).toLowerCase();
  const mime = ext === "jpg" || ext === "jpeg" ? "image/jpeg" : ext === "png" ? "image/png" : null;
  if (!mime) return null; // Satori only decodes PNG and JPEG reliably.
  try {
    const buf = await readFile(path.join(process.cwd(), "public", publicPath));
    return `data:${mime};base64,${buf.toString("base64")}`;
  } catch {
    return null;
  }
}

type CardProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Up to three short proof figures shown along the bottom. */
  stats?: { value: string; label: string }[];
  /** Optional data URL of a portrait shown on the right. */
  portrait?: string | null;
};

const host = SITE_URL.replace(/^https?:\/\//, "");

/** Branded card in the site's navy and amber palette. */
export async function renderOgCard({ eyebrow, title, subtitle, stats, portrait }: CardProps) {
  const titleSize = title.length > 70 ? 54 : title.length > 45 ? 62 : 72;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #0B1A3D 0%, #12306F 60%, #1E3A8A 100%)",
          color: "#FFFFFF",
          fontFamily: "Inter",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -160,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0) 70%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                padding: "10px 22px",
                borderRadius: 9999,
                border: "2px solid rgba(245,158,11,0.6)",
                background: "rgba(245,158,11,0.14)",
                color: "#FCD34D",
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </div>
            <div
              style={{
                marginTop: 30,
                fontFamily: "Jakarta",
                fontWeight: 800,
                fontSize: titleSize,
                display: "flex",
                flexDirection: "column",
                lineHeight: 1.08,
                letterSpacing: -1.5,
                maxWidth: portrait ? 720 : 1040,
              }}
            >
              {/* A "\n" in the title forces a line break (avoids awkward breaks at hyphens). */}
              {title.split("\n").map((line) => (
                <div key={line} style={{ display: "flex" }}>
                  {line}
                </div>
              ))}
            </div>
            {subtitle && (
              <div style={{ marginTop: 22, fontSize: 28, lineHeight: 1.35, color: "#CBD5E1", maxWidth: portrait ? 700 : 960 }}>
                {subtitle}
              </div>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {stats && stats.length > 0 && (
              <div style={{ display: "flex", gap: 18, marginBottom: 28 }}>
                {stats.slice(0, 3).map((s) => (
                  <div
                    key={s.label}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "16px 22px",
                      borderRadius: 18,
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      maxWidth: 330,
                    }}
                  >
                    <div style={{ fontFamily: "Jakarta", fontWeight: 800, fontSize: 36, color: "#34D399" }}>{s.value}</div>
                    <div style={{ fontSize: 18, color: "#CBD5E1", marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            )}
            <div style={{ display: "flex", alignItems: "center", fontSize: 24, color: "#E2E8F0" }}>
              <div style={{ fontFamily: "Jakarta", fontWeight: 800, color: "#FFFFFF" }}>{SITE_NAME}</div>
              <div style={{ margin: "0 14px", color: "#64748B" }}>·</div>
              <div style={{ fontWeight: 600 }}>{AUTHOR_NAME}</div>
              <div style={{ margin: "0 14px", color: "#64748B" }}>·</div>
              <div style={{ color: "#94A3B8" }}>{host}</div>
            </div>
          </div>
        </div>

        {portrait && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginLeft: 24 }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain <img>, not next/image */}
            <img
              src={portrait}
              width={330}
              height={330}
              style={{ borderRadius: 9999, border: "8px solid rgba(245,158,11,0.75)", objectFit: "cover" }}
              alt=""
            />
          </div>
        )}
      </div>
    ),
    { ...OG_SIZE, fonts: await loadFonts() },
  );
}

/** Serve an existing designed share image (PNG/JPEG in /public) at OG size. */
export async function renderOgFromFile(dataUrl: string) {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain <img>, not next/image */}
        <img src={dataUrl} width={OG_SIZE.width} height={OG_SIZE.height} style={{ objectFit: "cover" }} alt="" />
      </div>
    ),
    OG_SIZE,
  );
}
