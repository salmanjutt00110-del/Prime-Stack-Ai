import { createContext, useContext, useState, useEffect } from "react";

const CurrencyContext = createContext({
  currency: "PKR",
  country: "PK",
  countryFlag: "🇵🇰",
  countryName: "Pakistan",
  setCurrency: () => {},
  setCountry: () => {},
  setUserLocation: () => {},
  toggleCurrency: () => {},
  formatPrice: (priceStr) => priceStr,
  formatUsd: (pkrStr) => "$0",
  formatGbp: (pkrStr) => "£0",
});

export function formatUsdPrice(pkrStr) {
  if (!pkrStr) return "$0";
  const num = parseInt(String(pkrStr).replace(/\D/g, ""), 10);
  if (isNaN(num) || num <= 0) return "$0";
  
  // Premium International Pricing (+$1–$2 international support & tax premium)
  if (num <= 350) return "$2.99";   // Rs. 279 / 329 -> $2.99
  if (num <= 850) return "$4.99";   // Rs. 799 -> $4.99
  if (num <= 1250) return "$6.99";  // Rs. 1,139 -> $6.99
  if (num <= 1650) return "$8.99";  // Rs. 1,599 -> $8.99
  if (num <= 1900) return "$9.99";  // Rs. 1,799 -> $9.99
  if (num <= 2300) return "$11.99"; // Rs. 2,199 -> $11.99
  if (num <= 3100) return "$14.99"; // Rs. 2,999 -> $14.99
  if (num <= 3500) return "$15.99"; // Rs. 3,320 -> $15.99
  if (num <= 4200) return "$16.99"; // Rs. 3,799 / 3,999 -> $16.99
  if (num <= 8500) return "$34.99"; // Rs. 8,250 -> $34.99
  if (num <= 9000) return "$36.99"; // Rs. 8,549 -> $36.99

  const baseUsd = Math.ceil(num / 275) + 1.99;
  return `$${baseUsd.toFixed(2)}`;
}

export function formatGbpPrice(pkrStr) {
  if (!pkrStr) return "£0";
  const num = parseInt(String(pkrStr).replace(/\D/g, ""), 10);
  if (isNaN(num) || num <= 0) return "£0";
  if (num <= 350) return "£2.49";
  if (num <= 850) return "£3.99";
  if (num <= 1800) return "£7.99";
  const gbp = Math.ceil(num / 340) + 1.49;
  return `£${gbp.toFixed(2)}`;
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

  const [country, setCountryCode] = useState(() => {
    try {
      return localStorage.getItem("prime_country") || "PK";
    } catch {
      return "PK";
    }
  });

  const [countryName, setCountryNameState] = useState(() => {
    try {
      return localStorage.getItem("prime_country_name") || "Pakistan";
    } catch {
      return "Pakistan";
    }
  });

  const [countryFlag, setCountryFlagState] = useState(() => {
    try {
      return localStorage.getItem("prime_country_flag") || "🇵🇰";
    } catch {
      return "🇵🇰";
    }
  });

  const setCurrency = (c) => {
    setCurrencyState(c);
    try {
      localStorage.setItem("prime_currency", c);
      document.cookie = `prime_currency=${c}; max-age=31536000; path=/`;
    } catch (e) {
      console.error(e);
    }
  };

  const setUserLocation = ({ code, name, flag, curr }) => {
    if (code) {
      setCountryCode(code);
      localStorage.setItem("prime_country", code);
      document.cookie = `prime_country=${code}; max-age=31536000; path=/`;
    }
    if (name) {
      setCountryNameState(name);
      localStorage.setItem("prime_country_name", name);
      document.cookie = `prime_country_name=${encodeURIComponent(name)}; max-age=31536000; path=/`;
    }
    if (flag) {
      setCountryFlagState(flag);
      localStorage.setItem("prime_country_flag", flag);
      document.cookie = `prime_country_flag=${encodeURIComponent(flag)}; max-age=31536000; path=/`;
    }
    if (curr) {
      setCurrency(curr);
    } else if (code === "PK") {
      setCurrency("PKR");
    } else {
      setCurrency("USD");
    }
  };

  const setCountry = (code, name, flag) => {
    const defaultCurr = code === "PK" ? "PKR" : "USD";
    setUserLocation({ code, name, flag, curr: defaultCurr });
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
        country,
        countryFlag,
        countryName,
        setCurrency,
        setCountry,
        setUserLocation,
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

