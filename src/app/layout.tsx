import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import "./globals.css";

const SITE_URL = "https://www.blacktailbuildersllc.com";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1A1A1A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Blacktail Builders LLC | Custom Home Builder in Southern Oregon",
    template: "%s | Blacktail Builders LLC",
  },
  description:
    "Full-service residential construction company specializing in custom homes, design-build, and quality craftsmanship across Douglas County, Coos County, and Curry County, Oregon. Call (541) 378-6971.",
  keywords: [
    "custom home builder Southern Oregon",
    "general contractor Roseburg Oregon",
    "design build Douglas County",
    "residential construction Coos County",
    "custom home construction Curry County",
    "home builder Roseburg OR",
    "new home construction Southern Oregon",
    "custom home builder Oregon",
    "general contractor Douglas County Oregon",
    "quality home construction",
  ],
  authors: [{ name: "Blacktail Builders LLC" }],
  creator: "Blacktail Builders LLC",
  publisher: "Blacktail Builders LLC",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Blacktail Builders LLC",
    title: "Blacktail Builders LLC | Custom Home Builder in Southern Oregon",
    description:
      "Full-service residential construction — custom homes, design-build, and quality craftsmanship across Douglas, Coos, and Curry Counties, Oregon.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blacktail Builders LLC — Custom Home Builder in Southern Oregon",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blacktail Builders LLC | Custom Home Builder in Southern Oregon",
    description:
      "Full-service residential construction — custom homes, design-build, and quality craftsmanship across Southern Oregon.",
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
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "US-OR",
    "geo.placename": "Roseburg",
    "geo.position": "43.2165;-123.3417",
    ICBM: "43.2165, -123.3417",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans text-text-primary bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <LocalBusinessSchema />
        <Script
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
