"use client";

import React, { useState } from "react";
import { useCart } from "@/lib/cart";
import { WHATSAPP } from "@/lib/settings";

export default function CartDrawer() {
  const { items, count, removeItem, updateQty, clearCart, isOpen, closeCart } = useCart();
  const [name, setName] = useState("");
  const [area, setArea] = useState("");

  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  const buildWhatsAppMessage = () => {
    const orderLines = items.map((i) =>
      `• ${i.product.name}${i.flavour ? ` (${i.flavour})` : ""} x${i.quantity} — ₹${(i.product.price * i.quantity).toLocaleString("en-IN")}`
    ).join("\n");
    const msg = [
      "🛒 *New Order — VapeBangalore.com*",
      "",
      orderLines,
      "",
      `💰 *Total: ₹${total.toLocaleString("en-IN")}*`,
      "",
      `👤 *Name:* ${name || "Not provided"}`,
      `📍 *Delivery Area:* ${area || "Not provided"}`,
      "",
      "Please confirm availability and delivery time. Thank you!",
    ].join("\n");
    return `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(msg)}`;
  };

  const canCheckout = items.length > 0 && name.trim().length > 0 && area.trim().length > 0;

  if (!isOpen) return null;

  return (
    <>
      <div onClick={closeCart} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 60, backdropFilter: "blur(4px)" }} />
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 70, background: "var(--s1)", borderTop: "1px solid var(--b0)", borderRadius: "16px 16px 0 0", padding: "0 0 80px", maxHeight: "90vh", display: "flex", flexDirection: "column", boxShadow: "0 -8px 40px rgba(0,0,0,0.5)" }}>

        <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 8px" }}>
          <div style={{ width: "40px", height: "4px", background: "var(--b2)", borderRadius: "2px" }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 20px 16px", borderBottom: "1px solid var(--b0)" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 800, color: "var(--white)", letterSpacing: "-0.02em" }}>Your Cart</h2>
            <p style={{ fontSize: "11px", color: "var(--dim)", marginTop: "2px" }}>{count} item{count !== 1 ? "s" : ""}</p>
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {items.length !== 0 && (
              <button onClick={clearCart} style={{ fontSize: "11px", color: "var(--dim)", background: "none", border: "1px solid var(--b1)", padding: "4px 10px", borderRadius: "4px", cursor: "pointer" }}>Clear</button>
            )}
            <button onClick={closeCart} style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--s3)", border: "1px solid var(--b1)", color: "var(--dim)", fontSize: "16px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "12px 20px" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <div style={{ fontSize: "40px", marginBottom: "12px" }}>🛒</div>
              <p style={{ color: "var(--dim)", fontSize: "13px" }}>Your cart is empty</p>
              <button onClick={closeCart} style={{ marginTop: "16px", color: "var(--orange)", background: "var(--orange-dim)", border: "1px solid rgba(255,92,0,0.25)", padding: "8px 20px", borderRadius: "6px", cursor: "pointer", fontSize: "12px", fontWeight: 600 }}>Browse Products</button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

              {items.map((item) => (
                <div key={`${item.product.slug}-${item.flavour}`} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", background: "var(--s2)", border: "1px solid var(--b0)", borderRadius: "10px", padding: "12px" }}>
                  <div>
                    <div style={{ fontSize: "9px", fontWeight: 700, color: "var(--orange)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "3px" }}>{item.product.brand}</div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--white)", marginBottom: "3px", lineHeight: 1.2 }}>{item.product.name}</div>
                    {item.flavour && <div style={{ fontSize: "11px", color: "var(--dim)" }}>Flavour: {item.flavour}</div>}
                    <div style={{ fontSize: "13px", fontWeight: 700, fontFamily: "var(--font-mono)", background: "linear-gradient(135deg, #FF5C00, #FF2D55)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginTop: "4px" }}>
                      &#8377;{(item.product.price * item.quantity).toLocaleString("en-IN")}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "var(--s3)", border: "1px solid var(--b1)", borderRadius: "6px", padding: "2px" }}>
                      <button onClick={() => updateQty(item.product.slug, item.flavour, item.quantity - 1)} style={{ width: "28px", height: "28px", background: "none", border: "none", color: "var(--white)", fontSize: "16px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px" }}>−</button>
                      <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--white)", minWidth: "20px", textAlign: "center" }}>{item.quantity}</span>
                      <button onClick={() => updateQty(item.product.slug, item.flavour, item.quantity + 1)} style={{ width: "28px", height: "28px", background: "none", border: "none", color: "var(--white)", fontSize: "16px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px" }}>+</button>
                    </div>
                    <button onClick={() => removeItem(item.product.slug, item.flavour)} style={{ fontSize: "10px", color: "var(--dim)", background: "none", border: "none", cursor: "pointer", padding: "2px" }}>Remove</button>
                  </div>
                </div>
              ))}

              <div style={{ borderTop: "1px solid var(--b0)", margin: "4px 0" }} />

              <div>
                <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--orange)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul"
                  style={{ width: "100%", background: "var(--s2)", border: `1px solid ${name.trim() ? "var(--orange)" : "var(--b1)"}`, borderRadius: "8px", padding: "12px 14px", fontSize: "16px", color: "var(--white)", outline: "none", fontFamily: "var(--font-body)", boxSizing: "border-box" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--orange)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Delivery Area</label>
                <input
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="e.g. Koramangala 5th Block or paste Google Maps link"
                  style={{ width: "100%", background: "var(--s2)", border: `1px solid ${area.trim() ? "var(--orange)" : "var(--b1)"}`, borderRadius: "8px", padding: "12px 14px", fontSize: "16px", color: "var(--white)", outline: "none", fontFamily: "var(--font-body)", boxSizing: "border-box" }}
                />
                <p style={{ fontSize: "10px", color: "var(--dim)", marginTop: "5px" }}>Type your area or paste a Google Maps link for precise delivery</p>
              </div>

            </div>
          )}
        </div>

        {items.length !== 0 && (
          <CartFooter
            count={count}
            total={total}
            canCheckout={canCheckout}
            name={name}
            area={area}
            waLink={buildWhatsAppMessage()}
            onClose={closeCart}
          />
        )}
      </div>
    </>
  );
}

