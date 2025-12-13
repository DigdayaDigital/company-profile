import { MotionDiv } from '@/components/motion/MotionComponents';
import { Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { FloatingShape } from '@/components/home/FloatingShape';
import type { Metadata } from 'next';
import { NewsContent } from '@/components/client/NewsContent';

export const metadata: Metadata = {
  title: 'Artikel Teknologi | Digdaya Digital',
  description: 'Informasi terbaru seputar teknologi, inovasi digital, tips pengembangan bisnis, dan insight mendalam dari para ahli Digdaya Digital. Update terkini tentang AI, Cloud Computing, UI/UX Design, dan Web Development.',
  keywords: ['berita teknologi', 'artikel digital', 'inovasi digital', 'tips bisnis digital', 'transformasi digital', 'UI/UX design', 'cloud computing', 'web development', 'AI machine learning', 'mobile development'],
  authors: [{ name: 'Digdaya Digital' }],
  openGraph: {
    title: 'Artikel Teknologi | Digdaya Digital',
    description: 'Informasi terbaru seputar teknologi, inovasi digital, dan tips pengembangan bisnis dari para ahli Digdaya Digital.',
    url: 'https://www.digdayadigital.com/artikel',
    siteName: 'Digdaya Digital',
    images: [
      {
        url: 'https://www.digdayadigital.com/images/og-berita.jpg',
        width: 1200,
        height: 630,
        alt: 'Artikel Digdaya Digital',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artikel Teknologi | Digdaya Digital',
    description: 'Informasi terbaru seputar teknologi, inovasi digital, dan tips pengembangan bisnis.',
    images: ['https://www.digdayadigital.com/images/og-berita.jpg'],
  },
  alternates: {
    canonical: 'https://www.digdayadigital.com/artikel',
  },
};

export default function Artikel() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShape
          color="from-[#ff5100] to-[#ff7733]"
          size="w-96 h-96"
          position="top-20 -left-20"
          delay={0}
          duration={25}
        />
        <FloatingShape
          color="from-orange-200 to-orange-100"
          size="w-80 h-80"
          position="top-1/3 -right-20"
          delay={1}
          duration={30}
        />
        <FloatingShape
          color="from-[#ff5100]/20 to-[#ff7733]/10"
          size="w-72 h-72"
          position="bottom-20 left-1/4"
          delay={2}
          duration={28}
        />
      </div>

      <div className="relative z-10 py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#ff5100] transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                <span>Beranda</span>
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-800 font-medium">Artikel</span>
            </nav>
          </MotionDiv>

          {/* Header Section */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6">
              Artikel
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Informasi terbaru seputar teknologi, inovasi digital, dan tips pengembangan bisnis dari para ahli Digdaya Digital.
            </p>
          </MotionDiv>

          {/* News Content */}
          <NewsContent />

          {/* CTA Section */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16 bg-linear-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Ingin Mendapat Update Terbaru?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Ikuti media sosial kami untuk mendapatkan artikel, tips, dan insight terbaru seputar teknologi dan pengembangan bisnis digital.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://www.instagram.com/digdayadigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-linear-to-r from-[#ff5100] to-[#ff7733] text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Follow Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/digdaya-digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-full border-2 border-gray-200 hover:border-[#ff5100] hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Connect LinkedIn
              </a>
            </div>
          </MotionDiv>
        </div>
      </div>
    </main>
  );
}