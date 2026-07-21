import { useState, useEffect, useRef } from "react";

export default function LazyImage({ src, alt, className, style, imgStyle, priority = false }) {
  const [visible, setVisible] = useState(priority);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (priority) {
      setVisible(true);
      return;
    }

    if (!window.IntersectionObserver) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={ref} className={className} style={{ ...style, position: "relative" }}>
      {/* Shimmer placeholder on top until image is fully decoded and loaded */}
      {!loaded && (
        <div className="absolute inset-0 w-full h-full bg-white/[0.04] animate-pulse rounded-full z-10" />
      )}
      {visible && (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain transition-opacity duration-300"
          style={{ ...imgStyle, opacity: loaded ? 1 : 0 }}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
}
