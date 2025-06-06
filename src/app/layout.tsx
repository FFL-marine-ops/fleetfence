import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fleetfence.com'),
  title: {
    default: "FleetFence - Marine Fleet Management Solutions",
    template: "%s | FleetFence"
  },
  description: "FleetFence provides comprehensive marine fleet management solutions, helping maritime businesses optimize operations, enhance safety, and improve efficiency.",
  keywords: ["marine fleet management", "fleet tracking", "maritime operations", "vessel management", "fleet optimization", "marine safety"],
  authors: [{ name: "FleetFence Team" }],
  creator: "FleetFence",
  publisher: "FleetFence",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fleetfence.com",
    siteName: "FleetFence",
    title: "FleetFence - Marine Fleet Management Solutions",
    description: "Comprehensive marine fleet management solutions for maritime businesses",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FleetFence - Marine Fleet Management Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FleetFence - Marine Fleet Management Solutions",
    description: "Comprehensive marine fleet management solutions for maritime businesses",
    images: ["/twitter-image.jpg"],
    creator: "@fleetfence",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification"
  },
  alternates: {
    canonical: "https://fleetfence.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="application-name" content="FleetFence" />
        <meta name="apple-mobile-web-app-title" content="FleetFence" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/fleetfence-logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fleetfence-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fleetfence-logo.png" />
        <link rel="mask-icon" href="/fleetfence-logo.png" color="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white overflow-x-hidden`}
      >
        <Navbar />
        <main className="pt-20 bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
