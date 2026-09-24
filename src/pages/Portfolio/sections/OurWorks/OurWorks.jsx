import { Link } from "react-router-dom";
import SectionIndex from "@components/ui/SectionIndex/SectionIndex.jsx";
import FallbackImg from "@components/ui/FallbackImg/FallbackImg.jsx";
import Reveal, { StaggerContainer, StaggerItem } from "@components/ui/Reveal/Reveal.jsx";
import styles from "./OurWorks.module.css";

const projects = [
  {
    name: "Teja Machinery",
    tag: "Manufacturing · Website & App",
    items: [
      { img: "/images/recent-works/teja/tejascreen4.png", title: "Multi-device build", type: "Web & Mobile" },
      { img: "/images/recent-works/teja/tejascreen1.png", title: "Homepage", type: "Landing page" },
      { img: "/images/recent-works/teja/tejascreen2.png", title: "Precision products", type: "UI/UX design" },
      { img: "/images/recent-works/teja/tejascreen3.png", title: "Mobile experience", type: "Responsive web" },
    ],
  },
  {
    name: "BrightSmile Dental",
    tag: "Healthcare · Website & App",
    items: [
      { img: "/images/recent-works/dentaldesk.png", title: "Homepage", type: "Website design" },
      { img: "/images/recent-works/dentalabout.png", title: "Brand story", type: "UI/UX design" },
      { img: "/images/recent-works/dentalbooking.png", title: "Booking flow", type: "Web app" },
      { img: "/images/recent-works/dentalmobile.png", title: "Patient app", type: "App development" },
    ],
  },
];

export default function OurWorks() {
  return (
    <section className={`${styles.section} edgeFade`}>
      <div className={styles.inner}>
        <Reveal direction="up" distance={30} duration={0.9}>
          <header className={styles.head}>
            <SectionIndex number="01" label="Selected work" />
            <h2 className={styles.heading}>Projects we&rsquo;re proud of</h2>
          </header>
        </Reveal>

        {projects.map((project) => (
          <div className={styles.project} key={project.name}>
            <Reveal direction="up" distance={24} duration={0.8}>
              <div className={styles.projectHead}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <span className={styles.projectTag}>{project.tag}</span>
              </div>
            </Reveal>

            <StaggerContainer className={styles.grid} stagger={0.12} amount={0.1}>
              {project.items.map((w) => (
                <StaggerItem y={36} scale={0.97} duration={0.9} key={`${project.name}-${w.title}`}>
                  <Link to="/contact" className={styles.card} aria-label={`${project.name} — ${w.title}`}>
                    <span className={styles.media}>
                      <FallbackImg
                        src={w.img}
                        alt={`${project.name} — ${w.title}`}
                        className={styles.cardImg}
                        fallbackClassName={styles.mediaFallback}
                      />
                    </span>
                    <span className={styles.meta}>
                      <span className={styles.cardTitle}>{w.title}</span>
                      <span className={styles.cardType}>{w.type}</span>
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        ))}
      </div>
    </section>
  );
}
