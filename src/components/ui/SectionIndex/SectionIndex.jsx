import styles from "./SectionIndex.module.css";

/**
 * Shared section index label, e.g. "01 / Reality check".
 * Colors follow the section's current text color (uses opacity for the number),
 * so it reads correctly on both dark and warm backgrounds.
 */
export default function SectionIndex({ number, label }) {
  return (
    <div className={styles.index}>
      <span className={styles.num}>{number} /</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
