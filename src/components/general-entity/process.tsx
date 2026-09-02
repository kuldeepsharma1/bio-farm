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
  <section className="bg-[#1A5F2A] text-white font-sans overflow-hidden relative pt-10 sm:pt-16 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top Header & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 sm:mb-20">
          {/* Left Title */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-[#A8C96A] uppercase text-[11px] font-semibold tracking-widest">
              <Leaf size={14} className="fill-[#A8C96A]" />
              <span>WORK PROCESS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight text-white/95 leading-[1.2]">
              Our Simple and
              <br className="hidden sm:block" />
              Effective Organic
              <br className="hidden sm:block" />
              Fertilizer Process
            </h2>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden shadow-xl relative aspect-16/10 border border-white/10">
              <img
                src="https://images.unsplash.com/uploads/141247613151541c06062/c15fb37d?q=80&w=2070&auto=format&fit=crop"
                alt="Organic fertilizer processing inspection"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-[#7BC67E] ring-[3px] ring-white/30" />
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Soft connecting line (desktop) */}
          <div className="hidden lg:block absolute top-13 left-[12%] right-[12%] h-px bg-linear-to-r from-transparent via-white/25 to-transparent z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
            {/* Step 01 */}
            <div className="flex flex-col items-center text-center group">
              <span className="text-[#A8C96A]/90 text-[11px] font-semibold tracking-wider mb-4">
                STEP — 01
              </span>

              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm text-[#C5D99A] flex items-center justify-center mb-5 border border-white/10 group-hover:bg-white/15 group-hover:scale-105 transition-all duration-300">
                <MapPin size={24} strokeWidth={1.7} />
              </div>

              <h3 className="font-semibold text-[15px] sm:text-base mb-2.5 text-white/95">
                Sourcing Inputs
              </h3>
              <p className="text-white/70 text-[13px] leading-relaxed max-w-55">
                Collecting verified organic matter strictly meeting fertilizer safety and purity criteria.
              </p>
            </div>

            {/* Step 02 */}
            <div className="flex flex-col items-center text-center group">
              <span className="text-[#A8C96A]/90 text-[11px] font-semibold tracking-wider mb-4">
                STEP — 02
              </span>

              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm text-[#C5D99A] flex items-center justify-center mb-5 border border-white/10 group-hover:bg-white/15 group-hover:scale-105 transition-all duration-300">
                <Sprout size={24} strokeWidth={1.7} />
              </div>

              <h3 className="font-semibold text-[15px] sm:text-base mb-2.5 text-white/95">
                Natural Composting
              </h3>
              <p className="text-white/70 text-[13px] leading-relaxed max-w-55">
                Decomposing raw elements naturally without synthetic additives to cultivate rich microbiomes.
              </p>
            </div>

            {/* Step 03 */}
            <div className="flex flex-col items-center text-center group">
              <span className="text-[#A8C96A]/90 text-[11px] font-semibold tracking-wider mb-4">
                STEP — 03
              </span>

              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm text-[#C5D99A] flex items-center justify-center mb-5 border border-white/10 group-hover:bg-white/15 group-hover:scale-105 transition-all duration-300">
                <HeartHandshake size={24} strokeWidth={1.7} />
              </div>

              <h3 className="font-semibold text-[15px] sm:text-base mb-2.5 text-white/95">
                Nutrient Blending
              </h3>
              <p className="text-white/70 text-[13px] leading-relaxed max-w-55">
                Refining and balancing pure organic elements to maximize soil health and crop nutrition.
              </p>
            </div>

            {/* Step 04 */}
            <div className="flex flex-col items-center text-center group">
              <span className="text-[#A8C96A]/90 text-[11px] font-semibold tracking-wider mb-4">
                STEP — 04
              </span>

              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm text-[#C5D99A] flex items-center justify-center mb-5 border border-white/10 group-hover:bg-white/15 group-hover:scale-105 transition-all duration-300">
                <CheckCircle2 size={24} strokeWidth={1.7} />
              </div>

              <h3 className="font-semibold text-[15px] sm:text-base mb-2.5 text-white/95">
                Quality Verification
              </h3>
              <p className="text-white/70 text-[13px] leading-relaxed max-w-55">
                Conducting strict residue and standard tests before packaging safe fertilizer batches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}