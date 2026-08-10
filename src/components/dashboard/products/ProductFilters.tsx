'use client';

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import Link from "next/link";

type SearchParams = {
  page?: string;
  limit?: string;
  search?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  sort?: string;
  order?: string;
};

interface Category {
  _id: string;
  name: string;
}

interface ProductFiltersProps {
  categories: Category[];
  currentParams: SearchParams;
}

export default function ProductFilters({ categories, currentParams }: ProductFiltersProps) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(currentParams.search || '');
  const [priceRange, setPriceRange] = useState({
    min: currentParams.minPrice || '',
    max: currentParams.maxPrice || '',
  });
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const buildUrl = useCallback((newParams: Partial<SearchParams>) => {
    const params = new URLSearchParams();
    const merged = { ...currentParams, ...newParams };
    
    Object.entries(merged).forEach(([key, value]) => {
      if (value && value !== '' && value !== 'undefined') {
        params.set(key, value);
      }
    });
    
    return `/our-products?${params.toString()}`;
  }, [currentParams]);

  const debounce = <T extends unknown[]>(
    func: (...args: T) => void, 
    delay: number
  ) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: T) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedSearch = useCallback(
    (value: string) => {
      const debouncedFn = debounce((searchValue: string) => {
        router.push(buildUrl({ search: searchValue, page: '1' }), { scroll: false });
      }, 500);
      debouncedFn(value);
    },
    [buildUrl, router]
  );

  const debouncedPriceUpdate = useCallback(
    (minPrice: string, maxPrice: string) => {
      const debouncedFn = debounce((min: string, max: string) => {
        router.push(buildUrl({ minPrice: min, maxPrice: max, page: '1' }), { scroll: false });
      }, 1000);
      debouncedFn(minPrice, maxPrice);
    },
    [buildUrl, router]
  );

  useEffect(() => {
    if (searchValue !== (currentParams.search || '')) {
      debouncedSearch(searchValue);
    }
  }, [searchValue, debouncedSearch, currentParams.search]);

  useEffect(() => {
    if (priceRange.min !== (currentParams.minPrice || '') || 
        priceRange.max !== (currentParams.maxPrice || '')) {
      debouncedPriceUpdate(priceRange.min, priceRange.max);
    }
  }, [priceRange, debouncedPriceUpdate, currentParams.minPrice, currentParams.maxPrice]);

  const handleCategoryChange = (value: string) => {
    router.push(buildUrl({ category: value, page: '1' }), { scroll: false });
  };

  const handleSortChange = (value: string) => {
    const [sort, order] = value.split('-');
    router.push(buildUrl({ sort, order, page: '1' }), { scroll: false });
  };

  return (
    <div className="w-full">
      {/* Desktop Bar & Mobile Toggle Container */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 w-full">
        
        {/* Search Bar Element + Mobile Filter Button Trigger */}
        <div className="flex items-center gap-2.5 w-full">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#3A4A3E]/60 w-4 h-4" />
            <input
              type="text"
              placeholder="Search organic products..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full pl-11 pr-4 py-3 md:py-2.5 bg-[#FAF9F6] border border-[#E8EDE9] rounded-full text-xs sm:text-sm font-medium text-[#121A14] placeholder-[#3A4A3E]/60 focus:outline-none focus:ring-2 focus:ring-[#20ae44]/30 focus:border-[#20ae44] transition-all shadow-xs"
            />
          </div>

          {/* Mobile Collapsible Toggle Button */}
          <button
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="md:hidden flex items-center gap-1.5 px-4 py-3 bg-[#FAF9F6] border border-[#E8EDE9] rounded-full text-xs font-semibold text-[#3A4A3E] shrink-0 active:scale-95 transition-all shadow-xs"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#20ae44]" />
            <span>Filters</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isMobileFiltersOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Secondary filters container: Hidden on mobile unless toggled, always visible on desktop (md+) */}
        <div className={`${isMobileFiltersOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-stretch md:items-center gap-2.5 shrink-0 pt-2 md:pt-0`}>
          
          {/* Categories Dropdown */}
          <select
            value={currentParams.category || ''}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="px-4 py-3 md:py-2.5 bg-[#FAF9F6] border border-[#E8EDE9] rounded-full text-xs sm:text-sm font-semibold text-[#121A14] focus:outline-none focus:ring-2 focus:ring-[#20ae44]/30 focus:border-[#20ae44] transition-all cursor-pointer shrink-0 shadow-xs"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* Sort Dropdown */}
          <select
            value={`${currentParams.sort || 'createdAt'}-${currentParams.order || 'desc'}`}
            onChange={(e) => handleSortChange(e.target.value)}
            className="px-4 py-3 md:py-2.5 bg-[#FAF9F6] border border-[#E8EDE9] rounded-full text-xs sm:text-sm font-semibold text-[#121A14] focus:outline-none focus:ring-2 focus:ring-[#20ae44]/30 focus:border-[#20ae44] transition-all cursor-pointer shrink-0 shadow-xs"
          >
            <option value="createdAt-desc">Newest First</option>
            <option value="createdAt-asc">Oldest First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>

          {/* Price Range Popover/Dropdown */}
          <details className="relative shrink-0">
            <summary className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-[#FAF9F6] hover:bg-[#20ae44]/10 hover:text-[#20ae44] text-[#3A4A3E] border border-[#E8EDE9] rounded-full transition-all cursor-pointer list-none text-xs sm:text-sm font-semibold shadow-xs">
              <SlidersHorizontal className="w-4 h-4 text-[#20ae44]" />
              <span>Price Range</span>
            </summary>
            
            {/* Custom Mobile Summary block for details element to match look */}
            <summary className="md:hidden flex items-center justify-between w-full px-4 py-3 bg-[#FAF9F6] text-[#3A4A3E] border border-[#E8EDE9] rounded-full text-xs font-semibold cursor-pointer list-none shadow-xs">
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#20ae44]" />
                Price Range Filter
              </span>
              <ChevronDown className="w-3.5 h-3.5" />
            </summary>

            <div className="absolute right-0 sm:left-auto mt-2 bg-white border border-[#121A14]/5 rounded-3xl p-5 shadow-2xl z-30 min-w-70">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#3A4A3E] uppercase tracking-wider mb-1.5">
                    Min Price ($)
                  </label>
                  <input
                    type="number"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#E8EDE9] rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#20ae44]/30 focus:border-[#20ae44]"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#3A4A3E] uppercase tracking-wider mb-1.5">
                    Max Price ($)
                  </label>
                  <input
                    type="number"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#E8EDE9] rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#20ae44]/30 focus:border-[#20ae44]"
                    placeholder="1000"
                  />
                </div>
              </div>
              <div className="pt-3 border-t border-[#121A14]/5">
                <Link
                  href="/our-products"
                  scroll={false}
                  className="block w-full text-center px-4 py-2 bg-[#FAF9F6] hover:bg-red-50 hover:text-red-600 text-[#3A4A3E] rounded-full transition-all text-xs font-semibold border border-[#E8EDE9]"
                >
                  Clear Price Filter
                </Link>
              </div>
            </div>
          </details>

        </div>

      </div>

      {/* Active Filters Bar */}
      {(currentParams.search || currentParams.category || currentParams.minPrice || currentParams.maxPrice) && (
        <div className="mt-4 pt-4 border-t border-[#121A14]/5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-[#3A4A3E]">Active filters:</span>
            {currentParams.search && (
              <Link
                href={buildUrl({ search: undefined })}
                scroll={false}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#20ae44]/10 text-[#20ae44] rounded-full text-xs font-semibold hover:bg-[#20ae44]/15 transition-all"
              >
                Search: {currentParams.search}
                <X className="w-3.5 h-3.5" />
              </Link>
            )}
            {currentParams.category && (
              <Link
                href={buildUrl({ category: undefined })}
                scroll={false}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold hover:bg-blue-100 transition-all"
              >
                Category: {categories.find(c => c._id === currentParams.category)?.name || 'Selected'}
                <X className="w-3.5 h-3.5" />
              </Link>
            )}
            {(currentParams.minPrice || currentParams.maxPrice) && (
              <Link
                href={buildUrl({ minPrice: undefined, maxPrice: undefined })}
                scroll={false}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-semibold hover:bg-purple-100 transition-all"
              >
                Price: ${currentParams.minPrice || '0'} - ${currentParams.maxPrice || '∞'}
                <X className="w-3.5 h-3.5" />
              </Link>
            )}
            <Link
              href="/our-products"
              scroll={false}
              className="text-xs text-[#3A4A3E] hover:text-[#121A14] underline font-semibold transition-colors ml-1"
            >
              Clear all
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}