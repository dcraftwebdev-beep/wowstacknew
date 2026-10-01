import Reveal from "@components/ui/Reveal/Reveal.jsx";
import Button from "@components/ui/Button/Button.jsx";
import styles from "./ContactBanner.module.css";

/** Full-width contact CTA banner. */
export default function ContactBanner() {
  return (
    <section className={styles.banner} aria-label="Start a project">
      <div className={styles.scrim} aria-hidden="true" />

      <Reveal direction="up" distance={30} duration={0.95} className={styles.inner}>
        <h2 className={styles.heading}>
          We&rsquo;re ready
          <br />
          <span className={styles.accent}>to take your call</span>
        </h2>
        <p className={styles.sub}>
          Got a project in mind? Skip the runaround &mdash; talk to a real person
          who&rsquo;ll help you plan the next step.
        </p>
        <div className={styles.ctaWrap}>
          <Button to="/contact">Let&rsquo;s talk</Button>
        </div>
      </Reveal>
    </section>
  );
}
