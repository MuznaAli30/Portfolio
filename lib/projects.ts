import { Project } from "@/types";
import smartStudy from "@/public/Assets/Images/s_s.webp";
import focusFlow from "@/public/Assets/Images/f_f.webp";
import aiQuote from "@/public/Assets/Images/q_c.webp";
import park from "@/public/Assets/Images/park.webp";
import todo from "@/public/Assets/Images/todo.webp";
import tour from "@/public/Assets/Images/tour.webp";
import cafe from "@/public/Assets/Images/cafe.webp";
import task from "@/public/Assets/Images/task.webp";
import lifetune from "@/public/Assets/Images/lifetune.webp";
import mysight from "@/public/Assets/Images/mysight.webp";
import bus from "@/public/Assets/Images/bus.webp";
import darbar from "@/public/Assets/Images/darbar.webp";
import imgAI from "@/public/Assets/Images/imgAI.webp";

/** Latest full-stack & AI builds — shown first in the projects grid */
export const FEATURED_PROJECTS: Project[] = [
  {
    id: "smart-study-ai",
    title: "Smart Study AI",
    description:
      "SaaS-style AI learning platform: topic explanations, quiz generation, structured study plans, saved notes, task management, and learning progress — combining AI, full-stack development, and a modern database-backed UI.",
    image: smartStudy,
    tags: ["AI", "SaaS", "Full Stack"],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "OpenRouter",
      "Netlify",
    ],
    liveUrl: "https://mysight3300.netlify.app/",
    featured: true,
  },
  {
    id: "focus-flow",
    title: "Focus Flow",
    description:
      "Productivity app with full CRUD task management, persistent PostgreSQL storage, production-style API routes, and real-time frontend updates in a responsive, clean interface.",
    image: focusFlow,
    tags: ["Full Stack", "Productivity"],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Neon",
      "Netlify",
    ],
    liveUrl: "https://sweet-sprite-f7e97c.netlify.app/",
    featured: true,
  },
  {
    id: "ai-quote-generator",
    title: "AI Quote Generator",
    description:
      "Polished Next.js web app with a modern UI for exploring and sharing quotes — built with Tailwind CSS and Cursor AI in the development workflow.",
    image: aiQuote,
    tags: ["Frontend", "AI"],
    techStack: ["Next.js", "Tailwind CSS", "Cursor AI", "Netlify"],
    liveUrl: "https://dreamy-babka-4c60e1.netlify.app/",
    featured: true,
  },
];

/** Earlier projects — preserved as in the original portfolio */
export const LEGACY_PROJECTS: Project[] = [
  {
    id: "parking-management",
    title: "Parking Management System",
    description:
      "Built a full-stack CRUD system for parking slot booking and user feedback using MERN and TypeScript.",
    image: park,
    tags: ["MERN", "TypeScript"],
    techStack: ["React", "Node.js", "MongoDB", "TypeScript"],
    githubUrl: "https://github.com/MuznaAli30/Parking-Frontend",
  },
  {
    id: "todo-firebase",
    title: "Todo Website",
    description:
      "Task management app with Firebase authentication and LocalStorage persistence, built with React and Redux.",
    image: todo,
    tags: ["React", "Firebase"],
    techStack: ["React", "Redux", "Firebase"],
    githubUrl: "https://github.com/MuznaAli30/Todo-Firebase",
  },
  {
    id: "image-take-tour",
    title: "Image Take Tour",
    description:
      "First frontend project exploring HTML and Tailwind — an image tour experience to learn core web layout and styling.",
    image: tour,
    tags: ["Frontend"],
    techStack: ["HTML", "Tailwind CSS"],
    liveUrl: "https://muznaali30.github.io/Image-Take-Tour/",
  },
  {
    id: "new-cafe",
    title: "New Cafe",
    description:
      "First frontend project focused on clean design and layout fundamentals using HTML and CSS.",
    image: cafe,
    tags: ["Frontend"],
    techStack: ["HTML", "CSS"],
    liveUrl: "https://muznaali30.github.io/newCafe/",
  },
  {
    id: "manage-tasks",
    title: "Manage Tasks",
    description:
      "MERN-based responsive task app with a Replit backend — CRUD operations and a polished Tailwind UI.",
    image: task,
    tags: ["MERN", "Full Stack"],
    techStack: ["MERN", "Tailwind CSS", "Replit"],
    liveUrl: "https://rainbow-rabanadas-c2bfce.netlify.app/",
  },
  {
    id: "lifetune",
    title: "Lifetune",
    description:
      "Cross-platform mobile application with responsive UI — learned React Native and backend communication patterns.",
    image: lifetune,
    tags: ["Mobile", "React Native"],
    techStack: ["React Native", "Tailwind CSS"],
    liveUrl:
      "https://www.linkedin.com/posts/activity-7308555400138711041-FqjL",
  },
  {
    id: "my-sight",
    title: "My Sight",
    description:
      "Frontend developer on an academic project focused on AI and SPM — responsive UI for an AI-powered sight experience.",
    image: mysight,
    tags: ["AI", "Academic"],
    techStack: ["React", "AI", "SPM"],
    liveUrl: "https://mysight3300.netlify.app/",
  },
  {
    id: "business-frontend",
    title: "Business Frontend",
    description:
      "Designed and developed a responsive business landing experience using Webflow.",
    image: bus,
    tags: ["Webflow", "UI"],
    techStack: ["Webflow"],
    liveUrl: "https://my-bizneszone-68c682.webflow.io/",
  },
  {
    id: "make-reservations",
    title: "Make Reservations Website",
    description:
      "Modern restaurant booking website built with Next.js and Tailwind CSS for a seamless reservation experience.",
    image: darbar,
    tags: ["Next.js", "Frontend"],
    techStack: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://sovy-restaurant-website.netlify.app/",
  },
  {
    id: "ai-image-classifier",
    title: "AI Image Classifier",
    description:
      "AI web app that identifies objects in uploaded images using MobileNetV2 and a Streamlit interface.",
    image: imgAI,
    tags: ["AI", "ML"],
    techStack: ["Streamlit", "TensorFlow", "Python"],
    githubUrl: "https://github.com/MuznaAli30/image_calissifier",
  },
];

export const PROJECTS: Project[] = [
  ...FEATURED_PROJECTS,
  ...LEGACY_PROJECTS,
];
