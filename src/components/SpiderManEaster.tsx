"use client";
import { useEffect, useRef, useState } from "react";

// ── Cobweb component ──────────────────────────────────────────────────────────
function Cobweb({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const [puffed, setPuffed] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setPuffed(true);
    setTimeout(() => setVisible(false), 600);
    setTimeout(() => { setVisible(true); setPuffed(false); }, 8000);
  };

  const transforms: Record<string, string> = {
    tl: "rotate(0deg)",
    tr: "rotate(90deg) scaleX(-1)",
    bl: "rotate(-90deg)",
    br: "rotate(180deg)",
  };

  const positions: Record<string, React.CSSProperties> = {
    tl: { top: 60, left: 0 },
    tr: { top: 60, right: 0 },
    bl: { bottom: 80, left: 0 },
    br: { bottom: 80, right: 0 },
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleClick}
      style={{
        position: "fixed",
        zIndex: 55,
        cursor: "pointer",
        transform: transforms[position],
        transition: "all 0.3s",
        ...positions[position],
      }}
    >
      <svg
        width="120" height="120" viewBox="0 0 120 120"
        style={{
          opacity: puffed ? 0 : 0.6,
          transform: puffed ? "scale(2)" : "scale(1)",
          transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
          filter: "drop-shadow(0 0 4px rgba(200,200,255,0.4))",
        }}
      >
        {/* Web strands */}
        <line x1="0" y1="0" x2="120" y2="120" stroke="#aab4d4" strokeWidth="0.8" opacity="0.7"/>
        <line x1="0" y1="0" x2="80" y2="120" stroke="#aab4d4" strokeWidth="0.8" opacity="0.7"/>
        <line x1="0" y1="0" x2="40" y2="120" stroke="#aab4d4" strokeWidth="0.8" opacity="0.7"/>
        <line x1="0" y1="0" x2="0" y2="120" stroke="#aab4d4" strokeWidth="0.8" opacity="0.7"/>
        <line x1="0" y1="0" x2="120" y2="80" stroke="#aab4d4" strokeWidth="0.8" opacity="0.7"/>
        <line x1="0" y1="0" x2="120" y2="40" stroke="#aab4d4" strokeWidth="0.8" opacity="0.7"/>
        <line x1="0" y1="0" x2="120" y2="0" stroke="#aab4d4" strokeWidth="0.8" opacity="0.7"/>
        {/* Concentric web rings */}
        {[20,40,60,80,100].map((r, i) => (
          <path key={i}
            d={`M ${Math.min(r,120)} 0 Q ${r*0.7} ${r*0.7} 0 ${Math.min(r,120)}`}
            fill="none" stroke="#aab4d4" strokeWidth="0.7" opacity="0.6"
          />
        ))}
      </svg>
      {puffed && (
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          fontSize: 28, animation: "puff 0.6s ease forwards",
          pointerEvents: "none",
        }}>💨</div>
      )}
    </div>
  );
}

