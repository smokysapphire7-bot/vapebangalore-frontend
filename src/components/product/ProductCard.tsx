"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/products";
import { TELEGRAM, WHATSAPP } from "@/lib/settings";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedFlavour, setSelectedFlavour] = useState(product.flavours[0]?.name || "");
  const [hovered, setHovered] = useState(false);

  const telegramLink = TELEGRAM.orderLink(product.name, selectedFlavour);
  const waLink = WHATSAPP.orderLink(product.name, selectedFlavour);

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: hovered ? "var(--s2)" : "var(--s1)", border: `1px solid ${hovered ? "var(--b2)" : "var(--b0)"}`, borderRadius: "12px", overflow: "hidden", transition: "all 0.2s ease", display: "flex", flexDirection: "column", position: "relative" }}>

      {/* Badges */}
      <div style={{ position: "absolute", top: "10px", left: "10px", display: "flex", gap: "4px", zIndex: 2 }}>
        {product.isBestseller && <span style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "0.1em", background: "var(--orange)", color: "#fff", padding: "3px 8px", borderRadius: "4px" }}>BESTSELLER</span>}
        {product.isNew && <span style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "0.1em", background: "#22C55E", color: "#fff", padding: "3px 8px", borderRadius: "4px" }}>NEW</span>}
        {!product.inStock && <span style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "0.1em", background: "var(--b2)", color: "var(--dim)", padding: "3px 8px", borderRadius: "4px" }}>OUT OF STOCK</span>}
      </div>

      {/* Image */}
      <Link href={`/products/${product.slug}`} style={{ textDecoration: "none", display: "block" }}>
        <div style={{ height: "160px", background: "var(--s3)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
          {hovered && <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(255,92,0,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />}
          <img src={product.image} alt={product.name} style={{ maxHeight: "140px", maxWidth: "100%", objectFit: "contain", transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.3s ease" }} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          <div style={{ position: "absolute", fontSize: "48px", opacity: 0.15, userSelect: "none" }}>
            {product.category === "Nicotine Pouches" ? "🌿" : product.category === "Tobacco" ? "🌱" : product.category === "Pod Device" ? "⚡" : "💨"}
          </div>
        </div>
      </Link>

      {/* Content */}
      <div style={{ padding: "14px", flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.12em", color: "var(--orange)", textTransform: "uppercase" }}>{product.brand}</span>
          <span style={{ fontSize: "9px", color: "var(--dim)" }}>{product.category}</span>
        </div>

        <Link href={`/products/${product.slug}`} style={{ textDecoration: "none" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 700, color: "var(--white)", lineHeight: 1.25, letterSpacing: "-0.01em" }}>{product.name}</h3>
        </Link>

        {(product.puffCount || product.nicotine || product.battery) && (
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {product.puffCount && <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--dim)", background: "var(--s3)", padding: "2px 8px", borderRadius: "4px", border: "1px solid var(--b0)" }}>{product.puffCount.toLocaleString()} puffs</span>}
            {product.nicotine && <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--dim)", background: "var(--s3)", padding: "2px 8px", borderRadius: "4px", border: "1px solid var(--b0)" }}>{product.nicotine}</span>}
            {product.battery && <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--dim)", background: "var(--s3)", padding: "2px 8px", borderRadius: "4px", border: "1px solid var(--b0)" }}>{product.battery}</span>}
          </div>
        )}

        {product.flavours.length > 0 && (
          <div>
            <p style={{ fontSize: "9px", color: "var(--dim)", letterSpacing: "0.1em", marginBottom: "6px", textTransform: "uppercase" }}>{selectedFlavour || "Select Flavour"}</p>
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              {product.flavours.slice(0, 8).map((f) => (
                <button key={f.name} onClick={() => setSelectedFlavour(f.name)} title={f.name} style={{ width: "20px", height: "20px", borderRadius: "50%", background: f.color, border: selectedFlavour === f.name ? "2px solid var(--orange)" : "2px solid transparent", cursor: "pointer", padding: 0, outline: selectedFlavour === f.name ? "2px solid rgba(255,92,0,0.3)" : "none", outlineOffset: "1px", transition: "all 0.15s", minWidth: "20px" }} aria-label={f.name} />
              ))}
              {product.flavours.length > 8 && <span style={{ fontSize: "9px", color: "var(--dim)", alignSelf: "center" }}>+{product.flavours.length - 8}</span>}
            </div>
          </div>
        )}

        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
          <div>
            <div style={{ fontSize: "18px", fontWeight: 700, color: "var(--orange)", fontFamily: "var(--font-mono)", letterSpacing: "-0.02em", lineHeight: 1 }}>&#8377;{product.price.toLocaleString()}</div>
            {product.originalPrice && <div style={{ fontSize: "11px", color: "var(--dim)", fontFamily: "var(--font-mono)", textDecoration: "line-through" }}>&#8377;{product.originalPrice.toLocaleString()}</div>}
          </div>
          <a href={product.inStock ? telegramLink : "#"} target={product.inStock ? "_blank" : undefined} rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: product.inStock ? "var(--orange)" : "var(--s4)", color: product.inStock ? "#fff" : "var(--dim)", padding: "9px 14px", borderRadius: "6px", fontSize: "12px", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", minHeight: "36px" }}>
            {product.inStock ? "Order" : "Sold Out"}
          </a>
        </div>

        {product.inStock && (
          <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", color: "var(--dim)", fontSize: "11px", fontWeight: 500, textDecoration: "none", padding: "6px", borderRadius: "6px", border: "1px solid var(--b0)" }}>
            WhatsApp instead
          </a>
        )}
      </div>
    </div>
  );
}
