import { MetadataRoute } from 'next'
import axios from 'axios'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.digdayadigital.com'

  // Fetch news from API
  let newsUrls: MetadataRoute.Sitemap = [];
  
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/news?per_page=100`, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
      },
    });
    newsUrls = response.data.data.map((article: any) => ({
      url: `${baseUrl}/berita/${article.slug}`,
      lastModified: new Date(article.updated_at || article.created_at),
      changeFrequency: 'monthly' as const,
      priority: article.featured ? 0.9 : 0.7,
    }));
  } catch (error) {
    console.error('Error fetching news for sitemap:', error);
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/berita`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...newsUrls,
    {
      url: `${baseUrl}/#layanan`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // {
    //   url: `${baseUrl}/#portofolio`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
    {
      url: `${baseUrl}/#kontak`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}