import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionIndex from "@components/ui/SectionIndex/SectionIndex.jsx";
import FallbackImg from "@components/ui/FallbackImg/FallbackImg.jsx";
import Reveal, { StaggerContainer, StaggerItem } from "@components/ui/Reveal/Reveal.jsx";
import styles from "./StandOut.module.css";

/** "Stand out from the herd" section — cow image bleeds to the left edge. */
export default function StandOut() {
  return (
    <section className={`${styles.section} edgeFade`}>
      <Reveal direction="none" duration={1.2}>
        <span className={styles.watermark} aria-hidden="true">STAND OUT</span>
      </Reveal>
      <div className={styles.inner}>
        {/* Image — bleeds to the left edge */}
        <Reveal direction="left" distance={40} duration={1.1} scale={0.97} className={styles.visual}>
          <FallbackImg
            src="/images/goat.png"
            alt="A llama wearing cool sunglasses, standing out from the crowd"
            className={styles.img}
            fallbackClassName={styles.mediaFallback}
          />
        </Reveal>

        {/* Text — right side */}
        <StaggerContainer className={styles.text} stagger={0.14} amount={0.15}>
          <StaggerItem y={20}>
            <SectionIndex number="04" label="Stand out" />
          </StaggerItem>

          <StaggerItem y={36} duration={0.95}>
            <h2 className={styles.heading}>
              Most websites look the same.{" "}
              <span className={styles.faded}>Yours shouldn&rsquo;t.</span>
            </h2>
          </StaggerItem>

          <StaggerItem y={28} duration={0.9}>
            <p className={styles.body}>
              We don&rsquo;t use cookie-cutter templates. Every Wowstack site is designed to
              look distinct, on-brand, and impossible to ignore — so people remember you, not
              scroll past you.
            </p>
          </StaggerItem>

          <StaggerItem y={20} duration={0.85}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className={styles.cta}>
                Get a site that stands out
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
