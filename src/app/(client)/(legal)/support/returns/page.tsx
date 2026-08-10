import { Metadata } from "next";
import React from "react";
import { RefreshCcw, Package, Clock, HelpCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL!),
  title: "Return & Refund Policy | Arkin Organics",
  description:
    "Read Arkin Organics' return and refund policy. Understand the conditions for returning products, requesting refunds, and resolving order issues.",
};

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#121A14] font-sans selection:bg-[#FDBA21] selection:text-black overflow-x-hidden pt-24 sm:pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header Card / Banner */}
        <div className="bg-white rounded-4xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium uppercase tracking-widest text-[#20ae44] bg-[#20ae44]/10 border border-[#20ae44]/15 px-3.5 py-1.5 rounded-full mb-4 sm:mb-5">
            <RefreshCcw className="w-3.5 h-3.5 shrink-0" />
            <span>Store Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#121A14] mb-3 sm:mb-4">
            Returns & Refunds
          </h1>
          <p className="text-sm sm:text-base text-[#3A4A3E] leading-relaxed max-w-2xl font-medium">
            Clear, transparent guidelines for returning products, tracking store credits, and receiving smooth refunds.
          </p>
        </div>

        {/* Main Grid Layout / Stack */}
        <div className="space-y-4 sm:space-y-6">
          
          {/* Guarantee & Return Window Cards (Side by side on larger screens, stacked on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#20ae44]/10 text-[#20ae44] flex items-center justify-center mb-5 border border-[#20ae44]/15">
                  <Package className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-medium text-[#121A14] mb-2">
                  Our Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-[#3A4A3E] leading-relaxed font-medium">
                  At Arkin Organics, your satisfaction comes first. If you&apos;re not fully content with your biological input, we&apos;re here to make things right.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#20ae44]/10 text-[#20ae44] flex items-center justify-center mb-5 border border-[#20ae44]/15">
                  <Clock className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-medium text-[#121A14] mb-2">
                  30-Day Window
                </h2>
                <p className="text-xs sm:text-sm text-[#3A4A3E] leading-relaxed font-medium">
                  Returns are accepted within <span className="font-medium text-[#121A14]">30 days</span> of purchase. Items must remain unused and in original packaging.
                </p>
              </div>
            </div>
          </div>

          {/* How to Return Step-by-Step Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)]">
            <h2 className="text-xl sm:text-2xl font-medium text-[#121A14] mb-6">
              How to Process a Return
            </h2>
            <div className="space-y-4">
              {[
                <>
                  Send your order details and photos (if damaged) to{" "}
                  <a
                    href="mailto:returns@arkinorganics.com"
                    className="text-[#20ae44] font-medium hover:underline underline-offset-2 break-all"
                  >
                    returns@arkinorganics.com
                  </a>
                </>,
                "Our support crew will issue a return authorization tag and shipping options.",
                "Safely package your items and drop them off using the prepaid label provided.",
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start bg-[#F9FAF9] p-4 sm:p-5 rounded-2xl border border-[#E8EDE9]">
                  <span className="shrink-0 w-7 h-7 rounded-xl bg-[#20ae44]/15 text-[#20ae44] text-xs font-medium flex items-center justify-center">
                    0{i + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-[#3A4A3E] leading-relaxed pt-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Refunds & Non-Returnable items grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)]">
              <h2 className="text-lg sm:text-xl font-medium text-[#121A14] mb-3">
                Refund Timelines
              </h2>
              <p className="text-xs sm:text-sm text-[#3A4A3E] leading-relaxed font-medium">
                Once items are inspected at our facility, refunds are disbursed directly to your original payment card and usually settle within <span className="font-medium text-[#121A14]">5–7 business days</span>.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#121A14]/5 shadow-[0_4px_24px_-6px_rgba(18,26,20,0.04)]">
              <h2 className="text-lg sm:text-xl font-medium text-[#121A14] mb-3">
                Non-Returnable Goods
              </h2>
              <p className="text-xs sm:text-sm text-[#3A4A3E] leading-relaxed font-medium">
                Perishable biological components or opened bags of fertilizer cannot be returned unless they arrived physically compromised or defective.
              </p>
            </div>
          </div>

          {/* Need Help Banner */}
          <div className="bg-[#0B6623] text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="absolute -top-24 -right-16 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 max-w-md">
              <div className="inline-flex items-center gap-2 text-[#A4C639] uppercase text-[10px] font-medium tracking-widest bg-white/10 px-3 py-1 rounded-full mb-3">
                <HelpCircle size={13} className="fill-[#A4C639]" />
                <span>CUSTOMER SUPPORT</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-medium text-white mb-2 tracking-tight">
                Still have questions?
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                Reach out to our agricultural helpdesk anytime at{" "}
                <a
                  href="mailto:support@arkinorganics.com"
                  className="text-[#A4C639] font-medium underline underline-offset-2 break-all"
                >
                  support@arkinorganics.com
                </a>
              </p>
            </div>
            <a
              href="mailto:support@arkinorganics.com"
              className="relative z-10 shrink-0 h-11 px-6 rounded-full bg-[#8BA85A] text-white text-xs sm:text-sm font-medium hover:bg-[#7a954c] transition-all inline-flex items-center gap-2 shadow-md active:scale-95"
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