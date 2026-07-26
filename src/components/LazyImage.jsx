import { useState, useEffect, useRef } from "react";

export default function LazyImage({ src, alt, className = "", style = {}, imgStyle = {}, priority = false }) {
  const [visible, setVisible] = useState(priority);
  const [loaded, setLoaded] = useState(priority);
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) {
      setVisible(true);
      setLoaded(true);
      return;
    }

    if (typeof window === "undefined" || !window.IntersectionObserver) {
      setVisible(true);
      setLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Check if image is already cached or complete in browser
  useEffect(() => {
    if (visible && imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, [visible, src]);

  return (
    <div ref={containerRef} className={className} style={{ ...style, position: "relative" }}>
      {!loaded && !priority && (
        <div className="absolute inset-0 w-full h-full bg-white/[0.05] animate-pulse rounded-2xl z-0 pointer-events-none" />
      )}
      {visible && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className="w-full h-full object-contain transition-opacity duration-300 relative z-10"
          style={{ ...imgStyle, opacity: 1 }}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />
      )}
    </div>
  );
}
