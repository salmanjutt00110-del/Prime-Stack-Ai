import primeToolsLogo from "../photo/prime-tools-logo.webp";
import chatgptLogo from "../photo/chatgpt.webp";
import geminiLogo from "../photo/gemini-logo.webp";
import veoLogo from "../photo/veo-3.webp";
import capcutLogo from "../photo/capcut.webp";
import canvaLogo from "../photo/canva.webp";
import grokLogo from "../photo/supergrok.webp";
import surfsharkLogo from "../photo/surfshark-vpn.webp";
import tiktokLogo from "../photo/tiktok.webp";
import youtubePremiumLogo from "../photo/youtube-premium.webp";
import nordVpnLogo from "../photo/nord-vpn.webp";
import lovableLogo from "../photo/lovable.webp";
import chatgptGoLogo from "../photo/chatgpt-go.webp";
import heygenLogo from "../photo/heygen.webp";
import notionLogo from "../photo/notion.webp";
import figmaLogo from "../photo/figma.webp";
import miroLogo from "../photo/miro.png";
import officeLogo from "../photo/office-365.png";
import museLogo from "../photo/muse.png";

const db = globalThis.__B44_DB__ || { auth: { isAuthenticated: async () => false, me: async () => null }, entities: new Proxy({}, { get: () => ({ filter: async () => [], get: async () => null, create: async () => ({}), update: async () => ({}), delete: async () => ({}) }) }), integrations: { Core: { UploadFile: async () => ({ file_url: '' }) } } };

// Prime Tools Hub — Product Catalog (100% USD Currency)
export const WHATSAPP_NUMBER = "923707020580";

const BRAND = {
  chatgpt: chatgptLogo,
  gemini: geminiLogo,
  veo: veoLogo,
  capcut: capcutLogo,
  canva: canvaLogo,
  grok: grokLogo,
  surfshark: surfsharkLogo,
  tiktok: tiktokLogo,
  youtube: youtubePremiumLogo,
  nord: nordVpnLogo,
  lovable: lovableLogo,
  chatgptGo: chatgptGoLogo,
  heygen: heygenLogo,
  notion: notionLogo,
  figma: figmaLogo,
  miro: miroLogo,
  office: officeLogo,
  muse: museLogo,
};
export { BRAND };

export const LOGO = {
  primetools: primeToolsLogo,
  primestack: primeToolsLogo,
};

// Hero showcase products (first: $5, second: $3, all in USD)
export const HERO_PRODUCTS = [
  { id: "muse-ai", name: "Muse AI Video Generator", tag: "🚀 30+ Min Videos · 1B Tokens", duration: "1 Billion Tokens", price: "$12", oldPrice: "$18", description: "🎬 Create 30+ Minute Full-Length Cinematic Videos with One Prompt! Veo 3 competitor level model with 1 Billion generation tokens for 3,000 PKR / $12.", tagline: "Create 30+ Minute HD Videos with One Prompt · 1 Billion Tokens · Veo 3 Competitor.", stock: "6", logo: BRAND.muse, color: "#0062FF", color2: "#38BDF8", particle: "#60A5FA", hasTimer: true },
  { id: "gemini-pro-18", name: "Google Gemini Pro", tag: "⚠️ Last Day: 2,999 PKR", duration: "18 Months", price: "$12", oldPrice: "$20", description: "🔥 LAST DAY OFFER · EXTREMELY LIMITED STOCK: Official Google Gemini Pro AI on your personal Gmail for 18 Months. 5TB cloud storage, 2M context window, advanced AI image & Veo video generation for 2,999 PKR / $12 (Regular $20).", tagline: "Ending Today · Only 2 Left! 18 Months Gemini Pro on your Gmail · 5TB cloud storage & Veo AI.", stock: "2", logo: BRAND.gemini, color: "#4285F4", color2: "#8B5CF6", particle: "#60A5FA", hasTimer: true },
  { id: "veo-31-ultra", name: "Google VEO 3.1 Ultra", tag: "🚀 Official Semi-Private", duration: "20 Days Warranty", price: "$5", oldPrice: "$8", description: "🚀 Official Semi-Private Access to Google VEO 3.1 Ultra! Features Unlimited Video Generation (Low Priority 0 Credit Model) & Unlimited Image Generation directly on your Gmail without extension or portal required.", tagline: "Official Google AI Ultra Plan with Unlimited Video & Image Generation on your Gmail.", stock: "5", logo: BRAND.veo, color: "#4285F4", color2: "#EA4335", particle: "#60A5FA" },
  { id: "ms-office-365-1y", name: "Microsoft Office 365 Plus", tag: "📦 1 Year · 1TB Cloud", duration: "1 Year", price: "$3", oldPrice: "$5", description: "Microsoft Office 365 Plus – 1 Month (Guaranteed) + 11 Months (GIFT) Subscription. Includes Word, Excel, PowerPoint, OneNote, Forms & 1TB OneDrive Cloud Storage for up to 5 Windows PCs.", tagline: "Word, Excel, PowerPoint & 1TB OneDrive for up to 5 Windows PCs.", stock: "10", logo: BRAND.office, color: "#EA3E23", color2: "#D83B01", particle: "#F25022" },
  { id: "capcut-pro-1m", name: "CapCut Pro (1 Month)", tag: "✂️ Pro Editing", duration: "1 Month", price: "$4", oldPrice: "$6", description: "CapCut Pro premium access with all pro editing features, premium effects, filters, templates, AI editing tools.", tagline: "All pro editing features, AI tools & export without watermark.", stock: "7", logo: BRAND.capcut, color: "#FE2C55", color2: "#25F4EE", particle: "#FE2C55" },
  { id: "nordvpn-3m", name: "NordVPN 3 Months", tag: "🛡️ Single Device", duration: "3 Months", price: "$4", oldPrice: "$6", description: "3 Months NordVPN premium subscription single device via easy activation redeem link.", tagline: "3 Months fast redeem link activation without card required.", stock: "90", logo: BRAND.nord, color: "#0060FF", color2: "#8B5CF6", particle: "#60A5FA" },
  { id: "chatgpt-plus-20d", name: "ChatGPT Plus (20d)", tag: "💎 20 Days Warranty", duration: "20 Days Warranty", price: "$10", oldPrice: "$14", description: "ChatGPT Plus subscription with 20 Days replacement warranty. Fast delivery & full GPT-4o access.", tagline: "Official ChatGPT Plus access with 20 Days replacement warranty.", stock: "8", logo: BRAND.chatgpt, color: "#10A37F", color2: "#0D8A6D", particle: "#10A37F" },
  { id: "canva-pro-1m", name: "Canva Pro (1 Month)", tag: "🎨 Pro Monthly", duration: "1 Month", price: "$1", oldPrice: "$2", description: "Canva Pro 1 Month personal account access with Magic AI Studio, Brand Kit, background remover, and premium templates.", tagline: "1 Month access to all Canva AI tools & background remover.", stock: "99+", logo: BRAND.canva, color: "#7D2AE8", color2: "#00C4CC", particle: "#A78BFA" },
  { id: "figma-pro-2y", name: "Figma Pro (2 Years)", tag: "🎨 2 Years Plan", duration: "2 Years Plan", price: "$12", oldPrice: "$20", description: "Figma Pro 2 Years Plan with 1 month guarantee. The Make feature is now available in Opus 4.7 with 3,000 credits per month. Format: email:password.", tagline: "2 Years Figma Pro Plan · Make in Opus 4.7 & 3,000 credits/mo.", stock: "15", logo: BRAND.figma, color: "#F24E1E", color2: "#A259FF", particle: "#0ACF83" },
  { id: "miro-lifetime-100", name: "Miro Lifetime (100 Invites)", tag: "👑 Admin Control", duration: "Lifetime Access", price: "$25", oldPrice: "$35", description: "Miro Lifetime Panel 100 Invites with Absolute Admin Control. You are Owner and Admin of the team controlling all settings and spaces for up to 100 members.", tagline: "Lifetime Admin Panel with 100 Invites & full team control.", stock: "5", logo: BRAND.miro, color: "#FFD02F", color2: "#050038", particle: "#FFD02F" },
  { id: "nordvpn-private", name: "NordVPN Private Account", tag: "🔒 100% Private", duration: "1 Year", price: "$19", oldPrice: "$25", description: "NordVPN Private Account with private credentials, multi-device login, unlimited bandwidth & ultra-fast secure servers.", tagline: "100% Private Account with full credentials and multi-device access.", stock: "12", logo: BRAND.nord, color: "#0060FF", color2: "#8B5CF6", particle: "#60A5FA" },
  { id: "canva-pro-edu", name: "Canva Pro (3 Years)", tag: "🔥 Best Value", duration: "3 Years", price: "$2", oldPrice: "$3", description: "Canva Pro Edu invite for individual users — 3 years of access to Canva AI, magic design, background remover.", tagline: "3 Years access to all Canva AI tools & background remover.", stock: "99+", logo: BRAND.canva, color: "#7D2AE8", color2: "#00C4CC", particle: "#A78BFA" },
  { id: "lovable-ai-100c", name: "Lovable AI Pro", tag: "💎 100 Credits", duration: "1 Month", price: "$5", oldPrice: "$7", description: "Lovable AI Pro with 100 credits for 1 month. Fast premium AI generation.", tagline: "100 AI credits for 1 month smooth generation access.", stock: "9", logo: BRAND.lovable, color: "#EE0F79", color2: "#8B5CF6", particle: "#A78BFA" },
  { id: "youtube-premium-12m", name: "YouTube Premium", tag: "📺 Fixed Family Slot", duration: "12 Months", price: "$32", oldPrice: "$40", description: "12 Months of stable YouTube Premium and YouTube Music access on your personal Google account.", tagline: "Ad-free videos & YouTube Music for 12 months on your Google account.", stock: "4", logo: BRAND.youtube, color: "#FF0000", color2: "#cc0000", particle: "#FF0000" },
  { id: "tiktok-growth-challenge", name: "TikTok Creator Growth", tag: "🇺🇸 USA Account", duration: "One-Time", price: "$35", oldPrice: "$45", description: "Creator Growth Challenge activation on your eligible USA TikTok account with activation warranty.", tagline: "Fast policy-compliant activation on your USA TikTok creator account.", stock: "5", logo: BRAND.tiktok, color: "#FE2C55", color2: "#25F4EE", particle: "#FE2C55" },
  { id: "heygen-creator-600c", name: "HeyGen Creator", tag: "🎬 600 Credits", duration: "30 Days", price: "$16", oldPrice: "$22", description: "HeyGen Creator subscription with 600 AI credits for 30 days. Export Full HD 1080p videos with multi-language support. 24-hour warranty.", tagline: "600 AI Credits for 30 days · 1080p Full HD video export.", stock: "12", logo: BRAND.heygen, color: "#5C24FF", color2: "#0066FF", particle: "#6366F1" },
  { id: "notion-plus-12m", name: "Notion Plus", tag: "🎓 12 Months", duration: "12 Months", price: "$5", oldPrice: "$8", description: "Notion Education Plus Account for 12 months with full Pro features and 3,000 AI credits per month. Email change allowed and Outlook mail access included.", tagline: "12 Months Education Plus · 3,000 AI credits/month & email change allowed.", stock: "15", logo: BRAND.notion, color: "#FFFFFF", color2: "#888888", particle: "#FFFFFF" },
  { id: "surfshark-vpn-1y", name: "Surfshark VPN", tag: "❌ Out of Stock", duration: "1 Year", price: "$14", oldPrice: "$18", description: "1-year premium VPN subscription with global server access, high-speed browsing & streaming, encrypted privacy — Currently Out of Stock.", tagline: "1-Year encrypted global privacy & high-speed streaming VPN (Out of Stock).", stock: "0", logo: BRAND.surfshark, color: "#1C9FE8", color2: "#22D3EE", particle: "#22D3EE" },
  { id: "supergrok-12m-premium", name: "SuperGrok 12 Months", tag: "❌ Out of Stock", duration: "12 Months", price: "$12", oldPrice: "$18", description: "SuperGrok 12-month premium subscription powered by X — Currently Out of Stock.", tagline: "12 Months SuperGrok subscription (Out of Stock).", stock: "0", logo: BRAND.grok, color: "#1DA1F2", color2: "#8B5CF6", particle: "#60A5FA" },
];

