export type ProductCategory = "Disposable" | "Pod Device" | "Nicotine Pouches" | "E-Liquid" | "Tobacco";
export type ProductBrand = "Elfbar" | "Lost Mary" | "Caliburn" | "ZYN" | "Nasty" | "IGET" | "Yuoto" | "Velo" | "Pod Salt" | "Amber Leaf" | "Golden Virginia" | "American Spirit" | "Drum";

export interface Product {
  slug: string;
  name: string;
  brand: ProductBrand;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  puffCount?: number;
  nicotine?: string;
  battery?: string;
  charging?: string;
  capacity?: string;
  flavours: { name: string; color: string }[];
  image: string;
  inStock: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  specs: Record<string, string>;
}

export const products: Product[] = [
  // ─── ELFBAR ───────────────────────────────
  {
    slug: "elfbar-raya-d1",
    name: "Elfbar Raya D1",
    brand: "Elfbar",
    category: "Disposable",
    price: 1789,
    puffCount: 7000,
    nicotine: "50mg",
    battery: "650mAh",
    charging: "USB-C",
    capacity: "13ml",
    isBestseller: true,
    inStock: true,
    image: "/products/raya-d1.jpg",
    flavours: [
      { name: "Watermelon Ice", color: "#ff6b9d" },
      { name: "Strawberry Ice", color: "#ff4757" },
      { name: "Mango Ice", color: "#ffa502" },
      { name: "Blueberry Ice", color: "#5352ed" },
      { name: "Passion Fruit", color: "#eccc68" },
      { name: "Peach Ice", color: "#ff6348" },
      { name: "Grape Ice", color: "#7d5fff" },
      { name: "Lychee Ice", color: "#ff6b81" },
    ],
    metaTitle: "Elfbar Raya D1 in Bangalore — 7000 Puffs | Buy Online | VapeBangalore.com",
    metaDescription: "Buy Elfbar Raya D1 in Bangalore with 30-45 min delivery. 7000 puffs, 50mg, USB-C rechargeable. All flavours available. 100% original. Order on Telegram.",
    excerpt: "Bangalore's best-selling disposable vape. 7,000 puffs, mesh coil, USB-C charging.",
    specs: { "Puff Count": "7,000", "Nicotine": "50mg Salt Nic", "Battery": "650mAh", "Charging": "USB-C", "E-liquid": "13ml", "Coil": "Mesh" },
  },
  {
    slug: "elfbar-raya-d3",
    name: "Elfbar Raya D3",
    brand: "Elfbar",
    category: "Disposable",
    price: 2499,
    puffCount: 12000,
    nicotine: "50mg",
    battery: "850mAh",
    charging: "USB-C",
    inStock: true,
    image: "/products/raya-d3.jpg",
    flavours: [
      { name: "Watermelon Ice", color: "#ff6b9d" },
      { name: "Strawberry Ice", color: "#ff4757" },
      { name: "Mango Ice", color: "#ffa502" },
      { name: "Blueberry Ice", color: "#5352ed" },
      { name: "Grape Ice", color: "#7d5fff" },
      { name: "Peach Mango", color: "#ff6348" },
    ],
    metaTitle: "Elfbar Raya D3 Bangalore — 12000 Puffs | VapeBangalore.com",
    metaDescription: "Buy Elfbar Raya D3 in Bangalore. 12,000 puffs, 50mg, fast delivery. Order on Telegram now.",
    excerpt: "12,000 puffs with enhanced mesh coil for richer flavour delivery.",
    specs: { "Puff Count": "12,000", "Nicotine": "50mg Salt Nic", "Battery": "850mAh", "Charging": "USB-C" },
  },
  {
    slug: "elfbar-ice-king-30k",
    name: "Elfbar Ice King 30K",
    brand: "Elfbar",
    category: "Disposable",
    price: 2499,
    puffCount: 30000,
    nicotine: "50mg",
    charging: "USB-C",
    inStock: true,
    image: "/products/ice-king.jpg",
    flavours: [
      { name: "Watermelon Ice", color: "#ff6b9d" },
      { name: "Strawberry Ice", color: "#ff4757" },
      { name: "Mango Ice", color: "#ffa502" },
      { name: "Blueberry Ice", color: "#5352ed" },
      { name: "Grape Ice", color: "#7d5fff" },
    ],
    metaTitle: "Elfbar Ice King 30K Bangalore — 30000 Puffs | VapeBangalore.com",
    metaDescription: "Buy Elfbar Ice King 30K in Bangalore. 30,000 puffs, 50mg nicotine. Fast delivery. Order on Telegram.",
    excerpt: "30,000 puffs of intense cooling flavour. The longest-lasting Elfbar in Bangalore.",
    specs: { "Puff Count": "30,000", "Nicotine": "50mg Salt Nic", "Charging": "USB-C" },
  },
  {
    slug: "elfbar-moonnight-40k",
    name: "Elfbar MoonNight 40K",
    brand: "Elfbar",
    category: "Disposable",
    price: 3499,
    puffCount: 40000,
    nicotine: "50mg",
    charging: "USB-C",
    inStock: true,
    isNew: true,
    image: "/products/elfbar-moonnight.png",
    flavours: [
      { name: "Watermelon Ice", color: "#ff6b9d" },
      { name: "Strawberry Ice", color: "#ff4757" },
      { name: "Mango Ice", color: "#ffa502" },
      { name: "Blueberry Ice", color: "#5352ed" },
      { name: "Passion Fruit", color: "#eccc68" },
    ],
    metaTitle: "Elfbar MoonNight 40K Bangalore — 40000 Puffs | VapeBangalore.com",
    metaDescription: "Buy Elfbar MoonNight 40K in Bangalore. 40,000 puffs. Fast delivery across all areas. Order on Telegram.",
    excerpt: "40,000 puffs. Elfbar's flagship ultra-high capacity device.",
    specs: { "Puff Count": "40,000", "Nicotine": "50mg Salt Nic", "Charging": "USB-C" },
  },
  {
    slug: "elfbar-d3-pro",
    name: "Elfbar D3 Pro",
    brand: "Elfbar",
    category: "Disposable",
    price: 2849,
    puffCount: 30000,
    nicotine: "50mg",
    charging: "USB-C",
    inStock: true,
    image: "/products/raya-d3.jpg",
    flavours: [
      { name: "Watermelon Ice", color: "#ff6b9d" },
      { name: "Strawberry Ice", color: "#ff4757" },
      { name: "Mango Ice", color: "#ffa502" },
      { name: "Blueberry Ice", color: "#5352ed" },
    ],
    metaTitle: "Elfbar D3 Pro Bangalore — 30000 Puffs | VapeBangalore.com",
    metaDescription: "Buy Elfbar D3 Pro in Bangalore. 30,000 puffs, turbo mode, adjustable airflow. Fast delivery. Order on Telegram.",
    excerpt: "30,000 puffs with turbo mode and adjustable airflow.",
    specs: { "Puff Count": "30,000", "Nicotine": "50mg", "Charging": "USB-C", "Feature": "Turbo Mode" },
  },
  {
    slug: "elfbar-600",
    name: "Elfbar 600",
    brand: "Elfbar",
    category: "Disposable",
    price: 899,
    puffCount: 600,
    nicotine: "20mg",
    inStock: true,
    image: "/products/elfbar-600.jpg",
    flavours: [
      { name: "Watermelon Ice", color: "#ff6b9d" },
      { name: "Strawberry Ice", color: "#ff4757" },
      { name: "Mango Ice", color: "#ffa502" },
      { name: "Blueberry", color: "#5352ed" },
      { name: "Grape", color: "#7d5fff" },
      { name: "Peach Ice", color: "#ff6348" },
    ],
    metaTitle: "Elfbar 600 Bangalore — Buy Online | VapeBangalore.com",
    metaDescription: "Buy Elfbar 600 in Bangalore. 600 puffs, compact, no charging needed. 30-45 min delivery. Order on Telegram.",
    excerpt: "The compact classic. 600 puffs, no charging, perfect for trying out vaping.",
    specs: { "Puff Count": "600", "Nicotine": "20mg", "Type": "Disposable, no charging" },
  },

  // ─── LOST MARY ────────────────────────────
  {
    slug: "lost-mary-mt35000",
    name: "Lost Mary MT35000 Turbo",
    brand: "Lost Mary",
    category: "Disposable",
    price: 2799,
    puffCount: 35000,
    nicotine: "50mg",
    charging: "USB-C",
    isBestseller: true,
    inStock: true,
    image: "/products/lost-mary-mt35000.png",
    flavours: [
      { name: "Strawberry Ice", color: "#ff4757" },
      { name: "Watermelon Ice", color: "#ff6b9d" },
      { name: "Blue Razz Ice", color: "#5352ed" },
      { name: "Passion Fruit", color: "#eccc68" },
      { name: "Triple Mango", color: "#ffa502" },
      { name: "Peach Mango", color: "#ff6348" },
      { name: "Grape Ice", color: "#7d5fff" },
    ],
    metaTitle: "Lost Mary MT35000 Turbo Bangalore — 35000 Puffs | VapeBangalore.com",
    metaDescription: "Buy Lost Mary MT35000 Turbo in Bangalore. 35,000 puffs, dual mesh coil, turbo mode. Best flavour quality. Order on Telegram.",
    excerpt: "35,000 puffs with turbo mode. Bangalore's top-rated high-capacity disposable for flavour quality.",
    specs: { "Puff Count": "35,000", "Nicotine": "50mg", "Charging": "USB-C", "Coil": "Dual Mesh", "Feature": "Turbo Mode" },
  },
  {
    slug: "lost-mary-mo10000",
    name: "Lost Mary MO10000",
    brand: "Lost Mary",
    category: "Disposable",
    price: 2199,
    puffCount: 10000,
    nicotine: "50mg",
    charging: "USB-C",
    inStock: true,
    image: "/products/lost-mary-mo10000.png",
    flavours: [
      { name: "Triple Mango", color: "#ffa502" },
      { name: "Peach Mango", color: "#ff6348" },
      { name: "Grape Ice", color: "#7d5fff" },
      { name: "Strawberry Ice", color: "#ff4757" },
      { name: "Watermelon Ice", color: "#ff6b9d" },
    ],
    metaTitle: "Lost Mary MO10000 Bangalore — 10000 Puffs | VapeBangalore.com",
    metaDescription: "Buy Lost Mary MO10000 in Bangalore. 10,000 puffs, compact, USB-C. Best flavour in its class. Order on Telegram.",
    excerpt: "10,000 puffs, compact design. Lost Mary's signature flavour quality in a daily-carry size.",
    specs: { "Puff Count": "10,000", "Nicotine": "50mg", "Charging": "USB-C" },
  },

  // ─── CALIBURN ─────────────────────────────
  {
    slug: "caliburn-g4",
    name: "Caliburn G4",
    brand: "Caliburn",
    category: "Pod Device",
    price: 6899,
    battery: "950mAh",
    charging: "USB-C",
    capacity: "3ml",
    isBestseller: true,
    inStock: true,
    image: "/products/caliburn-g4.png",
    flavours: [],
    metaTitle: "Caliburn G4 Bangalore — Buy Online | Best Pod Device | VapeBangalore.com",
    metaDescription: "Buy Caliburn G4 in Bangalore. 950mAh, 26W, USB-C. Bangalore's most popular pod device. 30-45 min delivery. Order on Telegram.",
    excerpt: "Bangalore's most popular pod device. 950mAh battery, 26W output, mesh coil.",
    specs: { "Battery": "950mAh", "Output": "Up to 26W", "Pod Capacity": "3ml", "Charging": "USB-C", "Coil": "UN2 Meshed-H 0.6Ω" },
  },
  {
    slug: "caliburn-g4-pro",
    name: "Caliburn G4 Pro",
    brand: "Caliburn",
    category: "Pod Device",
    price: 7199,
    battery: "1050mAh",
    charging: "USB-C",
    inStock: true,
    image: "/products/caliburn-g4-pro.png",
    flavours: [],
    metaTitle: "Caliburn G4 Pro Bangalore | VapeBangalore.com",
    metaDescription: "Buy Caliburn G4 Pro in Bangalore. 1050mAh, OLED display, 30W. Fast delivery. Order on Telegram.",
    excerpt: "The pro upgrade. OLED display, 1050mAh battery, 30W output.",
    specs: { "Battery": "1050mAh", "Output": "Up to 30W", "Display": "OLED", "Charging": "USB-C" },
  },
  {
    slug: "caliburn-g5-lite",
    name: "Caliburn G5 Lite",
    brand: "Caliburn",
    category: "Pod Device",
    price: 4899,
    battery: "750mAh",
    charging: "USB-C",
    inStock: true,
    image: "/products/caliburn-g5-lite.png",
    flavours: [],
    metaTitle: "Caliburn G5 Lite Bangalore | VapeBangalore.com",
    metaDescription: "Buy Caliburn G5 Lite in Bangalore. Compact, 750mAh, affordable pod device. Fast delivery. Order on Telegram.",
    excerpt: "The slim and affordable entry to Caliburn's G5 range.",
    specs: { "Battery": "750mAh", "Charging": "USB-C", "Type": "Pod Device" },
  },

  // ─── ZYN ──────────────────────────────────
  {
    slug: "zyn-cool-mint",
    name: "ZYN Cool Mint",
    brand: "ZYN",
    category: "Nicotine Pouches",
    price: 999,
    nicotine: "6mg",
    isBestseller: true,
    inStock: true,
    image: "/products/zyn-velo.png",
    flavours: [
      { name: "3mg", color: "#00d2d3" },
      { name: "6mg", color: "#0abde3" },
    ],
    metaTitle: "ZYN Cool Mint Bangalore — Buy Online | Nicotine Pouches | VapeBangalore.com",
    metaDescription: "Buy ZYN Cool Mint nicotine pouches in Bangalore. 3mg & 6mg. Tobacco-free, smoke-free. 30-45 min delivery. Order on Telegram.",
    excerpt: "Bangalore's most popular nicotine pouch. Smoke-free, spit-free. 15 pouches per can.",
    specs: { "Nicotine": "3mg or 6mg", "Pouches per can": "15", "Type": "Tobacco-free", "Flavour": "Cool Mint" },
  },
  {
    slug: "zyn-citrus",
    name: "ZYN Citrus",
    brand: "ZYN",
    category: "Nicotine Pouches",
    price: 999,
    nicotine: "6mg",
    inStock: true,
    image: "/products/zyn-velo.png",
    flavours: [
      { name: "3mg", color: "#ffd32a" },
      { name: "6mg", color: "#ffa801" },
    ],
    metaTitle: "ZYN Citrus Bangalore | Nicotine Pouches | VapeBangalore.com",
    metaDescription: "Buy ZYN Citrus nicotine pouches in Bangalore. Fresh citrus flavour, tobacco-free. Fast delivery. Order on Telegram.",
    excerpt: "Bright, zesty citrus. Tobacco-free nicotine for all-day freshness.",
    specs: { "Nicotine": "3mg or 6mg", "Pouches per can": "15", "Type": "Tobacco-free", "Flavour": "Citrus" },
  },
  {
    slug: "velo-freezing-peppermint",
    name: "Velo Freezing Peppermint",
    brand: "Velo",
    category: "Nicotine Pouches",
    price: 999,
    nicotine: "6mg",
    inStock: true,
    image: "/products/velo-freezing-peppermint.png",
    flavours: [
      { name: "4mg", color: "#00d2d3" },
      { name: "6mg", color: "#0abde3" },
    ],
    metaTitle: "Velo Freezing Peppermint Bangalore | VapeBangalore.com",
    metaDescription: "Buy Velo Freezing Peppermint nicotine pouches in Bangalore. Intense cooling mint. Fast delivery. Order on Telegram.",
    excerpt: "Intense freezing peppermint. Velo's strongest cooling nicotine pouch.",
    specs: { "Nicotine": "4mg or 6mg", "Pouches per can": "20", "Type": "Tobacco-free" },
  },

  // ─── NASTY ────────────────────────────────
  {
    slug: "nasty-bolt-wtf-50k",
    name: "Nasty Bolt WTF 50K",
    brand: "Nasty",
    category: "Disposable",
    price: 2999,
    puffCount: 50000,
    nicotine: "50mg",
    charging: "USB-C",
    inStock: true,
    image: "/products/nasty-bolt.png",
    flavours: [
      { name: "Watermelon Ice", color: "#ff6b9d" },
      { name: "Mango Ice", color: "#ffa502" },
      { name: "Strawberry Ice", color: "#ff4757" },
      { name: "Blueberry Ice", color: "#5352ed" },
      { name: "Grape Ice", color: "#7d5fff" },
    ],
    metaTitle: "Nasty Bolt WTF 50K Bangalore — 50000 Puffs | VapeBangalore.com",
    metaDescription: "Buy Nasty Bolt WTF 50K in Bangalore. 50,000 puffs — highest puff count disposable. Fast delivery. Order on Telegram.",
    excerpt: "50,000 puffs. The highest puff count disposable available in Bangalore.",
    specs: { "Puff Count": "50,000", "Nicotine": "50mg", "Charging": "USB-C", "Coil": "Dual Mesh" },
  },

  // ─── IGET ─────────────────────────────────
  {
    slug: "iget-astro-b18000",
    name: "IGET Astro B18000",
    brand: "IGET",
    category: "Disposable",
    price: 2199,
    puffCount: 18000,
    nicotine: "50mg",
    charging: "USB-C",
    inStock: true,
    image: "/products/iget-astro.png",
    flavours: [
      { name: "Watermelon Ice", color: "#ff6b9d" },
      { name: "Strawberry Watermelon", color: "#ff4757" },
      { name: "Mango Ice", color: "#ffa502" },
      { name: "Blueberry Ice", color: "#5352ed" },
      { name: "Grape Ice", color: "#7d5fff" },
      { name: "Peach Ice", color: "#ff6348" },
    ],
    metaTitle: "IGET Astro B18000 Bangalore — 18000 Puffs | VapeBangalore.com",
    metaDescription: "Buy IGET Astro B18000 in Bangalore. 18,000 puffs, USB-C, excellent value. Fast delivery. Order on Telegram.",
    excerpt: "18,000 puffs at the best value price point. IGET's flagship high-capacity device.",
    specs: { "Puff Count": "18,000", "Nicotine": "50mg", "Charging": "USB-C", "Coil": "Mesh" },
  },

  // ─── YUOTO ────────────────────────────────
  {
    slug: "yuoto-beyonder",
    name: "Yuoto Beyonder",
    brand: "Yuoto",
    category: "Disposable",
    price: 1789,
    puffCount: 7000,
    nicotine: "50mg",
    charging: "USB-C",
    inStock: true,
    image: "/products/yuoto-beyonder.png",
    flavours: [
      { name: "Watermelon Ice", color: "#ff6b9d" },
      { name: "Strawberry Ice", color: "#ff4757" },
      { name: "Mango Ice", color: "#ffa502" },
      { name: "Blueberry Ice", color: "#5352ed" },
    ],
    metaTitle: "Yuoto Beyonder Bangalore — 7000 Puffs | VapeBangalore.com",
    metaDescription: "Buy Yuoto Beyonder in Bangalore. 7,000 puffs, 50mg, USB-C. Fast delivery. Order on Telegram.",
    excerpt: "7,000 puffs with smooth flavour delivery. Yuoto's most popular model in Bangalore.",
    specs: { "Puff Count": "7,000", "Nicotine": "50mg", "Charging": "USB-C" },
  },

  // ─── E-LIQUID / NIC SALTS ─────────────────
  {
    slug: "elfliq-nic-salt",
    name: "Elfliq Nic Salt",
    brand: "Elfbar",
    category: "E-Liquid",
    price: 1599,
    nicotine: "50mg",
    capacity: "10ml",
    inStock: true,
    image: "/products/elfliq-nic-salt.png",
    flavours: [
      { name: "Strawberry Ice", color: "#ff4757" },
      { name: "Watermelon Ice", color: "#ff6b9d" },
      { name: "Blueberry", color: "#5352ed" },
      { name: "Mango Ice", color: "#ffa502" },
    ],
    metaTitle: "Elfliq Nic Salt Bangalore | Pod Salt | VapeBangalore.com",
    metaDescription: "Buy Elfliq nicotine salt e-liquid in Bangalore. 50mg, 10ml. Perfect for Caliburn pod devices. Fast delivery. Order on Telegram.",
    excerpt: "Elfbar's premium nic salt. Perfect for Caliburn and other pod devices.",
    specs: { "Nicotine": "50mg Salt Nic", "Volume": "10ml", "PG/VG": "50/50" },
  },
  {
    slug: "pod-salt-core",
    name: "Pod Salt Core",
    brand: "Pod Salt",
    category: "E-Liquid",
    price: 1599,
    nicotine: "50mg",
    capacity: "10ml",
    inStock: true,
    image: "/products/pod-salt-disposable.png",
    flavours: [
      { name: "Mango Ice", color: "#ffa502" },
      { name: "Strawberry Ice", color: "#ff4757" },
      { name: "Watermelon Ice", color: "#ff6b9d" },
      { name: "Blueberry Ice", color: "#5352ed" },
    ],
    metaTitle: "Pod Salt Core Bangalore | Nic Salt E-liquid | VapeBangalore.com",
    metaDescription: "Buy Pod Salt Core in Bangalore. 50mg nic salt, 10ml. Wide flavour range. Fast delivery. Order on Telegram.",
    excerpt: "Wide flavour range, smooth salt nicotine hit. Compatible with all pod devices.",
    specs: { "Nicotine": "50mg Salt Nic", "Volume": "10ml" },
  },

  // ─── TOBACCO ──────────────────────────────
  {
    slug: "natural-american-spirit-tobacco",
    name: "Natural American Spirit",
    brand: "American Spirit",
    category: "Tobacco",
    price: 999,
    inStock: true,
    image: "/products/american-spirit.png",
    flavours: [
      { name: "Original", color: "#f9ca24" },
      { name: "Organic", color: "#6ab04c" },
    ],
    metaTitle: "Natural American Spirit Tobacco Bangalore | VapeBangalore.com",
    metaDescription: "Buy Natural American Spirit tobacco in Bangalore. Fast delivery. 100% natural. Order on Telegram or WhatsApp.",
    excerpt: "100% natural additive-free tobacco. Bangalore's most ordered premium rolling tobacco.",
    specs: { "Type": "Rolling Tobacco", "Weight": "30g", "Additives": "None" },
  },
  {
    slug: "amber-leaf-tobacco",
    name: "Amber Leaf Rolling Tobacco",
    brand: "Amber Leaf",
    category: "Tobacco",
    price: 999,
    inStock: true,
    image: "/products/amber-leaf.png",
    flavours: [
      { name: "Original", color: "#e55039" },
      { name: "50g", color: "#c0392b" },
    ],
    metaTitle: "Amber Leaf Rolling Tobacco Bangalore | VapeBangalore.com",
    metaDescription: "Buy Amber Leaf rolling tobacco in Bangalore. Fast delivery. Order on Telegram or WhatsApp.",
    excerpt: "Classic Virginia blend. Smooth and consistent burn.",
    specs: { "Type": "Rolling Tobacco", "Weight": "30g / 50g" },
  },
  {
    slug: "golden-virginia-tobacco",
    name: "Golden Virginia",
    brand: "Golden Virginia",
    category: "Tobacco",
    price: 999,
    inStock: true,
    image: "/products/golden-virginia.png",
    flavours: [
      { name: "Original", color: "#f9ca24" },
      { name: "Yellow", color: "#f0e130" },
    ],
    metaTitle: "Golden Virginia Tobacco Bangalore | VapeBangalore.com",
    metaDescription: "Buy Golden Virginia rolling tobacco in Bangalore. Fast delivery. Order on Telegram or WhatsApp.",
    excerpt: "The iconic Virginia blend. Light, smooth and aromatic.",
    specs: { "Type": "Rolling Tobacco", "Weight": "30g" },
  },
];

// ─── HELPERS ──────────────────────────────────────────
export const PRODUCT_COUNT = products.length;

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByBrand(brand: ProductBrand): Product[] {
  return products.filter((p) => p.brand === brand);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.isBestseller);
}

export const CATEGORIES: ProductCategory[] = [
  "Disposable",
  "Pod Device",
  "Nicotine Pouches",
  "E-Liquid",
  "Tobacco",
];

export const BRANDS: ProductBrand[] = [
  "Elfbar",
  "Lost Mary",
  "Caliburn",
  "ZYN",
  "Nasty",
  "IGET",
  "Yuoto",
  "Velo",
  "Pod Salt",
  "American Spirit",
  "Amber Leaf",
  "Golden Virginia",
];
