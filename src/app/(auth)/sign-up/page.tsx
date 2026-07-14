"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import { handleGoogleSignIn, register } from "@/actions/user";
import { validatePassword, validateEmail } from "@/lib/validation";
import { toast } from "sonner";
import AuthLayout from "@/components/General/authLayout";
import Link from "next/link";
import {
  Loader2,
  Eye,
  EyeOff,
  Check,
  X,
  Leaf,
  ShieldCheck,
} from "lucide-react";

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
        toast.error(
          error instanceof Error ? error.message : "Failed to create account",
        );
      }
    });
  };

  const defaultRules = [
    "At least 8 characters long",
    "Contains an uppercase letter",
    "Contains a numeric digit",
    "Contains a special character",
  ];

  const unmetCount = formData.password
    ? passwordStrength.requirements.length
    : defaultRules.length;

  const metCount = formData.password ? defaultRules.length - unmetCount : 0;

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
      <div className="mx-auto w-full max-w-md">
        <div className="overflow-hidden rounded-[1.75rem] border border-emerald-950/10 bg-white shadow-[0_20px_60px_-28px_rgba(6,78,59,0.28)]">
          <div className="border-b border-emerald-950/5 bg-[#f7fbf7] px-6 py-5 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-900 text-white shadow-sm">
                <Leaf className="h-5 w-5" strokeWidth={2} />
              </div>

              <div>
                <p className="text-sm font-semibold tracking-tight text-emerald-950">
                  Build a healthier growing future
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-emerald-800/65">
                  Set up your grower account in a few moments.
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-7 sm:px-8 sm:py-8">
            {/* Social Authentication */}
            <form action={handleGoogleSignIn}>
              <button
                type="submit"
                disabled={isPending}
                className="group flex w-full items-center justify-center gap-3 rounded-xl border border-emerald-950/10 bg-white px-4 py-3.5 text-sm font-semibold text-emerald-950 shadow-sm transition-all duration-200 hover:border-emerald-900/20 hover:bg-[#f8fcf8] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-emerald-900/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Image
                  src="/google.svg"
                  alt=""
                  width={19}
                  height={19}
                  className="transition-transform duration-200 group-hover:scale-105"
                />
                <span>Continue with Google</span>
              </button>
            </form>

            <div className="relative my-7">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-emerald-950/10" />
              </div>

              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-[11px] font-medium uppercase tracking-[0.12em] text-emerald-800/45">
                  Or use email
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-emerald-950"
                  >
                    Work email
                  </label>
                  <span className="text-xs text-emerald-800/50">Required</span>
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-invalid={Boolean(formErrors.email)}
                  aria-describedby={
                    formErrors.email ? "email-error" : undefined
                  }
                  className={`block w-full rounded-xl border px-4 py-3.5 text-sm text-emerald-950 outline-none transition-all placeholder:text-emerald-900/30 ${
                    formErrors.email
                      ? "border-red-300 bg-red-50/70 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                      : "border-emerald-950/10 bg-[#fbfdfb] hover:border-emerald-900/20 focus:border-emerald-800 focus:bg-white focus:ring-4 focus:ring-emerald-900/10"
                  }`}
                  placeholder="you@company.com"
                  required
                />

                {formErrors.email && (
                  <p
                    id="email-error"
                    className="flex items-center gap-1.5 text-xs font-medium text-red-600"
                  >
                    <X className="h-3.5 w-3.5" />
                    {formErrors.email}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-emerald-950"
                  >
                    Create password
                  </label>
                  <span className="text-xs text-emerald-800/50">Required</span>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    aria-invalid={Boolean(formErrors.password)}
                    aria-describedby={
                      formErrors.password
                        ? "password-error"
                        : "password-requirements"
                    }
                    className={`block w-full rounded-xl border py-3.5 pl-4 pr-12 text-sm text-emerald-950 outline-none transition-all placeholder:text-emerald-900/30 ${
                      formErrors.password
                        ? "border-red-300 bg-red-50/70 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                        : "border-emerald-950/10 bg-[#fbfdfb] hover:border-emerald-900/20 focus:border-emerald-800 focus:bg-white focus:ring-4 focus:ring-emerald-900/10"
                    }`}
                    placeholder="Enter a secure password"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute inset-y-0 right-0 flex items-center justify-center px-4 text-emerald-800/45 transition-colors hover:text-emerald-900 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-[18px] w-[18px]" />
                    ) : (
                      <Eye className="h-[18px] w-[18px]" />
                    )}
                  </button>
                </div>

                {formErrors.password && (
                  <p
                    id="password-error"
                    className="flex items-center gap-1.5 text-xs font-medium text-red-600"
                  >
                    <X className="h-3.5 w-3.5" />
                    {formErrors.password}
                  </p>
                )}

                {/* Strength Indicator */}
                <div
                  id="password-requirements"
                  className="rounded-xl border border-emerald-950/[0.07] bg-[#f7fbf7] p-4"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-950">
                      Password security
                    </span>
                    <span className="text-xs font-medium text-emerald-800/55">
                      {formData.password
                        ? `${metCount} of ${defaultRules.length} complete`
                        : "Choose a secure password"}
                    </span>
                  </div>

                  <div className="mb-4 flex gap-1.5">
                    {[1, 2, 3, 4].map((step) => {
                      let barColor = "bg-emerald-900/10";

                      if (formData.password && metCount >= step) {
                        if (metCount === 1) barColor = "bg-red-400";
                        else if (metCount === 2) barColor = "bg-amber-400";
                        else if (metCount === 3) barColor = "bg-lime-500";
                        else if (metCount === 4) barColor = "bg-emerald-600";
                      }

                      return (
                        <div
                          key={step}
                          className={`h-1.5 w-full rounded-full transition-colors duration-300 ${barColor}`}
                        />
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                    {defaultRules.map((req, index) => {
                      const isFieldPopulated = formData.password.length > 0;
                      const isUnmet =
                        isFieldPopulated &&
                        passwordStrength.requirements.includes(req);
                      const isValidated = isFieldPopulated && !isUnmet;

                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-xs"
                        >
                          <span
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                              isValidated
                                ? "bg-emerald-100"
                                : isUnmet
                                  ? "bg-red-100"
                                  : "bg-emerald-900/5"
                            }`}
                          >
                            {isValidated ? (
                              <Check
                                size={10}
                                strokeWidth={3}
                                className="text-emerald-700"
                              />
                            ) : isUnmet ? (
                              <X
                                size={10}
                                strokeWidth={3}
                                className="text-red-600"
                              />
                            ) : (
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-900/25" />
                            )}
                          </span>

                          <span
                            className={
                              isValidated
                                ? "font-medium text-emerald-800"
                                : isUnmet
                                  ? "text-red-600"
                                  : "text-emerald-800/55"
                            }
                          >
                            {req}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3 rounded-xl border border-transparent px-1 pt-1">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-emerald-900/25 text-emerald-900 focus:ring-2 focus:ring-emerald-900/20"
                />

                <label
                  htmlFor="terms"
                  className="cursor-pointer text-sm leading-relaxed text-emerald-800/70"
                >
                  I agree to the{" "}
                  <Link
                    href="/legal/terms"
                    className="font-semibold text-emerald-900 underline-offset-4 transition-colors hover:text-emerald-700 hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/legal/privacy"
                    className="font-semibold text-emerald-900 underline-offset-4 transition-colors hover:text-emerald-700 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isPending || !isFormValid}
                className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 focus:outline-none focus:ring-4 ${
                  isFormValid && !isPending
                    ? "bg-emerald-900 hover:bg-emerald-800 hover:shadow-[0_10px_25px_-12px_rgba(6,78,59,0.75)] active:translate-y-px focus:ring-emerald-900/20"
                    : "cursor-not-allowed bg-emerald-900/30"
                }`}
              >
                {isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Creating your account...</span>
                  </>
                ) : (
                  <>
                    <span>Create account</span>
                    <Leaf className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-emerald-800/55">
              <ShieldCheck className="h-4 w-4 text-emerald-700" />
              <span>Your account details are securely protected.</span>
            </div>
          </div>
        </div>

        <p className="mt-7 text-center text-sm text-emerald-800/70">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-emerald-900 underline-offset-4 transition-colors hover:text-emerald-700 hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}