"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Dna, Droplets, ShieldAlert, Sparkles, Orbit } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function PremiumEcosystemCanvas() {
  return (
    <section className="bg-[#0C100D] text-[#F5F4F0] font-sans px-6 lg:px-16 py-36 border-b border-white/5 relative overflow-hidden">
      
      {/* Background Atmosphere: Cinematic Organic Glow Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#687945]/10 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#839756]/5 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      
      {/* Editorial Vertical Axis Line */}
      <div className="absolute top-0 left-6 lg:left-16 w-px h-full bg-white/5 pointer-events-none hidden md:block" />
      
      <div className="max-w-7xl mx-auto pl-0 md:pl-8 lg:pl-12">
        
        {/* ========================================================================= */}
        {/* MAIN ENGINE: TWO-COLUMN ASYMMETRIC GRID                                   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-24 items-start">
          
          {/* LEFT SIDE: Floating Manifesto & Identity Anchor */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-14 z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#839756] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#839756]"></span>
                </span>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#839756]">
                  Matrix // Edition 04
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.02] text-white">
                A paradigm <br />
                built for <span className="font-serif italic text-[#839756]">generational</span> <br />
                sustainability.
              </h2>
            </div>
            
            <p className="text-sm text-[#A3A8A4] leading-relaxed max-w-sm font-light">
              We reject the industry practice of forcing sudden, synthetic growth surges at the cost of total soil biology. Our methodology scales macro rhizosphere capabilities to secure self-sufficient ecological horizons.
            </p>

            {/* Micro Technical Readouts */}
            <div className="pt-8 border-t border-white/10 max-w-xs grid grid-cols-2 gap-6">
              <div>
                <span className="block text-[9px] font-mono text-[#A3A8A4]/40 uppercase tracking-widest mb-1.5">Architecture</span>
                <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <Orbit size={13} className="text-[#839756]" />
                  BioAg v2.66
                </span>
              </div>
              <div>
                <span className="block text-[9px] font-mono text-[#A3A8A4]/40 uppercase tracking-widest mb-1.5">Documentation</span>
                <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-[#839756] hover:text-white transition-colors group">
                  Whitepaper
                  <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Immersive Visual Stream */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-7 space-y-32"
          >
            
            {/* COMPARISON STREAM 01 */}
            <motion.div variants={fadeUpVariants} className="space-y-6 group">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#A3A8A4]/40 border-b border-white/10 pb-4">
                <span>[ Index 01 // Substrate Activation ]</span>
                <span className="text-[#839756] font-bold tracking-wider">Systemic Path</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white group-hover:text-[#839756] transition-colors duration-300">
                Rhizosphere Optimization & Fungal Mass
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
                {/* High-End Micro-Border Glass Frame */}
                <div className="md:col-span-7 rounded-[2rem] overflow-hidden h-[280px] relative border border-white/10 bg-white/[0.02] p-2 transition-all duration-500 group-hover:border-[#839756]/40 group-hover:shadow-[0_0_30px_rgba(131,151,86,0.1)]">
                  <div className="w-full h-full rounded-[1.75rem] overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Premium rich organic biological live substrate setup" 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C100D]/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
                
                <div className="md:col-span-5 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#839756]">
                    <Dna size={14} />
                    Microbial Density
                  </div>
                  <div className="text-6xl font-light tracking-tighter text-white font-mono leading-none">
                    +420%
                  </div>
                  <p className="text-xs text-[#A3A8A4] leading-relaxed font-light">
                    Accelerates absolute native nitrogen synthesis vectors inside fragile crop layers without building up destructive chemical salt balances.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* COMPARISON STREAM 02 */}
            <motion.div variants={fadeUpVariants} className="space-y-6 group">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#A3A8A4]/40 border-b border-white/10 pb-4">
                <span>[ Index 02 // Fluid Dynamics ]</span>
                <span className="text-[#839756] font-bold tracking-wider">Hydration Balance</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white group-hover:text-[#839756] transition-colors duration-300">
                Dynamic Moisture Structural Porosity
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
                <div className="md:col-span-5 space-y-4 order-2 md:order-1">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#839756]">
                    <Droplets size={14} />
                    Irrigation Stress
                  </div>
                  <div className="text-6xl font-light tracking-tighter text-white font-mono leading-none">
                    -35%
                  </div>
                  <p className="text-xs text-[#A3A8A4] leading-relaxed font-light">
                    Builds up high-retention structural organic matrices that firmly preserve critical moisture fields deep across prolonged dry spells.
                  </p>
                </div>

                <div className="md:col-span-7 rounded-[2rem] overflow-hidden h-[280px] relative border border-white/10 bg-white/[0.02] p-2 transition-all duration-500 group-hover:border-[#839756]/40 group-hover:shadow-[0_0_30px_rgba(131,151,86,0.1)] order-1 md:order-2">
                  <div className="w-full h-full rounded-[1.75rem] overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=1000" 
                      alt="High-end organic field moisture lines layout" 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C100D]/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* LOWER MODULE: Stark Monolithic Risk Contrast Block                        */}
        {/* ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-36 pt-16 border-t border-white/5 relative"
        >
          {/* Brutalist Frame Border Accents */}
          <div className="absolute top-0 right-12 w-24 h-px bg-white/10 hidden md:block" />
          
          <div className="bg-gradient-to-br from-[#121713] to-[#0E120F] border border-white/10 text-[#F5F4F0] rounded-[3.5rem] p-8 md:p-14 relative overflow-hidden shadow-2xl flex flex-col justify-between min-h-[340px] group hover:border-amber-900/40 transition-colors duration-500">
            
            {/* Header Readout Module */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-white/5 pb-8 w-full z-10">
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-amber-500 uppercase tracking-[0.25em] flex items-center gap-2 font-bold">
                  <Sparkles size={11} className="text-amber-500/70" />
                  Industry Baseline / Legacy Input Systems
                </span>
                <h4 className="text-2xl md:text-4xl font-light tracking-tight text-white">
                  Synthetic Chemical Saturation Hazards
                </h4>
              </div>
              <div className="bg-white/[0.03] border border-white/10 p-3.5 rounded-2xl text-amber-500 shadow-inner group-hover:bg-amber-500/5 group-hover:text-amber-400 transition-colors duration-300">
                <ShieldAlert size={24} />
              </div>
            </div>

            {/* Explanatory Technical Copy */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pt-10 w-full z-10">
              <div className="lg:col-span-8">
                <p className="text-sm text-[#A3A8A4] leading-relaxed max-w-2xl font-light">
                  Standard high-salt chemical inputs push heavy, instant nutrient rushes into roots to trigger quick cosmetic expansion. Over continuous timelines, this aggressive forcing completely bleaches the local micro-soil life network, dropping structural density and rendering whole systems highly vulnerable to erosion.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right flex lg:justify-end gap-4 text-xs font-mono">
                <div className="text-left bg-white/[0.02] border border-white/5 px-5 py-3.5 rounded-2xl min-w-[150px]">
                  <span className="block text-[8px] uppercase tracking-widest text-[#A3A8A4]/40 mb-1">Impact Vector</span>
                  <span className="text-white font-bold">Severe Damage</span>
                </div>
                <div className="text-left bg-white/[0.02] border border-white/5 px-5 py-3.5 rounded-2xl min-w-[150px]">
                  <span className="block text-[8px] uppercase tracking-widest text-[#A3A8A4]/40 mb-1">Stability State</span>
                  <span className="text-amber-500 font-bold group-hover:text-amber-400 transition-colors">Degraded</span>
                </div>
              </div>
            </div>

            {/* Micro Blueprint Spatial Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}