'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Mail, ArrowUpRight, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-white p-4 text-slate-900 sm:p-8 selection:bg-emerald-500 selection:text-white">
      {/* Subtle Background Glow for Richness */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="h-125 w-125 rounded-full bg-emerald-50/50 blur-[120px]" />
      </div>

      {/* Main Card Container matching the layout wireframe */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] sm:p-12 lg:p-14"
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column: Text & Actions */}
          <div className="flex flex-col items-center justify-center text-center lg:col-span-6 lg:items-start lg:text-left">
            {/* 404 NOT FOUND Tag */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 shadow-2xs backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 animate-spin text-emerald-600" style={{ animationDuration: '8s' }} />
              404 Not Found
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl font-medium tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl">
              This page never <span className="block italic text-emerald-600">took root.</span>
            </h1>

            {/* Description */}
            <p className="my-5 max-w-md text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
              The page you&apos;re looking for doesn&apos;t exist or has been relocated to greener pastures.
            </p>

            {/* Action Buttons Section */}
            <div className="mt-2 flex w-full flex-col gap-3">
              <Link 
                href="/"
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-emerald-600/30"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                Return Home
              </Link>

              {/* Blog & Contact Links */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  href="/blogs"
                  className="group flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/60 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-700 transition-all duration-200 hover:border-emerald-300 hover:bg-emerald-50/40 hover:text-emerald-900"
                >
                  <span className="flex items-center gap-2 truncate">
                    <BookOpen className="h-3.5 w-3.5 text-emerald-600" />
                    Blog
                  </span>
                  <ArrowUpRight className="h-3 w-3 opacity-60 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/contact-us"
                  className="group flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/60 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-700 transition-all duration-200 hover:border-emerald-300 hover:bg-emerald-50/40 hover:text-emerald-900"
                >
                  <span className="flex items-center gap-2 truncate">
                    <Mail className="h-3.5 w-3.5 text-emerald-600" />
                    Contact
                  </span>
                  <ArrowUpRight className="h-3 w-3 opacity-60 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: HUGE 404 & Eco Landscape */}
          <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-3xl border border-slate-200/80 bg-linear-to-b from-sky-50/60 via-emerald-50/20 to-emerald-100/10 p-6 shadow-inner sm:h-80 lg:col-span-6 lg:h-96">
            
            {/* HUGE 404 Watermark Background */}
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
              <span className="font-black text-emerald-900/4 text-[10rem] sm:text-[14rem] tracking-tighter leading-none">
                404
              </span>
            </div>

            {/* Eco Landscape SVG with 🌱 Element */}
            <svg
              viewBox="0 0 600 240"
              className="relative z-10 h-full w-full text-slate-700 drop-shadow-sm"
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
      </motion.div>
    </main>
  );
}