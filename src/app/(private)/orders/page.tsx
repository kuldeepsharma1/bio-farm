'use client'
import React, { useState } from 'react';
import { Package, Truck, Clock, CheckCircle, XCircle, Search, Eye, MapPin, Calendar, ShoppingBag, Plus, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface OrderItem {
  id: string;
  name: string;
  qty: number;
  price: number;
  img: string;
  sku: string;
}

interface Customer {
  name: string;
  type: 'B2B' | 'B2C';
  email: string;
  phone: string;
  address: string;
}

interface Order {
  id: string;
  date: string;
  status: 'Delivered' | 'Shipped' | 'Processing' | 'Cancelled' | 'Pending';
  total: number;
  customer: Customer;
  items: OrderItem[];
  shippingAddress: string;
  paymentMethod: string;
  trackingNumber?: string;
  deliveryDate?: string;
}

const orders: Order[] = [];

const statusConfig = {
  Delivered: {
    color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    icon: CheckCircle,
    dot: 'bg-emerald-500',
    message: 'Order delivered successfully'
  },
  Shipped: {
    color: 'text-blue-700 bg-blue-50 border-blue-200',
    icon: Truck,
    dot: 'bg-blue-500',
    message: 'Order is on the way'
  },
  Processing: {
    color: 'text-amber-700 bg-amber-50 border-amber-200',
    icon: Clock,
    dot: 'bg-amber-500',
    message: 'Order is being prepared'
  },
  Cancelled: {
    color: 'text-rose-700 bg-rose-50 border-rose-200',
    icon: XCircle,
    dot: 'bg-rose-500',
    message: 'Order was cancelled'
  },
  Pending: {
    color: 'text-gray-700 bg-gray-50 border-gray-200',
    icon: Package,
    dot: 'bg-gray-400',
    message: 'Order confirmation pending'
  }
};

export default function MyOrdersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getTotalItems = (items: OrderItem[]) => {
    return items.reduce((sum, item) => sum + item.qty, 0);
  };

  const OrderDetailsModal = ({ order, onClose }: { order: Order; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-4xl sm:rounded-[2.5rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#121A14]/5 shadow-2xl">
        <div className="p-6 sm:p-8 border-b border-[#121A14]/5 sticky top-0 bg-white z-10">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#121A14]">Order Details</h2>
              <p className="text-xs sm:text-sm font-medium text-[#3A4A3E] mt-0.5">#{order.id}</p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="text-[#3A4A3E] hover:text-[#121A14] text-xl font-bold w-9 h-9 rounded-full bg-[#FAF9F6] border border-[#E8EDE9] flex items-center justify-center transition-all active:scale-95"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between p-4 sm:p-5 bg-[#FAF9F6] rounded-3xl border border-[#E8EDE9]">
            <div className="flex items-center space-x-3.5">
              {React.createElement(statusConfig[order.status].icon, { className: "w-6 h-6 text-[#20ae44]" })}
              <div>
                <p className="font-semibold text-[#121A14] text-sm sm:text-base">{order.status}</p>
                <p className="text-xs sm:text-sm text-[#3A4A3E] font-medium">{statusConfig[order.status].message}</p>
              </div>
            </div>
            {order.deliveryDate && (
              <div className="text-right">
                <p className="text-xs text-[#3A4A3E] font-medium">Delivered on</p>
                <p className="font-semibold text-[#121A14] text-xs sm:text-sm">{formatDate(order.deliveryDate)}</p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FAF9F6] p-5 rounded-3xl border border-[#E8EDE9]">
            <div>
              <p className="text-xs font-semibold text-[#3A4A3E] uppercase tracking-wider mb-1">Order Date</p>
              <p className="font-semibold text-[#121A14] text-sm sm:text-base">{formatDate(order.date)}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#3A4A3E] uppercase tracking-wider mb-1">Payment Method</p>
              <p className="font-semibold text-[#121A14] text-sm sm:text-base">{order.paymentMethod}</p>
            </div>
          </div>

          {order.trackingNumber && (
            <div className="p-4 sm:p-5 bg-blue-50/60 rounded-3xl border border-blue-200">
              <div className="flex items-center space-x-2.5 mb-1.5">
                <Truck className="w-5 h-5 text-blue-600 shrink-0" />
                <p className="font-semibold text-blue-900 text-sm sm:text-base">Tracking Information</p>
              </div>
              <p className="text-xs sm:text-sm text-blue-700 font-mono">{order.trackingNumber}</p>
            </div>
          )}

          <div>
            <p className="text-xs font-semibold text-[#3A4A3E] uppercase tracking-wider mb-3">Shipping Address</p>
            <div className="p-4 sm:p-5 bg-[#FAF9F6] rounded-3xl border border-[#E8EDE9]">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#20ae44] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-medium text-[#3A4A3E] leading-relaxed">{order.shippingAddress}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#3A4A3E] uppercase tracking-wider mb-3">Order Items</p>
            <div className="space-y-3">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-[#FAF9F6] rounded-3xl border border-[#E8EDE9]">
                  <Image width={56} height={56}
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-2xl border border-[#E8EDE9] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#121A14] text-sm sm:text-base truncate">{item.name}</h4>
                    <p className="text-xs sm:text-sm font-medium text-[#3A4A3E]">Qty: {item.qty}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-semibold text-[#121A14] text-sm sm:text-base">{formatCurrency(item.price)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#121A14]/5 space-y-5">
            <div className="flex justify-between items-center">
              <span className="text-base sm:text-lg font-semibold text-[#121A14]">Total Amount</span>
              <span className="text-xl sm:text-2xl font-bold text-[#20ae44]">{formatCurrency(order.total)}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {order.status === 'Delivered' && (
                <button className="flex-1 bg-[#20ae44] hover:bg-[#1b963a] text-white py-3.5 px-4 rounded-full font-semibold transition-all text-xs sm:text-sm shadow-sm active:scale-95">
                  Order Again
                </button>
              )}
              {order.trackingNumber && order.status !== 'Delivered' && (
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3.5 px-4 rounded-full font-semibold transition-all text-xs sm:text-sm shadow-sm active:scale-95">
                  Track Order
                </button>
              )}
              <button className="flex-1 bg-[#FAF9F6] hover:bg-[#20ae44]/10 hover:text-[#20ae44] border border-[#E8EDE9] text-[#3A4A3E] py-3.5 px-4 rounded-full font-semibold transition-all text-xs sm:text-sm shadow-sm active:scale-95">
                Download Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const EmptyState = () => (
    <div className="bg-white rounded-4xl sm:rounded-[2.5rem] p-8 sm:p-16 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] text-center max-w-2xl mx-auto my-6">
      <div className="bg-[#20ae44]/10 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#20ae44]/15">
        <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12 text-[#20ae44]" />
      </div>
      <h3 className="text-2xl sm:text-3xl font-semibold text-[#121A14] mb-3 tracking-tight">No orders yet</h3>
      <p className="text-sm sm:text-base text-[#3A4A3E] mb-8 max-w-md mx-auto font-medium leading-relaxed">
        Start your organic farming journey by placing your first order. Browse our premium collection of organic fertilizers and compost.
      </p>
      <Link href='/our-products' className="inline-flex items-center gap-2 bg-[#20ae44] hover:bg-[#1b963a] text-white px-8 py-3.5 rounded-full font-semibold transition-all text-sm sm:text-base shadow-md active:scale-95">
        <Plus className="w-5 h-5" />
        <span>Start Shopping</span>
      </Link>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#121A14] font-sans selection:bg-[#FDBA21] selection:text-black overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="bg-white rounded-4xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#20ae44] bg-[#20ae44]/15 border border-[#20ae44]/20 px-3.5 py-1.5 rounded-full mb-4">
            <Package className="w-3.5 h-3.5 shrink-0" />
            <span>Order History</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#121A14] mb-2 sm:mb-3">
            My Orders
          </h1>
          <p className="text-sm sm:text-base text-[#3A4A3E] font-medium leading-relaxed max-w-xl">
            Track and manage your organic farming essentials and shipment status.
          </p>
        </div>

        {orders.length > 0 && (
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#3A4A3E] w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search your orders..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-[#FAF9F6] border border-[#E8EDE9] rounded-full text-xs sm:text-sm font-medium text-[#121A14] placeholder-[#3A4A3E]/60 focus:outline-none focus:ring-2 focus:ring-[#20ae44]/30 focus:border-[#20ae44] transition-all"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-5 py-3 bg-[#FAF9F6] border border-[#E8EDE9] rounded-full text-xs sm:text-sm font-semibold text-[#121A14] focus:outline-none focus:ring-2 focus:ring-[#20ae44]/30 focus:border-[#20ae44] transition-all cursor-pointer"
              >
                <option value="all">All Orders</option>
                <option value="Delivered">Delivered</option>
                <option value="Shipped">Shipped</option>
                <option value="Processing">Processing</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
        )}

        <div className="space-y-6">
          {orders.length === 0 ? (
            <EmptyState />
          ) : filteredOrders.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-[#121A14]/5 shadow-sm">
              <div className="bg-[#FAF9F6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E8EDE9]">
                <Search className="w-8 h-8 text-[#3A4A3E]" />
              </div>
              <h3 className="text-lg font-semibold text-[#121A14] mb-1">No orders found</h3>
              <p className="text-xs sm:text-sm text-[#3A4A3E] font-medium">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            filteredOrders.map((order) => {
              const StatusIcon = statusConfig[order.status].icon;
              return (
                <div
                  key={order.id}
                  className="bg-white rounded-3xl border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-[#121A14]/5">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-[#121A14] mb-1.5">#{order.id}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-[#3A4A3E]">
                          <div className="flex items-center space-x-1.5">
                            <Calendar className="w-4 h-4 text-[#20ae44]" />
                            <span>{formatDate(order.date)}</span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <Package className="w-4 h-4 text-[#20ae44]" />
                            <span>{getTotalItems(order.items)} items</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-left sm:text-right w-full sm:w-auto flex sm:flex-col justify-between items-center sm:items-end">
                        <div className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold ${statusConfig[order.status].color} mb-2`}>
                          <div className={`w-2 h-2 rounded-full ${statusConfig[order.status].dot}`}></div>
                          <span>{order.status}</span>
                          <StatusIcon className="w-3.5 h-3.5" />
                        </div>
                        <p className="text-xl sm:text-2xl font-bold text-[#121A14]">{formatCurrency(order.total)}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 p-3.5 bg-[#FAF9F6] rounded-2xl border border-[#E8EDE9]">
                          <Image width={52} height={52}
                            src={item.img}
                            alt={item.name}
                            className="w-13 h-13 object-cover rounded-xl border border-[#E8EDE9] shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-[#121A14] text-xs sm:text-sm truncate">{item.name}</p>
                            <p className="text-xs font-medium text-[#3A4A3E]">Qty: {item.qty}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="font-semibold text-[#121A14] text-xs sm:text-sm">{formatCurrency(item.price)}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#121A14]/5">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#20ae44] hover:bg-[#1b963a] text-white rounded-full transition-all text-xs sm:text-sm font-semibold shadow-sm active:scale-95"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>

                      {order.trackingNumber && order.status !== 'Delivered' && (
                        <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#FAF9F6] hover:bg-[#20ae44]/10 hover:text-[#20ae44] border border-[#E8EDE9] text-[#3A4A3E] rounded-full transition-all text-xs sm:text-sm font-semibold shadow-sm active:scale-95">
                          <Truck className="w-4 h-4" />
                          <span>Track Order</span>
                        </button>
                      )}

                      {order.status === 'Delivered' && (
                        <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#FAF9F6] hover:bg-[#20ae44]/10 hover:text-[#20ae44] border border-[#E8EDE9] text-[#3A4A3E] rounded-full transition-all text-xs sm:text-sm font-semibold shadow-sm active:scale-95">
                          <ArrowRight className="w-4 h-4" />
                          <span>Order Again</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </main>
  );
}