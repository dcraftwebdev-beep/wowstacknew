import SectionIndex from "@components/ui/SectionIndex/SectionIndex.jsx";
import styles from "./NobodyToldYou.module.css";

const Icons = {
  spark: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M12 2l1.7 6.1L20 10l-6.3 1.9L12 18l-1.7-6.1L4 10l6.3-1.9z" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M13 2L4 14h6l-1 8 9-12h-6z" />
    </svg>
  ),
  cursor: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M4 3l7.5 17 2.2-6.8L20.5 11z" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  ),
};

/** 4 objective cards — accent cards + one featured dark card (raised). */
const cards = [
  {
    icon: "spark",
    title: "Brand Trust & Authority",
    bullets: [
      "Refined visual identity with confident typography and palette.",
      "Clean, focused UI that lowers cognitive load.",
    ],
  },
  {
    icon: "bolt",
    title: "Performance-First Engineering",
    featured: true,
    bullets: [
      "Fully responsive framework, flawless across every device.",
      "Core Web Vitals tuned for lightning-fast loads and retention.",
    ],
  },
  {
    icon: "cursor",
    title: "Conversion-Optimized UX",
    bullets: [
      "Intuitive navigation architecture that guides every action.",
      "Streamlined journeys that cut steps to convert.",
    ],
  },
  {
    icon: "search",
    title: "Content Strategy & SEO",
    bullets: [
      "SEO & AEO-ready content built to rank and get cited.",
      "Organic growth that establishes real market authority.",
    ],
  },
];

export default function NobodyToldYou() {
  return (
    <section className={`${styles.section} edgeFade`}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.headText}>
            <SectionIndex number="04" label="Real talk" />
            <h2 className={styles.heading}>
              The thing <span className={styles.faded}>nobody told you</span>
            </h2>
          </div>
          <img
            className={styles.headImg}
            src="/images/nobody.png"
            alt="A curious white bird with question marks above its head"
          />
        </div>

        <div className={styles.cards}>
          {cards.map((c) => (
            <article
              className={`${styles.card} ${c.featured ? styles.featured : ""}`}
              key={c.title}
            >
              <span className={styles.icon}>{Icons[c.icon]}</span>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <ul className={styles.bullets}>
                {c.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
