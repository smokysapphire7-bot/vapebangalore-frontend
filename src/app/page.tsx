import type { Metadata } from "next";
import { SITE } from "@/lib/settings";
import { LOCATION_COUNT } from "@/lib/locations";
import { products } from "@/lib/products";
import ProductGrid from "@/components/home/ProductGrid";
import FloatingColumn from "@/components/home/FloatingColumn";

export const metadata: Metadata = {
  title: "Vapes in Bangalore — Buy Elfbar, Lost Mary, ZYN | 30 Min Delivery | VapeBangalore.com",
  description: `#1 Vape Delivery in Bangalore. Elfbar Raya D1, Lost Mary MT35000, Caliburn G4, ZYN Cool Mint, Nasty, IGET & more. 30 min delivery across ${LOCATION_COUNT}+ areas. 100% original products.  available. Order on WhatsApp now.`,
  alternates: { canonical: SITE.url },
};

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: "-60px", right: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(200,16,46,0.07)", pointerEvents: "none", zIndex: 0 }} />
        <div aria-hidden style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(200,16,46,0.04)", pointerEvents: "none", zIndex: 0 }} />

        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "24px", paddingBottom: "0" }}>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "rgba(200,16,46,0.12)", border: "1px solid rgba(200,16,46,0.2)", borderRadius: "100px", padding: "3px 12px", marginBottom: "16px" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--orange)", display: "inline-block" }} />
            <span style={{ fontSize: "9px", fontWeight: 700, color: "var(--orange)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Delivering Now · Bangalore</span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h1 style={{ fontFamily: "var(--font-bebas)", lineHeight: 0.88, letterSpacing: "0.02em", marginBottom: "12px" }}>
                <span style={{ fontSize: "clamp(56px,14vw,80px)", color: "var(--white)", display: "block" }}>VAPES</span>
                <span style={{ fontSize: "clamp(56px,14vw,80px)", color: "rgba(255,255,255,0.18)", display: "block" }}>IN</span>
                <span style={{ fontSize: "clamp(56px,14vw,80px)", color: "var(--orange)", display: "block" }}>BANGALORE.</span>
              </h1>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.38)", lineHeight: 1.65 }}>
                Elfbar, Lost Mary, ZYN &amp; more.<br />100% original.
              </p>
            </div>

            <div style={{ width: "100px", flexShrink: 0, height: "260px", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "40px", background: "linear-gradient(to bottom, var(--bg), transparent)", zIndex: 3, pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40px", background: "linear-gradient(to top, var(--bg), transparent)", zIndex: 3, pointerEvents: "none" }} />
              <FloatingColumn />
            </div>
          </div>

          <div style={{ display: "flex", gap: "8px", marginTop: "14px" }}>
            <a href="https://wa.me/916282878843?text=Hi%20VapeBangalore%2C%20I%20want%20to%20order." target="_blank" rel="noopener noreferrer"
              style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", background: "#25D366", color: "#fff", padding: "13px 8px", borderRadius: "8px", fontSize: "12px", fontWeight: 500, textDecoration: "none" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a href="/products" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--orange)", color: "#fff", padding: "13px 8px", borderRadius: "8px", fontSize: "12px", fontWeight: 500, textDecoration: "none" }}>
              Browse All
            </a>
          </div>



        </div>
      </section>

      {/* TRUST STRIP — auto-scrolling marquee */}
      <section style={{ background: "#0f0f0f", borderTop: "1px solid var(--b0)", borderBottom: "1px solid var(--b0)", overflow: "hidden" }}>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .trust-marquee {
            display: flex;
            gap: 12px;
            padding: 10px 0;
            width: max-content;
            animation: marquee 20s linear infinite;
          }
          .trust-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div style={{ overflow: "hidden" }}>
          <div className="trust-marquee">
            {[
              "⚡ 30-45 Min Delivery",
              "✅ 100% Original Products",
              "📦 Discreet Packaging",
              `🗺️ ${LOCATION_COUNT}+ Areas in Bangalore`,
              
              "🌙 Late Night Available",
              "🛵 Express Dispatch",
              "🔒 Privacy Guaranteed",
              "⚡ 30-45 Min Delivery",
              "✅ 100% Original Products",
              "📦 Discreet Packaging",
              `🗺️ ${LOCATION_COUNT}+ Areas in Bangalore`,
              
              "🌙 Late Night Available",
              "🛵 Express Dispatch",
              "🔒 Privacy Guaranteed",
            ].map((text, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", background: "#161616", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "100px", padding: "6px 14px", whiteSpace: "nowrap", flexShrink: 0 }}>
                <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--orange)", display: "inline-block" }} />
                <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section style={{ padding: "24px 0 80px", background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "20px", flexWrap: "wrap", gap: "8px" }}>
            <div>
              <div style={{ fontSize: "8px", fontWeight: 700, color: "var(--orange)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "3px" }}>Bestsellers</div>
              <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "28px", color: "var(--white)", letterSpacing: "0.03em" }}>
                MOST ORDERED
              </h2>
            </div>
            <a href="/products" style={{ fontSize: "12px", color: "var(--orange)", textDecoration: "none", fontWeight: 500, border: "1px solid rgba(200,16,46,0.25)", padding: "6px 14px", borderRadius: "6px" }}>
              View all
            </a>
          </div>
          <ProductGrid />
        </div>
      </section>

    </main>
  );
}
