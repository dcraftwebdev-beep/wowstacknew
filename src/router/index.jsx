import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes.js";
import ScrollToTop from "@components/common/ScrollToTop/ScrollToTop.jsx";

/** Renders the route table with a Suspense boundary for lazy chunks. */
export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="route-fallback" aria-busy="true" />}>
        <Routes>
          {routes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}
