import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { ALL_PRODUCTS, WHATSAPP_NUMBER } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

// Comprehensive Store Knowledge Base for the AI Chatbot
const KNOWLEDGE = {
  products: ALL_PRODUCTS,
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  paymentMethods: "JazzCash, EasyPaisa, Bank Transfer, and USDT/Crypto",
  deliveryTime: "5 to 30 minutes after payment confirmation",
  supportHours: "9:00 AM – 11:00 PM (PKT)",
  phone: "+92-370-7020580",
};

const INITIAL_MESSAGES = [
  {
    sender: "bot",
    text: "Salam! 👋 Welcome to Prime Tools Hub AI Assistant. Main aapki kya madad kar sakta hun? Ask me about tool prices, warranties, delivery speed, or payment methods!",
  },
];

const SUGGESTIONS = [
  "💰 ChatGPT Plus price kya hai?",
  "⚡ Delivery kitne minutes mein milti hai?",
  "💳 Payment methods kon kon se hain?",
  "⭐ Gemini Pro offer details?",
  "🛡️ Warranty policy kya hai?",
];

function generateResponse(userMsg) {
  const query = userMsg.toLowerCase().trim();

  // ChatGPT queries
  if (query.includes("chatgpt") || query.includes("gpt")) {
    return {
      text: "🤖 **ChatGPT Plus Details:**\n\n• **ChatGPT Plus Premium (1 Month Warranty):** Rs. 2,199\n• **ChatGPT Plus (10 Days Warranty):** Rs. 1,599\n• **ChatGPT Go (3 Months Coupon):** Rs. 850\n\nFull official GPT-4o access, 2FA setup included & instant delivery!",
      ctaText: "Order ChatGPT on WhatsApp",
      ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I want to order ChatGPT Plus.")}`,
    };
  }

  // Gemini queries
  if (query.includes("gemini") || query.includes("google ai")) {
    return {
      text: "⚡ **Google Gemini Pro 18 Months Flash Offer:**\n\n• Price: **Rs. 1,099** (Regular Rs. 1,599)\n• 5TB Cloud Storage\n• Advanced AI Image & Veo Video Generation\n• Activated directly on your personal Gmail account!",
      ctaText: "Get Gemini Deal on WhatsApp",
      ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I want to get the Gemini Pro 18 Months offer.")}`,
    };
  }

  // Canva queries
  if (query.includes("canva")) {
    return {
      text: "🎨 **Canva Pro Options:**\n\n• **Canva Pro Edu (3 Years):** Rs. 279\n• **Canva Admin Panel (499 Members):** Rs. 5,699\n\nIncludes Canva AI, Magic Design, Magic Write & Background Remover!",
      ctaText: "Order Canva on WhatsApp",
      ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I want to order Canva Pro.")}`,
    };
  }

  // CapCut queries
  if (query.includes("capcut")) {
    return {
      text: "✂️ **CapCut Pro Options:**\n\n• **CapCut Pro 1 Month:** Rs. 1,139\n• **CapCut Admin Team 7 Seats:** Rs. 4,749\n\nAll Pro features, 4K export without watermark & AI tools!",
      ctaText: "Order CapCut on WhatsApp",
      ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I want to order CapCut Pro.")}`,
    };
  }

  // Veo queries
  if (query.includes("veo") || query.includes("video ai")) {
    return {
      text: "🚀 **Google VEO 3.1 Ultra:**\n\n• Price: **Rs. 2,999** (20 Days Warranty)\n• Unlimited Video & Image Generation\n• Direct Gmail activation, no extension required!",
      ctaText: "Order Veo 3 on WhatsApp",
      ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I want to order Google Veo 3.1 Ultra.")}`,
    };
  }

  // Surfshark / VPN queries
  if (query.includes("surfshark") || query.includes("vpn") || query.includes("nord")) {
    return {
      text: "🛡️ **VPN Subscriptions:**\n\n• **NordVPN (3 Months):** Rs. 1,599 (In Stock)\n• **Surfshark VPN:** Currently Out of Stock ❌\n\nHigh-speed global servers with encrypted privacy!",
      ctaText: "Inquire VPN on WhatsApp",
      ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I have a question about VPN subscriptions.")}`,
    };
  }

  // Payment queries
  if (query.includes("payment") || query.includes("pay") || query.includes("jazzcash") || query.includes("easypaisa") || query.includes("paise")) {
    return {
      text: `💳 **Payment Methods Accepted:**\n\n1. **JazzCash**\n2. **EasyPaisa**\n3. **Bank Account Transfer**\n4. **USDT / Crypto**\n\nPayment details are shared directly on WhatsApp when you place an order!`,
      ctaText: "Chat on WhatsApp",
      ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! Please share payment details.")}`,
    };
  }

  // Delivery time queries
  if (query.includes("delivery") || query.includes("time") || query.includes("kitne minute") || query.includes("kab milega")) {
    return {
      text: `⚡ **Delivery Speed:**\n\nZyada tar orders **5 se 30 minute** ke andar deliver ho jate hain payment confirmation ke baad. Dedicated 30-day support included!`,
      ctaText: "Order Now on WhatsApp",
      ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I want to place an instant order.")}`,
    };
  }

  // Trust / Warranty queries
  if (query.includes("trust") || query.includes("warranty") || query.includes("real") || query.includes("fraud") || query.includes("guarantee")) {
    return {
      text: `🛡️ **Why Trust Prime Tools Hub?**\n\n• **2+ Years Active** in Pakistan\n• **1,200+ Orders** completed\n• **4.9/5 Rating** based on customer reviews\n• **Full Free Replacement Warranty** if any issue arises!`,
      ctaText: "Talk to Us on WhatsApp",
      ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I want to verify an order.")}`,
    };
  }

  // General default response listing popular products
  return {
    text: `🤖 **Prime Tools Hub Quick Catalog:**\n\n• **ChatGPT Plus Premium (1m Warranty):** Rs. 2,199\n• **ChatGPT Plus (10d Warranty):** Rs. 1,599\n• **Google Gemini Pro 18m:** Rs. 1,099\n• **Canva Pro 3 Years:** Rs. 279\n• **CapCut Pro:** Rs. 1,139\n• **Google Veo 3:** Rs. 2,999\n\nPayment via **JazzCash, EasyPaisa, Bank, USDT**. Delivery in 5–30 mins!`,
    ctaText: "Order via WhatsApp →",
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Prime Tools Hub! I want to place an order.")}`,
  };
}

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const newMessages = [...messages, { sender: "user", text: query }];
    setMessages(newMessages);
    if (!textToSend) setInput("");

    // Simulate AI thinking response delay
    setTimeout(() => {
      const responseObj = generateResponse(query);
      setMessages((prev) => [...prev, { sender: "bot", ...responseObj }]);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-auto">
      
      {/* FLOATING TRIGGER BUTTON */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-extrabold text-sm shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:scale-105 transition-all cursor-pointer border border-white/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ff88]" />
            </span>
            <Bot size={20} className="text-cyan-300 group-hover:rotate-12 transition-transform" />
            <span className="font-display">AI Assistant</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* CHATBOT WINDOW MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="w-[340px] sm:w-[380px] h-[520px] rounded-3xl bg-[#0d1117] border border-cyan-500/30 shadow-2xl flex flex-col overflow-hidden font-body text-slate-200"
          >
            {/* HEADER */}
            <div className="p-4 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 border border-cyan-400/50 flex items-center justify-center text-white shadow-md">
                  <Bot size={22} className="text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-display font-black text-sm text-white flex items-center gap-1.5">
                    Prime AI Assistant
                    <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold">24/7 Store Instant Helper</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* MESSAGES BODY */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs no-scrollbar bg-[#050508]/80">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-none shadow-md"
                        : "bg-slate-900/90 border border-white/10 text-slate-200 rounded-bl-none shadow-md"
                    }`}
                  >
                    {msg.text}

                    {/* Optional CTA Button in Bot Response */}
                    {msg.ctaText && msg.ctaLink && (
                      <div className="mt-3 pt-2 border-t border-white/15">
                        <a
                          href={msg.ctaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25D366] text-slate-950 font-black text-[11px] hover:bg-[#20bd5a] transition-transform hover:scale-105 shadow-md"
                        >
                          <MessageCircle size={13} className="fill-slate-950" />
                          <span>{msg.ctaText}</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* SUGGESTION CHIPS */}
            <div className="px-3 py-2 bg-slate-900/80 border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
              {SUGGESTIONS.map((sugg, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(sugg)}
                  className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-[10px] font-bold text-slate-300 whitespace-nowrap shrink-0 transition-colors cursor-pointer"
                >
                  {sugg}
                </button>
              ))}
            </div>

            {/* INPUT FORM */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-slate-900 border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about ChatGPT, prices, JazzCash..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-cyan-400 transition-all font-body"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md transition-transform active:scale-95 cursor-pointer"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