export const ALL_PRODUCTS = [
  {
    id: "muse-ai",
    name: "Muse AI Video Generator",
    duration: "1 Billion Tokens",
    price: "$12",
    oldPrice: "$18",
    stock: "6",
    color: "#0062FF",
    logo: BRAND.muse,
    flyer: "/muse-flyer.jpg",
    tag: "🚀 30+ Min Videos · 1B Tokens",
    tagline: "Create 30+ Minute HD Videos with One Prompt · 1 Billion Tokens · Veo 3 Competitor Level.",
    description: "🎬 Create 30+ Minute Full-Length Cinematic Videos with One Single Prompt! Muse AI is a groundbreaking Veo 3 competitor level AI video model loaded with 1 Billion generation tokens. Produce 30 to 45+ minute coherent videos, high-quality HD rendering, and instant workflow for 3,000 PKR / $12 only.",
    hasTimer: true,
    features: [
      "Create 30+ Minute Videos With One Prompt",
      "Massive 1 Billion Generation Tokens Included",
      "Google Veo 3 Competitor Level Visual Quality",
      "Crystal Clear High-Definition (HD) Video Rendering",
      "Multi-Scene Storytelling & Narrative Continuity",
      "Built-in AI Image Generation & Prompt Chat Assistant",
      "Full Creator Workspace (Generate, Video, Images, Chat, Projects)",
      "Instant 15-Minute WhatsApp Delivery & Setup"
    ],
    whatsIncluded: [
      "Official Muse AI Premium Account Access",
      "1 Billion Total Generation Tokens",
      "Single-Prompt 30+ Minute Long Video Generation",
      "Veo 3 Competitor Quality Video Model Access",
      "High-Definition HD Video & Image Export",
      "Dedicated Setup & WhatsApp Activation Support (15 mins)"
    ],
    requirements: [
      "4–5 Years Old Gmail Account",
      "3–4 Years Old Facebook Account (Required for account authentication)"
    ],
    termsOfUse: [
      "Requires 4-5 years old Gmail and 3-4 years old Facebook account for verified access",
      "Single device / user usage — do not share account credentials",
      "Strict adherence to AI content policies and terms"
    ],
    warrantyPolicy: [
      "Full activation and token allocation verification warranty",
      "100% genuine access with dedicated WhatsApp support team assistance",
      "Instant replacement support in case of initial activation issues"
    ],
    warrantyNote: "1 Billion Tokens · 4-5y Gmail + 3-4y FB Required",
    seo: {
      titleTag: "Muse AI Video Generator Price in Pakistan — 3,000 PKR | PrimeToolsHub",
      metaDescription: "Buy Muse AI Video Generator for 3,000 PKR ($12). Create 30+ min HD videos with one prompt. 1 Billion tokens, Veo 3 competitor level with instant WhatsApp delivery.",
      h1: "Muse AI Video Generator — Create 30+ Min Videos with One Prompt",
      primaryKeyword: "muse ai video price in pakistan",
      secondaryKeywords: [
        "muse ai in pakistan",
        "buy muse ai pakistan",
        "muse ai 3000 pkr",
        "muse ai video generator",
        "create 30 minute videos one prompt",
        "veo 3 competitor muse",
        "muse ai tokens",
        "buy muse ai pakistan"
      ]
    },
    seoGuide: {
      heading: "Complete Guide: Muse AI Long-Form Video Generation (1 Billion Tokens)",
      subheading: "Everything you need to know about Muse AI — the Veo 3 competitor creating 30+ minute cinematic videos with a single prompt for only 3,000 PKR.",
      sections: [
        {
          title: "What is Muse AI Video Generator?",
          content: "Muse AI is the next-generation generative video platform built to solve the biggest limitation in AI video: duration. While traditional AI tools produce 4-to-10 second clips, Muse AI allows creators to generate coherent, full-length 30+ minute cinematic videos from a single descriptive prompt."
        },
        {
          title: "Veo 3 Competitor Level Visual Quality",
          content: "Equipped with state-of-the-art visual architecture rivaling Google Veo 3, Muse AI produces high-definition (HD) scenes with dynamic lighting, smooth camera motions, consistent characters, and rich natural environments for YouTube, documentaries, and social media."
        },
        {
          title: "Massive 1 Billion Generation Tokens",
          content: "With 1,000,000,000 tokens included at only 3,000 PKR ($12), creators get unprecedented value to test, generate, and export dozens of long-form video projects and high-resolution concept art without worrying about token exhaustion."
        },
        {
          title: "Account Requirements & Smooth Setup",
          content: "To maintain platform stability and verified access, Muse AI requires a 4-5 years old Gmail account and a 3-4 years old Facebook account. Our dedicated WhatsApp support team assists with full activation within 15 minutes of payment."
        }
      ],
      comparisonTable: {
        title: "Muse AI vs Other AI Video Generators",
        headers: ["Feature / Metric", "Muse AI", "Google Veo 3", "Runway Gen-3 / Sora"],
        rows: [
          ["Price in Pakistan", "3,000 PKR ($12)", "$5 - $20+", "Expensive Monthly Sub"],
          ["Video Duration", "30+ Minutes / Prompt", "Short / Medium Clips", "4s – 10s per generation"],
          ["Token Allocation", "1 Billion Tokens", "Credit-Based Tier", "Limited Monthly Credits"],
          ["Quality Standard", "HD Veo 3 Competitor Level", "Cinematic Google Quality", "Variable Motion Quality"],
          ["Workflow", "Single Prompt Long-Form", "Prompt & Iterative Clips", "Clip-by-Clip Stitching"],
          ["Setup Assistance", "15-min WhatsApp Support", "Gmail Activation", "Self-Serve Credit Card"]
        ]
      }
    }
  },
  {
    id: "veo-31-ultra",
    name: "Google VEO 3.1 Ultra",
    duration: "20 Days Warranty",
    price: "$5",
    oldPrice: "$8",
    stock: "5",
    color: "#4285F4",
    logo: BRAND.veo,
    tag: "🚀 Official Semi-Private",
    tagline: "Official Google AI Ultra Plan with Unlimited Video & Image Generation on your Gmail.",
    description: "🚀 Official Semi-Private Access to Google VEO 3.1 Ultra. Official Google AI Ultra Plan with Gmail-based subscription, Unlimited Image Generation & Unlimited Video Generation (Low Priority 0 Credit Model). No extension or portal required.",
    features: [
      "Official Google AI Ultra Plan",
      "Gmail-Based Official Subscription",
      "Unlimited Image Generation",
      "Unlimited Video Generation (Low Priority 0 Credit Model)",
      "No Extension or Portal Required",
      "Semi-Private Account Access",
      "Single Device Login",
      "20 Days Warranty Included"
    ],
    whatsIncluded: [
      "Official Google VEO 3.1 Ultra Subscription Access",
      "Unlimited Video Generation (Low Priority 0 Credit Model)",
      "Unlimited Image Generation",
      "Direct Gmail Login Access (No extension or portal needed)",
      "20 Days Full Replacement Warranty",
      "Complete Setup & Activation Support"
    ],
    requirements: [
      "Only your Gmail address is required",
      "Single Device Login Only"
    ],
    termsOfUse: [
      "Single device login only — multi-device login or account sharing is strictly prohibited",
      "No extension or external portal required — direct Gmail login access",
      "No violation of Google AI policies or unauthorized activity"
    ],
    warrantyPolicy: [
      "20 Days Full Warranty included from date of activation",
      "Warranty covers technical issues & plan stability under normal usage",
      "Misuse, account sharing, or Google AI policy violations will void warranty"
    ],
    warrantyNote: "20 Days Warranty · Single Device Login · Direct Gmail",
    seo: {
      titleTag: "Google VEO 3 Price — $5 | PrimeToolsHub",
      metaDescription: "Google VEO 3.1 Ultra from $5 ✓ Unlimited AI video & image generation ✓ Gmail direct ✓ 15-min delivery ✓ 20-day warranty. 5,000+ users worldwide",
      h1: "Google VEO 3.1 Ultra Price — AI Video Generator",
      primaryKeyword: "google veo 3 price",
      secondaryKeywords: ["veo 3 subscription", "buy google veo 3", "veo 3 usd", "ai video generator"]
    },
  },
  {
    id: "gemini-pro-18",
    name: "Google Gemini Pro",
    duration: "18 Months",
    price: "$12",
    oldPrice: "$20",
    stock: "2",
    color: "#4285F4",
    logo: BRAND.gemini,
    tag: "⚠️ Last Day Deal: 2,999 PKR",
    tagline: "🚨 Ending Today · Limited Stock (Only 2 Left)! 18 Months Gemini Pro on your Gmail · 5TB cloud storage & Veo AI.",
    description: "🔥 LAST DAY OFFER · EXTREMELY LIMITED STOCK: Official Google Gemini Pro AI on your personal Gmail for 18 Months. Only 2 slots remaining! Massive 5TB Google One cloud storage, 2M context window, Imagen 3 image generation & Veo video credits for 2,999 PKR / $12 (Regular $20 / Rs. 5,500) with instant 15-minute WhatsApp activation.",
    hasTimer: true,
    features: [
      "Official 18 Months Google Gemini Pro (Advanced) Access",
      "5TB High-Speed Google One Cloud Storage (Drive, Gmail, Photos)",
      "Activated Directly on Your Personal Gmail Account",
      "Google Veo AI Video Generation Access & Monthly Credits",
      "Imagen 3 Next-Gen Photorealistic AI Image Generator",
      "Massive 2 Million Token Context Window",
      "Native Google Workspace Integration (Docs, Sheets, Slides, Drive & Gmail)",
      "No VPN Required — 100% Direct Global Access",
      "Family Sharing Group Benefits Included"
    ],
    whatsIncluded: [
      "Official 18-Month Gemini Pro Activation on Personal Gmail",
      "Full 5TB Cloud Storage Allocated Instantly",
      "Access via gemini.google.com and Android / iOS Gemini App",
      "Veo Video & Imagen 3 Creation Suite Access",
      "Instant WhatsApp Activation & Setup Support (5–15 mins)",
      "100% Activation Guarantee & Verification Support",
      "Flexible Payment: JazzCash, EasyPaisa, SadaPay, Bank & Crypto"
    ],
    requirements: [
      "Your personal Google / Gmail account (no new email required)",
      "Compatible with any device: Windows PC, Mac, Android, and iPhone"
    ],
    termsOfUse: [
      "Activate on your personal Google account via the official redeem / family invitation link",
      "Features, credits, storage allocations and usage limits are subject to Google's terms and availability",
      "Personal Gmail account must be eligible to join a Google Family group (not in another group within 12 months)"
    ],
    warrantyPolicy: [
      "Warranty is provided until successful activation and full duration verification on your Google account",
      "Once the subscription is activated and the duration and 5TB storage reflect on your account, the order is fulfilled",
      "Dedicated WhatsApp assistance provided for initial setup and family invitation acceptance"
    ],
    warrantyNote: "Verified activation warranty · Last day offer (Only 2 slots left)",
    seo: {
      titleTag: "Google Gemini Pro 18 Months Price — 2,999 PKR ($12) | PrimeToolsHub",
      metaDescription: "Buy Google Gemini Pro 18 Months for 2,999 PKR ($12). Last Day Offer with 5TB Google One cloud storage, 2M context, Imagen 3 & Veo AI video generation. Only 2 slots left!",
      h1: "Google Gemini Pro 18 Months — Last Day Deal & 5TB Storage",
      primaryKeyword: "google gemini pro price",
      secondaryKeywords: ["gemini pro 18 months", "google gemini 18 months price", "buy gemini pro 2999 pkr", "gemini advanced subscription"]
    },
  },
  {
    id: "ms-office-365-1y",
    name: "Microsoft Office 365 Plus — 1 Year",
    duration: "1 Month + 11 Months (GIFT)",
    price: "$3",
    oldPrice: "$5",
    stock: "10",
    color: "#EA3E23",
    logo: BRAND.office,
    tag: "📦 1 Year · 5 Devices · 1TB",
    tagline: "Word, Excel, PowerPoint, OneNote, Forms & 1TB OneDrive for up to 5 Windows PCs.",
    description: "🛍️ Microsoft Office 365 Plus 1 Year – 1 Month (Guaranteed) + 11 Months (GIFT) Subscription. Includes full premium Microsoft Word, Excel, PowerPoint, OneNote, Forms and 1TB OneDrive Cloud Storage for up to 5 Windows PCs. Instant digital delivery after payment.",
    features: [
      "Microsoft Word (Desktop & Web)",
      "Microsoft Excel (Desktop & Web)",
      "Microsoft PowerPoint (Desktop & Web)",
      "Microsoft OneNote & Microsoft Forms",
      "1TB OneDrive High-Speed Cloud Storage",
      "Supported Devices: Up to 5 Windows PCs",
      "Subscription Duration: 1 Month (Guaranteed) + 11 Months (GIFT)",
      "Instant Digital Delivery after payment",
      "Delivery Format: Email : Password"
    ],
    whatsIncluded: [
      "Office 365 Account Login Credentials (Email : Password)",
      "Full Microsoft 365 Desktop Applications Access",
      "1TB Personal Cloud Storage on OneDrive",
      "License for up to 5 Windows PCs simultaneously",
      "Instant WhatsApp Digital Delivery (within 15 minutes)"
    ],
    requirements: [
      "Windows PC (Windows 10/11 recommended)",
      "Internet connection for initial software download and activation"
    ],
    termsOfUse: [
      "Log in using the provided Email : Password credentials",
      "Account is for up to 5 Windows PCs only",
      "Do not resell individual account slots"
    ],
    warrantyPolicy: [
      "1 Month Full Replacement Guarantee + 11 Months Bonus GIFT access",
      "Instant replacement if credentials fail during the guaranteed period",
      "Dedicated WhatsApp setup and installation guidance included"
    ],
    warrantyNote: "1 Month Guaranteed + 11 Months GIFT · Up to 5 PCs",
    seo: {
      titleTag: "Microsoft Office 365 Plus 1 Year Price — $3 | PrimeToolsHub",
      metaDescription: "Get Microsoft Office 365 Plus 1 Year for $3 ✓ Word, Excel, PowerPoint, 1TB OneDrive ✓ Up to 5 PCs ✓ Instant Email:Password delivery.",
      h1: "Microsoft Office 365 Plus 1 Year Subscription",
      primaryKeyword: "microsoft office 365 price",
      secondaryKeywords: ["buy office 365 1 year", "office 365 1tb onedrive", "cheap microsoft 365 subscription", "office 365 3 usd"]
    }
  },
  {
    id: "capcut-pro-1m",
    name: "CapCut Pro — 1 Month",
    duration: "1 Month",
    price: "$4",
    oldPrice: "$6",
    stock: "7",
    color: "#FE2C55",
    logo: BRAND.capcut,
    tag: "✂️ Pro Editing",
    tagline: "All pro editing features, AI tools & export without watermark.",
    description: "CapCut Pro premium access with all pro editing features. Export 4K videos without watermark with trending AI effects and auto-captions for 1 Month.",
    features: [
      "CapCut Pro Premium Access (1 Month)",
      "Stable High-Quality Account",
      "All Pro Video & Audio Editing Features",
      "Premium Effects, Transitions & Filters",
      "Trending Creator Video Templates",
      "AI Editing Tools & Auto-Captions",
      "Export 4K 60FPS Without Watermark"
    ],
    whatsIncluded: [
      "CapCut Pro 1 Month Account Login",
      "Full Premium Features & Effects Library",
      "Instant WhatsApp Delivery (5–15 mins)",
      "Activation Support"
    ],
    requirements: ["1 Account = 1 Device only"],
    termsOfUse: [
      "You can change the account password",
      "Do NOT share your account with anyone",
      "This subscription is for 1 Account = 1 Device only"
    ],
    warrantyPolicy: [
      "Support will be provided for initial activation and setup",
      "Login limitation due to multi-device use or account sharing voids warranty"
    ],
    warrantyNote: "1 Month · 1 Account = 1 Device only",
    seo: {
      titleTag: "CapCut Pro 1 Month Price — $4 | PrimeToolsHub",
      metaDescription: "CapCut Pro 1 Month for $4 ✓ 4K no watermark ✓ AI captions ✓ Instant WhatsApp delivery ✓ 5,000+ happy users.",
      h1: "CapCut Pro 1 Month Subscription",
      primaryKeyword: "capcut pro price",
      secondaryKeywords: ["capcut pro 1 month", "buy capcut pro 4 usd", "capcut pro subscription"]
    },
  },
  {
    id: "capcut-pro-7d",
    name: "CapCut Pro — 7 Days",
    duration: "7 Days",
    price: "$1",
    oldPrice: "$2",
    stock: "25",
    color: "#FE2C55",
    logo: BRAND.capcut,
    tag: "⚡ 7 Days Starter",
    tagline: "Quick 7-day starter access to all CapCut Pro features & 4K exports.",
    description: "CapCut Pro 7 Days starter package for creators needing quick video projects, TikTok reels, and YouTube shorts without watermarks.",
    features: [
      "CapCut Pro Premium Access for 7 Days",
      "Export 4K Videos Without Watermark",
      "AI Smart Cutout & Voice Effects",
      "Access to Pro Templates & Transitions",
      "Instant WhatsApp Delivery"
    ],
    whatsIncluded: ["CapCut Pro 7-Day Account Details", "Full Pro FX Library Access"],
    requirements: ["1 Account = 1 Device only"],
    termsOfUse: ["Single device login only. Do not share credentials."],
    warrantyPolicy: ["Full duration coverage for 7 days."],
    warrantyNote: "7 Days Duration · Single Device",
  },
  {
    id: "capcut-pro-6m",
    name: "CapCut Pro — 6 Months",
    duration: "6 Months",
    price: "$24",
    oldPrice: "$30",
    stock: "12",
    color: "#FE2C55",
    logo: BRAND.capcut,
    tag: "👑 6 Months Deal",
    tagline: "6 Months uninterrupted CapCut Pro editing for serious content creators.",
    description: "CapCut Pro 6-Month subscription plan. Uninterrupted pro video editing, 4K rendering, unlimited cloud drafts, and top AI effects at a high discount.",
    features: [
      "6 Months CapCut Pro Premium Access",
      "All Pro Effects, Audio Enhancements & Filters",
      "Auto Captions & AI Speech-to-Text",
      "4K 60FPS Render Without Watermark",
      "Priority WhatsApp Support & Replacement"
    ],
    whatsIncluded: ["CapCut Pro 6-Month Account Credentials", "Full Support during subscription"],
    requirements: ["1 Account = 1 Device only"],
    termsOfUse: ["Single device usage. Follow CapCut fair terms."],
    warrantyPolicy: ["Full replacement warranty for active 6-month term."],
    warrantyNote: "6 Months Plan · Full Replacement Warranty",
  },
  {
    id: "capcut-pro-admin-7s",
    name: "CapCut Pro Admin Team – 7 Seats",
    duration: "1 Month",
    price: "$18",
    oldPrice: "$24",
    stock: "2",
    color: "#FE2C55",
    logo: BRAND.capcut,
    tag: "👑 Admin Team · 7 Seats",
    tagline: "7 Seats admin team account for 1 month full premium editing.",
    description: "1 Month of CapCut Pro admin team account with 7 seats. Full premium editing and AI tools included.",
    features: ["1 Month CapCut Pro", "Admin Team Account (7 Seats)", "Premium Editing Features", "AI Editing Tools", "4K HD Video Export"],
    whatsIncluded: ["Email & Password for CapCut Admin Team Account", "7 Seats Access"],
    requirements: ["The account can be logged in on up to 2 devices only."],
    termsOfUse: ["Strict device limit: up to 2 devices only."],
    warrantyPolicy: ["Full 30-Day Warranty."],
    warrantyNote: "Full 30-Day Warranty · Max 2 devices",
  },
  {
    id: "nordvpn-3m",
    name: "NordVPN — 3 Months",
    duration: "3 Months",
    price: "$4",
    oldPrice: "$6",
    stock: "90",
    color: "#0060FF",
    logo: BRAND.nord,
    tag: "🛡️ Single Device",
    tagline: "3 Months fast redeem link activation without card required.",
    description: "NordVPN 3 Months single device subscription via easy activation redeem link or credentials. High-speed global servers, encrypted connection, and streaming unlocked.",
    features: [
      "3 Months Premium Subscription (Single Device)",
      "Easy Activation via Redeem Link",
      "Fast & Secure VPN with Double Encryption",
      "Access to 6,000+ Servers Across 111 Countries",
      "Bypass Geo-Restrictions & Stream Netflix / BBC iPlayer"
    ],
    whatsIncluded: ["NordVPN Redeem Link / Account", "Activation Instructions"],
    requirements: ["Only your email address is required.", "No Credit/Debit Card required."],
    termsOfUse: ["Single device connection. Redeem using the provided link."],
    warrantyPolicy: ["Activation guarantee and support included."],
    warrantyNote: "3 Months · Single Device · Fast Redeem",
  },
  {
    id: "nordvpn-private",
    name: "NordVPN Private Account",
    duration: "1 Year / Multi-Device",
    price: "$19",
    oldPrice: "$25",
    stock: "12",
    color: "#0060FF",
    logo: BRAND.nord,
    tag: "🔒 100% Private Account",
    tagline: "Dedicated private account with full credentials & multi-device protection.",
    description: "NordVPN 100% Private Account for 1 Year. Dedicated credentials, multi-device support, Threat Protection Pro, Meshnet, and military-grade encryption.",
    features: [
      "100% Private NordVPN Account",
      "Full Login Credentials (You Own the Login)",
      "Multi-Device Support (Up to 6 Simultaneous Devices)",
      "Ultra-Fast NordLynx Protocol",
      "Threat Protection Pro & Ad Blocker",
      "Works on Windows, Mac, Android, iOS, and Firestick"
    ],
    whatsIncluded: ["Dedicated Private Account (Email : Password)", "1 Year Full Access", "Warranty Support"],
    requirements: ["Compatible with PC, Mac, Phone, Tablet"],
    termsOfUse: ["Private account for personal use."],
    warrantyPolicy: ["Full Replacement Warranty for the entire duration."],
    warrantyNote: "1 Year · Private Account · Multi-Device",
  },
  {
    id: "canva-pro-1m",
    name: "Canva Pro — 1 Month",
    duration: "1 Month",
    price: "$1",
    oldPrice: "$2",
    stock: "99+",
    color: "#7D2AE8",
    logo: BRAND.canva,
    tag: "🎨 Pro Monthly",
    tagline: "1 Month Canva Pro individual access with all Magic AI tools.",
    description: "Canva Pro 1 Month access for individual designers. Access 100M+ stock photos, videos, audio, Magic Switch, background remover, and premium font kits.",
    features: [
      "Canva Pro 1 Month Full Access",
      "Magic Design, Magic Write & Magic Eraser",
      "One-Click Background Remover",
      "100M+ Premium Stock Photos & Assets",
      "100GB Cloud Storage Included"
    ],
    whatsIncluded: ["Canva Pro Personal Invite / Account Access", "Instant 15-Minute WhatsApp Delivery"],
    requirements: ["Only your Gmail address is required"],
    termsOfUse: ["Individual use under Canva terms of service."],
    warrantyPolicy: ["Full duration coverage for 1 month."],
    warrantyNote: "1 Month Duration · Instant Delivery",
  },
  {
    id: "canva-pro-edu",
    name: "Canva Pro Edu — 3 Years",
    duration: "3 Years",
    price: "$2",
    oldPrice: "$3",
    stock: "99+",
    color: "#7D2AE8",
    logo: BRAND.canva,
    tag: "🔥 Best Value · 3 Years",
    tagline: "3 Years access to all Canva AI tools & background remover.",
    description: "Canva Pro Edu invite for individual users — 3 years of access to Canva AI, magic design, background remover, and all premium graphics.",
    features: ["Canva AI", "Generate AI Images", "Magic Design", "Magic Write", "Magic Edit", "Magic Layers", "Magic Eraser + Magic Expand", "Background Remover", "AI-Powered Design Tools"],
    whatsIncluded: ["Canva AI", "Generate AI Images", "Magic Design", "Magic Write", "Magic Edit", "Magic Layers", "Magic Eraser", "Magic Expand", "Background Remover", "AI-Powered Design Tools"],
    requirements: ["Only your Gmail address is required", "Invitation will be sent to your email", "This plan is for Individual Users only"],
    termsOfUse: ["Please follow Canva's Terms of Service and avoid any misuse", "The invite is generally stable for long-term use under normal usage"],
    warrantyPolicy: ["Complete activation support provided upon invitation acceptance"],
    warrantyNote: "3 Years Plan · Only your Gmail address required",
    seo: {
      titleTag: "Canva Pro 3 Years Price — $2 | PrimeToolsHub",
      metaDescription: "Canva Pro Edu 3-year access for $2 ✓ All AI tools (Magic Design/Write) ✓ Background remover ✓ 15-min delivery.",
      h1: "Canva Pro 3-Year Subscription Plans",
      primaryKeyword: "canva pro price",
      secondaryKeywords: ["canva pro subscription", "buy canva pro 2 usd", "canva pro 3 years"]
    },
  },
  {
    id: "canva-pro-admin",
    name: "Canva Pro Admin Panel",
    duration: "Full Admin Access",
    price: "$22",
    oldPrice: "$28",
    stock: "7",
    color: "#7D2AE8",
    logo: BRAND.canva,
    tag: "👑 Admin · 499 Members",
    tagline: "Add up to 499 members with full admin control & premium AI tools.",
    description: "Full Canva Pro admin panel access — add up to 499 members with all premium AI design features.",
    features: ["Add up to 499 Members", "Full Admin Control", "All Canva Pro Features", "AI Image Generation", "Background Remover", "Magic Design", "Magic Write", "Magic Edit", "Magic Expand", "Magic Eraser"],
    whatsIncluded: ["Admin Panel Access", "Add up to 499 Members", "Full Admin Control", "All Canva Pro Premium Features", "AI Image Generation", "Background Remover", "All Magic Tools"],
    requirements: ["Login to Canva & Outlook using the same email and password"],
    termsOfUse: ["Login to Canva & Outlook using the same email and password", "Immediately change the password and recovery email for both Canva & Outlook", "Enable Two-Factor Authentication (2FA) to secure your account", "Do NOT add all 499 members within a few days", "Changing the Canva account email will void any support"],
    warrantyPolicy: ["Support is subject to following the Terms of Use", "Changing the Canva account email will void any support"],
    warrantyNote: "Login to Canva & Outlook with same email & password",
  },
  {
    id: "figma-pro-2y",
    name: "Figma Pro — 2 Years Plan",
    duration: "2 Years Plan",
    price: "$12",
    oldPrice: "$20",
    stock: "15",
    color: "#F24E1E",
    logo: BRAND.figma,
    tag: "🎨 2 Years Plan",
    tagline: "2 Years Plan · 1 Month Guarantee · Make feature in Opus 4.7 & 3,000 credits/mo.",
    description: "💎 Figma Pro 2 Years Plan. 1 month guarantee. Format: email:password (figma and hotmail password same). 🔥 The Make feature is now available in Opus 4.7. 🔥 Get 3,000 credits per month. Note: Never change email figma.",
    features: [
      "Figma Pro Full 2-Year Plan Access",
      "1 Month Full Replacement Guarantee",
      "Format: email:password (Figma and Hotmail password same)",
      "🔥 The Make Feature is now available in Opus 4.7",
      "🔥 Get 3,000 AI Credits per Month",
      "Unlimited Figma Files & Version History",
      "Dev Mode, Interactive Prototypes & Team Libraries",
      "⚠️ NOTE: Never change the Figma account email"
    ],
    whatsIncluded: [
      "Figma Pro Account (Email : Password)",
      "Linked Hotmail Mail Access with same password",
      "3,000 Credits / Month for AI & Opus 4.7 Make",
      "1 Month Full Replacement Guarantee"
    ],
    requirements: [
      "Log in to Figma and Hotmail with the provided email:password",
      "⚠️ STRICT NOTE: Never change email figma (changing email voids support)"
    ],
    termsOfUse: [
      "Figma and Hotmail password are the same",
      "Do NOT change the Figma account email under any circumstances",
      "Follow Figma community and usage guidelines"
    ],
    warrantyPolicy: [
      "1 Month Full Guarantee included from the date of handover",
      "Warranty covers login validity and feature access under guidelines",
      "Changing the account email immediately voids warranty"
    ],
    warrantyNote: "1 Month Guarantee · Never change Figma email · 3,000 credits/mo",
    seo: {
      titleTag: "Figma Pro 2 Years Plan Price — $12 | PrimeToolsHub",
      metaDescription: "Figma Pro 2 Years Plan for $12 ✓ 1 month guarantee ✓ 3,000 credits/mo ✓ Opus 4.7 Make feature ✓ Instant delivery.",
      h1: "Figma Pro 2 Years Plan Subscription",
      primaryKeyword: "figma pro price",
      secondaryKeywords: ["figma pro 2 years", "buy figma pro 12 usd", "figma pro opus 4.7", "figma credits"]
    }
  },
  {
    id: "miro-lifetime-100",
    name: "Miro Lifetime Plan — 100 Invites",
    duration: "Lifetime Access",
    price: "$25",
    oldPrice: "$35",
    stock: "5",
    color: "#FFD02F",
    logo: BRAND.miro,
    tag: "👑 Admin Control · 100 Invites",
    tagline: "Absolute Admin Control · 100-Member Team Scale · Owner & Admin Rights.",
    description: "🛍️ Miro Lifetime Panel 100 invite. Absolute Admin Control: You will be the 'Owner' and 'Admin' of the team, controlling all team settings, member permissions, and project spaces—not just a regular member of a shared account. 100-Member Team Scale: Easily create and manage a formal team of up to 100 members, more than enough for class projects, student organizations, or startup teams.",
    features: [
      "Miro Lifetime Panel (100 Member Invites)",
      "Absolute Admin Control: Full 'Owner' and 'Admin' Rights",
      "Control All Team Settings, Member Permissions & Spaces",
      "100-Member Team Scale for Startups, Classes & Agencies",
      "Unlimited Whiteboards, Flowcharts & Mindmaps",
      "Integrations with Jira, Slack, Zoom & Google Drive",
      "Full Project Space Management & Export Capabilities"
    ],
    whatsIncluded: [
      "Miro Team Owner / Admin Account Credentials",
      "100 Member Invites Capacity",
      "Lifetime Panel Access",
      "Setup Support & Administration Guide"
    ],
    requirements: [
      "Valid email for admin ownership handover",
      "Suitable for web browser, desktop app & tablet"
    ],
    termsOfUse: [
      "Manage your 100-member team responsibly under Miro TOS",
      "You have full autonomy over inviting and removing members"
    ],
    warrantyPolicy: [
      "Full handover and activation warranty ensuring complete admin rights and 100 invites capability"
    ],
    warrantyNote: "Lifetime Panel · 100 Invites · Full Owner & Admin Rights",
    seo: {
      titleTag: "Miro Lifetime Plan 100 Invites Price — $25 | PrimeToolsHub",
      metaDescription: "Miro Lifetime Panel with 100 Invites for $25 ✓ Full Admin & Owner rights ✓ Manage up to 100 team members ✓ Instant delivery.",
      h1: "Miro Lifetime Plan 100 Invites — Admin Control",
      primaryKeyword: "miro lifetime price",
      secondaryKeywords: ["miro lifetime 100 invites", "buy miro admin panel", "miro 25 usd lifetime", "miro team plan"]
    }
  },
  {
    id: "chatgpt-plus-20d",
    name: "ChatGPT Plus (20 Days Warranty)",
    duration: "20 Days Warranty",
    price: "$10",
    oldPrice: "$14",
    stock: "8",
    color: "#10A37F",
    logo: BRAND.chatgpt,
    tag: "💎 20 Days Warranty",
    tagline: "Official ChatGPT Plus access with 20 Days replacement warranty.",
    description: "ChatGPT Plus subscription with 20 Days replacement warranty. Fast delivery & full GPT-4o, DALL-E 3, Canvas, and Sora access with 2FA setup included.",
    features: [
      "ChatGPT Plus Subscription Access",
      "20 Days Replacement Warranty Included",
      "Full Premium Features (GPT-4o, Canvas, DALL-E 3, Sora)",
      "Fast 15-Minute WhatsApp Delivery",
      "2FA Secret Code Setup Included"
    ],
    whatsIncluded: [
      "ChatGPT Plus Access Credentials",
      "2FA Code Generator Setup Instructions",
      "20 Days Replacement Warranty"
    ],
    requirements: ["Log in at https://2fa.live using the 2FA secret we provide"],
    termsOfUse: ["Check and log in to your account immediately after receiving it"],
    warrantyPolicy: ["20 Days Full Replacement Warranty included"],
    warrantyNote: "20 Days Warranty included",
    seo: {
      titleTag: "ChatGPT Plus 20 Days Warranty Price — $10 | PrimeToolsHub",
      metaDescription: "ChatGPT Plus with 20 Days warranty for $10 ✓ GPT-4o + DALL·E 3 ✓ 15-min WhatsApp delivery ✓ 2FA setup.",
      h1: "ChatGPT Plus 20 Days Warranty",
      primaryKeyword: "chatgpt plus 20 days price",
      secondaryKeywords: ["chatgpt 10 usd", "buy chatgpt plus 20d warranty", "chatgpt plus subscription"]
    },
  },
  {
    id: "chatgpt-plus-1m",
    name: "ChatGPT Plus Premium — 1 Month",
    duration: "1 Month Warranty",
    price: "$12",
    oldPrice: "$16",
    stock: "5",
    color: "#10A37F",
    logo: BRAND.chatgpt,
    tag: "👑 1 Month Warranty",
    tagline: "Full official ChatGPT Plus access with 1 Month Warranty included.",
    description: "ChatGPT Plus Premium subscription with 1 Month full replacement warranty. Instant delivery & 2FA setup included.",
    features: ["ChatGPT Plus Subscription", "Full 1 Month Warranty", "Full Premium Access (GPT-4o & Sora)", "Instant Delivery", "2FA Code Setup Included"],
    whatsIncluded: ["ChatGPT Plus Premium Access", "Email & Password", "2FA Code Setup", "1 Month Replacement Warranty"],
    requirements: ["Log in at https://2fa.live using the 2FA secret we provide"],
    termsOfUse: ["Check and log in to your account immediately after receiving it"],
    warrantyPolicy: ["Full 1 Month Replacement Warranty included"],
    warrantyNote: "1 Month Warranty included",
    seo: {
      titleTag: "ChatGPT Plus 1 Month Price — $12 | PrimeToolsHub",
      metaDescription: "ChatGPT Plus 1-Month full warranty for $12 ✓ GPT-4o + DALL·E 3 ✓ 15-min WhatsApp delivery ✓ Full replacement.",
      h1: "ChatGPT Plus Premium 1 Month",
      primaryKeyword: "chatgpt plus price",
      secondaryKeywords: ["chatgpt plus subscription", "buy chatgpt plus 12 usd", "chatgpt 1 month warranty"]
    },
  },
  {
    id: "chatgpt-go-3m",
    name: "ChatGPT Go – 3 Months",
    duration: "3 Months",
    price: "$4",
    oldPrice: "$6",
    stock: "85",
    color: "#10A37F",
    logo: BRAND.chatgptGo,
    tag: "🎫 Coupon Code",
    tagline: "3 Months ChatGPT Go coupon code fast delivery.",
    description: "ChatGPT Go subscription for 3 months. Fast delivery via coupon code. Stable service with easy activation.",
    features: ["3 Months ChatGPT Go Subscription", "Easy Activation via Coupon Code", "Fast Delivery", "Stable Service"],
    whatsIncluded: ["3 Months ChatGPT Go Coupon Code", "Coupon Activation Instructions"],
    requirements: ["A valid Credit/Debit Card is required to activate the coupon."],
    termsOfUse: ["We only provide the coupon code."],
    warrantyPolicy: ["No warranty after successful code redemption.", "Activation support will be provided."],
    warrantyNote: "Coupon code only · Card required for activation",
  },
  {
    id: "notion-plus-12m",
    name: "Notion Plus — 12 Months",
    duration: "12 Months",
    price: "$5",
    oldPrice: "$8",
    stock: "15",
    color: "#6B7280",
    logo: BRAND.notion,
    tag: "🎓 12 Months Plus",
    tagline: "12 Months Education Plus · 3,000 AI credits/month & email change allowed.",
    description: "Notion Education Plus Account for 12 months with full Pro features and 3,000 AI credits per month. Email change allowed and Outlook mail access included.",
    features: [
      "Notion Education Plus Account (Full Pro Features)",
      "3,000 AI Credits / Month",
      "12 Months Access",
      "Email Change Allowed",
      "Reset Account Security After Login",
      "365 Days Package Warranty"
    ],
    whatsIncluded: [
      "Notion Education Plus Account Credentials (email:pass)",
      "Outlook.com Mail Access",
      "3,000 AI Credits / Month",
      "365 Days Warranty Support"
    ],
    requirements: [
      "To login go to outlook.com first then login there and login with same email:pass on Notion too",
      "Reset account security / change password after logging in"
    ],
    termsOfUse: [
      "First login to outlook.com, then login to Notion using the same email:pass credentials",
      "Reset account security after login",
      "Email change is allowed"
    ],
    warrantyPolicy: [
      "365 Days Package Warranty after purchase",
      "Change password to secure account after purchase",
      "Full warranty support for the package duration under policy guidelines"
    ],
    warrantyNote: "365 Days Warranty · Outlook mail provided",
  },
  {
    id: "lovable-ai-100c",
    name: "Lovable AI Pro – 100 Credits",
    duration: "1 Month",
    price: "$5",
    oldPrice: "$7",
    stock: "9",
    color: "#EE0F79",
    logo: BRAND.lovable,
    tag: "💎 100 Credits",
    tagline: "100 AI credits for 1 month smooth generation access.",
    description: "Lovable AI Pro with 100 credits for 1 month. Fast and reliable premium AI generation access with 1 day warranty.",
    features: ["100 AI Credits", "1 Month Premium Access", "Fast & Reliable Service", "Instant Delivery"],
    whatsIncluded: ["100 Lovable AI Credits", "Account/Code Details"],
    requirements: ["Make sure this package meets your requirements before purchasing."],
    termsOfUse: ["Must check and verify the credits immediately after delivery."],
    warrantyPolicy: ["Full 1-Day Warranty."],
    warrantyNote: "1 Day Warranty from delivery",
  },
  {
    id: "lovable-ai-12m-pro-lite",
    name: "Lovable AI Pro Lite – 12 Months",
    duration: "12 Months",
    price: "$16",
    oldPrice: "$22",
    stock: "9",
    color: "#EE0F79",
    logo: BRAND.lovable,
    tag: "⚡ 12 Months Pro Lite",
    tagline: "12 Months Lovable AI Pro Lite account with high-speed app building access.",
    description: "Lovable AI Pro Lite subscription account for 12 months. High-speed AI web app creation, prompt engineering & full developer capabilities.",
    features: ["Lovable AI Pro Lite Account", "12 Months Subscription Access", "Fast AI Web App Generation", "Instant Delivery & Warranty"],
    whatsIncluded: ["Lovable AI Pro Lite Account Login Credentials", "12 Months Full Plan Access"],
    requirements: ["Make sure this package meets your requirements before purchasing."],
    termsOfUse: ["Personal account access for 12 months full subscription period."],
    warrantyPolicy: ["Full replacement warranty included for subscription period."],
    warrantyNote: "Full Warranty included for 12 Months",
  },
  {
    id: "heygen-creator-600c",
    name: "HeyGen Creator — 600 Credits",
    duration: "30 Days",
    price: "$16",
    oldPrice: "$22",
    stock: "12",
    color: "#5C24FF",
    logo: BRAND.heygen,
    tag: "🎬 600 Credits",
    tagline: "600 AI Credits for 30 days · 1080p Full HD video export.",
    description: "HeyGen Creator subscription with 600 AI credits for 30 days. Export Full HD 1080p videos with multi-language support. 24-hour warranty.",
    features: [
      "600 AI Credits (30 Days)",
      "Export Full HD 1080p Video",
      "Multi-Language AI Support",
      "Suitable for Ads, Sales, Training & Social Content",
      "Handover Format: TK HeyGen | MK HeyGen",
      "24-Hour Warranty Included"
    ],
    whatsIncluded: [
      "HeyGen Creator Account Access",
      "600 AI Video Generation Credits",
      "Full HD 1080p Video Export Access",
      "Handover Format: TK HeyGen | MK HeyGen",
      "24-Hour Package Warranty"
    ],
    requirements: [
      "NOTE: PLEASE USE PROXY OR VPN IP USA",
      "Check and log in to your account immediately after delivery"
    ],
    termsOfUse: [
      "Must use USA Proxy or VPN IP to log in and create content",
      "Handover format: TK HeyGen | MK HeyGen",
      "Package warranty only, no warranty due to use in violation of policy"
    ],
    warrantyPolicy: [
      "24-Hour Warranty from the time of delivery",
      "Warranty applies to package warranty only",
      "No warranty for account suspensions due to policy violations or non-USA IP usage"
    ],
    warrantyNote: "24-Hour Warranty · Must use USA VPN/Proxy",
  },
  {
    id: "youtube-premium-12m",
    name: "YouTube Premium – 12 Months",
    duration: "12 Months",
    price: "$32",
    oldPrice: "$40",
    stock: "4",
    color: "#FF0000",
    logo: BRAND.youtube,
    tag: "📺 Fixed Family Slot",
    tagline: "Ad-free videos & YouTube Music for 12 months on your Google account.",
    description: "12 Months of stable YouTube Premium and YouTube Music access on your personal Google account via a fixed family slot.",
    features: ["12 Months YouTube Premium", "Ad-Free Videos", "Background Play", "Offline Downloads", "YouTube Music Premium", "Stable Family Slot"],
    whatsIncluded: ["12 Months YouTube Premium", "Ad-Free Videos", "Background Play", "Offline Downloads", "YouTube Music Premium", "Stable Family Slot"],
    requirements: ["Only your Gmail address is required."],
    termsOfUse: ["Only your Gmail address is required."],
    warrantyPolicy: ["Stable subscription under normal usage.", "Activation support will be provided."],
    warrantyNote: "Stable family slot · Activation support included",
  },
  {
    id: "youtube-premium-3m",
    name: "YouTube Premium – 3 Months",
    duration: "3 Months",
    price: "$5",
    oldPrice: "$7",
    stock: "6",
    color: "#FF0000",
    logo: BRAND.youtube,
    tag: "🔗 Redemption Link",
    tagline: "3 Months YouTube Premium via redemption link for fresh Gmail.",
    description: "3 Months of YouTube Premium via a redemption link. Easy activation for fresh Gmail accounts with a USA VPN.",
    features: ["3 Months YouTube Premium", "Ad-Free Videos", "Background Play", "Offline Downloads", "YouTube Music Premium", "Easy Activation via Redemption Link"],
    whatsIncluded: ["3 Months YouTube Premium", "Ad-Free Videos", "Background Play", "Offline Downloads", "YouTube Music Premium", "Easy Activation via Redemption Link"],
    requirements: ["Fresh Gmail account.", "USA VPN."],
    termsOfUse: ["Fresh Gmail account.", "USA VPN."],
    warrantyPolicy: ["Activation support will be provided."],
    warrantyNote: "Fresh Gmail + USA VPN required",
  },
  {
    id: "youtube-premium-1m",
    name: "YouTube Premium – 1 Month",
    duration: "1 Month",
    price: "$4",
    oldPrice: "$6",
    stock: "8",
    color: "#FF0000",
    logo: BRAND.youtube,
    tag: "📺 Fixed Family Slot",
    tagline: "1 Month YouTube Premium fixed family slot on your Gmail.",
    description: "1 Month of YouTube Premium via a stable fixed family slot. Fast activation on your personal Google account.",
    features: ["1 Month YouTube Premium", "Ad-Free Videos", "Background Play", "Offline Downloads", "YouTube Music Premium", "Stable Family Slot"],
    whatsIncluded: ["1 Month YouTube Premium", "Ad-Free Videos", "Background Play", "Offline Downloads", "YouTube Music Premium", "Stable Family Slot"],
    requirements: ["Only your Gmail address is required."],
    termsOfUse: ["Only your Gmail address is required."],
    warrantyPolicy: ["Stable family slot warranty."],
    warrantyNote: "Stable family slot · Activation support included",
  },
  {
    id: "tiktok-growth-challenge",
    name: "TikTok Creator Growth Challenge",
    duration: "One-Time",
    price: "$35",
    oldPrice: "$45",
    stock: "5",
    color: "#FE2C55",
    logo: BRAND.tiktok,
    tag: "🇺🇸 USA Account Required",
    tagline: "Fast policy-compliant activation on your USA TikTok creator account.",
    description: "Creator Growth Challenge activation on your eligible USA TikTok account — policy-compliant, fast processing.",
    features: ["Creator Growth Challenge Activation", "Policy-Compliant Activation", "Fast Processing", "Activation on Your Eligible Account", "Activation Warranty Included"],
    whatsIncluded: ["Creator Growth Challenge Activation", "Policy-Compliant Activation", "Fast Processing", "Activation on Your Eligible Account", "Activation Warranty Included"],
    requirements: ["A USA TikTok account is required", "An older (aged) account is recommended for better eligibility", "You must provide your TikTok account login credentials", "We will log in to your account, activate the Growth Challenge, and return the account to you"],
    termsOfUse: ["Provide valid TikTok account login credentials", "Rewards and payouts are subject to TikTok's eligibility criteria and performance"],
    warrantyPolicy: ["Activation Warranty Only until the Growth Challenge has been successfully activated on the account"],
    warrantyNote: "USA TikTok account required · Activation warranty only",
  },
  {
    id: "surfshark-vpn-1y",
    name: "Surfshark VPN — 1 Year",
    duration: "1 Year",
    price: "$14",
    oldPrice: "$18",
    stock: "0",
    color: "#1C9FE8",
    logo: BRAND.surfshark,
    tag: "❌ Out of Stock",
    tagline: "1-Year encrypted global privacy & high-speed streaming VPN (Out of Stock).",
    description: "1-year premium VPN subscription with global server access, high-speed browsing & streaming, encrypted privacy — Currently Out of Stock.",
    features: ["1 Year Premium Subscription", "Fast & Secure VPN", "Global Server Access", "High-Speed Browsing & Streaming", "Privacy & Encrypted Connection", "Currently Out of Stock"],
    whatsIncluded: ["1 Year Premium Subscription", "Fast & Secure VPN", "Global Server Access"],
    requirements: ["Currently Out of Stock"],
    termsOfUse: ["Currently Out of Stock"],
    warrantyPolicy: ["Currently Out of Stock"],
    warrantyNote: "Out of Stock",
  },
  {
    id: "surfshark-vpn-1m",
    name: "Surfshark VPN – 1 Month",
    duration: "1 Month",
    price: "$2",
    oldPrice: "$3",
    stock: "0",
    color: "#1C9FE8",
    logo: BRAND.surfshark,
    tag: "❌ Out of Stock",
    tagline: "1 Month single device high-speed VPN access (Out of Stock).",
    description: "1 Month of Surfshark VPN premium access — Currently Out of Stock.",
    features: ["1 Month Premium Subscription", "Currently Out of Stock"],
    whatsIncluded: ["Premium VPN Access"],
    requirements: ["Currently Out of Stock"],
    termsOfUse: ["Currently Out of Stock"],
    warrantyPolicy: ["Currently Out of Stock"],
    warrantyNote: "Out of Stock",
  },
  {
    id: "supergrok-12m-premium",
    name: "SuperGrok — 12 Months",
    duration: "12 Months",
    price: "$12",
    oldPrice: "$18",
    stock: "0",
    color: "#1DA1F2",
    logo: BRAND.grok,
    tag: "❌ Out of Stock",
    tagline: "Currently Out of Stock — Unavailable for ordering.",
    description: "SuperGrok 12-month subscription powered by your X (Twitter) account — Currently Out of Stock. Orders are temporarily closed.",
    features: ["SuperGrok Premium Access", "12 Months Subscription", "Powered by X (Twitter) Account", "Currently Out of Stock"],
    whatsIncluded: ["SuperGrok Premium Access", "12 Months Subscription"],
    requirements: ["Currently Out of Stock"],
    termsOfUse: ["Currently Out of Stock"],
    warrantyPolicy: ["Currently Out of Stock"],
    warrantyNote: "Out of Stock",
  },
  {
    id: "supergrok-1m",
    name: "SuperGrok — 1 Month",
    duration: "1 Month",
    price: "$3",
    oldPrice: "$5",
    stock: "0",
    color: "#1DA1F2",
    logo: BRAND.grok,
    tag: "❌ Out of Stock",
    tagline: "Currently Out of Stock — Unavailable for ordering.",
    description: "SuperGrok premium access for 1 month — Currently Out of Stock. Orders are temporarily closed.",
    features: ["SuperGrok Premium Access", "1 Month Subscription", "Currently Out of Stock"],
    whatsIncluded: ["SuperGrok Premium Access", "1 Month Subscription"],
    requirements: ["Currently Out of Stock"],
    termsOfUse: ["Currently Out of Stock"],
    warrantyPolicy: ["Currently Out of Stock"],
    warrantyNote: "Out of Stock",
  },
  {
    id: "supergrok-3m-basic",
    name: "SuperGrok — 3 Months",
    duration: "3 Months",
    price: "$6",
    oldPrice: "$9",
    stock: "0",
    color: "#1DA1F2",
    logo: BRAND.grok,
    tag: "❌ Out of Stock",
    tagline: "Currently Out of Stock — Unavailable for ordering.",
    description: "SuperGrok premium access for 3 months — Currently Out of Stock. Orders are temporarily closed.",
    features: ["SuperGrok Premium Access", "3 Months Subscription", "Currently Out of Stock"],
    whatsIncluded: ["SuperGrok Premium Access", "3 Months Subscription"],
    requirements: ["Currently Out of Stock"],
    termsOfUse: ["Currently Out of Stock"],
    warrantyPolicy: ["Currently Out of Stock"],
    warrantyNote: "Out of Stock",
  },
  {
    id: "supergrok-6m",
    name: "SuperGrok — 6 Months",
    duration: "6 Months",
    price: "$9",
    oldPrice: "$14",
    stock: "0",
    color: "#1DA1F2",
    logo: BRAND.grok,
    tag: "❌ Out of Stock",
    tagline: "Currently Out of Stock — Unavailable for ordering.",
    description: "SuperGrok premium access for 6 months — Currently Out of Stock. Orders are temporarily closed.",
    features: ["SuperGrok Premium Access", "6 Months Subscription", "Currently Out of Stock"],
    whatsIncluded: ["SuperGrok Premium Access", "6 Months Subscription"],
    requirements: ["Currently Out of Stock"],
    termsOfUse: ["Currently Out of Stock"],
    warrantyPolicy: ["Currently Out of Stock"],
    warrantyNote: "Out of Stock",
  }
];

export const BUYING_STEPS = [
  { title: "Pick Your Product", desc: "Browse the marketplace and choose the premium AI tool that fits your needs." },
  { title: "Click Buy on WhatsApp", desc: "Your product name, duration and USD price are auto-filled into a WhatsApp message — just hit send." },
  { title: "Complete Payment", desc: "We'll share available payment options (Card, Crypto USDT, direct transfer) on WhatsApp." },
  { title: "Receive & Activate", desc: "Get your account details or redeem link instantly, then follow the activation guide to start using your premium access." },
];