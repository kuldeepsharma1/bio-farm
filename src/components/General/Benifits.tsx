"use client";

import {
  TrendingUp,
  Leaf,
  Droplets,
  ShieldCheck,
} from "lucide-react";
import { FaSteam } from "react-icons/fa";
const benefits = [
  {
    title: "Better Root Growth",
    desc: "Encourages deeper and denser root systems for improved nutrient uptake.",
    icon: FaSteam,
  },
  {
    title: "Higher Yields",
    desc: "Supports consistent increases in harvest volume and crop quality.",
    icon: TrendingUp,
  },
  {
    title: "Improved Soil Fertility",
    desc: "Rebuilds organic matter and mineral balance depleted by intensive farming.",
    icon: Leaf,
  },
  {
    title: "Better Water Retention",
    desc: "Creates soil structure that holds moisture longer during dry periods.",
    icon: Droplets,
  },
  {
    title: "Reduced Chemical Use",
    desc: "Lowers reliance on synthetic fertilizers while maintaining performance.",
    icon: ShieldCheck,
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#F7F9F6] px-6 py-20 lg:py-28 lg:px-12 border-t border-[#E4EAE5]">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-18">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-[#1A2B1C] mb-4">
            Benefits & Results
          </h2>
          <p className="text-[#5A6B5C] max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Measurable improvements that growers see across seasons.
          </p>
        </div>

        {/* Top Row – 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-5 lg:mb-6">
          {benefits.slice(0, 3).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 sm:p-8 bg-white rounded-2xl border border-[#E6EBE7]
                  shadow-[0_2px_12px_-4px_rgba(26,43,28,0.04)]
                  hover:shadow-[0_8px_28px_-6px_rgba(26,43,28,0.07)]
                  hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#2E7D32]/8 text-[#2E7D32] flex items-center justify-center mb-5 border border-[#2E7D32]/12">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="text-[17px] font-semibold text-[#1A2B1C] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#4A5C4C] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Row – 2 Cards Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 max-w-3xl mx-auto">
          {benefits.slice(3).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx + 3}
                className="p-7 sm:p-8 bg-white rounded-2xl border border-[#E6EBE7]
                  shadow-[0_2px_12px_-4px_rgba(26,43,28,0.04)]
                  hover:shadow-[0_8px_28px_-6px_rgba(26,43,28,0.07)]
                  hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#2E7D32]/8 text-[#2E7D32] flex items-center justify-center mb-5 border border-[#2E7D32]/12">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="text-[17px] font-semibold text-[#1A2B1C] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#4A5C4C] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}