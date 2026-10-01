import { motion } from "framer-motion";
import DotMark from "@components/ui/DotMark/DotMark.jsx";
import Button from "@components/ui/Button/Button.jsx";
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

          <div className={styles.ctaWrap}>
            <Button href="#start">Put us to work</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
