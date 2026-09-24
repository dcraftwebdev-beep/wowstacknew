import { absoluteUrl } from "../seo.config.js";

/**
 * BreadcrumbList. Helps search engines render breadcrumb rich results.
 * @param {{name: string, path: string}[]} items ordered root → current
 */
export function breadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
