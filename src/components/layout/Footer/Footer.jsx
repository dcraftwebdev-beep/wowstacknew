import { Link } from "react-router-dom";
import { navLinks } from "@/router/routes.js";
import { siteConfig } from "@seo/seo.config.js";
import Reveal, { StaggerContainer, StaggerItem } from "@components/ui/Reveal/Reveal.jsx";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <StaggerContainer className={styles.inner} stagger={0.14} amount={0.15}>
        <StaggerItem y={20}>
          <p className={styles.brand}>Wow<span className={styles.accent}>stack</span></p>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
        </StaggerItem>

        <StaggerItem y={20}>
          <nav className={styles.links} aria-label="Footer">
            {navLinks.map(({ path, label }) => (
              <Link key={path} to={path} className={styles.link}>{label}</Link>
            ))}
          </nav>
        </StaggerItem>
      </StaggerContainer>

      <Reveal direction="none" duration={1} className={styles.bottom}>
        <span>© {year} {siteConfig.name}. All rights reserved.</span>
        <a href={`mailto:${siteConfig.organization.email}`} className={styles.link}>
          {siteConfig.organization.email}
        </a>
      </Reveal>
    </footer>
  );
}
