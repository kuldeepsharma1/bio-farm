"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import AppLogo from "./AppLogo";


interface SlideData {
  image: string;
  heading: string;
  desc: string;
}

export default function AuthLayout({
  children,
  leftheading,
  leftDesc,
  title,
  desc,
  leftSection,
  customSlides,
}: {
  children: React.ReactNode;
  leftheading: string;
  leftDesc: string;
  title?: string;
  desc?: string;
  leftSection?: React.ReactNode;
  customSlides?: SlideData[];
}) {
  const slides: SlideData[] = customSlides || [
    {
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
      heading: leftheading,
      desc: leftDesc,
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
      heading: "Sustainable Roots",
      desc: "Nurturing the earth with advanced organic solutions for modern farming.",
    },
    {
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
      heading: "Growth Optimized",
      desc: "Data-driven insights to maximize your crop health and yields.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-gray-900 flex items-center justify-center p-6 lg:p-12 font-sans selection:bg-emerald-100">
      
      {/* Container - Balanced Width */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Column - Image (Contained & Proportional) */}
        <div className="hidden md:block md:w-[40%] bg-emerald-950 relative overflow-hidden">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          ))}
          
          <div className="absolute inset-0 bg-linear-to-t from-emerald-950/90 via-emerald-950/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-8">
            <div key={`text-${currentSlide}`} className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <h2 className="text-white text-xl font-semibold tracking-tight">
                {slides[currentSlide].heading}
              </h2>
              <p className="text-emerald-100/70 text-sm leading-relaxed max-w-xs">
                {slides[currentSlide].desc}
              </p>
            </div>
            
            <div className="flex gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    currentSlide === index ? "w-6 bg-emerald-400" : "w-1.5 bg-emerald-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full md:w-[60%] flex flex-col justify-center px-8 py-12 lg:px-16">
          <div className="mb-8">
            <div className="mb-8 scale-90 origin-left">
              <AppLogo />
            </div>
            
            {(title || desc) && (
              <div className="space-y-1">
                <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">{title}</h1>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            )}
          </div>

          <div className="w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}