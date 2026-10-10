import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/lib/brands";
import { SITE } from "@/lib/settings";

export const metadata: Metadata = {
  title: "Vape Brands in Bangalore — Elfbar, Lost Mary, Caliburn, ZYN | VapeBangalore.com",
  description: "All vape brands available in Bangalore with 30-45 min delivery. Elfbar, Lost Mary, Caliburn, ZYN, Nasty, IGET, Yuoto, Velo. 100% original. Order on WhatsApp.",
  alternates: { canonical: `${SITE.url}/brands` },
};

export default function BrandsPage() {
  return (
    <main style={{ paddingTop: "60px" }}>
      <section style={{ padding: "40px 0", background: "var(--bg)", borderBottom: "1px solid var(--b0)" }}>
        <div className="container">
          <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", color: "var(--orange)", textTransform: "uppercase", marginBottom: "10px" }}>All Brands</p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, color: "var(--white)", letterSpacing: "-0.03em", marginBottom: "12px" }}>
            Vape Brands in Bangalore
          </h1>
          <p style={{ fontSize: "14px", color: "var(--dim)", maxWidth: "560px", lineHeight: 1.75 }}>
            Every major vape brand delivered across Bangalore in 30-45 minutes. 100% original products from authorised distributors.
          </p>
        </div>
      </section>

      <section style={{ padding: "40px 0", background: "var(--s1)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }} className="brands-grid">
            {brands.map((brand) => (
              <Link key={brand.slug} href={`/brands/${brand.slug}`} style={{ background: "var(--s2)", border: "1px solid var(--b0)", borderRadius: "12px", padding: "20px", textDecoration: "none", display: "block", position: "relative", overflow: "hidden" }}>
                <div aria-hidden style={{ position: "absolute", top: "-20px", right: "-20px", width: "100px", height: "100px", background: `radial-gradient(circle, ${brand.color}20 0%, transparent 70%)`, pointerEvents: "none" }} />
                <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em", color: brand.color, textTransform: "uppercase", marginBottom: "8px" }}>{brand.origin}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "6px" }}>{brand.name}</div>
                <p style={{ fontSize: "11px", color: "var(--dim)", lineHeight: 1.6, marginBottom: "12px" }}>{brand.tagline}</p>
                <span style={{ fontSize: "11px", fontWeight: 700, color: brand.color }}>View products →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        @media (min-width: 640px) { .brands-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (min-width: 1024px) { .brands-grid { grid-template-columns: repeat(4, 1fr) !important; } }
      `}</style>
    </main>
  );
}
