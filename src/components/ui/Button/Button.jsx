import { Link } from "react-router-dom";
import styles from "./Button.module.css";

/* Custom arrow glyph (provided) — filled, uses currentColor. */
const Arrow = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
    <path d="M100,44.896V55.104H94.82449A27.66327,27.66327,0,0,0,68.22692,81.70112v5.104H58.01937v-5.104A37.41244,37.41244,0,0,1,69.95209,55.104H.08V44.896H69.95209A37.41244,37.41244,0,0,1,58.01937,18.29888v-5.104H68.22692v5.104A27.67577,27.67577,0,0,0,94.89644,44.896Z" />
  </svg>
);

/* Splits a string into characters that each roll up one-by-one on hover. */
function RollText({ text }) {
  return (
    <span className={styles.roll} aria-hidden="true">
      {text.split("").map((ch, i) =>
        ch === " " ? (
          <span key={i} className={styles.space}>&nbsp;</span>
        ) : (
          <span key={i} className={styles.char} style={{ "--i": i }}>
            <span className={styles.charInner}>
              <span className={styles.line}>{ch}</span>
              <span className={styles.line}>{ch}</span>
            </span>
          </span>
        )
      )}
    </span>
  );
}

/**
 * Rounded text pill + a small gap + a circular arrow button. On hover the text
 * rolls per-letter and the arrow swaps diagonally. Polymorphic:
 * <Link> for `to`, <a> for `href`, else <button>.
 * @param {"primary"|"ghost"} [variant]
 * @param {boolean} [arrow] show the circular arrow button (default true)
 */
export default function Button({
  variant = "primary",
  to,
  href,
  arrow = true,
  className = "",
  children,
  ...rest
}) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`;
  const isText = typeof children === "string";
  const inner = (
    <>
      <span className={styles.textPart}>
        <span className={styles.label} aria-label={isText ? children : undefined}>
          {isText ? <RollText text={children} /> : children}
        </span>
      </span>
      {arrow && (
        <span className={styles.iconPart} aria-hidden="true">
          <span className={`${styles.iconArrow} ${styles.iconArrow1}`}><Arrow /></span>
          <span className={`${styles.iconArrow} ${styles.iconArrow2}`}><Arrow /></span>
        </span>
      )}
    </>
  );
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>;
  return <button className={cls} {...rest}>{inner}</button>;
}
