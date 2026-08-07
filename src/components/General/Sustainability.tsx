"use client";

import React from "react";
import {
  Leaf,
  Droplets,
  Sun,
  Recycle,
  TreePine,
  Download,
  ArrowRight,
  ShieldCheck,
  Sprout,
  Wind,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "80%", label: "Carbon Reduction", icon: Recycle },
  { value: "100%", label: "Organic Materials", icon: Leaf },
  { value: "50K+", label: "Trees Planted", icon: TreePine },
  { value: "0%", label: "Chemical Waste", icon: ShieldCheck },
];

const initiatives = [
  {
    title: "Zero Waste Production",
    icon: Recycle,
    description:
      "Converting 100% of organic waste into valuable fertilizer through closed-loop systems.",
    accent: "bg-[#E8F5E9] text-[#2E7D32]",
  },
  {
    title: "Renewable Energy",
    icon: Sun,
    description:
      "Our facilities run on solar and wind energy, reducing dependence on fossil fuels.",
    accent: "bg-[#FFF8E1] text-[#F9A825]",
  },
  {
    title: "Water Conservation",
    icon: Droplets,
    description:
      "Advanced systems that cut water usage by 60% while maintaining soil moisture.",
    accent: "bg-[#E3F2FD] text-[#1565C0]",
  },
];

const processes = [
  {
    step: "01",
    title: "Organic Waste Collection",
    description: "Systematic collection and sorting of pure organic materials.",
    icon: Recycle,
  },
  {
    step: "02",
    title: "Natural Decomposition",
    description: "Controlled environment for optimal microbial breakdown.",
    icon: Sprout,
  },
  {
    step: "03",
    title: "Quality Testing",
    description: "Rigorous lab testing to guarantee purity and performance.",
    icon: ShieldCheck,
  },
  {
    step: "04",
    title: "Eco-Friendly Packaging",
    description: "Sustainable packaging designed for minimal environmental impact.",
    icon: Leaf,
  },
];

export default function Sustainability() {
  return (
    <main className="bg-white text-[#1A2B1C] font-sans">
      {/* Hero */}
      <section className="relative bg-[#f3fbf4] overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#2E7D32]/8 pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-[#A8C96A]/15 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D8E8DB] text-[#2E7D32] text-[12px] font-medium mb-6 shadow-sm">
            <Leaf className="w-3.5 h-3.5" />
            Eco-Friendly Farming
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1A2B1C] leading-tight mb-5">
            Cultivating a
            <span className="block text-[#2E7D32]">Sustainable Future</span>
          </h1>

          <p className="text-[15px] text-[#5A6B5C] max-w-xl mx-auto mb-9 leading-relaxed">
            Pioneering environmental stewardship through innovative agricultural
            practices and a long-term commitment to the planet.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#2E7D32] text-white text-[14px] font-semibold hover:bg-[#256B29] transition-colors"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/sustainability-report.pdf"
              download
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-white border border-[#D8E8DB] text-[#1A2B1C] text-[14px] font-semibold hover:bg-[#F7F9F6] transition-colors"
            >
              Download Report
              <Download className="w-4 h-4" />
            </a>
          </div>

          {/* Illustration row */}
          <div className="mt-14 flex items-center justify-center gap-6 sm:gap-10">
            {[Leaf, TreePine, Sprout, Wind, Sun].map((Icon, i) => (
              <div
                key={i}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-[#E4EAE5] shadow-sm flex items-center justify-center text-[#2E7D32]"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.6} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 sm:py-16 border-b border-[#E4EAE5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-[#F7F9F6] rounded-2xl border border-[#E4EAE5] p-5 text-center"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-[#E4EAE5] text-[#2E7D32] mb-3">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <p className="text-2xl font-bold text-[#1A2B1C] mb-0.5">
                    {stat.value}
                  </p>
                  <p className="text-[13px] text-[#5A6B5C]">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-11">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E7D32]/8 text-[#2E7D32] text-[12px] font-medium mb-3">
              <Leaf className="w-3.5 h-3.5" />
              Our Impact
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A2B1C] mb-3">
              Initiatives That Make a Difference
            </h2>
            <p className="text-[14px] text-[#5A6B5C] leading-relaxed">
              Practical solutions we apply every day to reduce impact and
              regenerate the land.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {initiatives.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border border-[#E4EAE5] p-6 hover:shadow-md transition-shadow"
                >
                  {/* Illustration block */}
                  <div
                    className={`w-full h-36 rounded-xl ${item.accent} flex items-center justify-center mb-5`}
                  >
                    <Icon className="w-12 h-12" strokeWidth={1.4} />
                  </div>

                  <h3 className="text-[16px] font-semibold text-[#1A2B1C] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#5A6B5C] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 bg-[#F7F9F6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-11">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E7D32]/8 text-[#2E7D32] text-[12px] font-medium mb-3">
              <TreePine className="w-3.5 h-3.5" />
              Our Process
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A2B1C] mb-3">
              From Waste to Living Soil
            </h2>
            <p className="text-[14px] text-[#5A6B5C]">
              A simple, transparent process designed for purity and impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processes.map((process) => {
              const Icon = process.icon;
              return (
                <div
                  key={process.step}
                  className="bg-white rounded-2xl border border-[#E4EAE5] p-5 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F0F7F1] text-[#2E7D32] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#2E7D32] tracking-wider">
                    STEP {process.step}
                  </span>
                  <h3 className="text-[15px] font-semibold text-[#1A2B1C] mt-1.5 mb-2">
                    {process.title}
                  </h3>
                  <p className="text-[12px] text-[#5A6B5C] leading-relaxed">
                    {process.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-[#1A5F2A] rounded-3xl p-8 sm:p-11 text-center relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#B8E0A2] text-[12px] font-medium mb-5">
                <Download className="w-3.5 h-3.5" />
                Impact Report 2025
              </div>

              <h2 className="text-2xl sm:text-[28px] font-bold text-white mb-3">
                Join Us in Building a
                <span className="block text-[#A8C96A]">Sustainable Tomorrow</span>
              </h2>

              <p className="text-[14px] text-white/70 max-w-md mx-auto mb-7 leading-relaxed">
                Download our full sustainability report and see the concrete
                steps we take to protect soil, water, and biodiversity.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/sustainability-report.pdf"
                  download
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-white text-[#1A5F2A] text-[14px] font-semibold hover:bg-[#F4F7F5] transition-colors"
                >
                  Download Report
                  <Download className="w-4 h-4" />
                </a>
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-white/10 border border-white/20 text-white text-[14px] font-semibold hover:bg-white/15 transition-colors"
                >
                  Read Stories
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}