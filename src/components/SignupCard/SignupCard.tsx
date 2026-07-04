"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Leaf,
  Mail,
  Lock,
  User,
  ShieldCheck,
  Truck,
  BadgeCheck,
  Sparkles,
  Loader2,
} from "lucide-react";

// --- Validation Schema ---
const signupSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" }),
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type SignupFormValues = z.infer<typeof signupSchema>;

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 120, damping: 14 } 
  },
};

export default function PremiumBioSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormValues) => {
    setIsSubmitting(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Success:", data);
    setIsSubmitting(false);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden p-6 font-sans">
      {/* --- Immersive Background --- */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=3200&auto=format&fit=crop')",
        }}
      />
      {/* Complex layering for deep color and focus */}
      <div className="absolute inset-0 z-0 bg-emerald-950/40 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent backdrop-blur-[2px]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-black/80" />

      {/* --- Main Glassmorphism Card --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex w-full max-w-[1100px] flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] backdrop-blur-xl lg:flex-row lg:h-[700px]"
      >
        
        {/* --- Left Pane: Brand Story --- */}
        <div className="relative flex w-full flex-col justify-between p-10 lg:w-5/12 lg:p-14">
          <div className="relative z-10">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-12 flex items-center gap-4"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/20 to-emerald-900/40 border border-emerald-400/30 shadow-[0_0_15px_rgba(52,211,153,0.2)] backdrop-blur-md">
                <Leaf className="text-emerald-300" size={28} />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-wide text-white drop-shadow-md">
                  BioStore
                </h1>
                <p className="text-sm font-medium tracking-[0.2em] text-emerald-300/80 uppercase">
                  Organic Living
                </p>
              </div>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-xs text-5xl font-extrabold leading-[1.15] text-white drop-shadow-lg"
            >
              Grow <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-yellow-200">Healthy.</span><br />
              Live Naturally.
            </motion.h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="relative z-10 mt-12 space-y-4 lg:mt-0"
          >
            <FeatureBadge icon={<ShieldCheck size={20} />} text="100% Secure Checkout" />
            <FeatureBadge icon={<Truck size={20} />} text="Carbon Neutral Delivery" />
            <FeatureBadge icon={<BadgeCheck size={20} />} text="Certified Organic Farms" />
          </motion.div>

          {/* Decorative subtle light flare behind features */}
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-[80px]" />
        </div>

        {/* --- Right Pane: Form & Interaction --- */}
        <div className="relative flex w-full flex-col justify-center border-t border-white/10 bg-white/[0.02] px-8 py-10 backdrop-blur-3xl lg:w-7/12 lg:border-l lg:border-t-0 lg:px-16 lg:py-12">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-semibold text-white">
              Create Account
            </h2>
            <p className="mt-2 text-zinc-400">
              Your gateway to premium, earth-friendly products.
            </p>
          </motion.div>

          <motion.form
            variants={containerVariants}
            initial="hidden"
            animate="show"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <motion.div variants={itemVariants}>
                <GlassInput
                  icon={<User size={18} />}
                  placeholder="Full Name"
                  type="text"
                  registration={register("fullName")}
                  error={errors.fullName?.message}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <GlassInput
                  icon={<Mail size={18} />}
                  placeholder="Email Address"
                  type="email"
                  registration={register("email")}
                  error={errors.email?.message}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <GlassInput
                  icon={<Lock size={18} />}
                  placeholder="Password"
                  type="password"
                  registration={register("password")}
                  error={errors.password?.message}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <GlassInput
                  icon={<Lock size={18} />}
                  placeholder="Confirm Password"
                  type="password"
                  registration={register("confirmPassword")}
                  error={errors.confirmPassword?.message}
                />
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="pt-2">
              <label className="group flex cursor-pointer items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-zinc-300">
                <div className="relative flex h-5 w-5 items-center justify-center">
                  <input
                    type="checkbox"
                    {...register("terms")}
                    className="peer h-5 w-5 appearance-none rounded border border-white/20 bg-white/5 transition-all checked:border-emerald-500 checked:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                  <ShieldCheck
                    size={14}
                    className="absolute text-black opacity-0 transition-opacity peer-checked:opacity-100"
                  />
                </div>
                <span>
                  I agree to the <a href="#" className="font-medium text-emerald-400 hover:text-emerald-300">Terms</a> & <a href="#" className="font-medium text-emerald-400 hover:text-emerald-300">Privacy Policy</a>
                </span>
              </label>
              <AnimatePresence>
                {errors.terms && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 text-xs text-red-400"
                  >
                    {errors.terms.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-2">
              <button
                disabled={isSubmitting}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 px-8 py-4 font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-70"
              >
                {/* Shine effect animation */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
                
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    <Sparkles size={18} className="text-emerald-100" />
                    <span>Create Account</span>
                  </>
                )}
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="relative py-3 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <span className="relative bg-transparent px-4 text-xs font-medium tracking-widest text-zinc-500 uppercase backdrop-blur-3xl">
                Or
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3.5 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Continue with Google
              </button>
            </motion.div>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-6 text-center text-sm text-zinc-400"
          >
            Already have an account?{" "}
            <a href="#" className="font-semibold text-emerald-400 transition-colors hover:text-emerald-300">
              Sign In
            </a>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

// --- Helper Components ---

function GlassInput({
  icon,
  placeholder,
  type,
  registration,
  error,
}: {
  icon: React.ReactNode;
  placeholder: string;
  type: string;
  registration: any;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className={`group flex items-center rounded-xl border bg-white/5 px-4 py-3.5 backdrop-blur-md transition-all focus-within:bg-white/10 focus-within:shadow-[0_0_15px_rgba(16,185,129,0.15)] ${
          error 
            ? "border-red-500/50 focus-within:border-red-500" 
            : "border-white/10 focus-within:border-emerald-500/50"
        }`}
      >
        <span
          className={`mr-3 transition-colors ${
            error
              ? "text-red-400 group-focus-within:text-red-500"
              : "text-zinc-500 group-focus-within:text-emerald-400"
          }`}
        >
          {icon}
        </span>
        <input
          type={type}
          placeholder={placeholder}
          {...registration}
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500 autofill:bg-transparent"
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, x: -5, height: 0 }}
            animate={{ opacity: 1, x: 0, height: "auto" }}
            exit={{ opacity: 0, x: -5, height: 0 }}
            className="ml-1 text-xs font-medium text-red-400"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

function FeatureBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="group flex w-max items-center gap-3 rounded-2xl border border-white/5 bg-black/20 px-5 py-3 backdrop-blur-md transition-all hover:border-emerald-500/30 hover:bg-black/40">
      <div className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] transition-transform group-hover:scale-110">
        {icon}
      </div>
      <span className="text-sm font-medium tracking-wide text-zinc-200">
        {text}
      </span>
    </div>
  );
}