import type { Metadata } from "next";
import { blogPosts } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Vape Blog Bangalore — Guides, Reviews & Tips | VapeBangalore.com",
  description: "Vape guides, product reviews, problem fixes and local delivery tips for Bangalore vapers. Elfbar, Lost Mary, ZYN, Caliburn and more.",
  alternates: { canonical: "https://vapebangalore.com/blog" },
};

const CATEGORY_COLORS: Record<string, string> = {
  "Guide": "var(--orange)",
  "Problem Fix": "#EF4444",
  "Comparison": "#3B82F6",
  "News": "#A855F7",
  "Local": "#22C55E",
};

export default function BlogIndexPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div className="container" style={{ paddingTop: "48px", paddingBottom: "64px" }}>
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontSize: "11px", color: "var(--orange)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Blog</div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            color: "var(--white)",
            letterSpacing: "-0.03em",
            marginBottom: "12px",
          }}>
            Vape Guides & Tips
          </h1>
          <p style={{ color: "var(--dim)", fontSize: "1rem" }}>
            Guides, problem fixes and local tips for Bangalore vapers.
          </p>
        </div>

        <div style={{ display: "grid", gap: "2px" }}>
          {blogPosts.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} style={{
              background: "var(--s1)",
              border: "1px solid var(--b0)",
              borderRadius: "8px",
              padding: "20px 24px",
              textDecoration: "none",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "16px",
              alignItems: "center",
              transition: "border-color 0.15s",
            }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <span style={{
                    fontSize: "9px",
                    fontWeight: 700,
                    color: CATEGORY_COLORS[post.category] || "var(--orange)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}>{post.category}</span>
                  <span style={{ fontSize: "9px", color: "var(--dim)" }}>·</span>
                  <span style={{ fontSize: "9px", color: "var(--dim)" }}>{post.readTime} min read</span>
                </div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  marginBottom: "4px",
                }}>{post.title}</div>
                <div style={{ fontSize: "12px", color: "var(--dim)", lineHeight: 1.5 }}>{post.excerpt}</div>
              </div>
              <div style={{ color: "var(--dim)", fontSize: "1.2rem", flexShrink: 0 }}>→</div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
