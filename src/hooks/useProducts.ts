import { useState, useEffect } from 'react';
import type { Product } from '../types/types';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data: Product[] = await response.json();
        
        // Add favorite property to each product
        const productsWithFavorites: Product[] = data.map(product => ({
          ...product,
          isFavorite: false
        }));
        
        setProducts(productsWithFavorites);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

    const toggleFavorite = (id: number) => {
    setProducts(products =>
        products.map(product =>
        product.id === id
            ? { ...product, isFavorite: !product.isFavorite }
            : product
        )
    );
    };

  return { products, loading, error, toggleFavorite };
};