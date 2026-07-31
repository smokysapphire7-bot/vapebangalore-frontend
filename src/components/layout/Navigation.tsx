"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { TELEGRAM } from "@/lib/settings";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [lateNight, setLateNight] = useState(false);

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

  const tabLinks = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/products", label: "Products", icon: "🛍️" },
    { href: TELEGRAM.botUrl + "?start=order", label: "Order", icon: "✈️", external: true },
    { href: "/vape-delivery/koramangala", label: "Areas", icon: "📍" },
    { href: "/blog", label: "Blog", icon: "📖" },
  ];

  return (
    <>
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
          <a href={TELEGRAM.botUrl + "?start=order"} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "var(--orange)", color: "#fff", padding: "8px 18px", borderRadius: "6px", fontSize: "13px", fontWeight: 700, textDecoration: "none", marginLeft: "8px" }}>
            Order Now
          </a>
        </div>
      </header>

      <nav className="mobile-nav" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50, height: "64px", background: "rgba(10,10,10,0.98)", borderTop: "1px solid var(--b0)", backdropFilter: "blur(16px)", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", alignItems: "center" }}>
        {tabLinks.map((item) => {
          const isActive = !item.external && pathname === item.href;
          const isOrder = item.external;
          if (isOrder) {
            return (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", textDecoration: "none", padding: "8px 4px" }}>
                <div style={{ width: "44px", height: "30px", borderRadius: "20px", background: "var(--orange)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "16px" }}>{item.icon}</span>
                </div>
                <span style={{ fontSize: "9px", fontWeight: 700, color: "var(--orange)" }}>{item.label}</span>
              </a>
            );
          }
          return (
            <Link key={item.label} href={item.href} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", textDecoration: "none", padding: "8px 4px" }}>
              <span style={{ fontSize: "20px", lineHeight: 1, filter: isActive ? "none" : "grayscale(1) opacity(0.5)" }}>{item.icon}</span>
              <span style={{ fontSize: "9px", fontWeight: isActive ? 700 : 500, color: isActive ? "var(--orange)" : "var(--dim)" }}>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <style>{`
        @media (min-width: 769px) { .mobile-nav { display: none !important; } }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </>
  );
}
