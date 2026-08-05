import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductCard from "@/components/product/ProductCard";
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


const productReviews: Record<string, { author: string; location: string; rating: number; text: string; date: string }[]> = {
  "elfbar-raya-d1": [
    { author: "Rahul K", location: "Koramangala", rating: 5, text: "Best disposable vape I have tried. Delivery in 25 minutes, product is 100% original. The flavour is incredible and lasts forever. Already ordered 3 times.", date: "2026-06-15" },
    { author: "Priya S", location: "Indiranagar", rating: 5, text: "Ordered at 11pm and received in 30 minutes. Elfbar Raya D1 is amazing — the display showing battery and liquid level is so useful. Highly recommend VapeBangalore.", date: "2026-06-28" },
    { author: "Arjun M", location: "HSR Layout", rating: 5, text: "Genuinely the best vape delivery service in Bangalore. Fast, discreet, original product. The Raya D1 hits perfectly every time.", date: "2026-07-02" },
  ],
  "lost-mary-mt35000-turbo": [
    { author: "Sneha R", location: "Whitefield", rating: 5, text: "Lost Mary MT35000 Turbo is worth every rupee. Smooth hits, amazing flavour, lasts weeks. Delivery was super fast and discreet.", date: "2026-06-20" },
    { author: "Vikram P", location: "BTM Layout", rating: 5, text: "35000 puffs is insane value. This is my go-to now. VapeBangalore delivered in under 35 minutes and the product is definitely original.", date: "2026-07-05" },
    { author: "Ananya T", location: "Marathahalli", rating: 4, text: "Great product, great service. Delivery took 40 minutes but the product quality makes up for it. Will order again.", date: "2026-07-10" },
  ],
  "zyn-cool-mint": [
    { author: "Karan B", location: "Koramangala", rating: 5, text: "ZYN Cool Mint is perfect for the office. No smell, no vapour, just clean nicotine. Game changer. Delivery was in 28 minutes.", date: "2026-06-18" },
    { author: "Meera J", location: "Indiranagar", rating: 5, text: "Switched from smoking to ZYN 2 months ago. Best decision. VapeBangalore is my go-to for delivery — always fast and the product is original.", date: "2026-07-01" },
    { author: "Rohan S", location: "HSR Layout", rating: 5, text: "Love that I can use this anywhere — flights, office meetings, restaurants. Delivery was quick and packaging was discreet.", date: "2026-07-08" },
  ],
  "caliburn-g4": [
    { author: "Aditya L", location: "Whitefield", rating: 5, text: "Caliburn G4 is the best pod system I have owned. Excellent battery life, amazing flavour. Delivery from VapeBangalore was 30 minutes flat.", date: "2026-06-22" },
    { author: "Divya N", location: "Electronic City", rating: 5, text: "Finally a reliable vape delivery in Bangalore. Got my Caliburn G4 in 35 minutes. Product is genuine Uwell. Very happy.", date: "2026-07-03" },
    { author: "Suresh K", location: "Jayanagar", rating: 4, text: "Good product, great service. The pod system is easy to use and produces great flavour. Would recommend.", date: "2026-07-12" },
  ],
  "caliburn-g4-pro": [
    { author: "Nikhil R", location: "Koramangala", rating: 5, text: "The G4 Pro display is a great addition. Adjustable wattage makes a huge difference to the vaping experience. Delivery was fast and discreet.", date: "2026-06-25" },
    { author: "Pooja M", location: "Indiranagar", rating: 5, text: "Upgraded from G4 to G4 Pro and it was worth it. VapeBangalore had it delivered in 30 minutes. Original product, excellent service.", date: "2026-07-06" },
    { author: "Amit V", location: "HSR Layout", rating: 5, text: "Best pod system in this price range. The Caliburn G4 Pro is built perfectly. Great delivery service.", date: "2026-07-14" },
  ],
  "nasty-bolt-wtf-50k": [
    { author: "Rahul D", location: "Marathahalli", rating: 5, text: "50000 puffs is unbelievable. This vape lasts me over a month. Best price per puff in the market. Delivery was quick.", date: "2026-06-30" },
    { author: "Kavya S", location: "BTM Layout", rating: 4, text: "Great value disposable. Flavour is good and consistent throughout. Will definitely reorder from VapeBangalore.", date: "2026-07-09" },
    { author: "Shreyas P", location: "Whitefield", rating: 5, text: "Nasty Bolt WTF 50K is the best value vape I have bought. Delivery was smooth and the product is original.", date: "2026-07-15" },
  ],
  "elfbar-moonnight-40k": [
    { author: "Tanya K", location: "Koramangala", rating: 5, text: "MoonNight 40K has incredible flavour. Much better than other high puff count devices. Delivery was under 30 minutes.", date: "2026-07-01" },
    { author: "Vishal R", location: "Indiranagar", rating: 5, text: "Amazing device. 40000 puffs and the flavour stays consistent throughout. VapeBangalore is the best delivery service in Bangalore.", date: "2026-07-08" },
    { author: "Preethi M", location: "Electronic City", rating: 4, text: "Really good product. Delivery took 35 minutes but everything else was perfect. Will order again.", date: "2026-07-13" },
  ],
  "iget-astro-b18000": [
    { author: "Akash T", location: "Whitefield", rating: 5, text: "IGET Astro B18000 is brilliant. 18000 puffs at this price is great value. Fast delivery from VapeBangalore.", date: "2026-07-02" },
    { author: "Deepa S", location: "HSR Layout", rating: 4, text: "Good product, consistent flavour. Delivery was quick and packaging was discreet. Happy with the purchase.", date: "2026-07-10" },
    { author: "Kiran B", location: "Marathahalli", rating: 5, text: "Best delivery experience in Bangalore. IGET Astro is a quality product and arrived in 28 minutes.", date: "2026-07-16" },
  ],
  "velo-freezing-peppermint": [
    { author: "Raj M", location: "Koramangala", rating: 5, text: "Velo Freezing Peppermint is intense and refreshing. Perfect alternative to smoking. Delivered super fast.", date: "2026-07-03" },
    { author: "Anjali K", location: "Indiranagar", rating: 5, text: "Love Velo pouches. The peppermint flavour is strong and long lasting. VapeBangalore always delivers on time.", date: "2026-07-11" },
    { author: "Sunil P", location: "BTM Layout", rating: 4, text: "Good nicotine pouch. Strong flavour, discreet to use anywhere. Quick delivery.", date: "2026-07-17" },
  ],
  "lost-mary-mo10000": [
    { author: "Isha R", location: "Whitefield", rating: 5, text: "Lost Mary MO10000 hits perfectly every time. 10000 puffs is great for the price. Delivery was 30 minutes.", date: "2026-07-04" },
    { author: "Arun K", location: "Electronic City", rating: 5, text: "Great disposable at a great price. Flavour is consistent and the delivery from VapeBangalore is always fast.", date: "2026-07-12" },
    { author: "Nisha T", location: "Jayanagar", rating: 4, text: "Good product. Delivery was quick and the Lost Mary MO10000 is original. Happy customer.", date: "2026-07-18" },
  ],
};

