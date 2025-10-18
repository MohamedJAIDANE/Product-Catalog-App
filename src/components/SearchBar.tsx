import React from 'react';
import type { SearchBarProps } from '../types/types';

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="w-full flex justify-center mb-6">
      <input
        type="text"
        placeholder="  Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange( e.target.value)}
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-sm sm:text-base transition duration-200"
      />
    </div>
  );
};
