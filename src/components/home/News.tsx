import { MotionDiv } from '@/components/motion/MotionComponents';
import { Calendar, Clock, ArrowRight, Newspaper } from 'lucide-react';
import Link from 'next/link';
import { newsData } from '@/lib/newsData';

export function News() {
  const featuredArticles = newsData.filter(article => article.featured).slice(0, 3);

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
            <h2 className="text-5xl md:text-6xl text-gray-800">Berita & Artikel</h2>
          </div>
          <p className="text-xl text-gray-600">
            Informasi terbaru seputar teknologi dan inovasi digital
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredArticles.map((article, index) => (
            <MotionDiv
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <Link href={`/berita/${article.slug}`}>
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
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
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
            href="/berita"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-[#ff5100] to-[#ff7733] text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Lihat Semua Artikel</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}
