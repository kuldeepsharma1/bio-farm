import { getSession } from '@/lib/getSession';
import {
  Bell,
  Package,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  ShoppingCart,
  Truck,
  Award,
  Shield,
  ChevronRight,
  Sprout,
  Heart,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Order {
  id: string;
  date: string;
  total: string;
  status: string;
  items: number;
  products: string[];
  deliveryDate: string;
}

interface QuickItem {
  id: string;
  name: string;
  image: string;
  lastOrdered: string;
  price: string;
  inStock: boolean;
}

interface Recommendation {
  id: string;
  name: string;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
  price: string;
  originalPrice?: string;
  savings?: number;
}

export default async function Home() {
  const session = await getSession();
  const userol = session?.user;
  const user = {
    name: userol?.name ?? 'Guest',
    email: userol?.email ?? 'invalid',
    accountType: userol?.role ?? 'no',
    avatar: userol?.image ?? 'https://images.unsplash.com/photo-1494790108755-2616b332c1db?w=40&h=40&fit=crop&crop=face',
    memberSince: '2023',
    nextDelivery: 'July 15, 2025'
  };

  const recentOrders: Order[] = [];
  const quickItems: QuickItem[] = [];
  const recommendations: Recommendation[] = [];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-emerald-50 text-[#20ae44] border-[#20ae44]/20';
      case 'shipped': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'processing': return 'bg-amber-50 text-amber-700 border-amber-200';
      default: return 'bg-[#FAF9F6] text-[#3A4A3E] border-[#E8EDE9]';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="w-4 h-4 text-[#20ae44]" />;
      case 'shipped': return <Truck className="w-4 h-4 text-blue-600" />;
      case 'processing': return <Clock className="w-4 h-4 text-amber-600" />;
      default: return <Package className="w-4 h-4 text-[#3A4A3E]" />;
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#121A14] font-sans selection:bg-[#FDBA21] selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <div className="bg-white rounded-3xl border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] mb-8 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#20ae44]/10 rounded-2xl flex items-center justify-center text-[#20ae44] border border-[#20ae44]/20">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-semibold text-[#121A14]">Dashboard</h1>
              <p className="text-xs text-[#3A4A3E]">Welcome back, {user.name.split(' ')[0]}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href={'/notifications'} className="relative p-2.5 text-[#3A4A3E] hover:text-[#121A14] hover:bg-[#FAF9F6] rounded-full border border-[#E8EDE9] transition-all">
              <Bell className="w-4 h-4" />
            </Link>

            <Link href={'/cart'} className="relative p-2.5 text-[#3A4A3E] hover:text-[#121A14] hover:bg-[#FAF9F6] rounded-full border border-[#E8EDE9] transition-all">
              <ShoppingCart className="w-4 h-4" />
            </Link>

            <Link href={'/profile'} className="flex items-center space-x-3 pl-4 border-l border-[#E8EDE9]">
              <Image width={36} height={36}
                src={user.avatar}
                alt={user.name}
                className="w-9 h-9 rounded-full border border-[#E8EDE9] object-cover"
              />
              <div className="hidden md:block text-left">
                <p className="text-xs font-semibold text-[#121A14]">{user.name}</p>
                <p className="text-[11px] text-[#3A4A3E] capitalize">{user.accountType}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-[#3A4A3E]/60" />
            </Link>
          </div>
        </div>

        {/* Welcome Hero Banner */}
        <div className="bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] mb-8 relative overflow-hidden">
          <div className="absolute -top-32 -right-20 w-80 h-80 bg-[#20ae44]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-28 -left-20 w-72 h-72 bg-[#8BA85A]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#121A14] mb-3">
                Hello, {user.name.split(' ')[0]}!
              </h2>
              <p className="text-xs sm:text-sm font-medium text-[#3A4A3E] leading-relaxed max-w-xl mb-5">
                Your organic farming journey continues. Let&apos;s grow something amazing together sustainably.
              </p>
              <div className="inline-flex items-center gap-2 bg-[#FAF9F6] px-4 py-2 rounded-full border border-[#E8EDE9]">
                <Award className="w-4 h-4 text-[#20ae44]" />
                <span className="text-xs font-semibold text-[#121A14]">Member since {user.memberSince}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Link href={'/orders'} className="bg-white p-5 rounded-3xl border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] hover:shadow-md transition-all group">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors border border-blue-100">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#121A14]">Track Orders</h3>
                <p className="text-xs text-[#3A4A3E]">View order status</p>
              </div>
            </div>
          </Link>

          <Link href={'/farms'} className="bg-white p-5 rounded-3xl border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] hover:shadow-md transition-all group">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#20ae44]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#20ae44]/15 transition-colors border border-[#20ae44]/20">
                <Sprout className="w-6 h-6 text-[#20ae44]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#121A14]">Farms</h3>
                <p className="text-xs text-[#3A4A3E]">Quick view</p>
              </div>
            </div>
          </Link>

          <Link href={'/our-products'} className="bg-white p-5 rounded-3xl border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] hover:shadow-md transition-all group">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center group-hover:bg-purple-100 transition-colors border border-purple-100">
                <Package className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#121A14]">Our Products</h3>
                <p className="text-xs text-[#3A4A3E]">View products</p>
              </div>
            </div>
          </Link>

          <Link href={'/wishlist'} className="bg-white p-5 rounded-3xl border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] hover:shadow-md transition-all group">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center group-hover:bg-rose-100 transition-colors border border-rose-100">
                <Heart className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#121A14]">Wishlist</h3>
                <p className="text-xs text-[#3A4A3E]">View favorites</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Orders & Reorders */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Recent Orders */}
            <div className="bg-white rounded-3xl border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8EDE9]">
                <h3 className="text-lg font-semibold text-[#121A14]">Recent Orders</h3>
                <Link href={'/orders'} className="text-xs font-semibold text-[#20ae44] hover:text-[#1b963a] flex items-center gap-1">
                  View All <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-4">
                {recentOrders.length > 0 ? (
                  recentOrders.map((order) => (
                    <div key={order.id} className="border border-[#E8EDE9] rounded-2xl p-5 bg-[#FAF9F6] hover:shadow-sm transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-[#E8EDE9] shadow-xs">
                            {getStatusIcon(order.status)}
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-[#121A14]">{order.id}</h4>
                            <p className="text-xs text-[#3A4A3E] font-medium">{order.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-[#121A14]">{order.total}</p>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-[#3A4A3E] font-medium pt-3 border-t border-[#E8EDE9]">
                        <span>{order.items} items • {order.products.join(", ")}</span>
                        <span className="flex items-center gap-1">
                          <Truck className="w-3.5 h-3.5" /> Delivery: {order.deliveryDate}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 text-[#3A4A3E]">
                    <Package className="w-10 h-10 mx-auto mb-3 text-[#3A4A3E]/40" />
                    <p className="text-sm font-medium">No recent orders found</p>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Reorder */}
            {quickItems.length > 0 && (
              <div className="bg-white rounded-3xl border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] p-6 sm:p-8">
                <div className="mb-6 pb-4 border-b border-[#E8EDE9]">
                  <h3 className="text-lg font-semibold text-[#121A14]">Quick Order</h3>
                  <p className="text-xs text-[#3A4A3E] mt-0.5">Order our latest purchased items</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {quickItems.map((item) => (
                    <div key={item.id} className="border border-[#E8EDE9] rounded-2xl p-4 bg-[#FAF9F6] flex flex-col justify-between">
                      <div>
                        <Image width={400} height={400}
                          src={item.image}
                          alt={item.name}
                          className="w-full h-32 object-cover rounded-xl mb-3 border border-[#E8EDE9]"
                        />
                        <h4 className="text-sm font-semibold text-[#121A14] mb-1 truncate">{item.name}</h4>
                        <p className="text-xs text-[#3A4A3E] mb-3">Last ordered: {item.lastOrdered}</p>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-[#E8EDE9]">
                        <span className="text-sm font-bold text-[#121A14]">{item.price}</span>
                        <button
                          disabled={!item.inStock}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                            item.inStock
                              ? 'bg-[#20ae44] text-white hover:bg-[#1b963a]'
                              : 'bg-[#E8EDE9] text-[#3A4A3E] cursor-not-allowed'
                          }`}
                        >
                          {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column - Sidebar (Account Summary & Recommendations) */}
          <div className="space-y-6">
            
            {/* Account Summary */}
            <div className="bg-white rounded-3xl border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] p-6">
              <h3 className="text-lg font-semibold text-[#121A14] mb-5">Account Summary</h3>
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8EDE9]">
                  <span className="text-[#3A4A3E] font-medium">Name</span>
                  <span className="font-semibold text-[#121A14]">{user.name}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E8EDE9]">
                  <span className="text-[#3A4A3E] font-medium">Email</span>
                  <span className="font-semibold text-[#20ae44] truncate max-w-40">{user.email}</span>
                </div>
                <div className="flex items-center justify-between pb-3">
                  <span className="text-[#3A4A3E] font-medium">Account Type</span>
                  <span className="font-semibold text-[#121A14] capitalize">{user.accountType}</span>
                </div>
                <div className="pt-2">
                  <Link
                    href="/profile"
                    className="block w-full bg-[#20ae44] hover:bg-[#1b963a] text-white text-center py-3 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Recommended Products */}
            {recommendations.length > 0 && (
              <div className="bg-white rounded-3xl border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] p-6">
                <h3 className="text-lg font-semibold text-[#121A14] mb-5">Recommended for You</h3>
                <div className="space-y-4">
                  {recommendations.map((product) => (
                    <div key={product.id} className="border border-[#E8EDE9] rounded-2xl p-4 bg-[#FAF9F6]">
                      <div className="flex space-x-3">
                        <Image width={400} height={400}
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-xl border border-[#E8EDE9]"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="font-semibold text-[#121A14] text-xs truncate">{product.name}</h4>
                            {product.badge && (
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold shrink-0 ${
                                product.badge === 'New' ? 'bg-blue-50 text-blue-700' :
                                product.badge === 'Popular' ? 'bg-[#20ae44]/10 text-[#20ae44]' :
                                'bg-rose-50 text-rose-600'
                              }`}>
                                {product.badge}
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-1 mt-1">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-[#E8EDE9]'}`}
                                />
                              ))}
                            </div>
                            <span className="text-[11px] text-[#3A4A3E]">({product.reviews})</span>
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center space-x-1.5">
                              <span className="text-xs font-bold text-[#121A14]">{product.price}</span>
                              {product.originalPrice && (
                                <span className="text-[11px] text-[#3A4A3E]/65 line-through">{product.originalPrice}</span>
                              )}
                            </div>
                          </div>

                          <button className="w-full mt-3 bg-[#20ae44] hover:bg-[#1b963a] text-white py-1.5 rounded-full transition-all text-xs font-semibold shadow-xs">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Support Card */}
            <div className="bg-linear-to-br from-[#20ae44]/10 to-[#8BA85A]/15 rounded-3xl border border-[#20ae44]/20 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#20ae44] rounded-2xl flex items-center justify-center text-white shadow-xs">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#121A14]">Need Help?</h3>
                  <p className="text-xs text-[#3A4A3E]">Expert support available</p>
                </div>
              </div>
              <div className="space-y-2.5">
                <button className="w-full bg-white text-[#121A14] hover:bg-[#FAF9F6] py-2.5 rounded-full transition-all text-xs font-semibold border border-[#E8EDE9] shadow-xs">
                  Chat with Expert
                </button>
                <button className="w-full bg-[#20ae44] hover:bg-[#1b963a] text-white py-2.5 rounded-full transition-all text-xs font-semibold shadow-xs">
                  Call Support
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}