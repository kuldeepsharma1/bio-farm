"use client";

import { nav } from "@/data/nav";
import { useHeaderStore } from "@/store/headerStore";
import { NavItem, User } from "@/types";
import { ChevronDown, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav({ user }: { user: User | null }) {
  const {
    activeDropdown,
    setActiveDropdown,
    isMobileMenuOpen,
    setMobileMenuOpen,
  } = useHeaderStore();

  const navItems: NavItem[] = useMemo(() => nav, []);
  const pathname = usePathname();

  const closeAllMenus = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname, setActiveDropdown, setMobileMenuOpen]);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isUserAuthenticated =
    user?.role && ["user", "admin", "moderator"].includes(user.role);

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/60 shadow-2xl overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 space-y-2">
            
            {/* Home Navigation Link */}
            {isUserAuthenticated ? (
              <Link
                href="/home"
                onClick={closeAllMenus}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  pathname === "/dashboard" || pathname === "/home"
                    ? "bg-emerald-50/80 text-emerald-700 border border-emerald-200/60 shadow-xs"
                    : "text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
                }`}
              >
                <Home className="w-5 h-5 text-emerald-600" />
                <span>Home</span>
              </Link>
            ) : (
              <Link
                href="/"
                onClick={closeAllMenus}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  pathname === "/"
                    ? "bg-emerald-50/80 text-emerald-700 border border-emerald-200/60 shadow-xs"
                    : "text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
                }`}
              >
                <Home className="w-5 h-5 text-emerald-600" />
                <span>Home</span>
              </Link>
            )}

            {/* Dynamic Navigation Items */}
            {navItems.map((item) => {
              const dropdownKey = `mobile-${item.name}`;
              const isDropdownActive = activeDropdown === dropdownKey;

              return (
                <div key={dropdownKey} className="space-y-1">
                  {item.singlelink ? (
                    <Link
                      href={item.singlelink}
                      onClick={closeAllMenus}
                      className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-200 text-sm font-semibold ${
                        pathname === item.singlelink
                          ? "bg-emerald-50/80 text-emerald-700 border border-emerald-200/60 shadow-xs"
                          : "text-slate-700 hover:bg-slate-50 hover:text-emerald-600"
                      }`}
                    >
                      <item.icon className="w-5 h-5 text-emerald-600" />
                      <span>{item.name}</span>
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(dropdownKey)}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                          isDropdownActive
                            ? "bg-slate-50 text-emerald-700"
                            : "text-slate-700 hover:bg-slate-50 hover:text-emerald-600"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="w-5 h-5 text-emerald-600" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                            isDropdownActive ? "rotate-180 text-emerald-600" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu Links */}
                      <AnimatePresence>
                        {isDropdownActive && item.links && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-6 space-y-1 overflow-hidden border-l-2 border-emerald-100 ml-5 my-1"
                          >
                            {item.links.map((link) => {
                              const isSubActive = pathname === link.href;
                              return (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  onClick={closeAllMenus}
                                  className={`block px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 ${
                                    isSubActive
                                      ? "bg-emerald-50/90 text-emerald-700 font-semibold"
                                      : "text-slate-600 hover:bg-slate-50 hover:text-emerald-600"
                                  }`}
                                >
                                  {link.label}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              );
            })}

            {/* Auth Action Buttons */}
            {!user?.email && (
              <div className="pt-4 border-t border-slate-200/60 space-y-2.5">
                <Link
                  href="/sign-in"
                  onClick={closeAllMenus}
                  className="block w-full text-center px-4 py-3 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-all duration-200"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  onClick={closeAllMenus}
                  className="block w-full text-center px-4 py-3 text-sm font-semibold text-white bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl transition-all duration-200 shadow-md shadow-emerald-600/20 active:scale-[0.99]"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}