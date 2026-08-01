"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/products";
import { WHATSAPP } from "@/lib/settings";
import { useCart } from "@/lib/cart";

interface ProductCardProps {
  product: Product;
}

const RATINGS: Record<string, { rating: number; count: number }> = {
  "elfbar-raya-d1": { rating: 4.9, count: 312 },
  "lost-mary-mt35000-turbo": { rating: 4.9, count: 198 },
  "zyn-cool-mint": { rating: 4.8, count: 267 },
  "caliburn-g4": { rating: 4.8, count: 145 },
  "elfbar-ice-king": { rating: 4.7, count: 89 },
  "nasty-bolt-wtf-50k": { rating: 4.7, count: 76 },
  "lost-mary-mo10000": { rating: 4.8, count: 134 },
  "iget-astro-b18000": { rating: 4.6, count: 92 },
  "elfbar-moonnight-40k": { rating: 4.8, count: 54 },
  "elfbar-600": { rating: 4.5, count: 201 },
};

export default function ProductCard({ product }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const ratingData = RATINGS[product.slug];
  const { addItem } = useCart();
  const waLink = WHATSAPP.orderLink(product.name);

  const specLine = [
    product.puffCount ? `${product.puffCount.toLocaleString()} puffs` : null,
    product.nicotine || null,
    product.charging || null,
  ].filter(Boolean).join(" · ");

  const handleAddToCart = () => {
    addItem(product, "");
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: hovered ? "var(--s2)" : "var(--s1)", border: `1px solid ${hovered ? "rgba(255,92,0,0.2)" : "var(--b0)"}`, borderRadius: "12px", overflow: "hidden", transition: "all 0.2s ease", display: "flex", flexDirection: "column", position: "relative", boxShadow: hovered ? "0 8px 32px rgba(255,92,0,0.08)" : "none" }}>

      {/* Badges */}
      <div style={{ position: "absolute", top: "8px", left: "8px", display: "flex", gap: "4px", zIndex: 2 }}>
        {product.isBestseller && <span style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "0.08em", background: "linear-gradient(135deg, #FF5C00, #FF2D55)", color: "#fff", padding: "3px 8px", borderRadius: "4px" }}>🔥 HOT</span>}
        {product.isNew && <span style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "0.08em", background: "linear-gradient(135deg, #22C55E, #16A34A)", color: "#fff", padding: "3px 8px", borderRadius: "4px" }}>✨ NEW</span>}
      </div>

      {/* Image */}
      <Link href={`/products/${product.slug}`} style={{ textDecoration: "none", display: "block" }}>
        <div style={{ height: "140px", background: "linear-gradient(135deg, var(--s2), var(--s3))", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
          {hovered && <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 60% 40%, rgba(255,92,0,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />}
          <img src={product.image} alt={product.name} style={{ maxHeight: "120px", maxWidth: "90%", objectFit: "contain", transform: hovered ? "scale(1.08) translateY(-2px)" : "scale(1)", transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)" }} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          <div style={{ position: "absolute", fontSize: "48px", opacity: 0.07, userSelect: "none" }}>
            {product.category === "Nicotine Pouches" ? "🌿" : product.category === "Tobacco" ? "🌱" : product.category === "Pod Device" ? "⚡" : "💨"}
          </div>
        </div>
      </Link>

      {/* Content */}
      <div style={{ padding: "10px", flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "0.12em", color: "var(--orange)", textTransform: "uppercase" }}>{product.brand}</span>
          <span style={{ fontSize: "8px", color: "var(--dim2)", background: "var(--s3)", padding: "2px 5px", borderRadius: "3px" }}>{product.category}</span>
        </div>

        <Link href={`/products/${product.slug}`} style={{ textDecoration: "none" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, color: "var(--white)", lineHeight: 1.2, letterSpacing: "-0.01em" }}>{product.name}</h3>
        </Link>

        {/* Rating */}
        {ratingData && (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <div style={{ display: "flex", gap: "1px" }}>
              {[1,2,3,4,5].map((s) => (
                <svg key={s} width="9" height="9" viewBox="0 0 24 24" fill={s <= Math.round(ratingData.rating) ? "#FF5C00" : "var(--b2)"}><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" /></svg>
              ))}
            </div>
            <span style={{ fontSize: "9px", fontFamily: "var(--font-mono)", color: "var(--dim)" }}>{ratingData.rating} ({ratingData.count})</span>
          </div>
        )}

        {/* Spec line */}
        {specLine && (
          <p style={{ fontSize: "9px", fontFamily: "var(--font-mono)", color: "var(--dim)", borderLeft: "2px solid var(--orange)", paddingLeft: "5px", lineHeight: 1.4 }}>{specLine}</p>
        )}

        {/* Price */}
        <div style={{ fontSize: "16px", fontWeight: 800, fontFamily: "var(--font-mono)", letterSpacing: "-0.02em", lineHeight: 1, background: "linear-gradient(135deg, #FF5C00, #FF2D55)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginTop: "2px" }}>
          &#8377;{product.price.toLocaleString()}
        </div>

        {/* BUTTONS — stacked, full width */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "auto" }}>
          <button onClick={handleAddToCart} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", background: added ? "rgba(34,197,94,0.15)" : "var(--s3)", color: added ? "#22C55E" : "var(--white)", border: added ? "1px solid rgba(34,197,94,0.3)" : "1px solid var(--b1)", padding: "9px 12px", borderRadius: "8px", fontSize: "12px", fontWeight: 700, cursor: "pointer", transition: "all 0.2s", minHeight: "38px", width: "100%" }}>
            {added ? <><span>✓</span> Added to Cart!</> : <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>Add to Cart</>}
          </button>
          <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", background: "#25D366", color: "#fff", padding: "9px 12px", borderRadius: "8px", fontSize: "12px", fontWeight: 700, textDecoration: "none", minHeight: "38px", boxShadow: "0 3px 10px rgba(37,211,102,0.25)" }}>
            ⚡ Quick Order
          </a>
        </div>
      </div>
    </div>
  );
}
