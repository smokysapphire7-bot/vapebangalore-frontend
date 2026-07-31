import { NextRequest, NextResponse } from "next/server";
import { products } from "@/lib/products";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const brand = searchParams.get("brand");
  const inStock = searchParams.get("inStock");
  const slug = searchParams.get("slug");

  let filtered = [...products];

  if (slug) {
    const product = products.find((p) => p.slug === slug);
    if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(product);
  }

  if (category) filtered = filtered.filter((p) => p.category === category);
  if (brand) filtered = filtered.filter((p) => p.brand === brand);
  if (inStock === "true") filtered = filtered.filter((p) => p.inStock);

  return NextResponse.json({
    count: filtered.length,
    products: filtered,
  }, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
