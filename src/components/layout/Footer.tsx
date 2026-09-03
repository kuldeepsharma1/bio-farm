"use client";

import { ArrowUpRight, Pin, ArrowUp, X } from "lucide-react";
import { FacebookIcon } from "../icons/socialIcon";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const base = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "FAQ", href: "/faq" },
    { name: "Support", href: "/support" },
  ];

  const services = [
    { name: "Organic Fertilizers", href: "/products/organic-fertilizers" },
    { name: "Bio Fertilizers", href: "/products/bio-fertilizers" },
    { name: "Vermicompost", href: "/products/vermicompost" },
    { name: "Soil Conditioners", href: "/products/soil-conditioners" },
    { name: "Plant Growth Promoters", href: "/products/plant-growth-promoters" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B6623] text-white px-6 pt-20 pb-12 lg:px-12 relative overflow-hidden font-sans border-t border-white/10">
      
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start pb-16">
          
          {/* Left Column: CTA & Headline */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Build an Eco-Friendly <br className="hidden sm:block" /> Farm Today
            </h2>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/contact-us"
                className="flex h-12 items-center justify-center rounded-full bg-[#839756] px-7 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-[#6e8045] active:scale-95 shadow-sm"
              >
                GET CONSULTANT
              </a>
              <a
                href="/contact-us"
                aria-label="Consultant Contact"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#839756] text-white transition-all hover:scale-105 hover:bg-[#6e8045] active:scale-95 shadow-sm"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>

          {/* Second Column: Products */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide border-b border-white/10 pb-3">
              Products
            </h3>
            <ul className="space-y-3 text-white/80 text-sm font-medium">
              {services.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-white transition-colors inline-block py-0.5">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Column: Navigation Links */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide border-b border-white/10 pb-3">
              Quick Links
            </h3>
            <ul className="space-y-3 text-white/80 text-sm font-medium">
              {base.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-white transition-colors inline-block py-0.5">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fourth Column: Contact & Location Information */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide border-b border-white/10 pb-3">
              Information
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5 font-semibold">Emergency?</p>
                <p className="font-bold text-white text-base">+91 (1795) 800 888</p>
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5 font-semibold">Email us</p>
                <p className="font-semibold text-white break-all">support@arkin.com</p>
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5 font-semibold">Address</p>
                <p className="font-semibold text-white text-xs sm:text-sm leading-relaxed">New City, Baddi Industrial Area, HP, India</p>
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5 font-semibold">Office Hours</p>
                <p className="font-semibold text-white text-xs sm:text-sm">Mon–Friday, 09am–05pm</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Socials, Massive Typography, and Copyright */}
        <div className="pt-10 border-t border-white/15 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 relative">
          
          {/* Social Icons, Legal Links & Copyright */}
          <div className="space-y-5 w-full lg:w-auto">
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/25 transition-all shadow-2xs">
                <FacebookIcon />
              </a>
              <a href="https://pinterest.com" aria-label="Pinterest" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/25 transition-all shadow-2xs">
                <Pin size={17} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/25 transition-all shadow-2xs">
                <X size={17} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/25 transition-all shadow-2xs">
                <FaInstagram size={17} />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-white/70">
              <p>© 2026 · <span className="font-bold text-white">Arkin Organics</span>. All Rights Reserved.</p>
              <span className="text-white/30 hidden sm:inline">•</span>
              <div className="flex items-center gap-4">
                <a href="/legal/privacy" className="hover:text-white transition-colors underline-offset-4 hover:underline">
                  Privacy Policy
                </a>
                <span className="text-white/30">•</span>
                <a href="/legal/terms" className="hover:text-white transition-colors underline-offset-4 hover:underline">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>

          {/* Massive Branding Typography & Scroll-to-Top */}
          <div className="flex items-end justify-between lg:justify-end w-full lg:w-auto gap-4">
            <h1 className="text-[17vw] sm:text-[14vw] lg:text-[150px] leading-[0.75] font-black tracking-tighter text-white/95 select-none">
              ARKIN
            </h1>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="mb-1 lg:mb-4 h-12 w-12 shrink-0 rounded-full bg-[#839756] text-white flex items-center justify-center hover:bg-[#6e8045] transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <ArrowUp size={20} />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}