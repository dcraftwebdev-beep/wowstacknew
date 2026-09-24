/**
 * Generates real brand-logo SVGs for the About → tech-stack section.
 * Source: the `simple-icons` package (official icon paths + brand colors).
 * Very dark brand colors are rendered white so they stay visible on the
 * dark tiles. Re-run with: node scripts/generate-tech-icons.js
 */
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import * as si from "simple-icons";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "../public/images/tech");

// slug = simple-icons slug (used for the icon key + output filename)
const SLUGS = [
  // Row 1 — build / develop
  "react",
  "nextdotjs",
  "nodedotjs",
  "typescript",
  "vite",
  "threedotjs",
  "greensock",
  "framer",
  "tailwindcss",
  "supabase",
  "postgresql",
  // Row 2 — design / ship / automate / AI
  "figma",
  "sketch",
  "blender",
  "shopify",
  "webflow",
  "vercel",
  "cloudflare",
  "github",
  "hubspot",
  "anthropic",
  "n8n",
];

// Relative luminance — dark logos get a white fill so they read on dark tiles.
function isDark(hex) {
  const n = parseInt(hex, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return lum < 0.22;
}

function keyFor(slug) {
  return "si" + slug.charAt(0).toUpperCase() + slug.slice(1);
}

const run = async () => {
  await mkdir(OUT_DIR, { recursive: true });
  const missing = [];
  let written = 0;

  for (const slug of SLUGS) {
    const icon = si[keyFor(slug)];
    if (!icon) {
      missing.push(slug);
      continue;
    }
    const fill = isDark(icon.hex) ? "#FFFFFF" : `#${icon.hex}`;
    const svg =
      `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="${fill}">` +
      `<title>${icon.title}</title><path d="${icon.path}"/></svg>\n`;
    await writeFile(resolve(OUT_DIR, `${slug}.svg`), svg, "utf8");
    written++;
  }

  console.log(`✓ wrote ${written} tech icons to public/images/tech/`);
  if (missing.length) console.warn("⚠ missing in simple-icons:", missing.join(", "));
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
