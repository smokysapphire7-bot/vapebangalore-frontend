"use client";
import { useState, useEffect } from "react";
import { products } from "@/lib/products";

interface Review {
  id: string;
  productSlug: string;
  productName: string;
  author: string;
  area: string;
  rating: number;
  text: string;
  date: string;
}

function StarPicker({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const [hover, setHover] = useState(0);
  return (
    <div style={{ display: "flex", gap: "6px" }}>
      {[1, 2, 3, 4, 5].map(s => (
        <button key={s} type="button" onClick={() => onChange(s)}
          onMouseEnter={() => setHover(s)} onMouseLeave={() => setHover(0)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          <svg width="28" height="28" viewBox="0 0 24 24"
            fill={(hover || value) >= s ? "#C8102E" : "var(--b2)"}>
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        </button>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"read" | "write">("read");
  const [filterSlug, setFilterSlug] = useState("all");

  const [form, setForm] = useState({
    productSlug: "",
    author: "",
    area: "",
    rating: 0,
    text: "",
  });

  useEffect(() => {
    fetch("/api/reviews")
      .then(r => r.json())
      .then(d => { setReviews(d.reviews || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const handleSubmit = async () => {
    setError("");
    if (!form.productSlug) return setError("Please select a product.");
    if (!form.author.trim()) return setError("Please enter your name.");
    if (!form.rating) return setError("Please select a star rating.");
    if (form.text.trim().length < 10) return setError("Review must be at least 10 characters.");

    setSubmitting(true);
    const product = products.find(p => p.slug === form.productSlug);
    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, productName: product?.name || form.productSlug }),
    });
    const data = await res.json();
    setSubmitting(false);

    if (data.success) {
      setSubmitted(true);
    } else {
      setError(data.error || "Failed to submit. Try again.");
    }
  };

  const filtered = filterSlug === "all" ? reviews : reviews.filter(r => r.productSlug === filterSlug);

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "80px", paddingBottom: "100px" }}>
      <div className="container" style={{ paddingTop: "32px" }}>

        {/* Header */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ fontSize: "11px", color: "var(--orange)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Customer Reviews</div>
          <h1 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2rem,6vw,3rem)", color: "var(--white)", letterSpacing: "0.02em", marginBottom: "8px" }}>WHAT CUSTOMERS SAY</h1>
          <p style={{ fontSize: "13px", color: "var(--dim)", lineHeight: 1.6 }}>Real reviews from real customers across Bangalore. All reviews are verified before publishing.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "28px" }}>
          {(["read", "write"] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              style={{ padding: "10px 24px", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "13px", fontWeight: 600,
                background: activeTab === tab ? "var(--orange)" : "var(--s2)",
                color: activeTab === tab ? "#fff" : "var(--dim)" }}>
              {tab === "read" ? "Read Reviews" : "Write a Review"}
            </button>
          ))}
        </div>

        {/* READ TAB */}
        {activeTab === "read" && (
          <div>
            {/* Filter */}
            <select value={filterSlug} onChange={e => setFilterSlug(e.target.value)}
              style={{ background: "var(--s2)", border: "1px solid var(--b1)", color: "var(--text)", borderRadius: "8px", padding: "10px 14px", fontSize: "13px", marginBottom: "20px", width: "100%", maxWidth: "300px", outline: "none" }}>
              <option value="all">All Products</option>
              {products.map(p => <option key={p.slug} value={p.slug}>{p.name}</option>)}
            </select>

            {loading ? (
              <div style={{ textAlign: "center", padding: "40px", color: "var(--dim)" }}>Loading reviews...</div>
            ) : filtered.length === 0 ? (
              <div style={{ textAlign: "center", padding: "40px", color: "var(--dim)" }}>
                <div style={{ fontSize: "40px", marginBottom: "12px" }}>⭐</div>
                <p>No reviews yet for this product.</p>
                <button onClick={() => setActiveTab("write")} style={{ marginTop: "16px", background: "var(--orange)", color: "#fff", border: "none", borderRadius: "8px", padding: "10px 20px", cursor: "pointer", fontWeight: 600, fontSize: "13px" }}>
                  Be the first to review
                </button>
              </div>
            ) : (
              <div style={{ display: "grid", gap: "12px" }}>
                {filtered.map(r => (
                  <div key={r.id} style={{ background: "var(--s1)", border: "1px solid rgba(200,16,46,0.15)", borderRadius: "12px", padding: "18px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
                      <div style={{ display: "flex", gap: "2px" }}>
                        {[1,2,3,4,5].map(s => (
                          <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill={s <= r.rating ? "#C8102E" : "var(--b2)"}><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" /></svg>
                        ))}
                      </div>
                      <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--white)" }}>{r.author}</span>
                      <span style={{ fontSize: "11px", color: "var(--dim)" }}>· {r.area}</span>
                      <span style={{ fontSize: "10px", color: "var(--orange)", background: "var(--orange-dim)", border: "1px solid var(--orange-glow)", padding: "2px 8px", borderRadius: "100px", marginLeft: "auto" }}>{r.productName}</span>
                    </div>
                    <p style={{ fontSize: "13px", color: "var(--text)", lineHeight: 1.7 }}>{r.text}</p>
                    <div style={{ fontSize: "10px", color: "var(--dim)", marginTop: "8px" }}>{r.date}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* WRITE TAB */}
        {activeTab === "write" && (
          <div style={{ maxWidth: "560px" }}>
            {submitted ? (
              <div style={{ background: "var(--s1)", border: "1px solid rgba(200,16,46,0.2)", borderRadius: "12px", padding: "32px", textAlign: "center" }}>
                <div style={{ fontSize: "48px", marginBottom: "12px" }}>🎉</div>
                <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "24px", color: "var(--white)", marginBottom: "8px", letterSpacing: "0.02em" }}>REVIEW SUBMITTED!</h2>
                <p style={{ color: "var(--dim)", fontSize: "13px", lineHeight: 1.7 }}>Thank you for your review. It will appear on the site after verification — usually within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ productSlug: "", author: "", area: "", rating: 0, text: "" }); setActiveTab("read"); }}
                  style={{ marginTop: "20px", background: "var(--orange)", color: "#fff", border: "none", borderRadius: "8px", padding: "10px 24px", cursor: "pointer", fontWeight: 600, fontSize: "13px" }}>
                  Read All Reviews
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

                {/* Product */}
                <div>
                  <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--orange)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Product *</label>
                  <select value={form.productSlug} onChange={e => setForm(f => ({ ...f, productSlug: e.target.value }))}
                    style={{ width: "100%", background: "var(--s2)", border: `1px solid ${form.productSlug ? "var(--orange)" : "var(--b1)"}`, borderRadius: "8px", padding: "12px 14px", fontSize: "14px", color: "var(--text)", outline: "none" }}>
                    <option value="">Select a product...</option>
                    {products.map(p => <option key={p.slug} value={p.slug}>{p.brand} — {p.name}</option>)}
                  </select>
                </div>

                {/* Rating */}
                <div>
                  <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--orange)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Your Rating *</label>
                  <StarPicker value={form.rating} onChange={r => setForm(f => ({ ...f, rating: r }))} />
                </div>

                {/* Name */}
                <div>
                  <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--orange)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Your Name *</label>
                  <input type="text" value={form.author} onChange={e => setForm(f => ({ ...f, author: e.target.value }))}
                    placeholder="e.g. Rahul K"
                    style={{ width: "100%", background: "var(--s2)", border: `1px solid ${form.author ? "var(--orange)" : "var(--b1)"}`, borderRadius: "8px", padding: "12px 14px", fontSize: "14px", color: "var(--white)", outline: "none" }} />
                </div>

                {/* Area */}
                <div>
                  <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--orange)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Your Area</label>
                  <input type="text" value={form.area} onChange={e => setForm(f => ({ ...f, area: e.target.value }))}
                    placeholder="e.g. Koramangala"
                    style={{ width: "100%", background: "var(--s2)", border: "1px solid var(--b1)", borderRadius: "8px", padding: "12px 14px", fontSize: "14px", color: "var(--white)", outline: "none" }} />
                </div>

                {/* Review */}
                <div>
                  <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--orange)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Your Review *</label>
                  <textarea value={form.text} onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
                    placeholder="Tell us about your experience — the product, delivery speed, packaging..."
                    rows={4}
                    style={{ width: "100%", background: "var(--s2)", border: `1px solid ${form.text.length >= 10 ? "var(--orange)" : "var(--b1)"}`, borderRadius: "8px", padding: "12px 14px", fontSize: "14px", color: "var(--white)", outline: "none", resize: "vertical", fontFamily: "inherit" }} />
                  <div style={{ fontSize: "10px", color: "var(--dim)", marginTop: "4px" }}>{form.text.length}/500 characters</div>
                </div>

                {error && <div style={{ fontSize: "12px", color: "#EF4444", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "6px", padding: "10px 14px" }}>{error}</div>}

                <button onClick={handleSubmit} disabled={submitting}
                  style={{ background: submitting ? "var(--s3)" : "var(--orange)", color: submitting ? "var(--dim)" : "#fff", border: "none", borderRadius: "8px", padding: "14px", fontSize: "14px", fontWeight: 700, cursor: submitting ? "not-allowed" : "pointer" }}>
                  {submitting ? "Submitting..." : "Submit Review"}
                </button>

                <p style={{ fontSize: "11px", color: "var(--dim)", textAlign: "center" }}>All reviews are verified before publishing. No fake reviews.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
