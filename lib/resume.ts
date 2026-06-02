export interface ResumeExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  tools: string[];
  highlights: string[];
}

export interface ResumeEducation {
  id: string;
  degree: string;
  school: string;
  location: string;
  period: string;
}

export interface ResumeCertification {
  id: string;
  title: string;
  issuer: string;
  detail?: string;
}

export const RESUME_SUMMARY =
  "Passionate Full Stack Developer with experience building responsive, scalable web applications using Next.js, React, TypeScript, Node.js, and PostgreSQL. Skilled in REST APIs, CRUD systems, AI integrations, and modern SaaS UI. Seeking internship and entry-level roles to contribute, learn, and grow.";

export const RESUME_EXPERIENCE: ResumeExperience[] = [
  {
    id: "inapp",
    role: "Web Developer Intern",
    company: "InApp Solutions",
    location: "Karachi, Pakistan",
    period: "May 2024 – May 2025",
    tools: ["React.js", "Next.js", "Tailwind CSS", "MERN", "GitHub", "Vercel"],
    highlights: [
      "Developed and maintained responsive web pages using React.js and Tailwind CSS.",
      "Integrated REST APIs and implemented CRUD functionality in MERN stack projects.",
      "Collaborated with the team and deployed applications using GitHub and Vercel.",
    ],
  },
];

export const RESUME_EDUCATION: ResumeEducation[] = [
  {
    id: "be-se",
    degree: "BE Software Engineering",
    school: "Muhammad Ali Jinnah University",
    location: "Karachi, Pakistan",
    period: "Sep 2022 – Present",
  },
];

export const RESUME_CERTIFICATIONS: ResumeCertification[] = [
  {
    id: "gen-ai",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    detail: "AI fundamentals, neural networks, and ethical considerations.",
  },
  {
    id: "ai-ml",
    title: "AI & ML Exam",
    issuer: "Academic",
    detail: "87% score — artificial intelligence and machine learning concepts.",
  },
];

export const RESUME_LANGUAGES = ["English", "Urdu"];

export const RESUME_DOWNLOAD = {
  pdf: "/Assets/Images/Muzna_Ali_Resume.pdf",
  filename: "Muzna_Ali_Resume.pdf",
};
