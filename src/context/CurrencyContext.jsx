import { createContext, useContext, useState, useEffect } from "react";

const CurrencyContext = createContext({
  currency: "USD",
  country: "US",
  countryFlag: "🌐",
  countryName: "Global (USD)",
  setCurrency: () => {},
  setCountry: () => {},
  setUserLocation: () => {},
  toggleCurrency: () => {},
  formatPrice: (priceStr) => (priceStr ? (String(priceStr).trim().startsWith("$") ? priceStr : `$${priceStr}`) : "$0"),
  formatUsd: (priceStr) => "$0",
  formatGbp: (priceStr) => "$0",
});

export function formatUsdPrice(priceStr) {
  if (!priceStr) return "$0";
  const str = String(priceStr).trim();
  
  // If already formatted in USD ($)
  if (str.startsWith("$")) {
    return str;
  }
  
  // Extract digits for any legacy PKR string
  const num = parseInt(str.replace(/\D/g, ""), 10);
  if (isNaN(num) || num <= 0) return "$0";
  
  // User custom conversion formula (slightly higher than raw PKR, e.g. 600 PKR -> $3)
  if (num <= 350) return "$2";      // Rs. 279 / 329 -> $2
  if (num <= 550) return "$3";      // Rs. 499 -> $3
  if (num <= 900) return "$4";      // Rs. 799 / 850 -> $4
  if (num <= 1250) return "$5";     // Rs. 1,139 / 1,199 -> $5
  if (num <= 1700) return "$7";     // Rs. 1,599 -> $7
  if (num <= 2300) return "$10";    // Rs. 2,199 -> $10
  if (num <= 3200) return "$12";    // Rs. 2,999 -> $12
  if (num <= 4500) return "$16";    // Rs. 3,320 / 3,999 -> $16
  if (num <= 6000) return "$22";    // Rs. 4,749 / 5,699 -> $22
  if (num <= 9000) return "$32";    // Rs. 8,250 / 8,549 -> $32

  const baseUsd = Math.ceil(num / 250);
  return `$${baseUsd}`;
}

export function formatGbpPrice(priceStr) {
  return formatUsdPrice(priceStr);
}

export function formatPriceWithCurrency(priceStr) {
  return formatUsdPrice(priceStr);
}

export function CurrencyProvider({ children }) {
  const [currency] = useState("USD");
  const [country] = useState("US");
  const [countryName] = useState("Global (USD)");
  const [countryFlag] = useState("🌐");

  useEffect(() => {
    try {
      localStorage.setItem("prime_currency", "USD");
      document.cookie = `prime_currency=USD; max-age=31536000; path=/`;
    } catch (e) {
      console.error(e);
    }
  }, []);

  const setCurrency = () => {};
  const setUserLocation = () => {};
  const setCountry = () => {};
  const toggleCurrency = () => {};

  const formatPrice = (priceStr) => formatUsdPrice(priceStr);

  return (
    <CurrencyContext.Provider
      value={{
        currency: "USD",
        country: "US",
        countryFlag: "🌐",
        countryName: "Global (USD)",
        setCurrency,
        setCountry,
        setUserLocation,
        toggleCurrency,
        formatPrice,
        formatUsd: formatUsdPrice,
        formatGbp: formatUsdPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}

