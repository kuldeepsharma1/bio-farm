import { Metadata } from "next";
import React from "react";
import { Truck, Package, Clock, Globe, HelpCircle, BadgeCheck } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL!),
  title: "Shipping Information | Arkin Organics",
  description:
    "Get detailed information about our shipping policies, delivery timelines, coverage areas, and handling procedures at Arkin Organics.",
};

export default function ShippingInfo() {
  return (
    <main className="min-h-screen bg-white text-[#1A2B1C] font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-[#2E7D32] bg-[#F0F7F1] border border-[#D8E8DB] px-3 py-1 rounded-full mb-4">
            <Truck className="w-3.5 h-3.5" />
            Policy
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#1A2B1C] tracking-tight mb-3">
            Shipping Information
          </h1>
          <p className="text-[15px] font-medium text-[#5A6B5C] leading-relaxed">
            Everything you need to know about delivery timelines, costs, and coverage.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-9">
          {/* Our Commitment */}
          <section>
            <h2 className="text-[17px] font-semibold text-[#1A2B1C] mb-2.5 flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-[#2E7D32]" />
              Our Commitment
            </h2>
            <p className="text-[14px] font-medium text-[#4A5C4C] leading-relaxed">
              At Arkin Organics, we are committed to delivering our high-quality organic
              fertilizers in a timely and environmentally responsible manner. Every
              shipment is handled with care to ensure your products arrive fresh and ready
              for use.
            </p>
          </section>

          {/* Shipping Options */}
          <section>
            <h2 className="text-[17px] font-semibold text-[#1A2B1C] mb-3 flex items-center gap-2">
              <Package className="w-4 h-4 text-[#2E7D32]" />
              Shipping Options
            </h2>
            <ul className="space-y-2.5">
              {[
                { title: "Standard Shipping", detail: "5–7 business days" },
                { title: "Expedited Shipping", detail: "2–3 business days" },
                { title: "Local Delivery for Bulk Orders", detail: "Available in select regions" },
              ].map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 text-[14px] font-medium text-[#4A5C4C]"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2E7D32] shrink-0" />
                  <span>
                    <span className="font-semibold text-[#1A2B1C]">{item.title}</span>
                    {" — "}
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Processing Times */}
          <section>
            <h2 className="text-[17px] font-semibold text-[#1A2B1C] mb-2.5 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#2E7D32]" />
              Processing Times
            </h2>
            <p className="text-[14px] font-medium text-[#4A5C4C] leading-relaxed">
              Orders are typically processed within{" "}
              <span className="font-semibold text-[#1A2B1C]">1–2 business days</span>. You
              will receive a confirmation email with tracking information once your order
              has been shipped.
            </p>
          </section>

          {/* Shipping Costs */}
          <section>
            <h2 className="text-[17px] font-semibold text-[#1A2B1C] mb-2.5">
              Shipping Costs
            </h2>
            <p className="text-[14px] font-medium text-[#4A5C4C] leading-relaxed">
              Shipping costs are calculated at checkout based on the weight of your order
              and destination. Orders over{" "}
              <span className="font-semibold text-[#1A2B1C]">$100</span> qualify for free
              standard shipping.
            </p>
          </section>

          {/* International Shipping */}
          <section>
            <h2 className="text-[17px] font-semibold text-[#1A2B1C] mb-2.5 flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#2E7D32]" />
              International Shipping
            </h2>
            <p className="text-[14px] font-medium text-[#4A5C4C] leading-relaxed">
              Currently, we only ship within the United States. We are working to expand
              our reach and hope to serve international customers soon.
            </p>
          </section>

          {/* Need Help */}
          <section className="bg-[#F7F9F6] border border-[#E4EAE5] rounded-2xl p-5 sm:p-6">
            <h2 className="text-[17px] font-semibold text-[#1A2B1C] mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#2E7D32]" />
              Need Help?
            </h2>
            <p className="text-[14px] font-medium text-[#4A5C4C] leading-relaxed">
              If you have any questions about your order or shipping options, contact our
              customer service team at{" "}
              <a
                href="mailto:support@arkinorganics.com"
                className="text-[#2E7D32] font-semibold hover:underline underline-offset-2"
              >
                support@arkinorganics.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}