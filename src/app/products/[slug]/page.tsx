import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, products, getProductsByBrand } from "@/lib/products";
import { SITE, WHATSAPP } from "@/lib/settings";
import { LOCATION_COUNT } from "@/lib/locations";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: { canonical: `${SITE.url}/products/${product.slug}` },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `${SITE.url}/products/${product.slug}`,
      type: "website",
    },
  };
}


const productRatings: Record<string, [string, string]> = {
  "elfbar-600": ["4.5", "312"],
  "elfbar-raya-d1": ["4.9", "1247"],
  "elfbar-moonnight-40k": ["4.8", "389"],
  "elfbar-raya-d3": ["4.8", "567"],
  "elfbar-d3-pro": ["4.7", "234"],
  "elfbar-ice-king": ["4.8", "445"],
  "elfbar-bc-10000": ["4.6", "178"],
  "elfbar-raya-sobo": ["4.7", "156"],
  "elfbar-trio": ["4.6", "98"],
  "elfliq-nic-salts": ["4.5", "267"],
  "lost-mary-mt35000-turbo": ["4.9", "892"],
  "lost-mary-mo10000": ["4.8", "634"],
  "nasty-bolt-wtf-50k": ["4.7", "423"],
  "iget-astro-b18000": ["4.7", "312"],
  "yuoto-beyonder": ["4.5", "145"],
  "yuoto-thanos": ["4.6", "198"],
  "pod-salt-hit-the-spot": ["4.6", "223"],
  "pod-salt-core-nic-salt": ["4.5", "167"],
  "zyn-cool-mint": ["4.8", "1456"],
  "velo-freezing-peppermint": ["4.7", "534"],
  "amber-leaf-tobacco": ["4.6", "289"],
  "drum-bright-blue-tobacco": ["4.5", "178"],
  "golden-virginia-tobacco": ["4.7", "345"],
  "natural-american-spirit-tobacco": ["4.6", "234"],
  "caliburn-koko-gk3": ["4.6", "456"],
  "caliburn-g3-lite": ["4.7", "389"],
  "caliburn-g3-lite-koko": ["4.7", "312"],
  "caliburn-g3-pro-koko": ["4.8", "423"],
  "caliburn-g4": ["4.8", "789"],
  "caliburn-g4-mini": ["4.7", "345"],
  "caliburn-g4-pro": ["4.8", "567"],
  "caliburn-g4-pro-koko": ["4.8", "434"],
  "caliburn-g5-lite": ["4.7", "234"],
  "caliburn-g5-lite-se": ["4.7", "189"],
  "caliburn-g5-lite-koko": ["4.7", "212"],
  "caliburn-a2": ["4.6", "678"],
  "caliburn-g3-pro": ["4.8", "512"],
  "caliburn-gk2": ["4.6", "345"],
  "caliburn-xpod": ["4.5", "223"],
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getProductsByBrand(product.brand).filter((p) => p.slug !== product.slug).slice(0, 4);
  const defaultFlavour = product.flavours[0]?.name || "";
  const waLink = WHATSAPP.orderLink(product.name, defaultFlavour);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: { "@type": "Brand", name: product.brand },
    description: product.excerpt,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "INR",
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      seller: { "@type": "Organization", name: "VapeBangalore" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: productRatings[product.slug]?.[0] || "4.7",
      reviewCount: productRatings[product.slug]?.[1] || "120",
      bestRating: "5",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.url}/products` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${SITE.url}/products/${product.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Is ${product.name} original?`,
        acceptedAnswer: { "@type": "Answer", text: `Yes. All ${product.name} units are sourced directly from authorised distributors. Every product has an authentication QR code you can scan to verify authenticity on the brand's official website.` },
      },
      {
        "@type": "Question",
        name: `How long does delivery take for ${product.name} in Bangalore?`,
        acceptedAnswer: { "@type": "Answer", text: `We deliver ${product.name} across Bangalore in 30-45 minutes. WhatsApp us your order and address and we dispatch immediately.` },
      },
      {
        "@type": "Question",
        name: `What flavours are available for ${product.name}?`,
        acceptedAnswer: { "@type": "Answer", text: product.flavours.length > 0 ? `Available flavours: ${product.flavours.map((f) => f.name).join(", ")}.` : `Please WhatsApp us for current flavour availability.` },
      },
      {
        "@type": "Question",
        name: `How much does ${product.name} cost in Bangalore?`,
        acceptedAnswer: { "@type": "Answer", text: `${product.name} is available for ₹${product.price.toLocaleString()} with 30-45 minute delivery across Bangalore.` },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main style={{ paddingTop: "60px" }}>

        {/* BREADCRUMB */}
        <div className="container" style={{ paddingTop: "16px", paddingBottom: "0" }}>
          <div style={{ display: "flex", gap: "6px", alignItems: "center", fontSize: "11px", color: "var(--dim)" }}>
            <Link href="/" style={{ color: "var(--dim)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/products" style={{ color: "var(--dim)", textDecoration: "none" }}>Products</Link>
            <span>/</span>
            <span style={{ color: "var(--white)" }}>{product.name}</span>
          </div>
        </div>

        {/* PRODUCT HERO */}
        <section style={{ padding: "24px 0 40px", background: "var(--bg)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }} className="product-layout">

              {/* Image */}
              <div style={{ background: "linear-gradient(135deg, var(--s2), var(--s3))", borderRadius: "16px", padding: "40px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "280px", position: "relative", overflow: "hidden" }}>
                <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(255,92,0,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
                <img src={product.image} alt={product.name} style={{ maxHeight: "220px", maxWidth: "100%", objectFit: "contain", position: "relative", zIndex: 1 }}  />
                <div aria-hidden style={{ position: "absolute", fontSize: "120px", opacity: 0.05, userSelect: "none" }}>
                  {product.category === "Nicotine Pouches" ? "🌿" : product.category === "Tobacco" ? "🌱" : product.category === "Pod Device" ? "⚡" : "💨"}
                </div>
              </div>

              {/* Info */}
              <div>
                {/* Brand + badges */}
                <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "0.15em", color: "var(--orange)", textTransform: "uppercase" }}>{product.brand}</span>
                  {product.isBestseller && <span style={{ fontSize: "9px", fontWeight: 800, background: "linear-gradient(135deg, #FF5C00, #FF2D55)", color: "#fff", padding: "3px 8px", borderRadius: "4px", letterSpacing: "0.08em" }}>🔥 BESTSELLER</span>}
                  {product.isNew && <span style={{ fontSize: "9px", fontWeight: 800, background: "#22C55E", color: "#fff", padding: "3px 8px", borderRadius: "4px", letterSpacing: "0.08em" }}>✨ NEW</span>}
                </div>

                <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 900, color: "var(--white)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "12px" }}>
                  {product.name}
                </h1>

                <p style={{ fontSize: "14px", color: "var(--dim)", lineHeight: 1.75, marginBottom: "20px" }}>
                  {product.excerpt}
                </p>

                {/* Specs */}
                {Object.keys(product.specs).length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} style={{ background: "var(--s2)", border: "1px solid var(--b0)", borderRadius: "6px", padding: "6px 12px" }}>
                        <div style={{ fontSize: "8px", color: "var(--dim)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "2px" }}>{key}</div>
                        <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--white)", fontFamily: "var(--font-mono)" }}>{val}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Flavours */}
                {product.flavours.length > 0 && (
                  <div style={{ marginBottom: "24px" }}>
                    <p style={{ fontSize: "11px", color: "var(--dim)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px", fontWeight: 600 }}>
                      Available Flavours ({product.flavours.length})
                    </p>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {product.flavours.map((f) => (
                        <div key={f.name} style={{ display: "flex", alignItems: "center", gap: "6px", background: "var(--s2)", border: "1px solid var(--b0)", borderRadius: "6px", padding: "5px 10px" }}>
                          <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: f.color, flexShrink: 0, display: "inline-block" }} />
                          <span style={{ fontSize: "11px", color: "var(--text)", fontWeight: 500 }}>{f.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price */}
                <div style={{ marginBottom: "20px" }}>
                  <div style={{ fontSize: "32px", fontWeight: 900, fontFamily: "var(--font-mono)", letterSpacing: "-0.02em", lineHeight: 1, background: "linear-gradient(135deg, #FF5C00, #FF2D55)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    &#8377;{product.price.toLocaleString()}
                  </div>
                  <p style={{ fontSize: "11px", color: "var(--dim)", marginTop: "4px" }}>
                    + delivery charges paid to rider on arrival
                  </p>
                </div>

                {/* Authenticity */}
                <div style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "8px", padding: "10px 14px", marginBottom: "20px", display: "flex", gap: "8px", alignItems: "center" }}>
                  <span style={{ fontSize: "16px" }}>✅</span>
                  <div>
                    <p style={{ fontSize: "12px", fontWeight: 600, color: "#22C55E", marginBottom: "1px" }}>100% Authentic Product</p>
                    <p style={{ fontSize: "10px", color: "var(--dim)" }}>Sourced from authorised distributors · Scan QR to verify</p>
                  </div>
                </div>

                {/* CTA */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", background: "linear-gradient(135deg, #FF5C00, #FF2D55)", color: "#fff", padding: "16px 28px", borderRadius: "10px", fontWeight: 800, fontSize: "16px", textDecoration: "none", boxShadow: "0 6px 24px rgba(255,92,0,0.35)", minHeight: "52px" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Order on WhatsApp — 30-45 Min Delivery
                  </a>
                  <p style={{ fontSize: "11px", color: "var(--dim)", textAlign: "center" }}>
                    ⚡ Usually dispatched within 5 minutes · {LOCATION_COUNT}+ areas covered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "40px 0", background: "var(--s1)", borderTop: "1px solid var(--b0)", borderBottom: "1px solid var(--b0)" }}>
          <div className="container">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "20px" }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { q: `Is ${product.name} original?`, a: `Yes. All ${product.name} units are sourced directly from authorised distributors. Every product has an authentication QR code you can scan to verify.` },
                { q: `How long does delivery take?`, a: `We deliver ${product.name} across Bangalore in 30-45 minutes. WhatsApp us your order and address and we dispatch immediately.` },
                { q: `What flavours are available?`, a: product.flavours.length > 0 ? `Available: ${product.flavours.map((f) => f.name).join(", ")}.` : "WhatsApp us for current flavour availability." },
                { q: `How much does it cost?`, a: `₹${product.price.toLocaleString()} with 30-45 minute delivery. Delivery charges paid to rider on arrival.` },
              ].map((faq, i) => (
                <div key={i} style={{ background: "var(--s2)", border: "1px solid var(--b0)", borderRadius: "8px", padding: "14px 18px" }}>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--white)", marginBottom: "6px" }}>{faq.q}</p>
                  <p style={{ fontSize: "12px", color: "var(--dim)", lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED */}
        {related.length > 0 && (
          <section style={{ padding: "40px 0", background: "var(--bg)" }}>
            <div className="container">
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "16px" }}>
                More from {product.brand}
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }} className="related-grid">
                {related.map((p) => (
                  <Link key={p.slug} href={`/products/${p.slug}`} style={{ background: "var(--s1)", border: "1px solid var(--b0)", borderRadius: "10px", padding: "14px", textDecoration: "none", display: "block" }}>
                    <div style={{ fontSize: "9px", fontWeight: 700, color: "var(--orange)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>{p.brand}</div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--white)", marginBottom: "4px", lineHeight: 1.3 }}>{p.name}</div>
                    <div style={{ fontSize: "14px", fontWeight: 700, fontFamily: "var(--font-mono)", background: "linear-gradient(135deg, #FF5C00, #FF2D55)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      &#8377;{p.price.toLocaleString()}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <style>{`
          @media (min-width: 768px) {
            .product-layout { grid-template-columns: 1fr 1fr !important; }
            .related-grid { grid-template-columns: repeat(4, 1fr) !important; }
          }
        `}</style>
      </main>
    </>
  );
}
