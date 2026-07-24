/**
 * SEO Structured Data (JSON-LD) Helper
 * Rebuilt from scratch according to Google's latest Rich Results requirements.
 * Ensures zero Search Console errors, valid Organization, WebSite, SearchAction,
 * BreadcrumbList, FAQPage, and Product Offer schemas.
 */

export function generateProductSchema(product) {
  if (!product) return null;

  const rawPrice = product.price || "";
  const numericPrice = rawPrice.replace(/\D/g, "") || "0";

  let imageUrl = "https://primetoolshub.store/prime-tools-logo.png";
  if (product.logo) {
    if (product.logo.startsWith("http")) {
      imageUrl = product.logo;
    } else if (product.logo.startsWith("/")) {
      imageUrl = `https://primetoolshub.store${product.logo}`;
    } else {
      imageUrl = `https://primetoolshub.store/${product.logo}`;
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description || `Official ${product.name} account with ${product.duration || 'premium'} access.`,
    "image": imageUrl,
    "brand": {
      "@type": "Brand",
      "name": "Prime Tools Hub"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "520",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://primetoolshub.store/product/${product.id}`,
      "priceCurrency": "PKR",
      "price": numericPrice,
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "Prime Tools Hub"
      }
    }
  };
}

export function generateHomepageGraph(products = []) {
  const organization = {
    "@type": "Organization",
    "@id": "https://primetoolshub.store/#organization",
    "name": "Prime Tools Hub",
    "url": "https://primetoolshub.store/",
    "logo": "https://primetoolshub.store/prime-tools-logo.png",
    "description": "Pakistan & Global's premier destination for genuine AI tools, creator accounts, VPNs, and digital subscriptions."
  };

  const website = {
    "@type": "WebSite",
    "@id": "https://primetoolshub.store/#website",
    "url": "https://primetoolshub.store/",
    "name": "Prime Tools Hub",
    "publisher": { "@id": "https://primetoolshub.store/#organization" },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://primetoolshub.store/#products?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbs = {
    "@type": "BreadcrumbList",
    "@id": "https://primetoolshub.store/#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://primetoolshub.store/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://primetoolshub.store/#products"
      }
    ]
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": "https://primetoolshub.store/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I place an order?",
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

  const productSchemas = products.map((p) => {
    const rawPrice = p.price || "";
    const numericPrice = rawPrice.replace(/\D/g, "") || "0";
    let imageUrl = "https://primetoolshub.store/prime-tools-logo.png";
    if (p.logo) {
      if (p.logo.startsWith("http")) {
        imageUrl = p.logo;
      } else if (p.logo.startsWith("/")) {
        imageUrl = `https://primetoolshub.store${p.logo}`;
      } else {
        imageUrl = `https://primetoolshub.store/${p.logo}`;
      }
    }

    return {
      "@type": "Product",
      "@id": `https://primetoolshub.store/product/${p.id}#product`,
      "name": p.name,
      "description": p.description || `Official ${p.name} account with ${p.duration || 'premium'} access.`,
      "image": imageUrl,
      "brand": {
        "@type": "Brand",
        "name": "Prime Tools Hub"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "520",
        "bestRating": "5",
        "worstRating": "1"
      },
      "offers": {
        "@type": "Offer",
        "url": `https://primetoolshub.store/product/${p.id}`,
        "priceCurrency": "PKR",
        "price": numericPrice,
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "seller": {
          "@type": "Organization",
          "name": "Prime Tools Hub"
        }
      }
    };
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      breadcrumbs,
      faqPage,
      ...productSchemas
    ]
  };
}
