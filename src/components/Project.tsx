"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { Project as ProjectType } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative aspect-square rounded-[32px] overflow-hidden bg-white/[0.03] border border-white/5 backdrop-blur-sm cursor-pointer hover:border-white/20 transition-all duration-500"
    >
      <Link href={`/projects/${project.slug}`} className="block w-full h-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={project.banner}
            alt={project.title}
            fill
            className="object-cover opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 w-full h-full p-8 md:p-10 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <motion.div
              layoutId={`icon-${project.slug}`}
              className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors"
            >
               <Image 
                src={project.logo} 
                alt={project.title} 
                width={24} 
                height={24} 
                className="brightness-0 invert opacity-40 group-hover:opacity-100 transition-opacity"
               />
            </motion.div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors">
              {project.year}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors">
                {project.category}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-white/80 group-hover:text-white transition-colors leading-[0.9]">
              {project.title}
            </h3>
            <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors line-clamp-2 font-medium leading-relaxed">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Hover Arrow */}
        <div className="absolute top-10 right-10 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
          <Icon icon="solar:round-arrow-right-up-bold" className="text-3xl text-white" />
        </div>
      </Link>
    </motion.div>
  );
}
