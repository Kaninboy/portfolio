// Builds the web copies of certificate images:
//   assets/certificates/<name>.(jpg|png)  →  public/certificates/<name>.webp
// Run `npm run certs` after adding or replacing a file in assets/certificates, and
// commit the output. The originals in assets/ are not served.
//
// - trim: strips the plain margin around the certificate (Coursera's share image has
//   wide white side bars; Skilljar has a white page margin).
// - redact: solid white boxes over personal identifiers that shouldn't be public.
//   A filled box, not a blur, so the digits can't be recovered.

import { mkdir, readdir } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

const root = process.cwd();
const srcDir = join(root, "assets/certificates");
const outDir = join(root, "public/certificates");
const maxWidth = 1600;

type Box = { left: number; top: number; width: number; height: number };
const options: Record<string, { trim?: boolean; redact?: Box[] }> = {
  "anthropic-claude-101": { trim: true },
  "coursera-figma-css-website": { trim: true },
  "coursera-figma-wireframe": { trim: true },
  "ibm-agile-scrum": { trim: true },
  "ibm-excel-basics": { trim: true },
  "ibm-intro-data-analytics": { trim: true },
  "umd-innovative-ideas": { trim: true },
  "microsoft-dp900": { trim: true },
  // Student ID after the course code (bottom left), in original-image pixels.
  "chula-intro-data-analytics-big-data": {
    redact: [{ left: 845, top: 2000, width: 225, height: 62 }],
  },
};

await mkdir(outDir, { recursive: true });

for (const file of (await readdir(srcDir)).sort()) {
  const { name, ext } = parse(file);
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext.toLowerCase())) continue;
  const opts = options[name] ?? {};

  let image = sharp(join(srcDir, file));
  if (opts.redact?.length) {
    const { width, height } = await image.metadata();
    const boxes = opts.redact.map((box) => ({
      input: {
        create: { width: box.width, height: box.height, channels: 3 as const, background: "#ffffff" },
      },
      left: box.left,
      top: box.top,
    }));
    image = sharp(await image.composite(boxes).toBuffer());
    console.log(`  redacted ${opts.redact.length} area(s) in ${file} (${width}x${height})`);
  }
  if (opts.trim) image = sharp(await image.trim({ threshold: 20 }).toBuffer());

  const info = await image
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(join(outDir, `${name}.webp`));
  console.log(`${name}.webp  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
}
