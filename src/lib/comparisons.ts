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
  products: [ComparisonProduct, ComparisonProduct];
  verdict: string;
  verdictWinner: string;
  intro: string;
}

export const comparisons: Comparison[] = [
  {
    slug: "elfbar-vs-lost-mary",
    title: "Elfbar vs Lost Mary — Which is Better in Bangalore?",
    metaTitle: "Elfbar vs Lost Mary Bangalore — Which Should You Buy? | VapeBangalore.com",
    metaDescription: "Elfbar vs Lost Mary compared for Bangalore vapers. Price, flavours, puff count, battery. Which is the better buy? Full comparison + verdict.",
    intro: "Both Elfbar and Lost Mary dominate Bangalore's vape market. They're made by the same parent company but feel very different. Here's the definitive comparison for Bangalore buyers.",
    verdict: "Elfbar Raya D1 wins for first-time buyers — better price, easier to find, more familiar flavours. Lost Mary MO10000 wins for experienced vapers who want bolder flavour and higher puff count.",
    verdictWinner: "elfbar-raya-d1",
    products: [
      {
        slug: "elfbar-raya-d1",
        name: "Elfbar Raya D1",
        specs: {
          "Puff Count": "7,000",
          "Nicotine": "50mg",
          "Battery": "650mAh",
          "Capacity": "13ml",
          "Charging": "USB-C",
          "Price": "₹1,789",
          "Best For": "First-time buyers",
        },
      },
      {
        slug: "lost-mary-mo10000",
        name: "Lost Mary MO10000",
        specs: {
          "Puff Count": "10,000",
          "Nicotine": "50mg",
          "Battery": "800mAh",
          "Capacity": "18ml",
          "Charging": "USB-C",
          "Price": "₹2,199",
          "Best For": "Experienced vapers",
        },
      },
    ],
  },
  {
    slug: "zyn-vs-velo",
    title: "ZYN vs Velo Nicotine Pouches — Which is Better?",
    metaTitle: "ZYN vs Velo Bangalore — Nicotine Pouch Comparison | VapeBangalore.com",
    metaDescription: "ZYN vs Velo nicotine pouches compared for Bangalore buyers. Strength, flavours, price, experience. Which tobacco-free pouch should you choose?",
    intro: "ZYN and Velo are the two biggest nicotine pouch brands available in Bangalore. Both are tobacco-free and smoke-free. Here's how they compare.",
    verdict: "ZYN Cool Mint is the clear winner for most Bangalore buyers — more consistent strength, better flavour range, and more widely reviewed. Velo is a solid alternative if ZYN is out of stock.",
    verdictWinner: "zyn-cool-mint",
    products: [
      {
        slug: "zyn-cool-mint",
        name: "ZYN Cool Mint",
        specs: {
          "Strength": "6mg / 9mg",
          "Pouches per Can": "15",
          "Tobacco": "Free",
          "Flavours": "Cool Mint, Citrus, Spearmint",
          "Origin": "Sweden",
          "Price": "₹699",
          "Best For": "First-time pouch users",
        },
      },
      {
        slug: "velo-freeze",
        name: "Velo Freeze",
        specs: {
          "Strength": "4mg / 7mg / 10mg",
          "Pouches per Can": "20",
          "Tobacco": "Free",
          "Flavours": "Freeze, Ice Cool, Tropic",
          "Origin": "Sweden",
          "Price": "₹649",
          "Best For": "Higher strength users",
        },
      },
    ],
  },
  {
    slug: "disposable-vs-pod-device",
    title: "Disposable Vape vs Pod Device — What Should You Buy?",
    metaTitle: "Disposable vs Pod Device Bangalore — Which is Better? | VapeBangalore.com",
    metaDescription: "Disposable vape vs pod device compared for Bangalore buyers. Cost, convenience, flavour, long-term value. Which should you choose?",
    intro: "The most common question from new Bangalore vapers — should you start with a disposable or go straight to a pod device? Here's the honest breakdown.",
    verdict: "Start with a disposable (Elfbar Raya D1) to find your flavour preference. Once you know what you like, switch to Caliburn G4 — it costs less per puff and gives better flavour long-term.",
    verdictWinner: "caliburn-g4",
    products: [
      {
        slug: "elfbar-raya-d1",
        name: "Disposable (Elfbar Raya D1)",
        specs: {
          "Upfront Cost": "₹1,789",
          "Cost Per Puff": "~₹0.26",
          "Maintenance": "None — throw away",
          "Flavour Options": "Pre-filled",
          "Battery": "Built-in, non-removable",
          "Best For": "Beginners, travel",
          "Lifespan": "7,000 puffs then done",
        },
      },
      {
        slug: "caliburn-g4",
        name: "Pod Device (Caliburn G4)",
        specs: {
          "Upfront Cost": "₹2,499",
          "Cost Per Puff": "~₹0.10",
          "Maintenance": "Replace pods, charge daily",
          "Flavour Options": "Any nic salt e-liquid",
          "Battery": "Rechargeable, 750mAh",
          "Best For": "Regular vapers",
          "Lifespan": "12+ months",
        },
      },
    ],
  },
  {
    slug: "elfbar-raya-d1-vs-d3",
    title: "Elfbar Raya D1 vs D3 — What's the Difference?",
    metaTitle: "Elfbar Raya D1 vs D3 Bangalore — Full Comparison | VapeBangalore.com",
    metaDescription: "Elfbar Raya D1 vs D3 — puff count, battery, flavours, price compared for Bangalore buyers. Which Raya should you buy?",
    intro: "The Elfbar Raya D1 and D3 are both bestsellers in Bangalore but serve different vapers. Here's exactly what's different and which to buy.",
    verdict: "Raya D1 for casual vapers — lower price, enough puffs for 1-2 weeks. Raya D3 for heavy vapers — more puffs, bigger battery, worth the extra ₹400.",
    verdictWinner: "elfbar-raya-d3",
    products: [
      {
        slug: "elfbar-raya-d1",
        name: "Elfbar Raya D1",
        specs: {
          "Puff Count": "7,000",
          "Battery": "650mAh",
          "Capacity": "13ml",
          "Nicotine": "50mg",
          "Price": "₹1,789",
          "Best For": "Casual vapers",
        },
      },
      {
        slug: "elfbar-raya-d3",
        name: "Elfbar Raya D3",
        specs: {
          "Puff Count": "12,000",
          "Battery": "850mAh",
          "Capacity": "20ml",
          "Nicotine": "50mg",
          "Price": "₹2,199",
          "Best For": "Heavy vapers",
        },
      },
    ],
  },
];

export const COMPARISON_COUNT = comparisons.length;

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
