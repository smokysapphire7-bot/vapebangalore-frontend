import type { Metadata } from "next";
import Link from "next/link";
import { locations, LOCATION_COUNT } from "@/lib/locations";

export const metadata: Metadata = {
  title: `Vape Delivery Areas Bangalore — ${LOCATION_COUNT}+ Locations | VapeBangalore.com`,
  description: `Vape delivery across ${LOCATION_COUNT}+ areas in Bangalore. Koramangala, Indiranagar, HSR Layout, Whitefield, BTM Layout and more. 30 min delivery.`,
  alternates: { canonical: "https://vapebangalore.com/areas" },
};

export default function AreasPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "80px" }}>
      <div className="container" style={{ paddingTop: "32px", paddingBottom: "100px" }}>
        <div style={{ marginBottom: "32px" }}>
          <div style={{ fontSize: "11px", color: "var(--orange)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Delivery Coverage</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "var(--white)", letterSpacing: "-0.025em", marginBottom: "8px" }}>
            {LOCATION_COUNT}+ Areas in Bangalore
          </h1>
          <p style={{ color: "var(--dim)", fontSize: "0.9rem" }}>30-45 min delivery across all areas below.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "8px" }}>
          {locations.map((loc) => (
            <Link key={loc.slug} href={`/vape-delivery/${loc.slug}`} style={{ display: "block", background: "var(--s1)", border: "1px solid var(--b0)", borderRadius: "8px", padding: "10px 14px", textDecoration: "none", fontSize: "12px", fontWeight: 500, color: "var(--text)" }}>
              {loc.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
