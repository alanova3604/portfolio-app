"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";

const FloatingNavbar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", icon: "solar:home-2-linear", activeIcon: "solar:home-2-bold" },
    { label: "About Me", href: "/about-me", icon: "solar:user-linear", activeIcon: "solar:user-bold" },
    { label: "Contact", href: "/contact", icon: "solar:letter-linear", activeIcon: "solar:letter-bold" },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="h-16 px-4 py-2 bg-black/40 border border-border rounded-[30px] backdrop-blur-xl flex justify-center items-center gap-2 sm:gap-7 transition-all duration-300">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative w-36 h-10 flex justify-center items-center gap-2.5 rounded-full transition-all duration-300 hover:bg-white/5 group`}
            >
              {isActive && (
                <motion.span
                  layoutId="activePill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              
              <div className="w-6 h-6 flex items-center justify-center relative z-10">
                <Icon
                  icon={isActive ? item.activeIcon : item.icon}
                  className={`text-xl transition-all duration-300 ${
                    isActive ? "text-white" : "text-white/60 group-hover:text-white"
                  }`}
                />
              </div>
              <span
                className={`text-sm sm:text-base font-semibold font-instrument capitalize leading-5 transition-all duration-300 relative z-10 ${
                  isActive ? "text-white" : "text-white/60 group-hover:text-white"
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
