"use client";

import { useState, useMemo } from "react";
import { products, CATEGORIES, BRANDS, type ProductCategory, type ProductBrand } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">("All");
  const [activeBrand, setActiveBrand] = useState<ProductBrand | "All">("All");
  const [showCatFilter, setShowCatFilter] = useState(false);
  const [showBrandFilter, setShowBrandFilter] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catMatch = activeCategory === "All" || p.category === activeCategory;
      const brandMatch = activeBrand === "All" || p.brand === activeBrand;
      return catMatch && brandMatch;
    });
  }, [activeCategory, activeBrand]);

  return (
    <div>
      {/* Filter bar */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>

        {/* Category filter */}
        <div style={{ position: "relative" }}>
          <button onClick={() => { setShowCatFilter(!showCatFilter); setShowBrandFilter(false); }} style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: 600, background: activeCategory !== "All" ? "linear-gradient(135deg, #FF5C00, #FF2D55)" : "var(--s2)", color: activeCategory !== "All" ? "#fff" : "var(--dim)", border: activeCategory !== "All" ? "none" : "1px solid var(--b1)", cursor: "pointer", minHeight: "36px" }}>
            {activeCategory === "All" ? "Category" : activeCategory}
            <span style={{ fontSize: "10px", opacity: 0.8 }}>{showCatFilter ? "▲" : "▼"}</span>
            {activeCategory !== "All" && (
              <span onClick={(e) => { e.stopPropagation(); setActiveCategory("All"); }} style={{ marginLeft: "2px", fontSize: "14px", lineHeight: 1, opacity: 0.8 }}>×</span>
            )}
          </button>
          {showCatFilter && (
            <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 20, background: "var(--s2)", border: "1px solid var(--b1)", borderRadius: "10px", overflow: "hidden", minWidth: "180px", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
              {["All", ...CATEGORIES].map((cat) => (
                <button key={cat} onClick={() => { setActiveCategory(cat as ProductCategory | "All"); setShowCatFilter(false); }} style={{ display: "block", width: "100%", padding: "10px 16px", fontSize: "13px", fontWeight: activeCategory === cat ? 700 : 400, color: activeCategory === cat ? "var(--orange)" : "var(--text)", background: activeCategory === cat ? "var(--orange-dim)" : "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                  {cat === "All" ? "All Categories" : cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Brand filter */}
        <div style={{ position: "relative" }}>
          <button onClick={() => { setShowBrandFilter(!showBrandFilter); setShowCatFilter(false); }} style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: 600, background: activeBrand !== "All" ? "linear-gradient(135deg, #FF5C00, #FF2D55)" : "var(--s2)", color: activeBrand !== "All" ? "#fff" : "var(--dim)", border: activeBrand !== "All" ? "none" : "1px solid var(--b1)", cursor: "pointer", minHeight: "36px" }}>
            {activeBrand === "All" ? "Brand" : activeBrand}
            <span style={{ fontSize: "10px", opacity: 0.8 }}>{showBrandFilter ? "▲" : "▼"}</span>
            {activeBrand !== "All" && (
              <span onClick={(e) => { e.stopPropagation(); setActiveBrand("All"); }} style={{ marginLeft: "2px", fontSize: "14px", lineHeight: 1, opacity: 0.8 }}>×</span>
            )}
          </button>
          {showBrandFilter && (
            <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 20, background: "var(--s2)", border: "1px solid var(--b1)", borderRadius: "10px", overflow: "hidden", minWidth: "180px", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
              {["All", ...BRANDS].map((brand) => (
                <button key={brand} onClick={() => { setActiveBrand(brand as ProductBrand | "All"); setShowBrandFilter(false); }} style={{ display: "block", width: "100%", padding: "10px 16px", fontSize: "13px", fontWeight: activeBrand === brand ? 700 : 400, color: activeBrand === brand ? "var(--orange)" : "var(--text)", background: activeBrand === brand ? "var(--orange-dim)" : "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                  {brand === "All" ? "All Brands" : brand}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Active filters summary */}
        <div style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
          <span style={{ fontSize: "11px", color: "var(--dim)", fontFamily: "var(--font-mono)" }}>
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Close dropdowns on outside click */}
      {(showCatFilter || showBrandFilter) && (
        <div onClick={() => { setShowCatFilter(false); setShowBrandFilter(false); }} style={{ position: "fixed", inset: 0, zIndex: 10 }} />
      )}

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }} className="product-grid">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--dim)" }}>
          <div style={{ fontSize: "32px", marginBottom: "12px" }}>🔍</div>
          <p>No products found.</p>
          <button onClick={() => { setActiveCategory("All"); setActiveBrand("All"); }} style={{ marginTop: "12px", color: "var(--orange)", background: "none", border: "1px solid rgba(255,92,0,0.3)", padding: "8px 16px", borderRadius: "6px", cursor: "pointer", fontSize: "12px" }}>
            Clear filters
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 640px) { .product-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (min-width: 1024px) { .product-grid { grid-template-columns: repeat(4, 1fr) !important; } }
      `}</style>
    </div>
  );
}
