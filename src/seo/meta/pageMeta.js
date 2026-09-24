/**
 * Central per-route metadata registry.
 * Keeping titles/descriptions here (not scattered in components) makes them
 * easy to audit, translate, and feed to the sitemap generator.
 */

export const pageMeta = {
  home: {
    path: "/",
    title: "", // empty → brand + tagline (see formatTitle)
    description:
      "Wowstack designs and builds high-performance websites, web apps, and mobile apps. Strategy, design, and engineering under one roof.",
    priority: 1.0,
    changefreq: "weekly",
  },
  services: {
    path: "/services",
    title: "Services",
    description:
      "Web development, mobile app development, product design, and engineering — end to end.",
    priority: 0.9,
    changefreq: "monthly",
  },
  portfolio: {
    path: "/portfolio",
    title: "Portfolio",
    description: "Selected work: websites, web apps, and mobile products we've shipped.",
    priority: 0.8,
    changefreq: "weekly",
  },
  about: {
    path: "/about",
    title: "About",
    description: "Who we are, how we work, and why teams choose Wowstack.",
    priority: 0.7,
    changefreq: "monthly",
  },
  blog: {
    path: "/blog",
    title: "Blog",
    description: "Ideas on web, mobile, design, and building great products.",
    priority: 0.7,
    changefreq: "weekly",
  },
  contact: {
    path: "/contact",
    title: "Contact",
    description: "Tell us about your project. Get a proposal from Wowstack.",
    priority: 0.6,
    changefreq: "yearly",
  },
};

/** Routes fed to the sitemap generator. Extend with dynamic entries (blog posts) at build time. */
export const staticRoutes = Object.values(pageMeta).map(({ path, priority, changefreq }) => ({
  path,
  priority,
  changefreq,
}));
