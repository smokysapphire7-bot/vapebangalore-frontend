"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { WHATSAPP } from "@/lib/settings";
import { useCart } from "@/lib/cart";

const WA_URL = "https://wa.me/916282878843?text=Hi%20VapeBangalore%2C%20I%20want%20to%20place%20an%20order.";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [lateNight, setLateNight] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    const hour = new Date().getHours();
    setLateNight(hour >= 22 || hour < 2);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/products", label: "Products" },
    { href: "/brands", label: "Brands" },
    { href: "/vape-delivery/koramangala", label: "Areas" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      {/* TOP NAV */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, height: "60px", display: "flex", alignItems: "center", padding: "0 24px", background: scrolled ? "rgba(3,3,3,0.95)" : "transparent", borderBottom: scrolled ? "1px solid var(--b0)" : "1px solid transparent", backdropFilter: scrolled ? "blur(12px)" : "none", transition: "all 0.3s ease" }}>
        <Link href="/" style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 900, color: "var(--white)", letterSpacing: "-0.03em", textDecoration: "none", marginRight: "auto" }}>
          vape<span style={{ color: "var(--orange)" }}>bangalore</span><span style={{ color: "var(--dim)", fontSize: "12px", fontWeight: 400 }}>.com</span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "4px" }} className="desktop-nav">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} style={{ fontSize: "13px", fontWeight: 500, color: pathname === item.href ? "var(--white)" : "var(--dim)", textDecoration: "none", padding: "6px 12px", borderRadius: "6px", background: pathname === item.href ? "var(--s3)" : "transparent" }}>
              {item.label}
            </Link>
          ))}
          {lateNight && (
            <span style={{ fontSize: "10px", fontWeight: 700, color: "var(--orange)", background: "var(--orange-dim)", border: "1px solid rgba(255,92,0,0.25)", padding: "3px 10px", borderRadius: "100px", marginLeft: "4px" }}>
              🌙 OPEN NOW
            </span>
          )}
          {/* Desktop cart */}
          <button onClick={openCart} style={{ position: "relative", background: "var(--s2)", border: "1px solid var(--b1)", borderRadius: "8px", padding: "7px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", color: "var(--white)", fontSize: "13px", fontWeight: 600, marginLeft: "4px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            Cart
            {count > 0 && (
              <span style={{ background: "var(--orange)", color: "#fff", fontSize: "10px", fontWeight: 800, minWidth: "18px", height: "18px", borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 4px" }}>{count}</span>
            )}
          </button>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "linear-gradient(135deg, #FF5C00, #FF2D55)", color: "#fff", padding: "8px 18px", borderRadius: "6px", fontSize: "13px", fontWeight: 700, textDecoration: "none", marginLeft: "4px" }}>
            Order Now
          </a>
        </div>
      </header>

      {/* MOBILE BOTTOM TAB */}
      <nav className="mobile-nav" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50, height: "64px", background: "rgba(10,10,10,0.98)", borderTop: "1px solid var(--b0)", backdropFilter: "blur(16px)", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", alignItems: "center" }}>
        <Link href="/" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", textDecoration: "none", padding: "8px 4px" }}>
          <span style={{ fontSize: "20px", lineHeight: 1, filter: pathname === "/" ? "none" : "grayscale(1) opacity(0.5)" }}>🏠</span>
          <span style={{ fontSize: "9px", fontWeight: pathname === "/" ? 700 : 500, color: pathname === "/" ? "var(--orange)" : "var(--dim)" }}>Home</span>
        </Link>

        <Link href="/products" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", textDecoration: "none", padding: "8px 4px" }}>
          <span style={{ fontSize: "20px", lineHeight: 1, filter: pathname === "/products" ? "none" : "grayscale(1) opacity(0.5)" }}>🛍️</span>
          <span style={{ fontSize: "9px", fontWeight: pathname === "/products" ? 700 : 500, color: pathname === "/products" ? "var(--orange)" : "var(--dim)" }}>Products</span>
        </Link>

        <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", textDecoration: "none", padding: "8px 4px" }}>
          <div style={{ width: "44px", height: "30px", borderRadius: "20px", background: "linear-gradient(135deg, #FF5C00, #FF2D55)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(255,92,0,0.4)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </div>
          <span style={{ fontSize: "9px", fontWeight: 800, color: "var(--orange)" }}>Order</span>
        </a>

        <Link href="/vape-delivery/koramangala" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", textDecoration: "none", padding: "8px 4px" }}>
          <span style={{ fontSize: "20px", lineHeight: 1, filter: "grayscale(1) opacity(0.5)" }}>📍</span>
          <span style={{ fontSize: "9px", fontWeight: 500, color: "var(--dim)" }}>Areas</span>
        </Link>

        {/* Cart tab with count */}
        <button onClick={openCart} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", background: "none", border: "none", cursor: "pointer", padding: "8px 4px", position: "relative" }}>
          <div style={{ position: "relative" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={count > 0 ? "var(--orange)" : "var(--dim)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: count > 0 ? 1 : 0.5 }}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            {count > 0 && (
              <span style={{ position: "absolute", top: "-6px", right: "-8px", background: "linear-gradient(135deg, #FF5C00, #FF2D55)", color: "#fff", fontSize: "9px", fontWeight: 800, minWidth: "16px", height: "16px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 3px" }}>{count}</span>
            )}
          </div>
          <span style={{ fontSize: "9px", fontWeight: count > 0 ? 700 : 500, color: count > 0 ? "var(--orange)" : "var(--dim)" }}>Cart</span>
        </button>
      </nav>

      <style>{`
        @media (min-width: 769px) { .mobile-nav { display: none !important; } }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </>
  );
}
