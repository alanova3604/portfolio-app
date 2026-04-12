"use client";

import { useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import GeometricPattern from "@/components/GeometricPattern";

export default function Home() {
  const headline = "Hi!, this is my portfolio";
  const router = useRouter();
  const searchParams = useSearchParams();

  // Convert title to URL-safe slug
  const toSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  // Derive selected from URL param — no extra state needed
  const categoryParam = searchParams.get("category");

  // Restore last category from sessionStorage when landing on / with no param
  useEffect(() => {
    if (!categoryParam) {
      const saved = sessionStorage.getItem("lastCategory");
      if (saved) {
        const params = new URLSearchParams();
        params.set("category", saved);
        router.replace(`/?${params.toString()}`, { scroll: false });
      }
    }
  // Only run on mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep sessionStorage in sync with the URL param
  useEffect(() => {
    if (categoryParam) {
      sessionStorage.setItem("lastCategory", categoryParam);
    } else {
      sessionStorage.removeItem("lastCategory");
    }
  }, [categoryParam]);

  const services = [
    {
      title: "Product & SaaS",
      description: "Designing intuitive workflows and complex systems for web and mobile.",
      icon: "solar:widget-bold-duotone",
    },
    {
      title: "Growth & E-commerce",
      description: "Optimizing user journeys to drive conversion and brand loyalty.",
      icon: "solar:graph-up-bold-duotone",
    },
    {
      title: "Interactive Systems",
      description: "Developing 3D logic and high-fidelity prototypes that bridge design and code.",
      icon: "solar:cpu-bold-duotone",
    },
  ];

  // Placeholder project items — replace with real data later
  const projectItems = Array.from({ length: 6 }, (_, i) => ({ id: i + 1 }));

  const headlineDelay = headline.length * 0.05;
  const selected = services.find((s) => toSlug(s.title) === categoryParam)?.title ?? null;
  const isSelected = selected !== null;

  const handleSelect = useCallback(
    (title: string) => {
      const slug = toSlug(title);
      const isActive = categoryParam === slug;
      const params = new URLSearchParams(searchParams.toString());
      if (isActive) {
        params.delete("category");
      } else {
        params.set("category", slug);
      }
      router.push(`/?${params.toString()}`, { scroll: false });
    },
    [categoryParam, router, searchParams]
  );

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-black to-zinc-900 overflow-hidden flex flex-col pt-24 pb-8 px-6 md:px-12 lg:px-24">
      {/* Background Elements */}
      <GeometricPattern />

      {/* Diagonal Glow Animation */}
      <motion.div
        initial={{ top: "-20%", left: "-20%", opacity: 0 }}
        animate={{ top: ["-20%", "120%"], left: ["-20%", "120%"], opacity: [0, 0.15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        className="absolute w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pointer-events-none z-0"
      />
      <div className="absolute -top-[300px] -right-[500px] w-[1000px] h-[1000px] bg-zinc-700/10 rounded-full blur-[120px] pointer-events-none" />

      <LayoutGroup>

        {/* ───── DEFAULT STATE: Centered headline + tall cards ───── */}
        <AnimatePresence>
          {!isSelected && (
            <motion.div
              key="default-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="relative z-10 flex flex-col items-center text-center justify-center flex-1 gap-12 md:gap-16 max-w-[1800px] w-full mx-auto"
            >
              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-4 md:gap-6"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-slate-400 tracking-tight leading-tight">
                  {headline.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.05, delay: index * 0.05 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: headlineDelay + 0.2 }}
                  className="text-lg md:text-2xl lg:text-3xl font-medium text-slate-500/80"
                >
                  Are you looking for one of this?
                </motion.p>
              </motion.div>

              {/* Cards grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    layoutId={`card-${service.title}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: headlineDelay + 0.4 + index * 0.2,
                      ease: "easeOut",
                      layout: { type: "spring", stiffness: 250, damping: 30 },
                    }}
                    onClick={() => handleSelect(service.title)}
                    style={{ borderRadius: 24 }}
                    className="group relative h-[200px] md:h-[260px] lg:h-[300px] p-6 md:p-10 flex flex-col items-center justify-center gap-4 bg-white/5 border border-white/5 backdrop-blur-sm shadow-2xl overflow-hidden cursor-pointer hover:bg-white/[0.08] transition-colors duration-300"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
                    <motion.span layoutId={`icon-${service.title}`}>
                      <Icon icon={service.icon} className="text-5xl md:text-6xl text-primary transition-transform duration-500 group-hover:scale-105" />
                    </motion.span>
                    <div className="space-y-2 text-center">
                      <motion.h3 layoutId={`title-${service.title}`} className="text-xl md:text-2xl font-bold text-white leading-none">
                        {service.title}
                      </motion.h3>
                      <p className="text-neutral-400 text-sm md:text-base font-medium leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ───── SELECTED STATE: Pills + project list ───── */}
        <AnimatePresence>
          {isSelected && (
            <motion.div
              key="selected-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="relative z-10 flex flex-col flex-1 gap-6 max-w-[1800px] w-full mx-auto"
            >
              {/* Filter Pills row */}
              <div className="flex items-center gap-3">
                {services.map((service) => {
                  const isActive = categoryParam === toSlug(service.title);
                  return (
                    <motion.button
                      key={service.title}
                      layoutId={`card-${service.title}`}
                      onClick={() => handleSelect(service.title)}
                      style={{ borderRadius: 999 }}
                      transition={{ type: "spring", stiffness: 250, damping: 30 }}
                      className={`flex items-center gap-2.5 px-5 py-3 text-sm font-semibold backdrop-blur-md transition-colors duration-300 ${
                        isActive
                          ? "bg-primary/20 text-white border border-primary/40 shadow-[0_0_20px_rgba(0,122,255,0.25)]"
                          : "bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <motion.span layoutId={`icon-${service.title}`}>
                        <Icon icon={service.icon} className="text-base" />
                      </motion.span>
                      <motion.span layoutId={`title-${service.title}`} className="whitespace-nowrap">
                        {service.title}
                      </motion.span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Project list grid */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 flex-1"
              >
                {projectItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: 0.3 + index * 0.05, ease: "easeOut" }}
                    className="group relative rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm overflow-hidden cursor-pointer hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 aspect-square flex items-center justify-center"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.03] to-transparent" />
                    <Icon icon="solar:add-square-linear" className="text-2xl text-white/10 group-hover:text-white/20 transition-colors duration-300" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </LayoutGroup>

      {/* Bottom Decorative Text */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none z-0 opacity-[0.05]">
        <span className="text-[10vw] font-medium tracking-tighter whitespace-nowrap">
          Design and Engineering.
        </span>
      </div>
    </main>
  );
}
