import SignupCard from "@/components/SignupCard/SignupCard";


export default function SignupPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-green-50 via-white to-emerald-100 dark:from-[#07140b] dark:via-[#0d1b11] dark:to-[#08110b]">

      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-300/30 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-105 w-105 rounded-full bg-lime-300/20 blur-[180px]" />

      <SignupCard />

    </main>
  );
}