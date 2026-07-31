import type { Metadata } from "next";
import { SITE, WHATSAPP } from "@/lib/settings";
import { LOCATION_COUNT } from "@/lib/locations";

export const metadata: Metadata = {
  title: "About VapeBangalore — Bangalore's Trusted Vape Delivery | VapeBangalore.com",
  description: "VapeBangalore.com delivers 100% original vapes across 120+ Bangalore areas in 30-45 minutes. Learn about our sourcing, authenticity guarantee and delivery process.",
  alternates: { canonical: "https://vapebangalore.com/about" },
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Kannada", "Hindi"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        <div className="container" style={{ paddingTop: "48px", paddingBottom: "64px", maxWidth: "720px" }}>

          <div style={{ fontSize: "11px", color: "var(--orange)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>About</div>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            color: "var(--white)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}>
            Bangalore's Trusted<br />Vape Delivery
          </h1>

          <p style={{ color: "var(--text)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "32px" }}>
            VapeBangalore.com was built for one reason — Bangalore vapers deserved better. Better products, faster delivery, and a guarantee that what they ordered was genuine.
          </p>

          {/* Stats */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            marginBottom: "48px",
          }}>
            {[
              { val: "30-45", label: "Min Delivery" },
              { val: `${LOCATION_COUNT}+`, label: "Areas Covered" },
              { val: "100%", label: "Original Products" },
            ].map(({ val, label }) => (
              <div key={label} style={{
                background: "var(--s1)", border: "1px solid var(--b0)",
                borderRadius: "8px", padding: "20px", textAlign: "center",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 900, color: "var(--orange)", letterSpacing: "-0.02em" }}>{val}</div>
                <div style={{ fontSize: "11px", color: "var(--dim)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "4px" }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Sections */}
          {[
            {
              title: "Our Sourcing",
              body: "Every product we stock is sourced directly from authorised distributors. We do not buy from grey market suppliers. Every Elfbar, Lost Mary, Caliburn, ZYN and other brand we sell comes with full supply chain traceability.",
            },
            {
              title: "Authenticity Guarantee",
              body: "If you ever receive a product you believe is not genuine, WhatsApp us immediately. We will replace it, no questions asked. In 3 years of operation, we have had zero confirmed reports of inauthentic products.",
            },
            {
              title: "Delivery Process",
              body: "Once you place an order on WhatsApp, our team confirms availability and dispatch time within 5 minutes. Your rider is assigned immediately. Average delivery time is 30-45 minutes across Bangalore.",
            },
            {
              title: "Privacy & Discretion",
              body: "All orders are delivered in plain, unmarked packaging. No branding visible from outside. Your order details are never shared with anyone. We do not maintain a customer database beyond order fulfilment.",
            },
          ].map(({ title, body }) => (
            <div key={title} style={{ marginBottom: "32px" }}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                fontWeight: 800,
                color: "var(--white)",
                marginBottom: "10px",
              }}>{title}</h2>
              <p style={{ color: "var(--text)", fontSize: "0.95rem", lineHeight: 1.8 }}>{body}</p>
            </div>
          ))}

          {/* Contact */}
          <div style={{
            background: "var(--s1)", border: "1px solid var(--b0)",
            borderRadius: "16px", padding: "28px", marginTop: "16px",
          }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "1.1rem",
              fontWeight: 800, color: "var(--white)", marginBottom: "16px",
            }}>Get in Touch</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href={WHATSAPP.url} target="_blank" rel="noopener noreferrer"
                style={{ color: "#25D366", fontSize: "0.9rem", textDecoration: "none" }}>
                WhatsApp: +{WHATSAPP.number}
              </a>
              <a href={`mailto:${SITE.email}`}
                style={{ color: "var(--orange)", fontSize: "0.9rem", textDecoration: "none" }}>
                Email: {SITE.email}
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
