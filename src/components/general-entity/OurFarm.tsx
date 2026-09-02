"use client";

import React from "react";
import Image from "next/image";
import {
  Leaf,
  ShieldCheck,
  Sprout,
  Droplets,
  FlaskConical,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Award,
  HeartHandshake,
} from "lucide-react";

export default function OrganicFertilizerPage() {
  return (
    <main className="overflow-hidden bg-white text-[#1A2B1C] font-sans selection:bg-[#2E7D32] selection:text-white">
      
      {/* 1. Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[85vh] py-24 px-4 sm:px-6 lg:px-12 text-center bg-[#F7F9F6]">
        {/* Soft background image */}
        <div className="absolute inset-0 -z-10 opacity-[0.07]">
          <Image
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=2000"
            alt="Organic farm texture"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-[#2E7D32] uppercase text-xs font-semibold tracking-widest bg-[#2E7D32]/8 px-4 py-1.5 rounded-full border border-[#2E7D32]/15">
            <Leaf size={14} className="fill-[#2E7D32]" />
            <span>Certified Organic Nutrition</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A2B1C] leading-[1.15]">
            Nourish the Future with
            <br />
            <span className="text-[#2E7D32]">
              Pure Organic Soil Health
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-[#5A6B5C] leading-relaxed">
            Harnessing advanced biological science and pure organic inputs to revitalize soil microbiomes, enhance water retention, and sustainably maximize crop yields.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-[#2E7D32] text-sm font-semibold text-white hover:bg-[#256B29] transition-all active:scale-[0.98] shadow-sm group"
            >
              <span>Explore Solutions</span>
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#science"
              className="inline-flex items-center h-12 px-8 rounded-full bg-white border border-[#D5DDD7] text-sm font-semibold text-[#1A2B1C] hover:bg-[#F0F4F1] transition-all active:scale-[0.98]"
            >
              Our Formulation Science
            </a>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E4EAE5] text-xs font-medium text-[#3A4A3E] shadow-sm">
              <ShieldCheck size={15} className="text-[#2E7D32]" />
              Certified Organic Inputs
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E4EAE5] text-xs font-medium text-[#3A4A3E] shadow-sm">
              <Globe2 size={15} className="text-[#2E7D32]" />
              Eco-Conscious Production
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E4EAE5] text-xs font-medium text-[#3A4A3E] shadow-sm">
              <Award size={15} className="text-[#2E7D32]" />
              Enhanced Crop Yield
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Science Section */}
      <section id="science" className="py-24 px-4 sm:px-6 lg:px-12 bg-white border-t border-[#E4EAE5]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Side */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-lg relative aspect-[4/3] border border-[#E4EAE5]">
              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1200"
                alt="Rich organic compost and healthy soil"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 hidden sm:flex items-center gap-3 bg-white border border-[#E4EAE5] p-4 rounded-2xl shadow-md">
              <div className="w-11 h-11 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center">
                <Sprout size={22} />
              </div>
              <div>
                <p className="text-xs text-[#5A6B5C] font-medium">Microbiome Level</p>
                <p className="text-sm font-semibold text-[#1A2B1C]">100% Biological Purity</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#2E7D32] uppercase text-xs font-semibold tracking-widest bg-[#2E7D32]/8 px-3 py-1 rounded-full border border-[#2E7D32]/15">
              <FlaskConical size={13} />
              <span>Formulation Science</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1A2B1C] tracking-tight leading-[1.2]">
              The Science of Healthy,
              <br />
              Self-Sustaining Soil
            </h2>

            <p className="text-[#5A6B5C] text-sm sm:text-base leading-relaxed">
              Our organic fertilizers deliver more than basic macro-nutrients. Through proprietary biological composting methods, we cultivate diverse microbial networks that optimize soil structure and nutrient bio-availability.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F9F6] border border-[#E4EAE5] hover:border-[#2E7D32]/20 transition-all">
                <div className="shrink-0 p-2.5 bg-[#2E7D32]/10 rounded-xl text-[#2E7D32]">
                  <Sprout size={20} />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#1A2B1C] mb-1">Enriches Soil Biology</h3>
                  <p className="text-[#5A6B5C] text-sm leading-relaxed">
                    Introduces specialized microorganisms to build a thriving, long-term underground ecosystem.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F9F6] border border-[#E4EAE5] hover:border-[#2E7D32]/20 transition-all">
                <div className="shrink-0 p-2.5 bg-[#2E7D32]/10 rounded-xl text-[#2E7D32]">
                  <Droplets size={20} />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#1A2B1C] mb-1">Improves Water Retention</h3>
                  <p className="text-[#5A6B5C] text-sm leading-relaxed">
                    Enhances natural soil architecture to hold critical moisture efficiently during dry spells.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F9F6] border border-[#E4EAE5] hover:border-[#2E7D32]/20 transition-all">
                <div className="shrink-0 p-2.5 bg-[#2E7D32]/10 rounded-xl text-[#2E7D32]">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#1A2B1C] mb-1">Boosts Nutrient Bio-Uptake</h3>
                  <p className="text-[#5A6B5C] text-sm leading-relaxed">
                    Unlocks bound soil minerals so crops absorb vital nutrients naturally without chemical lockup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Commitment to Sustainability */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#F7F9F6] border-t border-[#E4EAE5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 text-[#2E7D32] uppercase text-xs font-semibold tracking-widest bg-[#2E7D32]/8 px-3 py-1 rounded-full border border-[#2E7D32]/15">
              <Leaf size={13} className="fill-[#2E7D32]" />
              <span>Ecological Stewardship</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1A2B1C] tracking-tight">
              Our Commitment to a Greener Planet
            </h2>
            <p className="text-[#5A6B5C] text-sm sm:text-base leading-relaxed">
              Driving regenerative agriculture forward by eliminating heavy synthetic footprints and prioritizing long-term ecological balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-[#E4EAE5] p-7 sm:p-8 rounded-2xl flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Globe2 size={24} />
                </div>
                <h3 className="text-lg font-semibold text-[#1A2B1C] mb-2.5">Reduced Footprint</h3>
                <p className="text-[#5A6B5C] text-sm leading-relaxed">
                  Our organic formulations minimize chemical runoff, conserve natural watersheds, and eliminate reliance on energy-intensive synthetic inputs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E4EAE5] text-xs font-medium text-[#2E7D32]">
                Zero Synthetic Runoff
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#E4EAE5] p-7 sm:p-8 rounded-2xl flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Sprout size={24} />
                </div>
                <h3 className="text-lg font-semibold text-[#1A2B1C] mb-2.5">Biodiversity & Soil Health</h3>
                <p className="text-[#5A6B5C] text-sm leading-relaxed">
                  By fostering rich microbial communities and strengthening natural humus layers, our products support active ecosystems above and below ground.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E4EAE5] text-xs font-medium text-[#2E7D32]">
                Revitalized Micro-Life
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#E4EAE5] p-7 sm:p-8 rounded-2xl flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <HeartHandshake size={24} />
                </div>
                <h3 className="text-lg font-semibold text-[#1A2B1C] mb-2.5">Sustainable Farming</h3>
                <p className="text-[#5A6B5C] text-sm leading-relaxed">
                  Empowering commercial growers, farms, and nurseries to implement sustainable routines that protect arable land for generations to come.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E4EAE5] text-xs font-medium text-[#2E7D32]">
                Generational Preservation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 bg-white border-t border-[#E4EAE5]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#F7F9F6] border border-[#E4EAE5] rounded-3xl sm:rounded-[32px] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-sm">
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 text-[#2E7D32] uppercase text-xs font-semibold tracking-widest bg-[#2E7D32]/8 px-4 py-1.5 rounded-full border border-[#2E7D32]/15">
                <Leaf size={13} className="fill-[#2E7D32]" />
                <span>Start Your Transition</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1A2B1C] tracking-tight">
                Ready to Grow Sustainably?
              </h2>

              <p className="text-[#5A6B5C] text-sm sm:text-base leading-relaxed">
                Discover how our premium organic fertilizers can transform your farm, commercial orchard, or nursery operations. Contact our agricultural specialists today.
              </p>

              <div className="pt-2">
                <a
                  href="mailto:sales@ourfertilizer.com"
                  className="inline-flex items-center gap-2 h-12 px-9 rounded-full bg-[#2E7D32] text-sm font-semibold text-white hover:bg-[#256B29] transition-all active:scale-[0.98] shadow-sm group"
                >
                  <span>Contact Our Specialist Team</span>
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              <p className="text-xs text-[#7A8B7C] pt-1 font-medium">
                Direct consultation and bulk supply inquiries available worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}