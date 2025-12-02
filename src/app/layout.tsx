import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Digdaya Digital - Turning Lines of Code into Business Growth",
    template: "%s | Digdaya Digital"
  },
  description: "Software house dan startup digital yang mengubah ide bisnis menjadi aplikasi, website, dan sistem powerful. Solusi teknologi untuk pertumbuhan bisnis Anda di Cilacap, Jawa Tengah.",
  keywords: [
    "software house",
    "software house cilacap",
    "jasa pembuatan website",
    "jasa pembuatan aplikasi",
    "digital agency indonesia",
    "software development",
    "UI/UX design",
    "cloud solutions",
    "startup technology",
    "custom software cilacap",
    "web development cilacap",
    "mobile app development",
    "software house jawa tengah"
  ],
  authors: [{ name: "Digdaya Digital" }],
  creator: "Digdaya Digital",
  publisher: "Digdaya Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.digdayadigital.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Digdaya Digital - Turning Lines of Code into Business Growth",
    description: "Software house yang membantu bisnis Anda bertumbuh dengan solusi teknologi yang powerful dan mudah digunakan. Dari ide hingga aplikasi siap pakai.",
    url: 'https://www.digdayadigital.com',
    siteName: 'Digdaya Digital',
    images: [
      {
        url: '/images/og-image.jpg', // Buat gambar OG 1200x630px
        width: 1200,
        height: 630,
        alt: 'Digdaya Digital - Software House & Digital Solutions',
      }
    ],
    locale: 'id_ID',
    type: 'website',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff5100" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-dvh bg-linear-to-br from-gray-50 via-white to-orange-50">
          <Header />
          {children}
          <Footer />
        </div>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
