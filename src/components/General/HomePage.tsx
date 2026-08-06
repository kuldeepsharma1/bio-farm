"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Droplets,
  Wind,
  Sprout,
  Star,
  ShieldCheck,
  Building2,
  Users,
  Store,
  Globe,
  Leaf,
  TreePine,
  Wheat,
  Carrot,
  Apple,
  Flower2,
  Activity,
  ArrowUpRight,
  Play,
  FlaskConical,
  CheckCircle2,
} from "lucide-react";

import Feature from "@/components/general/Feature";
import Methodology from "@/components/general/Methodology";
import FaqPage from "@/components/general/Faq";
import ContactPage from "@/components/general/Contact";
import Process from "../process";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldAnimate = isMounted ? !isMobile : true;

  return (
    <main className="min-h-screen bg-[#F5F4F0] font-sans text-[#121A14] selection:bg-[#FDBA21] selection:text-black overflow-hidden">

      {/* ================================================================ */}
      {/* 1. HERO                                                         */}
      {/* ================================================================ */}
      <section className="relative flex min-h-dvh flex-col justify-center px-6 pt-24 pb-12 lg:px-12">
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col h-full justify-center">
          <motion.h1
            initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[18vw] sm:text-[14vw] lg:text-[140px] leading-[0.85] font-medium tracking-tight text-[#121A14] z-20"
          >
            Organic <br className="hidden sm:block" /> Fertilizers
          </motion.h1>

          <div className="mt-12 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-end relative z-20">
            <motion.div
              variants={fadeUp}
              initial={shouldAnimate ? "hidden" : "show"}
              animate="show"
              className="max-w-md lg:max-w-xs space-y-6"
            >
              <p className="text-base sm:text-sm font-medium leading-relaxed text-[#3A4A3E]">
                Science-backed biological fertilizers that restore soil health, increase yields, and reduce dependence on synthetic inputs.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="flex h-12 items-center justify-center rounded-full bg-[#20ae44] px-6 text-sm font-semibold text-white transition-all hover:bg-[#1b963a] active:scale-95">
                  Get Quote
                </button>
                <button
                  aria-label="Learn More"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#20ae44] text-white transition-transform hover:scale-105 hover:bg-[#1b963a] active:scale-95"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial={shouldAnimate ? "hidden" : "show"}
              animate="show"
              className="lg:col-start-3 space-y-6 pb-4 w-full max-w-md lg:max-w-none ml-auto"
            >
              {[
                { icon: Wind, text: "Lower Carbon Footprint" },
                { icon: Sprout, text: "Improved Soil Health" },
                { icon: Droplets, text: "Better Water Retention" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center justify-between border-b border-[#121A14]/10 pb-4 group hover:border-[#20ae44]/40 transition-colors"
                >
                  <span className="text-sm font-semibold text-[#121A14] group-hover:text-[#20ae44] transition-colors">
                    {item.text}
                  </span>
                  <item.icon size={20} className="text-[#20ae44]" />
                </motion.div>
              ))}

              <div className="pt-6 lg:pt-8 text-left lg:text-right">
                <div className="flex items-center justify-start lg:justify-end gap-1.5 text-xl font-bold">
                  4.8/5 <Star className="fill-[#FDBA21] text-[#FDBA21]" size={20} />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#3A4A3E] mt-1.5">
                  Based on 500+ reviews
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={shouldAnimate ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-[45%] lg:top-1/2 -translate-x-1/2 -translate-y-1/2 w-70 h-90 sm:w-87.5 sm:h-112.5 lg:w-120 lg:h-150 z-10 pointer-events-none"
        >
          <img
            src="./arkin-plant.png"
            alt="Healthy crops growing with organic fertilizers"
            className="w-full h-full object-cover object-bottom rounded-4xl lg:rounded-[4rem] mix-blend-multiply opacity-90"
          />
        </motion.div>
      </section>

      {/* ================================================================ */}
      {/* 2. TRUSTED BY                                                   */}
      {/* ================================================================ */}
      <section className="bg-[#F5F4F0] px-6 py-20 lg:py-28 lg:px-12 border-t border-[#E5EAE6] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 bg-[#20ae44]/4-[160px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A2B1C] mb-5">
              Trusted Across the Agricultural Chain
            </h2>
            <p className="text-[#4A5C4C] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Supporting progressive growers, distribution partners, research institutions, and certified standards with proven biological performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
            {/* Farmers */}
            <div className="md:col-span-7 bg-white p-8 sm:p-10 rounded-[2.25rem] relative overflow-hidden flex flex-col justify-between border border-[#E8EDE9] shadow-[0_4px_24px_-6px_rgba(26,43,28,0.06)] hover:shadow-[0_12px_40px_-8px_rgba(26,43,28,0.08)] hover:-translate-y-0.5 transition-all duration-400">
              <div className="absolute top-0 right-0 w-72 h-72 bg-linear-to-br from-[#20ae44]/[0.07] to-transparent rounded-full blur-3xl pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#20ae44]/10 text-[#20ae44] flex items-center justify-center mb-6 border border-[#20ae44]/15">
                  <Users size={22} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#20ae44] block mb-2.5">01 / Growers</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#121A14] mb-3 tracking-tight">Farmers & Producers</h3>
                <p className="text-sm sm:text-[15px] text-[#3A4A3E] leading-relaxed max-w-lg">
                  Enhancing soil biology, nutrient efficiency, and crop resilience across commercial acreage without synthetic dependency.
                </p>
              </div>
            </div>

            {/* Dealers */}
            <div className="md:col-span-5 bg-white p-8 sm:p-10 rounded-[2.25rem] flex flex-col justify-between border border-[#E8EDE9] shadow-[0_4px_24px_-6px_rgba(26,43,28,0.06)] hover:shadow-[0_12px_40px_-8px_rgba(26,43,28,0.08)] hover:-translate-y-0.5 transition-all duration-400">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#20ae44]/10 text-[#20ae44] flex items-center justify-center mb-6 border border-[#20ae44]/15">
                  <Store size={22} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#20ae44] block mb-2.5">02 / Distribution</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#121A14] mb-3 tracking-tight">Dealers & Suppliers</h3>
                <p className="text-sm text-[#3A4A3E] leading-relaxed">
                  Reliable networks delivering rigorously tested biological inputs with full batch traceability.
                </p>
              </div>
            </div>

            {/* Institutions */}
            <div className="md:col-span-5 bg-white p-8 sm:p-10 rounded-[2.25rem] flex flex-col justify-between border border-[#E8EDE9] shadow-[0_4px_24px_-6px_rgba(26,43,28,0.06)] hover:shadow-[0_12px_40px_-8px_rgba(26,43,28,0.08)] hover:-translate-y-0.5 transition-all duration-400">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#20ae44]/10 text-[#20ae44] flex items-center justify-center mb-6 border border-[#20ae44]/15">
                  <Building2 size={22} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#20ae44] block mb-2.5">03 / Science</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#121A14] mb-3 tracking-tight">Institutions & Labs</h3>
                <p className="text-sm text-[#3A4A3E] leading-relaxed">
                  Collaborating with universities and research centers to advance soil microbiome science.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="md:col-span-7 bg-white p-8 sm:p-10 rounded-[2.25rem] relative overflow-hidden flex flex-col justify-between border border-[#E8EDE9] shadow-[0_4px_24px_-6px_rgba(26,43,28,0.06)] hover:shadow-[0_12px_40px_-8px_rgba(26,43,28,0.08)] hover:-translate-y-0.5 transition-all duration-400">
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-linear-to-tl from-[#20ae44]/[0.07] to-transparent rounded-full blur-3xl pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#20ae44]/10 text-[#20ae44] flex items-center justify-center mb-6 border border-[#20ae44]/15">
                  <ShieldCheck size={22} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#20ae44] block mb-2.5">04 / Assurance</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#121A14] mb-3 tracking-tight">Global Certifications</h3>
                <p className="text-sm sm:text-[15px] text-[#3A4A3E] leading-relaxed max-w-lg">
                  Independently verified to meet rigorous standards for organic integrity and environmental performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. OUR PRODUCTS                                                 */}
      {/* ================================================================ */}
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

      {/* ================================================================ */}
      {/* 4. WHY CHOOSE US                                                */}
      {/* ================================================================ */}
      <section className="bg-[#F9FAF9] px-6 py-20 lg:py-28 lg:px-12 border-t border-[#E5EAE6]">
        <div className="mx-auto max-w-6xl text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A2B1C]">
            Why Choose Us
          </h2>
          <p className="mt-4 text-[#4A5C4C] max-w-2xl mx-auto text-base sm:text-lg">
            Science-backed biological solutions that improve soil health, increase yields, and support long-term sustainability.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial={shouldAnimate ? "hidden" : "show"}
          whileInView={shouldAnimate ? "show" : undefined}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          <ImageBlock src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600" />
          <FeatureBlock icon={Sprout} title="Improves Soil Health" desc="Restores microbial balance and builds long-term soil fertility naturally." />
          <ImageBlock src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1174&auto=format&fit=crop" />
          <FeatureBlock icon={Droplets} title="Better Water Retention" desc="Enhances soil structure so moisture is held longer during dry periods." />
          <ImageBlock src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1074&auto=format&fit=crop" />
          <FeatureBlock icon={Wind} title="Lower Carbon Impact" desc="Supports regenerative practices that reduce emissions and chemical dependency." />
        </motion.div>
      </section>

      {/* ================================================================ */}
      {/* 5. OUR PROCESS                                                  */}
      {/* ================================================================ */}
      <Process/>

      {/* ================================================================ */}
      {/* 6. BENEFITS / RESULTS                                           */}
      {/* ================================================================ */}
      <section className="bg-[#F9FAF9] px-6 py-20 lg:py-28 lg:px-12 border-t border-[#E5EAE6]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A2B1C] mb-5">
              Benefits & Results
            </h2>
            <p className="text-[#4A5C4C] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Measurable improvements that growers see across seasons.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {[
              { title: "Better Root Growth", desc: "Encourages deeper and denser root systems for improved nutrient uptake." },
              { title: "Higher Yields", desc: "Supports consistent increases in harvest volume and crop quality." },
              { title: "Improved Soil Fertility", desc: "Rebuilds organic matter and mineral balance depleted by intensive farming." },
              { title: "Better Water Retention", desc: "Creates soil structure that holds moisture longer during dry periods." },
              { title: "Reduced Chemical Use", desc: "Lowers reliance on synthetic fertilizers while maintaining performance." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-4xl border border-[#E8EDE9] shadow-[0_4px_20px_-6px_rgba(26,43,28,0.05)] hover:shadow-[0_10px_32px_-8px_rgba(26,43,28,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#20ae44]/10 text-[#20ae44] flex items-center justify-center mb-5 border border-[#20ae44]/15">
                  <Activity size={20} />
                </div>
                <h3 className="text-lg font-bold text-[#121A14] mb-2 tracking-tight">{item.title}</h3>
                <p className="text-sm text-[#3A4A3E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 7. SUITABLE CROPS                                               */}
      {/* ================================================================ */}
      <section className="bg-white px-6 py-20 lg:py-28 lg:px-12 border-t border-[#E5EAE6]">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A2B1C] mb-5">
              Suitable For All Crops
            </h2>
            <p className="text-[#4A5C4C] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Formulated to perform reliably across a wide range of agronomic categories and growing systems.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
            {[
              { name: "Cereals", icon: Wheat },
              { name: "Vegetables", icon: Carrot },
              { name: "Fruits", icon: Apple },
              { name: "Cash Crops", icon: Leaf },
              { name: "Flowers", icon: Flower2 },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-7 bg-[#F9FAF9] rounded-[1.75rem] border border-[#E8EDE9] flex flex-col items-center justify-center shadow-[0_4px_20px_-6px_rgba(26,43,28,0.05)] hover:shadow-[0_10px_28px_-8px_rgba(26,43,28,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#20ae44]/10 text-[#20ae44] flex items-center justify-center mb-4 border border-[#20ae44]/15">
                  <item.icon size={22} />
                </div>
                <h3 className="font-semibold text-[#121A14] text-sm tracking-tight">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 8. METRICS                                                      */}
      {/* ================================================================ */}
      <section className="bg-[#121A14] text-white px-6 py-20 lg:py-28 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { value: "15+", label: "Years in Business" },
              { value: "50K+", label: "Farmers Served" },
              { value: "200+", label: "Dealers Network" },
              { value: "25+", label: "Products" },
              { value: "12", label: "States / Countries" },
            ].map((item, idx) => (
              <div key={idx}>
                <p className="text-3xl lg:text-4xl font-bold text-[#20ae44] mb-1">{item.value}</p>
                <p className="text-xs uppercase tracking-wider text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 9. TESTIMONIALS                                                 */}
      {/* ================================================================ */}
      <section className="bg-white px-6 py-20 lg:py-28 lg:px-12 border-t border-[#E5EAE6]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A2B1C] mb-5">
              What Growers Say
            </h2>
            <p className="text-[#4A5C4C] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Real feedback from farmers, dealers, and commercial growers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                type: "Farmer",
                text: "Our vegetable yields increased by nearly 30% while the soil structure visibly improved within two seasons.",
                name: "Ramesh Kumar",
                role: "Organic Farmer",
              },
              {
                type: "Dealer",
                text: "Consistent quality and clear certifications make these products easy to recommend to progressive growers.",
                name: "Amit Patel",
                role: "Regional Agro Dealer",
              },
              {
                type: "Success Story",
                text: "We eliminated chemical burn issues on our orchard and reduced irrigation needs during dry months.",
                name: "Suresh Reddy",
                role: "Orchard Owner",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#F9FAF9] rounded-4xl border border-[#E8EDE9] flex flex-col justify-between shadow-[0_4px_20px_-6px_rgba(26,43,28,0.05)]"
              >
                <div>
                  <span className="text-[11px] font-bold text-[#20ae44] uppercase tracking-widest block mb-4">
                    {item.type}
                  </span>
                  <p className="text-sm text-[#3A4A3E] leading-relaxed mb-6">“{item.text}”</p>
                </div>
                <div className="pt-4 border-t border-[#E8EDE9]">
                  <p className="text-sm font-bold text-[#121A14]">{item.name}</p>
                  <p className="text-xs text-[#3A4A3E] mt-0.5">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 10. INDUSTRIES WE SERVE                                         */}
      {/* ================================================================ */}
      <section className="bg-[#F9FAF9] px-6 py-20 lg:py-28 lg:px-12 border-t border-[#E5EAE6]">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A2B1C] mb-5">
              Industries We Serve
            </h2>
            <p className="text-[#4A5C4C] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Specialized biological solutions for professional agricultural and horticultural operations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
            {[
              { name: "Agriculture", icon: Globe },
              { name: "Horticulture", icon: Leaf },
              { name: "Greenhouses", icon: Building2 },
              { name: "Nurseries", icon: Sprout },
              { name: "Organic Farms", icon: ShieldCheck },
              { name: "Plantations", icon: TreePine },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-[1.75rem] border border-[#E8EDE9] flex flex-col items-center justify-center shadow-[0_4px_20px_-6px_rgba(26,43,28,0.05)] hover:shadow-[0_10px_28px_-8px_rgba(26,43,28,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#20ae44]/10 text-[#20ae44] flex items-center justify-center mb-4 border border-[#20ae44]/15">
                  <item.icon size={20} />
                </div>
                <h3 className="font-semibold text-[#121A14] text-sm tracking-tight">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 11. FAQ                                                         */}
      {/* ================================================================ */}
      <FaqPage />

      {/* ================================================================ */}
      {/* 12. FINAL CTA                                                   */}
      {/* ================================================================ */}
      <section className="bg-[#121A14] text-white px-6 lg:py-28 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to Improve Your Yields?
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Partner with us for high-quality biological inputs, bulk supply, or dealership opportunities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="h-12 px-8 rounded-full bg-[#20ae44] text-sm font-semibold text-white hover:bg-[#1b963a] transition-all active:scale-95">
              Request a Quote
            </button>
            <button className="h-12 px-8 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-white hover:bg-white/15 transition-all active:scale-95">
              Become a Dealer
            </button>
            <button className="h-12 px-8 rounded-full bg-white text-[#121A14] text-sm font-semibold hover:bg-zinc-100 transition-all active:scale-95">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Optional Contact Form (hidden or place where needed) */}
      <div className="hidden">
        <ContactPage />
      </div>
    </main> 
  );
}

// --- Helper Components ---

function FeatureBlock({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col items-center justify-center text-center p-8 sm:p-10 bg-white rounded-4xl border border-[#E8EDE9] shadow-[0_4px_20px_-6px_rgba(26,43,28,0.05)] hover:shadow-[0_10px_32px_-8px_rgba(26,43,28,0.08)] transition-all duration-300 min-h-70"
    >
      <Icon size={36} className="text-[#20ae44] mb-5" />
      <h3 className="text-xl font-bold text-[#121A14] mb-3 tracking-tight">{title}</h3>
      <p className="text-sm text-[#3A4A3E] leading-relaxed max-w-xs">{desc}</p>
    </motion.div>
  );
}

function ImageBlock({ src }: { src: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="h-70 sm:h-auto min-h-70 rounded-4xl overflow-hidden relative group border border-[#E8EDE9]"
    >
      <img
        src={src}
        alt="Agriculture feature"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
    </motion.div>
  );
}