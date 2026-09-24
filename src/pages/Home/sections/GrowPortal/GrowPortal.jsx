import GlyphPortal from "@components/ui/GlyphPortal/GlyphPortal.jsx";
import styles from "./GrowPortal.module.css";

/* A scroll-driven camera through the word WOWSTACK, opening onto our approach. */
export default function GrowPortal() {
  return (
    <GlyphPortal
      word="WOWSTACK"
      fontWeight={900}
      scrollLength={2.4}
      interactive
      enterLabel="Step inside"
      className={styles.portal}
      style={{
        "--gp-paper": "#050505",
        "--gp-ink": "#f5f5f5",
        "--gp-field": "#0a0a0b",
        "--gp-foreground": "#ffffff",
      }}
      background={<div className={styles.scene} aria-hidden="true" />}
      front={
        <div className={styles.header}>
          <span className={styles.logo}>wowstack.</span>
          <span className={styles.category}>Web · Apps · SEO</span>
        </div>
      }
    >
      <div className={styles.copy}>
        <h2 className={styles.copyTitle}>This is how brands grow online.</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3><span className={styles.num}>01</span> Design that converts</h3>
            <p>Interfaces that feel premium and turn visitors into paying customers.</p>
          </div>
          <div className={styles.feature}>
            <h3><span className={styles.num}>02</span> Build that scales</h3>
            <p>Fast, reliable engineering that stays solid as your business grows.</p>
          </div>
          <div className={styles.feature}>
            <h3><span className={styles.num}>03</span> Growth that compounds</h3>
            <p>SEO, AI and automation that keep the results coming after launch.</p>
          </div>
        </div>
      </div>
    </GlyphPortal>
  );
}
