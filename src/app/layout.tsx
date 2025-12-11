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
    default: "Digdaya Digital - Wujudkan Ide Bisnismu Jadi Aplikasi Keren!",
    template: "%s | Digdaya Digital"
  },
  description: "Kami bantu bisnis kamu tumbuh dengan teknologi yang powerful! Dari ide sampai jadi aplikasi siap pakai. Software house terpercaya di Cilacap yang siap jadi partner digital kamu.",
  keywords: [
    "software house",
    "software house cilacap",
    "jasa pembuatan website",
    "jasa pembuatan aplikasi",
    "digital agency indonesia",
    "software development",
    "desain UI/UX",
    "solusi cloud",
    "teknologi startup",
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
    title: "Digdaya Digital - Wujudkan Ide Bisnismu Jadi Aplikasi Keren!",
    description: "Yuk, kembangkan bisnis kamu bareng kami! Software house yang siap bantu dari ide sampai aplikasi jadi. Teknologi yang gampang dipahami, hasil yang bikin bangga.",
    url: 'https://www.digdayadigital.com',
    siteName: 'Digdaya Digital',
    images: [
      {
        url: '/images/logo.png',
        width: 2000,
        height: 2000,
        alt: 'Digdaya Digital - Partner Teknologi Bisnis Kamu',
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
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
