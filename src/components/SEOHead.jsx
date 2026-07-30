import { useEffect } from "react";
import { DOMAIN, STORE_NAME, LOGO_URL } from "@/lib/seoSchema";

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = "website",
  schemaJson,
}) {
  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = title || "Buy ChatGPT Plus in Pakistan | Canva Pro, Veo 3 — Prime Tools Hub";
    document.title = fullTitle;

    // Helper to create or update meta tag
    const setMetaTag = (selector, attributeName, attributeValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to create or update link tag
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    const finalDescription = description || "Pakistan's trusted marketplace for ChatGPT Plus, Canva Pro, Veo 3, CapCut, Gemini Pro & more. Fast delivery via JazzCash/EasyPaisa.";
    const finalKeywords = keywords || "ChatGPT Plus Pakistan, Google Gemini Advanced, Veo 3 AI Video, CapCut Pro subscription, Canva Pro account, SuperGrok 12m, Surfshark VPN, Prime Tools Hub, primetoolshub.store";
    const finalCanonical = canonicalUrl || (typeof window !== "undefined" ? window.location.href : DOMAIN);
    const finalImage = ogImage || LOGO_URL;

    // 2. Update Standard Meta Tags
    setMetaTag('meta[name="description"]', "name", "description", finalDescription);
    setMetaTag('meta[name="keywords"]', "name", "keywords", finalKeywords);
    setMetaTag('meta[name="robots"]', "name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setLinkTag("canonical", finalCanonical);

    // 3. Open Graph Tags
    setMetaTag('meta[property="og:type"]', "property", "og:type", ogType);
    setMetaTag('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMetaTag('meta[property="og:description"]', "property", "og:description", finalDescription);
    setMetaTag('meta[property="og:url"]', "property", "og:url", finalCanonical);
    setMetaTag('meta[property="og:image"]', "property", "og:image", finalImage);
    setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", STORE_NAME);

    // 4. Twitter Cards
    setMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", finalDescription);
    setMetaTag('meta[name="twitter:url"]', "name", "twitter:url", finalCanonical);
    setMetaTag('meta[name="twitter:image"]', "name", "twitter:image", finalImage);

    // 5. JSON-LD Schema Insertion
    if (schemaJson) {
      let scriptEl = document.getElementById("ps-route-jsonld");
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = "ps-route-jsonld";
        scriptEl.setAttribute("type", "application/ld+json");
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schemaJson);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, schemaJson]);

  return null;
}
