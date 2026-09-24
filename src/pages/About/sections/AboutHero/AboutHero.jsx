import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DotMark from "@components/ui/DotMark/DotMark.jsx";
import styles from "./AboutHero.module.css";

const smoothEase = [0.16, 1, 0.3, 1];

/** About page hero — full-bleed background image with an editorial headline. */
export default function AboutHero() {
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
            About Wowstack
          </span>

          <h1 className={styles.title}>
            We don&rsquo;t follow
            <br />
            <span className={styles.accent}>the flock</span>
          </h1>

          <p className={styles.sub}>
            We help ambitious brands break from the herd &mdash; and get noticed.
          </p>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className={styles.ctaWrap}>
            <Link to="/contact" className={styles.cta}>
              Work with us
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
