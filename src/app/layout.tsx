import type { Metadata, Viewport } from "next";
import { Inter, Syne, JetBrains_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/settings";
import { LOCATION_COUNT } from "@/lib/locations";
import Navigation from "@/components/layout/Navigation";
import CartDrawer from "@/components/layout/CartDrawer";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/lib/cart";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const syne = Syne({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: ["400", "500", "600", "700", "800"] });
const bebasNeue = Bebas_Neue({ subsets: ["latin"], variable: "--font-bebas", display: "swap", weight: ["400"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", weight: ["300", "400", "500"] });

export const viewport: Viewport = {
  themeColor: "#FF5C00",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Vape Delivery Bangalore — 30 Min | VapeBangalore.com",
    template: "%s | VapeBangalore",
  },
  description: "Bangalore's #1 Vape Delivery Service. Get original disposable vapes, pod devices, and nicotine pouches delivered in 30-45 mins to BTM, HSR, Koramangala, Whitefield & 100+ areas. 100% Authentic. Order on WhatsApp now!",
  keywords: ["vape delivery bangalore", "vapebangalore", "buy vape online bangalore", "vape home delivery bangalore", "disposable vape delivery bangalore", "elfbar bangalore", "lost mary bangalore", "caliburn bangalore", "zyn bangalore", "nicotine pouches bangalore", "vape shop near me bangalore"],
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "Vape Delivery Bangalore — 30 Min | VapeBangalore.com",
    description: "Bangalore's #1 Vape Delivery Service. 100% Authentic vapes delivered in 30-45 mins to 100+ areas.",
    url: SITE.url,
    siteName: "VapeBangalore",
    locale: "en_IN",
    type: "website",
    images: [{ url: `${SITE.url}/og-image.jpg`, width: 1200, height: 630, alt: "Vape Delivery Bangalore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vape Delivery Bangalore — 30 Min",
    description: "Bangalore's #1 Vape Delivery Service. 100% Authentic vapes delivered in 30-45 mins.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VapeBangalore",
    "image": `${SITE.url}/og-image.jpg`,
    "url": SITE.url,
    "telephone": SITE.phone,
    "priceRange": "₹₹",
    "address": { "@type": "PostalAddress", "addressLocality": "Bangalore", "addressRegion": "Karnataka", "addressCountry": "IN" },
    "areaServed": { "@type": "City", "name": "Bangalore" },
    "sameAs": ["https://wa.me/916282878843"]
  };

  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${bebasNeue.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased bg-[var(--bg)] text-[var(--text)]">
        <CartProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
