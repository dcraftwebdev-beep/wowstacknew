import SectionIndex from "@components/ui/SectionIndex/SectionIndex.jsx";
import Reveal, { StaggerContainer, StaggerItem } from "@components/ui/Reveal/Reveal.jsx";
import styles from "./Conversion.module.css";

/** Section — "Most agencies focus on content. We focus on conversion." */
export default function Conversion() {
  return (
    <section className={`${styles.conversion} edgeFade`}>
      <div className={styles.inner}>
        {/* Left — heading */}
        <StaggerContainer className={styles.content} stagger={0.14} amount={0.15}>
          <StaggerItem y={20}>
            <SectionIndex number="03" label="Our difference" />
          </StaggerItem>
          <StaggerItem y={36} duration={0.95}>
            <h2 className={styles.heading}>
              Most agencies focus on <span className={styles.muted}>content</span>.
              <br />
              We focus on <span className={styles.accent}>conversion</span>.
            </h2>
          </StaggerItem>
          <StaggerItem y={28} duration={0.9}>
            <p className={styles.lead}>
              Anyone can build a pretty website. We engineer sites that turn visitors into
              customers &mdash; with strategy, speed and relentless optimization.
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* Right — image */}
        <Reveal direction="right" distance={40} duration={1.1} scale={0.97} className={styles.visual}>
          <img
            className={styles.img}
            src="/images/conversion.png"
            alt="A lone figure walking toward a glowing doorway of light"
          />
        </Reveal>
      </div>
    </section>
  );
}
