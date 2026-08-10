'use client';

import React, { useEffect, useState } from 'react';
import { getWishlist, removeFromWishlist, clearWishlist } from '@/actions/wishlist';
import { addToCart } from '@/actions/cart';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';
import { 
  Heart, 
  ShoppingCart, 
  Eye, 
  Trash2, 
  Leaf, 
  Star, 
  ShieldCheck,
  Package,
  Plus,
  ArrowRight
} from 'lucide-react';

interface WishlistItem {
  _id: string;
  productId: string;
  name: string;
  price: number;
  images: string[];
  rating?: number;
  reviews?: number;
  inStock?: boolean;
  category?: string;
}

const WishlistPage: React.FC = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingItems, setProcessingItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        setLoading(true);
        const items = await getWishlist();
        setWishlist(items);
      } catch (error) {
        console.log(error);
        toast.error('Failed to load wishlist');
      } finally {
        setLoading(false);
      }
    };
    fetchWishlist();
  }, []);

  const handleRemove = async (productId: string) => {
    try {
      setProcessingItems(prev => new Set(prev).add(productId));
      const updatedWishlist = await removeFromWishlist(productId);
      setWishlist(updatedWishlist);
      toast.success('Removed from wishlist');
    } catch (error) {
      console.log(error);
      toast.error('Failed to remove item');
    } finally {
      setProcessingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(productId);
        return newSet;
      });
    }
  };

  const handleClear = async () => {
    if (!confirm('Are you sure you want to clear your entire wishlist?')) return;
    
    try {
      await clearWishlist();
      setWishlist([]);
      toast.success('Wishlist cleared successfully');
    } catch (error) {
      console.log(error);
      toast.error('Failed to clear wishlist');
    }
  };

  const handleAddToCart = async (item: WishlistItem) => {
    try {
      setProcessingItems(prev => new Set(prev).add(item._id));
      await addToCart(item._id, 1);
      toast.success('Added to cart');
    } catch (error) {
      console.log(error);
      toast.error('Failed to add to cart');
    } finally {
      setProcessingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(item._id);
        return newSet;
      });
    }
  };

  const renderStars = (rating: number = 0) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="bg-white rounded-3xl p-6 border border-[#121A14]/5 shadow-sm">
            <div className="w-full h-48 bg-gray-100 rounded-2xl mb-4"></div>
            <div className="h-6 bg-gray-100 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-100 rounded w-1/2 mb-4"></div>
            <div className="h-10 bg-gray-100 rounded-full w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );

  const EmptyState = () => (
    <div className="bg-white rounded-4xl sm:rounded-[2.5rem] p-8 sm:p-16 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] text-center max-w-2xl mx-auto">
      <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-[#20ae44]/10 rounded-full mb-6 border border-[#20ae44]/15">
        <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-[#20ae44]" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#121A14] mb-3 tracking-tight">Your wishlist is empty</h2>
      <p className="text-sm sm:text-base text-[#3A4A3E] mb-8 max-w-md mx-auto font-medium leading-relaxed">
        Start adding your favorite organic products to your wishlist and never lose track of what you love.
      </p>
      <Link
        href="/our-products"
        className="inline-flex items-center gap-2 bg-[#20ae44] hover:bg-[#1b963a] text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-md active:scale-95 text-sm sm:text-base"
      >
        <Package className="w-5 h-5" />
        <span>Explore Products</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );

  const WishlistItemCard = ({ item }: { item: WishlistItem }) => (
    <div className="group bg-white rounded-3xl p-6 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] hover:shadow-md transition-all duration-300 relative flex flex-col justify-between">
      {/* Wishlist Badge */}
      <div className="absolute top-5 right-5 z-10">
        <button
          onClick={() => handleRemove(item._id)}
          disabled={processingItems.has(item._id)}
          aria-label="Remove from wishlist"
          className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-red-50 hover:text-red-500 text-gray-500 transition-all disabled:opacity-50 active:scale-95"
        >
          <Heart className="w-4 h-4 text-red-500 fill-current" />
        </button>
      </div>

      <div>
        {/* Product Image */}
        <div className="relative mb-5 overflow-hidden rounded-2xl bg-[#FAF9F6] aspect-square">
          <Image
            src={item.images[0] || '/placeholder-product.jpg'}
            alt={item.name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {item.inStock === false && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
              <span className="text-white font-semibold text-sm bg-black/60 px-4 py-1.5 rounded-full">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-2.5 mb-6">
          {item.category && (
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#20ae44]">
              <Leaf className="w-3.5 h-3.5" />
              <span>{item.category}</span>
            </div>
          )}

          <h3 className="text-base sm:text-lg font-semibold text-[#121A14] line-clamp-2 tracking-tight">
            {item.name}
          </h3>

          {item.rating !== undefined && (
            <div className="flex items-center gap-2 pt-0.5">
              <div className="flex items-center gap-0.5">
                {renderStars(item.rating)}
              </div>
              <span className="text-xs text-[#3A4A3E] font-medium">
                ({item.reviews || 0})
              </span>
            </div>
          )}
        </div>
      </div>

      <div>
        {/* Price & Stock status */}
        <div className="flex items-center justify-between mb-4 pt-4 border-t border-[#121A14]/5">
          <span className="text-xl sm:text-2xl font-bold text-[#121A14]">
            ${item.price.toFixed(2)}
          </span>
          {item.inStock !== false && (
            <div className="flex items-center gap-1 text-xs font-medium text-[#20ae44] bg-[#20ae44]/10 px-2.5 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>In Stock</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => handleAddToCart(item)}
            disabled={processingItems.has(item._id) || item.inStock === false}
            className="flex-1 flex items-center justify-center gap-2 bg-[#20ae44] hover:bg-[#1b963a] text-white py-3 px-4 rounded-full font-semibold transition-all text-xs sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed shadow-sm active:scale-95"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>{processingItems.has(item._id) ? 'Adding...' : 'Add to Cart'}</span>
          </button>
          
          <Link
            href={`/our-products/${item.productId}`}
            aria-label="View product details"
            className="flex items-center justify-center w-11 h-11 bg-[#FAF9F6] hover:bg-[#20ae44]/10 hover:text-[#20ae44] text-[#3A4A3E] rounded-full border border-[#E8EDE9] transition-all shadow-sm active:scale-95 shrink-0"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#121A14] font-sans selection:bg-[#FDBA21] selection:text-black overflow-x-hidden">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="bg-white rounded-4xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#20ae44] bg-[#20ae44]/10 border border-[#20ae44]/15 px-3.5 py-1.5 rounded-full mb-4">
                <Heart className="w-3.5 h-3.5 fill-current text-red-500 shrink-0" />
                <span>Saved Items</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#121A14]">
                My Wishlist
              </h1>
            </div>
            
            {!loading && wishlist.length > 0 && (
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-3 text-xs font-medium text-[#3A4A3E] bg-[#FAF9F6] px-4 py-2.5 rounded-full border border-[#E8EDE9]">
                  <span className="font-semibold text-[#121A14]">{wishlist.length}</span> items saved
                </div>
                <button
                  onClick={handleClear}
                  className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-full border border-red-200 transition-all shadow-sm active:scale-95"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Clear All</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <LoadingSkeleton />
        ) : wishlist.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="space-y-8">
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {wishlist.map((item) => (
                <WishlistItemCard key={item._id} item={item} />
              ))}
            </div>

            {/* Bottom Actions Container */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)]">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className="text-xs sm:text-sm font-medium text-[#3A4A3E]">
                  Total <span className="font-semibold text-[#121A14]">{wishlist.length}</span> items waiting in your wishlist
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      wishlist.forEach(item => {
                        if (item.inStock !== false) {
                          handleAddToCart(item);
                        }
                      });
                    }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#20ae44] hover:bg-[#1b963a] text-white px-7 py-3 rounded-full font-semibold transition-all text-xs sm:text-sm shadow-sm active:scale-95"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add All to Cart</span>
                  </button>
                  
                  <Link
                    href="/our-products"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FAF9F6] hover:bg-[#20ae44]/10 hover:text-[#20ae44] text-[#3A4A3E] px-7 py-3 rounded-full font-semibold border border-[#E8EDE9] transition-all text-xs sm:text-sm shadow-sm active:scale-95"
                  >
                    <span>Continue Shopping</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default WishlistPage;