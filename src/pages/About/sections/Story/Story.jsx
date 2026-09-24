import FlowArt, { FlowSection } from "@components/ui/StoryScroll/StoryScroll.jsx";
import styles from "./Story.module.css";

export default function Story() {
  return (
    <FlowArt aria-label="The Wowstack story">
      {/* 01 — Who we are */}
      <FlowSection aria-label="Who we are" style={{ backgroundColor: "#fd5200", color: "#fff" }}>
        <p className={styles.label}>01 — Who we are</p>
        <hr className={styles.rule} />
        <div>
          <h2 className={styles.heading}>
            We Turn
            <br />
            Ideas Into
            <br />
            Impact
          </h2>
        </div>
        <hr className={styles.rule} />
        <p className={`${styles.para} ${styles.mtAuto}`}>
          A small, senior team obsessed with one thing — building digital products that actually
          move the needle for the people behind them.
        </p>
      </FlowSection>

      {/* 02 — Design. Develop. Automate. */}
      <FlowSection aria-label="How we help" style={{ backgroundColor: "#000", color: "#fff" }}>
        <p className={styles.label}>02 — How we help</p>
        <hr className={styles.rule} />
        <div>
          <h2 className={styles.heading}>
            We Design.
            <br />
            We Develop.
            <br />
            We Automate.
          </h2>
        </div>
        <hr className={styles.rule} />
        <p className={styles.para}>
          Three disciplines, one team — from the first sketch to systems that run themselves.
        </p>
        <hr className={styles.rule} />
        <div className={styles.cols}>
          <div className={styles.col}>
            <p className={styles.colLabel}>We design</p>
            <p className={styles.colText}>
              Interfaces and brands that feel effortless and earn trust on sight.
            </p>
          </div>
          <div className={styles.col}>
            <p className={styles.colLabel}>We develop</p>
            <p className={styles.colText}>
              Fast, robust engineering that stays reliable as you scale.
            </p>
          </div>
          <div className={styles.col}>
            <p className={styles.colLabel}>We automate</p>
            <p className={styles.colText}>
              Workflows and tooling that quietly do the busywork for you.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* 03 — Built with AI */}
      <FlowSection aria-label="Built with AI" style={{ backgroundColor: "#F5F0E8", color: "#000" }}>
        <p className={styles.label}>03 — Built with AI</p>
        <hr className={styles.rule} />
        <div>
          <h2 className={styles.heading}>
            Smarter
            <br />
            By
            <br />
            Design
          </h2>
        </div>
        <hr className={styles.rule} />
        <p className={styles.para}>
          AI isn&rsquo;t a buzzword here — it&rsquo;s woven into how we work and what we ship, so
          things get built faster and feel smarter to use.
        </p>
        <hr className={styles.rule} />
        <div className={styles.cols}>
          <div className={styles.col}>
            <p className={styles.colLabel}>AI in our workflow</p>
            <p className={styles.colText}>
              We research, prototype and ship in a fraction of the usual time.
            </p>
          </div>
          <div className={styles.col}>
            <p className={styles.colLabel}>AI in your product</p>
            <p className={styles.colText}>
              Chat, search and automation built in — only where it adds real value.
            </p>
          </div>
          <div className={styles.col}>
            <p className={styles.colLabel}>Always human-checked</p>
            <p className={styles.colText}>
              Every output is reviewed by people who sweat the details.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* 04 — The results */}
      <FlowSection aria-label="The results" style={{ backgroundColor: "#1A3DE8", color: "#fff" }}>
        <p className={styles.label}>04 — The results</p>
        <hr className={styles.rule} />
        <div>
          <h2 className={styles.heading}>
            Growth
            <br />
            You Can
            <br />
            Measure
          </h2>
        </div>
        <hr className={styles.rule} />
        <div className={styles.cols}>
          <div className={styles.col}>
            <p className={styles.colLabel}>120+</p>
            <p className={styles.colText}>Products designed, built and shipped for growing brands.</p>
          </div>
          <div className={styles.col}>
            <p className={styles.colLabel}>98%</p>
            <p className={styles.colText}>Client retention — teams stay with us long after launch.</p>
          </div>
          <div className={styles.col}>
            <p className={styles.colLabel}>Worldwide</p>
            <p className={styles.colText}>Partnering with founders and teams across the globe.</p>
          </div>
        </div>
        <hr className={styles.rule} />
        <p className={styles.para}>
          We don&rsquo;t chase vanity metrics — we build for the numbers that actually grow your
          business.
        </p>
      </FlowSection>

      {/* 05 — Let's build */}
      <FlowSection aria-label="Let's build" style={{ backgroundColor: "#000", color: "#fff" }}>
        <p className={styles.label}>05 — Let&rsquo;s build</p>
        <hr className={styles.rule} />
        <div>
          <h2 className={styles.heading}>
            Ready
            <br />
            To
            <br />
            Grow?
          </h2>
        </div>
        <hr className={styles.rule} />
        <p className={`${styles.para} ${styles.mtAuto}`}>
          Tell us where you want to go and we&rsquo;ll help you get there —{" "}
          <a href="/contact" className={styles.link}>start a project</a>.
        </p>
      </FlowSection>
    </FlowArt>
  );
}
