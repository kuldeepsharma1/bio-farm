"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Leaf } from "lucide-react";
import SearchBar from "./Search";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import RightSide from "./RightSide";
import { User } from "@/types";

export default function Header({ user }: { user: User | null }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show header if near the top (prevents accidental hiding)
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down -> hide header
        setIsVisible(false);
      } else {
        // Scrolling up -> show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-transform duration-300 bg-[#FAF9F6]/85 backdrop-blur-md border-b border-[#121A14]/5 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reduced height to fix high margin/spacing issues */}
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
            <div className="bg-[#839756] p-2 rounded-xl transition-transform duration-300 group-hover:scale-105">
              <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-[#121A14]">
              Arkin
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center bg-[#121A14]/5 rounded-2xl p-1.5 gap-1">
            <Nav user={user} />
          </div>

          {/* Right Side Actions & Mobile Search Toggle */}
          <div className="flex items-center gap-2">
            <SearchBar />
            <RightSide user={user} />
            <MobileNav user={user} />
          </div>
        </div>
      </nav>



    </header>
  );
}