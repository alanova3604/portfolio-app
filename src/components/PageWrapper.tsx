"use client";

import { AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-[100vh] flex-1 pt-28">
      <AnimatePresence mode="wait">
        {/* We key on pathname so AnimatePresence knows when a route changes */}
        <div key={pathname}>
          {children}
        </div>
      </AnimatePresence>
    </div>
  );
}
