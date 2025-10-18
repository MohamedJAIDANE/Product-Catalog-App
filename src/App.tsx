
import { useMemo, useState, useCallback, useEffect } from 'react';
import { useProducts } from './hooks/useProducts';
import { SearchBar } from './components/SearchBar';
import { FilterControls } from './components/FilterControls';
import { ProductCard } from './components/ProductCard';
import { Pagination } from './components/Pagination';
import type { SortOption } from './types/types';


const ITEMS_PER_PAGE = 8;

function App() {
  const { products, loading, error, toggleFavorite } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState<SortOption>('none');
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
    return uniqueCategories.sort();
  }, [products]);

  // Filter, search, and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    if (sortOption === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [products, searchTerm, selectedCategory, sortOption]);

  // Paginate products
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredAndSortedProducts, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortOption]);

  const handleSearchChange = useCallback((term: string) => setSearchTerm(term), []);
  const handleCategoryChange = useCallback((category: string) => setSelectedCategory(category), []);
  const handleSortChange = useCallback((option: SortOption) => setSortOption(option), []);
  const handlePageChange = useCallback((page: number) => setCurrentPage(page), []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-gray-500 text-lg">Loading products...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500 text-lg">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md py-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">Product Catalog</h1>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-6">
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          <FilterControls
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            sortOption={sortOption}
            onSortChange={handleSortChange}
          />
        </div>

        {paginatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedProducts.map(product => (
              <ProductCard key={product.id} product={product} onToggleFavorite={toggleFavorite} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-12">No products found matching your criteria.</div>
        )}

        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        )}
      </main>
    </div>
  );
}

export default App;
