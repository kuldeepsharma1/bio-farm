"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  MessageSquare, 
  FileText, 
  ArrowRight, 
  ExternalLink 
} from "lucide-react";

// --- Animation Configs ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { icon: BookOpen, title: "Product Guides", count: "12 Articles", desc: "Detailed breakdown of mix ratios, application schedules, and crop compatibility matrices." },
    { icon: HelpCircle, title: "Order & Logistics", count: "8 Articles", desc: "Tracking industrial bulk shipments, localized distribution hubs, and customs certification." },
    { icon: FileText, title: "Lab Certifications", count: "15 Documents", desc: "Download dynamic composition reports, heavy metal screen tests, and OMRI organic listings." },
  ];

  const popularTopics = [
    "Optimal dilution ratios for heavy clay soils",
    "Bulk freight transit temperature tolerances",
    "Interpreting micro-nutrient distribution metrics",
    "Safety Data Sheets (SDS) download catalog",
  ];

  return (
    <main className="min-h-screen bg-[#F5F4F0] font-sans text-[#121A14] selection:bg-[#FDBA21] selection:text-black antialiased">
      
      {/* --- Light Immersive Header Zone --- */}
      <section className="relative px-6 pt-32 pb-20 lg:px-12 border-b border-[#121A14]/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight"
          >
            Documentation & Support
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-[#3A4A3E] max-w-xl mx-auto leading-relaxed"
          >
            Access granular technical datasheets, application parameters, and systemic guides curated by our agronomy engineering desk.
          </motion.p>

          {/* Search Input Node */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-2xl mx-auto mt-8"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3A4A3E]" size={18} />
            <input 
              type="text" 
              placeholder="Search specifications, certifications, documentation..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-12 pr-4 bg-white border border-[#121A14]/10 rounded-2xl text-sm font-medium focus:outline-none focus:border-[#687945] transition-colors placeholder:text-[#3A4A3E]/50 shadow-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* --- Matrix Navigation Categories --- */}
      <section className="px-6 py-20 lg:px-12 max-w-7xl mx-auto">
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              className="flex flex-col justify-between p-8 bg-white border border-[#121A14]/5 rounded-3xl hover:border-[#687945]/30 transition-all group cursor-pointer shadow-sm"
            >
              <div>
                <div className="h-12 w-12 rounded-xl bg-[#F5F4F0] text-[#687945] flex items-center justify-center mb-6">
                  <cat.icon size={22} />
                </div>
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="text-lg font-bold tracking-tight">{cat.title}</h3>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#3A4A3E]/60 bg-[#F5F4F0] px-2 py-0.5 rounded-md">
                    {cat.count}
                  </span>
                </div>
                <p className="text-sm text-[#3A4A3E] leading-relaxed mb-8">{cat.desc}</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#687945] group-hover:text-[#121A14] transition-colors">
                <span>Browse Resource</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- Two-Column Contextual Grid (FAQs & Live Support Escalation) --- */}
      <section className="px-6 py-20 lg:px-12 bg-white border-t border-[#121A14]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Hyper-Focused Topic Index */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xs font-mono tracking-widest uppercase text-[#3A4A3E] font-bold">
              Trending Technical Inquiries
            </h2>
            <div className="divide-y divide-[#121A14]/10">
              {popularTopics.map((topic, index) => (
                <div 
                  key={index} 
                  className="py-4 first:pt-0 last:pb-0 flex items-center justify-between group cursor-pointer text-[#121A14] hover:text-[#687945] transition-colors"
                >
                  <span className="text-sm font-medium">{topic}</span>
                  <ExternalLink size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Escalation Touchpoint Card */}
          <div className="lg:col-span-5 bg-[#F5F4F0] p-8 rounded-4xl flex flex-col justify-between border border-[#121A14]/5">
            <div>
              <div className="h-12 w-12 rounded-xl bg-white text-[#121A14] flex items-center justify-center mb-6 shadow-sm">
                <MessageSquare size={20} />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">Direct Agronomist Line</h3>
              <p className="text-sm text-[#3A4A3E] leading-relaxed mb-6">
                Can't isolate the exact structural documentation required for your agricultural layout? Speak directly with an engineer.
              </p>
            </div>
            
            <div className="space-y-3">
              <button className="w-full h-12 flex items-center justify-center rounded-xl bg-[#121A14] px-6 text-sm font-semibold text-white transition-all hover:bg-[#2A3B2E] cursor-pointer">
                Initiate Secure Ticket
              </button>
              <div className="text-center">
                <span className="text-[11px] font-mono tracking-wider text-[#3A4A3E]/70">
                  Response Window: Average under 45 minutes
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}