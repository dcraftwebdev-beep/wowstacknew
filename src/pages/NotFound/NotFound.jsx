import { Link } from "react-router-dom";
import Seo from "@seo/Seo.jsx";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" path="/404" noindex />
      {/* Build the 404 UI here. */}
      <Link to="/">Back home</Link>
    </>
  );
}
