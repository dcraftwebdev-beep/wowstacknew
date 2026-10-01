import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import DotMark from "@components/ui/DotMark/DotMark.jsx";
import styles from "./Navbar.module.css";

const smoothEase = [0.16, 1, 0.3, 1];

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Works" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

/* Dropdown menu — curated names that jump to specific home sections + pages. */
const menuLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/#idea", label: "The Big Idea" },
  { to: "/#services", label: "What We Do" },
  { to: "/#work", label: "Our Work" },
  { to: "/#why", label: "Why Wowstack" },
  { to: "/#faq", label: "Good to Know" },
  { to: "/contact", label: "Let’s Talk" },
];

const socials = [
  {
    label: "X",
    href: "https://x.com/wowstack",
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M5 5l14 14M19 5L5 19" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/wowstack",
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/wowstack",
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 10v7M7 7v0M11 17v-4a2 2 0 0 1 4 0v4" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Top bar — left links + centre logo */}
      <motion.header
        className={styles.nav}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: smoothEase }}
      >
        <nav className={styles.left} aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/" className={styles.logo} aria-label="Wowstack home">
          <img src="/logo/wowstack.webp" alt="Wowstack" className={styles.logoImg} />
        </Link>
      </motion.header>

      {/* Sticky right cluster — socials + Menu */}
      <motion.div
        className={styles.stickyRight}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: smoothEase }}
      >
        <div className={styles.socials}>
          {socials.map((s) => (
            <a key={s.label} className={styles.iconBtn} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
        <button className={styles.menuBtn} onClick={() => setOpen(true)} aria-expanded={open}>
          Menu
          <span className={styles.dots} aria-hidden="true">
            <i /><i /><i /><i />
          </span>
        </button>
      </motion.div>

      {/* Right-side wide dropdown panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className={styles.backdrop}
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 1, ease: "easeIn" } }}
              transition={{ duration: 0.55, ease: smoothEase }}
            />
            <motion.div
              className={styles.panel}
              initial={{ opacity: 0, scale: 0.9, clipPath: "inset(0px 0px 100% 100% round 24px)" }}
              animate={{ opacity: 1, scale: 1, clipPath: "inset(0px 0px 0px 0px round 24px)" }}
              exit={{
                opacity: 0,
                scale: 0.9,
                clipPath: "inset(0px 0px 100% 100% round 24px)",
                transition: {
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                  opacity: { duration: 0.9, ease: "easeIn", delay: 0.15 },
                },
              }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                opacity: { duration: 0.4, ease: "easeOut" },
              }}
            >
              <div className={styles.panelTop}>
                <Link to="/" className={styles.panelLogo} onClick={close} aria-label="Wowstack home">
                  <img src="/logo/logo-black.png" alt="Wowstack" className={styles.logoImg} />
                </Link>
                <button className={styles.close} onClick={close} aria-label="Close menu">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <div className={styles.panelBody}>
                <nav className={styles.panelLinks} aria-label="Menu">
                  {menuLinks.map((l) => (
                    <Link key={l.to} to={l.to} onClick={close} className={styles.panelLink}>
                      {l.label}
                    </Link>
                  ))}
                </nav>

                <Link to="/about" className={styles.story} onClick={close}>
                  <img className={styles.storyImg} src="/images/about/abouthero.png" alt="" />
                  <span className={styles.storyGlyph} aria-hidden="true">
                    <DotMark className={styles.storyDots} />
                  </span>
                  <span className={styles.storyLabel}>Our Story</span>
                </Link>
              </div>

              <div className={styles.panelFoot}>
                <span className={styles.tagline}>Web &amp; App Development Company</span>
                <div className={styles.footSocials}>
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
