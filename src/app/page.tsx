import type { Metadata } from "next";
import { SITE } from "@/lib/settings";
import { LOCATION_COUNT } from "@/lib/locations";
import { products } from "@/lib/products";
import ProductGrid from "@/components/home/ProductGrid";

export const metadata: Metadata = {
  title: "Buy Vapes in Bangalore — 30-45 Min Delivery | VapeBangalore.com",
  description: `Buy vapes in Bangalore with 30-45 min delivery. Elfbar, Lost Mary, Caliburn, ZYN, Nasty and more. 100% original. Discreet delivery across ${LOCATION_COUNT}+ areas. Order on Telegram or WhatsApp now.`,
  alternates: { canonical: SITE.url },
};

export default function HomePage() {
  return (
    <main>
      {/* ── COMPACT MOBILE HERO ── */}
      <section style={{ background: "var(--bg)", position: "relative", overflow: "hidden", paddingTop: "0" }}>

        {/* Gradient orb */}
        <div aria-hidden style={{ position: "absolute", top: "-100px", right: "-100px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(255,45,85,0.08) 0%, rgba(255,92,0,0.06) 40%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
        <div aria-hidden style={{ position: "absolute", bottom: "0", left: "-100px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(255,92,0,0.05) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "32px", paddingBottom: "32px" }}>

          {/* Live pill */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "linear-gradient(135deg, rgba(255,92,0,0.15), rgba(255,45,85,0.1))", border: "1px solid rgba(255,92,0,0.3)", borderRadius: "100px", padding: "5px 14px", marginBottom: "16px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--orange)", display: "inline-block", boxShadow: "0 0 6px rgba(255,92,0,0.8)" }} />
            <span style={{ fontSize: "10px", fontWeight: 700, color: "var(--orange)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Delivering Now · Bangalore</span>
          </div>

          {/* Hero layout — side by side on mobile */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "16px", alignItems: "center", marginBottom: "24px" }} className="hero-grid">

            <div>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 6vw, 64px)", fontWeight: 900, letterSpacing: "-0.035em", lineHeight: 1.05, marginBottom: "10px" }}>
                <span style={{ color: "var(--white)" }}>Vapes in</span><br />
                <span style={{ background: "linear-gradient(135deg, #FF5C00, #FF2D55)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Bangalore.</span>
              </h1>
              <p style={{ fontSize: "13px", color: "var(--dim)", lineHeight: 1.6, marginBottom: "0", maxWidth: "340px" }}>
                30-45 min · {LOCATION_COUNT}+ areas · 100% original
              </p>
            </div>

            {/* Mini CTA stack — right side on mobile */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", flexShrink: 0 }}>
              <a href="https://wa.me/916282878843?text=Hi%20VapeBangalore%2C%20I%20want%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", background: "linear-gradient(135deg, #FF5C00, #FF2D55)", color: "#fff", padding: "10px 16px", borderRadius: "8px", fontWeight: 700, fontSize: "12px", textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 4px 16px rgba(255,92,0,0.3)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
                Telegram
              </a>
              <a href="https://wa.me/916282878843?text=Hi%20VapeBangalore%2C%20I%20want%20to%20order." target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", background: "rgba(37,211,102,0.12)", color: "#25D366", padding: "10px 16px", borderRadius: "8px", fontWeight: 700, fontSize: "12px", textDecoration: "none", border: "1px solid rgba(37,211,102,0.25)", whiteSpace: "nowrap" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Trust strip */}
          <div style={{ display: "flex", gap: "16px", overflowX: "auto", paddingBottom: "4px" }}>
            {[
              { icon: "⚡", text: "30-45 Min" },
              { icon: "✅", text: "100% Original" },
              { icon: "📦", text: "Discreet" },
              { icon: "🗺️", text: `${LOCATION_COUNT}+ Areas` },
              { icon: "🌙", text: "Late Night" },
            ].map((t) => (
              <div key={t.text} style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "var(--dim)", whiteSpace: "nowrap", fontWeight: 500 }}>
                <span style={{ fontSize: "13px" }}>{t.icon}</span>
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID — immediately below hero ── */}
      <section style={{ padding: "24px 0 80px", background: "var(--bg)", borderTop: "1px solid var(--b0)" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "20px", flexWrap: "wrap", gap: "8px" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 3vw, 28px)", fontWeight: 800, color: "var(--white)", letterSpacing: "-0.02em" }}>
                Shop Vapes
              </h2>
              <p style={{ fontSize: "11px", color: "var(--dim)", marginTop: "2px", fontFamily: "var(--font-mono)" }}>
                {products.length} products · 30-45 min delivery
              </p>
            </div>
            <a href="/products" style={{ fontSize: "12px", color: "var(--orange)", textDecoration: "none", fontWeight: 600, border: "1px solid rgba(255,92,0,0.25)", padding: "6px 14px", borderRadius: "6px" }}>
              View all
            </a>
          </div>
          <ProductGrid />
        </div>
      </section>

      <style>{`
        @media (max-width: 480px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { flex-direction: row !important; }
          .hero-grid > div:last-child a { flex: 1; }
        }
      `}</style>
    </main>
  );
}
