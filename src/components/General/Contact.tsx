"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ShieldCheck, ArrowRight, Check, ChevronDown, Mail, RefreshCcw } from "lucide-react";

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
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      workEmail: "",
      companyName: "",
      serviceRequired: "",
      projectDetails: "",
    });
  };

  return (
    <section className="relative min-h-screen bg-white px-4 sm:px-6 lg:px-20  py-12 sm:pb-28 lg:pb-36 text-slate-900 selection:bg-emerald-500 selection:text-white overflow-hidden" id="contact">
      
      {/* Global Font Injection for Fraunces & Inter */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Inter:wght@400;500;600;700&display=swap');
        .font-fraunces {
          font-family: 'Fraunces', Georgia, serif;
        }
      `}</style>

      {/* Subtle Organic Background Glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden">
        <div className="h-96 w-96 sm:h-150 sm:w-150 rounded-full bg-emerald-50/50 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Split Grid Layout with Generous Whitespace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Typography & Corporate Channels */}
          <div className="lg:col-span-5 lg:sticky lg:top-8 space-y-8 lg:space-y-10">
            <div className="space-y-6">
              
              {/* Sprout Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-emerald-800 shadow-2xs">
                <span>🌱</span>
                <span>Direct Corporate Intake</span>
              </div>

              {/* Main Headline in Fraunces Serif */}
              <h1 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                Let&apos;s cultivate <br />
                <span className="italic text-emerald-600 font-medium">growth together.</span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-md">
                Initiate a professional technical soil composition audit or secure high-volume bulk freight scheduling. Our agronomy team evaluates crop yield distributions globally.
              </p>
            </div>

            {/* Direct Communication Channels */}
            <div className="space-y-4 pt-6 border-t border-slate-100 max-w-md">
              
              {/* WhatsApp / Rapid Support */}
              <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 shadow-2xs hover:border-emerald-300 hover:bg-emerald-50/30 transition-all duration-200 group">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white text-slate-700 group-hover:text-emerald-600 shadow-2xs transition-all shrink-0 border border-slate-200/80">
                  <MessageSquare size={17} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900">Immediate Logistics</h4>
                  <a 
                    href="https://wa.me/yournumber" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-slate-500 hover:text-emerald-600 font-medium transition-colors inline-flex items-center gap-1 mt-0.5 truncate"
                  >
                    Chat directly with dispatch &rarr;
                  </a>
                </div>
              </div>

              {/* Corporate Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 shadow-2xs">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white text-slate-700 shadow-2xs shrink-0 border border-slate-200/80">
                  <Mail size={17} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900">Corporate RFQs</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-mono select-all truncate">
                    proposals@arkinorganics.com
                  </p>
                </div>
              </div>

              {/* Data Protection Standards */}
              <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 shadow-2xs">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white text-slate-700 shadow-2xs shrink-0 border border-slate-200/80">
                  <ShieldCheck size={17} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900">Protected Formulations</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed font-normal">
                    Custom property yield profiles and matrix soil data parameters are encrypted under strict corporate NDAs.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Premium Form Card */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    
                    <div className="space-y-1 pb-4 border-b border-slate-100">
                      <h2 className="font-fraunces text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                        Operational Specifications
                      </h2>
                      <p className="text-xs text-slate-500 font-normal">
                        Submit parameters to initiate direct matrix alignment.
                      </p>
                    </div>

                    {/* First / Last Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-xs font-semibold tracking-wide text-slate-700 block">
                          First Name <span className="text-emerald-600">*</span>
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          required
                          placeholder="Alexander"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="w-full bg-slate-50/80 text-slate-900 placeholder-slate-400 text-xs sm:text-sm px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:border-slate-900 focus:bg-white transition-all duration-200 shadow-2xs font-normal"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-xs font-semibold tracking-wide text-slate-700 block">
                          Last Name <span className="text-emerald-600">*</span>
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          required
                          placeholder="Vance"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className="w-full bg-slate-50/80 text-slate-900 placeholder-slate-400 text-xs sm:text-sm px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:border-slate-900 focus:bg-white transition-all duration-200 shadow-2xs font-normal"
                        />
                      </div>
                    </div>

                    {/* Corporate Email & Acreage */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="workEmail" className="text-xs font-semibold tracking-wide text-slate-700 block">
                          Corporate Email <span className="text-emerald-600">*</span>
                        </label>
                        <input
                          id="workEmail"
                          type="email"
                          required
                          placeholder="vance@agri-corp.com"
                          value={formData.workEmail}
                          onChange={(e) => setFormData({...formData, workEmail: e.target.value})}
                          className="w-full bg-slate-50/80 text-slate-900 placeholder-slate-400 text-xs sm:text-sm px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:border-slate-900 focus:bg-white transition-all duration-200 shadow-2xs font-normal"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="companyName" className="text-xs font-semibold tracking-wide text-slate-700 block">
                          Company / Farm Acreage <span className="text-emerald-600">*</span>
                        </label>
                        <input
                          id="companyName"
                          type="text"
                          required
                          placeholder="Vance Growers Ltd."
                          value={formData.companyName}
                          onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                          className="w-full bg-slate-50/80 text-slate-900 placeholder-slate-400 text-xs sm:text-sm px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:border-slate-900 focus:bg-white transition-all duration-200 shadow-2xs font-normal"
                        />
                      </div>
                    </div>

                    {/* Service Selection Dropdown */}
                    <div className="space-y-2">
                      <label htmlFor="serviceRequired" className="text-xs font-semibold tracking-wide text-slate-700 block">
                        Primary System Requirement <span className="text-emerald-600">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="serviceRequired"
                          required
                          value={formData.serviceRequired}
                          onChange={(e) => setFormData({...formData, serviceRequired: e.target.value})}
                          className="w-full bg-slate-50/80 text-slate-900 text-xs sm:text-sm px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:border-slate-900 focus:bg-white transition-all duration-200 appearance-none cursor-pointer pr-10 shadow-2xs font-normal"
                        >
                          <option value="" disabled>Select an engineering model</option>
                          <option value="soil-audit">Technical Biological Soil Mapping Matrix</option>
                          <option value="bulk-supply">Bulk High-Density Fertilizer Supply & Logistics</option>
                          <option value="custom-blend">Bespoke Custom Micro-Nutrient Mixing</option>
                          <option value="distribution">Global Distribution Infrastructure Accounts</option>
                        </select>
                        <div className="absolute right-4 top-4 pointer-events-none text-slate-400">
                          <ChevronDown size={16} strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>

                    {/* Project Parameters Textarea */}
                    <div className="space-y-2">
                      <label htmlFor="projectDetails" className="text-xs font-semibold tracking-wide text-slate-700 block">
                        Project Matrix Parameters <span className="text-emerald-600">*</span>
                      </label>
                      <textarea
                        id="projectDetails"
                        rows={4}
                        required
                        placeholder="Detail regional crop profiles, historic nitrogen dependencies, soil hydration benchmarks, and projected shipping cycles..."
                        value={formData.projectDetails}
                        onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
                        className="w-full bg-slate-50/80 text-slate-900 placeholder-slate-400 text-xs sm:text-sm px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:border-slate-900 focus:bg-white transition-all duration-200 resize-none leading-relaxed shadow-2xs font-normal"
                      />
                    </div>

                    {/* Submit Action Button */}
                    <button
                      type="submit"
                      className="w-full group flex items-center justify-center gap-3 py-4 bg-green-600 hover:bg-green-500 text-white rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer mt-6 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
                    >
                      <span>Transmit Intake Specs</span>
                      <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </button>

                  </motion.form>
                ) : (
                  /* Form Success Framework */
                  <motion.div 
                    key="success-prompt"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 sm:py-20 space-y-6"
                  >
                    <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-inner">
                      <Check size={26} strokeWidth={3} />
                    </div>
                    <div className="space-y-3 max-w-md mx-auto">
                      <h3 className="font-fraunces text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">Specifications Ingested</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        Thank you. Your agricultural baseline benchmarks have been safely logged. A logistics agronomist will examine the environmental terrain framework and reply within 2 corporate hours.
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-900 transition-all duration-200 cursor-pointer shadow-2xs active:scale-95"
                      >
                        <RefreshCcw size={13} />
                        Submit Another Request
                      </button>
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