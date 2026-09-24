/**
 * Build-time sitemap generator. Runs before `vite build` (see package.json).
 *
 * Static routes come from the SEO meta registry. To add dynamic URLs (blog
 * posts, portfolio items), fetch their slugs from Supabase here and push them
 * into `entries` before writing.
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { staticRoutes } from "../src/seo/meta/pageMeta.js";

const SITE_URL = (process.env.VITE_SITE_URL || "https://wowstack.com").replace(/\/$/, "");
const today = new Date().toISOString().split("T")[0];

const entries = [...staticRoutes];

// Example — dynamic entries from Supabase:
// const { data: posts } = await supabaseAdmin.from("posts").select("slug, updated_at");
// posts?.forEach((p) => entries.push({ path: `/blog/${p.slug}`, priority: 0.6, changefreq: "monthly" }));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${SITE_URL}${e.path === "/" ? "/" : e.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const out = resolve(dirname(fileURLToPath(import.meta.url)), "../public/sitemap.xml");
writeFileSync(out, xml);
console.log(`[seo] sitemap.xml written with ${entries.length} URLs → ${out}`);
