import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FallbackImg from "@components/ui/FallbackImg/FallbackImg.jsx";
import { StaggerContainer, StaggerItem } from "@components/ui/Reveal/Reveal.jsx";
import styles from "./Showcase.module.css";

const steps = [
  { label: "Discovery", title: "Strategy & Research", tag: "Step 1" },
  { label: "Design", title: "UI/UX & Systems", tag: "Step 2" },
  { label: "Delivery", title: "Build, SEO & Launch", tag: "Step 3" },
];

const tags = ["Web Design", "Development", "SEO & AEO", "Mobile Apps"];

const clients = ["Northwind", "Lumen", "Vertex", "Halo", "Quartz"];

const work = [
  { cat: "Website Design", title: "Nova Commerce Redesign", date: "May 2025", img: "/images/work/01.png" },
  { cat: "Mobile App Design", title: "Atlas Fitness App", date: "Apr 2025", img: "/images/work/02.png" },
  { cat: "Website Design", title: "Vertex Agency Website", date: "2024", img: "/images/work/03.png" },
];

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

export default function Showcase() {
  return (
    <section className={`${styles.section} edgeFade`}>
      <StaggerContainer className={styles.grid} stagger={0.15} amount={0.1}>
        {/* Panel 1 — Experience / process */}
        <StaggerItem y={40} duration={0.95} className={`${styles.panel} ${styles.dark}`} as="article">
          <span className={styles.eyebrow}>• Our process</span>
          <h3 className={styles.heading}>
            We offer more than just websites —{" "}
            <span className={styles.faded}>a space designed to reflect your brand.</span>
          </h3>
          <ul className={styles.stepList}>
            {steps.map((s) => (
              <motion.li
                className={styles.stepRow}
                key={s.tag}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <span className={styles.stepLabel}>{s.label}</span>
                  <p className={styles.stepTitle}>{s.title}</p>
                </div>
                <span className={styles.pill}>{s.tag}</span>
              </motion.li>
            ))}
          </ul>
        </StaggerItem>

        {/* Panel 2 — Orange intro with stats */}
        <StaggerItem y={40} duration={0.95} className={`${styles.panel} ${styles.orange}`} as="article">
          <div className={styles.panelTop}>
            <span className={styles.mark}>◆ Wowstack</span>
            <span className={styles.gridIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
              </svg>
            </span>
          </div>

          <span className={styles.eyebrowLight}>• Introduction</span>
          <h3 className={styles.headingBig}>Making your growth a pain-free experience</h3>

          <div className={styles.tags}>
            {tags.map((t) => (
              <span className={styles.tag} key={t}>{t}</span>
            ))}
          </div>

          <div className={styles.stats}>
            <motion.div whileHover={{ scale: 1.03 }} className={`${styles.statCard} ${styles.statLight}`}>
              <span className={styles.statLabel}>◆ Projects shipped</span>
              <p className={styles.statValue}>120+</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className={`${styles.statCard} ${styles.statGlass}`}>
              <span className={styles.statLabel}>◆ Client retention</span>
              <p className={styles.statValue}>98%</p>
            </motion.div>
          </div>

          <div className={styles.logos}>
            {clients.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>

          <div className={styles.panelCtas}>
            <motion.div whileHover={{ x: 2 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className={styles.textCta}>
                Start a project <ArrowUpRight />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/portfolio" className={styles.pillCta}>View our work</Link>
            </motion.div>
          </div>
        </StaggerItem>

        {/* Panel 3 — Selected work */}
        <StaggerItem y={40} duration={0.95} className={`${styles.panel} ${styles.dark}`} as="article">
          <div className={styles.workHeader}>
            Selected Work <span className={styles.workDot} />
          </div>
          <div className={styles.workList}>
            {work.map((w) => (
              <motion.div
                className={styles.workItem}
                key={w.title}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <FallbackImg
                  src={w.img}
                  alt={w.title}
                  className={styles.workThumb}
                  fallbackClassName={styles.mediaFallback}
                />
                <div className={styles.workMeta}>
                  <span className={styles.workCat}>{w.cat}</span>
                  <p className={styles.workTitle}>{w.title}</p>
                  <span className={styles.workDate}>{w.date}</span>
                </div>
                <button className={styles.workArrow} aria-label={`Open ${w.title}`}>
                  <ArrowUpRight />
                </button>
              </motion.div>
            ))}
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
