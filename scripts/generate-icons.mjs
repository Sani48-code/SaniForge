/**
 * Generates the site's favicons from the logo mark.
 *
 *   node scripts/generate-icons.mjs
 *
 * Source: public/images/saniforge-mark.png
 * Output:
 *   app/favicon.ico        16, 32, 48 (PNG frames in an ICO container)
 *   app/icon.png           512x512  (Next.js serves it at /icon.png and emits <link rel="icon">)
 *   app/apple-icon.png     180x180  (Next.js emits <link rel="apple-touch-icon">)
 *   public/icon-192.png    192x192  (referenced by app/manifest.ts)
 *
 * Every icon is square, with the mark centred on a solid white background and some padding,
 * so it reads the same on light and dark search results and survives Google's circular crop.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = path.join(root, "public/images/saniforge-mark.png");
const BACKGROUND = { r: 255, g: 255, b: 255, alpha: 1 };
// Share of the canvas left empty on each side.
const PADDING = 0.1;

async function renderIcon(size) {
  const inner = Math.round(size * (1 - PADDING * 2));
  const mark = await sharp(SOURCE)
    .trim() // drop any transparent border in the source so padding is exact
    .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: BACKGROUND } })
    .composite([{ input: mark, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/** Packs PNG images into a .ico file (PNG-in-ICO is supported by every current browser). */
function buildIco(entries) {
  const HEADER = 6;
  const DIR_ENTRY = 16;
  const header = Buffer.alloc(HEADER);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(entries.length, 4);

  let offset = HEADER + DIR_ENTRY * entries.length;
  const dir = entries.map(({ size, png }) => {
    const e = Buffer.alloc(DIR_ENTRY);
    e.writeUInt8(size >= 256 ? 0 : size, 0); // width
    e.writeUInt8(size >= 256 ? 0 : size, 1); // height
    e.writeUInt8(0, 2); // palette colours
    e.writeUInt8(0, 3); // reserved
    e.writeUInt16LE(1, 4); // colour planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(png.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += png.length;
    return e;
  });
  return Buffer.concat([header, ...dir, ...entries.map((e) => e.png)]);
}

async function main() {
  const out = async (rel, buf) => {
    const file = path.join(root, rel);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, buf);
    console.log(`wrote ${rel} (${buf.length} bytes)`);
  };

  await out("app/icon.png", await renderIcon(512));
  await out("public/icon-192.png", await renderIcon(192));
  await out("app/apple-icon.png", await renderIcon(180));

  // Largest first: Next.js reads the first frame to fill the <link rel="icon" sizes> attribute,
  // and Google wants a favicon of at least 48x48.
  const icoSizes = [48, 32, 16];
  const frames = await Promise.all(icoSizes.map(async (size) => ({ size, png: await renderIcon(size) })));
  await out("app/favicon.ico", buildIco(frames));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
