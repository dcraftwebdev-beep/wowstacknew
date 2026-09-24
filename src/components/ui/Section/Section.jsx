import Container from "../Container/Container.jsx";
import styles from "./Section.module.css";

/**
 * A vertical page section with optional heading + eyebrow.
 * Uses a semantic <section> with an accessible label for SEO structure.
 */
export default function Section({ id, eyebrow, title, children, className = "" }) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section id={id} aria-labelledby={headingId} className={`${styles.section} ${className}`}>
      <Container>
        {(eyebrow || title) && (
          <header className={styles.head}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            {title && <h2 id={headingId} className={styles.title}>{title}</h2>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
