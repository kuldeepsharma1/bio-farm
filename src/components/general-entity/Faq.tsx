"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqItems: FaqItem[] = [
    {
      question: 'What organic certifications do your fertilizers hold?',
      answer: 'Our formulations are fully certified by USDA Organic, OMRI (Organic Materials Review Institute), and leading international bodies. Every production batch undergoes independent laboratory verification to ensure total compliance with ecological standards.'
    },
    {
      question: 'What raw ingredients define the base composition?',
      answer: 'We source 100% of our trace elements and nutrients from composted plant structures, native mineral powders, and targeted beneficial soil microorganisms. We strictly exclude synthetic chemical additives, heavy salts, and sewage sludge.'
    },
    {
      question: 'How long can the fertilizer be stored before it expires?',
      answer: 'Unopened packaging remains entirely stable for 2 to 3 years when stored in a dry environment out of direct sunlight. Once opened, we recommend applying the product within 12 months for peak biological efficiency.'
    },
    {
      question: 'Are these formulations safe for indoor cultivation and greenhouses?',
      answer: 'Yes. Our specialized interior blends are explicitly refined to be low-odor and completely safe for close-quarter residential or commercial greenhouse setups, delivering concentrated nutrition without burning delicate root systems.'
    },
    {
      question: 'Can this product be used in standard automated drip irrigation systems?',
      answer: 'Absolutely. Our liquid lines are micro-filtered down to 150 microns to guarantee they flow seamlessly through automated high-volume irrigation streams, foliar sprayers, and classic field top-dressings without clogging lines.'
    },
    {
      question: 'Do you offer custom blending or bulk freight options for large commercial farms?',
      answer: 'Yes. For commercial agricultural runs scaling past 500 kilograms, we provide custom wholesale pricing and dedicated freight routing. We can also coordinate specialized laboratory soil assays to modify our blends for your local soil metrics.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-slate-50/50 text-slate-900 px-4 py-16 md:py-28 font-sans selection:bg-slate-900 selection:text-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Typographic Hero Group */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-3xl md:text-[42px] font-semibold tracking-tight text-[#0F172A]">
            Frequently Asked Questions
          </h1>
          <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto font-normal leading-relaxed">
            Everything you need to know about our organic certifications, application guidelines, and commercial shipping pipelines.
          </p>
        </div>

        {/* Clean Accordion Card Container matching the user's reference exactly */}
        <div className="bg-white border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.015)] rounded-3xl p-6 md:p-10 lg:p-12">
          <div className="divide-y divide-slate-100">
            {faqItems.map((faq, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div key={index} className="first:pt-0 last:pb-0 py-6">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <span className="text-[15px] md:text-base font-medium tracking-tight text-slate-800 transition-colors duration-200 group-hover:text-slate-950 pr-6">
                      {faq.question}
                    </span>
                    
                    {/* Circle Toggle Control from the reference image */}
                    <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-slate-50/80 border border-slate-100 text-slate-400 shrink-0 group-hover:border-slate-200 group-hover:text-slate-800 transition-all duration-200">
                      <motion.div
                        animate={{ rotate: isExpanded ? 135 : 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="flex items-center justify-center"
                      >
                        <Plus size={14} strokeWidth={2.5} />
                      </motion.div>
                    </div>
                  </button>

                  {/* Accordion Dropdown Content Animation */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: "auto", 
                          opacity: 1,
                          transition: { height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.2 } }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: { height: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.1 } }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 pb-2 max-w-[92%]">
                          <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed font-normal">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </main>
  );
}