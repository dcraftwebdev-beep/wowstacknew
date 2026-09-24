import { useRef, useState, useEffect, Children } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import styles from "./StoryScroll.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

/** A single full-screen panel. Pass a `style` with backgroundColor + color. */
export function FlowSection({ className, style = {}, children, "aria-label": ariaLabel }) {
  return (
    <section data-flow-section aria-label={ariaLabel} className={cx(styles.section, className)}>
      <div
        data-flow-inner
        className={styles.inner}
        style={{ transformOrigin: "bottom left", ...style }}
      >
        {children}
      </div>
    </section>
  );
}

/**
 * Stacked pinned scroll. Each panel pins while the next rotates up and over it.
 * ScrollTrigger is kept in sync with the site-wide Lenis smooth scroll.
 */
export default function FlowArt({
  children,
  className,
  parallax = false,
  "aria-label": ariaLabel = "Story scroll",
}) {
  const containerRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Drive ScrollTrigger from Lenis so pinning stays smooth.
  useLenis(() => ScrollTrigger.update());

  useGSAP(
    () => {
      if (!containerRef.current || reducedMotion) return;

      const sections = Array.from(
        containerRef.current.querySelectorAll("[data-flow-section]")
      );
      if (sections.length === 0) return;

      const triggers = [];

      sections.forEach((section, i) => {
        gsap.set(section, { zIndex: i + 1 });

        const inner = section.querySelector("[data-flow-inner]");
        if (!inner) return;

        if (i > 0) {
          gsap.set(inner, { rotation: 30, transformOrigin: "bottom left" });
          const tween = gsap.to(inner, {
            rotation: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "top 25%",
              scrub: true,
            },
          });
          if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
        }

        if (i < sections.length - 1) {
          triggers.push(
            ScrollTrigger.create({
              trigger: section,
              start: "bottom bottom",
              end: "bottom top",
              pin: true,
              pinSpacing: false,
            })
          );
        }

        // Parallax: drift tagged elements while the panel is in view so the
        // content moves at a different speed than the panel itself.
        if (parallax) {
          const layers = section.querySelectorAll("[data-flow-parallax]");
          layers.forEach((el) => {
            const speed = parseFloat(el.dataset.flowParallax) || 20;
            const tween = gsap.fromTo(
              el,
              { yPercent: speed },
              {
                yPercent: -speed,
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              }
            );
            if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
          });
        }
      });

      ScrollTrigger.refresh();

      return () => {
        triggers.forEach((t) => t.kill());
      };
    },
    { scope: containerRef, dependencies: [Children.count(children), reducedMotion, parallax] }
  );

  return (
    <main ref={containerRef} aria-label={ariaLabel} className={cx(styles.main, className)}>
      {children}
    </main>
  );
}
