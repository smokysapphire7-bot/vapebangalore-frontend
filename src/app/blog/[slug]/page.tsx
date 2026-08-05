import { notFound } from "next/navigation";
import Link from "next/link";
import { getBestsellers } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";
import type { Metadata } from "next";
import { blogPosts, getBlogPost } from "@/lib/blogs";
import { WHATSAPP, SITE } from "@/lib/settings";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://vapebangalore.com/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };

  const paragraphs = post.content.split("\n\n");
  const featured = getBestsellers().slice(0, 4);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        <div className="container" style={{ paddingTop: "48px", paddingBottom: "64px", maxWidth: "720px" }}>

          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "20px" }}>
            <span style={{ fontSize: "9px", fontWeight: 700, color: "var(--orange)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>{post.category}</span>
            <span style={{ fontSize: "9px", color: "var(--dim)" }}>{"·"}</span>
            <span style={{ fontSize: "9px", color: "var(--dim)" }}>{post.readTime} min read</span>
            <span style={{ fontSize: "9px", color: "var(--dim)" }}>{"·"}</span>
            <span style={{ fontSize: "9px", color: "var(--dim)" }}>
              {new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 900, color: "var(--white)", letterSpacing: "-0.025em",
            lineHeight: 1.15, marginBottom: "16px",
          }}>
            {post.title}
          </h1>

          <p style={{
            fontSize: "1.05rem", color: "var(--text)", lineHeight: 1.75,
            marginBottom: "40px", borderBottom: "1px solid var(--b0)", paddingBottom: "24px",
          }}>
            {post.excerpt}
          </p>

          <div style={{ color: "var(--text)", fontSize: "0.95rem", lineHeight: 1.8 }}>
            {paragraphs.map((para, i) => {
              if (para.startsWith("## ")) {
                return (
                  <h2 key={i} style={{
                    fontFamily: "var(--font-display)", fontSize: "1.2rem",
                    fontWeight: 800, color: "var(--white)", marginTop: "32px", marginBottom: "12px",
                  }}>
                    {para.replace("## ", "")}
                  </h2>
                );
              }
              return <p key={i} style={{ marginBottom: "16px" }}>{para}</p>;
            })}
          </div>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--b0)" }}>
            {post.tags.map((tag) => (
              <span key={tag} style={{
                background: "var(--s1)", border: "1px solid var(--b0)",
                borderRadius: "100px", padding: "3px 12px", fontSize: "11px", color: "var(--dim)",
              }}>{tag}</span>
            ))}
          </div>

          <div style={{
            background: "var(--s1)", border: "1px solid var(--b0)",
            borderRadius: "16px", padding: "28px", textAlign: "center" as const, marginTop: "40px",
          }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 800, color: "var(--white)", marginBottom: "8px" }}>
              Order Vapes in Bangalore — 30-45 Min Delivery
            </div>
            <p style={{ color: "var(--dim)", fontSize: "0.88rem", marginBottom: "20px" }}>
              100% original ·  · 120+ areas
            </p>
            <a
              href={WHATSAPP.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block", background: "#25D366", color: "#fff",
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem",
                padding: "12px 28px", borderRadius: "8px", textDecoration: "none",
              }}
            >
              Order on WhatsApp
            </a>
          </div>

        </div>
      </main>
    </>
  );
}
