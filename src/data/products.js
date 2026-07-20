import myLogo from "../photo/my-logo.png";
import chatgptLogo from "../photo/chatgpt.png";
import geminiLogo from "../photo/gemini-logo.png";
import veoLogo from "../photo/veo-3.png";
import capcutLogo from "../photo/capcut.png";
import canvaLogo from "../photo/canva.png";
import grokLogo from "../photo/supergrok.png";
import surfsharkLogo from "../photo/surfshark-vpn.png";
import tiktokLogo from "../photo/tiktok.png";
import youtubePremiumLogo from "../photo/youtube-premium.png";
import nordVpnLogo from "../photo/nord-vpn.png";
import lovableLogo from "../photo/lovable.png";
import chatgptGoLogo from "../photo/chatgpt-go.png";

const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

// PrimeStack AI — Product Catalog (with full terms, warranty & buying instructions)
export const WHATSAPP_NUMBER = "923227157125";

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
};
export { BRAND };

export const LOGO = {
  primestack: myLogo,
};

// Hero showcase products (one per brand) — 8 total
export const HERO_PRODUCTS = [
  { id: "chatgpt-plus-1m", name: "ChatGPT Plus", tag: "⚡ Instant Delivery", duration: "1 Month", price: "Rs. 1,799", oldPrice: "Rs. 2,099", description: "ChatGPT Plus subscription via the fast & stable iCloud method. Full premium access with instant delivery and 2FA code setup included.", logo: BRAND.chatgpt, color: "#10A37F", color2: "#0D8A6D", particle: "#10A37F" },
  { id: "gemini-pro-18", name: "Google Gemini Pro", tag: "🚀 18 Months", duration: "18 Months", price: "Rs. 949", oldPrice: "Rs. 5,199", description: "Premium Gemini AI access on your personal Google account — 5TB storage, advanced AI image generation, Veo video generation, monthly credits & family sharing.", logo: BRAND.gemini, color: "#4285F4", color2: "#8B5CF6", particle: "#60A5FA" },
  { id: "veo-3-video", name: "Google Veo 3", tag: "🎬 AI Video", duration: "30 Days Stable", price: "Rs. 3,799", oldPrice: "Rs. 4,449", description: "Unlimited AI video generation with 45,000+ credits. Only your Gmail address required. 20-day warranty on technical issues with full activation guide.", logo: BRAND.veo, color: "#4285F4", color2: "#EA4335", particle: "#60A5FA" },
  { id: "capcut-pro-1m", name: "CapCut Pro", tag: "✂️ Pro Editing", duration: "1 Month", price: "Rs. 1,139", oldPrice: "Rs. 1,329", description: "CapCut Pro premium access with all pro editing features, premium effects, filters, templates, AI editing tools — export without watermark.", logo: BRAND.capcut, color: "#FE2C55", color2: "#25F4EE", particle: "#FE2C55" },
  { id: "canva-pro-edu", name: "Canva Pro", tag: "🔥 Best Value", duration: "3 Years", price: "Rs. 279", oldPrice: "Rs. 329", description: "Canva Pro Edu invite for individual users — 3 years of access. Canva AI, magic design, magic write/edit, background remover and all AI-powered design tools.", logo: BRAND.canva, color: "#7D2AE8", color2: "#00C4CC", particle: "#A78BFA" },
  { id: "supergrok-12m-premium", name: "SuperGrok", tag: "From Rs. 2,799", duration: "3 to 12 Months", price: "from Rs. 2,659", oldPrice: "", description: "SuperGrok premium access powered by X. Advanced AI models, fast responses, and premium AI features. Multiple plans from 3 to 12 months with optional warranty.", logo: BRAND.grok, color: "#1DA1F2", color2: "#8B5CF6", particle: "#60A5FA" },
  { id: "surfshark-vpn-1y", name: "Surfshark VPN", tag: "🛡️ 1 Year", duration: "1 Year", price: "Rs. 3,320", oldPrice: "Rs. 3,899", description: "1-year premium VPN subscription with global server access, high-speed browsing & streaming, encrypted privacy, and easy redeem-code activation.", logo: BRAND.surfshark, color: "#1C9FE8", color2: "#22D3EE", particle: "#22D3EE" },
  { id: "tiktok-growth-challenge", name: "TikTok Creator Growth", tag: "🇺🇸 USA Account", duration: "One-Time Activation", price: "Rs. 8,549", oldPrice: "Rs. 9,989", description: "Creator Growth Challenge activation on your eligible USA TikTok account. Policy-compliant, fast processing, with activation warranty included.", logo: BRAND.tiktok, color: "#FE2C55", color2: "#25F4EE", particle: "#FE2C55" },
  { id: "youtube-premium-12m", name: "YouTube Premium", tag: "📺 Fixed Family Slot", duration: "12 Months", price: "Rs. 8,250", oldPrice: "Rs. 9,999", description: "12 Months of stable YouTube Premium and YouTube Music access on your personal Google account via a fixed family slot.", logo: BRAND.youtube, color: "#FF0000", color2: "#cc0000", particle: "#FF0000" },
  { id: "chatgpt-go-3m", name: "ChatGPT Go", tag: "🎫 Coupon Code", duration: "3 Months", price: "Rs. 850", oldPrice: "Rs. 1,199", description: "ChatGPT Go subscription for 3 months. Fast delivery via coupon code. Stable service with easy activation.", logo: BRAND.chatgptGo, color: "#10A37F", color2: "#0D8A6D", particle: "#10A37F" },
  { id: "capcut-pro-admin-7s", name: "CapCut Pro Admin Team", tag: "👑 Admin Team · 7 Seats", duration: "1 Month", price: "Rs. 4,749", oldPrice: "Rs. 5,499", description: "1 Month of CapCut Pro admin team account with 7 seats. Full premium editing and AI tools included.", logo: BRAND.capcut, color: "#FE2C55", color2: "#25F4EE", particle: "#FE2C55" },
  { id: "surfshark-vpn-1m", name: "Surfshark VPN", tag: "🛡️ Single Device", duration: "1 Month", price: "Rs. 379", oldPrice: "Rs. 499", description: "1 Month of Surfshark VPN premium access. Fast & secure browsing with global servers on a single device.", logo: BRAND.surfshark, color: "#1C9FE8", color2: "#22D3EE", particle: "#22D3EE" },
  { id: "nordvpn-3m", name: "NordVPN", tag: "🛡️ Redeem Link", duration: "3 Months", price: "Rs. 949", oldPrice: "Rs. 1,299", description: "3 Months NordVPN premium subscription via easy activation redeem link. High-speed global servers, secure and private.", logo: BRAND.nord, color: "#0060FF", color2: "#8B5CF6", particle: "#60A5FA" },
  { id: "lovable-ai-100c", name: "Lovable AI Pro", tag: "💎 100 Credits", duration: "1 Month", price: "Rs. 1,139", oldPrice: "Rs. 1,499", description: "Lovable AI Pro with 100 credits for 1 month. Fast and reliable premium AI generation access with 1 day warranty.", logo: BRAND.lovable, color: "#EE0F79", color2: "#8B5CF6", particle: "#A78BFA" },
];

