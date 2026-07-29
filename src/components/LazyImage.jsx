import { useState, useEffect, useRef } from "react";

export default function LazyImage({ src, alt, title, width, height, className = "", style = {}, imgStyle = {}, priority = false }) {
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

  useEffect(() => {
    if (visible && imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, [visible, src]);

  const altText = alt || "Prime Tools Hub Product Logo";
  const titleText = title || altText;

  return (
    <div ref={containerRef} className={className} style={{ ...style, position: "relative" }}>
      {!loaded && !priority && (
        <div className="absolute inset-0 w-full h-full bg-white/[0.05] animate-pulse rounded-2xl z-0 pointer-events-none" />
      )}
      {visible && (
        <img
          ref={imgRef}
          src={src}
          alt={altText}
          title={titleText}
          width={width || 200}
          height={height || 200}
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
