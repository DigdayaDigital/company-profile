'use client';

import { useNewsBySlug } from '@/hooks/useNews';
import { MotionDiv } from '@/components/motion/MotionComponents';
import { Calendar, Clock, User, Tag, Share2, ArrowLeft, Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '@/lib/dateUtils';
import { Skeleton } from '@/components/ui/skeleton';
import { FloatingShape } from '@/components/home/FloatingShape';
import { useNews } from '@/hooks/useNews';
import { IconBrandFacebook, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';

interface NewsDetailContentProps {
  slug: string;
}

export function NewsDetailContent({ slug }: NewsDetailContentProps) {
  const { data: article, isLoading, isError } = useNewsBySlug(slug);
  const { data: allNews } = useNews();

  if (isLoading) {
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
            position="top-1/2 -right-20"
            delay={1}
            duration={30}
          />
        </div>

        <div className="relative z-10 py-24 md:px-6 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Breadcrumb Skeleton */}
            <div className="mb-8">
              <Skeleton className="h-4 w-64" />
            </div>

            {/* Back Button Skeleton */}
            <div className="mb-8">
              <Skeleton className="h-5 w-40" />
            </div>

            {/* Article Header Skeleton */}
            <div className="mb-12 space-y-6">
              {/* Category Badge */}
              <Skeleton className="h-7 w-32 rounded-full" />
              
              {/* Title */}
              <div className="space-y-3">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-4/5" />
              </div>

              {/* Meta Info */}
              <div className="flex gap-6">
                <Skeleton className="h-5 w-28" />
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-32" />
              </div>

              {/* Featured Image */}
              <Skeleton className="h-96 w-full rounded-2xl" />
            </div>

            {/* Article Content Skeleton */}
            <div className="bg-white rounded-2xl md:shadow-lg md:p-8 mb-12">
              {/* Author Info */}
              <div className="flex items-center gap-4 pb-8 mb-8 border-b border-gray-200">
                <Skeleton className="w-16 h-16 rounded-full" />
                <Skeleton className="h-6 w-32" />
              </div>

              {/* Content Paragraphs */}
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <div className="py-4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <div className="py-4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>

              {/* Tags Skeleton */}
              <div className="flex gap-3 mt-8 pt-8 border-t border-gray-200">
                <Skeleton className="h-8 w-20 rounded-full" />
                <Skeleton className="h-8 w-24 rounded-full" />
                <Skeleton className="h-8 w-28 rounded-full" />
              </div>

              {/* Share Buttons Skeleton */}
              <div className="pt-8 border-t border-gray-200 mt-8">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-5 w-20" />
                  <div className="flex gap-3">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <Skeleton className="w-10 h-10 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section Skeleton */}
            <Skeleton className="h-64 w-full rounded-3xl" />
          </div>
        </div>
      </main>
    );
  }

  if (isError || !article) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Artikel tidak ditemukan</p>
          <Link href="/berita" className="text-[#ff5100] hover:underline">
            Kembali ke Berita
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = allNews?.data
    .filter((news) => news.id !== article.id && news.category === article.category)
    .slice(0, 3) || [];

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
          position="top-1/2 -right-20"
          delay={1}
          duration={30}
        />
      </div>

      <div className="relative z-10 py-24 md:px-6 px-4">
        <div className="container mx-auto max-w-4xl">
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
              <Link href="/berita" className="hover:text-[#ff5100] transition-colors">
                Berita
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-800 font-medium line-clamp-1">{article.title}</span>
            </nav>
          </MotionDiv>

          {/* Back Button */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#ff5100] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Kembali ke Berita</span>
            </Link>
          </MotionDiv>

          {/* Article Header */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            {/* Category Badge */}
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-[#ff5100] text-sm font-medium rounded-full mb-6">
              {article.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{article.read_time} menit</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{article.author.name}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-96 bg-linear-to-br from-orange-100 to-orange-50 rounded-2xl overflow-hidden shadow-xl">
              {article.image_url ? (
                <img 
                  src={article.image_url} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-linear-to-br from-[#ff5100]/20 to-[#ff7733]/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-gray-400 text-9xl">📰</div>
                  </div>
                </>
              )}
            </div>
          </MotionDiv>

          {/* Article Content */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl md:shadow-lg md:p-8 mb-12"
          >
            {/* Author Info */}
            <div className="flex items-center gap-4 pb-8 mb-8 border-b border-gray-200">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#ff5100] to-[#ff7733] flex items-center justify-center text-white text-2xl font-bold">
                {article.author.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">{article.author.name}</h3>
              </div>
            </div>

            {/* HTML Content */}
            <article 
              className="prose max-w-none font-inter"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 mt-8 pt-8 border-t border-gray-200">
              <Tag className="w-5 h-5 text-gray-600" />
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-orange-100 hover:text-[#ff5100] transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="pt-8 border-t border-gray-200 mt-8">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-2 text-gray-700 font-semibold">
                  <Share2 className="w-5 h-5" />
                  Bagikan:
                </span>
                <div className="flex gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <IconBrandFacebook className="w-5 h-5" />
                  </a>
                  <a 
                    href={`https://x.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <IconBrandX className="w-5 h-5" />
                  </a>
                  <a 
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <IconBrandLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Artikel Terkait</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((news) => (
                  <Link key={news.id} href={`/berita/${news.slug}`}>
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                      <div className="relative h-48 bg-linear-to-br from-orange-100 to-orange-50">
                        {news.image_url ? (
                          <img 
                            src={news.image_url} 
                            alt={news.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-linear-to-br from-[#ff5100]/20 to-[#ff7733]/10" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-gray-400 text-5xl">📰</div>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="p-4">
                        <span className="inline-block px-2 py-1 bg-orange-100 text-[#ff5100] text-xs font-medium rounded-full mb-2">
                          {news.category}
                        </span>
                        <h3 className="font-bold text-gray-800 line-clamp-2 mb-2">
                          {news.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {news.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </MotionDiv>
          )}

          {/* CTA Section */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-[#ff5100] to-[#ff7733] rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-4">
              Butuh Solusi Digital untuk Bisnis Anda?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Tim Digdaya Digital siap membantu mewujudkan transformasi digital bisnis Anda dengan solusi yang tepat dan inovatif.
            </p>
            <Link
              href="/#kontak"
              className="inline-block px-8 py-4 bg-white text-[#ff5100] font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Hubungi Kami Sekarang
            </Link>
          </MotionDiv>
        </div>
      </div>
    </main>
  );
}
