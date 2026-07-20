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

  const getLinkClass = (href: string) => 
    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
      pathname === href
        ? "text-[#839756] bg-[#839756]/5"
        : "text-[#121A14]/70 hover:text-[#839756] hover:bg-[#839756]/5"
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
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeDropdown === item.name 
                    ? "text-[#839756] bg-[#839756]/5" 
                    : "text-[#121A14]/70 hover:text-[#839756] hover:bg-[#839756]/5"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown - Pushed down slightly to touch the button, closing the gap */}
              {activeDropdown === item.name && item.links && (
                <div className="absolute top-[85%] left-0 pt-4 w-52 z-100">
                  <div className="bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-[#121A14]/10 py-2">
                    {item.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          pathname === link.href 
                            ? "text-[#839756] font-semibold bg-[#839756]/5" 
                            : "text-[#121A14]/70 hover:text-[#839756] hover:bg-[#839756]/5"
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