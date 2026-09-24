import styles from "./PhonePlayer.module.css";

/**
 * CSS phone mockup standing in for the reference photo.
 * Swap for a real image export later: drop it in @assets/images and
 * render an <img> here instead.
 */
export default function PhonePlayer() {
  return (
    <div className={styles.device}>
      <div className={styles.notch} />
      <div className={styles.screen}>
        <div className={styles.statusbar}>
          <span>9:41</span>
          <span className={styles.dots} />
        </div>

        <div className={styles.art} />

        <div className={styles.trackRow}>
          <div>
            <p className={styles.track}>Midnight Drive</p>
            <p className={styles.artist}>Nova</p>
          </div>
          <span className={styles.badge} />
        </div>

        <div className={styles.progress}>
          <span className={styles.time}>1:45</span>
          <span className={styles.bar}>
            <span className={styles.fill} />
          </span>
          <span className={styles.time}>3:10</span>
        </div>

        <div className={styles.controls}>
          <span className={styles.ctrl} />
          <span className={`${styles.ctrl} ${styles.play}`} />
          <span className={styles.ctrl} />
        </div>
      </div>
    </div>
  );
}
