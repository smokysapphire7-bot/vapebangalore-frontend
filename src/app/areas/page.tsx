import type { Metadata } from "next";
import Link from "next/link";
import { locations, LOCATION_COUNT } from "@/lib/locations";
import { getBestsellers } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";

export const metadata: Metadata = {
  title: `Vape Delivery Areas Bangalore — ${LOCATION_COUNT}+ Locations | VapeBangalore.com`,
  description: `Vape delivery across ${LOCATION_COUNT}+ areas in Bangalore. Koramangala, Indiranagar, HSR Layout, Whitefield, BTM Layout and more. 30 min delivery.`,
  alternates: { canonical: "https://vapebangalore.com/areas" },
};

export default function AreasPage() {
  const featured = getBestsellers().slice(0, 4);

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "80px" }}>
      <div className="container" style={{ paddingTop: "32px", paddingBottom: "100px" }}>

        {/* Heading */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ fontSize: "11px", color: "var(--orange)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Delivery Coverage</div>
          <h1 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2rem,6vw,3rem)", color: "var(--white)", letterSpacing: "0.02em", marginBottom: "8px" }}>
            {LOCATION_COUNT}+ AREAS IN BANGALORE
          </h1>
          <p style={{ color: "var(--dim)", fontSize: "13px", lineHeight: 1.6 }}>
            30-45 min delivery across all areas. Order on WhatsApp, pay cash on delivery.
          </p>
        </div>

        {/* Featured Products */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--orange)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Most Ordered Products</div>
            <Link href="/products" style={{ fontSize: "12px", color: "var(--dim)", textDecoration: "none" }}>View all</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
            {featured.map(p => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--b0)", paddingTop: "32px", marginBottom: "20px" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--orange)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>All Delivery Areas</div>
        </div>

        {/* Areas Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "8px" }}>
          {locations.map((loc) => (
            <Link key={loc.slug} href={`/vape-delivery/${loc.slug}`}
              style={{ display: "block", background: "var(--s1)", border: "1px solid var(--b0)", borderRadius: "8px", padding: "10px 14px", textDecoration: "none", fontSize: "12px", fontWeight: 500, color: "var(--text)" }}>
              {loc.name}
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
