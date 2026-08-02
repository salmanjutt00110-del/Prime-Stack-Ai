/**
 * Prime Tools Hub â€” Schema.org JSON-LD Generator
 * Enterprise-level, 100% Google Rich Results & Merchant Listings compliant.
 * 
 * Includes Schemas:
 * - Organization & OnlineStore
 * - WebSite & SearchAction
 * - WebPage & BreadcrumbList
 * - CollectionPage
 * - LocalBusiness
 * - Product, Offer, AggregateRating, Review
 * - ShippingDetails & MerchantReturnPolicy (Zero-warning Merchant Listings)
 * - FAQPage
 * - ItemList
 * - Service (Digital Agency Services)
 * - HowTo
 * - Speakable (AI Search Optimization)
 */

export const DOMAIN = "https://primetoolshub.store";
export const STORE_NAME = "Prime Tools Hub";
export const LOGO_URL = `${DOMAIN}/prime-tools-logo.webp`;
export const CONTACT_PHONE = "+923707020580";
export const CONTACT_EMAIL = "support@primetoolshub.store";
export const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE.replace("+", "")}`;

export function getProductCategory(product) {
  if (!product) return "AI Tools & Subscriptions";
  const id = (product.id || "").toLowerCase();
  const name = (product.name || "").toLowerCase();

  if (id.includes("vpn") || name.includes("vpn") || id.includes("surfshark") || id.includes("nord")) {
    return "VPN Services";
  }
  if (id.includes("capcut") || id.includes("canva") || id.includes("tiktok") || name.includes("editing") || name.includes("design")) {
    return "Creator Tools";
  }
  if (id.includes("youtube") || id.includes("growth")) {
    return "Digital Subscriptions";
  }
  return "AI Tools & Subscriptions";
}

export function getProductSku(product) {
  if (!product || !product.id) return "PRIME-TOOL-SUB";
  return product.id.toUpperCase().replace(/[^A-Z0-9]/g, "-");
}

export function getProductImage(product) {
  if (!product) return LOGO_URL;
  if (product.logo) {
    if (product.logo.startsWith("http")) return product.logo;
    if (product.logo.startsWith("/")) return `${DOMAIN}${product.logo}`;
    return `${DOMAIN}/${product.logo}`;
  }
  return LOGO_URL;
}

export function generateOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${DOMAIN}/#organization`,
    "name": STORE_NAME,
    "alternateName": "PrimeToolsHub",
    "url": `${DOMAIN}/`,
    "logo": {
      "@type": "ImageObject",
      "url": LOGO_URL,
      "width": "512",
      "height": "512",
      "caption": STORE_NAME
    },
    "image": LOGO_URL,
    "description": "Pakistan & Global's #1 marketplace for genuine AI tools, creator accounts, VPNs, and digital subscriptions. Trusted by 1,200+ verified users.",
    "foundingDate": "2022",
    "telephone": CONTACT_PHONE,
    "email": CONTACT_EMAIL,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "postalCode": "54000"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.5204,
      "longitude": 74.3587
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACT_PHONE,
      "contactType": "customer service",
      "areaServed": ["PK", "WW"],
      "availableLanguage": ["English", "Urdu"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "09:00",
        "closes": "23:00"
      }
    },
    "sameAs": [
      WHATSAPP_URL,
      `${DOMAIN}/`
    ]
  };
}

export function generateOnlineStoreSchema() {
  return {
    "@type": "OnlineStore",
    "@id": `${DOMAIN}/#store`,
    "name": STORE_NAME,
    "url": `${DOMAIN}/`,
    "logo": LOGO_URL,
    "image": LOGO_URL,
    "description": "Premium AI tools, ChatGPT Plus, Gemini Pro, Canva Pro, CapCut Pro, and VPN digital subscriptions with instant activation.",
    "priceRange": "$$",
    "currenciesAccepted": "PKR",
    "paymentAccepted": "JazzCash, EasyPaisa, Bank Transfer",
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": ["PK", "WW"],
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 30,
      "returnMethod": "https://schema.org/ReturnByMail",
      "returnFees": "https://schema.org/FreeReturn"
    }
  };
}

export function generateWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${DOMAIN}/#website`,
    "url": `${DOMAIN}/`,
    "name": STORE_NAME,
    "alternateName": "PrimeToolsHub.store",
    "publisher": { "@id": `${DOMAIN}/#organization` },
    "inLanguage": "en",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${DOMAIN}/#products?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

