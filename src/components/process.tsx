"use client";

import {
  Leaf,
  ArrowUpRight,
  ShieldCheck,
  FlaskConical,
  Sprout,
  CheckCircle2,
  Play,
} from "lucide-react";

export default function AgrigoFeaturesSection() {
  return (
    <section className="bg-[#0B6623] text-white font-sans overflow-hidden relative pt-0 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16">
        {/* Main Content: Left Text + Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-12 sm:mb-16">
          {/* Left Headline */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-[#A4C639] uppercase text-[11px] font-bold tracking-widest bg-white/10 px-3 py-1 rounded-full">
              <Leaf size={14} className="fill-[#A4C639]" />
              <span>ORGANIC FERTILIZER STANDARDS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Pure Nutrients
              <br className="hidden sm:inline" />
              for Certified Organic
              <br className="hidden sm:inline" />
              Soil Health
            </h2>

            <p className="text-white/80 text-xs sm:text-sm max-w-md mx-auto lg:mx-0 leading-relaxed">
              Complying strictly with organic input criteria, we eliminate synthetic chemicals to support vibrant soil microbiomes and safe food systems.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="#standards"
                className="inline-flex h-10 items-center justify-center rounded-full bg-[#8BA85A] px-6 text-xs sm:text-sm font-bold text-white transition-all hover:bg-[#7a954c] active:scale-95 shadow-md"
              >
                VIEW STANDARDS
              </a>
              <a
                href="#standards"
                aria-label="View standards"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#8BA85A] text-white transition-transform hover:scale-105 hover:bg-[#7a954c] active:scale-95 shadow-md"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Main Image */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative aspect-[16/10] border border-white/10">
              <img
                src="https://images.unsplash.com/uploads/141247613151541c06062/c15fb37d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Organic farming and soil health inspection"
                className="w-full h-full object-cover"
              />
              {/* Green status dot */}
              <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-[#20ae44] ring-4 ring-white/40" />
            </div>
          </div>
        </div>

        {/* Bottom Section: Video + 2×2 Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Video Preview Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden relative aspect-[4/3] group shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
                alt="Organic fertilizer processing overview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/15 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-[#0B6623] flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <Play size={20} className="fill-[#0B6623] ml-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards – 2×2 grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
            {/* 1. Verified Organic Inputs */}
            <div className="bg-white text-[#121A14] p-4 sm:p-5 rounded-2xl sm:rounded-3xl flex items-center gap-3.5 shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-[#0B6623]/10 text-[#0B6623] flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={22} strokeWidth={1.8} />
              </div>
              <h3 className="font-medium text-xs sm:text-lg leading-snug">
                Verified Organic
                <br />
                Inputs
              </h3>
            </div>

            {/* 2. Zero Synthetic Residue */}
            <div className="bg-white text-[#121A14] p-4 sm:p-5 rounded-2xl sm:rounded-3xl flex items-center gap-3.5 shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-[#0B6623]/10 text-[#0B6623] flex items-center justify-center flex-shrink-0">
                <FlaskConical size={22} strokeWidth={1.8} />
              </div>
             <h3 className="font-medium text-xs sm:text-lg leading-snug">
                Zero Synthetic
                <br />
                Residue
              </h3>
            </div>

            {/* 3. Soil Microbiome Friendly */}
            <div className="bg-white text-[#121A14] p-4 sm:p-5 rounded-2xl sm:rounded-3xl flex items-center gap-3.5 shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-[#0B6623]/10 text-[#0B6623] flex items-center justify-center flex-shrink-0">
                <Sprout size={22} strokeWidth={1.8} />
              </div>
              <h3 className="font-medium text-xs sm:text-lg leading-snug">
                Soil Microbiome
                <br />
                Friendly
              </h3>
            </div>

            {/* 4. Traceable Nutrient Origin */}
            <div className="bg-white text-[#121A14] p-4 sm:p-5 rounded-xl sm:rounded-3xl flex items-center gap-3 shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-[#0B6623]/10 text-[#0B6623] flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={22} strokeWidth={1.8} />
              </div>
            <h3 className="font-medium text-xs sm:text-lg leading-snug">
                Traceable Nutrient
                <br />
                Origin
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}