import Seo from "@seo/Seo.jsx";
import { pageMeta } from "@seo/meta/pageMeta.js";
import { breadcrumbSchema } from "@seo/schema/index.js";
import ContactHero from "./sections/ContactHero/ContactHero.jsx";
import ContactStart from "./sections/ContactStart/ContactStart.jsx";

const meta = pageMeta.contact;

export default function Contact() {
  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path={meta.path}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <ContactHero />
      <ContactStart />
    </>
  );
}
