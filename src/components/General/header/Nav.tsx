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

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAllMenus = () => setActiveDropdown(null);

  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname, setActiveDropdown]);

  // Helper for active link styles
  const getLinkClass = (href: string) => 
    `flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
      pathname === href
        ? "bg-[#839756]/10 text-[#839756]"
        : "text-[#121A14]/70 hover:text-[#839756] hover:bg-[#839756]/5"
    }`;

  return (
    <>
      <Link href={user?.role && ["user", "admin", "moderator"].includes(user.role) ? "/home" : "/"} className={getLinkClass(user?.role ? "/home" : "/")}>
        <Home className="w-4 h-4" /> Home
      </Link>

      {navItems.map((item) => (
        <div key={item.name} className="relative">
          {item.singlelink ? (
            <Link href={item.singlelink} className={getLinkClass(item.singlelink)}>
              <item.icon className="w-4 h-4" />
              {item.name}
            </Link>
          ) : (
            <div onMouseLeave={closeAllMenus}>
              <button
                onClick={() => handleDropdownToggle(item.name)}
                onMouseEnter={() => setActiveDropdown(item.name)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeDropdown === item.name ? "text-[#839756] bg-[#839756]/5" : "text-[#121A14]/70 hover:text-[#839756]"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === item.name && item.links && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#121A14]/5 py-2 z-50 animate-in fade-in zoom-in-95 duration-200">
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeAllMenus}
                      className={`block px-5 py-3 text-sm font-medium transition-colors ${
                        pathname === link.href ? "text-[#839756]" : "text-[#121A14]/70 hover:text-[#839756]"
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