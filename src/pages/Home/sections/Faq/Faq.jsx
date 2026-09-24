import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionIndex from "@components/ui/SectionIndex/SectionIndex.jsx";
import Reveal, { StaggerContainer, StaggerItem } from "@components/ui/Reveal/Reveal.jsx";
import { generalFaqs } from "@seo/aeo/faqData.js";
import styles from "./Faq.module.css";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left — heading */}
        <StaggerContainer className={styles.left} stagger={0.12} amount={0.15}>
          <StaggerItem y={20}>
            <SectionIndex number="06" label="FAQ" />
          </StaggerItem>
          <StaggerItem y={36} duration={0.95}>
            <h2 className={styles.title}>Frequently asked questions</h2>
          </StaggerItem>
          <StaggerItem y={28} duration={0.9}>
            <p className={styles.sub}>
              Everything you need to know before we start. Can&rsquo;t find your answer?
              Write to{" "}
              <a href="mailto:hello@wowstack.com" className={styles.mail}>hello@wowstack.com</a>.
            </p>
          </StaggerItem>
          <StaggerItem y={20} duration={0.85}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link to="/contact" className={styles.askBtn}>
                Ask us anything
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        {/* Right — accordion cards */}
        <StaggerContainer className={styles.list} stagger={0.08} amount={0.1}>
          {generalFaqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <StaggerItem y={30} duration={0.85} key={f.question}>
                <div className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
                  <button className={styles.q} onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                    <span>{f.question}</span>
                    <span className={styles.toggle}>
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <path d="M5 12h14" />
                        <path className={styles.vLine} d="M12 5v14" />
                      </svg>
                    </span>
                  </button>
                  <div className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}>
                    <div className={styles.answerInner}>
                      <p>{f.answer}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
