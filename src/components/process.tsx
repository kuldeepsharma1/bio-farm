"use client";

import {
  Leaf,
  MapPin,
  Sprout,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

export default function Process() {
  return (
    <section className="bg-[#0B6623] text-white font-sans overflow-hidden relative pt-12 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top Header & Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 sm:mb-20">
          {/* Left Title & Subtitle */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-[#A4C639] uppercase text-[11px] font-bold tracking-widest bg-white/10 px-3 py-1 rounded-full">
              <Leaf size={14} className="fill-[#A4C639]" />
              <span>WORK PROCESS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Our Simple and
              <br className="hidden sm:inline" />
              Effective Organic
              <br className="hidden sm:inline" />
              Fertilizer Process
            </h2>
          </div>

          {/* Right Main Image */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative aspect-[16/10] border border-white/10">
              <img
                src="https://images.unsplash.com/uploads/141247613151541c06062/c15fb37d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Organic fertilizer processing inspection"
                className="w-full h-full object-cover"
              />
              {/* Green status dot */}
              <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-[#20ae44] ring-4 ring-white/40" />
            </div>
          </div>
        </div>

        {/* Bottom Process Steps Grid with Connecting Line Effect */}
        <div className="relative">
          {/* Horizontal connecting line for large screens */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] border-t-2 border-dotted border-white/30 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {/* Step 01 */}
            <div className="flex flex-col items-center text-center group">
              <div className="text-[#A4C639] text-xs font-bold tracking-wider mb-3">
                STEP - [01]
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#8BA85A] text-white flex items-center justify-center shadow-lg mb-5 group-hover:scale-105 transition-transform">
                <MapPin size={28} strokeWidth={1.8} />
              </div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-white">
                Sourcing Inputs
              </h3>
              <p className="text-white/80 text-xs leading-relaxed max-w-xs">
                Collecting verified organic matter strictly meeting fertilizer safety and purity criteria.
              </p>
            </div>

            {/* Step 02 */}
            <div className="flex flex-col items-center text-center group">
              <div className="text-[#A4C639] text-xs font-bold tracking-wider mb-3">
                STEP - [02]
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#8BA85A] text-white flex items-center justify-center shadow-lg mb-5 group-hover:scale-105 transition-transform">
                <Sprout size={28} strokeWidth={1.8} />
              </div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-white">
                Natural Composting
              </h3>
              <p className="text-white/80 text-xs leading-relaxed max-w-xs">
                Decomposing raw elements naturally without synthetic additives to cultivate rich microbiomes.
              </p>
            </div>

            {/* Step 03 */}
            <div className="flex flex-col items-center text-center group">
              <div className="text-[#A4C639] text-xs font-bold tracking-wider mb-3">
                STEP - [03]
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#8BA85A] text-white flex items-center justify-center shadow-lg mb-5 group-hover:scale-105 transition-transform">
                <HeartHandshake size={28} strokeWidth={1.8} />
              </div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-white">
                Nutrient Blending
              </h3>
              <p className="text-white/80 text-xs leading-relaxed max-w-xs">
                Refining and balancing pure organic elements to maximize soil health and crop nutrition.
              </p>
            </div>

            {/* Step 04 */}
            <div className="flex flex-col items-center text-center group">
              <div className="text-[#A4C639] text-xs font-bold tracking-wider mb-3">
                STEP - [04]
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#8BA85A] text-white flex items-center justify-center shadow-lg mb-5 group-hover:scale-105 transition-transform">
                <CheckCircle2 size={28} strokeWidth={1.8} />
              </div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-white">
                Quality Verification
              </h3>
              <p className="text-white/80 text-xs leading-relaxed max-w-xs">
                Conducting strict residue and standard tests before packaging safe fertilizer batches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}