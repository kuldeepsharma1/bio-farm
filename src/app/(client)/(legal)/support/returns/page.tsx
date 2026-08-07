import { Metadata } from "next";
import React from "react";
import { RefreshCcw, Package, Clock, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL!),
  title: "Return & Refund Policy | Arkin Organics",
  description:
    "Read Arkin Organics' return and refund policy. Understand the conditions for returning products, requesting refunds, and resolving order issues.",
};

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-white text-[#1A2B1C] font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-[#2E7D32] bg-[#F0F7F1] border border-[#D8E8DB] px-3 py-1 rounded-full mb-4">
            <RefreshCcw className="w-3.5 h-3.5" />
            Policy
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#1A2B1C] tracking-tight mb-3">
            Returns & Refunds
          </h1>
          <p className="text-[15px] font-medium text-[#5A6B5C] leading-relaxed">
            Clear and fair guidelines for returning products and receiving refunds.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-9">
          {/* Our Guarantee */}
          <section>
            <h2 className="text-[17px] font-semibold text-[#1A2B1C] mb-2.5 flex items-center gap-2">
              <Package className="w-4 h-4 text-[#2E7D32]" />
              Our Guarantee
            </h2>
            <p className="text-[14px] font-medium text-[#4A5C4C] leading-relaxed">
              At Arkin Organics, customer satisfaction is our priority. If you&apos;re
              not satisfied with your purchase, we&apos;re here to help with a fair and
              simple return policy.
            </p>
          </section>

          {/* Return Window */}
          <section>
            <h2 className="text-[17px] font-semibold text-[#1A2B1C] mb-2.5 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#2E7D32]" />
              Return Window
            </h2>
            <p className="text-[14px] font-medium text-[#4A5C4C] leading-relaxed">
              Returns are accepted within <span className="font-semibold text-[#1A2B1C]">30 days</span> of
              purchase. Items must be unused and in their original packaging to
              qualify for a full refund.
            </p>
          </section>

          {/* How to Return */}
          <section>
            <h2 className="text-[17px] font-semibold text-[#1A2B1C] mb-3">
              How to Return
            </h2>
            <ol className="space-y-2.5">
              {[
                <>
                  Email us at{" "}
                  <a
                    href="mailto:returns@arkinorganics.com"
                    className="text-[#2E7D32] font-semibold hover:underline underline-offset-2"
                  >
                    returns@arkinorganics.com
                  </a>{" "}
                  with your order number.
                </>,
                "We will send you a return authorization and shipping instructions.",
                "Package your items securely and ship them back using the provided label.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[14px] font-medium text-[#4A5C4C] leading-relaxed"
                >
                  <span className="shrink-0 w-6 h-6 rounded-full bg-[#F0F7F1] text-[#2E7D32] text-[12px] font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Refunds */}
          <section>
            <h2 className="text-[17px] font-semibold text-[#1A2B1C] mb-2.5">
              Refunds
            </h2>
            <p className="text-[14px] font-medium text-[#4A5C4C] leading-relaxed">
              Once we receive your return and inspect the items, we will issue a
              refund to your original payment method. Refunds typically take{" "}
              <span className="font-semibold text-[#1A2B1C]">5–7 business days</span> to
              process.
            </p>
          </section>

          {/* Non-Returnable */}
          <section>
            <h2 className="text-[17px] font-semibold text-[#1A2B1C] mb-2.5">
              Non-Returnable Items
            </h2>
            <p className="text-[14px] font-medium text-[#4A5C4C] leading-relaxed">
              Perishable items or opened bags of fertilizer are not eligible for
              return. Please contact us if your order arrived damaged or
              defective — we will resolve it promptly.
            </p>
          </section>

          {/* Need Help */}
          <section className="bg-[#F7F9F6] border border-[#E4EAE5] rounded-2xl p-5 sm:p-6">
            <h2 className="text-[17px] font-semibold text-[#1A2B1C] mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#2E7D32]" />
              Need Help?
            </h2>
            <p className="text-[14px] font-medium text-[#4A5C4C] leading-relaxed">
              Questions about returns or refunds? Contact us at{" "}
              <a
                href="mailto:support@arkinorganics.com"
                className="text-[#2E7D32] font-semibold hover:underline underline-offset-2"
              >
                support@arkinorganics.com
              </a>
              . We&apos;re happy to assist.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}