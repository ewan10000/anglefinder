import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/sections/CookieBanner";

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
  title: "AngleFinder — Precision 360° Online Protractor & Angle Calculator",
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
  openGraph: {
    title: "AngleFinder — Precision 360° Online Protractor",
    description: "Free online protractor, triangle calculator & image measurer. No signup.",
    url: "https://anglefinder.co",
    siteName: "AngleFinder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AngleFinder — Precision 360° Online Protractor",
    description: "Free online protractor, triangle calculator & image measurer. No signup.",
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
      </body>
    </html>
  );
}
