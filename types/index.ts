import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type SectionId =
  | "hero"
  | "about"
  | "skills"
  | "projects"
  | "resume"
  | "contact";

export interface NavItem {
  label: string;
  href: SectionId;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: "github" | "linkedin";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  tags: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  icon?: ReactNode;
  level?: "beginner" | "intermediate" | "advanced";
}
