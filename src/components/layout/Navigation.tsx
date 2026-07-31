"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { TELEGRAM, WHATSAPP } from "@/lib/settings";

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

  return (
    <>
      {/* ── DESKTOP / TOP NAV ── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: "60px",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          background: scrolled ? "rgba(3,3,3,0.95)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--b0)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "18px",
            fontWeight: 900,
            color: "var(--white)",
            letterSpacing: "-0.03em",
            textDecoration: "none",
            marginRight: "auto",
          }}
        >
          vape<span style={{ color: "var(--orange)" }}>bangalore</span>
          <span style={{ color: "var(--dim)", fontSize: "12px", fontWeight: 400 }}>.com</span>
        </Link>

        {/* Desktop nav links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          className="desktop-nav"
        >
          {[
            { href: "/products", label: "Products" },
            { href: "/brands", label: "Brands" },
            { href: "/vape-delivery/koramangala", label: "Delivery Areas" },
            { href: "/blog", label: "Blog" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: pathname === item.href ? "var(--white)" : "var(--dim)",
                textDecoration: "none",
                padding: "6px 12px",
                borderRadius: "6px",
                background: pathname === item.href ? "var(--s3)" : "transparent",
                transition: "all 0.15s",
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* Late night badge */}
          {lateNight && (
            <span
              style={{
                fontSize: "10px",
                fontWeight: 700,
                color: "var(--orange)",
                background: "var(--orange-dim)",
                border: "1px solid rgba(255,92,0,0.25)",
                padding: "3px 10px",
                borderRadius: "100px",
                letterSpacing: "0.05em",
              }}
            >
              🌙 OPEN NOW
            </span>
          )}

          {/* CTA */}
          
            href={TELEGRAM.botUrl + "?start=order"}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "var(--orange)",
              color: "#fff",
              padding: "8px 18px",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
              marginLeft: "8px",
              whiteSpace: "nowrap",
            }}
          >
            Order Now →
          </a>
        </nav>
      </header>

      {/* ── MOBILE BOTTOM TAB BAR ── */}
      <nav
        className="mobile-nav"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: "64px",
          background: "rgba(10,10,10,0.98)",
          borderTop: "1px solid var(--b0)",
          backdropFilter: "blur(16px)",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          alignItems: "center",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        {[
          { href: "/", icon: HomeIcon, label: "Home" },
          { href: "/products", icon: GridIcon, label: "Products" },
          { href: TELEGRAM.botUrl + "?start=order", icon: TelegramIcon, label: "Order", isOrder: true, external: true },
          { href: "/vape-delivery/koramangala", icon: MapIcon, label: "Areas" },
          { href: "/blog", icon: BlogIcon, label: "Blog" },
        ].map((item) => {
          const isActive = !item.external && pathname === item.href;
          return item.external ? (
            
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "3px",
                textDecoration: "none",
                padding: "8px 4px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "32px",
                  borderRadius: "20px",
                  background: "var(--orange)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1px",
                }}
              >
                <item.icon size={18} color="#fff" />
              </div>
              <span style={{ fontSize: "9px", fontWeight: 700, color: "var(--orange)", letterSpacing: "0.05em" }}>
                {item.label}
              </span>
            </a>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "3px",
                textDecoration: "none",
                padding: "8px 4px",
              }}
            >
              <item.icon size={20} color={isActive ? "var(--orange)" : "var(--dim)"} />
              <span
                style={{
                  fontSize: "9px",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "var(--orange)" : "var(--dim)",
                  letterSpacing: "0.04em",
                }}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <style>{`
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}

function HomeIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}

function GridIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function TelegramIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
    </svg>
  );
}

function MapIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function BlogIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10,9 9,9 8,9" />
    </svg>
  );
}
