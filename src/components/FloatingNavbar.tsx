"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { m } from "framer-motion";

const FloatingNavbar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", icon: "solar:home-2-linear", activeIcon: "solar:home-2-bold" },
    { label: "About Me", href: "/about-me", icon: "solar:user-linear", activeIcon: "solar:user-bold" },
    { label: "Contact", href: "/contact", icon: "solar:letter-linear", activeIcon: "solar:letter-bold" },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      {/* Primary Navigation Pill */}
      <nav className="h-16 px-3 py-2 bg-white/[0.05] rounded-[30px] backdrop-blur-2xl flex justify-center items-center gap-1 sm:gap-2 transition-all duration-300 shadow-2xl">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-6 h-full flex justify-center items-center gap-2.5 rounded-full transition-all duration-300 hover:bg-white/5 group"
            >
              {isActive && (
                  <m.span
                    layoutId="activePill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
              )}
              <Icon
                icon={isActive ? item.activeIcon : item.icon}
                className={`text-xl transition-all duration-300 ${
                  isActive ? "text-white" : "text-slate-400 group-hover:text-white"
                }`}
              />
              <span
                className={`text-sm font-semibold tracking-tight leading-5 transition-all duration-300 relative z-10 hidden md:block ${
                  isActive ? "text-white" : "text-slate-400 group-hover:text-white"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default FloatingNavbar;
