import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsentBanner from "@/components/common/ConsentBanner";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "VEERGATHA — Find the Story That Speaks to You",
  description: "India's history is not one story. It is thousands of stories waiting to be discovered, remembered, and reimagined. Explore Chola, Maratha, Rajputana, Ahom, Gupta, and Mauryan heritage.",
  keywords: [
    "Indian heritage",
    "Chola maritime history",
    "Maratha Swarajya",
    "Rajputana history",
    "Ahom kingdom",
    "Gupta golden age",
    "Mauryan statecraft",
    "Indian culture",
    "historical storytelling"
  ],
  authors: [{ name: "VEERGATHA Heritage Platform" }],
  openGraph: {
    title: "VEERGATHA — Find the Story That Speaks to You",
    description: "A digital-first heritage discovery and concept-validation platform bringing India's civilizational identities into contemporary design-led forms.",
    type: "website",
    locale: "en_IN",
    siteName: "VEERGATHA",
  },
  twitter: {
    card: "summary_large_image",
    title: "VEERGATHA — Digital Heritage Discovery",
    description: "India's history is not one story. It is thousands. Which one speaks to you?",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF7F2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col bg-parchment-100 text-ink-900 font-sans selection:bg-ink-900 selection:text-parchment-100">
        {/* Subtle ambient paper texture overlay */}
        <div className="paper-grain" aria-hidden="true" />
        
        {/* Main persistent navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Editorial Footer */}
        <Footer />

        {/* DPDP Compliant Consent Banner */}
        <ConsentBanner />
      </body>
    </html>
  );
}
