"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Minus, Plus, Shield, ShieldCheck, Sprout, ArrowRight } from "lucide-react";

export default function Feature() {
  const [selectedWeight, setSelectedWeight] = useState("2.5 kg");
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="min-h-screen bg-[#F5F4F0] text-[#121A14] font-sans px-6 lg:px-12 py-24 border-b border-[#121A14]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* ========================================================================= */}
        {/* LEFT COLUMN: Premium Editorial/Scientific Visual Display                   */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 space-y-8 relative">
          {/* Subtle accent badge indicating laboratory standards */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#839756]/30 bg-[#839756]/5 px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-[#687945]">
            <Shield size={12} className="text-[#839756]" />
            BioAg Certified Laboratory Standards
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#687945] block mb-3">
              Advanced Rhizosphere Bio-Catalyst
            </span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1]">
              Engineered soil nutrition. <br />
              <span className="italic text-[#839756]">Zero chemicals.</span>
            </h2>
          </div>

          {/* High-fidelity visual asset frame with custom asymmetric clip curves */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-112.5 bg-white rounded-[3rem] overflow-hidden shadow-sm border border-[#121A14]/5 relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=1200" 
              alt="Scientific analysis of bio-active organic soil components" 
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700" 
            />
            {/* Elegant text label inside the visual block */}
            <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/70 border border-white/40 p-5 rounded-3xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-[#121A14] rounded-xl flex items-center justify-center text-white">
                  <Sprout size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-[#121A14]">Active Catalyst</h4>
                  <p className="text-[11px] text-[#121A14]/70">Microbiome populating technology</p>
                </div>
              </div>
              <span className="text-xs font-bold bg-[#839756] text-white px-3 py-1 rounded-full">
                98% Bio-Available
              </span>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: Apple-Style Premium Configure Panel                         */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 lg:col-start-8 space-y-10">
          
          {/* Header & Meta System */}
          <div className="border-b border-[#121A14]/10 pb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex text-[#FDBA21]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs font-bold tracking-wider uppercase text-[#3A4A3E]/60">
                • 4.9 Stars (35 Peer Verified Reviews)
              </span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight text-[#121A14] mb-4">
              Premium Organic Formulation
            </h1>

            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold tracking-tight text-[#121A14]">$14.00</span>
              <span className="text-base text-[#3A4A3E]/40 line-through font-medium">$19.00</span>
              <span className="text-xs font-bold text-[#839756] uppercase tracking-wider bg-[#839756]/10 px-2.5 py-1 rounded-md ml-2">
                Save 26%
              </span>
            </div>
          </div>

          {/* Description Block */}
          <p className="text-sm text-[#3A4A3E] leading-relaxed">
            A premium, high-density biological catalyst designed to restore depleted topsoils. By transforming upcycled organic structures into balanced macro and micronutrients, it feeds the complex subterranean fungal systems essential for long-term plant performance.
          </p>

          {/* Configuration Space */}
          <div className="space-y-8">
            {/* Weight Configuration Grid */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-xs font-bold uppercase tracking-widest text-[#121A14]">
                  Select Volume (Weight)
                </label>
                <span className="text-xs font-medium text-[#3A4A3E]/60">Eco-Friendly Bags</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {["1.0 kg", "2.5 kg", "5.0 kg"].map((w) => (
                  <button 
                    key={w} 
                    onClick={() => setSelectedWeight(w)}
                    className={`h-14 rounded-2xl text-xs font-bold tracking-wide uppercase transition-all border flex flex-col items-center justify-center gap-0.5
                      ${selectedWeight === w 
                        ? "bg-[#121A14] text-white border-[#121A14] shadow-md" 
                        : "bg-white border-[#121A14]/10 text-[#121A14] hover:border-[#121A14]/30"
                      }`}
                  >
                    {w}
                    <span className={`text-[9px] ${selectedWeight === w ? "text-white/60" : "text-[#3A4A3E]/40"}`}>
                      {w === "1.0 kg" ? "Standard" : w === "2.5 kg" ? "Value Pack" : "Pro Grower"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Counter Component */}
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-[#121A14] block mb-4">
                Quantity Allocation
              </label>
              <div className="inline-flex items-center gap-6 rounded-2xl bg-white border border-[#121A14]/10 p-2">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10 rounded-xl hover:bg-[#121A14]/5 flex items-center justify-center text-[#121A14] transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-6 text-center text-sm font-bold text-[#121A14]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10 rounded-xl hover:bg-[#121A14]/5 flex items-center justify-center text-[#121A14] transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Main Action Call Systems */}
          <div className="space-y-4 pt-4 border-t border-[#121A14]/10">
            <button className="group w-full h-16 rounded-full bg-[#121A14] text-white text-sm font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all hover:bg-[#233126] hover:scale-[1.01] active:scale-[0.99] shadow-md">
              Process Allocation & Add to Cart
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            
            <div className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#687945]">
              <ShieldCheck size={14} />
              100% Traceable Organic Sourcing Guarantee
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}