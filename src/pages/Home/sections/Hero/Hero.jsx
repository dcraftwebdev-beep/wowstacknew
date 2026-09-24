import { motion } from "framer-motion";
import HeroVisual from "./HeroVisual.jsx";
import styles from "./Hero.module.css";

const smoothEase = [0.16, 1, 0.3, 1];

/** Section 1 — Wowstack editorial hero (web · apps · SEO) with page-load animations. */
export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Giant faded brand watermark behind the phone */}
      <motion.span
        className={styles.watermark}
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.05, x: "-50%", y: "-50%" }}
        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
        transition={{ duration: 1.5, ease: smoothEase }}
      >
        WOWSTACK
      </motion.span>

      <div className={styles.stage}>
        {/* Headline (top-left) */}
        <motion.div
          className={styles.headline}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: smoothEase }}
        >
          <h1 className={styles.title}>
            Websites, apps
            <br />
            &amp; SEO that make
            <br />
            <span className={styles.faded}>brands grow</span>
          </h1>
        </motion.div>

        {/* Intro paragraph (top-right) — same entrance as the headline so both
            start on the same line with no vertical offset. */}
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: smoothEase }}
        >
          Wowstack designs and builds fast websites and mobile apps— then optimizes
          them for search and AI engines, turning attention into real growth.
        </motion.p>

        {/* Phone centerpiece — CSS entrance + gentle float (reliable on load) */}
        <div className={styles.phone}>
          <div className={styles.phoneEnter}>
            <div className={styles.phoneFloat}>
              <HeroVisual />
            </div>
          </div>
        </div>

        {/* Right column */}
        <motion.div
          className={styles.rightMeta}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.5, ease: smoothEase }}
        >
          <p className={styles.date}>
            Available
            <br />
            for work
          </p>
        </motion.div>

        <motion.p
          className={styles.location}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.6, ease: smoothEase }}
        >
          <span className={styles.metaLabel}>Working</span>
          <br />
          Worldwide
        </motion.p>

        {/* Circular quick actions */}
        <motion.div
          className={styles.controls}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: smoothEase }}
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className={styles.circle}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M7 6h2v12H7zM20 6v12L9 12z" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className={styles.circle}
            aria-label="Play"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className={styles.circle}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M15 6h2v12h-2zM4 6l11 6L4 18z" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
