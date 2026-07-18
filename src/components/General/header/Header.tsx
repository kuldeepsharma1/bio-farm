import Link from "next/link";
import { Leaf } from "lucide-react";
import SearchBar from "./Search";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import RightSide from "./RightSide";
import { User } from "@/types";

export default function Header({ user }: { user: User | null }) {
  return (
    <header className="fixed w-full top-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-[#121A14]/5 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="bg-[#839756] p-2.5 rounded-xl">
              <Leaf className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#121A14]">
              Arkin
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center bg-[#121A14]/5 rounded-2xl p-1.5 gap-1">
            <Nav user={user} />
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:block flex-1 max-w-50 ml-6">
            <SearchBar />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <RightSide user={user} />
          </div>
        </div>
      </nav>

      {/* Mobile Search - Adjusted for cleaner spacing */}
      <div className="md:hidden px-4 pb-4">
        <SearchBar />
      </div>

      <MobileNav user={user} />
    </header>
  );
}