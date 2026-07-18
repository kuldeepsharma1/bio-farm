"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Leaf, CircuitBoard, Award, Globe, FlaskConical, HeadsetIcon, ArrowRight } from "lucide-react";

// --- Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home({ blogs, products }: any) {
  return (
    <main className="bg-[#FAF9F6] text-[#121A14]">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#121A14]/5" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#839756]/30 text-[#839756] font-bold text-[10px] uppercase tracking-[0.2em]">
              Sustainable Agriculture
            </span>
            <h1 className="text-6xl lg:text-8xl font-medium leading-[0.95] tracking-tight">
              Nature’s Best <span className="text-[#839756]">Organic</span>
            </h1>
            <p className="text-lg text-[#121A14]/70 max-w-lg leading-relaxed font-light">
              Transform your cultivation with our premium organic fertilizers. 
              Scientifically formulated for peak vitality and environmental harmony.
            </p>
            <div className="flex gap-4">
              <Link href="/products" className="px-8 py-4 bg-[#121A14] text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#839756] transition-all">
                Shop Collection
              </Link>
            </div>
          </div>
          
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/arkinimage.jpg" alt="Hero" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { title: "Eco-Friendly", icon: <Leaf /> },
            { title: "Advanced Tech", icon: <CircuitBoard /> },
            { title: "Expert Support", icon: <HeadsetIcon /> }
          ].map((item, i) => (
            <motion.div key={i} variants={itemVariants} className="p-10 bg-white border border-[#121A14]/5 rounded-3xl hover:border-[#839756]/50 transition-colors">
              <div className="w-12 h-12 bg-[#839756]/10 flex items-center justify-center rounded-xl mb-6 text-[#839756]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-[#121A14]/60 text-sm">Sustainable solutions for modern agriculture.</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-[#121A14] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-medium mb-16 tracking-tight">Featured Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product: any, i: number) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                  <Image src={product.image} alt={product.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="font-bold text-lg">{product.title}</h4>
                <p className="text-[#839756] mb-4">{product.price}</p>
                <Link href={`/products/${product.productId}`} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                  Details <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}