'use client'
import React, { useEffect, useState } from 'react';
import { useCartStore } from '@/store/cart';
import { getCart, updateCartItem, removeFromCart, clearCart } from '@/actions/cart';
import { toast } from 'sonner';
import Image from 'next/image';
import { Trash2, Plus, Minus, ShoppingBag, Package, Leaf, ShieldCheck, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Cart: React.FC = () => {
  const { cart, setCart, updateQuantity, removeFromCart: remove, clearCart: clear } = useCartStore();
  const [isLoading, setIsLoading] = useState(true);
  const [processingItems, setProcessingItems] = useState<Set<string>>(new Set());
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isClearCartModalOpen, setIsClearCartModalOpen] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setIsLoading(true);
        const cartData = await getCart();
        setCart(
          cartData.map(item => ({
            productId: item._id,
            quantity: item.quantity,
            _id: item._id,
            name: item.name,
            price: item.price,
            image: item.image
          }))
        );
      } catch (error) {
        console.error('Failed to fetch cart:', error);
        toast.error('Failed to load cart');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCart();
  }, [setCart]);

  const handleUpdateQuantity = async (productId: string, quantity: number) => {
    if (quantity < 1) return;

    try {
      setProcessingItems(prev => new Set(prev).add(productId));
      updateQuantity(productId, quantity);
      await updateCartItem(productId, quantity);
      toast.success('Quantity updated');
    } catch (error) {
      toast.error('Failed to update quantity');
      console.error('Failed to update quantity:', error);
    } finally {
      setProcessingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(productId);
        return newSet;
      });
    }
  };

  const handleRemoveFromCart = async (productId: string) => {
    try {
      setProcessingItems(prev => new Set(prev).add(productId));
      remove(productId);
      await removeFromCart(productId);
      toast.success('Item removed from cart');
    } catch (error) {
      toast.error('Failed to remove from cart');
      console.error('Failed to remove from cart:', error);
    } finally {
      setProcessingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(productId);
        return newSet;
      });
    }
  };

  const handleClearCartPrompt = () => {
    setIsClearCartModalOpen(true);
  };

  const handleConfirmClearCart = async () => {
    try {
      clear();
      await clearCart();
      toast.success('Cart cleared successfully');
      setIsClearCartModalOpen(false);
    } catch (error) {
      toast.error('Failed to clear cart');
      console.error('Failed to clear cart:', error);
    }
  };

  const handleProceedToCheckout = () => {
    setIsCheckoutModalOpen(true);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#FAF9F6] text-[#121A14] font-sans selection:bg-[#FDBA21] selection:text-black overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-6">
            <div className="h-10 bg-gray-200 rounded-full w-48 mb-8"></div>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-3xl p-6 border border-[#121A14]/5 shadow-sm">
                    <div className="flex gap-4 items-center">
                      <div className="w-24 h-24 bg-gray-100 rounded-2xl shrink-0"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-5 bg-gray-100 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-3xl p-6 border border-[#121A14]/5 shadow-sm h-72"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#121A14] font-sans selection:bg-[#FDBA21] selection:text-black overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="bg-white rounded-4xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#20ae44] bg-[#20ae44]/10 border border-[#20ae44]/15 px-3.5 py-1.5 rounded-full mb-4">
            <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
            <span>Bag Summary</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#121A14] mb-4">
            Shopping Cart
          </h1>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#3A4A3E] font-medium">
            <div className="flex items-center gap-1.5">
              <Package className="w-4 h-4 text-[#20ae44]" />
              <span>{calculateTotalItems()} items selected</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[#20ae44]" />
              <span>Organic & Natural</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#20ae44]" />
              <span>Quality Guaranteed</span>
            </div>
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-4xl sm:rounded-[2.5rem] p-8 sm:p-16 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-[#FAF9F6] rounded-full mb-6 border border-[#E8EDE9]">
              <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12 text-[#3A4A3E]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#121A14] mb-3 tracking-tight">Your cart is empty</h2>
            <p className="text-sm sm:text-base text-[#3A4A3E] mb-8 max-w-md mx-auto font-medium leading-relaxed">
              Discover our premium organic products and start building your healthy lifestyle today.
            </p>
            <Link
              href={'/our-products'}
              className="inline-flex items-center gap-2 bg-[#20ae44] hover:bg-[#1b963a] text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-md active:scale-95 text-sm sm:text-base"
            >
              <span>Continue Shopping</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.productId}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
                    
                    {/* Image & Main Info */}
                    <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-[#FAF9F6] rounded-2xl overflow-hidden shrink-0 border border-[#E8EDE9]">
                        <Image
                          src={item.image || '/placeholder-product.jpg'}
                          alt={item.name || 'Product'}
                          fill
                          className="object-cover object-center hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-[#121A14] mb-2 line-clamp-2 tracking-tight">
                          {item.name || 'Product'}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xl sm:text-2xl font-bold text-[#121A14]">
                            ${(item.price || 0).toFixed(2)}
                          </span>
                          <span className="text-xs text-[#3A4A3E] font-medium">per unit</span>
                        </div>
                      </div>
                    </div>

                    {/* Quantity & Actions Right side */}
                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-[#121A14]/5 gap-4">
                      
                      <div className="text-left sm:text-right">
                        <div className="text-lg sm:text-xl font-bold text-[#20ae44]">
                          ${((item.price || 0) * item.quantity).toFixed(2)}
                        </div>
                        <div className="text-xs text-[#3A4A3E] font-medium">
                          {item.quantity} × ${(item.price || 0).toFixed(2)}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center bg-[#FAF9F6] rounded-full border border-[#E8EDE9] p-1 shadow-sm">
                          <button
                            onClick={() => handleUpdateQuantity(item.productId, item.quantity - 1)}
                            disabled={item.quantity <= 1 || processingItems.has(item.productId)}
                            aria-label="Decrease quantity"
                            className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-full text-[#3A4A3E] disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          
                          <span className="w-8 text-center text-xs sm:text-sm font-bold text-[#121A14]">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1)}
                            disabled={processingItems.has(item.productId)}
                            aria-label="Increase quantity"
                            className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-full text-[#3A4A3E] disabled:opacity-40 transition-all active:scale-95"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Remove item button */}
                        <button
                          onClick={() => handleRemoveFromCart(item.productId)}
                          disabled={processingItems.has(item.productId)}
                          aria-label="Remove item"
                          className="w-10 h-10 flex items-center justify-center bg-[#FAF9F6] hover:bg-red-50 text-[#3A4A3E] hover:text-red-600 rounded-full border border-[#E8EDE9] transition-all disabled:opacity-50 active:scale-95 shadow-sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] sticky top-28 space-y-6">
                <h2 className="text-xl font-semibold text-[#121A14] tracking-tight">Order Summary</h2>

                <div className="space-y-3.5 text-xs sm:text-sm font-medium text-[#3A4A3E]">
                  <div className="flex justify-between">
                    <span>Subtotal ({calculateTotalItems()} items)</span>
                    <span className="font-semibold text-[#121A14]">${calculateTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-[#20ae44] font-semibold bg-[#20ae44]/10 px-2.5 py-0.5 rounded-full">FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                  
                  <div className="border-t border-[#121A14]/5 pt-4">
                    <div className="flex justify-between text-base sm:text-lg font-bold text-[#121A14]">
                      <span>Total Amount</span>
                      <span className="text-[#20ae44]">${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={handleProceedToCheckout}
                    className="w-full bg-[#20ae44] hover:bg-[#1b963a] text-white py-3.5 px-6 rounded-full font-semibold transition-all shadow-md text-xs sm:text-sm active:scale-95"
                  >
                    Proceed to Checkout
                  </button>

                  <Link href="/our-products" passHref className="block w-full">
                    <button className="w-full bg-[#FAF9F6] hover:bg-[#20ae44]/10 hover:text-[#20ae44] text-[#3A4A3E] border border-[#E8EDE9] py-3.5 px-6 rounded-full font-semibold transition-all text-xs sm:text-sm shadow-sm active:scale-95">
                      Continue Shopping
                    </button>
                  </Link>

                  <button
                    onClick={handleClearCartPrompt}
                    className="w-full text-red-600 hover:bg-red-50 py-2.5 px-4 rounded-full font-semibold transition-all text-xs sm:text-sm"
                  >
                    Clear Cart
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="pt-6 border-t border-[#121A14]/5 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#20ae44]" />
                    <span className="text-xs font-semibold text-[#121A14]">Secure Checkout</span>
                  </div>
                  <p className="text-[11px] text-[#3A4A3E] font-medium">
                    256-bit SSL encryption • Money-back guarantee
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* Checkout Not Available Modal */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-4xl sm:rounded-[2.5rem] shadow-2xl max-w-sm w-full p-6 sm:p-8 relative border border-[#121A14]/5 text-center">
            <button
              onClick={() => setIsCheckoutModalOpen(false)}
              aria-label="Close modal"
              className="absolute top-5 right-5 text-[#3A4A3E] hover:text-[#121A14] w-9 h-9 rounded-full bg-[#FAF9F6] border border-[#E8EDE9] flex items-center justify-center transition-all active:scale-95"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-50 rounded-full mb-4 border border-amber-200">
              <ShoppingBag className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-[#121A14] mb-2 tracking-tight">
              Checkout Temporarily Unavailable
            </h3>
            <p className="text-xs sm:text-sm text-[#3A4A3E] font-medium leading-relaxed mb-6">
              Thank you for your interest! We are currently working on implementing our payment gateway. This service is not yet available in your area.
            </p>
            <button
              onClick={() => setIsCheckoutModalOpen(false)}
              className="bg-[#20ae44] hover:bg-[#1b963a] text-white px-6 py-3 rounded-full font-semibold transition-all shadow-sm text-xs sm:text-sm active:scale-95 w-full"
            >
              Got It!
            </button>
          </div>
        </div>
      )}

      {/* Clear Cart Confirmation Modal */}
      {isClearCartModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-4xl sm:rounded-[2.5rem] shadow-2xl max-w-md w-full p-6 sm:p-8 relative border border-[#121A14]/5 text-center">
            <button
              onClick={() => setIsClearCartModalOpen(false)}
              aria-label="Close modal"
              className="absolute top-5 right-5 text-[#3A4A3E] hover:text-[#121A14] w-9 h-9 rounded-full bg-[#FAF9F6] border border-[#E8EDE9] flex items-center justify-center transition-all active:scale-95"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-4 border border-red-200">
              <Trash2 className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-[#121A14] mb-2 tracking-tight">
              Wait! Are you sure you want to empty your cart?
            </h3>
            <p className="text-xs sm:text-sm text-[#3A4A3E] font-medium leading-relaxed mb-6">
              You currently have <span className="font-semibold text-[#121A14]">{calculateTotalItems()} amazing organic items</span> totaling <span className="font-semibold text-[#121A14]">${calculateTotal().toFixed(2)}</span> in your cart. Clearing it means you&apos;ll lose all these selections and have to start over.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
              <button
                onClick={() => setIsClearCartModalOpen(false)}
                className="bg-[#20ae44]/10 text-[#20ae44] hover:bg-[#20ae44]/20 px-6 py-3 rounded-full font-semibold transition-all text-xs sm:text-sm active:scale-95 order-2 sm:order-1 flex-1"
              >
                Keep Shopping
              </button>
              <button
                onClick={handleConfirmClearCart}
                className="bg-[#FAF9F6] text-[#3A4A3E] hover:bg-gray-100 border border-[#E8EDE9] px-6 py-3 rounded-full font-semibold transition-all text-xs sm:text-sm active:scale-95 order-1 sm:order-2 flex-1 shadow-sm"
              >
                Yes, Clear My Cart
              </button>
            </div>
            <p className="text-[11px] text-[#3A4A3E]/70 font-medium">
              (You can always remove individual items if you change your mind later.)
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;