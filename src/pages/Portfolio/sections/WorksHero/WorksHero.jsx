import { motion } from "framer-motion";
import DotMark from "@components/ui/DotMark/DotMark.jsx";
import styles from "./WorksHero.module.css";

const smoothEase = [0.16, 1, 0.3, 1];

/** Portfolio hero — full-bleed banner with an editorial headline. */
export default function WorksHero() {
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
            Our works
          </span>

          <h1 className={styles.title}>
            Work that speaks
            <br />
            <span className={styles.accent}>for itself</span>
          </h1>

          <p className={styles.sub}>
            A look at products we&rsquo;ve designed, built and shipped &mdash; fast,
            clean, and made to convert.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
