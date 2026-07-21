import { useState, useEffect, useRef } from "react";

export default function LazyImage({ src, alt, className, style, imgStyle }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
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
      { rootMargin: "150px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={{ ...style, position: "relative" }}>
      {visible ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
          style={imgStyle}
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-white/[0.03] animate-pulse rounded-full" />
      )}
    </div>
  );
}
