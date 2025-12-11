export interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: {
    introduction: string;
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
    conclusion: string;
  };
  tags: string[];
}