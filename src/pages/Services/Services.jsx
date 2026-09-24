import Seo from "@seo/Seo.jsx";
import { pageMeta } from "@seo/meta/pageMeta.js";
import { breadcrumbSchema } from "@seo/schema/index.js";
import ServicesHero from "./sections/ServicesHero/ServicesHero.jsx";
import ServicesList from "./sections/ServicesList/ServicesList.jsx";
import Testimonial from "./sections/Testimonial/Testimonial.jsx";

const meta = pageMeta.services;

export default function Services() {
  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path={meta.path}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <ServicesHero />
      <ServicesList />
      <Testimonial />
    </>
  );
}