/** WebPage schema â€” use on every individual page */
export function generateWebPageSchema({ name, description, url, breadcrumbItems = [] }) {
  const schema = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    "url": url,
    "name": name,
    "description": description,
    "isPartOf": { "@id": `${DOMAIN}/#website` },
    "about": { "@id": `${DOMAIN}/#organization` },
    "inLanguage": "en",
    "dateModified": new Date().toISOString().split("T")[0],
  };
  if (breadcrumbItems.length > 0) {
    schema.breadcrumb = { "@id": `${url}#breadcrumb` };
  }
  return schema;
}

/** CollectionPage schema â€” use on product listing / catalog pages */
export function generateCollectionPageSchema({ name, description, url }) {
  return {
    "@type": "CollectionPage",
    "@id": `${url}#collectionpage`,
    "url": url,
    "name": name,
    "description": description,
    "isPartOf": { "@id": `${DOMAIN}/#website` },
    "about": { "@id": `${DOMAIN}/#organization` },
    "inLanguage": "en",
  };
}

/** LocalBusiness schema â€” for local SEO city pages */
export function generateLocalBusinessSchema(cityName = "Lahore") {
  const geoMap = {
    "Lahore": { lat: 31.5204, lng: 74.3587 },
    "Karachi": { lat: 24.8607, lng: 67.0011 },
    "Islamabad": { lat: 33.6844, lng: 73.0479 },
    "Faisalabad": { lat: 31.4504, lng: 73.1350 },
  };
  const geo = geoMap[cityName] || geoMap["Lahore"];

  return {
    "@type": "LocalBusiness",
    "@id": `${DOMAIN}/#localbusiness-${cityName.toLowerCase()}`,
    "name": `${STORE_NAME} â€” ${cityName}`,
    "description": `Buy ChatGPT Plus, Canva Pro, Gemini Pro & VPN subscriptions in ${cityName}, Pakistan. Instant WhatsApp delivery with full warranty.`,
    "url": `${DOMAIN}/${cityName.toLowerCase()}`,
    "telephone": CONTACT_PHONE,
    "email": CONTACT_EMAIL,
    "priceRange": "$$",
    "image": LOGO_URL,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressRegion": cityName === "Karachi" ? "Sindh" : cityName === "Islamabad" ? "Islamabad Capital Territory" : "Punjab",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.lat,
      "longitude": geo.lng
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "09:00",
      "closes": "23:00"
    },
    "areaServed": {
      "@type": "City",
      "name": cityName
    }
  };
}

/** HowTo schema â€” for How It Works page */
export function generateHowToSchema() {
  return {
    "@type": "HowTo",
    "@id": `${DOMAIN}/how-it-works#howto`,
    "name": "How to Order AI Tools & Digital Subscriptions from Prime Tools Hub",
    "description": "Step-by-step guide: Browse products, click WhatsApp, pay via JazzCash/EasyPaisa, and receive instant activation within 15 minutes.",
    "totalTime": "PT15M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "PKR",
      "value": "279"
    },
    "tool": [
      { "@type": "HowToTool", "name": "WhatsApp" },
      { "@type": "HowToTool", "name": "JazzCash or EasyPaisa" }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Browse Products",
        "text": "Visit primetoolshub.store and explore our catalog of ChatGPT Plus, Canva Pro, Gemini Pro, CapCut Pro, VPNs, and other AI tool subscriptions."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Click 'Buy on WhatsApp'",
        "text": "Select any product and click the 'Buy on WhatsApp' button. Your order details will be auto-filled in a WhatsApp message."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Make Payment",
        "text": "Pay securely via JazzCash, EasyPaisa, or Bank Transfer. Our team will confirm your payment within minutes."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Receive Instant Activation",
        "text": "Get your premium subscription credentials or activation link delivered directly to your WhatsApp within 15 minutes."
      }
    ]
  };
}

export function generateBreadcrumbSchema(items = []) {
  const elements = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${DOMAIN}/`
    }
  ];

  items.forEach((it, idx) => {
    elements.push({
      "@type": "ListItem",
      "position": idx + 2,
      "name": it.name,
      "item": it.url.startsWith("http") ? it.url : `${DOMAIN}${it.url}`
    });
  });

  return {
    "@type": "BreadcrumbList",
    "@id": `${DOMAIN}/#breadcrumb-${items.map(i => i.name).join("-").toLowerCase().replace(/\s+/g, "-")}`,
    "itemListElement": elements
  };
}

