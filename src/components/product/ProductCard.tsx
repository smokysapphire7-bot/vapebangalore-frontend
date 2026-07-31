"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/products";
import { TELEGRAM, WHATSAPP } from "@/lib/settings";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedFlavour, setSelectedFlavour] = useState(
    product.flavours[0]?.name || ""
  );
  const [hovered, setHovered] = useState(false);

  const telegramLink = TELEGRAM.orderLink(product.name, selectedFlavour);
  const waLink = WHATSAPP.orderLink(product.name, selectedFlavour);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--s2)" : "var(--s1)",
        border: `1px solid ${hovered ? "var(--b2)" : "var(--b0)"}`,
        borderRadius: "12px",
        overflow: "hidden",
        transition: "all 0.2s ease",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Badges */}
      <div style={{ position: "absolute", top: "10px", left: "10px", display: "flex", gap: "4px", zIndex: 2 }}>
        {product.isBestseller && (
          <span style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "0.1em", background: "var(--orange)", color: "#fff", padding: "3px 8px", borderRadius: "4px" }}>
            BESTSELLER
          </span>
        )}
        {product.isNew && (
          <span style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "0.1em", background: "#22C55E", color: "#fff", padding: "3px 8px", borderRadius: "4px" }}>
            NEW
          </span>
        )}
        {!product.inStock && (
          <span style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "0.1em", background: "var(--b2)", color: "var(--dim)", padding: "3px 8px", borderRadius: "4px" }}>
            OUT OF STOCK
          </span>
        )}
      </div>

      {/* Image area */}
      <Link href={`/products/${product.slug}`} style={{ textDecoration: "none", display: "block" }}>
        <div
          style={{
            height: "160px",
            background: "var(--s3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow on hover */}
          {hovered && (
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(circle at center, rgba(255,92,0,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
          )}
          <img
            src={product.image}
            alt={product.name}
            style={{
              maxHeight: "140px",
              maxWidth: "100%",
              objectFit: "contain",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Fallback emoji */}
          <div style={{
            position: "absolute",
            fontSize: "48px",
            opacity: 0.15,
            userSelect: "none",
          }}>
            {product.category === "Nicotine Pouches" ? "🌿" :
             product.category === "Tobacco" ? "🌱" :
             product.category === "Pod Device" ? "⚡" : "💨"}
          </div>
        </div>
      </Link>

      {/* Content */}
      <div style={{ padding: "14px", flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>

        {/* Brand + category */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.12em", color: "var(--orange)", textTransform: "uppercase" }}>
            {product.brand}
          </span>
          <span style={{ fontSize: "9px", color: "var(--dim)", letterSpacing: "0.08em" }}>
            {product.category}
          </span>
        </div>

        {/* Name */}
        <Link href={`/products/${product.slug}`} style={{ textDecoration: "none" }}>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "14px",
            fontWeight: 700,
            color: "var(--white)",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}>
            {product.name}
          </h3>
        </Link>

        {/* Specs */}
        {(product.puffCount || product.nicotine || product.battery) && (
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {product.puffCount && (
              <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--dim)", background: "var(--s3)", padding: "2px 8px", borderRadius: "4px", border: "1px solid var(--b0)" }}>
                {product.puffCount.toLocaleString()} puffs
              </span>
            )}
            {product.nicotine && (
              <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--dim)", background: "var(--s3)", padding: "2px 8px", borderRadius: "4px", border: "1px solid var(--b0)" }}>
                {product.nicotine}
              </span>
            )}
            {product.battery && (
              <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--dim)", background: "var(--s3)", padding: "2px 8px", borderRadius: "4px", border: "1px solid var(--b0)" }}>
                {product.battery}
              </span>
            )}
          </div>
        )}

        {/* Flavour swatches */}
        {product.flavours.length > 0 && (
          <div>
            <p style={{ fontSize: "9px", color: "var(--dim)", letterSpacing: "0.1em", marginBottom: "6px", textTransform: "uppercase" }}>
              {selectedFlavour || "Select Flavour"}
            </p>
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              {product.flavours.map((f) => (
                <button
                  key={f.name}
                  onClick={() => setSelectedFlavour(f.name)}
                  title={f.name}
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: f.color,
                    border: selectedFlavour === f.name
                      ? "2px solid var(--orange)"
                      : "2px solid transparent",
                    cursor: "pointer",
                    padding: 0,
                    outline: selectedFlavour === f.name ? "2px solid rgba(255,92,0,0.3)" : "none",
                    outlineOffset: "1px",
                    transition: "all 0.15s",
                    minWidth: "20px",
                  }}
                  aria-label={f.name}
                />
              ))}
              {product.flavours.length > 8 && (
                <span style={{ fontSize: "9px", color: "var(--dim)", alignSelf: "center" }}>
                  +{product.flavours.length - 8}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Price + CTA */}
        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
          <div>
            <div style={{ fontSize: "18px", fontWeight: 700, color: "var(--orange)", fontFamily: "var(--font-mono)", letterSpacing: "-0.02em", lineHeight: 1 }}>
              ₹{product.price.toLocaleString()}
            </div>
            {product.originalPrice && (
              <div style={{ fontSize: "11px", color: "var(--dim)", fontFamily: "var(--font-mono)", textDecoration: "line-through" }}>
                ₹{product.originalPrice.toLocaleString()}
              </div>
            )}
          </div>

          
            href={product.inStock ? telegramLink : "#"}
            target={product.inStock ? "_blank" : undefined}
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              background: product.inStock ? "var(--orange)" : "var(--s4)",
              color: product.inStock ? "#fff" : "var(--dim)",
              padding: "9px 14px",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: 700,
              textDecoration: "none",
              whiteSpace: "nowrap",
              cursor: product.inStock ? "pointer" : "not-allowed",
              minHeight: "36px",
              minWidth: "44px",
            }}
          >
            {product.inStock ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
                </svg>
                Order
              </>
            ) : "Sold Out"}
          </a>
        </div>

        {/* WhatsApp fallback */}
        {product.inStock && (
          
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              color: "var(--dim)",
              fontSize: "11px",
              fontWeight: 500,
              textDecoration: "none",
              padding: "6px",
              borderRadius: "6px",
              border: "1px solid var(--b0)",
              transition: "all 0.15s",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#25D366" }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp instead
          </a>
        )}
      </div>
    </div>
  );
}
