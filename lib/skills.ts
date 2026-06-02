import { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", level: "advanced" },
      { name: "Next.js", level: "advanced" },
      { name: "React Native", level: "intermediate" },
      { name: "JavaScript", level: "advanced" },
      { name: "TypeScript", level: "advanced" },
      { name: "HTML", level: "advanced" },
      { name: "CSS", level: "advanced" },
      { name: "Tailwind CSS", level: "advanced" },
      { name: "Redux", level: "intermediate" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", level: "advanced" },
      { name: "Express.js", level: "advanced" },
      { name: "REST APIs", level: "advanced" },
      { name: "Prisma ORM", level: "intermediate" },
    ],
  },
  {
    id: "database",
    label: "Database",
    skills: [
      { name: "PostgreSQL", level: "advanced" },
      { name: "MongoDB", level: "advanced" },
      { name: "Neon DB", level: "intermediate" },
      { name: "Firebase", level: "intermediate" },
      { name: "MySQL", level: "intermediate" },
    ],
  },
  {
    id: "ai",
    label: "AI & Integrations",
    skills: [
      { name: "LLM APIs", level: "advanced" },
      { name: "OpenRouter", level: "intermediate" },
      { name: "Cursor AI", level: "advanced" },
      { name: "TensorFlow", level: "intermediate" },
    ],
  },
  {
    id: "deployment",
    label: "Deployment & Tools",
    skills: [
      { name: "Vercel", level: "advanced" },
      { name: "Netlify", level: "advanced" },
      { name: "GitHub", level: "advanced" },
      { name: "Postman", level: "intermediate" },
      { name: "Linux", level: "intermediate" },
    ],
  },
  {
    id: "other",
    label: "Also Experienced",
    skills: [
      { name: "Python", level: "intermediate" },
      { name: "Java", level: "intermediate" },
      { name: "Django", level: "beginner" },
      { name: "Figma", level: "intermediate" },
      { name: "Webflow", level: "intermediate" },
    ],
  },
];
