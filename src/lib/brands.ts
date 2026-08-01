export interface Brand {
  slug: string;
  name: string;
  origin: string;
  story: string;
  heroProduct: string;
  metaTitle: string;
  metaDescription: string;
  productSlugs: string[];
  tags: string[];
}

export const brands: Brand[] = [
  {
    slug: "elfbar",
    name: "Elfbar",
    origin: "China",
    story: "Elfbar is the world's best-selling disposable vape brand, known for consistent flavour delivery and long puff counts. The Raya series is their flagship line for the Indian market.",
    heroProduct: "elfbar-raya-d1",
    metaTitle: "Elfbar Vapes in Bangalore — Raya D1, D3, Ice King | VapeBangalore.com",
    metaDescription: "Buy original Elfbar vapes in Bangalore. Raya D1, Raya D3, Ice King 30K and more. 30-45 min delivery. 100% authentic. Order on WhatsApp now.",
    productSlugs: ["elfbar-raya-d1", "elfbar-raya-d3", "elfbar-ice-king"],
    tags: ["Disposable", "Bestseller", "Most Popular"],
  },
  {
    slug: "lost-mary",
    name: "Lost Mary",
    origin: "China",
    story: "Lost Mary is Elfbar's premium sister brand, designed for vapers who want bolder flavours and higher puff counts. The MO and OS series dominate the Bangalore market.",
    heroProduct: "lost-mary-mo10000",
    metaTitle: "Lost Mary Vapes in Bangalore — MO10000, OS5000 | VapeBangalore.com",
    metaDescription: "Buy original Lost Mary vapes in Bangalore. MO10000, OS5000 and more. 30-45 min delivery. 100% authentic. Order on WhatsApp now.",
    productSlugs: ["lost-mary-mo10000"],
    tags: ["Disposable", "Premium", "Bold Flavours"],
  },
  {
    slug: "caliburn",
    name: "Caliburn",
    origin: "China",
    story: "Caliburn by Uwell is the gold standard for pod devices in India. The G4 and G5 series offer refillable pods, longer battery life and a premium vaping experience over disposables.",
    heroProduct: "caliburn-g4",
    metaTitle: "Caliburn Pod Device in Bangalore — G4, G4 Pro, G5 | VapeBangalore.com",
    metaDescription: "Buy original Caliburn pod kits in Bangalore. G4, G4 Pro, G5 Lite and compatible pods. 30-45 min delivery. 100% authentic. Order on WhatsApp.",
    productSlugs: ["caliburn-g4"],
    tags: ["Pod Device", "Refillable", "Long Battery"],
  },
  {
    slug: "zyn",
    name: "ZYN",
    origin: "Sweden",
    story: "ZYN is the world's leading tobacco-free nicotine pouch brand from Swedish Match. No vaping, no smoke — just discreet nicotine satisfaction. Available in Cool Mint, Citrus, Spearmint and more.",
    heroProduct: "zyn-cool-mint",
    metaTitle: "ZYN Nicotine Pouches in Bangalore — Cool Mint, Citrus | VapeBangalore.com",
    metaDescription: "Buy ZYN nicotine pouches in Bangalore. Cool Mint, Citrus, Spearmint. Tobacco-free, smoke-free. 30-45 min delivery. Order on WhatsApp now.",
    productSlugs: ["zyn-cool-mint"],
    tags: ["Nicotine Pouches", "Tobacco-Free", "Smoke-Free"],
  },
  {
    slug: "nasty",
    name: "Nasty",
    origin: "Malaysia",
    story: "Nasty Juice is Malaysia's most awarded e-liquid brand. Known for tropical fruit blends that perfectly suit the Indian palate — Cushman mango is a Bangalore favourite.",
    heroProduct: "nasty-cushman",
    metaTitle: "Nasty Juice E-Liquids in Bangalore — Cushman, Slow Blow | VapeBangalore.com",
    metaDescription: "Buy Nasty Juice e-liquids in Bangalore. Cushman Mango, Slow Blow and more. 30-45 min delivery. 100% authentic. Order on WhatsApp now.",
    productSlugs: ["nasty-cushman"],
    tags: ["E-Liquid", "Tropical", "Award Winning"],
  },
  {
    slug: "velo",
    name: "Velo",
    origin: "Sweden",
    story: "Velo by BAT is a premium nicotine pouch brand available in Bangalore. A strong alternative to ZYN — tobacco-free, discreet and available in multiple strengths.",
    heroProduct: "velo-freeze",
    metaTitle: "Velo Nicotine Pouches in Bangalore | VapeBangalore.com",
    metaDescription: "Buy Velo nicotine pouches in Bangalore. Tobacco-free, smoke-free nicotine. 30-45 min delivery. Order on WhatsApp now.",
    productSlugs: [],
    tags: ["Nicotine Pouches", "Tobacco-Free"],
  },
  {
    slug: "american-spirit",
    name: "American Spirit",
    origin: "USA",
    story: "Natural American Spirit is the premium rolling tobacco brand known for additive-free, 100% natural tobacco. The yellow and blue pouches are the most popular in Bangalore.",
    heroProduct: "american-spirit-yellow",
    metaTitle: "American Spirit Rolling Tobacco in Bangalore | VapeBangalore.com",
    metaDescription: "Buy Natural American Spirit rolling tobacco in Bangalore. Yellow, Blue, Organic. 30-45 min delivery. Order on WhatsApp now.",
    productSlugs: [],
    tags: ["Tobacco", "Rolling Tobacco", "Additive-Free"],
  },
  {
    slug: "amber-leaf",
    name: "Amber Leaf",
    origin: "UK",
    story: "Amber Leaf is the UK's most popular rolling tobacco, known for its smooth, balanced flavour. Available in Original and Blend variants in Bangalore.",
    heroProduct: "amber-leaf-original",
    metaTitle: "Amber Leaf Rolling Tobacco in Bangalore | VapeBangalore.com",
    metaDescription: "Buy Amber Leaf rolling tobacco in Bangalore. Original and Blend variants. 30-45 min delivery. Order on WhatsApp now.",
    productSlugs: [],
    tags: ["Tobacco", "Rolling Tobacco"],
  },
];

export const BRAND_COUNT = brands.length;

export function getBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
