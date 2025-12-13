'use client';

import { MotionDiv } from '@/components/motion/MotionComponents';
import { Calendar, Clock, ArrowRight, Newspaper } from 'lucide-react';
import Link from 'next/link';
import { useNews } from '@/hooks/useNews';
import { formatDate } from '@/lib/dateUtils';
import { Skeleton } from '@/components/ui/skeleton';

export function News() {
  const { data, isLoading, isError } = useNews({ featured: true, per_page: 3 });

  return (
    <section className="py-24 px-6 bg-linear-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Newspaper className="w-8 h-8 text-[#ff5100]" />
            <h2 className="text-5xl md:text-6xl text-gray-800">Artikel</h2>
          </div>
          <p className="text-xl text-gray-600">
            Informasi terbaru seputar teknologi dan inovasi digital
          </p>
        </MotionDiv>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((item) => (
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
        ) : isError || !data ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <p className="text-xl text-gray-600 mb-4">Gagal memuat artikel</p>
              <p className="text-gray-500">Silakan coba lagi nanti</p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {data.data.map((article, index) => (
            <MotionDiv
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <Link href={`/artikel/${article.slug}`}>
                <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-56 bg-linear-to-br from-orange-100 to-orange-50 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-[#ff5100]/20 to-[#ff7733]/10 group-hover:from-[#ff5100]/30 group-hover:to-[#ff7733]/20 transition-all duration-300" />
                    {article.image_url ? (
                      <img 
                        src={article.image_url} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-gray-400 text-6xl">📰</div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col grow">
                    {/* Category */}
                    <span className="inline-block px-3 py-1 bg-orange-100 text-[#ff5100] text-sm font-medium rounded-full w-fit mb-3">
                      {article.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#ff5100] transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3 grow">
                      {article.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.read_time} menit</span>
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

        {/* View All Button */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/artikel"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-[#ff5100] to-[#ff7733] text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Lihat Semua Artikel</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </MotionDiv>
          </>
        )}
      </div>
    </section>
  );
}
