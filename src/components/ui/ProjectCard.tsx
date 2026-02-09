"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Project } from "@/types";
import TechBadge from "./TechBadge";
import { Github, ExternalLink, FolderOpen } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
    >
      {/* Image placeholder */}
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-secondary">
        <FolderOpen size={40} className="text-muted-foreground" />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-110"
              aria-label={t("Projects.view_code")}
            >
              <Github size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
              aria-label={t("Projects.live_demo")}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold text-card-foreground">
          {t(project.titleKey)}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {t(project.descriptionKey)}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
