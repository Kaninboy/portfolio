// Generates the link-preview card (LinkedIn, LINE, Slack, X):
//   src/app/opengraph-image.jpg + opengraph-image.alt.txt
// Run `npm run og` after changing the hero copy or profile photo, and commit the output.
//
// Why a script and not app/opengraph-image.tsx: next/og's ImageResponse only emits
// PNG, and this card comes out at ~430 KB as PNG versus ~53 KB as JPEG here. Some
// chat apps drop large preview images, so the smaller JPEG wins. (Tested on Next 16:
// the route itself builds fine on Windows; Next 14's did not.)
//
// Glass Aurora palette: --bg, --fgx, --soft2, --muted, --dim; aurora blobs are sRGB
// approximations of the oklch values in Aurora.tsx (satori has no oklch or blur).

import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import sharp from "sharp";
import { hero } from "../src/data/profile.ts";

const root = process.cwd();
const fontDir = join(root, "node_modules/@fontsource/inter/files");
const width = 1200;
const height = 630;
const siteHost = "kaninboy.vercel.app";

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown, extra = {}): Node => ({
  type,
  props: { style, children, ...extra },
});

const [photo, inter400, inter700] = await Promise.all([
  readFile(join(root, "public/profile.jpg")),
  readFile(join(fontDir, "inter-latin-400-normal.woff")),
  readFile(join(fontDir, "inter-latin-700-normal.woff")),
]);

const card = h(
  "div",
  {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding: "0 96px",
    gap: 72,
    backgroundColor: "#060608",
    backgroundImage: [
      "radial-gradient(circle at 12% 0%, rgba(84, 122, 232, 0.5), transparent 55%)",
      "radial-gradient(circle at 92% 12%, rgba(140, 96, 220, 0.42), transparent 50%)",
      "radial-gradient(circle at 55% 115%, rgba(112, 108, 222, 0.3), transparent 55%)",
    ].join(", "),
    fontFamily: "Inter",
  },
  [
    // Same upright pill as the hero: native 3:4, no crop.
    h("img", { borderRadius: 9999, objectFit: "cover" }, undefined, {
      src: `data:image/jpeg;base64,${photo.toString("base64")}`,
      width: 330,
      height: 440,
    }),
    h("div", { display: "flex", flexDirection: "column", flex: 1 }, [
      h(
        "div",
        {
          display: "flex",
          flexDirection: "column",
          fontSize: 58,
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: "-0.02em",
          color: "#ffffff",
        },
        [h("span", {}, hero.name), h("span", { color: "#a9a9b3" }, `(${hero.nickname})`)],
      ),
      h("div", { marginTop: 32, fontSize: 32, color: "#d6d6dc" }, hero.tagline),
      h("div", { marginTop: 12, fontSize: 24, lineHeight: 1.4, color: "#a9a9b3" }, hero.interests),
      h("div", { marginTop: 48, fontSize: 24, color: "#8e8e98" }, siteHost),
    ]),
  ],
);

const svg = await satori(card as never, {
  width,
  height,
  fonts: [
    { name: "Inter", data: inter400, weight: 400, style: "normal" },
    { name: "Inter", data: inter700, weight: 700, style: "normal" },
  ],
});

const png = new Resvg(svg, { fitTo: { mode: "width", value: width } }).render().asPng();
// JPEG keeps the card well under the ~300 KB some chat apps accept for previews.
const jpg = await sharp(png).jpeg({ quality: 86, mozjpeg: true }).toBuffer();

await writeFile(join(root, "src/app/opengraph-image.jpg"), jpg);
await writeFile(
  join(root, "src/app/opengraph-image.alt.txt"),
  `${hero.name} (${hero.nickname}), ${hero.tagline}`,
);
console.log(`Wrote src/app/opengraph-image.jpg (${width}×${height}, ${(jpg.length / 1024).toFixed(0)} KB)`);
