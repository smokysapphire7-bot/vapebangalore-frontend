import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getLocationBySlug, getNearbyLocations, locations, LOCATION_COUNT } from "@/lib/locations";
import { SITE, WHATSAPP } from "@/lib/settings";
import { products, getBestsellers } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) return {};
  return {
    title: `Vapes in ${loc.name} Bangalore — Buy Elfbar, Lost Mary, ZYN | 30 Min Delivery | VapeBangalore.com`,
    description: `Buy vapes in ${loc.name}, Bangalore in 30 minutes. Elfbar Raya D1, Lost Mary, Caliburn, ZYN nicotine pouches, rolling tobacco & more. 100% original. Cash on delivery. Order on WhatsApp now — fastest vape delivery in ${loc.name}.`,
    alternates: { canonical: `${SITE.url}/vape-delivery/${loc.slug}` },
    openGraph: {
      title: `Vapes in ${loc.name} Bangalore — 30 Min Delivery | VapeBangalore.com`,
      description: `Buy Elfbar, Lost Mary, ZYN & more in ${loc.name} in 30 minutes. 100% original. Cash on delivery.`,
      url: `${SITE.url}/vape-delivery/${loc.slug}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) notFound();

  const nearby = getNearbyLocations(slug, 6);
  const bestsellers = getBestsellers().slice(0, 8);
  const waLink = WHATSAPP.orderLink(`vape delivery in ${loc.name}`);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `VapeBangalore — ${loc.name}`,
    url: `${SITE.url}/vape-delivery/${loc.slug}`,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.name,
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    geo: loc.geoLat ? {
      "@type": "GeoCoordinates",
      latitude: loc.geoLat,
      longitude: loc.geoLng,
    } : undefined,
    areaServed: loc.name,
    openingHours: SITE.openingHours,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How fast is vape delivery in ${loc.name}?`,
        acceptedAnswer: { "@type": "Answer", text: `We deliver vapes in ${loc.name} in 30-45 minutes. Order on WhatsApp and we dispatch immediately.` },
      },
      {
        "@type": "Question",
        name: `Which vapes are available for delivery in ${loc.name}?`,
        acceptedAnswer: { "@type": "Answer", text: `We deliver Elfbar, Lost Mary, Caliburn, ZYN, Nasty, IGET, Yuoto and more to ${loc.name}. Full product range available.` },
      },
      {
        "@type": "Question",
        name: `How do I order vapes in ${loc.name}?`,
        acceptedAnswer: { "@type": "Answer", text: `WhatsApp us at +91 6282878843. Tell us your product, flavour and address in ${loc.name}. We confirm and dispatch in minutes.` },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vapebangalore.com" },
        { "@type": "ListItem", "position": 2, "name": "Vape Delivery Areas", "item": "https://vapebangalore.com/areas" },
        { "@type": "ListItem", "position": 3, "name": `Vape Delivery ${loc.name}`, "item": `https://vapebangalore.com/vape-delivery/${loc.slug}` },
      ]
    }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main style={{ paddingTop: "60px" }}>

        {/* HERO */}
        <section style={{ background: "var(--bg)", borderBottom: "1px solid var(--b0)", padding: "40px 0 32px", position: "relative", overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", top: "-100px", right: "-100px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(255,92,0,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div className="container">
            {/* Breadcrumb */}
            <div style={{ display: "flex", gap: "6px", alignItems: "center", marginBottom: "16px", fontSize: "12px", color: "var(--dim)" }}>
              <Link href="/" style={{ color: "var(--dim)", textDecoration: "none" }}>Home</Link>
              <span>/</span>
              <Link href="/vape-delivery/koramangala" style={{ color: "var(--dim)", textDecoration: "none" }}>Delivery Areas</Link>
              <span>/</span>
              <span style={{ color: "var(--white)" }}>{loc.name}</span>
            </div>

            {/* Live badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--orange-dim)", border: "1px solid rgba(255,92,0,0.25)", borderRadius: "100px", padding: "4px 12px", marginBottom: "16px" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--orange)", display: "inline-block" }} />
              <span style={{ fontSize: "10px", fontWeight: 700, color: "var(--orange)", letterSpacing: "0.08em" }}>DELIVERING NOW</span>
            </div>

            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 5vw, 48px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "12px" }}>
              Vape Delivery in<br />
              <span style={{ background: "linear-gradient(135deg, #FF5C00, #FF2D55)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{loc.name}</span>
            </h1>

            <p style={{ fontSize: "14px", color: "var(--dim)", lineHeight: 1.7, maxWidth: "560px", marginBottom: "24px" }}>
              {loc.localNote}
            </p>

            {/* Sublocations */}
            {loc.sublocations.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "28px" }}>
                {loc.sublocations.map((sub) => (
                  <span key={sub} style={{ fontSize: "11px", color: "var(--dim)", background: "var(--s2)", border: "1px solid var(--b0)", padding: "4px 10px", borderRadius: "100px" }}>{sub}</span>
                ))}
              </div>
            )}

            {/* CTA */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #FF5C00, #FF2D55)", color: "#fff", padding: "14px 28px", borderRadius: "8px", fontWeight: 700, fontSize: "15px", textDecoration: "none", boxShadow: "0 4px 16px rgba(255,92,0,0.3)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Order on WhatsApp
              </a>
              <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
                {[{ icon: "⚡", text: "30-45 Min" }, { icon: "✅", text: "100% Original" }, { icon: "📦", text: "Discreet" }].map((t) => (
                  <div key={t.text} style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", color: "var(--dim)" }}>
                    <span>{t.icon}</span><span>{t.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BESTSELLERS */}
        <section style={{ padding: "40px 0", background: "var(--s1)", borderBottom: "1px solid var(--b0)" }}>
          <div className="container">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "20px" }}>
              Top Products Delivered in {loc.name}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }} className="prod-grid">
              {bestsellers.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
            <div style={{ marginTop: "16px", textAlign: "center" }}>
              <Link href="/products" style={{ fontSize: "13px", color: "var(--orange)", textDecoration: "none", fontWeight: 600, border: "1px solid rgba(255,92,0,0.25)", padding: "8px 20px", borderRadius: "6px", display: "inline-block" }}>
                View All {products.length} Products
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section style={{ padding: "24px 0", borderBottom: "1px solid var(--b0)", background: "var(--bg)" }}>
          <div className="container">
            <p style={{ fontSize: "11px", color: "var(--dim)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>Shop by brand in {loc.name}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
              {[
                { href: "/elfbar-bangalore", label: "Elfbar" },
                { href: "/lost-mary-bangalore", label: "Lost Mary" },
                { href: "/zyn-bangalore", label: "ZYN" },
                { href: "/brands/caliburn", label: "Caliburn" },
                { href: "/brands/nasty", label: "Nasty" },
                { href: "/disposable-vapes-bangalore", label: "Disposables" },
                { href: "/nicotine-pouches-bangalore", label: "Nicotine Pouches" },
              ].map(b => (
                <Link key={b.href} href={b.href} style={{ background: "var(--s2)", border: "1px solid rgba(200,16,46,0.2)", borderRadius: "6px", padding: "7px 14px", fontSize: "12px", fontWeight: 500, color: "var(--text)", textDecoration: "none" }}>
                  {b.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "40px 0", background: "var(--bg)", borderBottom: "1px solid var(--b0)" }}>
          <div className="container">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "20px" }}>
              FAQs — Vape Delivery in {loc.name}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { q: `How fast is vape delivery in ${loc.name}?`, a: `We deliver vapes in ${loc.name} in 30-45 minutes. Order on WhatsApp and we dispatch immediately.` },
                { q: `Which areas of ${loc.name} do you cover?`, a: loc.sublocations.length > 0 ? `We cover all of ${loc.name} including ${loc.sublocations.join(", ")}.` : `We cover all of ${loc.name} and surrounding areas.` },
                { q: `Are the vapes original in ${loc.name}?`, a: "Yes, 100% original products from authorised distributors. Every product has an authentication QR code you can scan to verify." },
              ].map((faq, i) => (
                <div key={i} style={{ background: "var(--s1)", border: "1px solid var(--b0)", borderRadius: "8px", padding: "16px 20px" }}>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--white)", marginBottom: "8px" }}>{faq.q}</p>
                  <p style={{ fontSize: "12px", color: "var(--dim)", lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEARBY AREAS */}
        <section style={{ padding: "40px 0", background: "var(--s1)" }}>
          <div className="container">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "16px" }}>
              Nearby Delivery Areas
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }} className="nearby-grid">
              {nearby.map((area) => (
                <Link key={area.slug} href={`/vape-delivery/${area.slug}`} style={{ background: "var(--s2)", border: "1px solid var(--b0)", borderRadius: "8px", padding: "12px 14px", textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--white)" }}>{area.name}</div>
                    <div style={{ fontSize: "10px", color: "var(--dim)", marginTop: "2px" }}>30-45 min delivery</div>
                  </div>
                  <span style={{ color: "var(--orange)", fontSize: "16px" }}>&#8594;</span>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: "16px", textAlign: "center" }}>
              <p style={{ fontSize: "12px", color: "var(--dim)" }}>
                Covering {LOCATION_COUNT}+ areas across Bangalore
              </p>
            </div>
          </div>
        </section>

        <style>{`
          @media (min-width: 640px) {
            .prod-grid { grid-template-columns: repeat(4, 1fr) !important; }
            .nearby-grid { grid-template-columns: repeat(3, 1fr) !important; }
          }
        `}</style>
      </main>
    </>
  );
}
