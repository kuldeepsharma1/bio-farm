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
  const homePath =
    user?.role && ["user", "admin", "moderator"].includes(user.role)
      ? "/home"
      : "/";

  // Match root path exactly; match sub-routes strictly or with sub-path prefixes
  const isPathActive = (href: string) => {
    if (href === "/" || href === "/home") return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isHomeActive = isPathActive(homePath);

  return (
    <nav className="flex items-center gap-1 p-1 bg-black/2 border border-[#121A14]/6 rounded-2xl backdrop-blur-md">
      {/* Home Nav Link */}
      <Link
        href={homePath}
        className={`group relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${
          isHomeActive
            ? "text-[#839756]"
            : "text-[#121A14]/70 hover:text-[#121A14]"
        }`}
      >
        {isHomeActive && (
          <motion.div
            layoutId="active-pill"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className="absolute inset-0 bg-[#839756]/12 border border-[#839756]/25 rounded-xl shadow-xs"
          />
        )}
        <Home
          className={`w-4 h-4 relative z-10 transition-transform duration-200 ${
            isHomeActive
              ? "text-[#839756]"
              : "opacity-70 group-hover:opacity-100 group-hover:scale-105"
          }`}
        />
        <span className="relative z-10 font-semibold tracking-tight">Home</span>
      </Link>

      {/* Dynamic Nav Items */}
      {navItems.map((item) => {
        const isDropdownOpen = activeDropdown === item.name;

        // Check if any sublink is currently active
        const hasActiveChild =
          item.links?.some((l) => isPathActive(l.href)) ?? false;
        const isSingleActive = item.singlelink
          ? isPathActive(item.singlelink)
          : false;
        const isCurrentActive = isSingleActive || hasActiveChild;

        return (
          <div key={item.name} className="relative">
            {item.singlelink ? (
              <Link
                href={item.singlelink}
                className={`group relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${
                  isCurrentActive
                    ? "text-[#839756]"
                    : "text-[#121A14]/70 hover:text-[#121A14]"
                }`}
              >
                {isCurrentActive && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-[#839756]/12 border border-[#839756]/25 rounded-xl shadow-xs"
                  />
                )}
                <item.icon
                  className={`w-4 h-4 relative z-10 transition-transform duration-200 ${
                    isCurrentActive
                      ? "text-[#839756]"
                      : "opacity-70 group-hover:opacity-100 group-hover:scale-105"
                  }`}
                />
                <span className="relative z-10 font-semibold tracking-tight">
                  {item.name}
                </span>
              </Link>
            ) : (
              <div
                className="relative"
                onMouseLeave={closeAllMenus}
              >
                <button
                  onClick={() =>
                    setActiveDropdown(isDropdownOpen ? null : item.name)
                  }
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  className={`group relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    isCurrentActive || isDropdownOpen
                      ? "text-[#839756]"
                      : "text-[#121A14]/70 hover:text-[#121A14]"
                  }`}
                >
                  {isCurrentActive && (
                    <motion.div
                      layoutId="active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 bg-[#839756]/12 border border-[#839756]/25 rounded-xl shadow-xs"
                    />
                  )}
                  <item.icon
                    className={`w-4 h-4 relative z-10 transition-transform duration-200 ${
                      isCurrentActive
                        ? "text-[#839756]"
                        : "opacity-70 group-hover:opacity-100 group-hover:scale-105"
                    }`}
                  />
                  <span className="relative z-10 font-semibold tracking-tight">
                    {item.name}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 relative z-10 transition-transform duration-300 ${
                      isDropdownOpen
                        ? "rotate-180 text-[#839756]"
                        : isCurrentActive
                        ? "text-[#839756]"
                        : "opacity-50 group-hover:opacity-100"
                    }`}
                  />
                </button>

                {/* Animated Dropdown Menu */}
                <AnimatePresence>
                  {isDropdownOpen && item.links && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 pt-2.5 z-50 min-w-56 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
                    >
                      <div className="bg-[#FAF9F6]/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_48px_-12px_rgba(18,26,20,0.18)] border border-[#121A14]/10 p-1.5 space-y-1">
                        {item.links.map((link) => {
                          const isSubActive = isPathActive(link.href);

                          return (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={closeAllMenus}
                              className={`relative group/sub flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200 ${
                                isSubActive
                                  ? "bg-[#839756]/15 text-[#839756] shadow-2xs"
                                  : "text-[#121A14]/75 hover:text-[#121A14] hover:bg-[#839756]/8 hover:translate-x-0.5"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span
                                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                    isSubActive
                                      ? "bg-[#839756] scale-100 ring-4 ring-[#839756]/20"
                                      : "bg-transparent scale-0 group-hover/sub:scale-75 group-hover/sub:bg-[#839756]/50"
                                  }`}
                                />
                                <span>{link.label}</span>
                              </div>

                              {isSubActive && (
                                <motion.span
                                  layoutId="sub-active-dot"
                                  className="text-[10px] font-bold uppercase tracking-wider text-[#839756] bg-white/70 px-1.5 py-0.5 rounded-md border border-[#839756]/20"
                                >
                                  Active
                                </motion.span>
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