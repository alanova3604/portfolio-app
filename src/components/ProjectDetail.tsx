"use client";

import { useMemo } from "react";
import { Project as ProjectType } from "@/data/projects";
import { m } from "framer-motion";
import { useScroll, useTransform } from "motion/react";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface ProjectDetailProps {
  project: ProjectType;
  containerRef?: React.RefObject<HTMLElement | null>;
}

function AnimatedMetric({ value, label, description, progress, delay = 0 }: { value: string, label: string, description: string, progress?: number, delay?: number }) {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  
  return (
    <m.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className="flex items-center gap-6"
    >
      {/* Visual Graph Side */}
      {progress !== undefined ? (
        <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full -rotate-90 transform text-white/10 drop-shadow-xl" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r={radius} stroke="currentColor" strokeWidth="6" fill="none" />
            <m.circle 
              cx="50" cy="50" r={radius} 
              stroke="#10b981" 
              strokeWidth="6" 
              fill="none" 
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset: circumference - (progress / 100) * circumference }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: delay + 0.2 }}
            />
          </svg>
          <span className="relative z-10 text-2xl font-bold tracking-tighter text-white">{value}</span>
        </div>
      ) : (
        <div className="flex-shrink-0 min-w-[80px]">
          <span className="text-4xl md:text-5xl font-medium tabular-nums text-white tracking-tight">
            {value}
          </span>
        </div>
      )}

      {/* Text Context Side */}
      <div className="flex flex-col gap-1.5 max-w-xs">
        <span className="text-sm font-bold uppercase tracking-widest text-emerald-500">{label}</span>
        <span className="text-sm text-white/50 font-medium leading-relaxed">{description}</span>
      </div>
    </m.div>
  );
}

export default function ProjectDetail({ project, containerRef }: ProjectDetailProps) {
  const { scrollYProgress } = useScroll({
    container: containerRef as any
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="bg-black text-white selection:bg-white/20">
      {/* ──── HERO SECTION ──── */}
      <section className="relative h-[80vh] md:h-screen w-full overflow-hidden flex flex-col justify-end pb-20 px-6 md:px-12 lg:px-24">
        <m.div 
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
          <Image 
            src={project.banner} 
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </m.div>

        <div className="relative z-20 max-w-[1800px] w-full mx-auto">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-white/60 border border-white/10">
                {project.category}
              </span>
              <span className="text-white/40 text-sm font-medium tracking-widest uppercase">
                {project.year}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.9]">
                {project.title}
              </h1>
              <p className="text-xl md:text-3xl text-white/60 font-medium tracking-tight">
                {project.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              {project.tech.map((t) => (
                <span key={t} className="text-sm font-medium text-white/40">
                  {t}
                </span>
              ))}
            </div>
          </m.div>
        </div>

        {/* Scroll Indicator */}
        <m.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </m.div>
      </section>

      {/* ──── CONTENT SECTION ──── */}
      <div className="relative z-30 max-w-[1800px] w-full mx-auto px-6 md:px-12 lg:px-24 space-y-32 md:space-y-48 py-32 md:py-48">
        
        {/* Overview & Objective */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">Overview</h2>
            </div>
            <p className="text-2xl md:text-4xl font-medium leading-[1.2] text-white">
              {project.overview}
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[40px] bg-white/[0.03] border border-white/5 backdrop-blur-xl space-y-6"
          >
            <h3 className="text-lg font-bold text-white/90">The Objective</h3>
            <p className="text-lg text-white/60 leading-relaxed font-medium">
              {project.objective}
            </p>
          </m.div>
        </section>

        {/* The Challenge */}
        <section className="space-y-16">
          <div className="space-y-6 max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_red]" />
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">The Challenge</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight">
              {project.challenge.title}
            </h3>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed">
              {project.challenge.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.challenge.points.map((point, i) => (
              <m.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 space-y-4"
              >
                <h4 className="text-xl font-bold text-white/90">{point.title}</h4>
                <p className="text-white/50 leading-relaxed">{point.description}</p>
              </m.div>
            ))}
          </div>
        </section>

        {/* Full Gallery Grid */}
        {project.images.length > 1 && (
          <section className="space-y-12">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">Visual Gallery</h2>
            </div>
            
            <div className="columns-1 md:columns-2 gap-8 space-y-8">
              {project.images.slice(1).map((img, i) => (
                <m.div
                  key={img}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative group rounded-[32px] overflow-hidden bg-white/5 border border-white/10"
                >
                  <Image 
                    src={img} 
                    alt={`${project.title} gallery image ${i + 1}`}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </m.div>
              ))}
            </div>
          </section>
        )}

        {/* Outcome & Metrics */}
        <section className="p-12 md:p-24 rounded-[60px] bg-white/[0.03] border border-white/5 overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 md:gap-24 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">The Outcome</h2>
              </div>
              <h3 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight">
                {project.outcome.title}
              </h3>
              <p className="text-xl text-white/60 leading-relaxed max-w-xl">
                {project.outcome.description}
              </p>
            </div>

            {project.outcome.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-10 md:gap-12 min-w-[300px]">
                {project.outcome.metrics.map((metric, i) => (
                  <AnimatedMetric 
                    key={metric.label}
                    value={metric.value}
                    label={metric.label}
                    description={metric.description}
                    progress={metric.progress}
                    delay={i * 0.15}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Work with me CTA */}
        <section className="text-center space-y-12 py-20 pb-0">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">Need similar outcomes?</h2>
          <m.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-500"
          >
            Start a Conversation
            <Icon icon="solar:round-arrow-right-up-bold" className="text-2xl" />
          </m.a>
        </section>
      </div>
    </div>
  );
}
