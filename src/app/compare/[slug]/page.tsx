import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { comparisons, getComparison } from "@/lib/comparisons";
import { WHATSAPP } from "@/lib/settings";

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return {};
  return {
    title: comparison.metaTitle,
    description: comparison.metaDescription,
    alternates: { canonical: `https://vapebangalore.com/compare/${slug}` },
  };
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();

  const [a, b] = comparison.products;
  const allSpecs = Array.from(new Set([...Object.keys(a.specs), ...Object.keys(b.specs)]));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Which is better — ${a.name} or ${b.name}?`,
        acceptedAnswer: { "@type": "Answer", text: comparison.verdict },
      },
      {
        "@type": "Question",
        name: `Where to buy ${a.name} and ${b.name} in Bangalore?`,
        acceptedAnswer: { "@type": "Answer", text: "Both are available on VapeBangalore.com with 30-45 minute delivery across 120+ Bangalore areas. Order on WhatsApp." },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        <div className="container" style={{ paddingTop: "48px", paddingBottom: "64px" }}>

          {/* Header */}
          <div style={{ marginBottom: "40px" }}>
            <div style={{ fontSize: "11px", color: "var(--orange)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
              Comparison
            </div>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 900,
              color: "var(--white)",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}>
              {comparison.title}
            </h1>
            <p style={{ color: "var(--text)", fontSize: "1rem", maxWidth: "640px", lineHeight: 1.7 }}>
              {comparison.intro}
            </p>
          </div>

          {/* Spec Table */}
          <div style={{
            background: "var(--s1)",
            border: "1px solid var(--b0)",
            borderRadius: "16px",
            overflow: "hidden",
            marginBottom: "32px",
          }}>
            {/* Table Header */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              borderBottom: "1px solid var(--b0)",
            }}>
              <div style={{ padding: "16px", fontSize: "11px", color: "var(--dim)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Spec</div>
              <div style={{ padding: "16px", fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--white)", borderLeft: "1px solid var(--b0)" }}>{a.name}</div>
              <div style={{ padding: "16px", fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--white)", borderLeft: "1px solid var(--b0)" }}>{b.name}</div>
            </div>
            {/* Rows */}
            {allSpecs.map((spec, i) => (
              <div key={spec} style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                borderBottom: i < allSpecs.length - 1 ? "1px solid var(--b0)" : "none",
                background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
              }}>
                <div style={{ padding: "14px 16px", fontSize: "12px", color: "var(--dim)" }}>{spec}</div>
                <div style={{ padding: "14px 16px", fontSize: "12px", color: "var(--text)", borderLeft: "1px solid var(--b0)" }}>{a.specs[spec] || "—"}</div>
                <div style={{ padding: "14px 16px", fontSize: "12px", color: "var(--text)", borderLeft: "1px solid var(--b0)" }}>{b.specs[spec] || "—"}</div>
              </div>
            ))}
          </div>

          {/* Verdict */}
          <div style={{
            background: "var(--s1)",
            border: "1px solid var(--orange)",
            borderRadius: "16px",
            padding: "28px",
            marginBottom: "32px",
          }}>
            <div style={{ fontSize: "11px", color: "var(--orange)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>
              Verdict
            </div>
            <p style={{ color: "var(--white)", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
              {comparison.verdict}
            </p>
          </div>

          {/* CTA */}
          <div style={{
            background: "var(--s1)",
            border: "1px solid var(--b0)",
            borderRadius: "16px",
            padding: "32px",
            textAlign: "center",
          }}>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.25rem",
              fontWeight: 800,
              color: "var(--white)",
              marginBottom: "8px",
            }}>
              Order in Bangalore — 30-45 Min Delivery
            </h2>
            <p style={{ color: "var(--dim)", marginBottom: "24px", fontSize: "0.9rem" }}>
              Both available now · 100% original · Cash on delivery
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href={WHATSAPP.orderLink(a.name)} target="_blank" rel="noopener noreferrer" style={{
                background: "#25D366", color: "#fff",
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.88rem",
                padding: "12px 24px", borderRadius: "8px", textDecoration: "none",
              }}>Order {a.name} →</a>
              <a href={WHATSAPP.orderLink(b.name)} target="_blank" rel="noopener noreferrer" style={{
                background: "#25D366", color: "#fff",
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.88rem",
                padding: "12px 24px", borderRadius: "8px", textDecoration: "none",
              }}>Order {b.name} →</a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
