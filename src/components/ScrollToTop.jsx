import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const getHashId = (hash) => {
  const rawId = hash.slice(1);
  try {
    return decodeURIComponent(rawId);
  } catch {
    return rawId;
  }
};

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const scrollPositions = useRef({});

  // Capture scroll position as the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.current[pathname] = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    // 1. If there's a hash, scroll to the hash element with header offset
    if (hash) {
      const id = getHashId(hash);
      const timer = window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        } else if (id === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 150);
      return () => window.clearTimeout(timer);
    }

    // 2. If it is a Back/Forward navigation (POP), restore the previous scroll position
    if (navigationType === "POP") {
      const savedPosition = scrollPositions.current[pathname] || 0;
      const timer = window.setTimeout(() => {
        window.scrollTo({ top: savedPosition, left: 0, behavior: "instant" });
      }, 50);
      return () => window.clearTimeout(timer);
    }

    // 3. Otherwise (PUSH/REPLACE navigation), scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, navigationType]);

  return null;
}
