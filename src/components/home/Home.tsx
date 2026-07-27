"use client";
import { nav } from "@/data/nav";
import { useHeaderStore } from "@/store/headerStore";
import { NavItem, User } from "@/types";
import { ChevronDown, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";

export default function Nav({ user }: { user: User | null }) {
  const { activeDropdown, setActiveDropdown } = useHeaderStore();
  const pathname = usePathname();
  const navItems: NavItem[] = useMemo(() => nav, []);

  // Closes menu on route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname, setActiveDropdown]);

  // Premium color logic for main nav items
  const getLinkClass = (href: string) => 
    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      pathname === href
        ? "text-[#4B5A33] bg-[#839756]/10" // Deepened green text for better contrast
        : "text-[#5B635D] hover:text-[#1E2621] hover:bg-[#F2F4EF]" // Warm, organic gray-green hover
    }`;

  return (
    <>
      <Link 
        href={user?.role && ["user", "admin", "moderator"].includes(user.role) ? "/home" : "/"} 
        className={getLinkClass(user?.role ? "/home" : "/")}
      >
        <Home className="w-4 h-4" /> Home
      </Link>

      {navItems.map((item) => (
        <div 
          key={item.name} 
          className="relative"
          // This keeps the dropdown open while hovering the container
          onMouseEnter={() => !item.singlelink && setActiveDropdown(item.name)}
          onMouseLeave={() => !item.singlelink && setActiveDropdown(null)}
        >
          {item.singlelink ? (
            <Link href={item.singlelink} className={getLinkClass(item.singlelink)}>
              <item.icon className="w-4 h-4" />
              {item.name}
            </Link>
          ) : (
            <>
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeDropdown === item.name 
                    ? "text-[#4B5A33] bg-[#839756]/10" 
                    : "text-[#5B635D] hover:text-[#1E2621] hover:bg-[#F2F4EF]"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180 text-[#4B5A33]" : "text-[#8E9992]"}`} />
              </button>

              {/* Dropdown - Pushed down slightly to touch the button, closing the gap */}
              {activeDropdown === item.name && item.links && (
                <div className="absolute top-[85%] left-0 pt-4 w-52 z-100">
                  {/* Elevated Dropdown Card with Organic Shadows */}
                  <div className="bg-[#FCFDFB] rounded-xl shadow-[0_16px_40px_-12px_rgba(131,151,86,0.15)] border border-[#EBEFE8] py-2">
                    {item.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-2.5 text-sm transition-all duration-200 ${
                          pathname === link.href 
                            ? "text-[#4B5A33] font-semibold bg-[#839756]/10" 
                            : "text-[#5B635D] hover:text-[#1E2621] hover:bg-[#F2F4EF]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </>
  );
}