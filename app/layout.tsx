import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The Perfect Touch Painting | Hamilton, Burlington & Oakville | 4.9★ Rated",
  description:
    "The Perfect Touch Painting specializes in kitchen cabinet spray painting, interior wall painting, and color consultation in Hamilton, Burlington, and Oakville. 4.9 stars across 29 Google reviews. Call 647-920-6353.",
  openGraph: {
    title: "The Perfect Touch Painting | Cabinet & Interior Painting Specialists",
    description:
      "Women-owned painting company. Cabinet spray finishing, color consultation, interior painting — done with precision. 4.9★/29 reviews.",
    type: "website",
    images: [
      {
        url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFrQO3F5MJJxbFIPqq6lXvGYVh4pCOL3MZNj45ZhNFevhqZlHd4CvWUyv4bkl3l8AiWf7-P0wJBvEtdSuZmr3qhRY_cYr4YgkLY=w800-h600-k-no",
        width: 800,
        height: 600,
        alt: "The Perfect Touch Painting — kitchen cabinet spray painting project",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Perfect Touch Painting",
    description:
      "Women-owned painting company specializing in kitchen cabinet spray painting, interior wall painting, and color consultation serving Hamilton, Burlington, and Oakville.",
    telephone: "647-920-6353",
    areaServed: ["Hamilton", "Burlington", "Oakville"],
    openingHours: "Mo-Su 00:00-23:59",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "29",
      bestRating: "5",
    },
  };

  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-[100dvh] flex flex-col">{children}</body>
    </html>
  );
}
