export interface ComparisonProduct {
  slug: string;
  name: string;
  specs: Record<string, string>;
}

export interface Comparison {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  product1: ComparisonProduct;
  product2: ComparisonProduct;
  verdict: string;
  publishedAt: string;
}

export const comparisons: Comparison[] = [
  {
    slug: "elfbar-vs-lost-mary-bangalore",
    title: "Elfbar vs Lost Mary Bangalore — Which is Better?",
    metaTitle: "Elfbar vs Lost Mary Bangalore | Full Comparison | VapeBangalore.com",
    metaDescription: "Elfbar vs Lost Mary in Bangalore — full comparison of flavour, puff count, price, and battery. Which should you buy? Honest review.",
    publishedAt: "2025-05-01",
    verdict: "Lost Mary wins on flavour quality. Elfbar wins on variety and price. Choose Lost Mary MT35000 for the best taste, Elfbar Raya D1 for everyday value.",
    product1: {
      slug: "elfbar-raya-d1",
      name: "Elfbar Raya D1",
      specs: { "Puff Count": "7,000", "Nicotine": "50mg", "Price": "₹1,789", "Charging": "USB-C", "Battery": "650mAh", "Flavours": "8+" },
    },
    product2: {
      slug: "lost-mary-mo10000",
      name: "Lost Mary MO10000",
      specs: { "Puff Count": "10,000", "Nicotine": "50mg", "Price": "₹2,199", "Charging": "USB-C", "Battery": "850mAh", "Flavours": "5+" },
    },
  },
  {
    slug: "disposable-vs-pod-device-bangalore",
    title: "Disposable Vape vs Pod Device in Bangalore — Which to Buy?",
    metaTitle: "Disposable vs Pod Device Bangalore | VapeBangalore.com",
    metaDescription: "Disposable vape vs pod device in Bangalore — cost, convenience, flavour, and long-term value. Which is right for you?",
    publishedAt: "2025-05-05",
    verdict: "Disposables win for convenience and first-timers. Pod devices win for long-term cost and flavour customisation. If you vape daily, a Caliburn G4 pays for itself in 2-3 months.",
    product1: {
      slug: "elfbar-raya-d1",
      name: "Elfbar Raya D1 (Disposable)",
      specs: { "Type": "Disposable", "Puff Count": "7,000", "Price": "₹1,789", "Maintenance": "Zero", "Setup": "Open and vape", "Long-term cost": "High" },
    },
    product2: {
      slug: "caliburn-g4",
      name: "Caliburn G4 (Pod Device)",
      specs: { "Type": "Reusable", "Puff Count": "Unlimited", "Price": "₹6,899 + pods", "Maintenance": "Replace pods", "Setup": "Fill pod", "Long-term cost": "Low" },
    },
  },
  {
    slug: "zyn-vs-velo-bangalore",
    title: "ZYN vs Velo Nicotine Pouches in Bangalore",
    metaTitle: "ZYN vs Velo Bangalore | Nicotine Pouches Comparison | VapeBangalore.com",
    metaDescription: "ZYN vs Velo nicotine pouches in Bangalore — flavour, strength, price, and which is better for you. Full honest comparison.",
    publishedAt: "2025-05-10",
    verdict: "ZYN wins for flavour intensity and faster nicotine release. Velo wins for softer experience and more pouches per can. Start with ZYN Cool Mint 3mg if you're new.",
    product1: {
      slug: "zyn-cool-mint",
      name: "ZYN Cool Mint",
      specs: { "Strength": "3mg / 6mg", "Pouches per can": "15", "Price": "₹999", "Flavour": "Cool Mint", "Release": "Fast", "Brand origin": "USA" },
    },
    product2: {
      slug: "velo-freezing-peppermint",
      name: "Velo Freezing Peppermint",
      specs: { "Strength": "4mg / 6mg", "Pouches per can": "20", "Price": "₹999", "Flavour": "Peppermint", "Release": "Gradual", "Brand origin": "UK" },
    },
  },
  {
    slug: "elfbar-raya-d1-vs-raya-d3-bangalore",
    title: "Elfbar Raya D1 vs Raya D3 Bangalore — Which to Buy?",
    metaTitle: "Elfbar Raya D1 vs D3 Bangalore | VapeBangalore.com",
    metaDescription: "Elfbar Raya D1 vs Raya D3 in Bangalore — puff count, price, battery. Which Elfbar Raya should you buy?",
    publishedAt: "2025-05-15",
    verdict: "Raya D1 for everyday carry and value. Raya D3 if you want more puffs and don't mind paying extra. Both are excellent — D1 is Bangalore's bestseller for good reason.",
    product1: {
      slug: "elfbar-raya-d1",
      name: "Elfbar Raya D1",
      specs: { "Puff Count": "7,000", "Price": "₹1,789", "Battery": "650mAh", "E-liquid": "13ml", "Best for": "Daily carry" },
    },
    product2: {
      slug: "elfbar-raya-d3",
      name: "Elfbar Raya D3",
      specs: { "Puff Count": "12,000", "Price": "₹2,499", "Battery": "850mAh", "E-liquid": "20ml", "Best for": "Heavy vapers" },
    },
  },
  {
    slug: "caliburn-g4-vs-g4-pro-bangalore",
    title: "Caliburn G4 vs G4 Pro in Bangalore — Which Pod Device?",
    metaTitle: "Caliburn G4 vs G4 Pro Bangalore | VapeBangalore.com",
    metaDescription: "Caliburn G4 vs G4 Pro in Bangalore — specs, price difference, and which is worth buying. Full comparison.",
    publishedAt: "2025-05-20",
    verdict: "G4 for most vapers — better value, same core experience. G4 Pro for those who want OLED display and slightly more power. The ₹300 difference rarely justifies the Pro unless you specifically want the display.",
    product1: {
      slug: "caliburn-g4",
      name: "Caliburn G4",
      specs: { "Battery": "950mAh", "Output": "26W", "Display": "None", "Price": "₹6,899", "Pod capacity": "3ml" },
    },
    product2: {
      slug: "caliburn-g4-pro",
      name: "Caliburn G4 Pro",
      specs: { "Battery": "1050mAh", "Output": "30W", "Display": "OLED", "Price": "₹7,199", "Pod capacity": "3ml" },
    },
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
