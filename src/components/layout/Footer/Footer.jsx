import { Link } from "react-router-dom";
import { siteConfig } from "@seo/seo.config.js";
import CrowdCanvas from "@components/ui/CrowdCanvas/CrowdCanvas.jsx";
import styles from "./Footer.module.css";

const exploreLinks = [
  { to: "/about", label: "Who we are" },
  { to: "/portfolio", label: "The work" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Say hello" },
];

const socials = [
  { label: "X", handle: "@wowstack", href: "https://x.com/wowstack", img: "/social/x.svg" },
  { label: "Instagram", handle: "@wowstack", href: "https://instagram.com/wowstack", img: "/social/instagram.svg" },
  { label: "LinkedIn", handle: "@wowstack", href: "https://linkedin.com/company/wowstack", img: "/social/linkedin.svg" },
];

const Badge = ({ accent }) => (
  <span className={`${styles.badge} ${accent ? styles.badgeAccent : ""}`} aria-hidden="true">
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  </span>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Statement — logo + a crowd-themed standout line (heading font) */}
        <div className={styles.statement}>
          <Link to="/" className={styles.footLogo} aria-label="Wowstack home">
            <img src="/logo/logo-black.png" alt="Wowstack" />
          </Link>
          <p className={styles.statementText}>
            Don&rsquo;t blend into the crowd.<span className={styles.accent}> Stand out.</span>
          </p>
        </div>

        {/* Explore */}
        <nav className={styles.col} aria-label="Explore">
          <h4 className={styles.colHead}>Explore</h4>
          {exploreLinks.map((l) => (
            <Link key={l.to} to={l.to} className={styles.colLink}>{l.label}</Link>
          ))}
        </nav>

        {/* Follow us */}
        <div className={styles.col}>
          <h4 className={styles.colHead}>Follow us</h4>
          <div className={styles.socialGrid}>
            {socials.map((s) => (
              <a key={s.label} className={styles.social} href={s.href} target="_blank" rel="noreferrer">
                <span className={styles.socialIcon}>
                  <img src={s.img} alt={s.label} width="15" height="15" />
                </span>
                {s.handle}
              </a>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className={styles.ctaCol}>
          <Link to="/contact" className={`${styles.cta} ${styles.ctaPrimary}`}>
            <span className={styles.ctaTitle}>Start a project <Badge accent /></span>
            <span className={styles.ctaSub}>Let&apos;s work together</span>
          </Link>
          <span className={styles.ctaRule} />
          <Link to="/services" className={styles.cta}>
            <span className={styles.ctaTitle}>Our Services <Badge /></span>
            <span className={styles.ctaSub}>See what we build</span>
          </Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>
          © {year} {siteConfig.name} · <a href={`mailto:${siteConfig.organization.email}`} className={styles.bottomLink}>{siteConfig.organization.email}</a>
        </span>
        <span className={styles.meta}>
          Design · Build · Grow
        </span>
      </div>

      {/* Walking crowd — the very last element, touching the bottom of the page */}
      <div className={styles.crowd} aria-hidden="true">
        <CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} className={styles.crowdCanvas} />
      </div>
    </footer>
  );
}
