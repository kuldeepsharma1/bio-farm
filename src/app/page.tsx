"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Leaf,
  Menu,
  ArrowRight,
  Droplets,
  Wind,
  Sprout,
  Minus,
  Plus,
  Star,
} from "lucide-react";
import Feature from "@/components/general/Feature";
import Methodology from "@/components/general/Methodology";

// --- Animation Config ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function PremiumOrganicAg() {
  return (
    <main className="min-h-screen bg-[#F5F4F0] font-sans text-[#121A14] selection:bg-[#FDBA21] selection:text-black overflow-hidden">
      {/* --- Immersive Hero Section (Ref: image_ee7d0b.png) --- */}
      <section className="relative flex min-h-screen flex-col justify-center px-6 pt-24 lg:px-12">
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Massive Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] leading-[0.9] font-medium tracking-tight text-[#121A14] md:text-[140px]"
          >
            Organic <br /> Fertilizers
          </motion.h1>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
            {/* Left Context */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="max-w-xs space-y-6"
            >
              <p className="text-sm font-medium leading-relaxed text-[#3A4A3E]">
                Turning food waste into a clean energy and organic fertilizers,
                we create a sustainable future while reducing landfill pollution
                and carbon emissions.
              </p>
              <div className="flex items-center gap-4">
                <button className="flex h-12 items-center justify-center rounded-full bg-[#121A14] px-6 text-sm font-semibold text-white transition-all hover:bg-[#2A3B2E]">
                  View Product
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FDBA21] text-black transition-transform hover:scale-110">
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>

            {/* Right Context - Feature List */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="md:col-start-3 space-y-6 pb-4"
            >
              {[
                { icon: Wind, text: "Decrease Carbon" },
                { icon: Sprout, text: "Promotes Soil Health" },
                { icon: Droplets, text: "Saves Water & Resources" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center justify-between border-b border-[#121A14]/10 pb-4"
                >
                  <span className="text-sm font-semibold text-[#121A14]">
                    {item.text}
                  </span>
                  <item.icon size={20} className="text-[#687945]" />
                </motion.div>
              ))}

              <div className="pt-8 text-right">
                <div className="flex items-center justify-end gap-1 text-xl font-bold">
                  4.8/5{" "}
                  <Star className="fill-[#FDBA21] text-[#FDBA21]" size={20} />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#3A4A3E] mt-1">
                  Based on 500+ reviews
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Center Plant Graphic - Positioned Absolutely to break the grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[-40%] w-75 h-100 md:w-125 md:h-150 z-0 pointer-events-none"
        >
          {/* Using CSS mix-blend-multiply to blend a white-background image seamlessly into the beige background */}
          <img
            src="./arkin-plant.png"
            alt="Sprout in soil"
            className="w-full h-full object-cover object-bottom rounded-[4rem] mix-blend-multiply opacity-90"
          />
        </motion.div>
      </section>

      {/* --- Educational Comparison (Ref: image_ee79e7.jpg) --- */}
      <section className="px-6 py-24 lg:px-12 border-t border-[#121A14]/10">
        <div className="mx-auto max-w-6xl text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#121A14]">
            The Smart Soil Solution
          </h2>
          <p className="text-[#3A4A3E] max-w-xl mx-auto">
            Understanding the fundamental difference in how we approach land
            management.
          </p>
        </div>

      <Methodology/>
      </section>

      {/* --- Bento Grid Features (Ref: image_ee7d0b.png) --- */}
      <section className="px-6 py-24 lg:px-12 bg-white">
        <div className="mx-auto max-w-6xl text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Why We Are
          </h2>
          <p className="mt-4 text-[#3A4A3E] max-w-2xl mx-auto">
            Turning food waste into clean energy and organic fertilizers, we
            create a sustainable future while reducing landfill pollution.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Row 1 */}
          <ImageBlock src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600" />
          <FeatureBlock
            icon={Sprout}
            title="Promotes Soil Health"
            desc="We create a sustainable future while reducing landfill pollution and carbon emissions."
          />
          <ImageBlock src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          {/* Row 2 */}
          <FeatureBlock
            icon={Droplets}
            title="Saves Water & Resources"
            desc="We create a sustainable future while reducing landfill pollution and carbon emissions."
          />
          <ImageBlock src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <FeatureBlock
            icon={Wind}
            title="Decrease Carbon"
            desc="We create a sustainable future while reducing landfill pollution and carbon emissions."
          />
        </motion.div>
      </section>

      {/* --- Featured Product Overlay (Ref: image_ee7d0b.png) --- */}
      <Feature />
    </main>
  );
}

// --- Helper Components for Bento Grid ---

function FeatureBlock({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col items-center justify-center text-center p-10 bg-[#F5F4F0] rounded-4xl transition-colors hover:bg-[#EAE8E1]"
    >
      <Icon size={40} className="text-[#687945] mb-6" />
      <h3 className="text-xl font-bold text-[#121A14] mb-3">{title}</h3>
      <p className="text-sm text-[#3A4A3E] leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function ImageBlock({ src }: { src: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="h-64 md:h-auto rounded-4xl overflow-hidden"
    >
      <img
        src={src}
        alt="Ag feature"
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
      />
    </motion.div>
  );
}
