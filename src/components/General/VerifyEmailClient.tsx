'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Loader2, CheckCircle2, ShieldAlert, ArrowRight, RefreshCw, Mail } from 'lucide-react';

export default function VerifyEmailClient() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      return;
    }

    const verifyEmail = async () => {
      try {
        const response = await fetch('/api/auth/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });

        if (!response.ok) throw new Error();
        setStatus('success');
      } catch {
        setStatus('error');
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="flex-1 flex items-center justify-center p-8 bg-[#FDFDFC]">
      <div className="w-full max-w-105">
        
        {/* LOADING STATE */}
        {status === 'loading' && (
          <div className="text-center">
            <div className="relative inline-flex items-center justify-center mb-8">
              <Loader2 className="w-12 h-12 text-[#839756] animate-spin" strokeWidth={1.5} />
              <div className="absolute inset-0 bg-[#839756] blur-2xl opacity-20 animate-pulse" />
            </div>
            <h2 className="text-2xl font-semibold text-[#121A14] tracking-tight mb-2">Verifying Identity</h2>
            <p className="text-[#3A4A3E]/70 text-sm">Synchronizing your credentials with our secure server...</p>
          </div>
        )}

        {/* SUCCESS STATE */}
        {status === 'success' && (
          <div className="text-center animate-in fade-in zoom-in duration-700">
            <div className="w-20 h-20 bg-[#F2F5EF] rounded-full flex items-center justify-center mx-auto mb-8 border border-[#839756]/20">
              <CheckCircle2 className="w-10 h-10 text-[#839756]" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-semibold text-[#121A14] tracking-tight mb-3">Verification Complete</h2>
            <p className="text-[#3A4A3E]/70 text-sm mb-8 leading-relaxed">Your account has been successfully authenticated. You may now proceed to the platform.</p>
            
            <Link 
              href="/sign-in" 
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#121A14] text-white rounded-xl font-medium hover:bg-[#2A3A2F] transition-all duration-300"
            >
              Sign In to Account <ArrowRight size={16} />
            </Link>
          </div>
        )}

        {/* ERROR STATE */}
        {status === 'error' && (
          <div className="text-center animate-in fade-in zoom-in duration-700">
            <div className="w-20 h-20 bg-[#FFF5F5] rounded-full flex items-center justify-center mx-auto mb-8 border border-red-200">
              <ShieldAlert className="w-10 h-10 text-red-600" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-semibold text-[#121A14] tracking-tight mb-3">Authentication Failed</h2>
            <p className="text-[#3A4A3E]/70 text-sm mb-8 leading-relaxed">The verification token provided is invalid or has expired. Please request a new verification link.</p>
            
            <div className="space-y-3">
              <Link 
                href="/sign-up" 
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#839756] text-white rounded-xl font-medium hover:bg-[#687945] transition-all duration-300"
              >
                <RefreshCw size={16} /> Request New Link
              </Link>
              <Link 
                href="/support" 
                className="flex items-center justify-center gap-2 w-full py-4 border border-[#E5E7EB] text-[#121A14] rounded-xl font-medium hover:bg-gray-50 transition-all duration-300"
              >
                <Mail size={16} /> Contact Support
              </Link>
            </div>
          </div>
        )}

        {/* Footer Branding */}
        <div className="mt-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#3A4A3E]/40 font-bold">
            Arkin Organics &copy; {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </div>
  );
}