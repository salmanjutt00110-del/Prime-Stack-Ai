import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { useCurrency } from "@/context/CurrencyContext";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Globe, 
  Check, 
  ArrowRight, 
  Search, 
  ShieldCheck, 
  CreditCard, 
  Zap, 
  Sparkles, 
  X,
  Compass,
  CheckCircle2,
  RefreshCw,
  Lock,
  MessageSquare
} from "lucide-react";

export const COUNTRIES = [
  { code: "PK", name: "Pakistan", flag: "🇵🇰", currency: "PKR", symbol: "Rs." },
  { code: "US", name: "United States", flag: "🇺🇸", currency: "USD", symbol: "$" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", currency: "USD", symbol: "$" },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", currency: "USD", symbol: "$" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", currency: "USD", symbol: "$" },
  { code: "CA", name: "Canada", flag: "🇨🇦", currency: "USD", symbol: "$" },
  { code: "AU", name: "Australia", flag: "🇦🇺", currency: "USD", symbol: "$" },
  { code: "IN", name: "India", flag: "🇮🇳", currency: "USD", symbol: "$" },
  { code: "DE", name: "Germany", flag: "🇩🇪", currency: "USD", symbol: "$" },
  { code: "FR", name: "France", flag: "🇫🇷", currency: "USD", symbol: "$" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", currency: "USD", symbol: "$" },
  { code: "SG", name: "Singapore", flag: "🇸🇬", currency: "USD", symbol: "$" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾", currency: "USD", symbol: "$" },
  { code: "QA", name: "Qatar", flag: "🇶🇦", currency: "USD", symbol: "$" },
  { code: "KW", name: "Kuwait", flag: "🇰🇼", currency: "USD", symbol: "$" },
  { code: "OM", name: "Oman", flag: "🇴🇲", currency: "USD", symbol: "$" },
  { code: "BH", name: "Bahrain", flag: "🇧🇭", currency: "USD", symbol: "$" },
  { code: "TR", name: "Turkey", flag: "🇹🇷", currency: "USD", symbol: "$" },
  { code: "IT", name: "Italy", flag: "🇮🇹", currency: "USD", symbol: "$" },
  { code: "ES", name: "Spain", flag: "🇪🇸", currency: "USD", symbol: "$" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭", currency: "USD", symbol: "$" },
  { code: "JP", name: "Japan", flag: "🇯🇵", currency: "USD", symbol: "$" },
  { code: "CN", name: "China", flag: "🇨🇳", currency: "USD", symbol: "$" },
  { code: "BR", name: "Brazil", flag: "🇧🇷", currency: "USD", symbol: "$" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦", currency: "USD", symbol: "$" },
];

export default function OnboardingExperience() {
  const { setUserLocation, setCurrency, setCountry } = useCurrency();
  const { changeLang } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: Welcome, 2: Auto Detect, 3: Change Country, 4: Currency Info, 5: Language (PK), 6: Confirmation
  const [isDetecting, setIsDetecting] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState({
    code: "PK",
    name: "Pakistan",
    flag: "🇵🇰",
    currency: "PKR"
  });

  const [selectedLanguage, setSelectedLanguage] = useState("ro_urdu"); // "ro_urdu" | "en"
  const [searchQuery, setSearchQuery] = useState("");

  // Check storage on mount
  useEffect(() => {
    try {
      const completed = localStorage.getItem("prime_onboarding_completed");
      const cookieCompleted = document.cookie.includes("prime_onboarding_completed=true");
      
      if (!completed && !cookieCompleted) {
        // Show after brief entrance delay
        const timer = setTimeout(() => setIsOpen(true), 400);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Expose global opener for "Reset Preferences"
  useEffect(() => {
    window.__openPrimeOnboarding = () => {
      setStep(1);
      setIsOpen(true);
    };

    window.__resetPrimePreferences = () => {
      try {
        localStorage.removeItem("prime_onboarding_completed");
        localStorage.removeItem("prime_country");
        localStorage.removeItem("prime_country_name");
        localStorage.removeItem("prime_country_flag");
        localStorage.removeItem("prime_currency");
        localStorage.removeItem("ptHub_lang");
        document.cookie = "prime_onboarding_completed=; max-age=0; path=/";
        document.cookie = "prime_country=; max-age=0; path=/";
        document.cookie = "prime_currency=; max-age=0; path=/";
      } catch (e) {
        console.error(e);
      }
      setStep(1);
      setIsOpen(true);
    };

    return () => {
      delete window.__openPrimeOnboarding;
      delete window.__resetPrimePreferences;
    };
  }, []);

  // Filtered countries for Step 3
  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return COUNTRIES;
    const q = searchQuery.toLowerCase().trim();
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        c.currency.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Geolocation Auto-Detection
  const runAutoDetection = async () => {
    setIsDetecting(true);
    let detectedCode = "PK";
    let detectedName = "Pakistan";
    let detectedFlag = "🇵🇰";

    try {
      // 1. Try Geolocation API with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const res = await fetch("https://ipapi.co/json/", { signal: controller.signal });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data && data.country_code) {
          detectedCode = data.country_code;
          detectedName = data.country_name || data.country_code;
          const match = COUNTRIES.find((c) => c.code === detectedCode);
          if (match) {
            detectedFlag = match.flag;
          } else {
            detectedFlag = "🌍";
          }
        }
      }
    } catch {
      // 2. Fallback to TimeZone / Browser Locale
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
        const lang = navigator.language || "";
        if (tz.includes("Karachi") || lang.includes("PK") || lang.includes("ur")) {
          detectedCode = "PK";
          detectedName = "Pakistan";
          detectedFlag = "🇵🇰";
        } else if (tz.includes("London") || tz.includes("Europe/London")) {
          detectedCode = "GB";
          detectedName = "United Kingdom";
          detectedFlag = "🇬🇧";
        } else if (tz.includes("Dubai")) {
          detectedCode = "AE";
          detectedName = "United Arab Emirates";
          detectedFlag = "🇦🇪";
        } else {
          detectedCode = "US";
          detectedName = "United States";
          detectedFlag = "🇺🇸";
        }
      } catch (e) {
        console.error(e);
      }
    }

    const isPK = detectedCode === "PK";
    const curr = isPK ? "PKR" : "USD";
    const lang = isPK ? "ro_urdu" : "en";

    const countryObj = {
      code: detectedCode,
      name: detectedName,
      flag: detectedFlag,
      currency: curr,
    };

    setSelectedCountry(countryObj);
    setSelectedLanguage(lang);
    setIsDetecting(false);
  };

  // Step 1 -> Step 2 transition
  const handleStartSetup = () => {
    setStep(2);
    runAutoDetection();
  };

  // Skip Setup action
  const handleSkipSetup = () => {
    runAutoDetection().then(() => {
      finishOnboarding();
    });
  };

  // Select Country from Step 3
  const handleSelectCountry = (country) => {
    const isPK = country.code === "PK";
    const curr = isPK ? "PKR" : "USD";
    const lang = isPK ? "ro_urdu" : "en";

    setSelectedCountry({
      code: country.code,
      name: country.name,
      flag: country.flag,
      currency: curr,
    });
    setSelectedLanguage(lang);

    if (isPK) {
      setStep(5); // Language selection for PK
    } else {
      setStep(6); // Confirmation for international
    }
  };

  // Complete Onboarding & Save Preferences
  const finishOnboarding = () => {
    try {
      localStorage.setItem("prime_onboarding_completed", "true");
      document.cookie = "prime_onboarding_completed=true; max-age=31536000; path=/";

      // Save user location & currency in Context & Storage
      setUserLocation({
        code: selectedCountry.code,
        name: selectedCountry.name,
        flag: selectedCountry.flag,
        curr: selectedCountry.currency,
      });

      // Save language
      changeLang(selectedLanguage);
    } catch (e) {
      console.error(e);
    }

    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="onboarding-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 bg-[#04050A]/95 backdrop-blur-2xl overflow-y-auto select-none font-sans"
      >
        {/* Ambient Aurora Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[radial-gradient(circle,rgba(0,214,255,0.18)_0%,rgba(123,97,255,0.12)_40%,transparent_75%)] blur-[120px]" />
          <div className="absolute -bottom-32 left-1/4 w-[600px] h-[400px] bg-[radial-gradient(circle,rgba(224,86,253,0.15)_0%,transparent_70%)] blur-[110px]" />
        </div>

        {/* ONBOARDING CARD CONTAINER */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 15 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#080B14]/90 border border-white/15 rounded-[32px] p-6 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.9)] backdrop-blur-3xl overflow-hidden my-auto"
        >
          {/* Top Progress Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-slate-300 uppercase">
                ONBOARDING SETUP • STEP {step} OF {selectedCountry.code === "PK" ? "6" : "5"}
              </span>
            </div>

            {/* Skip Button */}
            <button
              onClick={handleSkipSetup}
              className="text-xs font-mono font-bold text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              Skip Setup <X size={14} />
            </button>
          </div>

          {/* STEP CONTENT SWITCHER */}
          <AnimatePresence mode="wait">
            {/* STEP 1: WELCOME SCREEN */}
            {step === 1 && (
              <motion.div
                key="step1-welcome"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-6"
              >
                {/* Floating Logo Badge */}
                <div className="relative mx-auto w-24 h-24 rounded-3xl bg-gradient-to-br from-white/15 via-white/[0.04] to-black/80 border border-cyan-500/40 p-4 shadow-[0_15px_40px_rgba(0,214,255,0.3)] backdrop-blur-2xl flex items-center justify-center">
                  <Logo size={64} animated={true} />
                </div>

                <div className="space-y-3">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/30 text-[#00D4FF]">
                    <Sparkles size={12} /> WELCOME TO PRIME TOOLS HUB
                  </span>
                  <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                    The World's Premier <br />
                    <span className="bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#E056FD] bg-clip-text text-transparent">
                      AI Marketplace
                    </span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-body max-w-lg mx-auto leading-relaxed">
                    Official ChatGPT Plus, Canva Pro, Gemini Pro, Veo 3, CapCut Pro, Notion, VPNs &amp; 100+ Premium Digital Tools with instant activation &amp; full warranty support.
                  </p>
                </div>

                {/* Animated Line */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
                  <div className="h-full w-full bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#E056FD] animate-pulse" />
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleStartSetup}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#E056FD] text-black font-black text-sm uppercase tracking-wider hover:opacity-95 transition-all shadow-[0_0_25px_rgba(0,214,255,0.4)] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Continue Setup</span>
                    <ArrowRight size={16} />
                  </button>
                  <button
                    onClick={handleSkipSetup}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 font-mono font-bold text-xs uppercase tracking-wider border border-white/15 transition-all active:scale-95 cursor-pointer"
                  >
                    Skip Setup
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: AUTO LOCATION DETECTION */}
            {step === 2 && (
              <motion.div
                key="step2-autodetect"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-6"
              >
                {isDetecting ? (
                  <div className="py-12 space-y-4">
                    <RefreshCw size={40} className="mx-auto text-[#00D4FF] animate-spin" />
                    <h3 className="font-display font-bold text-xl text-white">Detecting your location &amp; network...</h3>
                    <p className="text-xs text-slate-400 font-mono">Connecting to IP Geolocation Services</p>
                  </div>
                ) : (
                  <>
                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-[#00D4FF] mx-auto flex items-center justify-center text-3xl shadow-[0_0_25px_rgba(0,214,255,0.3)]">
                      {selectedCountry.flag}
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">LOCATION DETECTED</span>
                      <h3 className="font-display font-black text-3xl text-white">
                        We detected you are in <br />
                        <span className="text-[#00D4FF]">{selectedCountry.name} {selectedCountry.flag}</span>
                      </h3>
                      <p className="text-xs text-slate-300 max-w-md mx-auto">
                        Your currency will automatically be set to <strong className="text-white">{selectedCountry.currency}</strong> for optimized instant local ordering.
                      </p>
                    </div>

                    {/* Summary Badges */}
                    <div className="grid grid-cols-2 gap-3 max-w-md mx-auto py-2">
                      <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-left font-mono">
                        <span className="text-[10px] text-slate-400 block">CURRENCY</span>
                        <span className="text-sm font-bold text-emerald-400">{selectedCountry.currency} ({selectedCountry.code === "PK" ? "Rs." : "$"})</span>
                      </div>
                      <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-left font-mono">
                        <span className="text-[10px] text-slate-400 block">PAYMENT MODE</span>
                        <span className="text-xs font-bold text-cyan-300">
                          {selectedCountry.code === "PK" ? "JazzCash / EasyPaisa" : "Stripe / Cards / ApplePay"}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <button
                        onClick={() => {
                          if (selectedCountry.code === "PK") setStep(5);
                          else setStep(6);
                        }}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] text-black font-black text-sm uppercase tracking-wider hover:opacity-95 transition-all shadow-[0_0_25px_rgba(0,214,255,0.4)] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>Confirm &amp; Continue</span>
                        <ArrowRight size={16} />
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 font-mono font-bold text-xs uppercase tracking-wider border border-white/15 transition-all active:scale-95 cursor-pointer"
                      >
                        Change Country
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            )}

            {/* STEP 3: SEARCHABLE COUNTRY DROPDOWN */}
            {step === 3 && (
              <motion.div
                key="step3-country"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="text-center space-y-1">
                  <h3 className="font-display font-black text-2xl text-white">Select Your Country</h3>
                  <p className="text-xs text-slate-400">Choose your location to load localized pricing &amp; payment options</p>
                </div>

                {/* Search Box */}
                <div className="relative">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search country or code (e.g. US, Pakistan, UAE)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF] transition-colors"
                  />
                </div>

                {/* Country List Scroll Box */}
                <div className="max-h-60 overflow-y-auto space-y-1.5 pr-1 font-mono text-xs">
                  {filteredCountries.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => handleSelectCountry(c)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all text-left cursor-pointer ${
                        selectedCountry.code === c.code
                          ? "bg-cyan-500/20 border-cyan-400 text-white font-bold"
                          : "bg-white/[0.03] hover:bg-white/[0.08] border-white/10 text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{c.flag}</span>
                        <span className="font-sans font-medium text-sm">{c.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-cyan-300 font-mono">
                          {c.currency}
                        </span>
                        {selectedCountry.code === c.code && <Check size={14} className="text-[#00D4FF]" />}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 5: LANGUAGE SELECTION (FOR PAKISTAN ONLY) */}
            {step === 5 && (
              <motion.div
                key="step5-language"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">STEP 5 OF 6</span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white">Choose Your Language</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Select how you would like to view tool details, features &amp; ordering instructions.
                  </p>
                </div>

                {/* 2 Options Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Roman Urdu Card */}
                  <div
                    onClick={() => setSelectedLanguage("ro_urdu")}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer text-left space-y-2 relative overflow-hidden ${
                      selectedLanguage === "ro_urdu"
                        ? "bg-purple-500/20 border-[#7B61FF] shadow-[0_0_25px_rgba(123,97,255,0.3)]"
                        : "bg-white/[0.03] hover:bg-white/[0.08] border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">🇵🇰</span>
                      {selectedLanguage === "ro_urdu" && <CheckCircle2 size={18} className="text-[#7B61FF]" />}
                    </div>
                    <h4 className="font-display font-bold text-lg text-white">Roman Urdu</h4>
                    <p className="text-[11px] text-slate-300 font-body leading-relaxed">
                      "ChatGPT Plus foran deliver hoga. 100% asli access. Instant 24/7 WhatsApp support. Abhi order karein."
                    </p>
                  </div>

                  {/* English Card */}
                  <div
                    onClick={() => setSelectedLanguage("en")}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer text-left space-y-2 relative overflow-hidden ${
                      selectedLanguage === "en"
                        ? "bg-cyan-500/20 border-[#00D4FF] shadow-[0_0_25px_rgba(0,214,255,0.3)]"
                        : "bg-white/[0.03] hover:bg-white/[0.08] border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">🇺🇸</span>
                      {selectedLanguage === "en" && <CheckCircle2 size={18} className="text-[#00D4FF]" />}
                    </div>
                    <h4 className="font-display font-bold text-lg text-white">English</h4>
                    <p className="text-[11px] text-slate-300 font-body leading-relaxed">
                      "Instant delivery. Premium AI Tools &amp; Software Licenses. Worldwide WhatsApp &amp; Email Support."
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setStep(6)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#E056FD] text-black font-black text-sm uppercase tracking-wider hover:opacity-95 transition-all shadow-[0_0_25px_rgba(0,214,255,0.4)] active:scale-95 cursor-pointer flex items-center justify-center gap-2 mx-auto"
                >
                  <span>Continue to Summary</span>
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            )}

            {/* STEP 6: CONFIRMATION SCREEN */}
            {step === 6 && (
              <motion.div
                key="step6-confirmation"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-6"
              >
                {/* Animated Green Checkmark Badge */}
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-[#22C55E] mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                  <CheckCircle2 size={36} />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-[#22C55E] uppercase tracking-widest">SETUP COMPLETED</span>
                  <h3 className="font-display font-black text-3xl text-white">Everything is Ready!</h3>
                  <p className="text-xs text-slate-300">Your marketplace preferences have been initialized &amp; saved.</p>
                </div>

                {/* Summary Box */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-left font-mono space-y-2.5 max-w-md mx-auto text-xs">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Country:</span>
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <span>{selectedCountry.flag}</span>
                      <span>{selectedCountry.name}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Currency Strategy:</span>
                    <span className="font-bold text-[#00D4FF]">{selectedCountry.currency}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Selected Language:</span>
                    <span className="font-bold text-[#7B61FF]">
                      {selectedLanguage === "ro_urdu" ? "Roman Urdu 🇵🇰" : "English 🇺🇸"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Payment Gateway:</span>
                    <span className="font-bold text-emerald-400">
                      {selectedCountry.code === "PK" ? "JazzCash / EasyPaisa / Bank" : "Stripe / Visa / Apple Pay"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={finishOnboarding}
                  className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#E056FD] text-black font-black text-sm uppercase tracking-wider hover:opacity-95 transition-all shadow-[0_0_30px_rgba(0,214,255,0.5)] active:scale-95 cursor-pointer flex items-center justify-center gap-2 mx-auto"
                >
                  <span>Enter Marketplace →</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
