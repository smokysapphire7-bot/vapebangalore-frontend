"use client";
import { useState, useEffect } from "react";

function getHalloweenEnd() {
  const end = new Date();
  end.setFullYear(2026, 9, 31); // Oct 31 2026
  end.setHours(23, 59, 59, 0);
  return end;
}

const END = getHalloweenEnd();

export default function Halloween() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    function update() {
      const diff = END.getTime() - Date.now();
      if (diff <= 0) { setExpired(true); return; }
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  if (expired) return null;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      {/* Floating pumpkins */}
      <div aria-hidden style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        {["🎃","🦇","🎃","👻","🦇","🎃","👻","🦇"].map((emoji, i) => (
          <span key={i} style={{
            position: "absolute",
            fontSize: `${14 + (i % 3) * 6}px`,
            left: `${8 + i * 12}%`,
            top: `${5 + (i % 4) * 20}%`,
            opacity: 0.15,
            animation: `floatBob ${3 + i * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}>{emoji}</span>
        ))}
      </div>

      {/* Halloween banner */}
      <div style={{
        background: "linear-gradient(135deg, #1a0a00 0%, #0d0d0d 50%, #1a0500 100%)",
        border: "1px solid rgba(255,107,0,0.3)",
        borderRadius: "14px",
        padding: "16px",
        margin: "0 0 20px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Spiderweb corners */}
        <div aria-hidden style={{ position: "absolute", top: 0, right: 0, fontSize: "32px", opacity: 0.15, lineHeight: 1 }}>🕸️</div>
        <div aria-hidden style={{ position: "absolute", bottom: 0, left: 0, fontSize: "32px", opacity: 0.15, lineHeight: 1, transform: "scaleX(-1)" }}>🕸️</div>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "28px" }}>🎃</span>
            <div>
              <div style={{ fontFamily: "var(--font-bebas)", fontSize: "20px", color: "#FF6B00", letterSpacing: "0.08em", lineHeight: 1 }}>
                HALLOWEEN SPECIAL
              </div>
              <div style={{ fontSize: "10px", color: "rgba(255,107,0,0.6)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Order before the witching hour 🦇
              </div>
            </div>
          </div>

          {/* Countdown */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {[
              { v: pad(time.d), l: "DAYS" },
              { v: pad(time.h), l: "HRS" },
              { v: pad(time.m), l: "MIN" },
              { v: pad(time.s), l: "SEC" },
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                <div style={{
                  background: "#FF6B00",
                  color: "#000",
                  fontFamily: "var(--font-bebas)",
                  fontSize: "20px",
                  padding: "4px 7px",
                  borderRadius: "6px",
                  minWidth: "32px",
                  textAlign: "center",
                  lineHeight: 1,
                  fontWeight: 900,
                }}>{t.v}</div>
                <div style={{ fontSize: "8px", color: "rgba(255,107,0,0.5)", fontWeight: 700, letterSpacing: "0.1em" }}>{t.l}</div>
                {i < 3 && <div style={{ color: "#FF6B00", fontSize: "14px", fontWeight: 900, marginTop: "-18px", marginLeft: "32px", position: "absolute" }}>:</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Message */}
        <div style={{
          background: "rgba(255,107,0,0.08)",
          border: "1px solid rgba(255,107,0,0.15)",
          borderRadius: "8px",
          padding: "10px 12px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}>
          <span style={{ fontSize: "16px" }}>👻</span>
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>
            Spooky savings are here! Shop our full range of vapes this Halloween. 
            Fast 30-45 min delivery across Bangalore — even on Halloween night! 🎃
          </p>
        </div>
      </div>

      <style>{`
        @keyframes floatBob {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(5deg); }
        }
      `}</style>
    </>
  );
}
