import { createContext, useContext, useState, useEffect } from "react";

const CurrencyContext = createContext({
  currency: "PKR",
  setCurrency: () => {},
  toggleCurrency: () => {},
  formatPrice: (priceStr) => priceStr,
  formatUsd: (pkrStr) => "$0",
});

export function formatUsdPrice(pkrStr) {
  if (!pkrStr) return "$0";
  const num = parseInt(String(pkrStr).replace(/\D/g, ""), 10);
  if (isNaN(num) || num <= 0) return "$0";
  // Specific requested rule for Canva Pro Edu (Rs. 279): $1 USD
  if (num <= 300) return "$1";
  let usd = Math.ceil(num / 275);
  return `$${usd}`;
}

export function formatPriceWithCurrency(priceStr, currency) {
  if (!priceStr) return "";
  if (currency === "USD") {
    return formatUsdPrice(priceStr);
  }
  return priceStr;
}

export function CurrencyProvider({ children }) {
  const [currency, setCurrencyState] = useState(() => {
    try {
      return localStorage.getItem("prime_currency") || "PKR";
    } catch {
      return "PKR";
    }
  });

  const setCurrency = (c) => {
    setCurrencyState(c);
    try {
      localStorage.setItem("prime_currency", c);
    } catch (e) {
      console.error(e);
    }
  };

  const toggleCurrency = () => {
    setCurrency(currency === "PKR" ? "USD" : "PKR");
  };

  const formatPrice = (priceStr) => formatPriceWithCurrency(priceStr, currency);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, toggleCurrency, formatPrice, formatUsd: formatUsdPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
