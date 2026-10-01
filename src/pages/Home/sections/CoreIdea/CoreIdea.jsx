import SectionIndex from "@components/ui/SectionIndex/SectionIndex.jsx";
import Button from "@components/ui/Button/Button.jsx";
import Reveal, { StaggerContainer, StaggerItem } from "@components/ui/Reveal/Reveal.jsx";
import styles from "./CoreIdea.module.css";

/** Section 2 — "Still don't have a website?" CTA with a right-bleed image. */
export default function CoreIdea() {
  return (
    <section id="idea" className={`${styles.core} edgeFade`}>
      <Reveal direction="down" distance={20} duration={0.8}>
        <header className={styles.topbar}>
          <span>Wowstack</span>
          <span>Web · Apps · SEO</span>
        </header>
      </Reveal>

      {/* Full-width background watermark */}
      <Reveal direction="none" duration={1.2}>
        <span className={styles.watermark} aria-hidden="true">WEBSITE</span>
      </Reveal>

      <div className={styles.layout}>
        {/* Left — message + CTA */}
        <StaggerContainer className={styles.content} stagger={0.14}>
          <StaggerItem>
            <SectionIndex number="01" label="Reality check" />
          </StaggerItem>

          <StaggerItem y={36} duration={0.95}>
            <h2 className={styles.heading}>
              Still don&rsquo;t have a website for your business?
            </h2>
          </StaggerItem>

          <StaggerItem y={28} duration={0.9}>
            <p className={styles.lead}>
              If customers can&rsquo;t find you online, they&rsquo;ll find your competitors
              instead. Wowstack builds fast, search-ready websites and apps that turn
              visitors into paying customers &mdash; and keep you a step ahead.
            </p>
          </StaggerItem>

          <StaggerItem y={24} duration={0.85}>
            <div className={styles.actions}>
              <Button to="/contact">Get your website</Button>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Right — image bleeding to the edge */}
        <Reveal direction="right" distance={40} duration={1.1} scale={0.97} className={styles.visual}>
          <span className={styles.decor} aria-hidden="true">( let&rsquo;s fix that )</span>
          <img
            className={styles.img}
            src="/images/stilldonthavewebsite.png"
            alt="A curious llama leaning out of a vintage car window"
          />
        </Reveal>
      </div>
    </section>
  );
}
