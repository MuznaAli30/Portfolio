"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Badge from "@/components/ui/Badge";
import { Project } from "@/types";
import { scaleOnHover } from "@/lib/animations";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasActions = Boolean(project.liveUrl || project.githubUrl);

  return (
    <motion.article
      className="glass-card group flex h-full w-full flex-col overflow-hidden"
      variants={scaleOnHover}
      initial="rest"
      whileHover="hover"
    >
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex min-h-[28px] flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="muted">
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="mb-2 line-clamp-2 text-lg font-bold text-white sm:text-xl">
          {project.title}
        </h3>

        <p className="mb-4 line-clamp-4 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mb-5 flex min-h-[52px] flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-700/60 bg-slate-800/40 px-2 py-1 text-xs text-slate-300 transition-colors duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {hasActions && (
          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient relative z-10 min-h-[44px] flex-1 py-2.5 text-sm"
              >
                <span className="flex items-center justify-center gap-2">
                  <FaExternalLinkAlt className="text-xs" />
                  Live Demo
                </span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline min-h-[44px] flex-1 py-2.5 text-sm"
              >
                <span className="flex items-center justify-center gap-2">
                  <FaGithub />
                  GitHub
                </span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
