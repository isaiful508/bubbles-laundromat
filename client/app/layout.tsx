import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bubbles Laundromat | Professional Laundry Services in Oklahoma City",
  description:
    "Bubbles Laundromat offers premium coin-operated and full-service laundry in Oklahoma City, OK. Clean machines, comfortable atmosphere, open 7 days. Call (405) 748-8990.",
  keywords:
    "laundromat Oklahoma City, coin laundry OKC, laundry service, wash and fold, self-service laundry, Bubbles Laundromat, 73114",
  authors: [{ name: "Bubbles Laundromat" }],
  creator: "Bubbles Laundromat",
  publisher: "Bubbles Laundromat",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bubbleslaundromat.com",
    siteName: "Bubbles Laundromat",
    title: "Bubbles Laundromat | Professional Laundry Services in Oklahoma City",
    description:
      "Premium laundry services in Oklahoma City, OK. Coin-operated & full-service wash and fold. Clean, fast, affordable.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Bubbles Laundromat Oklahoma City" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bubbles Laundromat | Oklahoma City",
    description: "Premium laundry services in OKC. Coin-operated & full-service wash and fold.",
  },
  alternates: { canonical: "https://bubbleslaundromat.com" },
  other: {
    "geo.region": "US-OK",
    "geo.placename": "Oklahoma City",
    "geo.position": "35.5929;-97.5499",
    "ICBM": "35.5929, -97.5499",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1628",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bubbleslaundromat.com",
  name: "Bubbles Laundromat",
  image: "https://bubbleslaundromat.com/og-image.jpg",
  telephone: "+1-405-748-8990",
  address: {
    "@type": "PostalAddress",
    streetAddress: "815 W Britton Rd",
    addressLocality: "Oklahoma City",
    addressRegion: "OK",
    postalCode: "73114",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 35.5929, longitude: -97.5499 },
  url: "https://bubbleslaundromat.com",
  priceRange: "$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "06:00",
      closes: "22:00",
    },
  ],
  sameAs: [],
  servesCuisine: undefined,
  serviceType: "Laundromat",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
