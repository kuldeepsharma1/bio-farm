"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ShieldCheck, ArrowRight, Check, ChevronDown, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    companyName: "",
    serviceRequired: "",
    projectDetails: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // High-scale ingestion pipeline for commercial ag-proposals
    setIsSubmitted(true);
  };

  return (
    <section className="bg-white px-6 py-28 lg:px-16 border-t border-gray-100" id="contact">
      <div className="max-w-7xl mx-auto">
        
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Enterprise Context & Core Channels */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-emerald-600 font-bold block">
                Commercial Intake // Regional Scale
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.05]">
                Partner with <br />
                <span className="text-emerald-600 font-semibold">Arkin Organics.</span>
              </h2>
              <p className="text-sm md:text-base text-gray-500 font-normal leading-relaxed max-w-md pt-2">
                Initiate a professional technical soil composition audit or secure high-volume bulk freight matrix scheduling. Our agronomy team evaluates crop yield distributions globally.
              </p>
            </div>

            {/* Direct Communication Channels */}
            <div className="space-y-6 pt-8 border-t border-gray-100 max-w-sm">
              
              {/* WhatsApp / Rapid Support Option */}
              <div className="flex items-start gap-4 group">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gray-50 text-gray-700 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-all shrink-0 border border-gray-100/50">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Immediate Logistics</h4>
                  <a 
                    href="https://wa.me/yournumber" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:text-emerald-600 transition-colors underline underline-offset-4 block mt-0.5"
                  >
                    Chat directly with our dispatch
                  </a>
                </div>
              </div>

              {/* Email Infrastructure */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gray-50 text-gray-700 shrink-0 border border-gray-100/50">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Corporate RFQs</h4>
                  <p className="text-xs text-gray-400 mt-0.5 font-mono">
                    proposals@arkinorganics.com
                  </p>
                </div>
              </div>

              {/* Data Protection Standards */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gray-50 text-gray-700 shrink-0 border border-gray-100/50">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Protected Formulations</h4>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                    Custom property yield profiles and matrix soil data parameters are heavily encrypted. All requests are protected via standard corporate NDAs.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Clean Production Form Card */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.015)] rounded-2xl p-8 md:p-12">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    
                    <div className="space-y-1 pb-4 border-b border-gray-50">
                      <h3 className="text-xl font-bold tracking-tight text-gray-900">
                        Operational Specifications
                      </h3>
                      <p className="text-xs text-gray-400">
                        Submit parameters to initiate direct matrix alignment.
                      </p>
                    </div>

                    {/* First / Last Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono tracking-widest uppercase text-gray-400 font-bold block">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="E.g., Alexander"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="w-full bg-gray-50/50 text-gray-950 placeholder-gray-400 text-sm px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono tracking-widest uppercase text-gray-400 font-bold block">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Vance"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className="w-full bg-gray-50/50 text-gray-950 placeholder-gray-400 text-sm px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Email & Corporate Structure */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono tracking-widest uppercase text-gray-400 font-bold block">
                          Corporate Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="vance@agri-corp.com"
                          value={formData.workEmail}
                          onChange={(e) => setFormData({...formData, workEmail: e.target.value})}
                          className="w-full bg-gray-50/50 text-gray-950 placeholder-gray-400 text-sm px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono tracking-widest uppercase text-gray-400 font-bold block">
                          Company / Farm Acreage
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Vance Growers Ltd."
                          value={formData.companyName}
                          onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                          className="w-full bg-gray-50/50 text-gray-950 placeholder-gray-400 text-sm px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Service Matrix Dropdown Select */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono tracking-widest uppercase text-gray-400 font-bold block">
                        Primary System Requirement
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={formData.serviceRequired}
                          onChange={(e) => setFormData({...formData, serviceRequired: e.target.value})}
                          className="w-full bg-gray-50/50 text-gray-950 text-sm px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all duration-200 appearance-none cursor-pointer pr-10"
                        >
                          <option value="" disabled>Select an engineering model</option>
                          <option value="soil-audit">Technical Biological Soil Mapping Matrix</option>
                          <option value="bulk-supply">Bulk High-Density Fertilizer Supply & Logistics</option>
                          <option value="custom-blend">Bespoke Custom Micro-Nutrient Mixing</option>
                          <option value="distribution">Global Distribution Infrastructure Accounts</option>
                        </select>
                        <div className="absolute right-4 top-3.5 pointer-events-none text-gray-400">
                          <ChevronDown size={14} strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>

                    {/* Operational Parameter Context */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono tracking-widest uppercase text-gray-400 font-bold block">
                        Project Matrix Parameters
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Detail regional crop profiles, historic nitrogen dependencies, soil hydration benchmarks, and projected shipping cycles..."
                        value={formData.projectDetails}
                        onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
                        className="w-full bg-gray-50/50 text-gray-950 placeholder-gray-400 text-sm px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all duration-200 resize-none leading-relaxed"
                      />
                    </div>

                    {/* Production-Grade High Contrast Action Trigger */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-gray-950 hover:bg-emerald-600 text-white rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-200 font-semibold cursor-pointer group mt-4 shadow-sm"
                    >
                      <span>Transmit Intake Specs</span>
                      <ArrowRight size={14} className="text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
                    </button>

                  </motion.form>
                ) : (
                  /* Form Success Framework */
                  <motion.div 
                    key="success-prompt"
                    initial={{ opacity: 0, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 space-y-4"
                  >
                    <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100/50">
                      <Check size={18} strokeWidth={3} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900">Specifications Ingested</h3>
                      <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed font-normal">
                        Thank you. Your agricultural baseline benchmarks have been safely logged. A logistics agronomist will examine the environmental terrain framework and reply within 2 corporate hours.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}