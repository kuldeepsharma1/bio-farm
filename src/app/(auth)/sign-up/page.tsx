"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import { handleGoogleSignIn, register } from "@/actions/user";
import { validatePassword, validateEmail } from "@/lib/validation";
import { toast } from "sonner";
import AuthLayout from "@/components/General/authLayout";
import Link from "next/link";
import { Loader2, Eye, EyeOff, Check, X } from "lucide-react";

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
    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    if (name === "password") {
      if (value === "") {
        setPasswordStrength({ score: 0, requirements: [] });
      } else {
        const { isValid, errors } = validatePassword(value);
        setPasswordStrength({
          score: isValid ? 100 : Math.min(60, (value.length / 8) * 100),
          requirements: errors,
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailValidation = validateEmail(formData.email);
    const passwordValidation = validatePassword(formData.password);

    const newErrors = {
      email: emailValidation.error || "",
      password: passwordValidation.errors[0] || "",
    };

    setFormErrors(newErrors);

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
        toast.error(error instanceof Error ? error.message : "Failed to create account");
      }
    });
  };

  const defaultRules = [
    "At least 8 characters long",
    "Contains an uppercase letter",
    "Contains a numeric digit",
    "Contains a special character",
  ];

  const unmetCount = formData.password ? passwordStrength.requirements.length : defaultRules.length;
  const metCount = formData.password ? (defaultRules.length - unmetCount) : 0;

  const isFormValid =
    formData.email !== "" &&
    formData.password !== "" &&
    passwordStrength.requirements.length === 0 &&
    !Object.values(formErrors).some((error) => error);

  return (
    <AuthLayout
      title="Create an account"
      desc="Join our ecosystem of sustainable agriculture."
      leftheading="Welcome to the Future of Farming"
      leftDesc="Start your journey towards a more sustainable and productive agricultural future."
    >
      <div className="w-full max-w-md mx-auto">
        
        {/* Social Authentication */}
        <form action={handleGoogleSignIn}>
          <button
            type="submit"
            disabled={isPending}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-emerald-100 bg-white py-3 px-4 text-sm font-medium text-emerald-950 transition-all hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-200 disabled:opacity-50"
          >
            <Image src="/google.svg" alt="Google" width={18} height={18} />
            <span>Sign up with Google</span>
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-emerald-100"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-4 text-emerald-600/60">Or, register with email</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-emerald-950 mb-1.5">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`block w-full rounded-xl border px-4 py-3 text-sm text-emerald-950 transition-colors placeholder:text-emerald-300 focus:outline-none focus:ring-2 ${
                formErrors.email
                  ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200"
                  : "border-transparent bg-emerald-50/50 focus:border-emerald-900 focus:bg-white focus:ring-emerald-200"
              }`}
              placeholder="john@example.com"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-emerald-950 mb-1.5">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`block w-full rounded-xl border pl-4 pr-12 py-3 text-sm text-emerald-950 transition-colors placeholder:text-emerald-300 focus:outline-none focus:ring-2 ${
                  formErrors.password
                    ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200"
                    : "border-transparent bg-emerald-50/50 focus:border-emerald-900 focus:bg-white focus:ring-emerald-200"
                }`}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-emerald-400 hover:text-emerald-600"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            {/* Strength Indicator */}
            <div className="mt-4">
              <div className="flex gap-1.5 mb-3">
                {[1, 2, 3, 4].map((step) => {
                  let barColor = "bg-emerald-100";
                  if (formData.password) {
                    if (metCount >= step) {
                      if (metCount === 1) barColor = "bg-red-400";
                      else if (metCount === 2) barColor = "bg-orange-400";
                      else if (metCount === 3) barColor = "bg-yellow-400";
                      else if (metCount === 4) barColor = "bg-emerald-500";
                    }
                  }
                  return <div key={step} className={`h-1 w-full rounded-full transition-colors duration-300 ${barColor}`} />;
                })}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                {defaultRules.map((req, index) => {
                  const isFieldPopulated = formData.password.length > 0;
                  const isUnmet = isFieldPopulated && passwordStrength.requirements.includes(req);
                  const isValidated = isFieldPopulated && !isUnmet;

                  return (
                    <div key={index} className="flex items-center gap-2 text-xs">
                      <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full">
                        {isValidated ? <Check size={10} className="text-emerald-600" /> : isUnmet ? <X size={10} className="text-red-500" /> : <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />}
                      </span>
                      <span className={`${isValidated ? 'text-emerald-800' : isUnmet ? 'text-red-500' : 'text-emerald-500'}`}>
                        {req}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Consent */}
          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="terms"
              required
              className="mt-0.5 h-4 w-4 rounded border-emerald-200 text-emerald-900 focus:ring-emerald-900 cursor-pointer"
            />
            <label htmlFor="terms" className="text-sm text-emerald-700">
              I agree to the <Link href="/legal/terms" className="text-emerald-900 font-medium hover:underline">Terms</Link> and <Link href="/legal/privacy" className="text-emerald-900 font-medium hover:underline">Privacy Policy</Link>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending || !isFormValid}
            className={`w-full rounded-xl py-3.5 px-4 text-sm font-medium text-white transition-all duration-200 flex items-center justify-center gap-2 ${
              isFormValid && !isPending
                ? "bg-emerald-900 hover:bg-emerald-800 active:scale-[0.99]"
                : "bg-emerald-200 cursor-not-allowed"
            }`}
          >
            {isPending ? <><Loader2 className="h-4 w-4 animate-spin" /> <span>Creating...</span></> : <span>Create account</span>}
          </button>
        </form>

        <p className="text-center text-sm text-emerald-600 mt-8">
          Already have an account? <Link href="/sign-in" className="font-semibold text-emerald-900 hover:underline">Sign in</Link>
        </p>
      </div>
    </AuthLayout>
  );
}