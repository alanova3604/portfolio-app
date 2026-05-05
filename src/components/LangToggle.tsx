"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";

export default function LangToggle() {
  const { lang, toggle } = useLang();

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
      className="fixed top-6 left-6 z-50 flex items-center gap-0 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-xl overflow-hidden shadow-lg"
      style={{ fontFamily: "var(--font-ligconsolata)" }}
    >
      {(["en", "es"] as const).map((l) => (
        <span
          key={l}
          className={`px-4 h-full flex items-center text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
            lang === l
              ? "bg-white text-black"
              : "text-white/50 hover:text-white/80"
          }`}
        >
          {l}
        </span>
      ))}
    </motion.button>
  );
}
