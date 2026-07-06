"use client";

import { motion, Variants } from "framer-motion";
import { 
  Leaf, 
  Search, 
  ShoppingBag, 
  Menu, 
  ArrowRight,
  Sprout,
  Droplets,
  Tractor,
  Microscope
} from "lucide-react";

// --- Animation Variants ---
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 80, damping: 20 } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export default function FertilizerHomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans text-white selection:bg-emerald-500/30">
      
      {/* --- Sticky Glass Navigation --- */}
      <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/5 bg-zinc-950/40 px-6 py-4 backdrop-blur-xl lg:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500/20 to-emerald-900/40 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <Leaf className="text-emerald-400" size={20} />
          </div>
          <span className="text-xl font-bold tracking-wide text-white">BioStore<span className="text-emerald-500">.Ag</span></span>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-400 lg:flex">
          <a href="#" className="text-emerald-400 transition-colors hover:text-emerald-300">Home</a>
          <a href="#" className="transition-colors hover:text-white">Formulas</a>
          <a href="#" className="transition-colors hover:text-white">Agronomy Hub</a>
          <a href="#" className="transition-colors hover:text-white">For Farms</a>
        </nav>

        <div className="flex items-center gap-5 text-zinc-300">
          <button className="transition-colors hover:text-white"><Search size={20} /></button>
          <button className="relative transition-colors hover:text-white">
            <ShoppingBag size={20} />
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
              5
            </span>
          </button>
          <button className="lg:hidden transition-colors hover:text-white"><Menu size={20} /></button>
          <a 
            href="/sign-in" 
            className="hidden items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-300 backdrop-blur-md transition-all hover:bg-emerald-500/20 lg:flex"
          >
            Grower Portal
          </a>
        </div>
      </header>

      {/* --- Hero Section --- */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        {/* Background Image & Overlays: Deep Soil & Farming focus */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=2940&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 z-0 bg-zinc-950/60 mix-blend-multiply" />
        <div className="absolute inset-0 z-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-zinc-950/90" />

        <div className="relative z-10 flex max-w-5xl flex-col items-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-yellow-300 backdrop-blur-md uppercase"
          >
            <Microscope size={14} />
            <span>Scientifically Formulated for Yield</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-extrabold leading-[1.1] tracking-tight text-white md:text-7xl"
          >
            Cultivate Richer Soil. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-green-400 to-yellow-200">
              Harvest Better Yields.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-2xl text-lg text-zinc-300 md:text-xl"
          >
            Advanced bio-organic fertilizers and soil conditioners engineered to restore microbial balance, maximize nutrient uptake, and sustain large-scale farming.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <button className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-emerald-700 to-green-600 px-8 py-4 font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-[0.98]">
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
              <span>Browse Formulas</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button className="flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10">
              Speak to an Agronomist
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- Value Props Section --- */}
      <section className="relative z-20 -mt-12 px-6 pb-20 lg:px-12">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3"
        >
          <ValuePropCard 
            icon={<Microscope className="text-emerald-400" size={28} />}
            title="Microbiome Enhanced"
            description="Infused with beneficial bacteria to naturally unlock soil nutrients and root mass."
          />
          <ValuePropCard 
            icon={<Droplets className="text-emerald-400" size={28} />}
            title="Zero Chemical Runoff"
            description="100% biodegradable organic compounds that protect local watersheds."
          />
          <ValuePropCard 
            icon={<Tractor className="text-emerald-400" size={28} />}
            title="Commercial Scale"
            description="Available in bulk liquid totes and solid tons for large-scale agricultural operations."
          />
        </motion.div>
      </section>

      {/* --- Featured Categories --- */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Targeted Solutions</h2>
              <p className="mt-3 text-zinc-400">Discover our core agricultural product lines.</p>
            </div>
            <a href="#" className="hidden items-center gap-2 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300 md:flex">
              View all inventory <ArrowRight size={16} />
            </a>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <CategoryCard 
              title="Liquid Biostimulants" 
              image="https://images.unsplash.com/photo-1592982537447-6f23f662706e?auto=format&fit=crop&q=80&w=800"
              itemCount={12}
            />
            <CategoryCard 
              title="Solid Organic NPK" 
              image="https://images.unsplash.com/photo-1416879598555-220f8c32bc65?auto=format&fit=crop&q=80&w=800"
              itemCount={24}
            />
            <CategoryCard 
              title="Soil Conditioners" 
              image="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800"
              itemCount={8}
            />
          </motion.div>
        </div>
      </section>

    </main>
  );
}

// --- Helper Components ---

function ValuePropCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      variants={fadeUpVariants}
      className="flex flex-col items-start rounded-3xl border border-white/10 bg-zinc-900/60 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl transition-transform hover:-translate-y-1"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
    </motion.div>
  );
}

function CategoryCard({ title, image, itemCount }: { title: string, image: string, itemCount: number }) {
  return (
    <motion.div 
      variants={fadeUpVariants}
      className="group relative h-96 w-full overflow-hidden rounded-4xl border border-white/10"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950/95 via-zinc-950/40 to-transparent" />
      
      <div className="absolute bottom-0 left-0 flex w-full flex-col justify-end p-8">
        <span className="mb-2 text-sm font-medium text-emerald-400">{itemCount} Formulas</span>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        
        {/* Animated hidden button */}
        <div className="mt-0 h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:mt-4 group-hover:h-auto group-hover:opacity-100">
          <button className="flex items-center gap-2 text-sm font-semibold text-white">
            Explore Range <ArrowRight size={16} className="text-emerald-400" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}