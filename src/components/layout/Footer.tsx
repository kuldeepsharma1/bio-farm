"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, ArrowRight } from "lucide-react";

export default function Footer() {
  // Structured data layers preserved exactly as defined
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Our Farms", href: "/our-farms" },
    { name: "Sustainability", href: "/sustainability" },
  ];

  const knowMore = [
    { name: "Blogs", href: "/blogs" },
    { name: "FAQ", href: "/faq" },
    { name: "Support", href: "/support" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Support", href: "/support" },
  ];

  return (
    <footer className="bg-[#000000f6] pt-28 pb-12 px-6 lg:px-16 text-white border-t border-gray-950 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* Call to Action Typographic Header Section */}
        <div className="flex flex-col items-center border-b border-gray-900 pb-16 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[7vw] sm:text-[6vw] md:text-[52px] leading-none font-bold tracking-tight text-white mb-4 text-center"
          >
            Grow With <span className="text-emerald-500">Arkin.</span>
          </motion.h2>
          <p className="text-xs md:text-sm text-gray-500 font-mono tracking-widest uppercase text-center max-w-sm">
            Commercial Scale Agronomy Systems
          </p>
        </div>
        
        {/* Primary Functional Column Infrastructure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 items-start">
          
          {/* Brand Vision Metrics Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-950/50 border border-emerald-900/40 text-emerald-500">
                <Leaf size={16} />
              </div>
              <span className="font-bold text-xl tracking-tight text-white font-sans">Arkin Organics</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Regenerating global crop infrastructure through elite biological formulations and precise soil micro-nutrient delivery models.
            </p>
          </div>
          
          {/* Dynamic Map - Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono tracking-widest uppercase text-gray-400 font-bold">
              Core Systems
            </h4>
            <ul className="space-y-2.5 text-sm font-normal">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="text-gray-500 hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dynamic Map - Knowledge Base */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono tracking-widest uppercase text-gray-400 font-bold">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm font-normal">
              {knowMore.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="text-gray-500 hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ingestion Subscription Feed Channel */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono tracking-widest uppercase text-gray-400 font-bold">
              Enterprise Updates
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Subscribe to unlock quarterly agronomy whitepapers and localized freight scheduling options.
            </p>
            <div className="flex h-12 w-full rounded-xl bg-gray-900 border border-gray-800 p-1 focus-within:border-emerald-600 transition-all duration-300">
              <input 
                type="email" 
                placeholder="agronomy@company.com" 
                className="bg-transparent px-3 w-full text-sm text-white placeholder-gray-600 outline-none font-sans" 
              />
              <button className="h-full px-5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-semibold uppercase tracking-widest transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 shrink-0">
                <span>Join</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Legal Baseline Grid */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-20 pt-8 border-t border-gray-900 text-gray-600 text-xs font-mono tracking-wider uppercase">
          <p>© 2026 Arkin Organics. All rights reserved.</p>
          
          <div className="flex gap-6 mt-4 md:mt-0 normal-case font-sans text-sm text-gray-500">
            {legalLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                className="hover:text-white transition-colors duration-200 underline underline-offset-4"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}