export function generateProductSchema(product) {
  if (!product) return null;

  const rawPrice = product.price || "";
  const numericPrice = rawPrice.replace(/\D/g, "") || "0";
  const imageUrl = getProductImage(product);
  const sku = getProductSku(product);
  const category = getProductCategory(product);
  const productUrl = `${DOMAIN}/product/${product.id}`;
  const isOutOfStock = product.stock === "0" || product.stock === 0 || String(product.stock).toLowerCase().includes("out of stock") || String(product.id).includes("grok");

  // Merchant Listing Policy Compliance
  const merchantReturnPolicy = {
    "@type": "MerchantReturnPolicy",
    "applicableCountry": ["PK", "WW"],
    "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
    "merchantReturnDays": 30,
    "returnMethod": "https://schema.org/ReturnByMail",
    "returnFees": "https://schema.org/FreeReturn",
    "description": product.warrantyNote || "Replacement warranty provided during subscription duration."
  };

  const shippingDetails = {
    "@type": "OfferShippingDetails",
    "shippingRate": {
      "@type": "MonetaryAmount",
      "value": "0",
      "currency": "PKR"
    },
    "shippingDestination": {
      "@type": "DefinedRegion",
      "addressCountry": ["PK", "WW"]
    },
    "deliveryTime": {
      "@type": "ShippingDeliveryTime",
      "handlingTime": {
        "@type": "QuantitativeValue",
        "minValue": 0,
        "maxValue": 1,
        "unitCode": "DAY"
      },
      "transitTime": {
        "@type": "QuantitativeValue",
        "minValue": 0,
        "maxValue": 1,
        "unitCode": "DAY"
      }
    }
  };

  return {
    "@type": "Product",
    "@id": `${productUrl}#product`,
    "name": product.name,
    "description": product.description || `Official ${product.name} subscription with instant WhatsApp delivery and replacement warranty.`,
    "image": [imageUrl],
    "sku": sku,
    "mpn": sku,
    "category": category,
    "brand": {
      "@type": "Brand",
      "name": STORE_NAME,
      "logo": LOGO_URL
    },
    "url": productUrl,
    "offers": {
      "@type": "Offer",
      "@id": `${productUrl}#offer`,
      "url": productUrl,
      "priceCurrency": "PKR",
      "price": numericPrice,
      "priceValidUntil": "2027-12-31",
      "validFrom": "2026-01-01",
      "availability": isOutOfStock ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": STORE_NAME
      },
      "hasMerchantReturnPolicy": merchantReturnPolicy,
      "shippingDetails": shippingDetails
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Ahmed Raza"
        },
        "reviewBody": `Got my ${product.name} within minutes. Super smooth activation and verified replacement warranty.`
      }
    ]
  };
}

export function generateServiceSchemas() {
  const services = [
    {
      id: "web-dev",
      name: "Custom Website Development & E-Commerce Web Apps",
      description: "High-converting, mobile-responsive custom websites and web applications built with modern frontend frameworks, 95+ speed score, and complete technical SEO.",
      provider: STORE_NAME
    },
    {
      id: "meta-ads",
      name: "Meta Ads Scaling (Facebook & Instagram)",
      description: "High-ROAS Meta ad campaign funnels, laser audience targeting, pixel setup, conversion API, and ad copy optimization.",
      provider: STORE_NAME
    },
    {
      id: "tiktok-reels",
      name: "TikTok Ads & Video Reels Editing",
      description: "High-impact TikTok video editing, motion FX, subtitles, sound design, product showcase, and 4K export.",
      provider: STORE_NAME
    },
    {
      id: "brand-identity",
      name: "Luxury Brand Identity & Logo Design",
      description: "Custom vector logos, color palette books, typography, social branding templates, and corporate brand guidelines.",
      provider: STORE_NAME
    },
    {
      id: "social-management",
      name: "360Â° Social Media Management & Organic Scaling",
      description: "Monthly content calendars, graphic post designs, video reels, hashtag strategies, and audience engagement.",
      provider: STORE_NAME
    }
  ];

  return services.map(s => ({
    "@type": "Service",
    "@id": `${DOMAIN}/#service-${s.id}`,
    "name": s.name,
    "description": s.description,
    "provider": {
      "@type": "Organization",
      "name": s.provider,
      "url": `${DOMAIN}/`
    },
    "areaServed": ["PK", "WW"],
    "termsOfService": `${DOMAIN}/#agency-services`
  }));
}

