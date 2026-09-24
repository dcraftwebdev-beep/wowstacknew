import InfiniteGallery from "@components/ui/InfiniteGallery/InfiniteGallery.jsx";
import styles from "./Gallery.module.css";

/**
 * Section 3 — 3D infinite gallery.
 * Sample images kept as-is for now (swap for real project shots later).
 */
// Served same-origin from /public to avoid cross-origin WebGL texture blocks.
const sampleImages = [
  { src: "/images/gallery/01.jpg", alt: "Gallery image 1" },
  { src: "/images/gallery/02.jpg", alt: "Gallery image 2" },
  { src: "/images/gallery/03.jpg", alt: "Gallery image 3" },
  { src: "/images/gallery/04.jpg", alt: "Gallery image 4" },
  { src: "/images/gallery/05.jpg", alt: "Gallery image 5" },
  { src: "/images/gallery/06.jpg", alt: "Gallery image 6" },
  { src: "/images/gallery/07.jpg", alt: "Gallery image 7" },
  { src: "/images/gallery/08.jpg", alt: "Gallery image 8" },
];

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <InfiniteGallery
        images={sampleImages}
        speed={1.2}
        visibleCount={12}
        className={styles.canvas}
      />

      {/* Centered title (most important) — blends over the gallery */}
      <div className={styles.overlay}>
        <h2 className={styles.title}>
          <span className={styles.italic}>Our Work</span>
        </h2>
      </div>

      {/* Navigation hint */}
      <div className={styles.hint}>
        <p>Use mouse wheel, arrow keys, or touch to navigate</p>
        <p className={styles.hintMuted}>Auto-play resumes after 3 seconds of inactivity</p>
      </div>
    </section>
  );
}
