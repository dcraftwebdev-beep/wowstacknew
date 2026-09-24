import Seo from "@seo/Seo.jsx";
import { pageMeta } from "@seo/meta/pageMeta.js";
import { breadcrumbSchema } from "@seo/schema/index.js";
import WorksHero from "./sections/WorksHero/WorksHero.jsx";
import OurWorks from "./sections/OurWorks/OurWorks.jsx";
import ContactBanner from "./sections/ContactBanner/ContactBanner.jsx";

const meta = pageMeta.portfolio;

export default function Portfolio() {
  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path={meta.path}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
          ]),
        ]}
      />
      <WorksHero />
      <OurWorks />
      <ContactBanner />
    </>
  );
}
