export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  readTime: number;
  category: string;
  excerpt: string;
  content: string;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "vape-delivery-bangalore",
    title: "Vape Delivery in Bangalore — 30-45 Min to Your Door",
    metaTitle: "Vape Delivery in Bangalore — 30-45 Min | VapeBangalore.com",
    metaDescription: "Get vapes delivered in Bangalore in 30-45 minutes. Elfbar, Lost Mary, Caliburn, ZYN and more. 100% original products. Order on WhatsApp now.",
    publishedAt: "2025-04-01",
    readTime: 4,
    category: "Bangalore Guide",
    excerpt: "Getting vapes delivered in Bangalore used to mean a long wait or a trip to a shop. Not anymore. Here is how fast vape delivery works in Bangalore.",
    content: "<h2>Vape Delivery in Bangalore</h2><p>We deliver vapes across all of Bangalore in 30-45 minutes. Order on WhatsApp and we dispatch immediately.</p>",
  },
  {
    slug: "best-disposable-vapes-bangalore-2025",
    title: "Best Disposable Vapes in Bangalore 2025",
    metaTitle: "Best Disposable Vapes in Bangalore 2025 | VapeBangalore.com",
    metaDescription: "The best disposable vapes available in Bangalore in 2025. Elfbar, Lost Mary, Nasty, IGET ranked and reviewed. Fast delivery.",
    publishedAt: "2025-04-10",
    readTime: 6,
    category: "Product Guide",
    excerpt: "The disposable vape market in Bangalore has exploded. Here are the best options available right now — ranked by value, flavour quality, and puff count.",
    content: "<h2>Best Disposable Vapes in Bangalore 2025</h2><p>Elfbar Raya D1, Lost Mary MT35000, and Nasty Bolt WTF 50K are the top picks for 2025.</p>",
  },
  {
    slug: "vape-shop-bangalore",
    title: "Vape Shop in Bangalore — Buy Online with 30-45 Min Home Delivery",
    metaTitle: "Vape Shop Bangalore | Online Vape Store | VapeBangalore.com",
    metaDescription: "Bangalore best online vape shop. Buy Elfbar, Lost Mary, Caliburn, ZYN and more with 30-45 min delivery. 100% original. Order on WhatsApp.",
    publishedAt: "2025-04-15",
    readTime: 5,
    category: "Bangalore Guide",
    excerpt: "Looking for a vape shop in Bangalore? Skip the traffic and get your vapes delivered in 30-45 minutes across 100+ areas.",
    content: "<h2>Vape Shop in Bangalore</h2><p>Our online vape shop delivers across all of Bangalore in 30-45 minutes. No need to visit a physical store.</p>",
  },
  {
    slug: "zyn-nicotine-pouches-bangalore",
    title: "ZYN Nicotine Pouches in Bangalore — Fast Delivery",
    metaTitle: "ZYN Nicotine Pouches Bangalore | VapeBangalore.com",
    metaDescription: "Buy ZYN nicotine pouches in Bangalore with 30-45 min delivery. ZYN Cool Mint, Citrus and more. Tobacco-free, smoke-free nicotine.",
    publishedAt: "2025-04-20",
    readTime: 5,
    category: "Product Guide",
    excerpt: "ZYN nicotine pouches are the fastest growing nicotine product in Bangalore. Smoke-free, spit-free, and completely discreet.",
    content: "<h2>ZYN Nicotine Pouches in Bangalore</h2><p>ZYN is the world leading nicotine pouch brand. Popular with Bangalore IT professionals for discreet nicotine.</p>",
  },
  {
    slug: "elfbar-raya-d1-bangalore",
    title: "Elfbar Raya D1 in Bangalore — Price, Flavours and Fast Delivery",
    metaTitle: "Elfbar Raya D1 Bangalore | Buy Online | VapeBangalore.com",
    metaDescription: "Buy Elfbar Raya D1 in Bangalore with 30-45 min delivery. Best price, all flavours available. 100% original. Order on WhatsApp now.",
    publishedAt: "2025-05-01",
    readTime: 5,
    category: "Product Guide",
    excerpt: "The Elfbar Raya D1 is Bangalore best-selling disposable vape. 7,000 puffs, USB-C charging, and a wide range of flavours.",
    content: "<h2>Elfbar Raya D1 in Bangalore</h2><p>The Raya D1 is Bangalore most popular disposable vape. Fast delivery across all areas.</p>",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
