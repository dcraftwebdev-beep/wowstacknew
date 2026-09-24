import FlowArt, { FlowSection } from "@components/ui/StoryScroll/StoryScroll.jsx";
import styles from "./ClientTruths.module.css";

export default function ClientTruths() {
  return (
    <FlowArt parallax aria-label="What clients really want to know">
      {/* 01 — ROI */}
      <FlowSection aria-label="Will it make money" style={{ backgroundColor: "#fd5200", color: "#fff" }}>
        <p className={styles.label}>01 — What you&rsquo;re really asking</p>
        <hr className={styles.rule} />
        <div>
          <h2 className={styles.heading}>
            Will It
            <br />
            Make Me
            <br />
            Money?
          </h2>
        </div>
        <hr className={styles.rule} />
        <p className={`${styles.para} ${styles.mtAuto}`} data-flow-parallax="10">
          The only metric that matters. Every decision we make is judged by one question — does
          this grow your business? Pretty is nice; profitable is the point.
        </p>
      </FlowSection>

      {/* 02 — Speed */}
      <FlowSection aria-label="Speed" style={{ backgroundColor: "#000", color: "#fff" }}>
        <p className={styles.label}>02 — How soon</p>
        <hr className={styles.rule} />
        <div>
          <h2 className={styles.heading}>
            Live In
            <br />
            Weeks, Not
            <br />
            Months
          </h2>
        </div>
        <hr className={styles.rule} />
        <p className={styles.para} data-flow-parallax="10">
          Momentum wins. You&rsquo;ll see real progress every single week and launch while the
          idea is still hot — no six-month black boxes.
        </p>
        <hr className={styles.rule} />
        <div className={styles.cols} data-flow-parallax="6">
          <div className={styles.col}>
            <p className={styles.colLabel}>Weekly demos</p>
            <p className={styles.colText}>See it working as we build — no surprises at the end.</p>
          </div>
          <div className={styles.col}>
            <p className={styles.colLabel}>Fixed scope</p>
            <p className={styles.colText}>A clear plan and price before a single pixel is drawn.</p>
          </div>
          <div className={styles.col}>
            <p className={styles.colLabel}>No bloat</p>
            <p className={styles.colText}>We ship what moves the needle, then iterate on the rest.</p>
          </div>
        </div>
      </FlowSection>

      {/* 03 — Ownership / control */}
      <FlowSection aria-label="You stay in control" style={{ backgroundColor: "#F5F0E8", color: "#000" }}>
        <p className={styles.label}>03 — Who owns it</p>
        <hr className={styles.rule} />
        <div>
          <h2 className={styles.heading}>
            You Stay
            <br />
            In Full
            <br />
            Control
          </h2>
        </div>
        <hr className={styles.rule} />
        <p className={styles.para} data-flow-parallax="10">
          No lock-in, no mystery, no hostage situations. You own every file and account — update it
          yourself, or leave that to us. Your call, always.
        </p>
        <hr className={styles.rule} />
        <div className={styles.cols} data-flow-parallax="6">
          <div className={styles.col}>
            <p className={styles.colLabel}>You own everything</p>
            <p className={styles.colText}>Code, content and accounts are yours from day one.</p>
          </div>
          <div className={styles.col}>
            <p className={styles.colLabel}>Edit it yourself</p>
            <p className={styles.colText}>Simple tools so your team can change content in minutes.</p>
          </div>
          <div className={styles.col}>
            <p className={styles.colLabel}>Zero jargon</p>
            <p className={styles.colText}>We explain things in plain language, not tech-speak.</p>
          </div>
        </div>
      </FlowSection>

      {/* 04 — After launch */}
      <FlowSection aria-label="After launch" style={{ backgroundColor: "#1A3DE8", color: "#fff" }}>
        <p className={styles.label}>04 — And after?</p>
        <hr className={styles.rule} />
        <div>
          <h2 className={styles.heading}>
            We Don&rsquo;t
            <br />
            Vanish At
            <br />
            Launch
          </h2>
        </div>
        <hr className={styles.rule} />
        <p className={`${styles.para} ${styles.mtAuto}`} data-flow-parallax="10">
          Launch day is the start line, not the finish. We stick around to measure, improve and
          scale — so what we build keeps paying off long after it goes live.
        </p>
      </FlowSection>
    </FlowArt>
  );
}
