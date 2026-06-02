"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { FEATURED_PROJECTS, LEGACY_PROJECTS } from "@/lib/projects";
import { staggerContainer, fadeInUp } from "@/lib/animations";

function ProjectGrid({ projects }: { projects: typeof FEATURED_PROJECTS }) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={fadeInUp} className="flex">
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="mesh-bg">
      <div className="section-container">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="Production-ready AI SaaS, full-stack apps, and earlier MERN, mobile, and frontend work — each with its own live demo or repository."
        />

        <div className="mb-12">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-cyan-400/90">
            Latest Builds
          </h3>
          <ProjectGrid projects={FEATURED_PROJECTS} />
        </div>

        <div>
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
            More Projects
          </h3>
          <ProjectGrid projects={LEGACY_PROJECTS} />
        </div>
      </div>
    </AnimatedSection>
  );
}
