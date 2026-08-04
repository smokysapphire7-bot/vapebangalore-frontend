import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { WHATSAPP } from "@/lib/settings";

export const metadata: Metadata = {
  title: "Elfbar Bangalore — Buy Elfbar Vapes Online | 30 Min Delivery | VapeBangalore.com",
  description: "Buy Elfbar vapes in Bangalore with 30 min delivery. Elfbar Raya D1, MoonNight 40K, Raya D3, Ice King, BC10000 and more. 100% original. Cash on delivery. Order on WhatsApp now.",
  alternates: { canonical: "https://vapebangalore.com/elfbar-bangalore" },
  keywords: ["elfbar bangalore", "buy elfbar bangalore", "elfbar delivery bangalore", "elfbar raya d1 bangalore", "elfbar moonnight bangalore", "elfbar price bangalore"],
};

const elfbarProducts = products.filter(p => p.brand === "Elfbar");

export default function ElfbarBangalorePage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "80px" }}>
      <div className="container" style={{ paddingTop: "32px", paddingBottom: "100px" }}>

        <div style={{ marginBottom: "32px" }}>
          <div style={{ fontSize: "11px", color: "var(--orange)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Brand Delivery</div>
          <h1 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2rem,6vw,3.5rem)", color: "var(--white)", marginBottom: "12px", letterSpacing: "0.02em" }}>
            ELFBAR BANGALORE
          </h1>
          <p style={{ color: "var(--dim)", fontSize: "14px", lineHeight: 1.7, maxWidth: "600px", marginBottom: "24px" }}>
            Buy 100% original Elfbar vapes in Bangalore with 30-minute delivery. We stock the full Elfbar range — Raya D1, MoonNight 40K, Raya D3, Ice King, BC10000, Raya SOBO, D3 Pro and more. All products are authentic, sourced directly. Order on WhatsApp and get it at your door — discreet packaging, cash on delivery available.
          </p>
          <a href={WHATSAPP.orderLink("Elfbar vape")} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#fff", padding: "12px 24px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Order Elfbar on WhatsApp
          </a>
        </div>

        <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "24px", color: "var(--white)", marginBottom: "16px", letterSpacing: "0.02em" }}>ALL ELFBAR PRODUCTS</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {elfbarProducts.map(p => (
            <Link key={p.slug} href={`/products/${p.slug}`} style={{ background: "var(--s3)", border: "1px solid rgba(200,16,46,0.3)", borderRadius: "12px", padding: "16px", textDecoration: "none", display: "block" }}>
              <img src={p.image} alt={p.name} style={{ width: "100%", height: "100px", objectFit: "contain", marginBottom: "10px" }} />
              <div style={{ fontSize: "10px", color: "var(--orange)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>Elfbar</div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--white)", marginBottom: "4px" }}>{p.name}</div>
              <div style={{ fontSize: "14px", fontWeight: 800, color: "var(--orange)" }}>₹{p.price.toLocaleString("en-IN")}</div>
            </Link>
          ))}
        </div>

        <div style={{ background: "var(--s1)", border: "1px solid var(--b0)", borderRadius: "12px", padding: "24px", marginBottom: "32px" }}>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "22px", color: "var(--white)", marginBottom: "16px", letterSpacing: "0.02em" }}>WHY BUY ELFBAR FROM US?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>
            {[
              ["100% Original", "All Elfbar products are authentic. No fakes, no refills."],
              ["30 Min Delivery", "Fastest vape delivery in Bangalore. Order now, get it in 30 minutes."],
              ["120+ Areas", "We deliver across Koramangala, Indiranagar, HSR, Whitefield and 120+ more areas."],
              ["Cash on Delivery", "No prepayment needed. Pay when you receive."],
              ["Full Range", "Every Elfbar model in stock — disposables, pod systems, nic salts."],
              ["Discreet Packaging", "Plain bag, no branding. Your privacy is protected."],
            ].map(([title, desc]) => (
              <div key={title}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--white)", marginBottom: "4px" }}>{title}</div>
                <div style={{ fontSize: "12px", color: "var(--dim)", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "var(--s1)", border: "1px solid var(--b0)", borderRadius: "12px", padding: "24px" }}>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "22px", color: "var(--white)", marginBottom: "16px", letterSpacing: "0.02em" }}>ELFBAR FAQ — BANGALORE</h2>
          {[
            ["Which Elfbar models are available in Bangalore?", "We stock Elfbar Raya D1, MoonNight 40K, Raya D3, Ice King, BC10000, Raya SOBO, Elfbar 600, D3 Pro, Elfbar Trio and Elfliq Nic Salts. Full range available."],
            ["How much does Elfbar cost in Bangalore?", "Elfbar prices in Bangalore start from ₹999 for the Elfbar 600 and go up to ₹3,199 for the Raya SOBO 40K. The popular Elfbar Raya D1 is ₹1,789."],
            ["Is Elfbar original in Bangalore?", "Yes — all our Elfbar products are 100% original and authentic. We do not stock refilled or fake products."],
            ["How fast is Elfbar delivery in Bangalore?", "We deliver Elfbar in 30-45 minutes across 120+ areas in Bangalore. Order on WhatsApp and we dispatch immediately."],
          ].map(([q, a]) => (
            <div key={q} style={{ marginBottom: "20px", borderBottom: "1px solid var(--b0)", paddingBottom: "16px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--white)", marginBottom: "6px" }}>{q}</div>
              <div style={{ fontSize: "12px", color: "var(--dim)", lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
