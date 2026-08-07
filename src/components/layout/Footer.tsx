"use client";

import { ArrowUpRight, Pin, ArrowUp, X } from "lucide-react";
import { FacebookIcon } from "../icons/socialIcon";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
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
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start pb-16">
          
          {/* Left Column: CTA & Headline */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Build an Eco-Friendly <br className="hidden sm:block" /> Farm Today
            </h2>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/contact-us"
                className="flex h-12 items-center justify-center rounded-full bg-[#839756] px-8 text-sm font-semibold text-white transition-all hover:bg-[#6e8045] active:scale-95 shadow-sm"
              >
                GET CONSULTANT
              </a>
              <a
                href="/contact-us"
                aria-label="Consultant Contact"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#839756] text-white transition-transform hover:scale-110 hover:bg-[#6e8045] active:scale-95 shadow-sm"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>

          {/* Middle Column: Services */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-lg font-bold text-white tracking-wide">Services</h3>
            <ul className="space-y-4 text-white/80 text-sm font-medium">
              {services.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Information & Details (Updated with Baddi, India Address) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white tracking-wide">Information</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Emergency?</p>
                  <p className="font-bold text-white text-base">+91 (1795) 800 888</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Email us</p>
                  <p className="font-semibold text-white break-all">support@arkin.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-0 sm:pt-9">
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Address</p>
                  <p className="font-semibold text-white">New City, Baddi Industrial Area, HP, India</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Office Hours</p>
                  <p className="font-semibold text-white">Mon–Friday, 09am–05pm</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Socials, Massive Typography, and Copyright */}
        <div className="pt-12 border-t border-white/15 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 relative">
          
          {/* Social Icons, Legal Links & Copyright */}
          <div className="space-y-6 w-full lg:w-auto">
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <FacebookIcon />
              </a>
              <a href="https://pinterest.com" aria-label="Pinterest" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <Pin size={18} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <X size={18} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <FaInstagram size={18} />
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
            <h1 className="text-[17vw] sm:text-[14vw] lg:text-[160px] leading-[0.75] font-black tracking-tighter text-white select-none">
              ARKIN
            </h1>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="mb-2 lg:mb-6 h-12 w-12 shrink-0 rounded-full bg-[#839756] text-white flex items-center justify-center hover:bg-[#6e8045] transition-all shadow-md active:scale-95"
            >
              <ArrowUp size={20} />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}