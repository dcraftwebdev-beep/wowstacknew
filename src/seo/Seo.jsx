import { siteConfig, formatTitle, absoluteUrl } from "./seo.config.js";

/**
 * <Seo> — declarative per-page head manager.
 *
 * React 19 hoists <title>, <meta>, and <link> rendered anywhere in the tree
 * into <head>, so this component needs no external library (no react-helmet).
 * Drop it at the top of any page/route.
 *
 * @param {object}   props
 * @param {string}   [props.title]        Page title (brand appended automatically).
 * @param {string}   [props.description]  Meta description.
 * @param {string}   [props.path]         Route path for canonical + og:url (e.g. "/services").
 * @param {string}   [props.image]        Social share image (absolute or root-relative).
 * @param {"website"|"article"} [props.type]
 * @param {boolean}  [props.noindex]      Exclude from search indexes.
 * @param {object[]} [props.jsonLd]       Array of JSON-LD graph objects to embed.
 */
export default function Seo({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.defaultOgImage,
  type = "website",
  noindex = false,
  jsonLd = [],
}) {
  const fullTitle = formatTitle(title);
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(image);

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}
      />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={siteConfig.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteConfig.twitter} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured data (SEO + AEO) */}
      {jsonLd.map((graph, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON-LD is data, not markup — safe to stringify here.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      ))}
    </>
  );
}