interface CartFooterProps {
  count: number;
  total: number;
  canCheckout: boolean;
  name: string;
  area: string;
  waLink: string;
  onClose: () => void;
}

function CartFooter({ count, total, canCheckout, name, area, waLink, onClose }: CartFooterProps) {
  const btnStyle: React.CSSProperties = {
    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
    background: canCheckout ? "linear-gradient(135deg, #FF5C00, #FF2D55)" : "var(--s3)",
    color: canCheckout ? "#fff" : "var(--dim)",
    padding: "16px", borderRadius: "10px", fontWeight: 800, fontSize: "15px",
    textDecoration: "none", cursor: canCheckout ? "pointer" : "not-allowed",
    boxShadow: canCheckout ? "0 4px 20px rgba(255,92,0,0.4)" : "none",
    transition: "all 0.2s",
  };

  const hint = !name.trim() && !area.trim()
    ? "Enter your name and delivery area to checkout"
    : !name.trim() ? "Enter your name to checkout"
    : "Enter your delivery area to checkout";

  return (
    <div style={{ padding: "16px 20px", borderTop: "1px solid var(--b0)", background: "var(--s1)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
        <span style={{ fontSize: "13px", color: "var(--dim)" }}>Total ({count} items)</span>
        <span style={{ fontSize: "20px", fontWeight: 800, fontFamily: "var(--font-mono)", background: "linear-gradient(135deg, #FF5C00, #FF2D55)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          &#8377;{total.toLocaleString("en-IN")}
        </span>
      </div>
      {!canCheckout && (
        <p style={{ fontSize: "11px", color: "var(--dim)", textAlign: "center", marginBottom: "10px" }}>{hint}</p>
      )}
      <a
        href={canCheckout ? waLink : "#"}
        target="_blank"
        rel="noopener noreferrer"
        onClick={canCheckout ? onClose : (e: React.MouseEvent) => e.preventDefault()}
        style={btnStyle}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        {canCheckout ? "Order via WhatsApp" : "Complete details above"}
      </a>
      <p style={{ fontSize: "10px", color: "var(--dim)", textAlign: "center", marginTop: "8px" }}>Your full order will be sent as a WhatsApp message</p>
    </div>
  );
}
