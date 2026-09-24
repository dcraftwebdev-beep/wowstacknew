import SectionIndex from "@components/ui/SectionIndex/SectionIndex.jsx";
import FallbackImg from "@components/ui/FallbackImg/FallbackImg.jsx";
import Reveal from "@components/ui/Reveal/Reveal.jsx";
import styles from "./Insights.module.css";

const items = [
  {
    lead: "Don't just rank.",
    accent: "Own your market.",
    sub: "We help you rank higher, attract better traffic, and convert more of it into customers.",
    img: "/images/about/01.png",
    alt: "Own your market",
  },
  {
    lead: "Your competitor isn't better.",
    accent: "They're just easier to find.",
    sub: "Visibility beats talent online. We make sure you're the one people discover first.",
    img: "/images/about/02.png",
    alt: "Easier to find",
  },
  {
    lead: "You're not getting leads.",
    accent: "You're getting the wrong traffic.",
    sub: "We tune your site and SEO for buyers, not just browsers — clicks that actually convert.",
    img: "/images/about/03.png",
    alt: "The wrong traffic",
  },
  {
    lead: "SEO isn't about Google.",
    accent: "It's about your customer's patience.",
    sub: "Fast, findable and effortless — because attention is short and first impressions stick.",
    img: "/images/about/04.png",
    alt: "Customer's patience",
  },
  {
    lead: "The thing",
    accent: "nobody told you.",
    sub: "A beautiful site isn't a business card — it's your hardest-working salesperson.",
    img: "/images/about/05.png",
    alt: "Nobody told you",
  },
];

export default function Insights() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal direction="up" distance={30} duration={0.9}>
          <header className={styles.head}>
            <SectionIndex number="02" label="Real talk" />
            <h2 className={styles.title}>The truth about growing online</h2>
          </header>
        </Reveal>

        <div className={styles.items}>
          {items.map((it, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={it.lead} className={`${styles.item} ${flip ? styles.flip : ""}`}>
                <Reveal
                  className={styles.text}
                  direction={flip ? "right" : "left"}
                  distance={48}
                  duration={1}
                >
                  <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className={styles.itemHeading}>
                    {it.lead} <span className={styles.accent}>{it.accent}</span>
                  </h3>
                  <p className={styles.itemSub}>{it.sub}</p>
                </Reveal>

                <Reveal
                  className={styles.media}
                  direction={flip ? "left" : "right"}
                  distance={48}
                  duration={1}
                  scale={0.96}
                >
                  <FallbackImg
                    src={it.img}
                    alt={it.alt}
                    className={styles.img}
                    fallbackClassName={styles.mediaFallback}
                  />
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
