
import React from 'react';
import type { PaginationProps } from '../types/types';

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-6 gap-2 flex-wrap items-center">

      <button
        onClick={() => onPageChange(currentPage - 1 )}
        disabled={currentPage === 1 }
        className="px-3 py-1 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        Prev
      </button>


      <span className="px-3 py-1 rounded-lg border border-gray-300 bg-gray-100 text-gray-700">
        {currentPage} / {totalPages}
      </span>


      <button
        onClick={() => onPageChange( currentPage + 1)}
        disabled={ currentPage === totalPages }
        className="px-3 py-1 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        Next
      </button>
    </div>
  );
};
