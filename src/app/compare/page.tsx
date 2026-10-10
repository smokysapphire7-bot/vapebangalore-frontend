import type { Metadata } from "next";
import Link from "next/link";
import { comparisons } from "@/lib/comparisons";
import { SITE } from "@/lib/settings";

export const metadata: Metadata = {
  title: "Vape Comparisons Bangalore — Elfbar vs Lost Mary & More | VapeBangalore.com",
  description: "Compare vapes in Bangalore. Elfbar vs Lost Mary, Disposable vs Pod Device, ZYN vs Velo and more. Honest side-by-side comparisons to help you choose.",
  alternates: { canonical: `${SITE.url}/compare` },
};

export default function ComparePage() {
  return (
    <main style={{ paddingTop: "60px" }}>
      <section style={{ padding: "40px 0", background: "var(--bg)", borderBottom: "1px solid var(--b0)" }}>
        <div className="container">
          <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", color: "var(--orange)", textTransform: "uppercase", marginBottom: "10px" }}>Compare</p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, color: "var(--white)", letterSpacing: "-0.03em", marginBottom: "12px" }}>
            Vape Comparisons<br />
            <span style={{ color: "var(--orange)" }}>Bangalore</span>
          </h1>
          <p style={{ fontSize: "14px", color: "var(--dim)", maxWidth: "560px", lineHeight: 1.75 }}>
            Can't decide which vape to order? Honest side-by-side comparisons of the most popular products in Bangalore.
          </p>
        </div>
      </section>

      <section style={{ padding: "40px 0", background: "var(--s1)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {comparisons.map((comp) => (
              <Link key={comp.slug} href={`/compare/${comp.slug}`} style={{ background: "var(--s2)", border: "1px solid var(--b0)", borderRadius: "12px", padding: "20px 24px", textDecoration: "none", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: "16px" }}>
                <div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700, color: "var(--white)", letterSpacing: "-0.01em", marginBottom: "6px" }}>{comp.title}</h2>
                  <p style={{ fontSize: "12px", color: "var(--dim)", lineHeight: 1.6 }}>{comp.verdict.slice(0, 100)}...</p>
                  <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
                    <span style={{ fontSize: "10px", fontWeight: 600, color: "var(--white)", background: "var(--s3)", border: "1px solid var(--b1)", padding: "3px 10px", borderRadius: "4px" }}>{comp.product1.name}</span>
                    <span style={{ fontSize: "10px", color: "var(--dim)", alignSelf: "center" }}>vs</span>
                    <span style={{ fontSize: "10px", fontWeight: 600, color: "var(--white)", background: "var(--s3)", border: "1px solid var(--b1)", padding: "3px 10px", borderRadius: "4px" }}>{comp.product2.name}</span>
                  </div>
                </div>
                <span style={{ color: "var(--orange)", fontSize: "18px", flexShrink: 0 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
