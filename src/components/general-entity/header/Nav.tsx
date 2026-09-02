"use client";

import { nav } from "@/data/nav";
import { useHeaderStore } from "@/store/headerStore";
import { NavItem, User } from "@/types";
import { ChevronDown, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav({ user }: { user: User | null }) {
  const { activeDropdown, setActiveDropdown } = useHeaderStore();
  const pathname = usePathname();
  const navItems: NavItem[] = useMemo(() => nav, []);

  const closeAllMenus = () => setActiveDropdown(null);

  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname, setActiveDropdown]);

  // Determine user home path
  const homePath = user?.role && ["user", "admin", "moderator"].includes(user.role)
    ? "/home"
    : "/";

  // Dynamic style handler for active states
  const getLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `group relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "text-[#839756] bg-[#839756]/10 shadow-2xs"
        : "text-[#121A14]/70 hover:text-[#839756] hover:bg-[#839756]/5"
    }`;
  };

  return (
    <nav className="flex items-center gap-1.5">
      {/* Home Nav Link */}
      <Link href={homePath} className={getLinkClass(homePath)}>
        <Home className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity" />
        <span>Home</span>
      </Link>

      {/* Dynamic Nav Items */}
      {navItems.map((item) => {
        const isDropdownOpen = activeDropdown === item.name;

        return (
          <div key={item.name} className="relative">
            {item.singlelink ? (
              <Link href={item.singlelink} className={getLinkClass(item.singlelink)}>
                <item.icon className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                <span>{item.name}</span>
              </Link>
            ) : (
              <div 
                className="relative" 
                onMouseLeave={closeAllMenus}
              >
                <button
                  onClick={() => setActiveDropdown(isDropdownOpen ? null : item.name)}
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  className={`group relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isDropdownOpen
                      ? "text-[#839756] bg-[#839756]/10"
                      : "text-[#121A14]/70 hover:text-[#839756] hover:bg-[#839756]/5"
                  }`}
                >
                  <item.icon className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span>{item.name}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180 text-[#839756]" : "opacity-60"
                    }`}
                  />
                </button>

                {/* Animated Dropdown Menu */}
                <AnimatePresence>
                  {isDropdownOpen && item.links && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      /* Invisible pseudo-bridge above container ensures hover isn't lost when moving cursor */
                      className="absolute top-full left-0 pt-2 z-50 min-w-52.5 before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-2"
                    >
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(18,26,20,0.12)] border border-[#121A14]/10 p-2 space-y-0.5">
                        {item.links.map((link) => {
                          const isSubActive = pathname === link.href;

                          return (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={closeAllMenus}
                              className={`flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                                isSubActive
                                  ? "bg-[#839756]/10 text-[#839756]"
                                  : "text-[#121A14]/75 hover:text-[#839756] hover:bg-[#839756]/5 hover:translate-x-0.5"
                              }`}
                            >
                              <span>{link.label}</span>
                              {isSubActive && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#839756]" />
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}