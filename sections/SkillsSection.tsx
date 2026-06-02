"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiVercel,
  SiNetlify,
  SiExpress,
} from "react-icons/si";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SKILL_CATEGORIES } from "@/lib/skills";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const ICON_MAP: Record<string, React.ReactNode> = {
  "Next.js": <SiNextdotjs className="text-3xl text-white" />,
  React: <FaReact className="text-3xl text-cyan-400" />,
  "React Native": <FaMobileAlt className="text-3xl text-sky-400" />,
  JavaScript: <SiJavascript className="text-3xl text-amber-400" />,
  TypeScript: <SiTypescript className="text-3xl text-blue-400" />,
  HTML: <SiHtml5 className="text-3xl text-orange-400" />,
  CSS: <SiCss3 className="text-3xl text-indigo-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-3xl text-cyan-300" />,
  Redux: <SiRedux className="text-3xl text-violet-400" />,
  "Node.js": <FaNodeJs className="text-3xl text-green-500" />,
  "Express.js": <SiExpress className="text-3xl text-slate-200" />,
  PostgreSQL: <SiPostgresql className="text-3xl text-blue-300" />,
  MongoDB: <SiMongodb className="text-3xl text-green-600" />,
  Prisma: <SiPrisma className="text-3xl text-teal-300" />,
  Vercel: <SiVercel className="text-3xl text-white" />,
  Netlify: <SiNetlify className="text-3xl text-teal-400" />,
  GitHub: <FaGitAlt className="text-3xl text-orange-400" />,
};

export default function SkillsSection() {
  return (
    <AnimatedSection id="skills">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Tech Stack & Tools"
          subtitle="Technologies I use to build full-stack applications, AI integrations, and deploy production-ready software."
        />

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.id}
              variants={fadeInUp}
              className="glass-card p-6"
            >
              <h3 className="mb-4 text-lg font-semibold gradient-text">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill.name} className="skill-pill">
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {Object.entries(ICON_MAP).map(([name, icon]) => (
            <motion.div
              key={name}
              variants={fadeInUp}
              className="glass-card flex flex-col items-center gap-2 p-4 min-w-[100px]"
              whileHover={{ scale: 1.05 }}
            >
              {icon}
              <span className="text-xs text-slate-400">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
