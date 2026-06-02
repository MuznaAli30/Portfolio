"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import me from "@/public/Assets/Images/me1.webp";
import { SITE } from "@/lib/site";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const highlights = [
  "Full Stack Developer (Next.js, MERN, TypeScript)",
  "AI integrations with LLMs & OpenRouter APIs",
  "PostgreSQL (Neon DB), Prisma, MongoDB",
  "Production deployments on Netlify & Vercel",
  "Passionate about SaaS products & AI-powered apps",
];

const stats = [
  { label: "Projects shipped", value: `${SITE.projectCount}+` },
  { label: "Experience", value: "1+ yr" },
  { label: "Stack focus", value: "Full Stack" },
  { label: "Based in", value: "Karachi" },
];

export default function AboutSection() {
  return (
    <AnimatedSection id="about" className="mesh-bg">
      <div className="section-container">
        <SectionHeading
          eyebrow="About Me"
          title="Building the Future with Code"
          subtitle="I craft scalable web applications and AI-powered experiences that solve real problems."
        />

        <motion.div
          className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="glass-card p-4 text-center sm:p-5"
            >
              <p className="text-2xl font-bold gradient-text sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="group relative mx-auto w-full max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="gradient-border p-1">
              <div className="overflow-hidden rounded-3xl bg-[rgba(15,23,42,0.35)]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={me}
                    alt="Muzna Ali Siddiqui Sabzwari"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.04]"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-tr from-cyan-400/15 via-violet-400/10 to-pink-400/10" />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-cyan-400/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-pink-500/10 blur-xl opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="mb-4 text-2xl font-bold text-white">
              {SITE.name}
            </h3>
            <p className="mb-6 leading-relaxed text-slate-400">
              I am a Full Stack Developer specializing in Next.js, MERN, and
              TypeScript — building responsive, production-ready applications
              with clean architecture and modern UI patterns. I have hands-on
              experience integrating AI through LLMs, PostgreSQL on Neon DB,
              Prisma ORM, and shipping projects end-to-end.
            </p>
            <p className="mb-8 leading-relaxed text-slate-400">
              Previously a Web Developer Intern at InApp Solutions, where I
              built MERN applications, integrated REST APIs, and deployed to
              production. {SITE.availability}.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-300 sm:text-base"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
