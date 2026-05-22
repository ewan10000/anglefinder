import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/sections/CookieBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500","600","700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400","500","700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400","500","700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AngleFinder — Online Protractor & Angle Calculator",
  description:
    "Free online angle finder with protractor, triangle calculator, and image measurement. No signup required. For educational and general use.",
  keywords: [
    "angle finder",
    "online protractor",
    "angle calculator",
    "measure angle online",
    "triangle angle calculator",
    "photo angle tool",
  ],
  metadataBase: new URL("https://anglefinder.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AngleFinder — Precision 360° Online Protractor",
    description: "Free online protractor, triangle calculator & image measurer. No signup.",
    url: "https://anglefinder.co",
    siteName: "AngleFinder",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AngleFinder — Online Protractor & Angle Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AngleFinder — Precision 360° Online Protractor",
    description: "Free online protractor, triangle calculator & image measurer. No signup.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <JsonLd data={[generateOrganizationSchema(), generateWebSiteSchema()]} />
      </body>
    </html>
  );
}
