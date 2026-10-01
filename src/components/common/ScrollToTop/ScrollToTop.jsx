import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

/**
 * On route change: if the URL has a hash, smooth-scroll to that section
 * (retrying until it has rendered); otherwise jump to the top. SPA nav does
 * neither by default. Uses Lenis so it matches the site's momentum scrolling.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let tries = 0;
      let timer;
      const go = () => {
        const el = document.getElementById(id);
        if (el) {
          if (lenis) lenis.scrollTo(el, { offset: -16, duration: 1.1 });
          else el.scrollIntoView({ behavior: "smooth" });
        } else if (tries++ < 25) {
          timer = window.setTimeout(go, 60);
        }
      };
      timer = window.setTimeout(go, 80);
      return () => window.clearTimeout(timer);
    }

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash, lenis]);

  return null;
}
