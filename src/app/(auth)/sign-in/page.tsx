"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRightLeft,
  ChevronRight,
  Loader2
} from "lucide-react";

// --- Server Action Import for Google OAuth ---
import { handleGoogleSignIn } from "@/actions/user";

interface SlideData {
  id: number;
  image: string;
  title: string;
  description: string;
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=1200&auto=format&fit=crop",
    title: "Welcome to the Future of Farming",
    description: "Join our ecosystem of sustainable agriculture and be part of the revolution in organic farming practices.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1200&auto=format&fit=crop",
    title: "Restore Soil Vitality",
    description: "Inoculate your fields with beneficial microbes that unlock natural soil fertility.",
  },
];

export default function LoginPage() {
  const router = useRouter();
  
  // --- Retained UI Presentation Carousel State ---
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- Retained Exact Logic States from LoginForm ---
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // --- Retained Metadata & Session Safeguard Injection ---
  useEffect(() => {
    // Client-side Metadata Management matching your configurations
    document.title = "Sign In | Arkin Organics";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content", 
        "Access your Arkin Organics account securely. Sign in to manage your profile, explore organic solutions, and stay connected with sustainable farming."
      );
    }

    // Client-side Session Validation 
    // (To avoid a visual flash entirely, implementing a route guard in middleware.ts is recommended!)
    const checkUserSession = async () => {
      try {
        // If your application uses next-auth session providers client-side, 
        // you can check session details here and execute: router.push("/");
      } catch (err) {
        console.error("Session verification failure", err);
      }
    };
    checkUserSession();
  }, [router]);

  // Auto-play Slider Engine
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // --- Retained Exact Email & Password Validation Functions ---
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email is required";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) {
      return "Password is required";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    return "";
  };

  // --- Retained Input Change Handler ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // --- Retained Submission Authentication Execution Pipeline ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });
      return;
    }

    try {
      setLoading(true);
      const user = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (user?.error) {
        toast.error("Invalid email or password");
        return;
      }

      toast.success("Successfully signed in!");
      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#e7f0ec] p-4 font-sans antialiased sm:p-6 md:p-10">
      
      {/* Outer Card Frame Wrapper */}
      <div className="flex w-full max-w-265 overflow-hidden rounded-[2.2rem] bg-white p-4 shadow-[0_24px_70px_-15px_rgba(0,0,0,0.04)] sm:p-5 lg:p-6">
        <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-10">
          
          {/* --- Left Column: Premium Brand Identity Slide Panel --- */}
          <div className="relative hidden h-157.5-full overflow-hidden rounded-[1.8rem] bg-zinc-900 lg:col-span-5 lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${SLIDES[currentSlide].image}')` }}
              />
            </AnimatePresence>

            {/* Earthy Vignette Blend */}
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-black/10 mix-blend-multiply" />

            {/* Slider Content Overlay Layout */}
            <div className="absolute inset-0 flex flex-col justify-end p-9 text-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-2.5"
                >
                  <h3 className="text-3xl font-bold tracking-tight leading-tight">
                    {SLIDES[currentSlide].title}
                  </h3>
                  <p className="max-w-xs text-sm text-zinc-300/90 leading-relaxed font-normal">
                    {SLIDES[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Slider Pagination Control System */}
              <div className="mt-7 flex items-center gap-2">
                {SLIDES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "w-7 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* --- Right Column: High-Fidelity Custom Form Panel --- */}
          <div className="flex flex-col justify-center py-4 sm:px-6 lg:col-span-7 lg:py-6 lg:pr-6">
            
            {/* Arkin Organics Thematic Identity Logo */}
            <div className="mb-10 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00703c]">
                <ArrowRightLeft size={16} className="text-white transform rotate-45" />
              </div>
              <div>
                <span className="block text-base font-bold tracking-tight text-zinc-900 leading-none">
                  Arkin<span className="text-[#00703c]">Organics</span>
                </span>
                <span className="text-[10px] font-medium tracking-wider text-zinc-400 uppercase">
                  Sustainable Ecosystems
                </span>
              </div>
            </div>

            {/* Typography Heading Block */}
            <div className="mb-8 space-y-1">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
                Welcome Back
              </h1>
              <p className="text-sm font-medium text-zinc-400">
                Sign in to your account
              </p>
            </div>

            {/* Credential Access Interface Pipelines */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Email Entry Address Input */}
              <div className="space-y-1.5">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400/90">
                    <Mail size={17} />
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={loading}
                    className={`w-full rounded-xl border bg-zinc-50/40 py-3.5 pl-12 pr-4 text-sm font-medium text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:bg-white ${
                      errors.email 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-zinc-200/80 focus:border-[#00703c]"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs font-semibold text-red-500 pl-1">{errors.email}</p>
                )}
              </div>

              {/* Password Entry Secure Input */}
              <div className="space-y-1.5">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400/90">
                    <Lock size={17} />
                  </span>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    disabled={loading}
                    className={`w-full rounded-xl border bg-zinc-50/40 py-3.5 pl-12 pr-12 text-sm font-medium text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:bg-white ${
                      errors.password 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-zinc-200/80 focus:border-[#00703c]"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors hover:text-zinc-600"
                  >
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs font-semibold text-red-500 pl-1">{errors.password}</p>
                )}
              </div>

              {/* Auxiliary Route Recovery Anchor */}
              <div className="flex items-center justify-end pt-0.5">
                <Link href="/forgot-password" className="text-xs font-bold text-[#00703c] hover:underline">
                  Forgot password?
                </Link>
              </div>

              {/* Primary Authorization Execution Form Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`flex w-full items-center justify-center gap-1.5 rounded-xl py-4 text-sm font-semibold text-white shadow-sm transition-all active:scale-[0.995] ${
                  loading 
                    ? "bg-zinc-700 cursor-not-allowed opacity-80" 
                    : "bg-[#00703c] hover:bg-[#00572e] shadow-green-900/10 hover:shadow-md"
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin text-white/80" />
                    <span>Signing in...</span>
                  </div>
                ) : (
                  <>
                    <span>Sign In</span>
                    <div className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-white/20">
                      <ChevronRight size={10} strokeWidth={3} />
                    </div>
                  </>
                )}
              </button>
            </form>

            {/* Split Separation Indicator Layout */}
            <div className="relative my-7 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-100" />
              </div>
              <span className="relative bg-white px-4 text-xs font-medium tracking-wide text-zinc-400 uppercase">
                or continue with
              </span>
            </div>

            {/* Provider OAuth Authorization Grid targeting handleGoogleSignIn action */}
            <form action={handleGoogleSignIn} className="w-full">
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white py-3.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 shadow-sm cursor-pointer disabled:opacity-50"
              >
                <Image src="/google.svg" alt="Google" width={18} height={18} />
                <span className="text-sm font-medium text-zinc-600">Continue with Google</span>
              </button>
            </form>

            {/* Alternative Creation Path Navigation Footnote */}
            <p className="mt-8 text-center text-sm font-medium text-zinc-400">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="font-bold text-[#00703c] transition-colors hover:text-[#00572e] hover:underline">
                Sign up
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}