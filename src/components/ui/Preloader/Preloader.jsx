import { useEffect, useRef, useState } from "react";
import { animate, svg, stagger } from "animejs";
import styles from "./Preloader.module.css";

/* WOWSTACK wordmark drawn as monoline SVG strokes on first page load, then the
   overlay fades to reveal the site. Original letterforms (not a logo copy). */
const GLYPHS = [
  "M15 18 L33 102 L51 55 L69 102 L87 18",
  "M136 18 C104 18 104 102 136 102 C168 102 168 18 136 18 Z",
  "M187 18 L205 102 L223 55 L241 102 L259 18",
  "M333 33 C333 18 279 18 279 44 C279 62 333 58 333 82 C333 107 279 107 279 90",
  "M359 18 H429 M394 18 V102",
  "M448 102 L480 18 L512 102 M460 66 H500",
  "M589 34 C577 16 535 20 535 60 C535 100 577 104 589 86",
  "M623 18 V102 M623 60 L678 18 M638 54 L678 102",
];

export default function Preloader() {
  const svgRef = useRef(null);
  const [leaving, setLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;

    const finish = () => {
      setLeaving(true);
      // remove after the fade-out transition completes
      window.setTimeout(() => setHidden(true), 700);
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.querySelectorAll("path").forEach((p) => (p.style.strokeDashoffset = "0"));
      const t = window.setTimeout(finish, 600);
      return () => window.clearTimeout(t);
    }

    const drawables = svg.createDrawable(el.querySelectorAll("path"));
    const anim = animate(drawables, {
      draw: ["0 0", "0 1"],
      ease: "inOutQuad",
      duration: 1300,
      delay: stagger(110),
      onComplete: () => window.setTimeout(finish, 450),
    });

    return () => anim?.pause?.();
  }, []);

  if (hidden) return null;

  return (
    <div className={`${styles.overlay} ${leaving ? styles.leaving : ""}`} aria-hidden="true">
      <svg
        ref={svgRef}
        className={styles.mark}
        viewBox="0 0 700 120"
        fill="none"
        role="img"
        aria-label="Wowstack"
      >
        {GLYPHS.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
    </div>
  );
}
