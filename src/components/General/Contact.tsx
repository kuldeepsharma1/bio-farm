"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ShieldCheck, ArrowRight, Check } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    operationScale: '',
    details: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Emulate production database/API ingestion pipeline
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50/50 text-slate-900 px-6 py-20 md:py-32 font-sans selection:bg-slate-900 selection:text-white flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Two-Column Split Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-slate-400 block">
                Commercial Distribution
              </span>
              <h1 className="text-4xl md:text-[50px] font-semibold tracking-tight text-[#0F172A] leading-[1.05]">
                Ready to optimize your <span className="text-emerald-600 font-medium">soil yields?</span>
              </h1>
              <p className="text-sm md:text-base text-slate-400 font-normal leading-relaxed max-w-md">
                Submit your operational metrics to request an introductory technical soil profile review and custom freight delivery quote. We typically reply within 2 hours during active regional distribution shifts.
              </p>
            </div>

            {/* Micro Feature Links Stacked */}
            <div className="space-y-6 pt-4 border-t border-slate-100">
              
              {/* WhatsApp Alternative Action Block */}
              <div className="flex items-start gap-4 group">
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-50 border border-slate-100 text-slate-500 group-hover:text-emerald-600 group-hover:border-emerald-200 transition-colors shrink-0">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-800">Skip the configuration framework?</h4>
                  <a 
                    href="https://wa.me/yournumber" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-emerald-600 underline underline-offset-4 transition-colors block mt-0.5"
                  >
                    Chat directly with an agronomist on WhatsApp
                  </a>
                </div>
              </div>

              {/* Data Safety Structural Indicator */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-50 border border-slate-100 text-slate-500 shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-800">100% Secure Laboratory Profiling</h4>
                  <p className="text-xs text-slate-400 mt-0.5 max-w-xs">
                    Your local matrix calculations and field yield parameters are kept strictly safe. We sign absolute NDAs.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Layout Form Card Column */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-slate-100 shadow-[0_4px_40px_rgba(0,0,0,0.02)] rounded-[24px] p-6 md:p-10 lg:p-12"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Card Section Header Layout */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-medium tracking-tight text-slate-800">
                      Start Your Project Profile
                    </h3>
                    <p className="text-xs text-slate-400">
                      Tell us what your local farm demands. No high-pressure sales interaction loop.
                    </p>
                  </div>

                  {/* Dual Field Row Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono tracking-wider uppercase text-slate-400 font-bold block">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full bg-slate-50/50 text-slate-900 placeholder-slate-300 text-sm px-4 py-3 rounded-xl border border-slate-100 focus:outline-none focus:border-slate-900 focus:bg-white transition-all duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono tracking-wider uppercase text-slate-400 font-bold block">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full bg-slate-50/50 text-slate-900 placeholder-slate-300 text-sm px-4 py-3 rounded-xl border border-slate-100 focus:outline-none focus:border-slate-900 focus:bg-white transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Work Email Line Field */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono tracking-wider uppercase text-slate-400 font-bold block">
                      Work Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({...formData, workEmail: e.target.value})}
                      className="w-full bg-slate-50/50 text-slate-900 placeholder-slate-300 text-sm px-4 py-3 rounded-xl border border-slate-100 focus:outline-none focus:border-slate-900 focus:bg-white transition-all duration-200"
                    />
                  </div>

                  {/* Contextual Custom Form Dropdown Selector */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono tracking-wider uppercase text-slate-400 font-bold block">
                      Estimated Operation Scale
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.operationScale}
                        onChange={(e) => setFormData({...formData, operationScale: e.target.value})}
                        className="w-full bg-slate-50/50 text-slate-900 text-sm px-4 py-3 rounded-xl border border-slate-100 focus:outline-none focus:border-slate-900 focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select an option</option>
                        <option value="small-scale">Small Boutique Farm / Hydro Greenhouse (&lt; 5 Hectares)</option>
                        <option value="mid-scale">Mid-Tier Regional Production (5-50 Hectares)</option>
                        <option value="commercial">Industrial Scale Agribusiness (50+ Hectares)</option>
                        <option value="distribution">Wholesale Distributor / Supply Chain Merchant</option>
                      </select>
                      {/* Custom Down Arrow Icon Layer */}
                      <div className="absolute right-4 top-4 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Description Box Textarea */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono tracking-wider uppercase text-slate-400 font-bold block">
                      Project Details & Soil Challenges
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your goals, crop classes, mineral deficits, budget, and estimated seasonal timeline..."
                      value={formData.details}
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                      className="w-full bg-slate-50/50 text-slate-900 placeholder-slate-300 text-sm px-4 py-3 rounded-xl border border-slate-100 focus:outline-none focus:border-slate-900 focus:bg-white transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submitting Trigger Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-mono text-[13px] tracking-wide transition-all duration-200 font-medium shadow-sm cursor-pointer group"
                  >
                    <span>Submit Request Form</span>
                    <ArrowRight size={14} className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </button>

                </form>
              ) : (
                /* Post-Submission Component State */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <Check size={20} strokeWidth={3} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-slate-800">Operational Log Enqueued</h3>
                    <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
                      Thank you. Your agricultural target metrics have been directed to our technical review staff. An agronomist will join the email feed shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </main>
  );
}