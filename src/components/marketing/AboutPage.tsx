"use client";

import { motion, Variants } from "framer-motion";
import { 
  Leaf, 
  ArrowRight,
  Wind,
  Droplets,
  Target,
  Activity
} from "lucide-react";

// --- Animation Variants (Matching Homepage System) ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F4F0] font-sans text-[#121A14] selection:bg-[#FDBA21] selection:text-black overflow-hidden pt-20">
      
      {/* --- Section 1: Massive Display Hero --- */}
      <section className="relative flex min-h-[85vh] flex-col justify-center px-6 lg:px-12 border-b border-[#121A14]/10">
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-[#687945] block mb-4"
          >
            Our Roots & Vision
          </motion.span>

          {/* Massive Editorial Typography matching Homepage */}
          <motion.h1 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10vw] leading-[0.9] font-medium tracking-tight text-[#121A14] md:text-[130px]"
          >
            Restoring <br />
            <span className="italic text-[#839756]">The Core</span> Ecosystem.
          </motion.h1>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
            {/* Mission Statement */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-xs space-y-6">
              <p className="text-sm font-medium leading-relaxed text-[#3A4A3E]">
                We believe that premium agriculture shouldn&apos;t deplete the earth. By re-engineering the cycle of organic waste, we produce biological catalysts that regenerate soil performance naturally.
              </p>
              <div className="flex items-center gap-4">
                <button className="flex h-12 items-center justify-center rounded-full bg-[#121A14] px-6 text-sm font-semibold text-white transition-all hover:bg-[#2A3B2E]">
                  Read Our Manifest
                </button>
              </div>
            </motion.div>

            {/* Quick Stats Grid Column */}
            <motion.div variants={stagger} initial="hidden" animate="show" className="md:col-start-3 space-y-6 pb-4">
              {[
                { label: "Land Reclaimed", value: "140k+ Acres" },
                { label: "Waste Transformed", value: "85M+ Tons" },
                { label: "Carbon Offset Metric", value: "-32% Net" }
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-center justify-between border-b border-[#121A14]/10 pb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#3A4A3E]">{stat.label}</span>
                  <span className="text-lg font-bold text-[#687945]">{stat.value}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Blended Organic Imagery element matching Homepage visual rules */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[65%] top-1/2 -translate-x-1/2 translate-y-[-45%] w-70 h-95 md:w-115 md:h-140 z-0 pointer-events-none hidden md:block"
        >
          <img 
            src="https://images.unsplash.com/photo-1592982537447-6f23f662706e?auto=format&fit=crop&q=80&w=1000" 
            alt="Rich soil layers" 
            className="w-full h-full object-cover rounded-[4rem] mix-blend-multiply opacity-80"
          />
        </motion.div>
      </section>

      {/* --- Section 2: The Manifesto Split Line System --- */}
      <section className="px-6 py-28 lg:px-12 bg-white text-[#121A14]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 sticky top-28 h-fit">
            <span className="text-xs font-bold uppercase tracking-widest text-[#839756] block mb-4">Our Method</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Closing the <br />Agricultural Loop.
            </h2>
            <div className="h-12 w-12 rounded-full bg-[#FDBA21] flex items-center justify-center text-black mt-8">
              <Target size={20} />
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-16">
            <div className="border-t border-[#121A14]/10 pt-8">
              <h3 className="text-2xl font-bold mb-4 text-[#687945]">01 / Upcycled Nutrients</h3>
              <p className="text-base text-[#3A4A3E] leading-relaxed">
                Traditional fertilizer manufacturing relies heavily on mineral mining and synthetic chemicals that temporarily spike plant growth while systematically burning out biological soil life. We gather clean organic food matrices, converting structural waste back into bio-available fuel cells.
              </p>
            </div>

            <div className="border-t border-[#121A14]/10 pt-8">
              <h3 className="text-2xl font-bold mb-4 text-[#687945]">02 / Microbiome Acceleration</h3>
              <p className="text-base text-[#3A4A3E] leading-relaxed">
                Healthy soil is alive. Our formulations are built to actively populate the sub-surface rhizosphere with robust microbial agents. This increases natural crop resilience, dramatically upgrades root nutrient transfer coefficients, and significantly preserves systemic moisture profiles.
              </p>
            </div>

            <div className="border-t border-[#121A14]/10 pt-8">
              <h3 className="text-2xl font-bold mb-4 text-[#687945]">03 / Environmental Optimization</h3>
              <p className="text-base text-[#3A4A3E] leading-relaxed">
                Every unit of BioAg output addresses two planetary fronts at once: preventing methane production out of mass municipal food dumping systems while concurrently decreasing reliance on volatile synthetic chemical applications down-stream.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- Section 3: High-Fidelity Bento Block System --- */}
      <section className="px-6 py-24 lg:px-12 bg-[#F5F4F0]">
        <div className="mx-auto max-w-7xl text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#121A14]">Engineered For Earth</h2>
          <p className="mt-4 text-[#3A4A3E] max-w-xl mx-auto text-sm">
            We use advanced processing pathways to turn high-grade compost matrices into standard predictable outputs for hyper-scale operations.
          </p>
        </div>

        <motion.div 
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} 
          className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1 */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-[#121A14]/5 flex flex-col justify-between min-h-80">
            <div className="h-12 w-12 rounded-2xl bg-[#839756]/10 flex items-center justify-center text-[#687945]">
              <Wind size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#121A14] mb-3">Carbon Sequestration</h3>
              <p className="text-sm text-[#3A4A3E] leading-relaxed">
                Our active biological organic compound profile fixes volatile atmospheric cycles directly down into foundational humus profiles safely.
              </p>
            </div>
          </div>

          {/* Card 2: Immersive Image Component Block */}
          <div className="rounded-[2.5rem] overflow-hidden min-h-80 relative group shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800" 
              alt="Sun shining over farm landscape" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#121A14]/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FDBA21]">Field Performance</span>
              <p className="text-sm mt-1 text-white/90">Proven across 40+ dynamic continental microclimates.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-[#121A14]/5 flex flex-col justify-between min-h-80">
            <div className="h-12 w-12 rounded-2xl bg-[#839756]/10 flex items-center justify-center text-[#687945]">
              <Droplets size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#121A14] mb-3">Hydro-Retention Matrix</h3>
              <p className="text-sm text-[#3A4A3E] leading-relaxed">
                Increases internal micro-porosity factors inside topsoils, drastically lowering raw systemic water supply dependencies.
              </p>
            </div>
          </div>

          {/* Card 4: Full Horizontal Split Image Block across grid systems */}
          <div className="md:col-span-2 rounded-[2.5rem] overflow-hidden min-h-80 relative group">
            <img 
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=1200" 
              alt="Analyzing organic inputs" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
          </div>

          {/* Card 5 */}
          <div className="bg-[#687945] p-10 rounded-[2.5rem] flex flex-col justify-between min-h-80 text-white">
            <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#FDBA21]">
              <Activity size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Laboratory Verified</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Continuous elemental, molecular, and pathogenic tracking runs ensure absolute safety profiles across high-density harvests.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- Section 4: Premium Dark Call to Action Matrix --- */}
      <section className="px-6 py-16 lg:px-12 bg-[#F5F4F0]">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-[#121A14] p-12 md:p-20 text-white relative overflow-hidden shadow-xl">
          
          {/* Subtle asset line vector styling overlay */}
          <div className="absolute right-0 bottom-0 w-[40%] h-[80%] opacity-10 pointer-events-none">
            <Leaf size={400} className="text-white transform translate-x-1/4 translate-y-1/4" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FDBA21] block mb-4">Join The Transition</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
              Ready to transform your soil production standards?
            </h2>
            <p className="text-sm text-white/70 mb-10 leading-relaxed max-w-lg">
              Partner with BioAg to establish pure, sustainable agriculture cycles. Let us build custom organic solutions optimized specifically to target your local production limits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex h-14 items-center justify-center gap-2 rounded-full bg-[#839756] px-8 font-semibold text-white transition-all hover:bg-[#687945]">
                Consult Our Agronomists
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button className="h-14 rounded-full border border-white/20 px-8 font-semibold text-white transition-colors hover:bg-white/5">
                Review Scientific Data
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}