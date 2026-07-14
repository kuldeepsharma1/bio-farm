import { Leaf } from 'lucide-react';

const AppLogo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative group cursor-pointer">
        {/* Main Logo Container - Rich Emerald Gradient */}
        <div className="relative flex size-12 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-600/20 transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-emerald-600/40">
          
          {/* Subtle inner highlight for depth */}
          <div className="absolute inset-0 rounded-xl border border-white/20" />

          {/* Leaf Icon */}
          <Leaf
            className="size-6 text-white transition-transform duration-300 ease-out group-hover:rotate-12"
            strokeWidth={2}
          />
        </div>

        {/* Tooltip */}
        <div className="absolute -top-11 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:opacity-100">
          <div className="relative flex items-center justify-center rounded-lg bg-emerald-900 px-3 py-1.5 text-xs font-semibold tracking-wide text-emerald-50 shadow-xl">
            Arkin
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-emerald-900" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLogo;