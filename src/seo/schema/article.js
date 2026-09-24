import { siteConfig, absoluteUrl } from "../seo.config.js";

/**
 * Article / BlogPosting schema for blog content.
 * @param {object} a
 * @param {string} a.title
 * @param {string} a.description
 * @param {string} a.path
 * @param {string} a.image
 * @param {string} a.datePublished  ISO 8601
 * @param {string} [a.dateModified] ISO 8601
 * @param {string} [a.author]
 */
export function articleSchema({
  title,
  description,
  path,
  image,
  datePublished,
  dateModified,
  author = siteConfig.name,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: absoluteUrl(image || siteConfig.defaultOgImage),
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
    datePublished,
    dateModified: dateModified || datePublished,
    author: { "@type": "Organization", name: author },
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}
