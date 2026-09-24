import { siteConfig, absoluteUrl } from "../seo.config.js";

/**
 * Service schema — describes a single offering (e.g. "Web Development").
 * @param {object} s
 * @param {string} s.name
 * @param {string} s.description
 * @param {string} s.path        canonical page for this service
 * @param {string} [s.serviceType]
 */
export function serviceSchema({ name, description, path, serviceType }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType || name,
    url: absoluteUrl(path),
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: "Worldwide",
  };
}
