import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionIndex from "@components/ui/SectionIndex/SectionIndex.jsx";
import FallbackImg from "@components/ui/FallbackImg/FallbackImg.jsx";
import Reveal, { StaggerContainer, StaggerItem } from "@components/ui/Reveal/Reveal.jsx";
import styles from "./CoreServices.module.css";

const cards = [
  { num: "01", label: "Web development", a: "WEB =", b: "YOUR 24/7 SALESPERSON", body: "A fast, modern site that sells while you sleep — built to convert, not just to look good." },
  { num: "02", label: "Product design", a: "DESIGN =", b: "A SIGNAL OF QUALITY", body: "When your site looks premium, people trust your product is premium too." },
  { num: "03", label: "SEO & AEO", a: "SEO =", b: "SHOWING UP WHEN IT COUNTS", body: "We get you found the moment your customer starts searching — and keep you there." },
  { num: "06", label: "Automation & AI", a: "AI =", b: "YOUR TEAM'S SUPERPOWER", body: "Smart automations that handle the busywork, so your team moves faster." },
  { num: "04", label: "Mobile apps", a: "APPS =", b: "LOYALTY IN THEIR POCKET", body: "Native and cross-platform apps that turn one-time buyers into regulars." },
  { num: "05", label: "Care & support", a: "SUPPORT =", b: "A PARTNER, NOT A VENDOR", body: "We stick around after launch — improving, scaling and supporting as you grow." },
];

const Mark = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

function StatementCard({ c }) {
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
    <motion.article
      ref={ref}
      className={styles.card}
      onMouseEnter={enter}
      onMouseMove={move}
      onMouseLeave={leave}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.cardTop}>
        <span className={styles.cardLabel}><Mark /> {c.label}</span>
        <span className={styles.cardNum}>/{c.num}</span>
      </div>
      <h3 className={styles.statement}>
        {c.a} <span className={styles.accent}>{c.b}</span>
      </h3>
      <p className={styles.body}>{c.body}</p>
      <div className={styles.cardFoot}>
        <span>Wowstack</span>
        <span className={styles.muted}>wowstack.com</span>
      </div>

      {/* Cursor-following arrow on hover */}
      <span ref={cursorRef} className={styles.cursor} aria-hidden="true">
        <span className={`${styles.cursorDot} ${show ? styles.cursorShow : ""}`}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </span>
    </motion.article>
  );
}

export default function CoreServices() {
  return (
    <section className={`${styles.section} edgeFade`}>
      <div className={styles.inner}>
        <Reveal direction="up" distance={30} duration={0.9}>
          <header className={styles.head}>
            <SectionIndex number="02" label="Core services" />
            <h2 className={styles.title}>What a great website does for you</h2>
          </header>
        </Reveal>

        <StaggerContainer className={styles.cards} stagger={0.12} amount={0.1}>
          {/* Row 1 — two cards */}
          <StaggerItem y={36} duration={0.9}>
            <StatementCard c={cards[0]} />
          </StaggerItem>
          <StaggerItem y={36} duration={0.9}>
            <StatementCard c={cards[1]} />
          </StaggerItem>

          {/* Row 2 — image left, two stacked cards right (fills the tall row) */}
          <StaggerItem y={36} duration={0.9} className={styles.imageCell}>
            <FallbackImg
              src="/images/grow1.png"
              alt="Growth with Wowstack"
              className={styles.imageCellImg}
              fallbackClassName={styles.mediaFallback}
            />
          </StaggerItem>
          <StaggerItem y={36} duration={0.9} className={styles.stackCell}>
            <div className={styles.stack}>
              <StatementCard c={cards[2]} />
              <StatementCard c={cards[3]} />
            </div>
          </StaggerItem>

          {/* Row 3 — two cards */}
          <StaggerItem y={36} duration={0.9}>
            <StatementCard c={cards[4]} />
          </StaggerItem>
          <StaggerItem y={36} duration={0.9}>
            <StatementCard c={cards[5]} />
          </StaggerItem>
        </StaggerContainer>

        <Reveal direction="up" distance={20} duration={0.85} delay={0.2} className={styles.more}>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link to="/services" className={styles.moreBtn}>
              See more of our services
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
