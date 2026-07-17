'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import AuthLayout from '@/components/general/authLayout';
import Link from 'next/link';
import { 
  CheckCheck, 
  CircleAlert, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  Check, 
  ArrowLeft,
  Loader2
} from 'lucide-react';

// --- Password Validation Helpers (Unchanged) ---
const passwordRequirements = [
  { key: 'length', text: 'At least 8 characters long', regex: /.{8,}/ },
  { key: 'uppercase', text: 'Include uppercase letters', regex: /[A-Z]/ },
  { key: 'lowercase', text: 'Include lowercase letters', regex: /[a-z]/ },
  { key: 'number', text: 'Include at least one number', regex: /[0-9]/ },
  { key: 'specialChar', text: 'Include at least one special character', regex: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/ },
];

const assessPasswordStrength = (password: string) => {
  let score = 0;
  if (password.length > 0) score++; 
  const passedRequirements = passwordRequirements.filter(req => req.regex.test(password));
  score += passedRequirements.length;
  if (password.length >= 12 && passedRequirements.length === passwordRequirements.length) score += 2; 

  if (score < 3) return { level: "Weak", color: "bg-red-400", width: "w-1/4", textColor: "text-red-500" };
  if (score < 5) return { level: "Moderate", color: "bg-orange-400", width: "w-2/4", textColor: "text-orange-500" };
  if (score < 7) return { level: "Good", color: "bg-[#FDBA21]", width: "w-3/4", textColor: "text-[#D99A00]" };
  return { level: "Strong", color: "bg-[#839756]", width: "w-full", textColor: "text-[#687945]" };
};

function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({ level: "None", color: "bg-[#121A14]/10", width: "w-0", textColor: "text-[#121A14]/40" });
  const [passwordMatch, setPasswordMatch] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    setPasswordStrength(assessPasswordStrength(password));
    setPasswordMatch(password === confirmPassword && password.length > 0);
  }, [password, confirmPassword]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.", { icon: <CircleAlert className="text-red-500" /> });
      return;
    }
    const load = toast.loading("Processing");
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password, confirmpassword: confirmPassword }),
      });
      if (res.ok) {
        const data = await res.json();
        toast.success(data.success || "Password updated.", { icon: <CheckCheck className="text-green-500" /> });
        router.replace("/sign-in");
      } else {
        const errorData = await res.json().catch(() => ({}));
        toast.error(errorData.error || "An error occurred.", { icon: <CircleAlert className="text-red-500" /> });
      }
    } catch {
      toast.error("Network error. Please try again.", { icon: <CircleAlert className="text-red-500" /> });
    }
    toast.dismiss(load);
  };

  return (
    <AuthLayout
      title="Reset Your Password"
      desc="Create a secure new password"
      leftheading="Secure Access"
      leftDesc="Update your credentials to maintain account security. Use a strong combination of characters."
      leftSection={
        <div className="mt-16">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <h3 className="flex items-center text-white text-lg font-medium mb-6">
              <ShieldCheck className="w-6 h-6 mr-3 text-[#839756]" />
              Password Criteria
            </h3>
            <ul className="space-y-4 text-white/70 text-sm">
              {passwordRequirements.map((req) => {
                const isMet = req.regex.test(password);
                return (
                  <li key={req.key} className={`flex items-center ${isMet ? 'text-white' : ''}`}>
                    {isMet ? <Check size={16} className="text-[#839756] mr-3" /> : <div className="w-1.5 h-1.5 bg-white/30 rounded-full mr-5.5 ml-1.25" />}
                    {req.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      }
    >
      <form className="w-full max-w-md mx-auto space-y-8" onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* New Password */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-[0.15em] text-[#121A14]">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-5 py-4 rounded-xl border border-[#121A14]/10 bg-[#FDFDFC] outline-none focus:border-[#839756] transition-all"
                placeholder="••••••••"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4 text-[#121A14]/30">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {password.length > 0 && (
              <div className="h-1 bg-[#121A14]/5 rounded-full overflow-hidden">
                <div className={`h-full ${passwordStrength.color} transition-all duration-500 ${passwordStrength.width}`} />
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-[0.15em] text-[#121A14]">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-5 py-4 rounded-xl border border-[#121A14]/10 bg-[#FDFDFC] outline-none focus:border-[#839756] transition-all"
                placeholder="••••••••"
              />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-4 text-[#121A14]/30">
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={!passwordMatch || passwordStrength.level === "Weak"}
          className="w-full py-4 rounded-xl bg-[#121A14] text-white font-bold uppercase tracking-widest hover:bg-[#839756] transition-all disabled:opacity-50"
        >
          Reset Password
        </button>

        <Link href="/sign-in" className="flex items-center justify-center gap-2 text-sm text-[#121A14]/60 hover:text-[#839756]">
          <ArrowLeft size={16} /> Return to sign in
        </Link>
      </form>
    </AuthLayout>
  );
}

export default function ResetPassword() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}