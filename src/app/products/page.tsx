import type { Metadata } from "next";
import { LOCATION_COUNT } from "@/lib/locations";
import ProductGrid from "@/components/home/ProductGrid";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Buy Vapes in Bangalore — Elfbar, Lost Mary, Caliburn, ZYN | VapeBangalore.com",
  description: `Shop ${products.length}+ vapes in Bangalore. Elfbar, Lost Mary, Caliburn, ZYN, Nasty, IGET & more. 30 min delivery across ${LOCATION_COUNT}+ areas. 100% original. Cash on delivery.`,
  alternates: { canonical: "https://vapebangalore.com/products" },
};

export default function ProductsPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "80px" }}>
      <div className="container" style={{ paddingTop: "32px", paddingBottom: "100px" }}>
        <div style={{ marginBottom: "24px" }}>
          <div style={{ fontSize: "11px", color: "var(--orange)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
            Catalogue
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "var(--white)", letterSpacing: "-0.025em", marginBottom: "8px" }}>
            All Products
          </h1>
          <p style={{ color: "var(--dim)", fontSize: "0.9rem" }}>
            {products.length} products · 30 min delivery · 100% original
          </p>
        </div>
        <ProductGrid />
      </div>
    </main>
  );
}
