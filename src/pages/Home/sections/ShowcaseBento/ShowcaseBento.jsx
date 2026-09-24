import { useState } from "react";
import { Link } from "react-router-dom";
import { submitContact } from "@services/api/contact.js";
import styles from "./ShowcaseBento.module.css";

const AVATARS = [
  "/images/gallery/06.jpg",
  "/images/gallery/07.jpg",
  "/images/gallery/08.jpg",
];

export default function ShowcaseBento() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    const res = await submitContact({
      name: "Home enquiry",
      email,
      message: "Requested a free strategy session from the home page.",
    });
    setStatus(res.ok ? "sent" : "error");
    if (res.ok) setEmail("");
  }

  return (
    <section className={styles.section} aria-label="Wowstack showcase">
      <div className={styles.bento}>
        {/* ── Left — app showcase ─────────────── */}
        <article className={styles.appCard}>
          <div className={styles.phone}>
            <div className={styles.phoneScreen}>
              <p className={styles.appTitle}>
                Built to <span className={styles.appOutline}>Sell</span>
              </p>
              <p className={styles.appSub}>
                Fast, modern storefronts designed to turn browsers into loyal buyers.
              </p>
              <div className={styles.appRow}>
                <span className={styles.appBtn}>
                  View live
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
                <span className={styles.appTag}>Ecommerce</span>
              </div>
              <img className={styles.appHero} src="/images/gallery/03.jpg" alt="Wowstack storefront build" />
              <div className={styles.appThumbs}>
                <img src="/images/gallery/01.jpg" alt="" />
                <img src="/images/gallery/02.jpg" alt="" />
              </div>
            </div>
          </div>
        </article>

        {/* ── Middle column ───────────────────── */}
        <div className={styles.mid}>
          {/* Profile card */}
          <article className={styles.profile}>
            <button className={styles.menu} type="button" aria-label="Menu">
              <span /><span /><span />
            </button>
            <div className={styles.profileHead}>
              <span className={styles.avatar} aria-hidden="true">W</span>
              <ul className={styles.stats}>
                <li><b>180</b><span>Projects</span></li>
                <li><b>50+</b><span>Clients</span></li>
                <li><b>5.0</b><span>Rating</span></li>
              </ul>
            </div>
            <p className={styles.profileName}>Wowstack</p>
          </article>

          {/* Hero / CTA card */}
          <article className={styles.heroCard}>
            <div className={styles.waitRow}>
              <div className={styles.avatars}>
                {AVATARS.map((src, i) => (
                  <img key={i} src={src} alt="" className={styles.miniAvatar} />
                ))}
              </div>
              <span className={styles.waitText}>500+ brands building with us</span>
            </div>

            <h2 className={styles.heroTitle}>
              Building the Future
              <br />
              <span className={styles.heroSerif}>One Brand at a Time.</span>
            </h2>

            <p className={styles.heroSub}>
              Tell us where you want to go. Book a free strategy call and get a
              clear plan to get there.
            </p>

            <form className={styles.form} onSubmit={onSubmit}>
              <input
                type="email"
                className={styles.input}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className={styles.submit} disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : status === "sent" ? "Sent ✓" : "Get Started"}
              </button>
            </form>

            <div className={styles.socials}>
              <Link to="/contact" className={styles.social} aria-label="Portfolio">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3.5" />
                </svg>
              </Link>
              <Link to="/contact" className={styles.social} aria-label="Social">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 5l14 14M19 5L5 19" />
                </svg>
              </Link>
              <Link to="/contact" className={styles.social} aria-label="Network">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M7 10v7M7 7v0M11 17v-4a2 2 0 0 1 4 0v4" />
                </svg>
              </Link>
            </div>
          </article>
        </div>

        {/* ── Right — story image ─────────────── */}
        <article className={styles.story}>
          <img className={styles.storyImg} src="/images/about/abouthero.png" alt="Wowstack" />
          <div className={styles.storyBars} aria-hidden="true">
            <span /><span /><span />
          </div>
          <div className={styles.storyHead}>
            <span className={styles.storyAvatar} aria-hidden="true">W</span>
            <span className={styles.storyName}>Wowstack</span>
            <span className={styles.storyTime}>now</span>
          </div>
        </article>
      </div>

      <footer className={styles.foot}>
        <span>@wowstack</span>
        <span>All Rights Reserved</span>
      </footer>
    </section>
  );
}
