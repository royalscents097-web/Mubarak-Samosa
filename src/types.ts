export type MenuCategory = 'all' | 'samosas' | 'snacks' | 'chaat' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  urduName?: string;
  category: 'samosas' | 'snacks' | 'chaat' | 'drinks';
  description: string;
  price: number;
  badge?: string;
  image: string;
  altText: string;
  spiceLevel?: 'Mild' | 'Medium' | 'Zesty';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  altText: string;
  span?: string;
}

export interface Review {
  id: string;
  quote: string;
  author: string;
  rating: number;
  highlight: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
