'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Compass,
  Mail,
  Search,
  Sprout,
} from 'lucide-react';


export default function NotFound() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
        delayChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <main className="relative min-h-screen w-full select-none overflow-hidden bg-[#fafbf9] text-[#19241b] antialiased">
      {/* Background Atmosphere */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 h-168 w-2xl -translate-x-1/2 rounded-full bg-emerald-100/30 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-128 w-lg rounded-full bg-lime-100/25 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.28] mix-blend-multiply"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(16, 40, 24, 0.08) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Main Layout Container */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-12 sm:px-10 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid w-full items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16 xl:gap-24"
        >
          {/* Left: Content Information */}
          <div className="flex flex-col justify-center">
            {/* Brand Header */}
            <motion.div variants={itemVariants} className="mb-8 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-2xl bg-linear-to-b from-[#0e703c] to-[#0a582f] shadow-[0_4px_16px_rgba(14,112,60,0.22)] ring-1 ring-white/20">
                <Sprout className="size-5 text-white" strokeWidth={2.2} />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-semibold tracking-tight text-[#142017]">
                  Arkin
                </span>
                <span className="text-[10px] font-medium tracking-[0.16em] text-[#718074]">
                  ORGANIC AGRICULTURE
                </span>
              </div>
            </motion.div>

            {/* Error Pill */}
            <motion.div variants={itemVariants} className="mb-6 flex items-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d3e5d7] bg-[#eef7f0]/80 px-3 py-1.5 backdrop-blur-md">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#189e50] opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#1b8747]" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0d6d3a]">
                  404 · Page Not Found
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl font-medium tracking-[-0.04em] text-[#121c14] sm:text-6xl lg:text-[6rem] lg:leading-[0.9]">
                Lost in the{' '}
                <span className="bg-linear-to-r from-[#0c6b38] to-[#259b58] bg-clip-text text-transparent">
                  tall grass.
                </span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-md text-base leading-relaxed text-[#5c685f] sm:text-lg"
            >
              The path you requested might have been pruned, relocated, or has not yet taken root in our fields.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center"
            >
              <Link
                href="/"
                className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-4xl bg-[#0c6b38] px-6 text-sm font-medium text-white shadow-[0_4px_20px_rgba(12,107,56,0.22),inset_0_1px_1px_rgba(255,255,255,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0a5c30] hover:shadow-[0_8px_24px_rgba(12,107,56,0.28)] active:translate-y-0 active:scale-[0.98]"
              >
                <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                Back to overview
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-4xl border border-[#d6ddd6] bg-white/70 px-6 text-sm font-medium text-[#212d24] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:border-[#cbd4cb] hover:shadow-[0_4px_14px_rgba(0,0,0,0.06)] active:translate-y-0 active:scale-[0.98]"
              >
                <Mail className="size-4 text-[#5c6b5e]" />
                Contact help desk
              </Link>
            </motion.div>

            {/* Directory Navigation Links */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-6 border-t border-[#e2e7e2] pt-6 text-xs font-medium text-[#657368]"
            >
              <Link
                href="/blogs"
                className="group inline-flex items-center gap-1.5 transition-colors hover:text-[#0c6b38]"
              >
                <BookOpen className="size-3.5 opacity-70" />
                <span>Agricultural Journals</span>
                <ArrowUpRight className="size-3 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:translate-y--0.5 group-hover:opacity-100" />
              </Link>

              <span className="size-1 rounded-full bg-[#d0d7d0]" />

              <Link
                href="/our-farms"
                className="group inline-flex items-center gap-1.5 transition-colors hover:text-[#0c6b38]"
              >
                <Search className="size-3.5 opacity-70" />
                <span>Field Search</span>
                <ArrowUpRight className="size-3 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:translate-y--0.5 group-hover:opacity-100" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Glassmorphic Visual Artboard */}
          <motion.div
            variants={itemVariants}
            className="relative mx-auto aspect-square w-full max-w-135"
          >
            {/* Outer Soft Light Ring */}
            <div className="absolute inset-2 rounded-[48px] bg-linear-to-tr from-emerald-100/40 via-white/5 to-amber-100/30 blur-2xl" />

            {/* Glass Container Card */}
            <div className="relative h-full w-full overflow-hidden rounded-[44px] border border-white/90 bg-white/50 p-8 shadow-[0_24px_70px_rgba(23,43,28,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-2xl">
              
              {/* Background 404 Typography Watermark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="pointer-events-none select-none text-[15rem] font-bold tracking-tighter text-[#0c6b38]/[0.035] sm:text-[18rem]">
                  404
                </span>
              </div>

              {/* Sun Visual Component */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -6, 0],
                        scale: [1, 1.02, 1],
                      }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute right-[18%] top-[18%] size-20 rounded-full bg-linear-to-br from-[#f8e48b] to-[#f0be47] opacity-90 shadow-[0_0_60px_rgba(240,190,71,0.45)] ring-4 ring-[#faeab0]/30"
              />

              {/* Landscape Hills (Layered SVG Depth) */}
              <svg
                viewBox="0 0 700 360"
                className="absolute inset-x-0 bottom-[14%] h-[50%] w-full"
                preserveAspectRatio="none"
              >
                {/* Back Layer */}
                <path
                  d="M0 260 C120 180 180 210 260 230 C340 250 400 160 480 190 C560 220 620 180 700 220 L700 360 L0 360Z"
                  fill="#c0d7c3"
                  opacity="0.5"
                />
                {/* Mid Layer */}
                <path
                  d="M0 290 C110 230 190 250 280 270 C370 290 430 200 520 240 C600 275 640 230 700 255 L700 360 L0 360Z"
                  fill="#9ebc9f"
                  opacity="0.65"
                />
              </svg>

              {/* Foreground Field Ground */}
              <div className="absolute inset-x-0 bottom-0 h-[28%] bg-linear-to-b from-[#4a7a58] to-[#2f553b]">
                {/* Field Texture Blades */}
                <div className="absolute inset-0 opacity-20">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <span
                      key={i}
                      className="absolute bottom-0 block h-[70%] w-px origin-bottom bg-white"
                      style={{
                        left: `${3 + i * 5.6}%`,
                        transform: `rotate(${i % 2 === 0 ? -8 : 8}deg)`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Top Glass Badge */}
              <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-3.5 py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] backdrop-blur-md">
                <Compass className="size-3.5 text-[#0c6b38]" />
                <span className="text-[11px] font-medium tracking-wide text-[#344237]">
                  Coordinates Unresolved
                </span>
              </div>

              {/* Bottom Dynamic Metric Card */}
              <div className="absolute bottom-6 right-6 z-10 rounded-2xl border border-white/90 bg-white/80 p-4 shadow-[0_12px_32px_rgba(20,40,25,0.08)] backdrop-blur-lg">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7a887d]">
                  Harvest Status
                </p>
                <p className="mt-0.5 text-xs font-semibold text-[#18261b]">
                  Zero nodes detected
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}