// Full catalog — 12 products
export const ALL_PRODUCTS = [
  {
    id: "gemini-pro-18",
    name: "Google Gemini Pro",
    duration: "18 Months",
    price: "Rs. 949",
    oldPrice: "Rs. 5,199",
    color: "#4285F4",
    logo: BRAND.gemini,
    tag: "",
    description: "Get premium AI access on your personal Google account — 18 months of full Gemini Pro benefits.",
    features: ["5TB Cloud Storage", "Premium Gemini AI Access", "Advanced AI Image Generation", "Veo / AI Video Generation", "Monthly AI Credits", "Family Sharing Benefits", "Easy Redeem Link Activation"],
    whatsIncluded: ["5TB Cloud Storage", "Premium Gemini AI Access", "Advanced AI Image Generation", "Veo / AI Video Generation", "Monthly AI Credits", "Family Sharing Benefits", "Easy Redeem Link Activation"],
    requirements: ["Your personal Google / Gmail account"],
    termsOfUse: ["Activate on your personal Google account via the redeem link", "Features, credits and usage limits are subject to Google's applicable policies and availability"],
    warrantyPolicy: ["Warranty is provided until successful activation only", "Once the subscription is activated and the duration appears on your account, the order is considered complete", "Future changes due to Google policies, eligibility, account issues, feature limits, or regional restrictions are not covered by warranty or replacement"],
    warrantyNote: "Warranty valid until successful activation only.",
  },
  {
    id: "veo-3-video",
    name: "Google Veo 3",
    duration: "30 Days Stable",
    price: "Rs. 3,799",
    oldPrice: "Rs. 4,449",
    color: "#4285F4",
    logo: BRAND.veo,
    tag: "🎬 Unlimited AI Video",
    description: "Unlimited AI video generation with 45,000+ credits — 30 days stable. Only your Gmail address required.",
    features: ["Unlimited AI Video Generation", "45,000+ AI Credits (30 Days Stable)", "20 Days Warranty (Technical Issues Only)", "Complete Video Activation Guide", "Full Customer Support"],
    whatsIncluded: ["Unlimited AI Video Generation", "45,000+ AI Credits (30 Days Stable)", "20 Days Warranty (Technical Issues Only)", "Complete Video Activation Guide", "Full Customer Support"],
    requirements: ["Only your Gmail address is required", "One Device Login Only"],
    termsOfUse: ["One device login only", "No violation of Google's policies", "No unauthorized activity or account misuse"],
    warrantyPolicy: ["Warranty is valid for 20 days from activation", "Applicable only if there is no violation of Google's policies or misuse of the account", "Any policy violation, unauthorized activity, or account misuse will void the warranty"],
    warrantyNote: "Warranty valid 20 days · One device login only",
  },
  {
    id: "capcut-pro-1m",
    name: "CapCut Pro",
    duration: "1 Month",
    price: "Rs. 1,139",
    oldPrice: "Rs. 1,329",
    color: "#FE2C55",
    logo: BRAND.capcut,
    tag: "",
    description: "CapCut Pro premium access with all pro editing features. Export without watermark.",
    features: ["CapCut Pro Premium Access", "Stable Account", "All Pro Editing Features", "Premium Effects & Filters", "Premium Templates", "AI Editing Tools", "Export Without Watermark"],
    whatsIncluded: ["CapCut Pro Premium Access", "Stable Account", "All Pro Editing Features", "Premium Effects & Filters", "Premium Templates", "AI Editing Tools", "Export Without Watermark"],
    requirements: ["1 Account = 1 Device only"],
    termsOfUse: ["You can change the account password", "Do NOT share your account with anyone", "This subscription is for 1 Account = 1 Device only"],
    warrantyPolicy: ["No warranty is provided", "Support will be provided for activation and setup only", "Any login limitation, account restriction, or suspension due to multiple devices, account sharing, or violation of CapCut's policies will be the user's responsibility"],
    warrantyNote: "1 Account = 1 Device only",
  },
  {
    id: "supergrok-3m-basic",
    name: "SuperGrok — 3 Months",
    duration: "3 Months",
    price: "Rs. 2,659",
    oldPrice: "Rs. 3,099",
    color: "#1DA1F2",
    logo: BRAND.grok,
    tag: "No Warranty",
    description: "SuperGrok premium access for 3 months — advanced AI models and fast responses, powered by X.",
    features: ["SuperGrok Premium Access", "Advanced AI Models", "Fast Responses", "Premium AI Features", "Stable Account"],
    whatsIncluded: ["SuperGrok Premium Access", "Advanced AI Models", "Fast Responses", "Premium AI Features", "Stable Account", "Email", "Email Password", "Grok Password"],
    requirements: ["Log in immediately and verify the account after delivery"],
    termsOfUse: ["Do NOT change the email address", "Do NOT unlink the X account", "You may change the Grok account password", "You may update your personal information", "Unlinking the X account will immediately remove the SuperGrok subscription", "If the email domain is @gmx.com, log in to the mailbox at https://www.gmx.com/"],
    warrantyPolicy: ["No warranty during usage", "We only guarantee the initial login within the first 2 hours after delivery", "Please log in immediately and verify the account"],
    warrantyNote: "Includes: Email · Email Password · Grok Password",
  },
  {
    id: "supergrok-3m-warranty",
    name: "SuperGrok — 3 Months + Warranty",
    duration: "3 Months + 1 Month Warranty",
    price: "Rs. 4,749",
    oldPrice: "Rs. 5,549",
    color: "#1DA1F2",
    logo: BRAND.grok,
    tag: "⭐ Recommended",
    description: "SuperGrok 3-month subscription with 1 month warranty and 2FA email security included.",
    features: ["SuperGrok Premium Access", "3 Months Subscription", "Advanced AI Models", "Fast Responses", "Premium AI Features", "Stable Account", "1 Month Warranty", "2FA Email Security Included"],
    whatsIncluded: ["SuperGrok Premium Access", "3 Months Subscription", "Advanced AI Models", "Fast Responses", "Premium AI Features", "Stable Account", "Email", "Password", "2FA for Email"],
    requirements: ["Log out all other devices immediately after receiving the account", "Change the account password", "Enable Two-Factor Authentication (2FA) for the email account"],
    termsOfUse: ["Do NOT change the email address", "Do NOT disconnect or unlink the X account", "Immediately after receiving: log out all other devices, change the password, and enable 2FA", "Failure to follow these instructions will void the warranty"],
    warrantyPolicy: ["1 Month Warranty (due to Stable Account)", "Warranty is valid only if all Terms of Use are followed", "Warranty is void if the email is changed, the X account is unlinked, the account is shared, or platform policies are violated"],
    warrantyNote: "Includes: Email · Password · 2FA for Email",
  },
  {
    id: "supergrok-12m-basic",
    name: "SuperGrok — 12 Months",
    duration: "12 Months",
    price: "Rs. 3,989",
    oldPrice: "Rs. 4,649",
    color: "#1DA1F2",
    logo: BRAND.grok,
    tag: "No Warranty",
    description: "SuperGrok 12-month subscription powered by your X (Twitter) account — maximum value, no warranty.",
    features: ["SuperGrok Premium Access", "12 Months Subscription", "Powered by X (Twitter) Account", "Advanced AI Models", "Fast Responses", "Premium AI Features", "Stable Account"],
    whatsIncluded: ["SuperGrok Premium Access", "12 Months Subscription", "Powered by X (Twitter) Account", "Advanced AI Models", "Fast Responses", "Premium AI Features", "Stable Account", "Email", "Password"],
    requirements: ["Log in and verify the account immediately after receiving it"],
    termsOfUse: ["Do NOT change the email address", "Do NOT unlink/disconnect the X (Twitter) account", "You may change the account password", "Failure to follow these instructions may result in the loss of your subscription"],
    warrantyPolicy: ["No warranty is provided", "Please log in and verify the account immediately after receiving it", "No replacement or refund will be provided for account restrictions, bans, or issues caused by policy violations or misuse", "Activation guidance and support will be provided"],
    warrantyNote: "Includes: Email · Password",
  },
  {
    id: "supergrok-12m-premium",
    name: "SuperGrok — 12 Months Premium",
    duration: "12 Months",
    price: "Rs. 8,259",
    oldPrice: "Rs. 9,649",
    color: "#1DA1F2",
    logo: BRAND.grok,
    tag: "👑 Premium · 1× Replacement",
    description: "SuperGrok 12-month premium subscription with maximum stability and 1× replacement warranty.",
    features: ["SuperGrok Premium Access", "12 Months Subscription", "Powered by X (Twitter) Account", "Advanced AI Models", "Fast Responses", "Premium AI Features", "Maximum Stability", "1× Replacement Warranty", "2FA Email Security Included"],
    whatsIncluded: ["SuperGrok Premium Access", "12 Months Subscription", "Powered by X (Twitter) Account", "Advanced AI Models", "Fast Responses", "Premium AI Features", "Maximum Stability", "Email", "Password", "2FA for Email"],
    requirements: ["Log out all other devices immediately after receiving the account", "Change the account password", "Enable Two-Factor Authentication (2FA) for the email account"],
    termsOfUse: ["Do NOT change the email address", "Do NOT unlink/disconnect the X (Twitter) account", "Immediately after receiving: log out all other devices, change the password, and enable 2FA", "Failure to follow these instructions will void the warranty"],
    warrantyPolicy: ["1× Replacement Warranty", "One replacement will be provided if the account encounters an eligible issue during the warranty period", "Warranty is valid only if all Terms of Use are followed", "Warranty is void if the email is changed, the X account is unlinked, the account is shared, or platform policies are violated", "Complete activation guidance and support will be provided"],
    warrantyNote: "Includes: Email · Password · 2FA for Email",
  },
  {
    id: "canva-pro-edu",
    name: "Canva Pro Edu",
    duration: "3 Years",
    price: "Rs. 279",
    oldPrice: "Rs. 329",
    color: "#7D2AE8",
    logo: BRAND.canva,
    tag: "🔥 Best Value",
    description: "Canva Pro Edu invite for individual users — 3 years of access to all AI-powered design tools.",
    features: ["Canva AI", "Generate AI Images", "Magic Design", "Magic Write", "Magic Edit", "Magic Layers", "Magic Eraser + Magic Expand", "Background Remover", "AI-Powered Design Tools"],
    whatsIncluded: ["Canva AI", "Generate AI Images", "Magic Design", "Magic Write", "Magic Edit", "Magic Layers", "Magic Eraser", "Magic Expand", "Background Remover", "AI-Powered Design Tools"],
    requirements: ["Only your Gmail address is required", "Invitation will be sent to your email", "This plan is for Individual Users only"],
    termsOfUse: ["Please follow Canva's Terms of Service and avoid any misuse", "The invite is generally stable for long-term use under normal usage"],
    warrantyPolicy: ["No warranty is provided after the invitation is accepted", "The invite is generally stable for long-term use under normal usage", "Complete activation support will be provided"],
    warrantyNote: "Only your Gmail address required",
  },
  {
    id: "canva-pro-admin",
    name: "Canva Pro Admin Panel",
    duration: "Full Admin Access",
    price: "Rs. 5,699",
    oldPrice: "Rs. 6,649",
    color: "#7D2AE8",
    logo: BRAND.canva,
    tag: "👑 Admin · 499 Members",
    description: "Full Canva Pro admin panel access — add up to 499 members with all premium AI design features.",
    features: ["Add up to 499 Members", "Full Admin Control", "All Canva Pro Features", "AI Image Generation", "Background Remover", "Magic Design", "Magic Write", "Magic Edit", "Magic Expand", "Magic Eraser"],
    whatsIncluded: ["Admin Panel Access", "Add up to 499 Members", "Full Admin Control", "All Canva Pro Premium Features", "AI Image Generation", "Background Remover", "All Magic Tools"],
    requirements: ["Login to Canva & Outlook using the same email and password"],
    termsOfUse: ["Login to Canva & Outlook using the same email and password", "Immediately change the password and recovery email for both Canva & Outlook", "Enable Two-Factor Authentication (2FA) to secure your account", "If Outlook shows a login error, try Microsoft Edge, another device, or switch your network (Wi-Fi ↔ Mobile Data)", "Do NOT add all 499 members within a few days", "Changing the Canva account email will void any support"],
    warrantyPolicy: ["Support is subject to following the Terms of Use", "Changing the Canva account email will void any support"],
    warrantyNote: "Login to Canva & Outlook with same email & password",
  },
  {
    id: "chatgpt-plus-1m",
    name: "ChatGPT Plus",
    duration: "1 Month",
    price: "Rs. 1,799",
    oldPrice: "Rs. 2,099",
    color: "#10A37F",
    logo: BRAND.chatgpt,
    tag: "⚡ Instant Delivery",
    description: "ChatGPT Plus subscription via the fast & stable iCloud method — full premium access with instant delivery and 2FA code setup.",
    features: ["ChatGPT Plus Subscription", "Fast & Stable (iCloud Method)", "Full Premium Access", "Instant Delivery", "2FA Code Setup Included"],
    whatsIncluded: ["ChatGPT Plus Subscription", "Fast & Stable (iCloud Method)", "Full Premium Access", "Instant Delivery", "Email", "Password", "2FA Code Setup"],
    requirements: ["Log in at https://2fa.live using the 2FA secret we provide to generate your login code", "Check and log in to your account immediately after receiving it"],
    termsOfUse: ["Check and log in to your account immediately after receiving it", "Login-related warranty is valid for 1 hour only from the time of delivery", "After 1 hour, no login warranty, replacement, or refund will be provided under any circumstances"],
    warrantyPolicy: ["Login-related warranty valid for 1 hour only from delivery", "After 1 hour, no login warranty, replacement, or refund under any circumstances", "Complete activation guidance and support will be provided"],
    warrantyNote: "Login warranty 1 hour from delivery",
  },
  {
    id: "surfshark-vpn-1y",
    name: "Surfshark VPN",
    duration: "1 Year",
    price: "Rs. 3,320",
    oldPrice: "Rs. 3,899",
    color: "#1C9FE8",
    logo: BRAND.surfshark,
    tag: "🛡️ 1 Year",
    description: "1-year premium VPN subscription with global server access, high-speed browsing & streaming, encrypted privacy.",
    features: ["1 Year Premium Subscription", "Fast & Secure VPN", "Global Server Access", "High-Speed Browsing & Streaming", "Privacy & Encrypted Connection", "Easy Activation via Redeem Code", "Single Device Login"],
    whatsIncluded: ["1 Year Premium Subscription", "Fast & Secure VPN", "Global Server Access", "High-Speed Browsing & Streaming", "Privacy & Encrypted Connection", "Easy Activation via Redeem Code", "Single Device Login"],
    requirements: ["Subscription activated using a redeem code", "1 Account = 1 Device only"],
    termsOfUse: ["1 Account = 1 Device only", "No misuse, account sharing, or multiple-device login (if not permitted)", "No violation of Surfshark's policies"],
    warrantyPolicy: ["Activation Warranty Included", "Warranty remains valid only if there is no violation of Surfshark's policies or misuse of the subscription", "Any misuse, account sharing, multiple-device login, or policy violation will void the warranty", "Complete activation guidance and support will be provided"],
    warrantyNote: "1 Account = 1 Device only",
  },
  {
    id: "tiktok-growth-challenge",
    name: "TikTok Creator Growth Challenge",
    duration: "One-Time Activation",
    price: "Rs. 8,549",
    oldPrice: "Rs. 9,989",
    color: "#FE2C55",
    logo: BRAND.tiktok,
    tag: "🇺🇸 USA Account Required",
    description: "Creator Growth Challenge activation on your eligible USA TikTok account — policy-compliant, fast processing.",
    features: ["Creator Growth Challenge Activation", "Policy-Compliant Activation", "Fast Processing", "Activation on Your Eligible Account", "Activation Warranty Included"],
    whatsIncluded: ["Creator Growth Challenge Activation", "Policy-Compliant Activation", "Fast Processing", "Activation on Your Eligible Account", "Activation Warranty Included"],
    requirements: ["A USA TikTok account is required", "An older (aged) account is recommended for better eligibility", "You must provide your TikTok account login credentials", "We will log in to your account, activate the Growth Challenge, and return the account to you", "If you don't have an eligible account, we can provide one (subject to availability)"],
    termsOfUse: ["Provide valid TikTok account login credentials", "Rewards, bonuses, and payouts are subject to TikTok's eligibility criteria, campaign rules, and account performance", "Any disqualification due to TikTok policy violations, misuse, or ineligible accounts is not covered under warranty"],
    warrantyPolicy: ["Activation Warranty Only", "Warranty is valid until the Growth Challenge has been successfully activated on the account", "Any disqualification due to TikTok policy violations, misuse, or ineligible accounts is not covered under warranty", "Once the activation is completed successfully, the warranty is considered fulfilled"],
    warrantyNote: "USA TikTok account required · Activation warranty only",
  },
  {
    id: "youtube-premium-12m",
    name: "YouTube Premium – 12 Months (Fixed Family Slot)",
    duration: "12 Months",
    price: "Rs. 8,250",
    oldPrice: "Rs. 9,999",
    color: "#FF0000",
    logo: BRAND.youtube,
    tag: "📺 Fixed Family Slot",
    description: "12 Months of stable YouTube Premium and YouTube Music access on your personal Google account via a fixed family slot.",
    features: [
      "12 Months YouTube Premium",
      "Ad-Free Videos",
      "Background Play",
      "Offline Downloads",
      "YouTube Music Premium",
      "Stable Family Slot"
    ],
    whatsIncluded: [
      "12 Months YouTube Premium",
      "Ad-Free Videos",
      "Background Play",
      "Offline Downloads",
      "YouTube Music Premium",
      "Stable Family Slot"
    ],
    requirements: [
      "Only your Gmail address is required.",
      "If you receive a 'Not in the same country' error: 1. Visit: https://pay.google.com, 2. Go to Settings, 3. Delete your Payments Profile, 4. Join the family again."
    ],
    termsOfUse: [
      "Only your Gmail address is required.",
      "If you receive a 'Not in the same country' error: 1. Visit: https://pay.google.com, 2. Go to Settings, 3. Delete your Payments Profile, 4. Join the family again."
    ],
    warrantyPolicy: [
      "No warranty is provided.",
      "Stable subscription under normal usage.",
      "Activation support will be provided, In Sha Allah.",
      "Any issues caused by Google policy changes, misuse, leaving the family group, or user-side modifications are not covered."
    ],
    warrantyNote: "Stable subscription · Activation support included",
  },
  {
    id: "youtube-premium-3m",
    name: "YouTube Premium – 3 Months (Redemption Link)",
    duration: "3 Months",
    price: "Rs. 1,230",
    oldPrice: "Rs. 1,599",
    color: "#FF0000",
    logo: BRAND.youtube,
    tag: "🔗 Redemption Link",
    description: "3 Months of YouTube Premium via a redemption link. Easy activation for fresh Gmail accounts with a USA VPN.",
    features: [
      "3 Months YouTube Premium",
      "Ad-Free Videos",
      "Background Play",
      "Offline Downloads",
      "YouTube Music Premium",
      "Easy Activation via Redemption Link"
    ],
    whatsIncluded: [
      "3 Months YouTube Premium",
      "Ad-Free Videos",
      "Background Play",
      "Offline Downloads",
      "YouTube Music Premium",
      "Easy Activation via Redemption Link"
    ],
    requirements: [
      "Fresh Gmail account.",
      "USA VPN.",
      "Payment profile / credit card may be required by Google during redemption.",
      "Redeem using a mobile device."
    ],
    termsOfUse: [
      "Fresh Gmail account.",
      "USA VPN.",
      "Payment profile / credit card may be required by Google during redemption.",
      "Redeem using a mobile device."
    ],
    warrantyPolicy: [
      "No warranty is provided.",
      "Stable subscription under normal usage.",
      "Activation support will be provided, In Sha Allah.",
      "Any issues caused by Google policy changes, misuse, or incorrect redemption are not covered."
    ],
    warrantyNote: "Fresh Gmail + USA VPN required",
  },
  {
    id: "youtube-premium-1m",
    name: "YouTube Premium – 1 Month (Fixed Family Slot)",
    duration: "1 Month",
    price: "Rs. 1,040",
    oldPrice: "Rs. 1,299",
    color: "#FF0000",
    logo: BRAND.youtube,
    tag: "📺 Fixed Family Slot",
    description: "1 Month of YouTube Premium via a stable fixed family slot. Fast activation on your personal Google account.",
    features: [
      "1 Month YouTube Premium",
      "Ad-Free Videos",
      "Background Play",
      "Offline Downloads",
      "YouTube Music Premium",
      "Stable Family Slot"
    ],
    whatsIncluded: [
      "1 Month YouTube Premium",
      "Ad-Free Videos",
      "Background Play",
      "Offline Downloads",
      "YouTube Music Premium",
      "Stable Family Slot"
    ],
    requirements: [
      "Only your Gmail address is required.",
      "If you receive a 'Not in the same country' error: 1. Visit: https://pay.google.com, 2. Go to Settings, 3. Delete your Payments Profile, 4. Rejoin the family using a Pakistan VPN."
    ],
    termsOfUse: [
      "Only your Gmail address is required.",
      "If you receive a 'Not in the same country' error: 1. Visit: https://pay.google.com, 2. Go to Settings, 3. Delete your Payments Profile, 4. Rejoin the family using a Pakistan VPN."
    ],
    warrantyPolicy: [
      "No warranty is provided.",
      "Stable subscription under normal usage.",
      "Activation support will be provided, In Sha Allah.",
      "Any issues caused by Google policy changes, misuse, or user-side modifications are not covered."
    ],
    warrantyNote: "Stable family slot · Activation support included",
  },
  {
    id: "chatgpt-go-3m",
    name: "ChatGPT Go – 3 Months (Coupon Code)",
    duration: "3 Months",
    price: "Rs. 850",
    oldPrice: "Rs. 1,199",
    color: "#10A37F",
    logo: BRAND.chatgptGo,
    tag: "🎫 Coupon Code",
    description: "ChatGPT Go subscription for 3 months. Fast delivery via coupon code. Stable service with easy activation.",
    features: [
      "3 Months ChatGPT Go Subscription",
      "Easy Activation via Coupon Code",
      "Fast Delivery",
      "Stable Service"
    ],
    whatsIncluded: [
      "3 Months ChatGPT Go Coupon Code",
      "Coupon Activation Instructions"
    ],
    requirements: [
      "A valid Credit/Debit Card is required to activate the coupon.",
      "You must be able to complete the activation yourself.",
      "This product includes the coupon code only."
    ],
    termsOfUse: [
      "We only provide the coupon code.",
      "We are not responsible for payment page errors or activation issues caused by your payment method or account.",
      "Please purchase only if you can activate the coupon successfully.",
      "No replacement or refund will be provided for activation or payment-related issues."
    ],
    warrantyPolicy: [
      "No warranty is provided.",
      "Activation support for the coupon will be provided, In Sha Allah.",
      "Any issues related to payment methods, account eligibility, or platform policies are the user's responsibility."
    ],
    warrantyNote: "Coupon code only · Card required for activation",
  },
  {
    id: "capcut-pro-admin-7s",
    name: "CapCut Pro Admin Team – 7 Seats",
    duration: "1 Month",
    price: "Rs. 4,749",
    oldPrice: "Rs. 5,499",
    color: "#FE2C55",
    logo: BRAND.capcut,
    tag: "👑 Admin Team · 7 Seats",
    description: "1 Month of CapCut Pro admin team account with 7 seats. Full premium editing and AI tools included.",
    features: [
      "1 Month CapCut Pro",
      "Admin Team Account (7 Seats)",
      "Premium Editing Features",
      "AI Editing Tools",
      "Premium Templates & Effects",
      "4K HD Video Export",
      "Cloud Sync & Storage"
    ],
    whatsIncluded: [
      "Email & Password for CapCut Admin Team Account",
      "7 Seats Access"
    ],
    requirements: [
      "The account can be logged in on up to 2 devices only (Phone, PC, or Web – each counts as a separate device).",
      "Please avoid logging in on unnecessary devices, as this may consume available device slots.",
      "You may change the password only.",
      "The email address cannot be changed."
    ],
    termsOfUse: [
      "Strict device limit: up to 2 devices only.",
      "Only password can be changed; email remains fixed.",
      "Avoid unnecessary logins to preserve device slots."
    ],
    warrantyPolicy: [
      "Full 30-Day Warranty.",
      "Warranty is void if the account is accessed on too many devices or misused.",
      "Warranty is void if platform policies are violated or the account is shared beyond the allowed limits.",
      "Complete activation guidance and support will be provided, In Sha Allah."
    ],
    warrantyNote: "Full 30-Day Warranty · Max 2 devices",
  },
  {
    id: "surfshark-vpn-1m",
    name: "Surfshark VPN – 1 Month (Single Device)",
    duration: "1 Month",
    price: "Rs. 379",
    oldPrice: "Rs. 499",
    color: "#1C9FE8",
    logo: BRAND.surfshark,
    tag: "🛡️ Single Device",
    description: "1 Month of Surfshark VPN premium access. Fast & secure browsing with global servers on a single device.",
    features: [
      "1 Month Premium Subscription",
      "Single Device Login",
      "Fast & Secure VPN",
      "High-Speed Servers",
      "Private & Encrypted Browsing",
      "Global Server Access",
      "Easy Login"
    ],
    whatsIncluded: [
      "Premium VPN Access",
      "Login Code or Credentials"
    ],
    requirements: [
      "Login Code will be provided after purchase.",
      "Follow the activation instructions carefully.",
      "This subscription is for 1 Device Only."
    ],
    termsOfUse: [
      "Strictly for 1 Device Only.",
      "No sharing or logging in on multiple devices."
    ],
    warrantyPolicy: [
      "No warranty is provided.",
      "Stable subscription under normal usage.",
      "Activation support will be provided, In Sha Allah.",
      "Any issues caused by policy violations, misuse, account sharing, or logging in on unauthorized devices are not covered."
    ],
    warrantyNote: "1 Device Only · No Warranty",
  },
  {
    id: "nordvpn-3m",
    name: "NordVPN – 3 Months (Redeem Link)",
    duration: "3 Months",
    price: "Rs. 949",
    oldPrice: "Rs. 1,299",
    color: "#0060FF",
    logo: BRAND.nord,
    tag: "🛡️ Redeem Link",
    description: "3 Months NordVPN premium subscription via easy activation redeem link. High-speed global servers, secure and private.",
    features: [
      "3 Months Premium Subscription",
      "Easy Activation via Redeem Link",
      "Fast & Secure VPN",
      "Global Server Access",
      "High-Speed Connection",
      "Privacy & Online Protection"
    ],
    whatsIncluded: [
      "NordVPN Redeem Link",
      "Activation Instructions"
    ],
    requirements: [
      "Only your email address is required.",
      "No Credit/Debit Card required.",
      "No payment method required.",
      "Easy activation using the redeem link."
    ],
    termsOfUse: [
      "Redeem using the provided link and your email.",
      "No credit card or payment setup needed."
    ],
    warrantyPolicy: [
      "No warranty after successful activation.",
      "No hold warranty.",
      "Stable subscription under normal usage.",
      "Activation support will be provided, In Sha Allah.",
      "Any issues caused by policy violations, misuse, or user-side changes are not covered."
    ],
    warrantyNote: "No warranty after successful activation",
  },
  {
    id: "lovable-ai-100c",
    name: "Lovable AI Pro – 100 Credits",
    duration: "1 Month",
    price: "Rs. 1,139",
    oldPrice: "Rs. 1,499",
    color: "#EE0F79",
    logo: BRAND.lovable,
    tag: "💎 100 Credits",
    description: "Lovable AI Pro with 100 credits for 1 month. Fast and reliable premium AI generation access with 1 day warranty.",
    features: [
      "100 AI Credits",
      "1 Month Premium Access",
      "Fast & Reliable Service",
      "Instant Delivery",
      "Smooth & Stable Usage",
      "Professional Support"
    ],
    whatsIncluded: [
      "100 Lovable AI Credits",
      "Account/Code Details"
    ],
    requirements: [
      "Please read the product details carefully before placing your order.",
      "Make sure this package meets your requirements before purchasing.",
      "No refund or replacement will be provided for incorrect purchases or change of mind after delivery."
    ],
    termsOfUse: [
      "Must check and verify the credits immediately after delivery.",
      "Use according to Lovable's standard policies."
    ],
    warrantyPolicy: [
      "Full 1-Day Warranty.",
      "Warranty is valid for 1 day from the time of delivery.",
      "Complete activation guidance and support will be provided, In Sha Allah.",
      "Warranty is void in case of policy violations, misuse, or unauthorized changes made by the user."
    ],
    warrantyNote: "1 Day Warranty from delivery",
  }
];

export const BUYING_STEPS = [
  { title: "Pick Your Product", desc: "Browse the marketplace and choose the premium AI tool that fits your needs." },
  { title: "Click Buy on WhatsApp", desc: "Your product name, duration and price are auto-filled into a WhatsApp message — just hit send." },
  { title: "Complete Payment", desc: "We'll share available payment options (bank transfer, EasyPaisa, JazzCash, etc.) on WhatsApp." },
  { title: "Receive & Activate", desc: "Get your account details or redeem link instantly, then follow the activation guide to start using your premium access." },
];