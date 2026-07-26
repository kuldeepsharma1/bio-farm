'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Compass, BookOpen } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="h-screen w-screen bg-slate-50/60 text-slate-900 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-hidden selection:bg-emerald-500 selection:text-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-6 right-6 w-112.5 h-112.5 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px] opacity-30 pointer-events-none" />

      {/* Main Glassmorphism Card (Centered & Scroll-Free) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-6xl bg-white/90 backdrop-blur-2xl p-6 sm:p-8 lg:p-12 rounded-[2.5rem] border border-slate-200/80 shadow-2xl shadow-slate-200/50 flex flex-col justify-between overflow-hidden z-10"
      >
        {/* Top Accent Illumination */}
        <div className="absolute top-0 inset-x-0 h-0.5 bg-linear-to-r from-transparent via-emerald-500/60 to-transparent" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs tracking-widest uppercase border border-emerald-200/80 shadow-2xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-spin" style={{ animationDuration: '8s' }} />
              Error 404 • Page Not Found
            </div>

            {/* Main Headlines */}
            <h2 className="text-xl sm:text-2xl font-bold text-emerald-600 tracking-wide">
              Uh Ohh!
            </h2>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-none my-1">
              404
            </h1>

            <p className="text-slate-600 text-sm sm:text-base max-w-md my-4 leading-relaxed font-normal">
              The page you&apos;re looking for seems to have wandered off into greener pastures. Let&apos;s guide you back to familiar ground.
            </p>

            {/* Primary Action Button */}
            <div className="pt-2">
              <Link 
                href="/"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/35 transform hover:-translate-y-0.5 text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Return to Homepage
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Eco Landscape SVG */}
          <div className="lg:col-span-6 w-full h-48 sm:h-64 lg:h-80 bg-linear-to-b from-sky-50/70 via-emerald-50/30 to-emerald-100/20 rounded-3xl border border-slate-200/80 p-4 flex items-center justify-center overflow-hidden shadow-inner relative">
            <svg
              viewBox="0 0 600 240"
              className="w-full h-full text-slate-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Mountains Background */}
              <path d="M 30 150 L 120 60 L 180 110 L 250 85 L 350 150 L 480 50 L 580 150" opacity="0.3" strokeDasharray="4 4" />
              
              {/* Clouds */}
              <path d="M 80 40 Q 95 30 110 40 Q 125 30 140 40 Q 150 45 140 50 L 80 50 Q 70 45 80 40 Z" fill="currentColor" fillOpacity="0.04" opacity="0.5" />
              <path d="M 420 45 Q 435 35 450 45 Q 465 35 480 45 Q 490 50 480 55 L 420 55 Q 410 50 420 45 Z" fill="currentColor" fillOpacity="0.04" opacity="0.5" />

              {/* Rolling Ground Curves */}
              <path d="M 0 160 Q 300 200 600 160" strokeWidth="2" />
              <path d="M 0 172 Q 300 212 600 172" strokeWidth="1" opacity="0.3" />

              {/* Left Tree Group */}
              <g transform="translate(45, 115)">
                <path d="M 10 45 L 10 12 M 10 28 L 3 20 M 10 23 L 17 16" strokeWidth="1.5" />
                <path d="M 10 12 C 2 12 -2 0 10 -18 C 22 0 18 12 10 12 Z" fill="#6EE7B7" fillOpacity="0.45" strokeWidth="1.5" />
              </g>
              <g transform="translate(90, 125)">
                <path d="M 8 32 L 8 8" strokeWidth="1.5" />
                <path d="M 8 8 C 2 8 -1 -2 8 -16 C 17 -2 14 8 8 8 Z" fill="#6EE7B7" fillOpacity="0.35" strokeWidth="1.5" />
              </g>

              {/* Right Tree Group */}
              <g transform="translate(480, 110)">
                <path d="M 12 48 L 12 12 M 12 28 L 4 20 M 12 24 L 20 17" strokeWidth="1.5" />
                <path d="M 12 12 C 3 12 -2 0 12 -22 C 26 0 21 12 12 12 Z" fill="#34D399" fillOpacity="0.35" strokeWidth="1.5" />
              </g>
              <g transform="translate(530, 122)">
                <path d="M 10 36 L 10 8" strokeWidth="1.5" />
                <path d="M 10 8 C 3 8 -1 -2 10 -18 C 21 -2 17 8 10 8 Z" fill="#34D399" fillOpacity="0.45" strokeWidth="1.5" />
              </g>

              {/* Grass / Bushes */}
              <path d="M 160 170 Q 170 155 185 170 Q 195 158 210 170" fill="#10B981" fillOpacity="0.2" strokeWidth="1" />
              <path d="M 390 172 Q 400 158 415 172 Q 425 160 445 172" fill="#10B981" fillOpacity="0.25" strokeWidth="1" />
            </svg>
          </div>

        </div>

        {/* Bottom Nav Links */}
        <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <Link 
            href="/products"
            className="group p-4 rounded-2xl bg-slate-50/80 hover:bg-emerald-50/40 transition-all duration-300 border border-slate-200/80 hover:border-emerald-300 flex items-center gap-4 shadow-2xs hover:shadow-sm"
          >
            <div className="p-3 rounded-xl bg-white text-emerald-600 border border-slate-200/60 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Explore Products
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Browse our eco-friendly organic collection.
              </p>
            </div>
          </Link>

          <Link 
            href="/blogs"
            className="group p-4 rounded-2xl bg-slate-50/80 hover:bg-emerald-50/40 transition-all duration-300 border border-slate-200/80 hover:border-emerald-300 flex items-center gap-4 shadow-2xs hover:shadow-sm"
          >
            <div className="p-3 rounded-xl bg-white text-emerald-600 border border-slate-200/60 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Read Our Blog
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Learn about sustainable farming techniques.
              </p>
            </div>
          </Link>
        </div>

      </motion.div>
    </main>
  );
}