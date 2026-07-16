"use client"

import {motion} from "framer-motion"
import { Leaf } from "lucide-react"

export default function Footer() {
  return (
      <footer className="bg-[#000000f6] pt-24 pb-12 px-6 lg:px-12 text-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[6vw] leading-none font-bold tracking-tighter text-[#F5F4F0] mb-12 text-center"
          >
            GROW WITH US.
          </motion.h2>
          
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
             <div>
               <div className="flex items-center gap-2 mb-6">
                 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#839756] text-[#F5F4F0]">
                   <Leaf size={16} />
                 </div>
                 <span className="font-bold text-lg tracking-tight">Arkin</span>
               </div>
               <p className="text-white/50 text-sm">Regenerating the earth, one handful of soil at a time.</p>
             </div>
             
             <div>
               <h4 className="font-bold mb-4">Shop</h4>
               <ul className="space-y-3 text-white/50 text-sm">
                 <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Subscriptions</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
               </ul>
             </div>

             <div>
               <h4 className="font-bold mb-4">Learn</h4>
               <ul className="space-y-3 text-white/50 text-sm">
                 <li><a href="#" className="hover:text-white transition-colors">Our Process</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Impact Report</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
               </ul>
             </div>

             <div>
               <h4 className="font-bold mb-4">Subscribe</h4>
               <p className="text-white/50 text-sm mb-4">Get 10% off your first order.</p>
               <div className="flex h-12 w-full rounded-full bg-white/10 p-1 border border-white/10">
                 <input type="email" placeholder="Email address" className="bg-transparent px-4 w-full text-sm outline-none placeholder:text-white/30" />
                 <button className="h-full px-6 rounded-full bg-white text-black text-sm font-bold hover:bg-[#FDBA21] transition-colors">Join</button>
               </div>
             </div>
          </div>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center mt-24 text-white/30 text-sm">
            <p>© 2026 BioAg Organics. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/legal/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
  )
}
