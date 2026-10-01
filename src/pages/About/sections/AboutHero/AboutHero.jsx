import { motion } from "framer-motion";
import DotMark from "@components/ui/DotMark/DotMark.jsx";
import Button from "@components/ui/Button/Button.jsx";
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

          <div className={styles.ctaWrap}>
            <Button to="/contact">Work with us</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
