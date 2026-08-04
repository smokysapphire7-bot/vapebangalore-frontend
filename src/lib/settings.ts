export const SITE = {
  name: "VapeBangalore",
  url: "https://vapebangalore.com",
  tagline: "Your city. Your vape. 30 mins.",
  description: "Buy vapes in Bangalore with 30-45 min delivery. Elfbar, Lost Mary, Caliburn, ZYN, Nasty and more. 100% original products. Discreet delivery across 125+ areas. Order on WhatsApp.",
  phone: "+919074445985",
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

export const WHATSAPP = {
  number: "919074445985",
  url: "https://wa.me/919074445985",
  orderLink: (productName?: string, flavour?: string) => {
    const base = "https://wa.me/919074445985";
    const greetings = ["Hi", "Hey", "Hello", "Hi there"];
    const names = ["VapeBangalore", "team", "there"];
    const confirmPhrases = [
      "Please confirm availability and delivery time.",
      "Can you confirm if this is available?",
      "Let me know the availability and ETA.",
      "Please check availability and confirm.",
      "How soon can this be delivered?",
    ];
    const listPhrases = [
      "I want to place an order. Please share what\'s available.",
      "Can I see your current product list?",
      "I\'d like to order something. What do you have available?",
      "Please share your menu/product list.",
    ];
    const r = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
    const greeting = `${r(greetings)} ${r(names)}`;
    const confirm = r(confirmPhrases);
    if (productName) {
      const msg = flavour
        ? `${greeting}, I want to order ${productName} — ${flavour} flavour. ${confirm}`
        : `${greeting}, I want to order ${productName}. ${confirm}`;
      return `${base}?text=${encodeURIComponent(msg)}`;
    }
    return `${base}?text=${encodeURIComponent(`${greeting}, ${r(listPhrases)}`)}`;
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
