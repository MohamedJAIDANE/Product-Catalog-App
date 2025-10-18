export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
   isFavorite: boolean;
}

export type SortOption = 'price-asc' | 'price-desc' | 'none';

export interface FilterControlsProps {
}

export interface ProductCardProps {
}

export interface SearchBarProps {
}

export interface PaginationProps {

}