"use client";

import { useCallback, useEffect, useRef, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Icon } from "@iconify/react";

interface ModalProps {
  children: ReactNode;
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

export default function Modal({ children, containerRef }: ModalProps) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    };
    
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onDismiss]);

  return (
    <div
      ref={overlay}
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xl px-4 md:px-0 flex items-center justify-center p-4 md:p-10"
      onClick={onDismiss}
    >
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 35,
          opacity: { duration: 0.2 } 
        }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full h-full max-w-[1400px] bg-black rounded-[32px] md:rounded-[48px] border border-white/10 shadow-[0_20px_80px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onDismiss}
          className="absolute top-6 right-6 z-[100] w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors group cursor-pointer"
        >
          <Icon 
            icon="solar:close-circle-bold" 
            className="text-2xl text-white/40 group-hover:text-white transition-colors" 
          />
        </button>

        {/* Modal Scroll Content */}
        <div 
           ref={containerRef}
           className="w-full h-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-white/10"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