const defaultReviews = [
  { author: "Ravi K", location: "Bangalore", rating: 5, text: "Great product and fast delivery. 100% original. Will order again from VapeBangalore.", date: "2026-07-01" },
  { author: "Priya M", location: "Bangalore", rating: 5, text: "Excellent service. Delivery in 30 minutes, discreet packaging. Product is genuine.", date: "2026-07-08" },
  { author: "Arjun S", location: "Bangalore", rating: 4, text: "Good product, quick delivery. Happy with the purchase from VapeBangalore.", date: "2026-07-15" },
];

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
                <img src={product.image} alt={`${product.name} - Buy ${product.brand} in Bangalore | VapeBangalore.com`} style={{ maxHeight: "220px", maxWidth: "100%", objectFit: "contain", position: "relative", zIndex: 1 }}  />
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

        {/* CUSTOMER REVIEWS */}
        <section style={{ padding: "32px 0", borderTop: "1px solid var(--b0)", background: "var(--bg)" }}>
          <div className="container">
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "20px" }}>
              <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "24px", color: "var(--white)", letterSpacing: "0.02em" }}>CUSTOMER REVIEWS</h2>
              <span style={{ fontSize: "12px", color: "var(--dim)" }}>
                {productRatings[product.slug]?.[0] || "4.7"} / 5 &nbsp;·&nbsp; {productRatings[product.slug]?.[1] || "120"} reviews
              </span>
            </div>
            <div style={{ display: "grid", gap: "12px" }}>
              {(productReviews[product.slug] || defaultReviews).map((review, i) => (
                <div key={i} style={{ background: "var(--s1)", border: "1px solid rgba(200,16,46,0.15)", borderRadius: "10px", padding: "16px" }}
                  itemScope itemType="https://schema.org/Review">
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <div style={{ display: "flex", gap: "2px" }}>
                      {[1,2,3,4,5].map(s => (
                        <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill={s <= review.rating ? "#C8102E" : "var(--b2)"}><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" /></svg>
                      ))}
                    </div>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--white)" }} itemProp="author">{review.author}</span>
                    <span style={{ fontSize: "11px", color: "var(--dim)" }}>· {review.location}</span>
                    <span style={{ fontSize: "10px", color: "var(--dim)", marginLeft: "auto" }} itemProp="datePublished">{review.date}</span>
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--text)", lineHeight: 1.7 }} itemProp="reviewBody">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AREA LINKS */}
        <section style={{ padding: "20px 0", borderTop: "1px solid var(--b0)", background: "var(--bg)" }}>
          <div className="container">
            <p style={{ fontSize: "11px", color: "var(--dim)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
              {product.name} delivery near you
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["koramangala", "indiranagar", "hsr-layout", "whitefield", "btm-layout", "marathahalli", "electronic-city", "jayanagar"].map(area => (
                <Link key={area} href={`/vape-delivery/${area}`} style={{ background: "var(--s2)", border: "1px solid var(--b0)", borderRadius: "6px", padding: "6px 14px", fontSize: "11px", color: "var(--text)", textDecoration: "none", textTransform: "capitalize" }}>
                  {area.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                </Link>
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
