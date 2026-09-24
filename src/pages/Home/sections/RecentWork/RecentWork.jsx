import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionIndex from "@components/ui/SectionIndex/SectionIndex.jsx";
import FallbackImg from "@components/ui/FallbackImg/FallbackImg.jsx";
import Reveal, { StaggerContainer, StaggerItem } from "@components/ui/Reveal/Reveal.jsx";
import styles from "./RecentWork.module.css";

const work = [
  { img: "/images/recent-works/dentaldesk.png", alt: "Dental clinic — website homepage" },
  { img: "/images/recent-works/dentalabout.png", alt: "Dental clinic — about page" },
  { img: "/images/recent-works/dentalbooking.png", alt: "Dental clinic — booking flow" },
  { img: "/images/recent-works/dentalmobile.png", alt: "Dental clinic — mobile app" },
];

function WorkCard({ img, alt }) {
  const ref = useRef(null);
  const cursorRef = useRef(null);
  const [show, setShow] = useState(false);

  // Position the arrow imperatively — no React re-render per mousemove, and
  // no CSS transition on translate, so it tracks the pointer with zero lag.
  const move = (e) => {
    const box = ref.current;
    const el = cursorRef.current;
    if (!box || !el) return;
    const r = box.getBoundingClientRect();
    el.style.transform = `translate3d(${e.clientX - r.left}px, ${e.clientY - r.top}px, 0)`;
  };
  const enter = (e) => {
    move(e);
    setShow(true);
  };
  const leave = () => setShow(false);

  return (
    <Link
      to="/portfolio"
      ref={ref}
      className={styles.card}
      onMouseEnter={enter}
      onMouseMove={move}
      onMouseLeave={leave}
      aria-label={alt}
    >
      <FallbackImg src={img} alt={alt} className={styles.cardImg} fallbackClassName={styles.mediaFallback} />
      <span ref={cursorRef} className={styles.cursor} aria-hidden="true">
        <span className={`${styles.cursorDot} ${show ? styles.cursorShow : ""}`}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </span>
      </span>
    </Link>
  );
}

export default function RecentWork() {
  return (
    <section className={`${styles.section} edgeFade`}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <Reveal direction="up" distance={30} duration={0.9} className={styles.headLeft}>
            <SectionIndex number="05" label="Recent work" />
            <h2 className={styles.heading}>Work that makes brands hard to ignore</h2>
          </Reveal>

          <Reveal direction="up" distance={30} duration={0.9} delay={0.15} className={styles.headRight}>
            <p className={styles.lead}>
              A look at products we&rsquo;ve designed and built recently — fast, clean, and
              made to convert.
            </p>
            <div className={styles.cta}>
              <span className={styles.ctaNote}>
                Want results
                <br />
                like these?
              </span>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link to="/contact" className={styles.ctaBtn}>
                  Get in touch
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </Reveal>
        </header>

        <StaggerContainer className={styles.grid} stagger={0.14} amount={0.1}>
          {work.map((w) => (
            <StaggerItem y={36} scale={0.97} duration={0.9} key={w.alt}>
              <WorkCard img={w.img} alt={w.alt} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
