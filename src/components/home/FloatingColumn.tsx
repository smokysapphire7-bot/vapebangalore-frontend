"use client";
import { products } from "@/lib/products";

const ITEMS = products.slice(0, 6); // Only 6 items — duplicated for infinite scroll

export default function FloatingColumn() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", animation: "floatUp 14s linear infinite" }}>
      {doubled.map((p, i) => (
        <div key={i} style={{ background: "#1a0a0a", border: "1px solid rgba(200,16,46,0.35)", borderRadius: "10px", padding: "8px", animation: "redglow 3s ease-in-out infinite", animationDelay: `${(i % 6) * 0.5}s`, flexShrink: 0 }}>
          <div style={{ height: "52px", borderRadius: "6px", background: "rgba(200,16,46,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "5px", overflow: "hidden" }}>
            <img src={p.image} alt={`${p.name} - ${p.brand} vape Bangalore`} loading="lazy" style={{ maxHeight: "48px", maxWidth: "80%", objectFit: "contain" }} />
          </div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "9px", color: "#C8102E", letterSpacing: "0.12em", marginBottom: "1px" }}>{p.brand}</div>
          <div style={{ fontSize: "9px", color: "#fff", lineHeight: 1.2, marginBottom: "3px" }}>{p.name.length > 12 ? p.name.slice(0, 12) + "…" : p.name}</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "12px", color: "#fff" }}>₹{p.price.toLocaleString("en-IN")}</div>
        </div>
      ))}
      <style>{`@keyframes floatUp { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }`}</style>
    </div>
  );
}
