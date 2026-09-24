import Seo from "@seo/Seo.jsx";
import { pageMeta } from "@seo/meta/pageMeta.js";
import { breadcrumbSchema } from "@seo/schema/index.js";

const meta = pageMeta.blog;

export default function Blog() {
  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path={meta.path}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      {/* Build the Blog UI here. */}
    </>
  );
}
