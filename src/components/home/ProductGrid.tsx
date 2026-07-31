"use client";

import { useState, useMemo } from "react";
import { products, CATEGORIES, BRANDS, type ProductCategory, type ProductBrand } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">("All");
  const [activeBrand, setActiveBrand] = useState<ProductBrand | "All">("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catMatch = activeCategory === "All" || p.category === activeCategory;
      const brandMatch = activeBrand === "All" || p.brand === activeBrand;
      return catMatch && brandMatch;
    });
  }, [activeCategory, activeBrand]);

  const filterBtn = (label: string, active: boolean, onClick: () => void) => (
    <button
      key={label}
      onClick={onClick}
      style={{
        padding: "7px 16px",
        borderRadius: "100px",
        fontSize: "12px",
        fontWeight: active ? 700 : 500,
        background: active ? "var(--orange)" : "var(--s2)",
        color: active ? "#fff" : "var(--dim)",
        border: active ? "1px solid var(--orange)" : "1px solid var(--b1)",
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "all 0.15s",
        minHeight: "36px",
      }}
    >
      {label}
    </button>
  );

  return (
    <div>
      {/* Category filters */}
      <div style={{ overflowX: "auto", paddingBottom: "4px", marginBottom: "10px" }}>
        <div style={{ display: "flex", gap: "6px", minWidth: "max-content", paddingBottom: "2px" }}>
          {filterBtn("All", activeCategory === "All", () => setActiveCategory("All"))}
          {CATEGORIES.map((cat) =>
            filterBtn(cat, activeCategory === cat, () => setActiveCategory(cat))
          )}
        </div>
      </div>

      {/* Brand filters */}
      <div style={{ overflowX: "auto", paddingBottom: "4px", marginBottom: "24px" }}>
        <div style={{ display: "flex", gap: "6px", minWidth: "max-content" }}>
          {filterBtn("All Brands", activeBrand === "All", () => setActiveBrand("All"))}
          {BRANDS.slice(0, 8).map((brand) =>
            filterBtn(brand, activeBrand === brand, () => setActiveBrand(brand as ProductBrand))
          )}
        </div>
      </div>

      {/* Count */}
      <p style={{ fontSize: "11px", color: "var(--dim)", marginBottom: "16px", fontFamily: "var(--font-mono)" }}>
        {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        {activeBrand !== "All" ? ` · ${activeBrand}` : ""}
      </p>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "12px",
      }}
        className="product-grid"
      >
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--dim)" }}>
          <div style={{ fontSize: "32px", marginBottom: "12px" }}>🔍</div>
          <p style={{ fontSize: "14px" }}>No products found. Try a different filter.</p>
        </div>
      )}

      <style>{`
        @media (min-width: 640px) {
          .product-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .product-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
