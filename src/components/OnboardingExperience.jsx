import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { useCurrency } from "@/context/CurrencyContext";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Check, 
  ArrowRight, 
  Search, 
  Sparkles, 
  CheckCircle2,
  Lock,
  Globe,
  Terminal,
  ShieldCheck,
  Zap,
  Server
} from "lucide-react";

export const FULL_COUNTRY_LIST = [
  { code: "PK", name: "Pakistan", flag: "🇵🇰", currency: "PKR", symbol: "Rs." },
  { code: "US", name: "United States", flag: "🇺🇸", currency: "USD", symbol: "$" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", currency: "USD", symbol: "$" },
  { code: "CA", name: "Canada", flag: "🇨🇦", currency: "USD", symbol: "$" },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", currency: "USD", symbol: "$" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", currency: "USD", symbol: "$" },
  { code: "AU", name: "Australia", flag: "🇦🇺", currency: "USD", symbol: "$" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿", currency: "USD", symbol: "$" },
  { code: "DE", name: "Germany", flag: "🇩🇪", currency: "USD", symbol: "$" },
  { code: "FR", name: "France", flag: "🇫🇷", currency: "USD", symbol: "$" },
  { code: "IT", name: "Italy", flag: "🇮🇹", currency: "USD", symbol: "$" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", currency: "USD", symbol: "$" },
  { code: "ES", name: "Spain", flag: "🇪🇸", currency: "USD", symbol: "$" },
  { code: "BE", name: "Belgium", flag: "🇧🇪", currency: "USD", symbol: "$" },
  { code: "SE", name: "Sweden", flag: "🇸🇪", currency: "USD", symbol: "$" },
  { code: "NO", name: "Norway", flag: "🇳🇴", currency: "USD", symbol: "$" },
  { code: "DK", name: "Denmark", flag: "🇩🇰", currency: "USD", symbol: "$" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭", currency: "USD", symbol: "$" },
  { code: "IE", name: "Ireland", flag: "🇮🇪", currency: "USD", symbol: "$" },
  { code: "JP", name: "Japan", flag: "🇯🇵", currency: "USD", symbol: "$" },
  { code: "KR", name: "South Korea", flag: "🇰🇷", currency: "USD", symbol: "$" },
  { code: "SG", name: "Singapore", flag: "🇸🇬", currency: "USD", symbol: "$" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾", currency: "USD", symbol: "$" },
  { code: "TH", name: "Thailand", flag: "🇹🇭", currency: "USD", symbol: "$" },
  { code: "PH", name: "Philippines", flag: "🇵🇭", currency: "USD", symbol: "$" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩", currency: "USD", symbol: "$" },
  { code: "IN", name: "India", flag: "🇮🇳", currency: "USD", symbol: "$" },
  { code: "TR", name: "Turkey", flag: "🇹🇷", currency: "USD", symbol: "$" },
  { code: "QA", name: "Qatar", flag: "🇶🇦", currency: "USD", symbol: "$" },
  { code: "OM", name: "Oman", flag: "🇴🇲", currency: "USD", symbol: "$" },
  { code: "KW", name: "Kuwait", flag: "🇰🇼", currency: "USD", symbol: "$" },
  { code: "BH", name: "Bahrain", flag: "🇧🇭", currency: "USD", symbol: "$" },
];

const INTRO_STATUS_MESSAGES = [
  "Setting up store preferences...",
  "Loading localized plans & pricing...",
  "Verifying available tool licenses...",
  "Preparing your store experience...",
  "Almost ready!"
];

export default function OnboardingExperience({ onComplete }) {
  const { setUserLocation } = useCurrency();
  const { changeLang } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: Intro Screen, 2: Choose Country, 3: Language (PK only), 4: Confirmation
  const [searchQuery, setSearchQuery] = useState("");
  const [introProgress, setIntroProgress] = useState(0);
  const [msgIdx, setMsgIdx] = useState(0);

  // Selected State
  const [selectedCountry, setSelectedCountry] = useState({
    code: "PK",
    name: "Pakistan",
    flag: "🇵🇰",
    currency: "PKR"
  });
  const [selectedLanguage, setSelectedLanguage] = useState("ro_urdu");

  // Check if onboarding is already completed permanently or expose global trigger
  useEffect(() => {
    window.__openPrimeOnboarding = () => {
      setStep(2);
      setIsOpen(true);
    };

    try {
      const completed = localStorage.getItem("prime_onboarding_completed");
      const cookieCompleted = document.cookie.includes("prime_onboarding_completed=true");

      if (!completed && !cookieCompleted) {
        setIsOpen(true);
      }
    } catch (e) {
      console.error(e);
    }

    return () => {
      try {
        delete window.__openPrimeOnboarding;
      } catch (_) {}
    };
  }, []);

  // Intro progress timer for Step 1
  useEffect(() => {
    if (!isOpen || step !== 1) return;

    const startTime = performance.now();
    const duration = 1200;

    const update = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setIntroProgress(pct);

      const nextMsg = Math.floor((pct / 100) * INTRO_STATUS_MESSAGES.length);
      if (nextMsg < INTRO_STATUS_MESSAGES.length) {
        setMsgIdx(nextMsg);
      }

      if (pct < 100) {
        requestAnimationFrame(update);
      }
    };

    const rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [isOpen, step]);

  // Search Filter
  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return FULL_COUNTRY_LIST;
    const q = searchQuery.toLowerCase().trim();
    return FULL_COUNTRY_LIST.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        c.currency.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Step 1 -> Step 2 (Choose Country)
  const handleProceedToCountry = () => {
    setStep(2);
  };

  // Step 2: Country Selection Handler
  const handleSelectCountry = (country) => {
    const isPK = country.code === "PK";
    const curr = isPK ? "PKR" : "USD";
    const lang = isPK ? "ro_urdu" : "en";

    const countryObj = {
      code: country.code,
      name: country.name,
      flag: country.flag,
      currency: curr,
    };

    setSelectedCountry(countryObj);
    setSelectedLanguage(lang);

    if (isPK) {
      setStep(3); // Language Selection Screen for Pakistan
    } else {
      setStep(4); // Skip directly to Confirmation for All Other Countries
    }
  };

  // Step 4: Finalize & Permanently Lock Setup
  const handleFinalizeSetup = () => {
    try {
      // 1. Permanent LocalStorage Flags
      localStorage.setItem("prime_onboarding_completed", "true");
      localStorage.setItem("prime_country", selectedCountry.code);
      localStorage.setItem("prime_country_name", selectedCountry.name);
      localStorage.setItem("prime_country_flag", selectedCountry.flag);
      localStorage.setItem("prime_currency", selectedCountry.currency);
      localStorage.setItem("ptHub_lang", selectedLanguage);
      localStorage.setItem("prime_timezone", Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC");

      // 2. Permanent Secure Cookies (1 Year Expiry)
      const oneYear = 31536000;
      document.cookie = `prime_onboarding_completed=true; max-age=${oneYear}; path=/; SameSite=Lax`;
      document.cookie = `prime_country=${selectedCountry.code}; max-age=${oneYear}; path=/; SameSite=Lax`;
      document.cookie = `prime_currency=${selectedCountry.currency}; max-age=${oneYear}; path=/; SameSite=Lax`;
      document.cookie = `ptHub_lang=${selectedLanguage}; max-age=${oneYear}; path=/; SameSite=Lax`;

      // 3. Update React Contexts
      setUserLocation({
        code: selectedCountry.code,
        name: selectedCountry.name,
        flag: selectedCountry.flag,
        curr: selectedCountry.currency,
      });

      changeLang(selectedLanguage);
    } catch (e) {
      console.error(e);
    }

    setIsOpen(false);
    if (onComplete) onComplete();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="onboarding-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.98, filter: "blur(12px)", transition: { duration: 0.45 } }}
        className="fixed inset-0 z-[999999] flex flex-col justify-between bg-[#05070A] text-white overflow-hidden select-none p-4 sm:p-8 font-sans"
      >
        {/* ATMOSPHERIC BACKGROUND: AURORA GLOWS & TECH GRID */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          {/* Futuristic Grid */}
          <div 
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 214, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(123, 97, 255, 0.2) 1px, transparent 1px)`,
              backgroundSize: "36px 36px",
            }}
          />

          {/* Aurora Glow Blobs */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,214,255,0.22)_0%,rgba(123,97,255,0.14)_40%,transparent_75%)] blur-[130px]" />
          <div className="absolute bottom-0 right-10 w-[600px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(224,86,253,0.18)_0%,transparent_70%)] blur-[110px]" />
        </div>

        {/* TOP STATUS BAR */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-between pt-[env(safe-area-inset-top,0px)] pb-3 border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-2.5 bg-[#0E1117] border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-xl shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_10px_#22c55e]" />
            </span>
            <span className="text-slate-300 font-bold uppercase tracking-wider text-[11px]">
              PRIME TOOLS STORE <span className="text-emerald-400 font-black">• VERIFIED</span>
            </span>
          </div>

          <div className="text-[11px] font-mono text-slate-400">
            STEP {step} OF {selectedCountry.code === "PK" ? "4" : "3"}
          </div>
        </div>

        {/* CENTER CONTENT CONTAINER */}
        <div className="relative z-20 w-full max-w-3xl mx-auto my-auto flex flex-col items-center text-center py-4">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: LUXURY INTRO SCREEN */}
            {step === 1 && (
              <motion.div
                key="step1-intro"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 flex flex-col items-center"
              >
                {/* 3D Holographic Glass Cube Logo */}
                <div className="relative p-7 rounded-[32px] bg-[#0E1117]/90 border border-white/20 shadow-[0_25px_60px_rgba(0,214,255,0.3)] backdrop-blur-3xl flex items-center justify-center group">
                  <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#E056FD] opacity-40 blur-xl group-hover:opacity-80 transition duration-700 animate-pulse" />
                  <Logo size={88} animated={true} />
                </div>

                {/* Premier Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 shadow-[0_0_20px_rgba(0,214,255,0.2)] backdrop-blur-xl">
                  <Sparkles size={13} className="text-[#00D4FF] animate-spin-slow" />
                  <span>PREMIER AI MARKETPLACE</span>
                </div>

                {/* Heading */}
                <div className="space-y-2">
                  <h1 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-white leading-none">
                    WELCOME TO <br />
                    <span className="bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#E056FD] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,214,255,0.5)]">
                      PRIME TOOLS HUB
                    </span>
                  </h1>

                  <p className="text-xs sm:text-sm text-slate-300 font-body max-w-lg mx-auto leading-relaxed font-medium">
                    Premium AI Subscriptions • Software Licenses • Creator Tools • Instant Activation
                  </p>
                </div>

                {/* Loading Bar & Messages */}
                <div className="w-full max-w-md px-2 space-y-2.5">
                  <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden p-[1px] border border-white/20 relative shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#E056FD] transition-all duration-75 relative"
                      style={{ width: `${introProgress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Terminal size={14} className="text-[#00D4FF] animate-pulse" />
                      <span className="text-[11px] font-semibold">{INTRO_STATUS_MESSAGES[msgIdx]}</span>
                    </div>
                    <span className="text-[#00D4FF] font-black text-xs">{introProgress}%</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 w-full max-w-md">
                  <button
                    onClick={handleProceedToCountry}
                    className="w-full sm:flex-1 py-4 rounded-2xl bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#E056FD] text-black font-black text-sm uppercase tracking-wider hover:opacity-95 transition-all shadow-[0_0_30px_rgba(0,214,255,0.4)] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Continue Setup</span>
                    <ArrowRight size={16} />
                  </button>
                  <button
                    onClick={handleProceedToCountry}
                    className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 font-mono font-bold text-xs uppercase tracking-wider border border-white/15 transition-all active:scale-95 cursor-pointer"
                  >
                    Skip Intro
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: CHOOSE YOUR COUNTRY */}
            {step === 2 && (
              <motion.div
                key="step2-country"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="w-full max-w-xl bg-[#0E1117] border border-white/15 rounded-[32px] p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.9)] backdrop-blur-3xl space-y-5 text-left"
              >
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-[#00D4FF] mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(0,214,255,0.3)]">
                    <Globe size={24} />
                  </div>
                  <h2 className="font-display font-black text-2xl sm:text-3xl text-white">Choose Your Country</h2>
                  <p className="text-xs text-slate-300 font-body">Select your country location for localized store configuration &amp; pricing.</p>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search country name or code (e.g., Pakistan, US, UK, UAE)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF] transition-colors"
                  />
                </div>

                {/* Country List Container */}
                <div className="max-h-72 overflow-y-auto space-y-2 pr-1 font-mono text-xs">
                  {filteredCountries.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => handleSelectCountry(c)}
                      className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 transition-all text-left cursor-pointer group active:scale-[0.99]"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="text-2xl">{c.flag}</span>
                        <div>
                          <span className="font-sans font-bold text-sm text-white block">{c.name}</span>
                          <span className="text-[10px] text-slate-400 font-mono">Code: {c.code}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-lg bg-white/10 text-cyan-300 font-bold text-[11px]">
                          {c.currency}
                        </span>
                        <ArrowRight size={14} className="text-slate-500 group-hover:text-[#00D4FF] group-hover:translate-x-1 transition-all" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: LANGUAGE SELECTION (ONLY FOR PAKISTAN) */}
            {step === 3 && (
              <motion.div
                key="step3-language"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="w-full max-w-xl bg-[#0E1117] border border-white/15 rounded-[32px] p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.9)] backdrop-blur-3xl space-y-6 text-center"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#00D4FF] uppercase tracking-widest">🇵🇰 PAKISTAN LOCALIZATION</span>
                  <h2 className="font-display font-black text-2xl sm:text-3xl text-white">Which language do you prefer?</h2>
                  <p className="text-xs text-slate-300 font-body">Choose your language preference for browsing products &amp; descriptions.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Roman Urdu Card */}
                  <div
                    onClick={() => setSelectedLanguage("ro_urdu")}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer text-left space-y-2.5 ${
                      selectedLanguage === "ro_urdu"
                        ? "bg-purple-500/20 border-[#7B61FF] shadow-[0_0_25px_rgba(123,97,255,0.3)]"
                        : "bg-white/[0.03] hover:bg-white/[0.08] border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">🇵🇰</span>
                      {selectedLanguage === "ro_urdu" && <CheckCircle2 size={20} className="text-[#7B61FF]" />}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">Roman Urdu (Default)</h3>
                      <p className="text-[11px] text-slate-300 font-body leading-relaxed mt-1">
                        "ChatGPT Plus foran deliver hoga. 100% asli access. Instant 24/7 WhatsApp support. Order abhi karein."
                      </p>
                    </div>
                  </div>

                  {/* English Card */}
                  <div
                    onClick={() => setSelectedLanguage("en")}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer text-left space-y-2.5 ${
                      selectedLanguage === "en"
                        ? "bg-cyan-500/20 border-[#00D4FF] shadow-[0_0_25px_rgba(0,214,255,0.3)]"
                        : "bg-white/[0.03] hover:bg-white/[0.08] border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">🇺🇸</span>
                      {selectedLanguage === "en" && <CheckCircle2 size={20} className="text-[#00D4FF]" />}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">English</h3>
                      <p className="text-[11px] text-slate-300 font-body leading-relaxed mt-1">
                        "Instant delivery. Premium AI Tools &amp; Software Licenses. Worldwide WhatsApp &amp; Email Support."
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setStep(4)}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#E056FD] text-black font-black text-sm uppercase tracking-wider hover:opacity-95 transition-all shadow-[0_0_30px_rgba(0,214,255,0.4)] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Proceed to Confirmation</span>
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            )}

            {/* STEP 4: CONFIRMATION & LOCK SETUP */}
            {step === 4 && (
              <motion.div
                key="step4-confirmation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="w-full max-w-md bg-[#0E1117] border border-white/15 rounded-[32px] p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.9)] backdrop-blur-3xl space-y-6 text-center"
              >
                {/* Green Checkmark Badge */}
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-[#22C55E] mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                  <CheckCircle2 size={36} />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-[#22C55E] uppercase tracking-widest">PERMANENT LOCALIZATION</span>
                  <h2 className="font-display font-black text-3xl text-white">You're Ready!</h2>
                  <p className="text-xs text-slate-300 font-body">Your configuration has been locked &amp; initialized.</p>
                </div>

                {/* Summary Details */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-left font-mono space-y-3 text-xs">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Selected Country:</span>
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <span>{selectedCountry.flag}</span>
                      <span>{selectedCountry.name}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Store Currency:</span>
                    <span className="font-bold text-[#00D4FF]">{selectedCountry.currency}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Store Language:</span>
                    <span className="font-bold text-[#7B61FF]">
                      {selectedLanguage === "ro_urdu" ? "Roman Urdu 🇵🇰" : "English 🇺🇸"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Supported Gateways:</span>
                    <span className="font-bold text-emerald-400">
                      {selectedCountry.code === "PK" ? "JazzCash / EasyPaisa / Bank" : "Stripe / Cards / Apple Pay"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleFinalizeSetup}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#E056FD] text-black font-black text-sm uppercase tracking-wider hover:opacity-95 transition-all shadow-[0_0_35px_rgba(0,214,255,0.5)] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Enter Marketplace →</span>
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* MINIMAL FOOTER */}
        <div className="relative z-20 w-full max-w-7xl mx-auto pt-2 border-t border-white/10 text-center text-[10px] font-mono text-slate-400 tracking-wider flex items-center justify-center gap-3 flex-wrap">
          <span>Instant WhatsApp Activation</span>
          <span>•</span>
          <span>Full Support Warranty Included</span>
          <span>•</span>
          <span>256-Bit SSL Encrypted</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
