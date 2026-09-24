import SectionIndex from "@components/ui/SectionIndex/SectionIndex.jsx";
import FallbackImg from "@components/ui/FallbackImg/FallbackImg.jsx";
import Reveal from "@components/ui/Reveal/Reveal.jsx";
import styles from "./ServicesList.module.css";

const steps = [
  {
    num: "01",
    label: "Web Design & Development",
    text: "Fast, modern websites engineered to convert — built to sell while you sleep.",
  },
  {
    num: "02",
    label: "App Development",
    text: "Native and cross-platform mobile apps that turn one-time buyers into loyal regulars.",
  },
  {
    num: "03",
    label: "Custom Dashboards",
    text: "Tailored admin panels and data dashboards that put your whole business on one screen.",
  },
  {
    num: "04",
    label: "Ecommerce Dashboards",
    text: "Storefronts and back-office tools built to move products and track every order in real time.",
  },
  {
    num: "05",
    label: "Website Heatmaps",
    text: "See exactly where visitors click, scroll and drop off — then fix what's costing you sales.",
  },
  {
    num: "06",
    label: "SEO & Growth Engines",
    text: "We get you found on Google and keep you climbing with technical SEO and content that compounds.",
  },
  {
    num: "07",
    label: "AEO Optimization",
    text: "Structured so AI assistants and answer engines quote your brand — not your competitors.",
  },
  {
    num: "08",
    label: "UI/UX Design",
    text: "Interfaces and brands that feel premium and earn trust on first sight.",
  },
  {
    num: "09",
    label: "Maintenance & Support",
    text: "We stick around after launch — improving, scaling and supporting as you grow.",
  },
  {
    num: "10",
    label: "n8n Workflow Automation",
    text: "Connect your tools and automate the busywork with reliable, no-limit workflows.",
  },
  {
    num: "11",
    label: "WhatsApp Chatbot & Ordering",
    text: "Let customers browse, ask and order right inside WhatsApp — 24/7, no app needed.",
  },
  {
    num: "12",
    label: "AI Website Chatbot",
    text: "A smart assistant on your site that answers questions and captures leads around the clock.",
  },
  {
    num: "13",
    label: "Lead & CRM Automation",
    text: "Capture, qualify and route every lead automatically — so nothing slips through the cracks.",
  },
  {
    num: "14",
    label: "Booking & Reminder Bots",
    text: "Automated scheduling and reminders that cut no-shows and keep your calendar full.",
  },
  {
    num: "15",
    label: "AI Content & Social Automation",
    text: "On-brand posts and content generated and scheduled — your marketing on autopilot.",
  },
];

/** Services page — full services list: the right visual stays sticky while the
    left column scrolls through group after group of numbered service cards. */
export default function ServicesList() {
  return (
    <section className={`${styles.section} edgeFade`}>
      <div className={styles.inner}>
        {/* Left — heading + service cards (scrolls) */}
        <div className={styles.left}>
          <Reveal direction="up" distance={30} duration={0.9}>
            <SectionIndex number="01" label="What we do" />
            <h2 className={styles.title}>
              One team,
              <br />
              every service
            </h2>
          </Reveal>

          <div className={styles.cards}>
            {steps.map((s, i) => (
              <Reveal
                key={s.num}
                direction="up"
                distance={36}
                duration={0.85}
                delay={(i % 3) * 0.08}
                amount={0.2}
              >
                <article className={`${styles.card} ${i % 3 === 0 ? styles.cardFeature : ""}`}>
                  <span className={styles.num}>{s.num}</span>
                  <div className={styles.cardBody}>
                    <p className={styles.cardLabel}>{s.label}:</p>
                    <p className={styles.cardText}>{s.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right — tall product visual, sticky while the left scrolls (dummy for
            now — drop the real image at /images/services/service-feature.png). */}
        <div className={styles.right}>
          <FallbackImg
            src="/images/services/mobilechat.png"
            alt="Wowstack product preview"
            className={styles.image}
            fallbackClassName={styles.imgFallback}
          />
        </div>
      </div>
    </section>
  );
}
