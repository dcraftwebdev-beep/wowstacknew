import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Seo from "@seo/Seo.jsx";
import { pageMeta } from "@seo/meta/pageMeta.js";
import { organizationSchema, websiteSchema, faqSchema } from "@seo/schema/index.js";
import { generalFaqs } from "@seo/aeo/faqData.js";
import Hero from "./sections/Hero/Hero.jsx";
import ShowcaseBento from "./sections/ShowcaseBento/ShowcaseBento.jsx";
import CoreIdea from "./sections/CoreIdea/CoreIdea.jsx";
import Gallery from "./sections/Gallery/Gallery.jsx";
import Services from "./sections/Services/Services.jsx";
import CoreServices from "./sections/CoreServices/CoreServices.jsx";
import GrowPortal from "./sections/GrowPortal/GrowPortal.jsx";
import Power from "./sections/Power/Power.jsx";
import Conversion from "./sections/Conversion/Conversion.jsx";
import Showcase from "./sections/Showcase/Showcase.jsx";
import ClientTruths from "./sections/ClientTruths/ClientTruths.jsx";
import StandOut from "./sections/StandOut/StandOut.jsx";
import RecentWork from "./sections/RecentWork/RecentWork.jsx";
import Faq from "./sections/Faq/Faq.jsx";

const meta = pageMeta.home;

export default function Home() {
  // The portal / bento sections above settle their heights asynchronously, which
  // shifts the document below them. Refresh ScrollTrigger once everything has
  // laid out so the pinned sections (Power, ClientTruths) use correct positions.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    const timers = [setTimeout(refresh, 350), setTimeout(refresh, 1200)];
    window.addEventListener("load", refresh);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("load", refresh);
    };
  }, []);

  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path={meta.path}
        jsonLd={[organizationSchema(), websiteSchema(), faqSchema(generalFaqs)]}
      />
      <Hero />
      <ShowcaseBento />
      <GrowPortal />
      <CoreIdea />
      {/* <Gallery /> */}
      <CoreServices />
      {/* <Services /> */}
      <Power />
      {/* <Conversion /> */}
      {/* <Showcase /> */}
      <ClientTruths />
      <StandOut />
      <RecentWork />
      <Faq />
    </>
  );
}
