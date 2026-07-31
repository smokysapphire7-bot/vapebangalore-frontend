"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/products";
import { WHATSAPP } from "@/lib/settings";

interface ProductCardProps {
  product: Product;
}

const RATINGS: Record<string, { rating: number; count: number }> = {
  "elfbar-raya-d1": { rating: 4.9, count: 312 },
  "lost-mary-mt35000": { rating: 4.9, count: 198 },
  "zyn-cool-mint": { rating: 4.8, count: 267 },
  "caliburn-g4": { rating: 4.8, count: 145 },
  "elfbar-ice-king-30k": { rating: 4.7, count: 89 },
  "nasty-bolt-wtf-50k": { rating: 4.7, count: 76 },
  "lost-mary-mo10000": { rating: 4.8, count: 134 },
  "iget-astro-b18000": { rating: 4.6, count: 92 },
  "elfbar-moonnight-40k": { rating: 4.8, count: 54 },
  "elfbar-600": { rating: 4.5, count: 201 },
};

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <div style={{ display: "flex", gap: "1px" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} width="10" height="10" viewBox="0 0 24 24" fill={star <= Math.round(rating) ? "#FF5C00" : "var(--b2)"}>
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        ))}
      </div>
      <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--dim)" }}>
        {rating} ({count})
      </span>
    </div>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedFlavour, setSelectedFlavour] = useState(product.flavours[0]?.name || "");
  const [hovered, setHovered] = useState(false);

  const ratingData = RATINGS[product.slug];
  const telegramLink = WHATSAPP.orderLink(product.name, selectedFlavour);
  const waLink = WHATSAPP.orderLink(product.name, selectedFlavour);

  const specLine = [
    product.puffCount ? `${product.puffCount.toLocaleString()} puffs` : null,
    product.nicotine || null,
    product.charging || product.battery || null,
  ].filter(Boolean).join(" · ");

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: hovered ? "var(--s2)" : "var(--s1)", border: `1px solid ${hovered ? "rgba(255,92,0,0.2)" : "var(--b0)"}`, borderRadius: "12px", overflow: "hidden", transition: "all 0.2s ease", display: "flex", flexDirection: "column", position: "relative", boxShadow: hovered ? "0 8px 32px rgba(255,92,0,0.08)" : "none" }}>

      {/* Top badges */}
      <div style={{ position: "absolute", top: "8px", left: "8px", display: "flex", gap: "4px", zIndex: 2 }}>
        {product.isBestseller && (
          <span style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "0.08em", background: "linear-gradient(135deg, #FF5C00, #FF2D55)", color: "#fff", padding: "3px 8px", borderRadius: "4px" }}>🔥 HOT</span>
        )}
        {product.isNew && (
          <span style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "0.08em", background: "linear-gradient(135deg, #22C55E, #16A34A)", color: "#fff", padding: "3px 8px", borderRadius: "4px" }}>✨ NEW</span>
        )}
      </div>

      {/* Out of stock overlay */}
      {!product.inStock && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(3,3,3,0.7)", zIndex: 3, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--dim)", background: "var(--s2)", padding: "6px 16px", borderRadius: "6px", border: "1px solid var(--b1)" }}>Out of Stock</span>
        </div>
      )}

      {/* Image area */}
      <Link href={`/products/${product.slug}`} style={{ textDecoration: "none", display: "block" }}>
        <div style={{ height: "150px", background: "linear-gradient(135deg, var(--s2), var(--s3))", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
          {hovered && <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 60% 40%, rgba(255,92,0,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />}
          <img src={product.image} alt={product.name} style={{ maxHeight: "130px", maxWidth: "90%", objectFit: "contain", transform: hovered ? "scale(1.08) translateY(-2px)" : "scale(1)", transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)" }} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          <div style={{ position: "absolute", fontSize: "56px", opacity: 0.08, userSelect: "none", filter: "blur(2px)" }}>
            {product.category === "Nicotine Pouches" ? "🌿" : product.category === "Tobacco" ? "🌱" : product.category === "Pod Device" ? "⚡" : "💨"}
          </div>
        </div>
      </Link>

      {/* Content */}
      <div style={{ padding: "12px", flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>

        {/* Brand */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "0.15em", color: "var(--orange)", textTransform: "uppercase" }}>{product.brand}</span>
          <span style={{ fontSize: "9px", color: "var(--dim2)", background: "var(--s3)", padding: "2px 6px", borderRadius: "3px", letterSpacing: "0.06em" }}>{product.category}</span>
        </div>

        {/* Name */}
        <Link href={`/products/${product.slug}`} style={{ textDecoration: "none" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, color: "var(--white)", lineHeight: 1.2, letterSpacing: "-0.01em" }}>{product.name}</h3>
        </Link>

        {/* Rating */}
        {ratingData && <StarRating rating={ratingData.rating} count={ratingData.count} />}

        {/* Spec line */}
        {specLine && (
          <p style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--dim)", lineHeight: 1.4, borderLeft: "2px solid var(--orange)", paddingLeft: "6px" }}>
            {specLine}
          </p>
        )}

        {/* Flavour swatches */}
        {product.flavours.length > 0 && (
          <div>
            <p style={{ fontSize: "9px", color: "var(--dim)", letterSpacing: "0.08em", marginBottom: "5px", textTransform: "uppercase" }}>
              {selectedFlavour || "Select"}
            </p>
            <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
              {product.flavours.slice(0, 8).map((f) => (
                <button key={f.name} onClick={() => setSelectedFlavour(f.name)} title={f.name} style={{ width: "18px", height: "18px", borderRadius: "50%", background: f.color, border: selectedFlavour === f.name ? "2px solid var(--white)" : "2px solid transparent", cursor: "pointer", padding: 0, outline: selectedFlavour === f.name ? "2px solid var(--orange)" : "none", outlineOffset: "1px", transition: "all 0.15s", boxShadow: selectedFlavour === f.name ? `0 0 8px ${f.color}88` : "none" }} aria-label={f.name} />
              ))}
              {product.flavours.length > 8 && <span style={{ fontSize: "9px", color: "var(--dim)", alignSelf: "center" }}>+{product.flavours.length - 8}</span>}
            </div>
          </div>
        )}

        {/* Price + Order */}
        <div style={{ marginTop: "auto", paddingTop: "4px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", marginBottom: "6px" }}>
            <div>
              <div style={{ fontSize: "17px", fontWeight: 800, fontFamily: "var(--font-mono)", letterSpacing: "-0.02em", lineHeight: 1, background: "linear-gradient(135deg, #FF5C00, #FF2D55)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                &#8377;{product.price.toLocaleString()}
              </div>
              {product.originalPrice && (
                <div style={{ fontSize: "10px", color: "var(--dim)", fontFamily: "var(--font-mono)", textDecoration: "line-through" }}>&#8377;{product.originalPrice.toLocaleString()}</div>
              )}
            </div>
            <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "linear-gradient(135deg, #FF5C00, #FF2D55)", color: "#fff", padding: "9px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 4px 12px rgba(255,92,0,0.25)" }}>
              Order
            </a>
          </div>


        </div>
      </div>
    </div>
  );
}