// ── SpiderMan SVG ─────────────────────────────────────────────────────────────
function SpiderMan() {
  const [swinging, setSwinging] = useState(false);
  const [flipping, setFlipping] = useState(false);
  const [webLength, setWebLength] = useState(60);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = () => {
    if (swinging) return;
    const rand = Math.random();
    if (rand > 0.6) {
      setFlipping(true);
      setTimeout(() => setFlipping(false), 800);
    } else {
      setSwinging(true);
      setWebLength(90);
      setTimeout(() => { setWebLength(60); }, 400);
      setTimeout(() => setSwinging(false), 900);
    }
  };

  useEffect(() => {
    // Auto-swing occasionally
    intervalRef.current = setInterval(() => {
      if (Math.random() > 0.7) {
        setSwinging(true);
        setWebLength(80);
        setTimeout(() => setWebLength(60), 400);
        setTimeout(() => setSwinging(false), 900);
      }
    }, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <div
      onClick={handleClick}
      style={{
        position: "fixed",
        right: 8,
        top: 60,
        zIndex: 49,
        cursor: "pointer",
        transformOrigin: "top right",
        animation: swinging ? "swing 0.9s ease-in-out" : "hang 3s ease-in-out infinite",
        transform: flipping ? "rotate(360deg) scaleX(-1)" : "none",
        transition: flipping ? "transform 0.8s ease" : "none",
        userSelect: "none",
      }}
    >
      {/* Web thread */}
      <svg width="20" height={webLength} style={{ display: "block", margin: "0 auto" }}>
        <line x1="10" y1="0" x2="10" y2={webLength}
          stroke="#aab4d4" strokeWidth="1.5"
          strokeDasharray="4 2" opacity="0.8"
        />
      </svg>

      {/* Spider-Man SVG body */}
      <svg width="44" height="58" viewBox="0 0 60 80" style={{ display: "block" }}>
        {/* Body */}
        <ellipse cx="30" cy="48" rx="14" ry="18" fill="#E23D28"/>
        {/* Chest web pattern */}
        <line x1="30" y1="30" x2="30" y2="66" stroke="#8B0000" strokeWidth="0.8" opacity="0.6"/>
        <line x1="16" y1="48" x2="44" y2="48" stroke="#8B0000" strokeWidth="0.8" opacity="0.6"/>
        <ellipse cx="30" cy="48" rx="14" ry="18" fill="none" stroke="#8B0000" strokeWidth="0.5" opacity="0.4"/>

        {/* Head */}
        <ellipse cx="30" cy="22" rx="13" ry="14" fill="#E23D28"/>
        {/* Eyes */}
        <ellipse cx="24" cy="19" rx="5" ry="4" fill="white" opacity="0.95"/>
        <ellipse cx="36" cy="19" rx="5" ry="4" fill="white" opacity="0.95"/>
        <ellipse cx="24" cy="19" rx="3.5" ry="2.8" fill="#1B4FD8"/>
        <ellipse cx="36" cy="19" rx="3.5" ry="2.8" fill="#1B4FD8"/>
        {/* Head web lines */}
        <line x1="30" y1="8" x2="30" y2="36" stroke="#8B0000" strokeWidth="0.6" opacity="0.4"/>
        <line x1="17" y1="22" x2="43" y2="22" stroke="#8B0000" strokeWidth="0.6" opacity="0.4"/>

        {/* Blue shorts/legs area */}
        <ellipse cx="30" cy="62" rx="11" ry="8" fill="#1B4FD8"/>

        {/* Left arm - web shooting pose */}
        <path d="M 16 38 Q 4 28 2 18" stroke="#E23D28" strokeWidth="5" fill="none" strokeLinecap="round"/>
        {/* Right arm - hanging */}
        <path d="M 44 38 Q 52 32 54 24" stroke="#E23D28" strokeWidth="5" fill="none" strokeLinecap="round"/>

        {/* Hands */}
        <circle cx="2" cy="16" r="4" fill="#E23D28"/>
        <circle cx="54" cy="22" r="4" fill="#E23D28"/>

        {/* Legs */}
        <path d="M 22 68 Q 18 76 16 80" stroke="#1B4FD8" strokeWidth="5" fill="none" strokeLinecap="round"/>
        <path d="M 38 68 Q 42 76 44 80" stroke="#1B4FD8" strokeWidth="5" fill="none" strokeLinecap="round"/>

        {/* Feet */}
        <ellipse cx="14" cy="80" rx="5" ry="3" fill="#E23D28"/>
        <ellipse cx="46" cy="80" rx="5" ry="3" fill="#E23D28"/>

        {/* Web from left hand */}
        <line x1="2" y1="16" x2="-10" y2="8" stroke="#aab4d4" strokeWidth="1" opacity="0.7"/>
      </svg>


    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function SpiderManEaster() {
  return (
    <>
      <style>{`
        @keyframes hang {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes swing {
          0% { transform: rotate(-3deg); }
          25% { transform: rotate(-25deg); }
          50% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
          100% { transform: rotate(-3deg); }
        }
        @keyframes puff {
          0% { opacity: 1; transform: translate(-50%,-50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%,-50%) scale(3); }
        }
      `}</style>
      <Cobweb position="tl" />
      <Cobweb position="tr" />
      <Cobweb position="bl" />
      <Cobweb position="br" />
      <SpiderMan />
    </>
  );
}
