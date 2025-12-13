'use client';

import { MotionDiv } from '@/components/motion/MotionComponents';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '@/lib/dateUtils';
import { useNews } from '@/hooks/useNews';
import { Skeleton } from '@/components/ui/skeleton';

export function NewsContent() {
  const { data, isLoading, isError } = useNews();

  if (isLoading) {
    return (
      <>
        {/* Featured News Skeleton */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Skeleton className="w-6 h-6" />
            <Skeleton className="h-10 w-64" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white rounded-2xl overflow-hidden shadow-xl">
                {/* Image Skeleton */}
                <Skeleton className="h-72 w-full" />
                
                {/* Content Skeleton */}
                <div className="p-8 space-y-4">
                  <Skeleton className="h-6 w-32 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-7 w-full" />
                    <Skeleton className="h-7 w-4/5" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <Skeleton className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All News Skeleton */}
        <div className="mb-8">
          <Skeleton className="h-10 w-48 mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-2xl overflow-hidden shadow-lg">
              {/* Image Skeleton */}
              <Skeleton className="h-56 w-full" />
              
              {/* Content Skeleton */}
              <div className="p-6 space-y-3">
                <Skeleton className="h-6 w-24 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-3/4" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Gagal memuat artikel</p>
          <p className="text-gray-500">Silakan coba lagi nanti</p>
        </div>
      </div>
    );
  }

  const featuredNews = data.data.filter(news => news.featured);
  const regularNews = data.data.filter(news => !news.featured);

  return (
    <>
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
                <Link href={`/artikel/${news.slug}`}>
                  <article className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative">
                    <div className="absolute top-4 right-4 z-10 bg-linear-to-r from-[#ff5100] to-[#ff7733] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      Unggulan
                    </div>

                    {/* Image */}
                    <div className="relative h-72 bg-linear-to-br from-orange-100 to-orange-50 overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-br from-[#ff5100]/20 to-[#ff7733]/10 group-hover:from-[#ff5100]/30 group-hover:to-[#ff7733]/20 transition-all duration-300" />
                      {news.image_url ? (
                        <img 
                          src={news.image_url} 
                          alt={news.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-gray-400 text-9xl">📰</div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col grow">
                      {/* Category Badge */}
                      <span className="inline-block px-3 py-1 bg-orange-100 text-[#ff5100] text-sm font-medium rounded-full w-fit mb-4">
                        {news.category}
                      </span>

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#ff5100] transition-colors duration-300 line-clamp-2">
                        {news.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-6 line-clamp-3 grow">
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
                            <span>{news.read_time} menit</span>
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
            <Link href={`/artikel/${news.slug}`}>
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-56 bg-linear-to-br from-orange-100 to-orange-50 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-[#ff5100]/20 to-[#ff7733]/10 group-hover:from-[#ff5100]/30 group-hover:to-[#ff7733]/20 transition-all duration-300" />
                  {news.image_url ? (
                    <img 
                      src={news.image_url} 
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-gray-400 text-7xl">📰</div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  {/* Category Badge */}
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
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(news.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{news.read_time} menit</span>
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
    </>
  );
}
