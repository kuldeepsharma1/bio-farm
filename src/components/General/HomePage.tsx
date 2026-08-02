"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Droplets,
  Wind,
  Sprout,
  Star,
  ShieldCheck,
  Building2,
  Users,
  Store,
} from "lucide-react";
import Feature from "@/components/general/Feature";
import Methodology from "@/components/general/Methodology";
import FaqPage from "@/components/general/Faq";
import ContactPage from "@/components/general/Contact";

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

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Checks if the screen is mobile to selectively disable animations
  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Default to animating on Server-Side Render, then instantly disable on mobile client-side
  const shouldAnimate = isMounted ? !isMobile : true;

  return (
    <main className="min-h-screen bg-[#F5F4F0] font-sans text-[#121A14] selection:bg-[#FDBA21] selection:text-black overflow-hidden">

      {/* --- Immersive Hero Section --- */}
      <section className="relative flex min-h-dvh flex-col justify-center px-6 pt-24 pb-12 lg:px-12">
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col h-full justify-center">

          {/* Massive Typography */}
          <motion.h1
            initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[18vw] sm:text-[14vw] lg:text-[140px] leading-[0.85] font-medium tracking-tight text-[#121A14] z-20"
          >
            Organic <br className="hidden sm:block" /> Fertilizers
          </motion.h1>

          <div className="mt-12 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-end relative z-20">
            {/* Left Context */}
            <motion.div
              variants={fadeUp}
              initial={shouldAnimate ? "hidden" : "show"}
              animate="show"
              className="max-w-md lg:max-w-xs space-y-6"
            >
              <p className="text-base sm:text-sm font-medium leading-relaxed text-[#3A4A3E]">
                Turning food waste into clean energy and organic fertilizers,
                we create a sustainable future while reducing landfill pollution
                and carbon emissions.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="flex h-12 items-center justify-center rounded-full bg-[#20ae44] px-6 text-sm font-semibold text-white transition-all hover:bg-[#2A3B2E] active:scale-95">
                 Explore Products
                </button>
                <button
                  aria-label="Learn More"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#20ae44] text-white transition-transform hover:scale-110 hover:bg-[#2A3B2E] active:scale-95"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>

            {/* Right Context - Feature List */}
            <motion.div
              variants={stagger}
              initial={shouldAnimate ? "hidden" : "show"}
              animate="show"
              className="lg:col-start-3 space-y-6 pb-4 w-full max-w-md lg:max-w-none ml-auto"
            >
              {[
                { icon: Wind, text: "Decrease Carbon" },
                { icon: Sprout, text: "Promotes Soil Health" },
                { icon: Droplets, text: "Saves Water & Resources" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center justify-between border-b border-[#121A14]/10 pb-4 group hover:border-[#687945]/50 transition-colors"
                >
                  <span className="text-sm font-semibold text-[#121A14] group-hover:text-[#687945] transition-colors">
                    {item.text}
                  </span>
                  <item.icon size={20} className="text-[#687945]" />
                </motion.div>
              ))}

              <div className="pt-6 lg:pt-8 text-left lg:text-right">
                <div className="flex items-center justify-start lg:justify-end gap-1.5 text-xl font-bold">
                  4.8/5{" "}
                  <Star className="fill-[#FDBA21] text-[#FDBA21]" size={20} />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#3A4A3E] mt-1.5">
                  Based on 500+ reviews
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Center Plant Graphic */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-[45%] lg:top-1/2 -translate-x-1/2 -translate-y-1/2 w-70 h-90 sm:w-87.5 sm:h-112.5 lg:w-120 lg:h-150 z-10 pointer-events-none"
        >
          <img
            src="./arkin-plant.png"
            alt="Sprout in soil"
            className="w-full h-full object-cover object-bottom rounded-4xl lg:rounded-[4rem] mix-blend-multiply opacity-90"
          />
        </motion.div>
      </section>


      {/* --- Trusted By Section --- */}
      <section className="bg-white px-6 py-16 lg:py-24 lg:px-12 border-t border-[#E8EDE9]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14 lg:mb-16">
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-[#5C7A5E] mb-3">
              Credibility & Network
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A2B1C] mb-4">
              Trusted By Industry Leaders
            </h2>
            <p className="text-[#4A5C4C] max-w-xl mx-auto text-base sm:text-lg">
              Empowering sustainable yields across diverse agricultural sectors.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial={shouldAnimate ? "hidden" : "show"}
            whileInView={shouldAnimate ? "show" : undefined}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Farmers */}
            <motion.div className="p-8 bg-[#F5F4F0] rounded-3xl text-center flex flex-col items-center hover:bg-[#EAE8E1] transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-[#20ae44]/10 text-[#20ae44] flex items-center justify-center mb-5">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#121A14] mb-2">Farmers</h3>
              <p className="text-sm text-[#3A4A3E] leading-relaxed">
                Boosting crop resilience and natural soil vitality across thousands of acres.
              </p>
            </motion.div>

            {/* Dealers */}
            <motion.div className="p-8 bg-[#F5F4F0] rounded-3xl text-center flex flex-col items-center hover:bg-[#EAE8E1] transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-[#20ae44]/10 text-[#20ae44] flex items-center justify-center mb-5">
                <Store size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#121A14] mb-2">Dealers</h3>
              <p className="text-sm text-[#3A4A3E] leading-relaxed">
                Reliable distribution networks providing premium eco-friendly agricultural inputs.
              </p>
            </motion.div>

            {/* Agricultural institutions */}
            <motion.div className="p-8 bg-[#F5F4F0] rounded-3xl text-center flex flex-col items-center hover:bg-[#EAE8E1] transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-[#20ae44]/10 text-[#20ae44] flex items-center justify-center mb-5">
                <Building2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#121A14] mb-2">Institutions</h3>
              <p className="text-sm text-[#3A4A3E] leading-relaxed">
                Partnering with research hubs and universities to pioneer soil science advances.
              </p>
            </motion.div>

            {/* Certifications */}
            <motion.div className="p-8 bg-[#F5F4F0] rounded-3xl text-center flex flex-col items-center hover:bg-[#EAE8E1] transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-[#20ae44]/10 text-[#20ae44] flex items-center justify-center mb-5">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#121A14] mb-2">Certifications</h3>
              <p className="text-sm text-[#3A4A3E] leading-relaxed">
                Globally verified standards meeting strict environmental and organic compliance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* --- Educational Comparison --- */}
      <section className="bg-white px-6 py-16 lg:py-24 lg:px-12 border-t border-[#E8EDE9]">
        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <div className="text-center mb-14 lg:mb-20">
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-[#5C7A5E] mb-3">
              Soil Science
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A2B1C] mb-5">
              The Smart Soil Solution
            </h2>
            <p className="text-[#4A5C4C] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Understanding the fundamental difference in how we approach land
              management and sustainable growth with living, organic fertilizers.
            </p>
          </div>
          
        </div>
      </section>


          {/* Methodology / Comparison content */}
          <Methodology />
      
      {/* --- Bento Grid Features --- */}
      <section className="px-6 py-16 lg:py-24 lg:px-12 bg-white">
        <div className="mx-auto max-w-6xl text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Why We Are
          </h2>
          <p className="mt-4 text-[#3A4A3E] max-w-2xl mx-auto text-sm sm:text-base px-4">
            Turning food waste into clean energy and organic fertilizers, we
            create a sustainable future while reducing landfill pollution.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial={shouldAnimate ? "hidden" : "show"}
          whileInView={shouldAnimate ? "show" : undefined}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {/* Row 1 */}
          <ImageBlock src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600" />
          <FeatureBlock
            icon={Sprout}
            title="Promotes Soil Health"
            desc="We create a sustainable future while reducing landfill pollution and carbon emissions."
          />
          <ImageBlock src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0" />

          {/* Row 2 */}
          <FeatureBlock
            icon={Droplets}
            title="Saves Water & Resources"
            desc="We create a sustainable future while reducing landfill pollution and carbon emissions."
          />
          <ImageBlock src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0" />
          <FeatureBlock
            icon={Wind}
            title="Decrease Carbon"
            desc="We create a sustainable future while reducing landfill pollution and carbon emissions."
          />
        </motion.div>
      </section>

      {/* --- Featured Product Overlay --- */}
      <Feature />

      {/* --- Faq --- */}
      <FaqPage />

      {/* --- Contact Form --- */}
      <ContactPage />
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
      variants={fadeUp} // Safely inherited from parent, will not execute if parent starts at 'show'
      className="flex flex-col items-center justify-center text-center p-8 sm:p-10 bg-[#F5F4F0] rounded-4xl sm:rounded-4xl transition-colors hover:bg-[#EAE8E1] min-h-70"
    >
      <Icon size={40} className="text-[#687945] mb-5 sm:mb-6" />
      <h3 className="text-xl font-bold text-[#121A14] mb-3">{title}</h3>
      <p className="text-sm text-[#3A4A3E] leading-relaxed max-w-62.5">{desc}</p>
    </motion.div>
  );
}

function ImageBlock({ src }: { src: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="h-70 sm:h-auto min-h-70 rounded-4xl sm:rounded-4xl overflow-hidden relative group"
    >
      <img
        src={src}
        alt="Agriculture feature"
        className="w-full h-full object-cover transition-transform duration-1000 lg:group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/5 lg:group-hover:bg-transparent transition-colors duration-500" />
    </motion.div>
  );
}