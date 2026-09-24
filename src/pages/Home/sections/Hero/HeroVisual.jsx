import { useState, useEffect } from "react";
import PhonePlayer from "./PhonePlayer.jsx";
import styles from "./HeroVisual.module.css";

const IMAGES = [
  { src: "/images/Hero/wow1.png", alt: "Wowstack work showcase" },
  { src: "/images/Hero/wow2.png", alt: "Wowstack work showcase" },
  { src: "/images/Hero/wow3.png", alt: "Wowstack work showcase" },
  { src: "/images/Hero/wow4.png", alt: "Wowstack work showcase" },
  { src: "/images/Hero/wow5.png", alt: "Wowstack work showcase" },

  
];

/**
 * Hero centerpiece. Cross-fades smoothly between the two exports in
 * /public/images/Hero/. If a file is missing, it falls back to the CSS phone
 * mockup so the layout never shows a broken image.
 */
export default function HeroVisual() {
  const [failed, setFailed] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % IMAGES.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  if (failed) return <PhonePlayer />;

  return (
    <div className={styles.stack}>
      {IMAGES.map((img, i) => (
        <img
          key={img.src}
          className={`${styles.img} ${i === active ? styles.active : ""}`}
          src={img.src}
          alt={img.alt}
          onError={() => setFailed(true)}
        />
      ))}
    </div>
  );
}
