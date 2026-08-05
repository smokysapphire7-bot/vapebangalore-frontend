import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { WHATSAPP } from "@/lib/settings";

export const metadata: Metadata = {
  title: "Nicotine Pouches Bangalore — Buy ZYN, Velo Online | 30 Min Delivery | VapeBangalore.com",
  description: "Buy nicotine pouches in Bangalore with 30 min delivery. ZYN Cool Mint, Velo Freezing Peppermint and more. Tobacco-free. 100% original. Cash on delivery.",
  alternates: { canonical: "https://vapebangalore.com/nicotine-pouches-bangalore" },
  keywords: ["nicotine pouches bangalore", "buy nicotine pouches bangalore", "zyn bangalore", "velo bangalore", "tobacco free nicotine bangalore"],
};

const pouchProducts = products.filter(p => ["ZYN", "Velo"].includes(p.brand));

export default function NicotinePouchesBangalorePage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "80px" }}>
      <div className="container" style={{ paddingTop: "32px", paddingBottom: "100px" }}>
        <div style={{ marginBottom: "32px" }}>
          <div style={{ fontSize: "11px", color: "var(--orange)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Tobacco-Free Nicotine</div>
          <h1 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2rem,6vw,3.5rem)", color: "var(--white)", marginBottom: "12px", letterSpacing: "0.02em" }}>NICOTINE POUCHES BANGALORE</h1>
          <p style={{ color: "var(--dim)", fontSize: "14px", lineHeight: 1.7, maxWidth: "600px", marginBottom: "24px" }}>
            Nicotine pouches are the modern alternative to smoking and vaping — tobacco-free, smoke-free and discreet. We deliver ZYN and Velo nicotine pouches across 120+ areas in Bangalore in 30-45 minutes. No tobacco, no smoke, no smell. Just clean nicotine. Perfect for offices, flights and anywhere smoking is restricted. Order on WhatsApp — cash on delivery available.
          </p>
          <a href={WHATSAPP.orderLink("nicotine pouches")} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#fff", padding: "12px 24px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Order Nicotine Pouches on WhatsApp
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "12px" }}>
          {pouchProducts.map(p => (
            <Link key={p.slug} href={`/products/${p.slug}`} style={{ background: "var(--s3)", border: "1px solid rgba(200,16,46,0.3)", borderRadius: "12px", padding: "16px", textDecoration: "none", display: "block" }}>
              <img src={p.image} alt={`${p.name} - Buy ${p.brand} in Bangalore`} loading="lazy" style={{ width: "100%", height: "100px", objectFit: "contain", marginBottom: "10px" }} />
              <div style={{ fontSize: "10px", color: "var(--orange)", fontWeight: 700, textTransform: "uppercase", marginBottom: "4px" }}>{p.brand}</div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--white)", marginBottom: "4px" }}>{p.name}</div>
              <div style={{ fontSize: "14px", fontWeight: 800, color: "var(--orange)" }}>₹{p.price.toLocaleString("en-IN")}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
