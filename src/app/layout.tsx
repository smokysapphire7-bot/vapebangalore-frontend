import type { Metadata, Viewport } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/settings";
import { LOCATION_COUNT } from "@/lib/locations";
import Navigation from "@/components/layout/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Buy Vapes in Bangalore — 30-45 Min Delivery | VapeBangalore.com",
    template: "%s | VapeBangalore.com",
  },
  description: `Buy vapes in Bangalore with 30-45 min delivery. Elfbar, Lost Mary, Caliburn, ZYN, Nasty and more. 100% original products. Discreet delivery across ${LOCATION_COUNT}+ areas. Order on Telegram or WhatsApp now.`,
  keywords: [
    "vape bangalore",
    "vapes in bangalore",
    "vape delivery bangalore",
    "buy vape bangalore",
    "vape in bangalore",
    "vape shop bangalore",
    "vape store bangalore",
    "buy vape online bangalore",
    "vape delivery near me bangalore",
    "vape home delivery bangalore",
    "elfbar bangalore",
    "lost mary bangalore",
    "caliburn bangalore",
    "zyn bangalore",
    "nicotine pouches bangalore",
    "disposable vape bangalore",
    "pod device bangalore",
    "vape online bangalore",
    "order vape bangalore",
    "vape bangalore telegram",
  ],
  authors: [{ name: "VapeBangalore" }],
  creator: "VapeBangalore",
  publisher: "VapeBangalore",
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: "VapeBangalore.com",
    title: "Buy Vapes in Bangalore — 30-45 Min Delivery | VapeBangalore.com",
    description: `Fast, discreet vape delivery across all of Bangalore. ${LOCATION_COUNT}+ areas covered. Elfbar, Lost Mary, Caliburn, ZYN and more. Order on Telegram.`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "VapeBangalore — Fast Vape Delivery in Bangalore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Vapes in Bangalore — 30-45 Min Delivery",
    description: `Fast, discreet vape delivery across ${LOCATION_COUNT}+ areas in Bangalore. Order on Telegram now.`,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon-48.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#FF5C00",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE.url,
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  description: SITE.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  areaServed: { "@type": "City", name: "Bangalore" },
  openingHours: SITE.openingHours,
  priceRange: SITE.priceRange,
  sameAs: ["https://t.me/vapebangalore"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "VapeBangalore.com",
  url: SITE.url,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE.url}/products?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How fast is vape delivery in Bangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We deliver vapes across Bangalore in 30-45 minutes. Most orders in Koramangala, Indiranagar, HSR Layout, Whitefield and BTM Layout arrive within 30 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Are the vapes 100% original?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All products are sourced directly from authorised distributors. Every product has an authentication QR code you can scan to verify on the brand official website.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas do you deliver vapes to in Bangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `We deliver across ${LOCATION_COUNT}+ areas in Bangalore including Koramangala, Indiranagar, HSR Layout, Whitefield, BTM Layout, Marathahalli, Electronic City, Jayanagar, Hebbal, Yelahanka and more.`,
      },
    },
    {
      "@type": "Question",
      name: "How do I order vapes in Bangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Order on Telegram VapeBangalore or WhatsApp. Browse products on our website, select your product and flavour, then tap Order on Telegram or WhatsApp. No login or app download required.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods are accepted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delivery charges are paid to the rider on arrival — cash or UPI. No prepayment required.",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />
        <meta name="geo.position" content={`${SITE.geo.lat};${SITE.geo.lng}`} />
        <meta name="ICBM" content={`${SITE.geo.lat}, ${SITE.geo.lng}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body suppressHydrationWarning>
        <Navigation />
        <div style={{ paddingTop: "60px" }}>{children}</div>
      </body>
    </html>
  );
}
