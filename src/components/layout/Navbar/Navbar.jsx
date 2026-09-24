import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

const smoothEase = [0.16, 1, 0.3, 1];

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Works" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
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
    label: "Website",
    href: "https://wowstack.com",
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock scroll while the menu overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      <motion.header
        className={styles.nav}
        initial={{ y: -40, opacity: 0 }}
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

      {/* Sticky right cluster — stays visible while scrolling */}
      <motion.div
        className={styles.stickyRight}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: smoothEase }}
      >
        <div className={styles.socials}>
          {socials.map((s) => (
            <motion.a
              key={s.label}
              className={styles.iconBtn}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
        <motion.button
          className={styles.menuBtn}
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Menu
          <span className={styles.dots} aria-hidden="true">
            <i /><i /><i /><i />
          </span>
        </motion.button>
      </motion.div>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={`${styles.overlay} ${styles.overlayOpen}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: smoothEase }}
          >
            <button className={styles.close} onClick={() => setOpen(false)} aria-label="Close menu">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <nav className={styles.overlayLinks} aria-label="Menu">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.4, ease: smoothEase }}
                >
                  <NavLink
                    to={l.to}
                    end={l.end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => (isActive ? `${styles.overlayLink} ${styles.active}` : styles.overlayLink)}
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <div className={styles.overlaySocials}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
