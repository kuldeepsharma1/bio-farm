import React from "react";
import { ArrowRight, Leaf, Beaker, Sprout } from "lucide-react";

export default function PremiumOrganicScience() {
  return (
    <section className="bg-[#FAFBFA] text-[#111C15] font-sans selection:bg-[#1E3F2D] selection:text-white">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-24 lg:pt-44 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-end">

          <div className="lg:col-span-8 space-y-8">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#8B7355]">
              01 — Advanced Agronomy
            </p>
            <h1 className="text-[2.9rem] sm:text-[3.5rem] lg:text-[4.9rem] font-serif font-light tracking-[-0.025em] text-[#111C15] leading-[1.05]">
              True yield is grown.
              <br />
              <span className="italic text-[#1E3F2D]">Never manufactured.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-4">
            <p className="text-[15px] sm:text-[16px] text-[#546158] leading-[1.75] max-w-[20rem]">
              Moving beyond synthetic dependencies to restore the native biological architecture of your soil. A premium humic framework for compounding generational land wealth.
            </p>
          </div>

        </div>
      </div>

      {/* ── FULL-BLEED IMAGE ───────────────────────────────────── */}
      <div className="w-full">
        <div className="relative w-full aspect-[2.4/1] sm:aspect-[3/1] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=85&w=2000"
            alt="Rich organic topsoil"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFBFA]/30 via-transparent to-transparent" />
        </div>
      </div>

      {/* ── 3 PILLARS ──────────────────────────────────────────── */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 border-x border-[#E5E9E6]">

          {[
            {
              num: "01",
              icon: Leaf,
              title: "Microbial Genesis",
              desc: "A concentrated humic matrix that reawakens dormant beneficial fungi — functioning as a secondary digestive system that unlocks minerals already locked in the soil.",
            },
            {
              num: "02",
              icon: Beaker,
              title: "Salt Detoxification",
              desc: "Decades of synthetic NPK leave toxic salt residues. Our organic compounds buffer those salts, restoring natural pH and rebuilding structural porosity.",
            },
            {
              num: "03",
              icon: Sprout,
              title: "Cellular Resilience",
              desc: "A slow, bio-available nutrient drip encourages thicker cell walls, giving plants natural resistance to pests, disease, and prolonged drought stress.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`
                relative py-20 lg:py-24 px-8 lg:px-12
                ${i !== 2 ? "border-b md:border-b-0 md:border-r border-[#E5E9E6]" : "border-b md:border-b-0 border-[#E5E9E6]"}
              `}
            >
              <span className="absolute top-10 left-8 lg:left-12 text-[13px] font-medium tracking-[0.2em] text-[#C5CBC6]">
                {item.num}
              </span>

              <div className="mt-10 space-y-6">
                <item.icon className="w-5 h-5 text-[#1E3F2D]" strokeWidth={1.4} />
                <h3 className="text-xl font-serif text-[#111C15] leading-snug">
                  {item.title}
                </h3>
                <p className="text-[14.5px] text-[#546158] leading-[1.75] max-w-[18rem]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ── SCIENCE DEEP-DIVE ──────────────────────────────────── */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16 py-28 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          {/* Image column */}
          <div className="lg:col-span-5 relative order-1">
            <div className="aspect-[4/5] overflow-hidden bg-[#E8ECE9]">
              <img
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1400&auto=format&fit=crop"
                alt="Healthy plant leaf macro"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Metric card */}
            <div className="absolute -right-4 sm:-right-8 -bottom-8 bg-white border border-[#E5E9E6] p-7 sm:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] max-w-[15rem]">
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#8B7355] mb-3">
                Scientific Metric
              </p>
              <p className="text-[2.1rem] font-serif text-[#111C15] leading-none mb-2.5">
                20×
              </p>
              <p className="text-[13px] text-[#546158] leading-relaxed">
                Humic organic matter retains up to twenty times its weight in pure water.
              </p>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-7 order-2 lg:pl-10 space-y-10">
            <div className="space-y-7 max-w-xl">
              <h2 className="text-[2rem] sm:text-[2.4rem] lg:text-[2.75rem] font-serif font-light text-[#111C15] leading-[1.18] tracking-tight">
                Replacing synthetic dependency with{" "}
                <span className="italic text-[#1E3F2D]">biological autonomy.</span>
              </h2>

              <div className="space-y-5">
                <p className="text-[15.5px] text-[#546158] leading-[1.8]">
                  Chemical fertilizers force artificial growth by completely bypassing the soil ecosystem. Over time this sterilizes the earth, converting rich soil into inert dirt that requires ever-increasing chemical inputs just to maintain yield.
                </p>
                <p className="text-[15.5px] text-[#546158] leading-[1.8]">
                  We take the opposite path. We feed the subterranean biome. When microbial life flourishes, the soil begins fixing its own nitrogen from the atmosphere and mining its own phosphorus. The land starts to heal itself.
                </p>
              </div>
            </div>

            <a
              href="#"
              className="group inline-flex items-center gap-3.5 text-[12px] font-medium tracking-[0.18em] uppercase text-[#111C15]"
            >
              <span className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-[#111C15] after:transition-all group-hover:after:bg-[#1E3F2D] group-hover:text-[#1E3F2D]">
                Read the Clinical Whitepaper
              </span>
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
                strokeWidth={1.6}
              />
            </a>
          </div>

        </div>
      </div>

      {/* ── FINAL METRICS ──────────────────────────────────────── */}
      <div className="border-t border-[#E5E9E6] bg-white">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            {[
              { value: "+420%", label: "Mycorrhizal Growth" },
              { value: "−35%", label: "Irrigation Required" },
              { value: "100%", label: "Synthetic Free" },
              { value: "5 YR", label: "Compounding Soil Equity" },
            ].map((item, i) => (
              <div key={i} className="space-y-3 text-center sm:text-left">
                <span className="block text-[2.4rem] sm:text-[2.8rem] lg:text-[3rem] font-serif font-light text-[#1E3F2D] tracking-tight leading-none">
                  {item.value}
                </span>
                <span className="block text-[11px] font-medium tracking-[0.18em] uppercase text-[#6B756E]">
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