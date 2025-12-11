import { MotionDiv } from '@/components/motion/MotionComponents';
import { Calendar, Clock, Home, ChevronRight, User, Tag, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { FloatingShape } from '@/components/home/FloatingShape';
import { newsData } from '@/lib/newsData';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const article = newsData.find((news) => news.slug === slug);

  if (!article) {
    return {
      title: 'Artikel Tidak Ditemukan | Digdaya Digital',
    };
  }

  return {
    title: `${article.title} | Digdaya Digital`,
    description: article.excerpt,
    keywords: article.tags,
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://www.digdayadigital.com/berita/${article.slug}`,
      siteName: 'Digdaya Digital',
      images: [
        {
          url: article.image || 'https://www.digdayadigital.com/images/og-default.jpg',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: 'id_ID',
      type: 'article',
      publishedTime: article.date,
      authors: [article.author.name],
      section: article.category,
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image || 'https://www.digdayadigital.com/images/og-default.jpg'],
    },
    alternates: {
      canonical: `https://www.digdayadigital.com/berita/${article.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return newsData.map((article) => ({
    slug: article.slug,
  }));
}

export default async function BeritaShow({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = newsData.find((news) => news.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsData
    .filter((news) => news.id !== article.id && news.category === article.category)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': article.title,
    'description': article.excerpt,
    'image': article.image || 'https://www.digdayadigital.com/images/default-article.jpg',
    'datePublished': article.date,
    'dateModified': article.date,
    'author': {
      '@type': 'Person',
      'name': article.author.name,
      'jobTitle': article.author.role,
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Digdaya Digital',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.digdayadigital.com/images/logo.png',
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://www.digdayadigital.com/berita/${article.slug}`,
    },
    'articleSection': article.category,
    'keywords': article.tags.join(', '),
    'articleBody': article.content.introduction + ' ' + 
      article.content.sections.map(s => s.paragraphs.join(' ')).join(' ') + ' ' + 
      article.content.conclusion,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Beranda',
        'item': 'https://www.digdayadigital.com',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Berita',
        'item': 'https://www.digdayadigital.com/berita',
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': article.title,
        'item': `https://www.digdayadigital.com/berita/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
          position="top-1/2 -right-20"
          delay={1}
          duration={30}
        />
      </div>

      <div className="relative z-10 py-24 px-6">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight" itemProp="headline">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <time dateTime={article.date} itemProp="datePublished">{article.date}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-2" itemProp="author" itemScope itemType="https://schema.org/Person">
                <User className="w-5 h-5" />
                <span itemProp="name">{article.author.name}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-96 bg-linear-to-br from-orange-100 to-orange-50 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-linear-to-br from-[#ff5100]/20 to-[#ff7733]/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gray-400 text-9xl">📰</div>
              </div>
            </div>
          </MotionDiv>

          {/* Article Content */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12"
          >
            {/* Author Info */}
            <div className="flex items-center gap-4 pb-8 mb-8 border-b border-gray-200">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#ff5100] to-[#ff7733] flex items-center justify-center text-white text-2xl font-bold">
                {article.author.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">{article.author.name}</h3>
                <p className="text-gray-600">{article.author.role}</p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-gray-700 leading-relaxed font-medium" itemProp="description">
                {article.content.introduction}
              </p>
            </div>

            {/* Content Sections */}
            <article itemProp="articleBody">
            {article.content.sections.map((section, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{section.heading}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-lg text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            </article>

            {/* Conclusion */}
            <div className="bg-linear-to-br from-orange-50 to-orange-100/50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Kesimpulan</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {article.content.conclusion}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Tag className="w-5 h-5 text-gray-600" />
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-orange-100 hover:text-[#ff5100] transition-colors cursor-pointer"
                  itemProp="keywords"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-2 text-gray-700 font-semibold">
                  <Share2 className="w-5 h-5" />
                  Bagikan:
                </span>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </button>
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
                {relatedArticles.map((related) => (
                  <Link key={related.id} href={`/berita/${related.slug}`}>
                    <article className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-48 bg-linear-to-br from-orange-100 to-orange-50 overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-br from-[#ff5100]/20 to-[#ff7733]/10 group-hover:from-[#ff5100]/30 group-hover:to-[#ff7733]/20 transition-all duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-gray-400 text-5xl">📰</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col grow">
                        <span className="inline-block px-3 py-1 bg-orange-100 text-[#ff5100] text-xs font-medium rounded-full w-fit mb-3">
                          {related.category}
                        </span>
                        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#ff5100] transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2 grow">
                          {related.excerpt}
                        </p>
                      </div>
                    </article>
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
    </>
  );
}