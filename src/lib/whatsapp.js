import { WHATSAPP_NUMBER } from "@/data/products";

export { WHATSAPP_NUMBER };

export function buildWhatsAppURL(productName, duration, price) {
  const message = encodeURIComponent(
    `Hello PrimeStack AI! 👋\n\nI want to purchase:\n\n` +
      `🛒 *${productName}*\n` +
      `⏳ Duration: ${duration}\n` +
      `💰 Price: ${price}\n\n` +
      `Please guide me through the process. Thank you!`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function openWhatsApp(productName, duration, price) {
  const url = buildWhatsAppURL(productName, duration, price);
  window.open(url, "_blank");
}

export const WHATSAPP_GENERAL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello PrimeStack AI! 👋 I'd like to know more about your premium AI tools and services."
)}`;