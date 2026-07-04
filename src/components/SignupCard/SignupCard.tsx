"use client";

import {
  Leaf,
  Mail,
  Lock,
  User,
  ShieldCheck,
  Truck,
  BadgeCheck
} from "lucide-react";

export default function SignupCard() {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">

      <div className="grid w-full overflow-hidden rounded-[40px] border border-white/20 bg-white/60 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-white/5 lg:grid-cols-2">

        {/* Left */}

        <div className="relative hidden overflow-hidden bg-gradient-to-br from-emerald-700 to-green-500 p-14 text-white lg:flex lg:flex-col lg:justify-between">

          <div>

            <div className="mb-10 flex items-center gap-3">

              <div className="rounded-2xl bg-white/20 p-3">
                <Leaf size={28} />
              </div>

              <div>
                <h1 className="text-3xl font-bold">
                  BioStore
                </h1>

                <p className="text-green-100">
                  Organic Living
                </p>

              </div>

            </div>

            <h2 className="max-w-md text-5xl font-bold leading-tight">
              Grow Healthy.
              <br />
              Live Naturally.
            </h2>

            <p className="mt-8 max-w-md text-lg text-green-100">
              Join thousands of eco-conscious customers shopping premium organic products.
            </p>

          </div>

          <div className="space-y-5">

            <Feature
              icon={<ShieldCheck />}
              title="100% Secure"
            />

            <Feature
              icon={<Truck />}
              title="Fast Delivery"
            />

            <Feature
              icon={<BadgeCheck />}
              title="Certified Organic"
            />

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center justify-center p-8 md:p-14">

          <div className="w-full max-w-md">

            <div className="mb-10">

              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Create Account
              </h2>

              <p className="mt-3 text-gray-500">
                Welcome to your organic shopping experience.
              </p>

            </div>

            <form className="space-y-6">

              <Input
                icon={<User size={18} />}
                placeholder="Full Name"
              />

              <Input
                icon={<Mail size={18} />}
                placeholder="Email Address"
              />

              <Input
                icon={<Lock size={18} />}
                placeholder="Password"
              />

              <Input
                icon={<Lock size={18} />}
                placeholder="Confirm Password"
              />

              <label className="flex cursor-pointer items-center gap-3 text-sm">

                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-green-500 accent-green-600"
                />

                I agree to the Terms & Privacy Policy

              </label>

              <button
                className="w-full rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 py-4 font-semibold text-white transition hover:scale-[1.02]"
              >
                Create Account
              </button>

              <div className="relative py-2">

                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" />
                </div>

                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-4 dark:bg-[#111]">
                    OR
                  </span>
                </div>

              </div>

              <button
                className="flex w-full items-center justify-center gap-3 rounded-xl border py-4 transition hover:bg-gray-100 dark:hover:bg-white/10"
              >
                Continue with Google
              </button>

              <p className="text-center text-sm text-gray-500">

                Already have an account?

                <span className="ml-2 cursor-pointer font-semibold text-green-600">
                  Sign In
                </span>

              </p>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

function Input({
  icon,
  placeholder,
}: {
  icon: React.ReactNode;
  placeholder: string;
}) {
  return (
    <div className="flex items-center rounded-xl border bg-white px-4 py-3 shadow-sm transition focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-300 dark:border-white/10 dark:bg-white/5">
      <span className="mr-3 text-green-600">{icon}</span>
      <input
        placeholder={placeholder}
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
}

function Feature({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur">
      {icon}
      <span className="font-medium">{title}</span>
    </div>
  );
}