"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import { handleGoogleSignIn, register } from "@/actions/user";
import { validatePassword, validateEmail } from "@/lib/validation";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { Loader2, ArrowRightLeft, ChevronRight, Check, X, Eye, ScanEye, EyeClosed } from "lucide-react";

export default function SignUp() {
  const [isPending, startTransition] = useTransition();
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    requirements: [] as string[],
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear previous error
    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    // Validate password in real-time
    if (name === "password") {
      const { isValid, errors } = validatePassword(value);
      setPasswordStrength({
        score: isValid ? 100 : Math.min(60, (value.length / 8) * 100),
        requirements: errors,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const emailValidation = validateEmail(formData.email);
    const passwordValidation = validatePassword(formData.password);

    // Collect all validation errors
    const newErrors = {
      email: emailValidation.error || "",
      password: passwordValidation.errors[0] || "",
    };

    setFormErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error)) {
      toast.error("Please fix the form errors before submitting");
      return;
    }

    startTransition(async () => {
      try {
        const formDataObj = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          formDataObj.append(key, value);
        });

        await register(formDataObj);
        toast.success("Account created successfully!");
      } catch (error) {
        console.error("Registration error:", error);
        toast.error(
          error instanceof Error ? error.message : "Failed to create account"
        );
      }
    });
  };

  // Static fallback array of default rules to display when input is empty
  const defaultRules = [
    "At least 8 characters long",
    "Contains an uppercase letter",
    "Contains a numeric digit",
    "Contains a special character",
  ];

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#e7f0ec] p-4 font-sans antialiased sm:p-6 md:p-10">
      
      {/* Master Presentation Card */}
      <div className="flex w-full max-w-[1060px] overflow-hidden rounded-[2.2rem] bg-white p-4 shadow-[0_24px_70px_-15px_rgba(0,0,0,0.04)] sm:p-5 lg:p-6">
        <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-10">
          
          {/* --- Left Column: Media Presentation Module --- */}
          <div className="relative hidden h-[630px] w-full overflow-hidden rounded-[1.8rem] bg-zinc-900 lg:col-span-5 lg:block">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-100"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1592417817098-8f3d6eb18865?q=80&w=1000&auto=format&fit=crop')" }}
            />
            {/* Organic Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 mix-blend-multiply" />

            {/* Static branding copy mapped from your original layout requirements */}
            <div className="absolute inset-0 flex flex-col justify-end p-9 text-white">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tight leading-tight">
                  Welcome to the Future of Farming
                </h2>
                <p className="max-w-xs text-sm text-zinc-300/90 leading-relaxed font-normal">
                  Join our ecosystem of sustainable agriculture and be part of the revolution in organic farming practices.
                </p>
              </div>

              {/* Decorative slide indicator pills */}
              <div className="mt-7 flex items-center gap-2">
                <span className="h-1.5 w-7 rounded-full bg-white transition-all" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/40 transition-all" />
              </div>
            </div>
          </div>

          {/* --- Right Column: Clean Registration Form Shell --- */}
          <div className="flex flex-col justify-center py-4 sm:px-6 lg:col-span-7 lg:py-6 lg:pr-6">
            
            {/* Premium Brand Header */}
            <div className="mb-8 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00703c]">
                <ArrowRightLeft size={16} className="text-white transform rotate-45" />
              </div>
              <div>
                <span className="block text-base font-bold tracking-tight text-zinc-900 leading-none">
                  BioStore<span className="text-[#00703c]">Ag</span>
                </span>
                <span className="text-[10px] font-medium tracking-wider text-zinc-400 uppercase">
                  Agricultural Units
                </span>
              </div>
            </div>

            {/* Header Titles */}
            <div className="mb-6 space-y-1">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
                Create an account
              </h1>
              <p className="text-sm font-medium text-zinc-400">
                Enter your details below to create your account
              </p>
            </div>

            {/* Social Authentication Module */}
            <div className="mb-6 w-full">
              <form action={handleGoogleSignIn} className="w-full">
                <button
                  type="submit"
                  disabled={isPending}
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white py-3.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 shadow-sm cursor-pointer disabled:opacity-50"
                >
                  <Image src="/google.svg" alt="Google" width={18} height={18} />
                  <span>Continue with Google</span>
                </button>
              </form>
            </div>

            {/* Traditional Section Divider */}
            <div className="relative mb-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-100" />
              </div>
              <span className="relative bg-white px-4 text-xs font-medium tracking-wide text-zinc-400 uppercase">
                or continue with
              </span>
            </div>

            {/* Core Registration Pipeline */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Email Input Field Group */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  disabled={isPending}
                  required
                  autoComplete="username"
                  className={`w-full rounded-xl border bg-zinc-50/40 py-3.5 px-4 text-sm font-medium text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:bg-white ${
                    formErrors.email 
                      ? "border-red-500 focus:border-red-500" 
                      : "border-zinc-200/80 focus:border-[#00703c]"
                  }`}
                />
                {formErrors.email && (
                  <p className="text-xs font-semibold text-red-500 pl-1">{formErrors.email}</p>
                )}
              </div>

              {/* Password Input Field Group */}
              <div className="space-y-1.5">
                <label htmlFor="password" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="********"
                    disabled={isPending}
                    required
                    autoComplete="new-password"
                    className={`w-full rounded-xl border bg-zinc-50/40 py-3.5 pl-4 pr-12 text-sm font-medium text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:bg-white ${
                      formErrors.password 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-zinc-200/80 focus:border-[#00703c]"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors hover:text-zinc-600"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <Eye className="h-4 w-4" /> : <EyeClosed className="h-4 w-4" />}
                  </button>
                </div>

                {/* Password Validation Matrix Box */}
                <div className="overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50/60 p-3.5 mt-2">
                  {/* Dynamic Custom Progress Line */}
                  <div className="h-1.5 w-full bg-zinc-200/70 rounded-full overflow-hidden mb-3">
                    <div
                      className={`h-full transition-all duration-500 ${
                        passwordStrength.score >= 100
                          ? "bg-emerald-500"
                          : passwordStrength.score >= 50
                          ? "bg-amber-500"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${formData.password ? passwordStrength.score : 0}%` }}
                    />
                  </div>

                  {/* Requirements Sub-List Matrix */}
                  <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                    {(formData.password ? passwordStrength.requirements : defaultRules).map((req, index) => {
                      // If requirements exist in the array, it means they are currently UNMET according to your validation engine code
                      const isUnmet = formData.password && passwordStrength.requirements.includes(req);
                      const isFieldPopulated = formData.password.length > 0;
                      const isValidated = isFieldPopulated && !isUnmet;

                      return (
                        <div key={index} className="flex items-center gap-2">
                          <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[9px] font-bold transition-all ${
                            isValidated 
                              ? "border-emerald-500 bg-emerald-500 text-white" 
                              : isUnmet
                              ? "border-red-200 bg-red-50/60 text-red-500"
                              : "border-zinc-300 text-zinc-400"
                          }`}>
                            {isValidated ? <Check size={10} strokeWidth={3} /> : <X size={9} strokeWidth={3} />}
                          </span>
                          <span className={`text-[11px] font-medium transition-colors ${
                            isValidated ? "text-emerald-800" : "text-zinc-400"
                          }`}>
                            {req}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {formErrors.password && (
                  <p className="text-xs font-semibold text-red-500 pl-1">{formErrors.password}</p>
                )}
              </div>

              {/* Legal Agreement Consent Checkbox Container */}
              <div className="flex items-start gap-3 pt-1">
                <input 
                  type="checkbox" 
                  name="terms" 
                  id="terms" 
                  required
                  className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-[#00703c] accent-[#00703c] focus:ring-0 cursor-pointer" 
                />
                <label htmlFor="terms" className="text-xs font-medium text-zinc-400 select-none leading-relaxed">
                  You agree to our{" "}
                  <Link href="/legal/terms" className="font-semibold text-[#00703c] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/legal/privacy" className="font-semibold text-[#00703c] hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Master Submission Trigger Assembly */}
              <button
                type="submit"
                disabled={
                  isPending ||
                  passwordStrength.requirements.length > 0 ||
                  Object.values(formErrors).some((error) => error) ||
                  Object.values(formData).some((value) => value === "")
                }
                className={`flex w-full items-center justify-center gap-1.5 rounded-xl py-4 text-sm font-semibold transition-all shadow-sm active:scale-[0.995] ${
                  !isPending &&
                  passwordStrength.requirements.length === 0 &&
                  !Object.values(formErrors).some((error) => error) &&
                  !Object.values(formData).some((value) => value === "")
                    ? "bg-[#00703c] text-white hover:bg-[#00572e] shadow-green-900/10 hover:shadow-md"
                    : "bg-zinc-100 text-zinc-400 cursor-not-allowed opacity-75"
                }`}
              >
                {isPending ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin text-white/80" />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <>
                    <span>Create Account</span>
                    <div className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-white/20">
                      <ChevronRight size={10} strokeWidth={3} />
                    </div>
                  </>
                )}
              </button>
            </form>

            {/* Navigation Footnote */}
            <p className="mt-8 text-center text-sm font-medium text-zinc-400">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="font-bold text-[#00703c] transition-colors hover:text-[#00572e] hover:underline"
              >
                Sign in now
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}