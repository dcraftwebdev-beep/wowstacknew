import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import SectionIndex from "@components/ui/SectionIndex/SectionIndex.jsx";
import styles from "./Power.module.css";

gsap.registerPlugin(ScrollTrigger);

const lines = ["The right website", "gives you power —", "stronger than you think"];

export default function Power() {
  const ref = useRef(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const u = () => setReduced(mq.matches);
    u();
    mq.addEventListener("change", u);
    return () => mq.removeEventListener("change", u);
  }, []);

  // Keep ScrollTrigger in sync with Lenis smooth scroll.
  useLenis(() => ScrollTrigger.update());

  useGSAP(
    () => {
      if (!ref.current || reduced) return;
      const q = gsap.utils.selector(ref);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "+=170%",
          pin: true,
          scrub: 0.6,
        },
      });

      tl.from(q(`.${styles.index}`), { y: 30, autoAlpha: 0 })
        .from(
          q(`.${styles.lineInner}`),
          { yPercent: 115, autoAlpha: 0, stagger: 0.18 },
          "<0.1"
        )
        // Image rises up from the bottom
        .from(
          q(`.${styles.image}`),
          { yPercent: 90, autoAlpha: 0, scale: 0.95, ease: "power2.out" },
          "<0.25"
        )
        .from(q(`.${styles.cta}`), { y: 24, autoAlpha: 0 }, "<0.35");
    },
    { scope: ref, dependencies: [reduced] }
  );

  return (
    <section ref={ref} className={`${styles.power} edgeFade`}>
      <div className={styles.inner}>
        <div className={styles.index}>
          <SectionIndex number="03" label="The power" />
        </div>

        <h2 className={styles.heading}>
          {lines.map((l, i) => (
            <span className={styles.line} key={i}>
              <span className={styles.lineInner}>{l}</span>
            </span>
          ))}
        </h2>

        <img
          className={styles.image}
          src="/images/power.png"
          alt="An ant effortlessly lifting an elephant"
        />

        <Link to="/contact" className={styles.cta}>
          Start growing
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
