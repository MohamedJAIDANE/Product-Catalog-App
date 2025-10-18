import React from 'react';
import type { FilterControlsProps, SortOption } from '../types/types';


export const FilterControls: React.FC<FilterControlsProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  sortOption,
  onSortChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6 w-full max-w-4xl mx-auto">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <label htmlFor="category-filter" className="text-sm font-medium text-gray-700">
          Category:
        </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          <option value="all">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <label htmlFor="sort-select" className="text-sm font-medium text-gray-700">
          Sort by:
        </label>
        <select
          id="sort-select"
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          <option value="none">None</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
      
    </div>
  );
};
