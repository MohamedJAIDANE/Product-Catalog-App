import React from 'react';
import { Heart, Star } from 'lucide-react';
import type { ProductCardProps } from '../types/types';

export const ProductCard: React.FC<ProductCardProps> = ({ product, onToggleFavorite }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const rounded = Math.round(rating);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={i <= rounded ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 p-4 flex flex-col justify-between relative">
      <button
        onClick={() => onToggleFavorite(product.id)}
        aria-label={product.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        className="absolute top-3 right-3 transition-transform duration-150 hover:scale-110"
      >
        <Heart
          size={24}
          className={product.isFavorite 
            ? "text-red-500 fill-red-500" 
            : "text-gray-400 hover:text-red-400"
          }
        />
      </button>

      <div className="flex justify-center items-center h-48 mb-3">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col gap-1 text-center">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">{product.title}</h3>
        <p className="text-xs text-gray-500 capitalize">{product.category}</p>
        <p className="text-lg font-bold text-blue-600">${product.price.toFixed(2)}</p>

        <div className="flex justify-center items-center gap-1 mt-1">
          {renderStars(product.rating.rate)}
          <span className="text-gray-400 text-xs">({product.rating.count})</span>
        </div>
      </div>
    </div>
  );
};