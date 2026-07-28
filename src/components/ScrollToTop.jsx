import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { scrollToSection } from "@/lib/scroll";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const scrollPositions = useRef({});

  // Disable browser auto-scroll restoration on refresh/load
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Capture scroll position for route back/forward navigation
  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.current[pathname] = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    // 1. If there's a section hash, scroll to that section element
    if (hash) {
      const timer = window.setTimeout(() => {
        scrollToSection(hash);
      }, 100);
      return () => window.clearTimeout(timer);
    }

    // 2. If it is a Back/Forward navigation (POP), restore the previous scroll position
    if (navigationType === "POP" && scrollPositions.current[pathname] !== undefined) {
      const savedPosition = scrollPositions.current[pathname];
      const timer = window.setTimeout(() => {
        window.scrollTo({ top: savedPosition, left: 0, behavior: "instant" });
      }, 50);
      return () => window.clearTimeout(timer);
    }

    // 3. Otherwise (Refresh / Home Load / Route Change), ALWAYS force scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, navigationType]);

  return null;
}
