"use client";

import { use, useMemo, useRef, ReactNode } from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Modal from "@/components/Modal";
import ProjectDetail from "@/components/ProjectDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectModal({ params }: PageProps) {
  const { slug } = use(params);
  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);
  const containerRef = useRef<HTMLDivElement>(null);

  if (!project) {
    notFound();
  }

  return (
    <Modal containerRef={containerRef}>
      <ProjectDetail project={project} containerRef={containerRef} />
    </Modal>
  );
}
