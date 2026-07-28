import React from "react";
import { ArrowRight, Leaf, Beaker, Sprout } from "lucide-react";

export default function PremiumOrganicScience() {
  return (
    <section className="bg-white text-[#111C15] font-sans selection:bg-[#1E3F2D] selection:text-white">
      
      {/* ── HERO ──────────────────────────────────────────────── */}
      <div className="max-w-360 mx-auto px-6 sm:px-12 lg:px-20 pt-28 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          
          <div className="lg:col-span-8 space-y-7">
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#8B7355]">
              01 — Advanced Agronomy
            </p>
            <h1 className="text-[2.75rem] sm:text-5xl lg:text-[4.75rem] font-serif font-light tracking-[-0.02em] text-[#111C15] leading-[1.08]">
              True yield is grown. <br />
              <span className="italic text-[#1E3F2D]">Never manufactured.</span>
            </h1>
          </div>
          
          <div className="lg:col-span-4 lg:pb-3">
            <p className="text-[15px] sm:text-base text-[#546158] leading-[1.7] max-w-sm">
              Moving beyond synthetic dependencies to restore the native biological architecture of your soil. A premium humic framework for compounding generational land wealth.
            </p>
          </div>
          
        </div>
      </div>

      {/* ── PANORAMIC VISUAL ───────────────────────────────────── */}
      <div className="max-w-360 mx-auto px-6 sm:px-12 lg:px-20">
        <div className="w-full aspect-21/9 sm:aspect-3/1 overflow-hidden bg-[#F4F6F4]">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600" 
            alt="Rich organic topsoil" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ── 3 PILLARS ──────────────────────────────────────────── */}
      <div className="border-b border-[#E8ECE9]">
        <div className="max-w-360 mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            
            {[
              {
                num: "01",
                icon: Leaf,
                title: "Microbial Genesis",
                desc: "We introduce a highly concentrated humic matrix that awakens dormant beneficial fungi. This acts as a secondary digestive system for the crop, breaking down locked minerals."
              },
              {
                num: "02",
                icon: Beaker,
                title: "Salt Detoxification",
                desc: "Decades of synthetic NPK application leave toxic salt residues. Our organic compounds buffer these salts, restoring the soil’s natural pH and structural porosity."
              },
              {
                num: "03",
                icon: Sprout,
                title: "Cellular Resilience",
                desc: "By providing a slow, bio-available nutrient drip, plants develop thicker cell walls. This naturally increases resistance to pests, disease, and extreme drought stress."
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`py-16 lg:py-20 space-y-8 ${
                  i === 0 
                    ? "md:pr-12 lg:pr-16" 
                    : i === 1 
                      ? "md:px-12 lg:px-16 border-y md:border-y-0 md:border-x border-[#E8ECE9]" 
                      : "md:pl-12 lg:pl-16"
                }`}
              >
                <span className="block text-xl font-serif text-[#D8DED9]">{item.num}</span>
                
                <div className="space-y-5">
                  <item.icon className="w-4.5 h-4.5 text-[#1E3F2D]" strokeWidth={1.5} />
                  <h3 className="text-lg sm:text-xl font-serif text-[#111C15] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] text-[#546158] leading-[1.7]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ── SCIENCE DEEP-DIVE ──────────────────────────────────── */}
      <div className="max-w-360 mx-auto px-6 sm:px-12 lg:px-20 py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-light text-[#111C15] leading-[1.2] tracking-tight">
                Replacing synthetic dependency with{" "}
                <span className="italic text-[#1E3F2D]">biological autonomy.</span>
              </h2>
              
              <div className="space-y-5 max-w-lg">
                <p className="text-[15.5px] text-[#546158] leading-[1.75]">
                  Chemical fertilizers force artificial growth by bypassing the soil ecosystem entirely. Over time, this sterilizes the earth, turning rich soil into mere dirt that requires increasing amounts of chemicals to yield the same result.
                </p>
                <p className="text-[15.5px] text-[#546158] leading-[1.75]">
                  Our approach is fundamentally different. We feed the subterranean biome. When the microbial life flourishes, the soil begins to fix its own nitrogen from the atmosphere and mine its own phosphorus. The land heals itself.
                </p>
              </div>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-3 text-[12px] font-medium tracking-[0.16em] uppercase text-[#111C15]"
            >
              <span className="pb-0.75 border-b border-[#111C15]">
                Read the Clinical Whitepaper
              </span>
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
            </a>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-4/5 bg-[#F4F6F4] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0" 
                alt="Macro view of a healthy plant leaf" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Metric Card */}
            <div className="absolute -left-3 -bottom-5 sm:-left-8 sm:-bottom-8 bg-white p-6 sm:p-7 border border-[#E8ECE9] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] max-w-57.5">
              <span className="block text-[10px] font-medium tracking-[0.18em] uppercase text-[#8B7355] mb-2.5">
                Scientific Metric
              </span>
              <span className="block text-[2rem] font-serif text-[#111C15] leading-none mb-2">
                20×
              </span>
              <span className="block text-[13px] text-[#546158] leading-relaxed">
                Humic organic matter can retain up to 20 times its weight in pure water.
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ── FINAL METRICS ──────────────────────────────────────── */}
      <div className="border-t border-[#E8ECE9] bg-[#FAFBFA]">
        <div className="max-w-360 mx-auto px-6 sm:px-12 lg:px-20 py-18 sm:py-22">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            
            {[
              { value: "+420%", label: "Mycorrhizal Growth" },
              { value: "−35%", label: "Irrigation Required" },
              { value: "100%", label: "Synthetic Free" },
              { value: "5 YR", label: "Compounding Soil Equity" },
            ].map((item, i) => (
              <div key={i} className="space-y-2.5 text-center sm:text-left">
                <span className="block text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-light text-[#1E3F2D] tracking-tight">
                  {item.value}
                </span>
                <span className="block text-[11px] font-medium tracking-[0.16em] uppercase text-[#546158]">
                  {item.label}
                </span>
              </div>
            ))}

          </div>
        </div>
      </div>

    </section>
  );
}