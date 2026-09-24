import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "@components/ui/Reveal/Reveal.jsx";
import styles from "./ContactBanner.module.css";

/** Full-width contact CTA banner. */
export default function ContactBanner() {
  return (
    <section className={styles.banner} aria-label="Start a project">
      <div className={styles.scrim} aria-hidden="true" />

      <Reveal direction="up" distance={30} duration={0.95} className={styles.inner}>
        <h2 className={styles.heading}>
          We&rsquo;re ready
          <br />
          <span className={styles.accent}>to take your call</span>
        </h2>
        <p className={styles.sub}>
          Got a project in mind? Skip the runaround &mdash; talk to a real person
          who&rsquo;ll help you plan the next step.
        </p>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className={styles.ctaWrap}>
          <Link to="/contact" className={styles.cta}>
            Let&rsquo;s talk
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </motion.div>
      </Reveal>
    </section>
  );
}
