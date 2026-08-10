import { getCategories } from "@/actions/category";
import { getPublicProducts } from "@/actions/products";
import Image from "next/image";
import Link from "next/link";
import { Search, Star, Sparkles, LayoutGrid, List } from "lucide-react";
import { Suspense } from "react";
import ProductFilters from "@/components/dashboard/products/ProductFilters";
import { AddToCartButton } from "@/components/dashboard/products/AddToCartButton";
import { AddToWishlistButton } from "@/components/dashboard/products/AddToWishlistButton";

type SearchParams = {
  page?: string;
  limit?: string;
  search?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  sort?: string;
  order?: string;
  view?: string;
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedParams = await searchParams;
  const categories = await getCategories();

  const page = parseInt(resolvedParams.page || "1");
  const limit = parseInt(resolvedParams.limit || "12");
  const search = resolvedParams.search || "";
  const category = resolvedParams.category || "";
  const minPrice = parseFloat(resolvedParams.minPrice || "0");
  const maxPrice = parseFloat(resolvedParams.maxPrice || "1000000");
  const sort = resolvedParams.sort || "createdAt";
  const order = resolvedParams.order || "desc";
  const viewMode = resolvedParams.view === "list" ? "list" : "grid";

  const { products, pages } = await getPublicProducts({
    page,
    limit,
    search,
    category,
    minPrice,
    maxPrice,
    sort,
    order,
  });

  const buildUrlWithView = (newView: string) => {
    const params = new URLSearchParams();
    const allParams = { ...resolvedParams, view: newView, page: "1" };

    Object.entries(allParams).forEach(([key, value]) => {
      if (value && value !== '' && value !== 'undefined') {
        params.set(key, value);
      }
    });

    return `/our-products?${params.toString()}`;
  };

  const buildPaginationUrl = (newPage: number) => {
    const params = new URLSearchParams();
    const allParams = { ...resolvedParams, page: newPage.toString() };

    Object.entries(allParams).forEach(([key, value]) => {
      if (value && value !== '' && value !== 'undefined') {
        params.set(key, value);
      }
    });

    return `/our-products?${params.toString()}`;
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#121A14] font-sans selection:bg-[#FDBA21] selection:text-black overflow-x-hidden pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero Section */}
        <div className="bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-16 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] mb-6 sm:mb-10 relative overflow-hidden">
          <div className="absolute -top-32 -right-20 w-80 h-80 bg-[#20ae44]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-28 -left-20 w-72 h-72 bg-[#8BA85A]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#20ae44] bg-[#20ae44]/10 border border-[#20ae44]/15 px-3.5 py-1.5 rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>100% Organic Collection</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#121A14] mb-3">
                Arkin Organics
              </h1>
              <p className="text-sm sm:text-base text-[#3A4A3E] font-medium leading-relaxed max-w-xl">
                Purely Natural, Organically Yours. Discover high-quality sustainable agricultural inputs.
              </p>
            </div>
            
            <div className="hidden md:flex flex-col items-end text-right bg-[#FAF9F6] px-6 py-4 rounded-3xl border border-[#E8EDE9]">
              <p className="text-xs font-semibold text-[#3A4A3E] uppercase tracking-wider mb-0.5">Certified Standard</p>
              <p className="text-base font-bold text-[#20ae44]">100% Organic Quality</p>
            </div>
          </div>
        </div>

        {/* Horizontal Filters Section Container */}
        <div className="sticky top-20 sm:top-24 z-30 mb-6 sm:mb-8 bg-white/95 backdrop-blur-md rounded-3xl p-3 sm:p-5 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)]">
          <Suspense fallback={<div className="animate-pulse h-12 bg-[#FAF9F6] rounded-full"></div>}>
            <ProductFilters
              categories={categories.filter((c): c is NonNullable<typeof c> => c !== undefined)}
              currentParams={resolvedParams}
            />
          </Suspense>
        </div>

        {/* Results Info Bar with Embedded View Toggle */}
        <div className="flex items-center justify-between mb-6 sm:mb-8 px-2">
          <p className="text-xs sm:text-sm font-medium text-[#3A4A3E]">
            Showing <span className="font-semibold text-[#121A14]">{products.length}</span> products
            {pages > 1 && (
              <span className="text-xs sm:text-sm text-[#3A4A3E]/70 ml-2">
                (Page {page} of {pages})
              </span>
            )}
          </p>

          <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border border-[#E8EDE9] shadow-xs">
            <Link
              href={buildUrlWithView("grid")}
              scroll={false}
              aria-label="Grid view"
              className={`p-2 rounded-full transition-all ${
                viewMode === "grid"
                  ? "bg-[#20ae44] text-white shadow-xs"
                  : "text-[#3A4A3E] hover:bg-[#FAF9F6]"
              }`}
            >
              <LayoutGrid size={16} />
            </Link>
            <Link
              href={buildUrlWithView("list")}
              scroll={false}
              aria-label="List view"
              className={`p-2 rounded-full transition-all ${
                viewMode === "list"
                  ? "bg-[#20ae44] text-white shadow-xs"
                  : "text-[#3A4A3E] hover:bg-[#FAF9F6]"
              }`}
            >
              <List size={16} />
            </Link>
          </div>
        </div>

        {/* Products Display (Grid vs List) */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-10 sm:mb-12">
            {products.map((product) => (
              <div
                key={product.productId}
                className="group bg-white rounded-3xl border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square bg-[#FAF9F6] overflow-hidden">
                    <Image
                      src={product.images[0] || "/placeholder.jpg"}
                      alt={product.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.discount && product.discount > 0 && (
                      <div className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                        {product.discount}% OFF
                      </div>
                    )}

                    <div className="absolute top-4 right-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 flex gap-2">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
                        <AddToWishlistButton name={product.name} price={product.price} images={product.images} productId={product._id}/>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
                        <AddToCartButton productId={product._id} />
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-7">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base sm:text-lg font-semibold text-[#121A14] line-clamp-2 tracking-tight">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 shrink-0 bg-[#FAF9F6] px-2.5 py-1 rounded-full border border-[#E8EDE9]">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                        <span className="text-xs font-semibold text-[#121A14]">4.5</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#3A4A3E] font-medium mb-4 sm:mb-5 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-7 pb-5 sm:pb-7 pt-0">
                  <div className="flex items-center justify-between mb-4 sm:mb-5 pt-4 border-t border-[#121A14]/5">
                    <div className="flex items-center gap-2">
                      <span className="text-xl sm:text-2xl font-bold text-[#121A14]">
                        ${(product.price - (product.discount || 0)).toFixed(2)}
                      </span>
                      {product.discount && product.discount > 0 && (
                        <span className="text-sm text-[#3A4A3E]/60 line-through font-medium">
                          ${product.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      product.stock > 10
                        ? 'bg-[#20ae44]/10 text-[#20ae44]'
                        : product.stock > 0
                          ? 'bg-amber-50 text-amber-700'
                          : 'bg-rose-50 text-rose-600'
                    }`}>
                      {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                    </span>
                  </div>

                  <Link
                    href={`/our-products/${product.productId}`}
                    className="block w-full bg-[#20ae44] hover:bg-[#1b963a] text-white text-center py-3.5 rounded-full font-semibold transition-all shadow-sm text-xs sm:text-sm active:scale-95"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4 mb-10 sm:mb-12">
            {products.map((product) => (
              <div
                key={product.productId}
                className="group bg-white rounded-3xl border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col sm:flex-row items-stretch justify-between p-4 sm:p-6 gap-6"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 flex-1 min-w-0">
                  <div className="relative w-full sm:w-44 aspect-square sm:aspect-square bg-[#FAF9F6] rounded-2xl overflow-hidden shrink-0">
                    <Image
                      src={product.images[0] || "/placeholder.jpg"}
                      alt={product.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.discount && product.discount > 0 && (
                      <div className="absolute top-3 left-3 bg-rose-500 text-white px-2.5 py-0.5 rounded-full text-[10px] font-semibold shadow-sm">
                        {product.discount}% OFF
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col justify-between flex-1 min-w-0 py-1 text-center sm:text-left">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                        <h3 className="text-base sm:text-lg font-semibold text-[#121A14] tracking-tight truncate">
                          {product.name}
                        </h3>
                        <div className="inline-flex items-center justify-center sm:justify-start gap-1 bg-[#FAF9F6] px-2.5 py-1 rounded-full border border-[#E8EDE9] self-center sm:self-auto">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                          <span className="text-xs font-semibold text-[#121A14]">4.5</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#3A4A3E] font-medium line-clamp-2 leading-relaxed mb-4">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-center sm:justify-start gap-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        product.stock > 10
                          ? 'bg-[#20ae44]/10 text-[#20ae44]'
                          : product.stock > 0
                            ? 'bg-amber-50 text-amber-700'
                            : 'bg-rose-50 text-rose-600'
                      }`}>
                        {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-col justify-between items-center sm:items-end border-t sm:border-t-0 sm:border-l border-[#121A14]/5 pt-4 sm:pt-0 sm:pl-6 shrink-0 gap-4">
                  <div className="text-center sm:text-right">
                    <span className="text-xl sm:text-2xl font-bold text-[#121A14] block">
                      ${(product.price - (product.discount || 0)).toFixed(2)}
                    </span>
                    {product.discount && product.discount > 0 && (
                      <span className="text-xs sm:text-sm text-[#3A4A3E]/60 line-through font-medium block">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <div className="bg-[#FAF9F6] border border-[#E8EDE9] rounded-full shadow-xs">
                      <AddToWishlistButton name={product.name} price={product.price} images={product.images} productId={product._id}/>
                    </div>
                    <div className="bg-[#FAF9F6] border border-[#E8EDE9] rounded-full shadow-xs">
                      <AddToCartButton productId={product._id} />
                    </div>
                    <Link
                      href={`/our-products/${product.productId}`}
                      className="bg-[#20ae44] hover:bg-[#1b963a] text-white text-center px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm text-xs sm:text-sm active:scale-95 shrink-0"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {pages > 1 && (
          <div className="flex justify-center mb-12">
            <nav className="flex items-center gap-2">
              {page > 1 && (
                <Link
                  href={buildPaginationUrl(page - 1)}
                  scroll={false}
                  className="px-4 sm:px-5 py-2.5 bg-white text-[#3A4A3E] border border-[#E8EDE9] rounded-full hover:bg-[#20ae44]/10 hover:text-[#20ae44] text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-95"
                >
                  Previous
                </Link>
              )}

              {Array.from({ length: Math.min(pages, 5) }, (_, i) => {
                const pageNum = i + Math.max(1, page - 2);
                return pageNum <= pages ? (
                  <Link
                    key={pageNum}
                    href={buildPaginationUrl(pageNum)}
                    scroll={false}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center transition-all ${
                      pageNum === page
                        ? 'bg-[#20ae44] text-white shadow-sm'
                        : 'bg-white text-[#3A4A3E] border border-[#E8EDE9] hover:bg-[#20ae44]/10 hover:text-[#20ae44]'
                    }`}
                  >
                    {pageNum}
                  </Link>
                ) : null;
              })}

              {page < pages && (
                <Link
                  href={buildPaginationUrl(page + 1)}
                  scroll={false}
                  className="px-4 sm:px-5 py-2.5 bg-white text-[#3A4A3E] border border-[#E8EDE9] rounded-full hover:bg-[#20ae44]/10 hover:text-[#20ae44] text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-95"
                >
                  Next
                </Link>
              )}
            </nav>
          </div>
        )}

        {/* Empty State */}
        {products.length === 0 && (
          <div className="bg-white rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-16 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] text-center max-w-2xl mx-auto my-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#FAF9F6] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#E8EDE9]">
              <Search className="w-10 h-10 sm:w-12 sm:h-12 text-[#3A4A3E]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#121A14] mb-3 tracking-tight">No products found</h3>
            <p className="text-sm sm:text-base text-[#3A4A3E] font-medium leading-relaxed mb-8">
              Try adjusting your filters or search terms to find what you are looking for.
            </p>
            <Link
              href="/our-products"
              className="inline-flex items-center justify-center bg-[#20ae44] hover:bg-[#1b963a] text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-md active:scale-95 text-sm sm:text-base"
            >
              Clear All Filters
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}