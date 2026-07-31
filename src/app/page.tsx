import type { Metadata } from "next";
import ProductGrid from "@/components/home/ProductGrid";
import { SITE } from "@/lib/settings";
import { LOCATION_COUNT } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Buy Vapes in Bangalore — 30-45 Min Delivery | VapeBangalore.com",
  description: `Buy vapes in Bangalore with 30-45 min delivery. Elfbar, Lost Mary, Caliburn, ZYN, Nasty & more. 100% original. Discreet delivery across ${LOCATION_COUNT}+ areas. Order on Telegram or WhatsApp now.`,
  alternates: { canonical: SITE.url },
};

export default function HomePage() {
  return (
    <main>
      <section style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 20px 40px", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(255,92,0,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--orange-dim)", border: "1px solid rgba(255,92,0,0.25)", borderRadius: "100px", padding: "5px 14px", marginBottom: "24px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--orange)", display: "inline-block" }} />
            <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--orange)", letterSpacing: "0.05em" }}>NOW DELIVERING ACROSS BANGALORE</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 8vw, 72px)", fontWeight: 900, color: "var(--white)", letterSpacing: "-0.035em", lineHeight: 1.05, marginBottom: "20px", maxWidth: "700px" }}>
            Vape Delivery<br />
            <span style={{ color: "var(--orange)" }}>Bangalore.</span><br />
            30 Minutes.
          </h1>
          <p style={{ fontSize: "clamp(14px, 2vw, 17px)", color: "var(--dim)", maxWidth: "520px", lineHeight: 1.75, marginBottom: "36px" }}>
            Elfbar, Lost Mary, Caliburn, ZYN and more — delivered to your door in 30-45 minutes across {LOCATION_COUNT}+ areas. 100% original, discreet packaging.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
            <a href="https://t.me/vapebangalorebot?start=order" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--orange)", color: "#fff", padding: "14px 28px", borderRadius: "8px", fontWeight: 700, fontSize: "15px", textDecoration: "none", minHeight: "48px" }}>
              Order on Telegram
            </a>
            <a href="https://wa.me/916282878843?text=Hi%20VapeBangalore%2C%20I%20want%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", color: "var(--white)", padding: "14px 28px", borderRadius: "8px", border: "1px solid var(--b2)", fontWeight: 600, fontSize: "15px", textDecoration: "none", minHeight: "48px" }}>
              WhatsApp
            </a>
          </div>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {[{ icon: "⚡", text: "30-45 Min" }, { icon: "✅", text: "100% Original" }, { icon: "📦", text: "Discreet Pack" }, { icon: "🗺️", text: `${LOCATION_COUNT}+ Areas` }].map((t) => (
              <div key={t.text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--dim)", fontWeight: 500 }}>
                <span>{t.icon}</span><span>{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 0", background: "var(--s1)", borderTop: "1px solid var(--b0)" }}>
        <div className="container">
          <div style={{ marginBottom: "32px" }}>
            <p style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "8px", fontWeight: 600 }}>Best Sellers</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 4vw, 36px)", fontWeight: 800, color: "var(--white)", letterSpacing: "-0.02em" }}>Top Vapes in Bangalore</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "12px" }}>
            {bestsellers.map((product) => (
              <a key={product.slug} href={`/products/${product.slug}`} style={{ background: "var(--s2)", border: "1px solid var(--b0)", borderRadius: "8px", padding: "16px", textDecoration: "none", display: "block" }}>
                <div style={{ fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 700, marginBottom: "8px" }}>{product.brand}</div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--white)", marginBottom: "4px", lineHeight: 1.3 }}>{product.name}</div>
                {product.puffCount && (
                  <div style={{ fontSize: "11px", color: "var(--dim)", fontFamily: "var(--font-mono)" }}>{product.puffCount.toLocaleString()} puffs</div>
                )}
                <div style={{ marginTop: "12px", fontSize: "15px", fontWeight: 700, color: "var(--orange)", fontFamily: "var(--font-mono)" }}>
                  {"\u20B9"}{product.price.toLocaleString()}
                </div>
              </a>
            ))}
          </div>
          <div style={{ marginTop: "24px", textAlign: "center" }}>
            <a href="/products" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--orange)", fontSize: "13px", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,92,0,0.3)", padding: "10px 24px", borderRadius: "6px" }}>
              View All {products.length} Products
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
