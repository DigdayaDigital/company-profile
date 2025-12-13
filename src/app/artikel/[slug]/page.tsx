import type { Metadata } from 'next';
import { NewsDetailContent } from '@/components/client/NewsDetailContent';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `Artikel | Digdaya Digital`,
    description: 'Baca artikel terbaru dari Digdaya Digital',
    alternates: {
      canonical: `https://www.digdayadigital.com/artikel/${slug}`,
    },
  };
}

export default async function ArtikelShow({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <NewsDetailContent slug={slug} />;
}