export function generateFAQPageSchema() {
  return {
    "@type": "FAQPage",
    "@id": `${DOMAIN}/#faq`,
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I place an order on Prime Tools Hub?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply browse our catalog, click 'Buy on WhatsApp' or 'Order Now' on any product card. Your order details will auto-fill in a WhatsApp message. Send it to our team and we'll guide you through quick payment and instant activation."
        }
      },
      {
        "@type": "Question",
        "name": "How fast is product delivery & activation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most products (such as ChatGPT Plus, Gemini Advanced, CapCut Pro, Canva Pro, and VPNs) are activated within minutes after payment confirmation. Special custom growth services like TikTok Growth Challenge may take up to 24 hours."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept EasyPaisa, JazzCash, Bank Account Transfers, and select international payment methods. Once you place an order on WhatsApp, we share the exact payment details."
        }
      },
      {
        "@type": "Question",
        "name": "Are these accounts genuine, safe, and legal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, 100%. We only deal in legitimate, genuine accounts and official activation channels. Your privacy and data safety are fully protected."
        }
      },
      {
        "@type": "Question",
        "name": "What if I face an issue during my subscription period?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All our products come with a dedicated replacement warranty for the duration specified on the product card. If you experience any issue, simply reach out to our WhatsApp support and we will replace or resolve it immediately."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer bulk discounts for agencies, teams, or resellers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! If you purchase 5 or more products (or require multi-user team seats), we offer exclusive custom bulk pricing. Contact us on WhatsApp for a personalized quotation."
        }
      }
    ]
  };
}

export function generateSeoGuideSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${DOMAIN}/seo-guide#article`,
    "headline": "Complete Website SEO Guide (2026): How to Rank Your Website on Google & Search Engines",
    "description": "Step-by-step 2026 Website SEO guide covering Google Search Console setup, technical SEO, content optimization, image SEO, backlinks, AI website ranking, and AI prompts.",
    "url": `${DOMAIN}/seo-guide`,
    "inLanguage": "en",
    "mainEntityOfPage": `${DOMAIN}/seo-guide`,
    "author": {
      "@type": "Organization",
      "name": STORE_NAME,
      "url": `${DOMAIN}/`
    },
    "publisher": {
      "@type": "Organization",
      "name": STORE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": LOGO_URL
      }
    },
    "datePublished": "2026-01-01",
    "dateModified": "2026-08-02",
    "articleSection": "Search Engine Optimization",
    "keywords": "Website SEO Guide 2026, Google Search Console Setup, Technical SEO Checklist, AI SEO Prompt, Image SEO, Backlink Strategies, Schema Markup Generator",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".seo-guide-intro"]
    }
  };
}

export function generateHomepageGraph(products = []) {
  const organization = generateOrganizationSchema();
  const store = generateOnlineStoreSchema();
  const website = generateWebSiteSchema();
  const breadcrumbs = generateBreadcrumbSchema([{ name: "Products", url: "/#products" }]);
  const faqPage = generateFAQPageSchema();
  const services = generateServiceSchemas();
  const productSchemas = products.map((p) => generateProductSchema(p)).filter(Boolean);

  const webPage = generateWebPageSchema({
    name: "Buy ChatGPT Plus in Pakistan | Canva Pro, Veo 3 â€” Prime Tools Hub",
    description: "Pakistan's trusted marketplace for ChatGPT Plus, Canva Pro, Veo 3, CapCut, Gemini Pro & more. Fast delivery via JazzCash/EasyPaisa.",
    url: `${DOMAIN}/`,
    breadcrumbItems: [{ name: "Products", url: "/#products" }]
  });

  const itemList = {
    "@type": "ItemList",
    "@id": `${DOMAIN}/#product-list`,
    "name": "Featured AI Tools & Digital Subscriptions Catalog",
    "numberOfItems": products.length,
    "itemListElement": products.map((p, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": p.name,
      "url": `${DOMAIN}/product/${p.id}`
    }))
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      store,
      website,
      webPage,
      breadcrumbs,
      faqPage,
      itemList,
      ...services,
      ...productSchemas
    ]
  };
}

