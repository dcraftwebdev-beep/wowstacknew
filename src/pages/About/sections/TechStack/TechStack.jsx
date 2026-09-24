import SectionIndex from "@components/ui/SectionIndex/SectionIndex.jsx";
import Reveal from "@components/ui/Reveal/Reveal.jsx";
import styles from "./TechStack.module.css";

/* The toolkit we design, build and automate with. Two marquee rows drift in
   opposite directions for a living "everything we use" wall. Logos are real
   brand marks generated from `simple-icons` into /images/tech/ — regenerate
   with `node scripts/generate-tech-icons.js`. */
const rowOne = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Vite", slug: "vite" },
  { name: "Three.js", slug: "threedotjs" },
  { name: "GSAP", slug: "greensock" },
  { name: "Framer", slug: "framer" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Supabase", slug: "supabase" },
  { name: "PostgreSQL", slug: "postgresql" },
];

const rowTwo = [
  // { name: "Figma", slug: "figma" },
  // { name: "Sketch", slug: "sketch" },
  // { name: "Blender", slug: "blender" },
  { name: "Shopify", slug: "shopify" },
  { name: "Webflow", slug: "webflow" },
  { name: "Vercel", slug: "vercel" },
  { name: "Cloudflare", slug: "cloudflare" },
  { name: "GitHub", slug: "github" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Anthropic", slug: "anthropic" },
  { name: "n8n", slug: "n8n" },
];

function Tile({ name, slug }) {
  return (
    <span className={styles.tile}>
      <span className={styles.tileMark}>
        <img
          className={styles.logo}
          src={`/images/tech/${slug}.svg`}
          alt={`${name} logo`}
          loading="lazy"
          width="26"
          height="26"
        />
      </span>
      <span className={styles.tileName}>{name}</span>
    </span>
  );
}

function Marquee({ items, reverse = false }) {
  // Duplicate the list so the -50% translate loops seamlessly.
  const loop = [...items, ...items];
  return (
    <div className={styles.row}>
      <div className={`${styles.track} ${reverse ? styles.reverse : ""}`}>
        {loop.map((item, i) => (
          <Tile key={`${item.slug}-${i}`} name={item.name} slug={item.slug} />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className={`${styles.section} edgeFade`} aria-label="Our toolkit">
      <div className={styles.inner}>
        <Reveal direction="up" distance={30} duration={0.9} className={styles.head}>
          <SectionIndex number="03" label="Our toolkit" />
          <h2 className={styles.heading}>The tech behind the work</h2>
          <p className={styles.lead}>
            A modern stack we use daily to design, develop and automate — chosen for speed,
            reliability and results, not hype.
          </p>
        </Reveal>
      </div>

      {/* Marquees bleed full-width, outside the padded inner. */}
      <div className={styles.marquees}>
        <Marquee items={rowOne} />
        <Marquee items={rowTwo} reverse />
      </div>
    </section>
  );
}
