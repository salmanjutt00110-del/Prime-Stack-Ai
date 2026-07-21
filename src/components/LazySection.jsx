import { useState, useEffect, useRef } from "react";

export default function LazySection({ children, placeholderHeight = "200px" }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!window.IntersectionObserver) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" } // Load the section 300px before it enters the viewport
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: isInView ? "auto" : placeholderHeight }}>
      {isInView ? children : null}
    </div>
  );
}
