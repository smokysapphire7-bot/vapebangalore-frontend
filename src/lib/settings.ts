export const SITE = {
  name: "VapeBangalore",
  url: "https://vapebangalore.com",
  tagline: "Your city. Your vape. 30 mins.",
  description: "Buy vapes in Bangalore with 30-45 min delivery. Elfbar, Lost Mary, Caliburn, ZYN, Nasty & more. 100% original products. Discreet delivery across 125+ areas. Order on Telegram or WhatsApp.",
  phone: "+916282878843",
  email: "hello@vapebangalore.com",
  address: {
    city: "Bangalore",
    state: "Karnataka",
    country: "IN",
    region: "IN-KA",
  },
  geo: {
    lat: 12.9716,
    lng: 77.5946,
  },
  openingHours: "Mo-Su 10:00-22:00",
  priceRange: "₹₹",
};

export const TELEGRAM = {
  botUsername: "vapebangalorebot",
  botUrl: "https://t.me/vapebangalorebot",
  channelUrl: "https://t.me/vapebangalore",
  orderLink: (productSlug?: string, flavour?: string) => {
    const base = "https://t.me/vapebangalorebot";
    if (productSlug) {
      const msg = flavour
        ? `I want to order ${productSlug} in ${flavour} flavour`
        : `I want to order ${productSlug}`;
      return `${base}?start=${encodeURIComponent(productSlug)}&text=${encodeURIComponent(msg)}`;
    }
    return `${base}?start=order`;
  },
};

export const WHATSAPP = {
  number: "916282878843",
  orderLink: (productName?: string, flavour?: string) => {
    const base = "https://wa.me/916282878843";
    if (productName) {
      const msg = flavour
        ? `Hi VapeBangalore, I want to order ${productName} in ${flavour} flavour.`
        : `Hi VapeBangalore, I want to order ${productName}.`;
      return `${base}?text=${encodeURIComponent(msg)}`;
    }
    return `${base}?text=${encodeURIComponent("Hi VapeBangalore, I want to place an order.")}`;
  },
};

export const DELIVERY = {
  time: "30-45 min",
  promise: "30-45 minute delivery",
  lateNight: "Late night delivery available",
};

export function isLateNight(): boolean {
  const hour = new Date().getHours();
  return hour >= 22 || hour < 2;
}
