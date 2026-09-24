import SectionIndex from "@components/ui/SectionIndex/SectionIndex.jsx";
import Reveal, { StaggerContainer, StaggerItem } from "@components/ui/Reveal/Reveal.jsx";
import styles from "./Services.module.css";

const services = [
  {
    label: "Strategy",
    title: "Smart strategies for bold brands",
    desc: "Research, planning and branding that create impact.",
    accent: false,
  },
  {
    label: "Design",
    title: "Designs that move and convert",
    desc: "Interfaces crafted to engage, inspire and perform.",
    accent: true,
  },
  {
    label: "Development",
    title: "Fast, scalable websites",
    desc: "Clean code, modern frameworks and optimized for speed.",
    accent: true,
  },
  {
    label: "Support",
    title: "A partner you can count on",
    desc: "We're with you from start to long-term growth.",
    accent: false,
  },
];

export default function Services() {
  return (
    <section className={`${styles.services} edgeFade`}>
      <div className={styles.inner}>
        {/* Left — intro + illustration */}
        <StaggerContainer className={styles.intro} stagger={0.14} amount={0.15}>
          <div className={styles.top}>
            <StaggerItem y={20}>
              <SectionIndex number="02" label="What we do" />
            </StaggerItem>
            <StaggerItem y={36} duration={0.95}>
              <h2 className={styles.heading}>
                We build high-converting <span className={styles.strong}>websites</span>{" "}
                <span className={styles.muted}>and digital products that drive</span>{" "}
                <span className={styles.accentText}>real results.</span>
              </h2>
            </StaggerItem>
            <StaggerItem y={28} duration={0.9}>
              <p className={styles.sub}>
                Strategy, design and technology working together to elevate your brand online.
              </p>
            </StaggerItem>
          </div>

          <StaggerItem y={30} scale={0.96} duration={1.1}>
            <img
              className={styles.illustration}
              src="/images/becool.png"
              alt="A person relaxing on a couch working on a laptop"
            />
          </StaggerItem>
        </StaggerContainer>

        {/* Right — service cards */}
        <StaggerContainer className={styles.grid} stagger={0.12} amount={0.1}>
          {services.map((s) => (
            <StaggerItem y={36} duration={0.9} key={s.label}>
              <article
                className={`${styles.card} ${s.accent ? styles.cardAccent : ""}`}
              >
                <span className={styles.pill}>{s.label}</span>
                <div className={styles.cardBody}>
                  <span className={styles.dot} />
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardDesc}>{s.desc}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
