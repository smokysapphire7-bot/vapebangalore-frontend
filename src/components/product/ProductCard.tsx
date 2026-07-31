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

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedFlavour, setSelectedFlavour] = useState(product.flavours[0]?.name || "");
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const ratingData = RATINGS[product.slug];
  const { addItem } = useCart();
  const waLink = WHATSAPP.orderLink(product.name, selectedFlavour);

  const specLine = [
    product.puffCount ? `${product.puffCount.toLocaleString()} puffs` : null,
    product.nicotine || null,
    product.charging || null,
  ].filter(Boolean).join(" · ");

  const handleAddToCart = () => {
    addItem(product, selectedFlavour);
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

        {/* Flavour swatches */}
        {product.flavours.length > 0 && (
          <div>
            <p style={{ fontSize: "8px", color: "var(--dim)", letterSpacing: "0.08em", marginBottom: "4px", textTransform: "uppercase" }}>{selectedFlavour || "Select"}</p>
            <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
              {product.flavours.slice(0, 7).map((f) => (
                <button key={f.name} onClick={() => setSelectedFlavour(f.name)} title={f.name} style={{ width: "16px", height: "16px", borderRadius: "50%", background: f.color, border: selectedFlavour === f.name ? "2px solid var(--white)" : "2px solid transparent", cursor: "pointer", padding: 0, outline: selectedFlavour === f.name ? "2px solid var(--orange)" : "none", outlineOffset: "1px", transition: "all 0.15s", boxShadow: selectedFlavour === f.name ? `0 0 6px ${f.color}88` : "none" }} aria-label={f.name} />
              ))}
              {product.flavours.length > 7 && <span style={{ fontSize: "8px", color: "var(--dim)", alignSelf: "center" }}>+{product.flavours.length - 7}</span>}
            </div>
          </div>
        )}

        {/* Price */}
        <div style={{ fontSize: "16px", fontWeight: 800, fontFamily: "var(--font-mono)", letterSpacing: "-0.02em", lineHeight: 1, background: "linear-gradient(135deg, #FF5C00, #FF2D55)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginTop: "2px" }}>
          &#8377;{product.price.toLocaleString()}
        </div>

        {/* TWO BUTTONS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "auto" }}>
          {/* Add to Cart */}
          <button onClick={handleAddToCart} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", background: added ? "rgba(34,197,94,0.15)" : "var(--s3)", color: added ? "#22C55E" : "var(--white)", border: added ? "1px solid rgba(34,197,94,0.3)" : "1px solid var(--b1)", padding: "9px 12px", borderRadius: "8px", fontSize: "12px", fontWeight: 700, cursor: "pointer", transition: "all 0.2s", minHeight: "38px", width: "100%" }}>
            {added ? (
              <><span>✓</span> Added!</>
            ) : (
              <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>Add to Cart</>
            )}
          </button>

          {/* WhatsApp Order */}
          <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", background: "linear-gradient(135deg, #FF5C00, #FF2D55)", color: "#fff", padding: "9px 12px", borderRadius: "8px", fontSize: "12px", fontWeight: 700, textDecoration: "none", minHeight: "38px", boxShadow: "0 3px 10px rgba(255,92,0,0.25)" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
