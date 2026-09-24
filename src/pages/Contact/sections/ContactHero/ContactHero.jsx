import { motion } from "framer-motion";
import DotMark from "@components/ui/DotMark/DotMark.jsx";
import styles from "./ContactHero.module.css";

const smoothEase = [0.16, 1, 0.3, 1];

/** Contact page hero — full-bleed banner with headline and contact methods. */
export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: smoothEase }}
        >
          <span className={styles.eyebrow}>
            <DotMark className={styles.eyebrowDots} />
            Talk to the GOATs
          </span>

          <h1 className={styles.title}>
            Let&rsquo;s make your brand
            <br />
            <span className={styles.accent}>the one to beat</span>
          </h1>

          <p className={styles.sub}>
            Bring us your boldest idea &mdash; no queues, no juniors, no runaround.
            We&rsquo;ll design, build and grow it until you&rsquo;re the one everyone else
            is chasing.
          </p>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className={styles.ctaWrap}>
            <a href="#start" className={styles.cta}>
              Put us to work
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
