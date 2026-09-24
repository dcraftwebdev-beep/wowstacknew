import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "@components/ui/Reveal/Reveal.jsx";
import styles from "./Testimonial.module.css";

/* A famous, widely-attributed line on why being online matters — credited, not
   fabricated. Avatar is an initials monogram (no real photo). */
export default function Testimonial() {
  return (
    <section className={`${styles.section} edgeFade`} aria-label="Why being online matters">
      <div className={styles.inner}>
        <Reveal direction="up" distance={30} duration={0.9}>
          <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>

          <blockquote className={styles.quote}>
            If your business is not on the internet, then your business will be
            out of business.
          </blockquote>

          <span className={`${styles.quoteMark} ${styles.quoteClose}`} aria-hidden="true">
            &rdquo;
          </span>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className={styles.ctaWrap}>
            <Link to="/contact" className={styles.cta}>
              Get your business online
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </motion.div>
        </Reveal>

        <div className={styles.footer}>
          <span className={styles.brand}>Wowstack</span>

          <figcaption className={styles.author}>
            <span className={styles.avatar} aria-hidden="true">BG</span>
            <span className={styles.authorText}>
              <span className={styles.authorName}>Bill Gates</span>
              <span className={styles.authorRole}>Co-founder, Microsoft</span>
            </span>
          </figcaption>
        </div>
      </div>
    </section>
  );
}
