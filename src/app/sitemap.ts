import { MetadataRoute } from "next";
import { locations } from "@/lib/locations";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vapebangalore.com";

  const locationPages = locations.map((loc) => ({
    url: `${base}/vape-delivery/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const productPages = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.95 },
    { url: `${base}/brands`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/compare`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.75 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    ...productPages,
    ...locationPages,
  ];
}
