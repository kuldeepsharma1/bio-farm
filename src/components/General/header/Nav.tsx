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

  const closeAllMenus = () => setActiveDropdown(null);

  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname, setActiveDropdown]);

  // Unified link class with refined hover and active states
  const getLinkClass = (href: string) => 
    `group flex items-center gap-2.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
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
        <Home className="w-4 h-4 opacity-70 group-hover:opacity-100" /> 
        <span className="relative">Home</span>
      </Link>

      {navItems.map((item) => (
        <div key={item.name} className="relative">
          {item.singlelink ? (
            <Link href={item.singlelink} className={getLinkClass(item.singlelink)}>
              <item.icon className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              {item.name}
            </Link>
          ) : (
            <div onMouseLeave={closeAllMenus}>
              <button
                onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                onMouseEnter={() => setActiveDropdown(item.name)}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeDropdown === item.name 
                    ? "text-[#839756] bg-[#839756]/5" 
                    : "text-[#121A14]/70 hover:text-[#839756] hover:bg-[#839756]/5"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === item.name && item.links && (
                <div className="absolute top-[calc(100%+0.5rem)] left-0 w-52 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-[#121A14]/5 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeAllMenus}
                      className={`block px-5 py-2.5 text-sm transition-all duration-200 hover:pl-6 ${
                        pathname === link.href 
                          ? "text-[#839756] font-bold" 
                          : "text-[#121A14]/70 hover:text-[#839756]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </>
  );
}