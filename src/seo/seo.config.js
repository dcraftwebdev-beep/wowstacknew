/**
 * Site-wide SEO defaults. Single source of truth for canonical origin,
 * brand name, default social image, and template for page titles.
 *
 * Read from Vite env where available so prod/staging differ safely.
 */

export const siteConfig = {
  name: import.meta.env.VITE_SITE_NAME || "Wowstack",
  url: (import.meta.env.VITE_SITE_URL || "https://wowstack.com").replace(/\/$/, ""),
  tagline: "Web & App Development Company",
  description:
    "Wowstack designs and builds high-performance websites, web apps, and mobile apps. Strategy, design, and engineering under one roof.",
  locale: "en_US",
  lang: "en",
  twitter: "@wowstack",
  defaultOgImage: "/og/default.png",
  themeColor: "#0b0b0f",

  organization: {
    legalName: "Wowstack",
    email: "hello@wowstack.com",
    logo: "/og/logo.png",
    sameAs: [
      // "https://www.linkedin.com/company/wowstack",
      // "https://twitter.com/wowstack",
      // "https://github.com/wowstack",
    ],
  },
};

/** Build a full title: "Page — Wowstack" (home uses the brand + tagline). */
export function formatTitle(pageTitle) {
  if (!pageTitle) return `${siteConfig.name} — ${siteConfig.tagline}`;
  return `${pageTitle} — ${siteConfig.name}`;
}

/** Resolve a possibly-relative path to an absolute canonical URL. */
export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
