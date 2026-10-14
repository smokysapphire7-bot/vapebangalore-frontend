"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const IMAGES = [
  "/hero/hero-1.jpg",
  "/hero/hero-2.jpg",
  "/hero/hero-3.jpg",
  "/hero/hero-4.jpg",
  "/hero/hero-5.jpg",
  "/hero/hero-6.jpg",
  "/hero/hero-7.jpg",
  "/hero/hero-8.jpg",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % IMAGES.length);
        setFading(false);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "12px", overflow: "hidden" }}>
      <Image
        src={IMAGES[current]}
        alt="VapeBangalore — Vape Delivery Bangalore"
        fill
        style={{
          objectFit: "cover",
          opacity: fading ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
        priority={current === 0}
      />
      {/* Dot indicators */}
      <div style={{ position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "4px", zIndex: 2 }}>
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? "16px" : "6px",
              height: "6px",
              borderRadius: "100px",
              background: i === current ? "#C8102E" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
