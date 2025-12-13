import axiosInstance from '../axios';
import { NewsArticle, NewsResponse, SingleNewsResponse } from '@/types/News';

export const newsApi = {
  // Get all news
  getNews: async (params?: {
    category?: string;
    featured?: boolean;
    search?: string;
    per_page?: number;
    page?: number;
  }): Promise<NewsResponse> => {
    const { data } = await axiosInstance.get<NewsResponse>('/news', { params });
    return data;
  },

  // Get single news by ID
  getNewsById: async (id: number): Promise<SingleNewsResponse> => {
    const { data } = await axiosInstance.get<SingleNewsResponse>(`/news/${id}`);
    return data;
  },

  // Get single news by slug (find by fetching all and filtering)
  getNewsBySlug: async (slug: string): Promise<NewsArticle | null> => {
    const { data } = await axiosInstance.get<NewsResponse>('/news?per_page=100');
    const article = data.data.find((news) => news.slug === slug);
    return article || null;
  },
};
