import { ReactLenis } from "lenis/react";
import AppRoutes from "@/router/index.jsx";
import Navbar from "@components/layout/Navbar/Navbar.jsx";
import Footer from "@components/layout/Footer/Footer.jsx";
import Preloader from "@components/ui/Preloader/Preloader.jsx";

/**
 * Root layout shell. ReactLenis provides site-wide smooth (momentum) scrolling;
 * per-element scroll reveals are handled by Framer Motion.
 */
export default function App() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.075,
        duration: 1.4,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
        infinite: false,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      <Preloader />
      <Navbar />
      <main id="main">
        <AppRoutes />
      </main>
      <Footer />
    </ReactLenis>
  );
}
