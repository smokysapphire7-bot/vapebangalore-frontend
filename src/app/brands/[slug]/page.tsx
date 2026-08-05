import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { brands, getBrand } from "@/lib/brands";
import { products } from "@/lib/products";
import { WHATSAPP } from "@/lib/settings";

export async function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  return {
    title: brand.metaTitle,
    description: brand.metaDescription,
    alternates: { canonical: `https://vapebangalore.com/brands/${slug}` },
  };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const brandProducts = products.filter((p) => brand.productSlugs.includes(p.slug));

  const schema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: brand.name,
    description: brand.story,
    url: `https://vapebangalore.com/brands/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        <div className="container" style={{ paddingTop: "48px", paddingBottom: "64px" }}>

          <div style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
              {brand.tags.map((tag) => (
                <span key={tag} style={{
                  background: "var(--orange-dim)", color: "var(--orange)",
                  border: "1px solid rgba(255,92,0,0.2)", borderRadius: "100px",
                  padding: "3px 12px", fontSize: "11px", fontWeight: 700,
                  letterSpacing: "0.06em", textTransform: "uppercase" as const,
                }}>{tag}</span>
              ))}
            </div>
            <h1 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900, color: "var(--white)", letterSpacing: "-0.03em",
              lineHeight: 1.1, marginBottom: "16px",
            }}>
              {brand.name} in Bangalore
            </h1>
            <p style={{ color: "var(--text)", fontSize: "1rem", maxWidth: "600px", lineHeight: 1.7 }}>
              {brand.story}
            </p>
          </div>

          {brandProducts.length > 0 && (
            <div style={{ marginBottom: "48px" }}>
              <h2 style={{
                fontFamily: "var(--font-display)", fontSize: "1.25rem",
                fontWeight: 800, color: "var(--white)", marginBottom: "20px",
              }}>
                {brand.name} Products Available in Bangalore
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px" }}>
                {brandProducts.map((product) => (
                  <a key={product.slug} href={`/products/${product.slug}`} style={{
                    background: "var(--s1)", border: "1px solid var(--b0)",
                    borderRadius: "12px", padding: "20px", textDecoration: "none", display: "block",
                  }}>
                    <div style={{ fontSize: "11px", color: "var(--dim)", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: "8px" }}>{product.category}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, color: "var(--white)", marginBottom: "8px" }}>{product.name}</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "var(--orange)" }}>{"₹"}{product.price.toLocaleString("en-IN")}</div>
                    {product.puffCount && (
                      <div style={{ fontSize: "11px", color: "var(--dim)", marginTop: "4px" }}>{product.puffCount.toLocaleString()} puffs</div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}

          <div style={{
            background: "var(--s1)", border: "1px solid var(--b0)",
            borderRadius: "16px", padding: "32px", textAlign: "center" as const,
          }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 800, color: "var(--white)", marginBottom: "8px" }}>
              Order {brand.name} in Bangalore
            </h2>
            <p style={{ color: "var(--dim)", marginBottom: "24px", fontSize: "0.9rem" }}>
              30-45 minute delivery · 100% original ·  available
            </p>
            <a
              href={WHATSAPP.orderLink(`${brand.name} products`)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block", background: "#25D366", color: "#fff",
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem",
                padding: "14px 32px", borderRadius: "8px", textDecoration: "none",
              }}
            >
              Order on WhatsApp
            </a>
          </div>

        </div>
      </main>
    </>
  );
}
