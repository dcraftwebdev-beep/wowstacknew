import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DotMark from "@components/ui/DotMark/DotMark.jsx";
import styles from "./ServicesHero.module.css";

const smoothEase = [0.16, 1, 0.3, 1];

const features = [
  { title: "Fixed Scope &", sub: "Clear Pricing" },
  { title: "Real Support,", sub: "After Launch" },
];

/** Services page hero — full-bleed image with editorial content over it. */
export default function ServicesHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Left — headline block */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: smoothEase }}
        >
          <span className={styles.eyebrow}>
            <DotMark className={styles.eyebrowDots} />
            Let&rsquo;s build something great
          </span>

          <h1 className={styles.title}>
            We&rsquo;re working to
            <br />
            <span className={styles.accent}>grow your business</span>
          </h1>

          <p className={styles.sub}>
            Behind every launch is a team heads-down on design, code and SEO —
            building, testing and optimising until your numbers move.
          </p>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link to="/contact" className={styles.cta}>
              Start your project
            </Link>
          </motion.div>
        </motion.div>

        {/* Right — feature callouts */}
        <motion.div
          className={styles.features}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4, ease: smoothEase }}
        >
          {features.map((f) => (
            <div className={styles.feature} key={f.title}>
              <DotMark className={styles.featDots} />
              <p className={styles.featTitle}>{f.title}</p>
              <p className={styles.featSub}>{f.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
