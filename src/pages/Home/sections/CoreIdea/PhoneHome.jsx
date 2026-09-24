import styles from "./PhoneHome.module.css";

/** CSS phone mockup for the app home screen (placeholder for a real export). */
export default function PhoneHome() {
  return (
    <div className={styles.device}>
      <div className={styles.notch} />
      <div className={styles.screen}>
        <div className={styles.statusbar}>
          <span>9:41</span>
          <span className={styles.avatar} />
        </div>

        <div className={styles.brand}>
          <span className={styles.dot} /> NEBULA
        </div>

        <div className={styles.searchRow}>
          <span className={styles.search}>Good morning — what's your pick?</span>
          <span className={styles.mic} />
        </div>

        <div className={styles.tabs}>
          <span className={styles.tabActive}>Your Space</span>
          <span>Podcast</span>
          <span>Playlist</span>
        </div>

        <div className={styles.cards}>
          <span className={styles.card} />
          <span className={`${styles.card} ${styles.card2}`} />
          <span className={`${styles.card} ${styles.card3}`} />
        </div>
      </div>
    </div>
  );
}
