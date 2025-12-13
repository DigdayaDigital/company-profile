import { useQuery } from '@tanstack/react-query';
import { newsApi } from '@/lib/api/news';

export const useNews = (params?: {
  category?: string;
  featured?: boolean;
  search?: string;
  per_page?: number;
  page?: number;
}) => {
  return useQuery({
    queryKey: ['news', params],
    queryFn: () => newsApi.getNews(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (previously cacheTime)
  });
};

export const useNewsById = (id: number) => {
  return useQuery({
    queryKey: ['news', id],
    queryFn: () => newsApi.getNewsById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

export const useNewsBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['news', 'slug', slug],
    queryFn: () => newsApi.getNewsBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
