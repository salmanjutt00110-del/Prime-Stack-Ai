import { WHATSAPP_NUMBER } from "@/data/products";

export { WHATSAPP_NUMBER };

export function buildWhatsAppURL(productName, duration, price) {
  const message = encodeURIComponent(
    `Hello Prime Tools Hub! 👋\n\nI want to purchase:\n\n` +
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

export function openBulkWhatsApp(productCount = "5+", note = "") {
  const msg = encodeURIComponent(
    `Hello Prime Tools Hub! 👋\n\n🎉 *Bulk Purchase Inquiry*\n\n` +
      `I want to buy *${productCount} products* and receive the special bulk discount.\n` +
      (note ? `Note: ${note}\n\n` : "") +
      `Please provide a custom quotation. Thank you!`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
}

export function openChatGPTPlusOfferWhatsApp(planName, price, warranty) {
  const msg = encodeURIComponent(
    `Hello Prime Tools Hub! 👋\n\n🔥 *ChatGPT Plus Special Offer Order*\n\n` +
      `Plan: *${planName}*\n` +
      `Warranty: *${warranty}*\n` +
      `Price: *${price}*\n\n` +
      `Please guide me with the instant activation. Thank you!`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
}

export const WHATSAPP_GENERAL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Prime Tools Hub! 👋 I'd like to know more about your premium AI tools and services on PrimeTools.store."
)}`;