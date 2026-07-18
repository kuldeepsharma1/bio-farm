"use client"
import React, { useState } from 'react'
import { Leaf, Search, Menu, X, ArrowRight } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#121A14]/5 bg-[#F5F4F0]/80 backdrop-blur-md px-6 py-4 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        
        {/* --- Logo & Brand --- */}
        <a href='/' className="flex items-center gap-2.5 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#839756] text-[#F5F4F0] shadow-sm">
            <Leaf size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#121A14]">Arkin</span>
        </a>

        {/* --- Central Navigation Links (Desktop) --- */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#121A14]/70">
          <a href="#" className="hover:text-[#121A14] transition-colors duration-200">Product</a>
          <a href="/about" className="hover:text-[#121A14] transition-colors duration-200">About</a>
          <a href="#" className="hover:text-[#121A14] transition-colors duration-200">Blogs</a>
        </nav>

        {/* --- Search Bar (Desktop & Tablet) --- */}
        <div className="relative hidden md:block max-w-xs w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#121A14]/40">
            <Search size={16} />
          </span>
          <input
            type="text"
            placeholder="Search products, guides..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-[#121A14]/5 border border-[#121A14]/10 focus:outline-none focus:border-[#839756] focus:bg-white transition-all text-[#121A14] placeholder-[#121A14]/40"
          />
        </div>

        {/* --- Actions --- */}
        <div className="flex items-center gap-4">
          <a 
            href="/sign-in" 
            className="hidden sm:inline-block text-sm font-semibold text-[#121A14]/70 hover:text-[#121A14] transition-colors"
          >
            Sign In
          </a>
          
          <button className="group flex items-center gap-1.5 rounded-full bg-[#1ed04b] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#233126] transition-all hover:scale-[1.02] active:scale-[0.98]">
            Get Started
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-full hover:bg-[#121A14]/5 text-[#121A14] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Drawer --- */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full w-full bg-[#F5F4F0] border-b border-[#121A14]/10 p-6 flex flex-col gap-6 lg:hidden shadow-lg transition-all">
          {/* Mobile Search */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#121A14]/40">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-full bg-[#121A14]/5 border border-[#121A14]/10 focus:outline-none focus:border-[#839756] text-[#121A14]"
            />
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col gap-4 text-base font-semibold text-[#121A14]/80">
            <a href="#" className="hover:text-[#121A14] py-1 border-b border-[#121A14]/5">Product</a>
            <a href="#" className="hover:text-[#121A14] py-1 border-b border-[#121A14]/5">About</a>
            <a href="#" className="hover:text-[#121A14] py-1 border-b border-[#121A14]/5">Blogs</a>
            <a href="#" className="hover:text-[#121A14] py-1 sm:hidden">Sign In</a>
          </nav>
        </div>
      )}
    </header>
  )
}