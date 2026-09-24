import Seo from "@seo/Seo.jsx";
import { pageMeta } from "@seo/meta/pageMeta.js";
import { breadcrumbSchema } from "@seo/schema/index.js";
import AboutHero from "./sections/AboutHero/AboutHero.jsx";
import Story from "./sections/Story/Story.jsx";
import TechStack from "./sections/TechStack/TechStack.jsx";

const meta = pageMeta.about;

export default function About() {
  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path={meta.path}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      {/* Hero — full-bleed background image */}
      <AboutHero />
      {/* 2nd section — pinned story scroll */}
      <Story />
      {/* 3rd section — the toolkit marquee */}
      <TechStack />
    </>
  );
}
