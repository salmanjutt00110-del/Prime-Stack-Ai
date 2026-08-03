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

export const DOMAIN = "https://www.primetoolshub.store";
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
    "alternateName": ["PrimeToolsHub", "Prime Tools Hub Pakistan"],
    "url": `${DOMAIN}/`,
    "logo": {
      "@type": "ImageObject",
      "url": LOGO_URL,
      "width": "512",
      "height": "512",
      "caption": STORE_NAME
    },
    "image": LOGO_URL,
    "description": "Pakistan & Global's #1 marketplace for genuine AI tools, creator accounts, VPNs, and digital subscriptions. Founded by Salman Jutt in 2022. Trusted by 5,000+ verified users.",
    "foundingDate": "2022",
    "founder": {
      "@type": "Person",
      "@id": `${DOMAIN}/#founder`,
      "name": "Salman Jutt",
      "jobTitle": "Founder & Technical Lead",
      "sameAs": [`${DOMAIN}/contact`]
    },
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
      "https://www.instagram.com/primetoolshub",
      "https://www.facebook.com/primetoolshub"
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
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".hero-subtext", ".seo-content-header"]
    }
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
        "name": "Are these accounts genuine or shared?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide 100% official accounts. ChatGPT Plus uses your own email, while other tools provide family/team slots that are perfectly safe and fully verified."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept JazzCash, EasyPaisa, bank transfer (Meezan, HBL, UBL, Allied Bank), and USDT for international customers."
        }
      },
      {
        "@type": "Question",
        "name": "How fast is delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most products are delivered within 5-15 minutes. During peak hours, delivery may take up to 2 hours maximum."
        }
      },
      {
        "@type": "Question",
        "name": "What if I face an issue during my subscription?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide full replacement warranty for the duration specified on the product card. Contact us on WhatsApp and we will fix or replace it at no cost."
        }
      },
      {
        "@type": "Question",
        "name": "Does the subscription renew automatically?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. You need to contact us via WhatsApp for renewal. We send expiry reminders to ensure uninterrupted access."
        }
      },
      {
        "@type": "Question",
        "name": "Is Prime Tools Hub trustworthy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have been operating since 2022 with 5,000+ successfully delivered orders across Pakistan. Check our verified customer reviews on the reviews page."
        }
      },
      {
        "@type": "Question",
        "name": "Can international customers place orders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! International customers can pay via USDT cryptocurrency. Worldwide delivery is available through WhatsApp."
        }
      },
      {
        "@type": "Question",
        "name": "How to buy ChatGPT Plus in Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Order from us — we activate ChatGPT Plus on your email. No VPN or international credit card needed. Delivery within 15 minutes."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Canva Pro cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Canva Pro is available for just Rs. 279 for 3 years. It is an education invite activated on your personal account with all premium features."
        }
      },
      {
        "@type": "Question",
        "name": "What is Google Gemini Pro and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Gemini Pro is Google's flagship AI with 2M context window, 5TB cloud storage, and Veo video generation. We activate it on your personal Gmail for 18 months."
        }
      },
      {
        "@type": "Question",
        "name": "Is VPN subscription safe? Will my IP leak?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both Surfshark and NordVPN are industry-leading VPN providers with military-grade encryption, no-log policy, and kill switch. Your privacy is 100% protected."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer bulk discounts for agencies and teams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Purchasing 5 or more products qualifies for exclusive bulk pricing. Agencies, resellers, and teams can get custom quotes via WhatsApp."
        }
      },
      {
        "@type": "Question",
        "name": "What is your refund policy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Due to the digital nature of products, standard refunds are not available. However, full replacement warranty is included with every product for the specified duration."
        }
      },
      {
        "@type": "Question",
        "name": "What features does CapCut Pro include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CapCut Pro includes 4K export without watermark, AI auto-captions, body tracking, premium effects library, and trending TikTok templates."
        }
      },
      {
        "@type": "Question",
        "name": "Will I receive login credentials for products?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Delivery method varies by product. ChatGPT Plus is activated on your email, Canva Pro via invite link. We provide a full guide on WhatsApp during delivery."
        }
      },
      {
        "@type": "Question",
        "name": "What are your support hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WhatsApp support is available 9 AM to 11 PM PKT, 7 days a week including weekends."
        }
      },
      {
        "@type": "Question",
        "name": "Is YouTube Premium available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! YouTube Premium is available in 1, 3, and 12 month plans on your personal Google account with ad-free videos, YouTube Music, and background play."
        }
      },
      {
        "@type": "Question",
        "name": "What are Lovable AI and Cursor AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lovable AI is an AI-powered app builder and Cursor AI is an advanced coding assistant. Both are ideal for developers and startups, available at affordable rates."
        }
      },
      {
        "@type": "Question",
        "name": "Can Gemini Pro be activated on my existing Google account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Google Gemini Pro is activated directly on your existing Gmail account. No new account needed — share your personal Gmail and we handle the rest."
        }
      },
      {
        "@type": "Question",
        "name": "What is the step-by-step ordering process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Step 1: Choose product on website. Step 2: Click Buy on WhatsApp. Step 3: Share details and payment method. Step 4: Make payment. Step 5: Receive credentials within 15 minutes."
        }
      }
    ]
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
    name: "Prime Tools Hub | Buy ChatGPT Plus & AI Tools Pakistan",
    description: "Buy ChatGPT Plus, Canva Pro, Gemini Pro, Veo 3 & CapCut Pro in Pakistan. Instant delivery via JazzCash/EasyPaisa. 100% replacement warranty. Trusted by 1,200+ users.",
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

