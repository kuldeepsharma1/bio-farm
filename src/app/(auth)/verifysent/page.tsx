import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";
import AuthLayout from "@/components/general-entity/authLayout";
import Link from "next/link";
import { Metadata } from "next";
import { Mail, ArrowLeft, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL!),
  title: "Verification Sent | Arkin Organics",
  description: "We've sent a verification link to your email. Please check your inbox and complete the process to access your Arkin Organics account.",
};

export default async function VerificationSent() {
  const session = await getSession();
  if (session?.user) {
    redirect("/");
  }

  return (
    <AuthLayout 
      title="Check your inbox"
      desc="We've sent a verification link to complete your account setup."
      leftheading="Welcome to the Future of Farming" 
      leftDesc="Join our ecosystem of sustainable agriculture and be part of the revolution in organic farming practices."
    >
      {/* Container height is now entirely driven by its content with strict, responsive vertical bounds */}
      <div className="w-full max-w-md mx-auto h-auto flex flex-col justify-center py-4 md:py-6">
        
        {/* Success Icon - Compressed padding */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#839756]/10 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-[#839756]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Text Area - Tightened typography gaps */}
        <div className="text-center space-y-3 mb-8">
          <h2 className="text-2xl md:text-3xl font-medium text-[#121A14] tracking-tight">
            Check your email
          </h2>
          <p className="text-[#3A4A3E]/70 text-sm md:text-base max-w-sm mx-auto leading-relaxed">
            We&apos;ve sent a secure verification link to your email address. Please follow the instructions to activate your account.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            type="button"
            className="w-full flex justify-center py-3.5 px-4 rounded-full 
                       bg-[#839756] text-white text-sm font-bold uppercase tracking-widest 
                       shadow-md shadow-[#839756]/15 hover:bg-[#687945] hover:shadow-[#687945]/25 
                       transition-all duration-300 active:scale-[0.98]"
          >
            Resend Verification Email
          </button>

          <div className="flex items-center justify-center pt-1">
            <Link
              href="/sign-in"
              className="group flex items-center gap-2 text-sm font-semibold text-[#3A4A3E] hover:text-[#121A14] transition-colors"
            >
              <ArrowLeft size={16} className="text-[#3A4A3E]/50 group-hover:text-[#121A14] transition-colors group-hover:-translate-x-1 duration-300" />
              <span>Back to Sign in</span>
            </Link>
          </div>
        </div>

        {/* Help Box - Brought closer using responsive margins so it folds under the layout seamlessly */}
        <div className="mt-8 p-6 md:p-8 bg-white border border-[#121A14]/5 rounded-2xl shadow-sm">
          <div className="flex items-center gap-2.5 mb-3">
            <HelpCircle className="w-4 h-4 text-[#839756]" />
            <h3 className="text-[#121A14] font-bold text-xs uppercase tracking-wider">
              Still waiting?
            </h3>
          </div>
          <p className="text-[#3A4A3E] text-xs md:text-sm leading-relaxed">
            If you don't see it, check your spam folder or contact our
            <Link
              href="/support"
              className="text-[#839756] hover:text-[#121A14] font-bold ml-1 underline underline-offset-2 transition-colors"
            >
              support team
            </Link>
            .
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}