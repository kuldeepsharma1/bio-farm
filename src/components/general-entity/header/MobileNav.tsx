"use client";

import { nav } from "@/data/nav";
import { useHeaderStore } from "@/store/headerStore";
import { NavItem, User } from "@/types";
import { ChevronDown, Home, Leaf, LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { SignOutButton } from "./SignOutButton";
import { handleSignOut } from "@/actions/user";

interface MobileNavProps {
  user: User | null;
}

export default function MobileNav({ user }: MobileNavProps) {
  const {
    activeDropdown,
    setActiveDropdown,
    isMobileMenuOpen,
    setMobileMenuOpen,
  } = useHeaderStore();

  const pathname = usePathname();
  const navItems = useMemo<NavItem[]>(() => nav, []);

  const isAuthenticated =
    !!user?.email &&
    !!user?.role &&
    ["user", "admin", "moderator"].includes(user.role);

  const closeMenu = (): void => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const toggleDropdown = (name: string): void => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isActive = (href: string): boolean => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isHomeActive = pathname === "/" || pathname === "/home";

  return (
    <>  {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500/20"
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? (
          <X
            className={`w-5 h-5 text-gray-600 transition-transform duration-200 `}
          />
        ) : (
          <Menu
            className={`w-5 h-5 text-gray-600 transition-transform duration-200 `}
          />
        )}
      </button>
      <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent
          side="right"
          className="w-[85vw] max-w-95 border-none bg-[#FAF9F6] p-0 text-[#121A14] shadow-2xl [&>button]:hidden"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation Menu</SheetTitle>
            <SheetDescription>Arkin mobile navigation.</SheetDescription>
          </SheetHeader>

          <div className="flex h-full flex-col">
            <div
              className="relative flex shrink-0 flex-col bg-[#0D6727] px-6 pb-10 pt-6 text-white shadow-sm"
              style={{
                borderBottomLeftRadius: "50% 12%",
                borderBottomRightRadius: "50% 12%",
              }}
            >
              {/* Top Bar: Brand & Close */}
              <div className="mb-6 flex items-center justify-between">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center gap-2 transition-opacity active:opacity-75"
                >
                  <Leaf className="h-5 w-5" strokeWidth={2.5} />
                  <span className="text-lg font-semibold tracking-tight">
                    Arkin
                  </span>
                </Link>

                <button
                  onClick={closeMenu}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 active:scale-95"
                  aria-label="Close Menu"
                >
                  <X className="h-4 w-4" strokeWidth={2.5} />
                </button>
              </div>

              {/* Centered Profile Area */}
              <div className="flex flex-col items-center justify-center text-center">
                {isAuthenticated ? (
                  user.image ? (
                    <Image
                      width={40}
                      height={40}
                      src={user.image}
                      alt={user.name || "User avatar"}
                      className="w-9 h-9 rounded-full mb-2"
                    />
                  ) : (
                    <div
                      className="mb-2 flex h-8 w-8 items-center justify-center rounded-full border border-[#0D6727]/10 bg-[#F1F3EC] text-sm font-semibold text-[#0D6727] shadow-sm"
                    >
                      {user.email?.[0]?.toUpperCase() || "U"}
                    </div>
                  )
                ) : (
                  <div className="mb-3 flex h-17 w-17 items-center justify-center overflow-hidden rounded-full bg-white/20 shadow-inner backdrop-blur-sm ring-2 ring-white/10">
                    <Leaf className="h-8 w-8 text-white" strokeWidth={1.5} />
                  </div>
                )}

                <h2 className="text-[19px] font-medium tracking-tight">
                  {isAuthenticated ? user.name || "Arkin Member" : "Welcome"}
                </h2>
                <p className="mt-0.5 text-[13px] text-white/70">
                  {isAuthenticated
                    ? user.email
                    : "Grow naturally with organic nutrition."}
                </p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6">
              <div className="mb-3 ml-2">
                <span className="text-[11px] font-medium text-[#121A14]/60">
                  General
                </span>
              </div>

              <div className="flex flex-col space-y-1.5">
                {/* Home */}
                <Link
                  href={isAuthenticated ? "/home" : "/"}
                  onClick={closeMenu}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-[14.5px] font-medium transition-all active:scale-[0.98] ${isHomeActive
                    ? "border border-[#0D6727]/15 bg-white text-[#0D6727] shadow-sm"
                    : "border border-transparent text-[#121A14]/80 hover:bg-[#121A14]/5 hover:text-[#121A14]"
                    }`}
                >
                  <Home className="h-4.5 w-4.5" strokeWidth={1.8} />
                  <span>Home Overview</span>
                </Link>

                {/* Dynamic Items */}
                {navItems.map((item) => {
                  const key = `mobile-${item.name}`;
                  const open = activeDropdown === key;
                  const hasChildren =
                    Array.isArray(item.links) && item.links.length > 0;
                  const itemActive = item.singlelink && isActive(item.singlelink);

                  if (item.singlelink) {
                    return (
                      <Link
                        key={key}
                        href={item.singlelink}
                        onClick={closeMenu}
                        className={`flex items-center gap-3 rounded-3xl px-4 py-3 text-[14.5px] font-medium transition-all active:scale-[0.98] ${itemActive
                          ? "border border-[#0D6727]/15 bg-white text-[#0D6727] shadow-sm"
                          : "border border-transparent text-[#121A14]/80 hover:bg-[#121A14]/5 hover:text-[#121A14]"
                          }`}
                      >
                        <item.icon className="h-4.5 w-4.5" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  }

                  if (!hasChildren) return null;

                  return (
                    <div key={key} className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => toggleDropdown(key)}
                        aria-expanded={open}
                        className={`flex items-center justify-between rounded-3xl px-4 py-3 text-left text-[14.5px] font-medium transition-all active:scale-[0.98] ${open
                          ? "border border-transparent bg-[#121A14]/3 text-[#121A14]"
                          : "border border-transparent text-[#121A14]/80 hover:bg-[#121A14]/5 hover:text-[#121A14]"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="h-4.5 w-4.5" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown
                          className={`h-4 w-4 text-[#121A14]/40 transition-transform duration-200 ${open ? "-rotate-180" : ""
                            }`}
                        />
                      </button>

                      {/* Submenu Dropdown */}
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${open
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <div className="ml-10 mt-1 flex flex-col space-y-1 border-l-2 border-[#121A14]/5 py-1 pl-4">
                            {item.links?.map((link) => {
                              const active = isActive(link.href);
                              return (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  onClick={closeMenu}
                                  className={`flex items-center justify-between rounded-xl px-3 py-2 text-[13.5px] font-medium transition-colors ${active
                                    ? "text-[#0D6727]"
                                    : "text-[#121A14]/60 hover:text-[#121A14]"
                                    }`}
                                >
                                  <span>{link.label}</span>
                                  {active && (
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#0D6727]" />
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Profile Action Segment (Sign Out visually inspired by the image) */}
              <div className="mt-6 mb-3 ml-2">
                <span className="text-[11px] font-medium text-[#121A14]/60">
                  Account
                </span>
              </div>

              {user?.email ? (
                <SignOutButton
                  closeAllMenus={closeMenu}
                  handleSignOut={handleSignOut}
                />
              ) : (
                <Link
                  href="/sign-in"
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-3xl border border-transparent px-4 py-3 text-[14.5px] font-medium text-[#121A14]/80 transition-all hover:bg-[#121A14]/5 hover:text-[#121A14] active:scale-[0.98]"
                >
                  <LogOut className="h-4.5 w-4.5 rotate-180" strokeWidth={1.8} />
                  <span>Sign In</span>
                </Link>
              )}
            </div>

            {/* ------------------------------------------------ */}
            {/* Footer Action Buttons */}
            {/* ------------------------------------------------ */}
            <div className="flex shrink-0 items-center gap-3 p-5 pt-0">
              {!user?.email ? (
                <>
                  <Link
                    href="/sign-up"
                    onClick={closeMenu}
                    className="flex flex-1 items-center justify-center rounded-[20px] bg-[#0D6727] py-3.5 text-[13.5px] font-medium text-white shadow-md shadow-[#0D6727]/20 transition-transform active:scale-95"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/products"
                    onClick={closeMenu}
                    className="flex flex-1 items-center justify-center rounded-[20px] border border-[#121A14]/10 bg-white py-3.5 text-[13.5px] font-medium text-[#121A14] shadow-sm transition-transform active:scale-95"
                  >
                    Explore Farm
                  </Link>
                </>
              ) : (
                <Link
                  href="/profile"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center rounded-[20px] bg-[#0D6727] py-3.5 text-[13.5px] font-medium text-white shadow-md shadow-[#0D6727]/20 transition-transform active:scale-95"
                >
                  Manage Profile
                </Link>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>

  );
}
