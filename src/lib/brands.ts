import { ProductBrand } from "@/lib/products";

export interface Brand {
  slug: string;
  name: ProductBrand;
  tagline: string;
  origin: string;
  story: string;
  heroProduct: string;
  metaTitle: string;
  metaDescription: string;
  color: string;
}

export const brands: Brand[] = [
  {
    slug: "elfbar-bangalore",
    name: "Elfbar",
    tagline: "Bangalore's most ordered vape brand.",
    origin: "China",
    story: "Elfbar is the world's leading disposable vape brand, known for consistent quality, wide flavour selection, and reliable performance. The Raya series dominates Bangalore's vape market — the D1 alone accounts for nearly 40% of all disposable orders in the city.",
    heroProduct: "elfbar-raya-d1",
    color: "#FF5C00",
    metaTitle: "Elfbar Vapes in Bangalore — Raya D1, D3, Ice King, MoonNight | VapeBangalore.com",
    metaDescription: "Buy Elfbar vapes in Bangalore with 30-45 min delivery. Elfbar Raya D1, Raya D3, Ice King 30K, MoonNight 40K, D3 Pro and more. 100% original. Order on WhatsApp.",
  },
  {
    slug: "lost-mary-bangalore",
    name: "Lost Mary",
    tagline: "The flavour king of Bangalore.",
    origin: "China",
    story: "Lost Mary is made by the same company as Elfbar (Elf Bar Ltd) but targets a different segment — premium flavour quality. The MT35000 Turbo with dual mesh coil and turbo mode is Bangalore's top-selling high-capacity disposable, known for delivering consistent, intense flavour from first puff to last.",
    heroProduct: "lost-mary-mt35000",
    color: "#FF2D55",
    metaTitle: "Lost Mary Vapes in Bangalore — MT35000, MO10000 | VapeBangalore.com",
    metaDescription: "Buy Lost Mary vapes in Bangalore with 30-45 min delivery. Lost Mary MT35000 Turbo, MO10000 and more. Best flavour quality in Bangalore. Order on WhatsApp.",
  },
  {
    slug: "caliburn-bangalore",
    name: "Caliburn",
    tagline: "Bangalore's #1 pod device brand.",
    origin: "China",
    story: "Uwell's Caliburn series dominates Bangalore's pod device market. The G4 and G4 Pro are the most popular reusable vapes in the city — chosen by vapers who want the long-term economics of a pod system without sacrificing flavour. Compatible with Elfliq, Pod Salt, and all major nic salt brands.",
    heroProduct: "caliburn-g4",
    color: "#3B82F6",
    metaTitle: "Caliburn Pod Devices in Bangalore — G4, G4 Pro, G5 Lite | VapeBangalore.com",
    metaDescription: "Buy Caliburn pod devices in Bangalore with 30-45 min delivery. Caliburn G4, G4 Pro, G5 Lite, A2 and more. Bangalore's most popular pod system. Order on WhatsApp.",
  },
  {
    slug: "zyn-bangalore",
    name: "ZYN",
    tagline: "Smoke-free nicotine for Bangalore.",
    origin: "USA",
    story: "ZYN by Swedish Match is the world's leading nicotine pouch brand. Tobacco-free, smoke-free, spit-free — just place under the upper lip for 30-60 minutes of clean nicotine. Extremely popular with Bangalore's IT professionals and anyone who needs discreet nicotine in offices, meetings, or public spaces.",
    heroProduct: "zyn-cool-mint",
    color: "#00D2D3",
    metaTitle: "ZYN Nicotine Pouches in Bangalore — Cool Mint, Citrus | VapeBangalore.com",
    metaDescription: "Buy ZYN nicotine pouches in Bangalore with 30-45 min delivery. ZYN Cool Mint, Citrus, Spearmint. Tobacco-free, smoke-free nicotine. Order on WhatsApp.",
  },
  {
    slug: "nasty-bangalore",
    name: "Nasty",
    tagline: "50,000 puffs. The highest puff count in Bangalore.",
    origin: "Malaysia",
    story: "Nasty Vape from Malaysia is known for bold flavours and ultra-high capacity devices. The Bolt WTF 50K is Bangalore's highest puff count disposable — chosen by heavy vapers who don't want to reorder frequently. If you vape heavily through the day, the WTF 50K lasts 2-4x longer than most alternatives.",
    heroProduct: "nasty-bolt-wtf-50k",
    color: "#8B5CF6",
    metaTitle: "Nasty Vapes in Bangalore — Bolt WTF 50K | VapeBangalore.com",
    metaDescription: "Buy Nasty vapes in Bangalore with 30-45 min delivery. Nasty Bolt WTF 50K — 50,000 puffs, highest puff count disposable in Bangalore. Order on WhatsApp.",
  },
  {
    slug: "iget-bangalore",
    name: "IGET",
    tagline: "Best value high-capacity vape in Bangalore.",
    origin: "Australia",
    story: "IGET is an Australian vape brand known for high-capacity disposables at competitive prices. The Astro B18000 hits the sweet spot — 18,000 puffs, USB-C charging, mesh coil, and excellent flavour quality at a price point below premium competitors. The go-to choice for value-focused vapers in Bangalore.",
    heroProduct: "iget-astro-b18000",
    color: "#10B981",
    metaTitle: "IGET Vapes in Bangalore — Astro B18000 | VapeBangalore.com",
    metaDescription: "Buy IGET vapes in Bangalore with 30-45 min delivery. IGET Astro B18000 — 18,000 puffs, best value high-capacity disposable. Order on WhatsApp.",
  },
  {
    slug: "yuoto-bangalore",
    name: "Yuoto",
    tagline: "Reliable everyday vaping in Bangalore.",
    origin: "China",
    story: "Yuoto is a reliable, mid-range disposable vape brand popular in Bangalore for its consistent quality and accessible pricing. The Beyonder and Thanos models are popular daily drivers for vapers who want dependable performance without premium pricing.",
    heroProduct: "yuoto-beyonder",
    color: "#F59E0B",
    metaTitle: "Yuoto Vapes in Bangalore — Beyonder, Thanos | VapeBangalore.com",
    metaDescription: "Buy Yuoto vapes in Bangalore with 30-45 min delivery. Yuoto Beyonder, Thanos and more. Reliable everyday vaping. Order on WhatsApp.",
  },
  {
    slug: "velo-bangalore",
    name: "Velo",
    tagline: "Smooth nicotine pouches for all-day use.",
    origin: "UK",
    story: "Velo by British American Tobacco is a premium nicotine pouch brand known for its smooth, gradual nicotine release. The Freezing Peppermint is the most popular Velo variant in Bangalore — intense cooling without the sharpness of ZYN. 20 pouches per can makes it the most economical choice per pouch.",
    heroProduct: "velo-freezing-peppermint",
    color: "#06B6D4",
    metaTitle: "Velo Nicotine Pouches in Bangalore — Freezing Peppermint | VapeBangalore.com",
    metaDescription: "Buy Velo nicotine pouches in Bangalore with 30-45 min delivery. Velo Freezing Peppermint and more. Smoke-free nicotine. Order on WhatsApp.",
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
