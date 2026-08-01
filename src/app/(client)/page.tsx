import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            {/* Logo Placeholder */}
            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            <span className="text-xl font-bold tracking-tight text-gray-900">VidFlow</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Video Creation</a>
            <a href="#promotion" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Ad Promotion</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Pricing</a>
          </nav>
          <div>
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-sm">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
                Stunning Videos. <br/>
                <span className="text-blue-600">Targeted Promotion.</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                We design high-converting promotional videos, infographics, and ads for your business. Don't just stop at creation—let us distribute and promote them directly to your target audience to drive real revenue.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                  Start Your Project
                </button>
                <button className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-50 transition">
                  See Our Work
                </button>
              </div>
            </div>

            {/* Hero Video (Muted, Autoplay, Looping) */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
              {/* Ensure your video file is in the /public folder */}
              <video 
                src="/hero-video.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Logos */}
      <section className="border-y border-gray-100 bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            Trusted by modern teams to scale their brand
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            {/* Replace with actual client logos */}
            <div className="text-xl font-bold font-serif">ACME Corp</div>
            <div className="text-xl font-bold font-serif">GlobalTech</div>
            <div className="text-xl font-bold font-serif">Nexus</div>
            <div className="text-xl font-bold font-serif">Stark Ind.</div>
          </div>
        </div>
      </section>

      {/* Value Proposition / Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900">An end-to-end video engine for your business</h2>
            <p className="mt-4 text-lg text-gray-600">From the first storyboard to the final ad click, we handle the entire lifecycle of your visual marketing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1: Creation */}
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 hover:border-blue-100 transition">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-600 mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Video Creation</h3>
              <p className="text-gray-600 leading-relaxed">
                We craft scroll-stopping promotional videos, clear 2D/3D infographics, and engaging social media ads tailored to your brand's specific aesthetic and goals.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-sm text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span> Promotional Campaigns
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span> Data-driven Infographics
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span> Product Explainers
                </li>
              </ul>
            </div>

            {/* Feature 2: Promotion */}
            <div id="promotion" className="bg-blue-600 rounded-3xl p-10 border border-blue-500 shadow-xl shadow-blue-600/20 text-white">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                 <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Targeted Ad Promotion</h3>
              <p className="text-blue-100 leading-relaxed">
                Having a great video is only half the battle. If you choose, our team will launch, manage, and optimize ad campaigns across major networks to ensure your video reaches the buyers who matter.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-sm text-blue-50">
                  <span className="text-white font-bold mr-2">✓</span> Managed Ad Spend
                </li>
                <li className="flex items-center text-sm text-blue-50">
                  <span className="text-white font-bold mr-2">✓</span> Audience Targeting & Retargeting
                </li>
                <li className="flex items-center text-sm text-blue-50">
                  <span className="text-white font-bold mr-2">✓</span> Performance & ROI Analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to scale your visual marketing?</h2>
          <p className="text-lg text-gray-600 mb-10">Whether you need a single infographic or a full-scale video production and ad campaign, we have a solution for you.</p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
            Book a Free Consultation
          </button>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded"></div>
            <span className="text-lg font-bold text-gray-900">VidFlow</span>
          </div>
          <p className="text-sm text-gray-500">© 2026 VidFlow Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}