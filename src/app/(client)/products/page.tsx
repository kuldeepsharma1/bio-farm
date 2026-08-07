import { getCategories } from "@/actions/category";
import { getPublicProducts } from "@/actions/products";
import Image from "next/image";
import Link from "next/link";
import { Search, Star, ShoppingCart } from "lucide-react";
import { Suspense } from "react";
import ProductFilters from "@/components/dashboard/products/ProductFilters";

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

  const buildPaginationUrl = (newPage: number) => {
    const params = new URLSearchParams();
    const allParams = { ...resolvedParams, page: newPage.toString() };

    Object.entries(allParams).forEach(([key, value]) => {
      if (value && value !== '' && value !== 'undefined') {
        params.set(key, value);
      }
    });

    return `/products?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-inter text-zinc-900">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-zinc-200">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-extrabold text-zinc-900 tracking-tight">
                Arkin Organics
              </h1>
              <p className="text-zinc-500 mt-1.5 text-base">Purely Natural, Organically Yours</p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-right">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">Premium Quality</p>
                <p className="text-green-700 font-bold">100% Organic</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 sm:px-10 lg:px-12 py-8">
        {/* Filters */}
        <Suspense fallback={<div className="bg-white rounded-2xl border border-zinc-200 p-6 mb-8 animate-pulse h-24"></div>}>
          <ProductFilters
            categories={categories.filter((c): c is NonNullable<typeof c> => c !== undefined)}
            currentParams={resolvedParams}
          />
        </Suspense>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-zinc-600 text-sm">
            Showing <span className="font-bold text-zinc-900">{products.length}</span> products
            {pages > 1 && (
              <span className="text-sm text-zinc-500 ml-2">
                (Page {page} of {pages})
              </span>
            )}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Grid View</span>
            <div className="w-7 h-7 bg-green-600 rounded-lg flex items-center justify-center shadow-xs">
              <div className="w-3.5 h-3.5 grid grid-cols-2 gap-0.5">
                <div className="w-1.5 h-1.5 bg-white rounded-xs"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-xs"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-xs"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-xs"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid with Horizontal Margins/Spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-12 px-2 sm:px-0">
          {products.map((product) => (
            <div
              key={product.productId}
              className="group bg-white rounded-2xl border border-zinc-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between mx-auto sm:mx-0 w-full"
            >
              <div>
                <div className="relative bg-zinc-100 overflow-hidden aspect-square">
                  <Image
                    src={product.images[0] || "/placeholder.jpg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.discount && product.discount > 0 && (
                    <div className="absolute top-3 left-3 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm">
                      {Math.round((product.discount / product.price) * 100)}% OFF
                    </div>
                  )}

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button aria-label="Add to cart" className="bg-white/90 backdrop-blur-xs p-2.5 rounded-full shadow-md hover:bg-white transition-colors text-zinc-700 hover:text-green-700">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-zinc-900 line-clamp-2 group-hover:text-green-700 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 ml-2 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100 shrink-0">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                      <span className="text-xs font-semibold text-amber-800">4.5</span>
                    </div>
                  </div>

                  <p className="text-zinc-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-extrabold text-green-700">
                      ${(product.price - (product.discount || 0)).toFixed(2)}
                    </span>
                    {product.discount && (
                      <span className="text-xs text-zinc-400 line-through font-medium">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    product.stock > 10
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                      : product.stock > 0
                        ? 'bg-amber-50 text-amber-700 border border-amber-200/60'
                        : 'bg-rose-50 text-rose-700 border border-rose-200/60'
                  }`}>
                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                  </span>
                </div>

                <Link
                  href={`/products/${product.productId}`}
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-xs"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {pages > 1 && (
          <div className="flex justify-center mb-12">
            <nav className="flex items-center gap-1.5 bg-white p-2 rounded-2xl border border-zinc-200 shadow-xs">
              {page > 1 && (
                <Link
                  href={buildPaginationUrl(page - 1)}
                  className="px-4 py-2 text-sm font-semibold text-zinc-700 rounded-xl hover:bg-zinc-100 transition-colors"
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
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
                      pageNum === page
                        ? 'bg-green-600 text-white shadow-md'
                        : 'text-zinc-700 hover:bg-zinc-100'
                    }`}
                  >
                    {pageNum}
                  </Link>
                ) : null;
              })}

              {page < pages && (
                <Link
                  href={buildPaginationUrl(page + 1)}
                  className="px-4 py-2 text-sm font-semibold text-zinc-700 rounded-xl hover:bg-zinc-100 transition-colors"
                >
                  Next
                </Link>
              )}
            </nav>
          </div>
        )}

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-zinc-200 shadow-xs max-w-lg mx-auto p-8">
            <div className="w-20 h-20 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-green-100">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">No products found</h3>
            <p className="text-zinc-500 text-sm mb-6">Try adjusting your filters or search terms</p>
            <Link
              href="/products"
              className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-xs"
            >
              Clear All Filters
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}