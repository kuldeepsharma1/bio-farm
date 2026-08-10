import { Metadata } from "next";
import React from "react";
import { Truck, Package, Clock, Globe, HelpCircle, BadgeCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL!),
  title: "Shipping Information | Arkin Organics",
  description:
    "Get detailed information about our shipping policies, delivery timelines, coverage areas, and handling procedures at Arkin Organics.",
};

export default function ShippingInfo() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#121A14] font-sans selection:bg-[#FDBA21] selection:text-black overflow-x-hidden pt-28 sm:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header Card / Banner */}
        <div className="bg-white rounded-4xl sm:rounded-[2.5rem] p-8 sm:p-10 lg:p-12 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#20ae44] bg-[#20ae44]/10 border border-[#20ae44]/15 px-3.5 py-1.5 rounded-full mb-5 sm:mb-6">
            <Truck className="w-3.5 h-3.5 shrink-0" />
            <span>Store Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#121A14] mb-4 sm:mb-5">
            Shipping Information
          </h1>
          <p className="text-sm sm:text-base text-[#3A4A3E] leading-relaxed max-w-2xl font-medium">
            Everything you need to know about delivery timelines, shipping options, handling procedures, and coverage.
          </p>
        </div>

        {/* Main Grid Layout / Stack */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Commitment & Shipping Options Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#20ae44]/10 text-[#20ae44] flex items-center justify-center mb-6 border border-[#20ae44]/15">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-medium text-[#121A14] mb-3">
                  Our Commitment
                </h2>
                <p className="text-xs sm:text-sm text-[#3A4A3E] leading-relaxed font-medium">
                  At Arkin Organics, we deliver organic fertilizers responsibly. Every shipment is handled carefully to ensure your products arrive fresh and ready for use.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#20ae44]/10 text-[#20ae44] flex items-center justify-center mb-6 border border-[#20ae44]/15">
                  <Package className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-medium text-[#121A14] mb-3">
                  Shipping Options
                </h2>
                <ul className="space-y-2">
                  {[
                    { title: "Standard Shipping", detail: "5–7 business days" },
                    { title: "Expedited Shipping", detail: "2–3 business days" },
                    { title: "Local Bulk Delivery", detail: "Select regions" },
                  ].map((item) => (
                    <li key={item.title} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3A4A3E] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#20ae44] shrink-0" />
                      <span>
                        <span className="font-semibold text-[#121A14]">{item.title}</span> — {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Processing Times & Shipping Costs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#20ae44]/10 text-[#20ae44] flex items-center justify-center mb-6 border border-[#20ae44]/15">
                  <Clock className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-medium text-[#121A14] mb-3">
                  Processing Times
                </h2>
                <p className="text-xs sm:text-sm text-[#3A4A3E] leading-relaxed font-medium">
                  Orders are typically processed within <span className="font-semibold text-[#121A14]">1–2 business days</span>. You will receive a confirmation email with tracking details once shipped.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#20ae44]/10 text-[#20ae44] flex items-center justify-center mb-6 border border-[#20ae44]/15">
                  <Truck className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-medium text-[#121A14] mb-3">
                  Shipping Costs
                </h2>
                <p className="text-xs sm:text-sm text-[#3A4A3E] leading-relaxed font-medium">
                  Calculated at checkout based on weight and destination. Orders over <span className="font-semibold text-[#121A14]">$100</span> qualify for free standard shipping.
                </p>
              </div>
            </div>
          </div>

          {/* International Shipping Card */}
          <div className="bg-white rounded-3xl p-7 sm:p-10 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)]">
            <div className="w-12 h-12 rounded-2xl bg-[#20ae44]/10 text-[#20ae44] flex items-center justify-center mb-6 border border-[#20ae44]/15">
              <Globe className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-medium text-[#121A14] mb-3">
              International Shipping
            </h2>
            <p className="text-xs sm:text-sm text-[#3A4A3E] leading-relaxed font-medium max-w-2xl">
              Currently, we only ship within the United States. We are actively working to expand our logistics reach and hope to serve international agricultural customers soon.
            </p>
          </div>

          {/* Need Help Banner */}
          <div className="bg-[#0B6623] text-white rounded-3xl p-7 sm:p-10 relative overflow-hidden shadow-xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="absolute -top-24 -right-16 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 max-w-md">
              <div className="inline-flex items-center gap-2 text-[#A4C639] uppercase text-[10px] font-bold tracking-widest bg-white/10 px-3 py-1 rounded-full mb-3">
                <HelpCircle size={13} className="fill-[#A4C639]" />
                <span>CUSTOMER SUPPORT</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-medium text-white mb-2 tracking-tight">
                Have questions about your order?
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                Contact our customer service team anytime at{" "}
                <a
                  href="mailto:support@arkinorganics.com"
                  className="text-[#A4C639] font-bold underline underline-offset-2 break-all"
                >
                  support@arkinorganics.com
                </a>
              </p>
            </div>
            <a
              href="mailto:support@arkinorganics.com"
              className="relative z-10 shrink-0 h-11 px-6 rounded-full bg-[#8BA85A] text-white text-xs sm:text-sm font-bold hover:bg-[#7a954c] transition-all inline-flex items-center gap-2 shadow-md active:scale-95"
            >
              <span>Contact Support</span>
              <ArrowRight size={15} />
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}