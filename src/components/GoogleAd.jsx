import { useEffect, useRef } from "react";

/**
 * GoogleAd component for rendering Google AdSense ad units.
 *
 * @param {string} slot - The data-ad-slot ID provided by Google AdSense dashboard.
 * @param {string} format - The format of the ad (default: 'auto').
 * @param {boolean} responsive - Whether the ad is full-width responsive (default: true).
 * @param {string} layout - Optional layout attribute (e.g., 'in-article').
 * @param {string} layoutKey - Optional layout key for native in-feed/article ads.
 * @param {string} className - Additional CSS classes for wrapper.
 * @param {object} style - Custom inline styles for the ins element.
 */
export default function GoogleAd({
  slot,
  format = "auto",
  responsive = true,
  layout,
  layoutKey,
  className = "",
  style = { display: "block" },
}) {
  const adRef = useRef(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    // Only attempt to push ad once per mounted element when a slot is configured
    if (!slot || isLoaded.current) return;

    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isLoaded.current = true;
      }
    } catch (err) {
      console.warn("Google AdSense push error:", err);
    }
  }, [slot]);

  // If no slot is configured yet, show a clean indicator in development mode
  if (!slot) {
    if (import.meta.env.DEV) {
      return (
        <div
          className={`my-6 mx-auto max-w-4xl p-4 rounded-xl border border-dashed border-amber-500/30 bg-amber-500/5 text-center text-xs text-amber-300/80 ${className}`}
        >
          <p className="font-semibold mb-1">📢 Google AdSense Unit (Pending Slot ID)</p>
          <p className="text-slate-400 text-[11px]">
            Publisher: <code className="text-amber-200">ca-pub-6288952495721129</code> | Pass <code className="text-amber-200">slot="YOUR_AD_SLOT_ID"</code> once your ad unit is created.
          </p>
        </div>
      );
    }
    return null;
  }

  return (
    <div className={`google-ad-container my-6 mx-auto overflow-hidden text-center ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-6288952495721129"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
        {...(layout ? { "data-ad-layout": layout } : {})}
        {...(layoutKey ? { "data-ad-layout-key": layoutKey } : {})}
      />
    </div>
  );
}
