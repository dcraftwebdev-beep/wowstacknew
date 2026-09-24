import { siteConfig, absoluteUrl } from "../seo.config.js";

/** Organization + logo. Establishes the brand entity for SEO knowledge panels. */
export function organizationSchema() {
  const { organization, name, url } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}/#organization`,
    name,
    legalName: organization.legalName,
    url,
    logo: absoluteUrl(organization.logo),
    email: organization.email,
    description: siteConfig.description,
    sameAs: organization.sameAs,
  };
}
