"use client";

import AuthLayout from '@/components/general-entity/authLayout';
import { CheckCheck, LucideTimerReset, TimerReset, ArrowLeft } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const load = toast.loading("Processing");

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      toast.dismiss(load);

      if (res.ok) {
        toast.success(
          data.success || "Password reset link sent successfully.",
          {
            icon: <CheckCheck className="text-green-500" />,
          }
        );
      } else {
        toast.error(data.error || "Something went wrong", {
          icon: <LucideTimerReset className="text-red-500" />,
        });
      }
    } catch (err: unknown) {
      console.error("Error in forgot password submission:", err);
      toast.dismiss(load);
      toast.error("Network error. Please try again later.", {
        icon: <TimerReset className="text-red-500" />,
      });
    }
  };

  return (
    <div>
      <AuthLayout
        title="Password Recovery"
        desc="Enter your email to receive reset instructions"
        leftheading="Reset Your Password"
        leftDesc="Don't worry! It happens to the best of us. Enter your email address and we'll send you instructions to reset your password."
        leftSection={
          <div className="mt-16 space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
              <h3 className="flex items-center text-white text-lg font-medium tracking-tight mb-6">
                <svg
                  className="w-6 h-6 mr-3 text-[#839756]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Secure Reset Protocol
              </h3>
              <ul className="space-y-4 text-white/90 text-sm font-medium">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#839756] rounded-full mr-4" />
                  Direct reset link dispatched to your inbox
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#839756] rounded-full mr-4" />
                  Time-sensitive access (Expires in 1 hour)
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#839756] rounded-full mr-4" />
                  End-to-end identity verification
                </li>
              </ul>
            </div>
          </div>
        }
      >
        <div className="w-full max-w-md mx-auto">
          
          <form className="space-y-8" onSubmit={handleSubmit}>
            
            {/* Input Group */}
            <div className="space-y-3">
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-[0.15em] text-[#121A14]"
              >
                Registered Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full px-5 py-4 rounded-2xl border border-[#121A14]/15 
                           focus:border-[#839756] focus:ring-1 focus:ring-[#839756]
                           transition-all bg-[#F5F4F0]/50 text-[#121A14] text-base font-medium
                           placeholder:text-[#121A14]/30 outline-none hover:border-[#121A14]/30"
                placeholder="hello@example.com"
              />
            </div>

            {/* Action Group */}
            <div className="space-y-6 pt-2">
              <button
                type="submit"
                className="w-full flex justify-center items-center py-4 px-4 rounded-full 
                           bg-[#839756] text-white text-sm font-bold uppercase tracking-widest 
                           shadow-lg shadow-[#839756]/20 hover:bg-[#687945] hover:shadow-[#687945]/30 
                           transition-all duration-300 active:scale-[0.98]"
              >
                Send Reset Instructions
              </button>

              <div className="flex justify-center">
                <a
                  href="/sign-in"
                  className="group flex items-center gap-2 text-sm font-semibold text-[#3A4A3E] hover:text-[#121A14] transition-colors"
                >
                  <ArrowLeft size={16} className="text-[#3A4A3E]/50 group-hover:text-[#121A14] transition-colors group-hover:-translate-x-1 duration-300" />
                  <span>Return to Sign In</span>
                </a>
              </div>
            </div>
          </form>

          {/* Minimalist Footnote */}
          <div className="mt-16 pt-8 border-t border-[#121A14]/10 text-center">
            <p className="text-[#3A4A3E] text-sm font-medium">
              Having trouble? Reach out to our
              <a
                href="/support"
                className="text-[#839756] hover:text-[#121A14] font-bold ml-1 transition-colors"
              >
                support team.
              </a>
            </p>
          </div>
          
        </div>
      </AuthLayout>
    </div>
  );
}