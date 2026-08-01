import Link from "next/link";
import { locations } from "@/lib/locations";
import { products, BRANDS } from "@/lib/products";
import { SITE, WHATSAPP } from "@/lib/settings";

const TOP_AREAS = [
  { name: "Koramangala", slug: "koramangala" },
  { name: "Indiranagar", slug: "indiranagar" },
  { name: "HSR Layout", slug: "hsr-layout" },
  { name: "Whitefield", slug: "whitefield" },
  { name: "BTM Layout", slug: "btm-layout" },
  { name: "Marathahalli", slug: "marathahalli" },
  { name: "Electronic City", slug: "electronic-city" },
  { name: "Jayanagar", slug: "jayanagar" },
  { name: "Hebbal", slug: "hebbal" },
  { name: "Yelahanka", slug: "yelahanka" },
  { name: "Rajajinagar", slug: "rajajinagar" },
  { name: "Malleshwaram", slug: "malleshwaram" },
];

const TOP_PRODUCTS = [
  { name: "Elfbar Raya D1", slug: "elfbar-raya-d1" },
  { name: "Lost Mary MT35000 Turbo", slug: "lost-mary-mt35000-turbo" },
  { name: "ZYN Cool Mint", slug: "zyn-cool-mint" },
  { name: "Caliburn G4", slug: "caliburn-g4" },
  { name: "Nasty Bolt WTF 50K", slug: "nasty-bolt-wtf-50k" },
  { name: "IGET Astro B18000", slug: "iget-astro-b18000" },
  { name: "Elfbar Ice King", slug: "elfbar-ice-king" },
  { name: "Lost Mary MO10000", slug: "lost-mary-mo10000" },
];

export default function Footer() {
  const waLink = WHATSAPP.orderLink();

  return (
    <footer style={{ background: "var(--s1)", borderTop: "1px solid var(--b0)", paddingBottom: "80px" }}>

      {/* Main CTA strip */}
      <div style={{ background: "linear-gradient(135deg, rgba(255,92,0,0.08), rgba(255,45,85,0.05))", borderBottom: "1px solid var(--b0)", padding: "32px 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 3vw, 28px)", fontWeight: 900, color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "6px" }}>
                Ready to order?
              </h2>
              <p style={{ fontSize: "13px", color: "var(--dim)" }}>30-45 min delivery · {locations.length}+ areas · 100% original</p>
            </div>
            <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #FF5C00, #FF2D55)", color: "#fff", padding: "14px 28px", borderRadius: "10px", fontWeight: 800, fontSize: "14px", textDecoration: "none", boxShadow: "0 4px 20px rgba(255,92,0,0.3)", whiteSpace: "nowrap" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="container" style={{ padding: "40px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "32px", marginBottom: "40px" }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 900, color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "8px" }}>
              vape<span style={{ color: "var(--orange)" }}>bangalore</span><span style={{ color: "var(--dim)", fontSize: "12px", fontWeight: 400 }}>.com</span>
            </div>
            <p style={{ fontSize: "12px", color: "var(--dim)", lineHeight: 1.7, marginBottom: "16px" }}>
              Bangalore's fastest vape delivery. 30-45 min across {locations.length}+ areas. 100% original products.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: 700, color: "#25D366", background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.2)", padding: "6px 12px", borderRadius: "6px", textDecoration: "none" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Top Products */}
          <div>
            <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "14px" }}>Top Products</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {TOP_PRODUCTS.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`} style={{ fontSize: "12px", color: "var(--dim)", textDecoration: "none", transition: "color 0.15s" }}>
                  {p.name}
                </Link>
              ))}
              <Link href="/products" style={{ fontSize: "12px", color: "var(--orange)", textDecoration: "none", fontWeight: 600, marginTop: "4px" }}>
                View all {products.length} products →
              </Link>
            </div>
          </div>

          {/* Delivery Areas */}
          <div>
            <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "14px" }}>Delivery Areas</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {TOP_AREAS.map((a) => (
                <Link key={a.slug} href={`/vape-delivery/${a.slug}`} style={{ fontSize: "12px", color: "var(--dim)", textDecoration: "none" }}>
                  {a.name}
                </Link>
              ))}
              <Link href="/vape-delivery/koramangala" style={{ fontSize: "12px", color: "var(--orange)", textDecoration: "none", fontWeight: 600, marginTop: "4px" }}>
                All {locations.length}+ areas →
              </Link>
            </div>
          </div>

          {/* Brands */}
          <div>
            <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "14px" }}>Brands</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Elfbar", "Lost Mary", "Caliburn", "ZYN", "Nasty", "IGET", "Yuoto", "Velo"].map((brand) => (
                <Link key={brand} href={`/brands/${brand.toLowerCase().replace(" ", "-")}`} style={{ fontSize: "12px", color: "var(--dim)", textDecoration: "none" }}>
                  {brand}
                </Link>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "14px" }}>Info</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Link href="/about" style={{ fontSize: "12px", color: "var(--dim)", textDecoration: "none" }}>About Us</Link>
              <Link href="/blog" style={{ fontSize: "12px", color: "var(--dim)", textDecoration: "none" }}>Blog</Link>
              <Link href="/compare" style={{ fontSize: "12px", color: "var(--dim)", textDecoration: "none" }}>Compare Products</Link>
              <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "var(--dim)", textDecoration: "none" }}>Contact</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid var(--b0)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "11px", color: "var(--dim2)" }}>
            © 2026 VapeBangalore.com · Bangalore, Karnataka, India
          </p>
          <p style={{ fontSize: "11px", color: "var(--dim2)" }}>
            For adults 18+ only · Nicotine is addictive
          </p>
        </div>
      </div>
    </footer>
  );
}
