import { createContext, useContext, useState } from "react";

const CurrencyContext = createContext({
  currency: "PKR",
  setCurrency: () => {},
  toggleCurrency: () => {},
  formatPrice: (priceStr) => priceStr,
  formatUsd: (pkrStr) => "$0",
  formatGbp: (pkrStr) => "£0",
});

export function formatUsdPrice(pkrStr) {
  if (!pkrStr) return "$0";
  const num = parseInt(String(pkrStr).replace(/\D/g, ""), 10);
  if (isNaN(num) || num <= 0) return "$0";
  if (num <= 300) return "$1";
  const usd = Math.ceil(num / 275);
  return `$${usd}`;
}

export function formatGbpPrice(pkrStr) {
  if (!pkrStr) return "£0";
  const num = parseInt(String(pkrStr).replace(/\D/g, ""), 10);
  if (isNaN(num) || num <= 0) return "£0";
  if (num <= 300) return "£1";
  const gbp = Math.ceil(num / 350);
  return `£${gbp}`;
}

export function formatPriceWithCurrency(priceStr, currency) {
  if (!priceStr) return "";
  if (currency === "USD") {
    return formatUsdPrice(priceStr);
  }
  if (currency === "GBP") {
    return formatGbpPrice(priceStr);
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
    if (currency === "PKR") setCurrency("USD");
    else if (currency === "USD") setCurrency("GBP");
    else setCurrency("PKR");
  };

  const formatPrice = (priceStr) => formatPriceWithCurrency(priceStr, currency);

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        toggleCurrency,
        formatPrice,
        formatUsd: formatUsdPrice,
        formatGbp: formatGbpPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
