export interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  read_time: string;
  image_url: string;
  featured: boolean;
  author: {
    name: string;
  };
  content: string; // HTML content
  tags: string[];
  created_at: string;
  updated_at: string;
}

export interface NewsResponse {
  data: NewsArticle[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: Array<{
      url: string | null;
      label: string;
      page: number | null;
      active: boolean;
    }>;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}

export interface SingleNewsResponse {
  data: NewsArticle;
}