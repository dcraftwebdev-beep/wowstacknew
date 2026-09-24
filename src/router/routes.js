import { lazy } from "react";

/**
 * Route table — single source of truth for paths.
 * Pages are lazy-loaded so each route ships as its own chunk.
 */
const Home = lazy(() => import("@pages/Home/Home.jsx"));
const About = lazy(() => import("@pages/About/About.jsx"));
const Services = lazy(() => import("@pages/Services/Services.jsx"));
const Portfolio = lazy(() => import("@pages/Portfolio/Portfolio.jsx"));
const Blog = lazy(() => import("@pages/Blog/Blog.jsx"));
const Contact = lazy(() => import("@pages/Contact/Contact.jsx"));
const NotFound = lazy(() => import("@pages/NotFound/NotFound.jsx"));

export const routes = [
  { path: "/", element: Home, label: "Home" },
  { path: "/about", element: About, label: "About" },
  { path: "/services", element: Services, label: "Services" },
  { path: "/portfolio", element: Portfolio, label: "Portfolio" },
  { path: "/blog", element: Blog, label: "Blog" },
  { path: "/contact", element: Contact, label: "Contact" },
  { path: "*", element: NotFound, label: "Not Found" },
];

/** Nav links (exclude the catch-all). */
export const navLinks = routes
  .filter((r) => r.path !== "*" && r.path !== "/")
  .map(({ path, label }) => ({ path, label }));
