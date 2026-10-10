import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBrandBySlug, brands } from "@/lib/brands";
import { getProductsByBrand } from "@/lib/products";
import { SITE, WHATSAPP } from "@/lib/settings";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const brand = getBrandBySlug(params.slug);
  if (!brand) return {};
  return {
    title: brand.metaTitle,
    description: brand.metaDescription,
    alternates: { canonical: `${SITE.url}/brands/${brand.slug}` },
  };
}

export default function BrandPage({ params }: Props) {
  const brand = getBrandBySlug(params.slug);
  if (!brand) notFound();

  const brandProducts = getProductsByBrand(brand.name);
  const waLink = WHATSAPP.orderLink(`${brand.name} vape`);

  return (
    <main style={{ paddingTop: "60px" }}>
      {/* Hero */}
      <section style={{ background: "var(--bg)", borderBottom: "1px solid var(--b0)", padding: "40px 0 32px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: "-100px", right: "-100px", width: "500px", height: "500px", background: `radial-gradient(circle, ${brand.color}12 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div className="container">
          <div style={{ display: "flex", gap: "6px", alignItems: "center", marginBottom: "16px", fontSize: "11px", color: "var(--dim)" }}>
            <Link href="/" style={{ color: "var(--dim)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/brands" style={{ color: "var(--dim)", textDecoration: "none" }}>Brands</Link>
            <span>/</span>
            <span style={{ color: "var(--white)" }}>{brand.name}</span>
          </div>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: `${brand.color}15`, border: `1px solid ${brand.color}30`, borderRadius: "100px", padding: "4px 12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "10px", fontWeight: 700, color: brand.color, letterSpacing: "0.08em" }}>FROM {brand.origin.toUpperCase()}</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 6vw, 56px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: "12px" }}>
            <span style={{ color: brand.color }}>{brand.name}</span><br />
            <span style={{ color: "var(--white)", fontSize: "clamp(18px, 3vw, 28px)", fontWeight: 700 }}>in Bangalore</span>
          </h1>

          <p style={{ fontSize: "13px", fontStyle: "italic", color: "var(--orange)", marginBottom: "12px", fontWeight: 600 }}>{brand.tagline}</p>

          <p style={{ fontSize: "14px", color: "var(--dim)", lineHeight: 1.8, maxWidth: "620px", marginBottom: "28px" }}>{brand.story}</p>

          <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #FF5C00, #FF2D55)", color: "#fff", padding: "14px 28px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", textDecoration: "none", boxShadow: "0 4px 16px rgba(255,92,0,0.3)" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Order {brand.name} on WhatsApp
          </a>
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: "40px 0", background: "var(--s1)", borderBottom: "1px solid var(--b0)" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "20px" }}>
            {brand.name} Products in Bangalore
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }} className="brand-grid">
            {brandProducts.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} style={{ background: "var(--s2)", border: "1px solid var(--b0)", borderRadius: "10px", padding: "14px", textDecoration: "none", display: "block" }}>
                {product.isBestseller && <span style={{ fontSize: "8px", fontWeight: 800, background: "linear-gradient(135deg, #FF5C00, #FF2D55)", color: "#fff", padding: "2px 7px", borderRadius: "3px", letterSpacing: "0.08em", display: "inline-block", marginBottom: "6px" }}>🔥 BESTSELLER</span>}
                <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--white)", marginBottom: "4px", lineHeight: 1.3 }}>{product.name}</div>
                {product.puffCount && <div style={{ fontSize: "10px", color: "var(--dim)", fontFamily: "var(--font-mono)", marginBottom: "4px" }}>{product.puffCount.toLocaleString()} puffs</div>}
                <div style={{ fontSize: "15px", fontWeight: 700, fontFamily: "var(--font-mono)", background: "linear-gradient(135deg, #FF5C00, #FF2D55)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  &#8377;{product.price.toLocaleString()}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other brands */}
      <section style={{ padding: "40px 0", background: "var(--bg)" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "16px" }}>Other Brands in Bangalore</h2>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {brands.filter((b) => b.slug !== brand.slug).map((b) => (
              <Link key={b.slug} href={`/brands/${b.slug}`} style={{ fontSize: "12px", fontWeight: 600, color: "var(--dim)", background: "var(--s1)", border: "1px solid var(--b0)", padding: "7px 14px", borderRadius: "6px", textDecoration: "none" }}>
                {b.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 640px) { .brand-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (min-width: 1024px) { .brand-grid { grid-template-columns: repeat(4, 1fr) !important; } }
      `}</style>
    </main>
  );
}
