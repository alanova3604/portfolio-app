"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import AboutMe from "./about-me/page";
import Contact from "./contact/page";
import { useLang } from "@/context/LangContext";

// Build sections dynamically from project data
const projectSections = projects.map((p) => ({
  id: p.slug,
  title: p.title,
  bgImage: p.banner,
  logo: p.logo,
  subtitle: p.subtitle,
  color: p.color,
  type: "project" as const,
}));

const staticSections = [
  { id: "about-me",  title: "About Me", type: "about"   as const },
  { id: "contact",   title: "Contact",  type: "contact" as const },
];

const allSections = [...projectSections, ...staticSections];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);
  const { t } = useLang();

  const goToSection = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(allSections.length - 1, index));
      if (clamped === activeIndex) return;

      const element = document.getElementById(allSections[clamped].id);
      if (element) {
        isScrolling.current = true;
        element.scrollIntoView({ behavior: "smooth" });
        setActiveIndex(clamped);
        setTimeout(() => { isScrolling.current = false; }, 700);
      }
    },
    [activeIndex]
  );

  // Wheel — skip hijack when the target is inside a scrollable container (e.g. modal)
  useEffect(() => {
    const isInsideScrollable = (target: EventTarget | null): boolean => {
      let el = target as HTMLElement | null;
      while (el && el !== document.body) {
        if (
          el !== document.documentElement &&
          (el.scrollHeight > el.clientHeight) &&
          ["auto", "scroll", "overlay"].includes(getComputedStyle(el).overflowY)
        ) return true;
        el = el.parentElement;
      }
      return false;
    };

    const handleWheel = (e: WheelEvent) => {
      if (isInsideScrollable(e.target)) return; // let scrollable containers handle it
      e.preventDefault();
      if (isScrolling.current) return;
      if (e.deltaY > 30)       goToSection(activeIndex + 1);
      else if (e.deltaY < -30) goToSection(activeIndex - 1);
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex, goToSection]);

  // Touch
  useEffect(() => {
    const onStart = (e: TouchEvent) => { touchStartY.current = e.touches[0].clientY; };
    const onEnd   = (e: TouchEvent) => {
      if (isScrolling.current) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (delta > 50)       goToSection(activeIndex + 1);
      else if (delta < -50) goToSection(activeIndex - 1);
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend",   onEnd,   { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend",   onEnd);
    };
  }, [activeIndex, goToSection]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isScrolling.current) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") { e.preventDefault(); goToSection(activeIndex + 1); }
      else if (e.key === "ArrowUp" || e.key === "PageUp"){ e.preventDefault(); goToSection(activeIndex - 1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, goToSection]);

  return (
    <main className="relative bg-black overflow-hidden" style={{ height: "100dvh" }}>

      {/* ── Fixed Right Navigation ── */}
      <nav
        className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-5 items-end"
        style={{ fontFamily: "var(--font-ligconsolata)" }}
      >
        {allSections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => goToSection(index)}
            className={`transition-all duration-300 text-right uppercase tracking-widest text-xs md:text-sm ${
              activeIndex === index
                ? "text-white opacity-100 font-bold translate-x-0"
                : "text-white opacity-40 font-normal translate-x-2 hover:opacity-80 hover:translate-x-0"
            }`}
          >
            {section.title}
          </button>
        ))}
      </nav>

      {/* ── Sections ── */}
      <div className="h-full overflow-hidden">
        {allSections.map((section, index) => {

          /* ── About Me ── */
          if (section.type === "about") {
            return (
              <div key={section.id} id={section.id} className="w-full h-screen">
                <AboutMe />
              </div>
            );
          }

          /* ── Contact ── */
          if (section.type === "contact") {
            return (
              <div key={section.id} id={section.id} className="w-full h-screen">
                <Contact />
              </div>
            );
          }

          /* ── Project Section ── */
          const project = projects[index]; // same order
          return (
            <div
              key={section.id}
              id={section.id}
              className="h-screen w-full relative flex flex-col justify-end p-8 md:p-16 lg:p-24 overflow-hidden"
            >
              {/* Background */}
              <img
                src={section.bgImage}
                alt={section.title}
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
              />

              {/* Gradient overlay — heavier at bottom for text legibility */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-black/20" />

              {/* Content */}
              <div className="relative z-20 flex flex-col gap-6 max-w-2xl">
                {/* Logo */}
                <div className="relative h-10 w-40 md:h-14 md:w-56">
                  <Image
                    src={section.logo}
                    alt={`${section.title} logo`}
                    fill
                    className="object-contain object-left drop-shadow-lg"
                  />
                </div>

                {/* Subtitle */}
                <p
                  className="text-white/70 text-base md:text-lg tracking-wide"
                  style={{ fontFamily: "var(--font-ligconsolata)" }}
                >
                  {section.subtitle}
                </p>

                {/* CTA */}
                <Link
                  href={`/projects/${section.id}`}
                  className="group inline-flex items-center gap-3 self-start border border-white/30 hover:border-white text-white text-sm uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm"
                  style={{ fontFamily: "var(--font-ligconsolata)" }}
                >
                  {t("View Case Study", "Ver Caso de Estudio")}
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
              </div>

              {/* Subtle project index */}
              <span
                className="absolute bottom-8 right-10 md:right-16 z-20 text-white/15 text-xs tabular-nums"
                style={{ fontFamily: "var(--font-ligconsolata)" }}
              >
                {String(index + 1).padStart(2, "0")} / {String(projectSections.length).padStart(2, "0")}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
