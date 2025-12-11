import { MotionDiv } from '@/components/motion/MotionComponents';
import { Calendar, Clock, ArrowRight, Home, ChevronRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { FloatingShape } from '@/components/home/FloatingShape';
import { newsData } from '@/lib/newsData';
import { formatDate } from '@/lib/dateUtils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Berita & Artikel Teknologi | Digdaya Digital',
  description: 'Informasi terbaru seputar teknologi, inovasi digital, tips pengembangan bisnis, dan insight mendalam dari para ahli Digdaya Digital. Update terkini tentang AI, Cloud Computing, UI/UX Design, dan Web Development.',
  keywords: ['berita teknologi', 'artikel digital', 'inovasi digital', 'tips bisnis digital', 'transformasi digital', 'UI/UX design', 'cloud computing', 'web development', 'AI machine learning', 'mobile development'],
  authors: [{ name: 'Digdaya Digital' }],
  openGraph: {
    title: 'Berita & Artikel Teknologi | Digdaya Digital',
    description: 'Informasi terbaru seputar teknologi, inovasi digital, dan tips pengembangan bisnis dari para ahli Digdaya Digital.',
    url: 'https://www.digdayadigital.com/berita',
    siteName: 'Digdaya Digital',
    images: [
      {
        url: 'https://www.digdayadigital.com/images/og-berita.jpg',
        width: 1200,
        height: 630,
        alt: 'Berita & Artikel Digdaya Digital',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Berita & Artikel Teknologi | Digdaya Digital',
    description: 'Informasi terbaru seputar teknologi, inovasi digital, dan tips pengembangan bisnis.',
    images: ['https://www.digdayadigital.com/images/og-berita.jpg'],
  },
  alternates: {
    canonical: 'https://www.digdayadigital.com/berita',
  },
};

export default function Berita() {
  const featuredNews = newsData.filter(news => news.featured);
  const regularNews = newsData.filter(news => !news.featured);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'Berita & Artikel Digdaya Digital',
    'description': 'Informasi terbaru seputar teknologi, inovasi digital, dan tips pengembangan bisnis.',
    'url': 'https://www.digdayadigital.com/berita',
    'publisher': {
      '@type': 'Organization',
      'name': 'Digdaya Digital',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.digdayadigital.com/images/logo.png',
      },
    },
    'blogPost': newsData.map(article => ({
      '@type': 'BlogPosting',
      'headline': article.title,
      'description': article.excerpt,
      'url': `https://www.digdayadigital.com/berita/${article.slug}`,
      'datePublished': article.date,
      'author': {
        '@type': 'Person',
        'name': article.author.name,
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Digdaya Digital',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.digdayadigital.com/images/logo.png',
        },
      },
      'articleSection': article.category,
      'keywords': article.tags.join(', '),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
              <span className="text-gray-800 font-medium">Berita</span>
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
              Berita & Artikel
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Informasi terbaru seputar teknologi, inovasi digital, dan tips pengembangan bisnis dari para ahli Digdaya Digital.
            </p>
          </MotionDiv>

          {/* Featured News Section */}
          {featuredNews.length > 0 && (
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="w-6 h-6 text-[#ff5100]" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Artikel Unggulan</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredNews.map((news, index) => (
                  <MotionDiv
                    key={news.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="group"
                  >
                    <Link href={`/berita/${news.slug}`}>
                      <article className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative">
                        {/* Featured Badge */}
                        <div className="absolute top-4 right-4 z-10 bg-linear-to-r from-[#ff5100] to-[#ff7733] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>Unggulan</span>
                        </div>

                        {/* Image */}
                        <div className="relative h-72 bg-linear-to-br from-orange-100 to-orange-50 overflow-hidden">
                          <div className="absolute inset-0 bg-linear-to-br from-[#ff5100]/20 to-[#ff7733]/10 group-hover:from-[#ff5100]/30 group-hover:to-[#ff7733]/20 transition-all duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-gray-400 text-8xl">📰</div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col grow">
                          {/* Category */}
                          <span className="inline-block px-4 py-1.5 bg-orange-100 text-[#ff5100] text-sm font-medium rounded-full w-fit mb-4">
                            {news.category}
                          </span>

                          {/* Title */}
                          <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#ff5100] transition-colors duration-300">
                            {news.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-gray-600 mb-6 grow line-clamp-3">
                            {news.excerpt}
                          </p>

                          {/* Meta Info */}
                          <div className="flex items-center justify-between text-sm text-gray-500 pt-6 border-t border-gray-100">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(news.date)}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{news.readTime}</span>
                              </div>
                            </div>
                            <div className="md:flex items-center gap-2 text-[#ff5100] font-semibold group-hover:gap-3 transition-all duration-300 hidden">
                              <span>Baca Selengkapnya</span>
                              <ArrowRight className="w-5 h-5" />
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>
          )}

          {/* All News Section */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Semua Artikel</h2>
          </MotionDiv>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((news, index) => (
              <MotionDiv
                key={news.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/berita/${news.slug}`}>
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-56 bg-linear-to-br from-orange-100 to-orange-50 overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-br from-[#ff5100]/20 to-[#ff7733]/10 group-hover:from-[#ff5100]/30 group-hover:to-[#ff7733]/20 transition-all duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-gray-400 text-6xl">📰</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col grow">
                      {/* Category */}
                      <span className="inline-block px-3 py-1 bg-orange-100 text-[#ff5100] text-sm font-medium rounded-full w-fit mb-3">
                        {news.category}
                      </span>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#ff5100] transition-colors duration-300 line-clamp-2">
                        {news.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3 grow">
                        {news.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(news.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{news.readTime}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-[#ff5100] group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </article>
                </Link>
              </MotionDiv>
            ))}
          </div>

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
    </>
  );
}