"use client";

import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import GradientButton from "@/components/ui/GradientButton";
import { SITE } from "@/lib/site";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden mesh-bg pt-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-pink-500/5 blur-3xl" />
      </div>

      <motion.div
        className="section-container relative z-10 py-20 text-center"
        variants={staggerContainer}
        initial={false}
        animate="visible"
      >
        <motion.div variants={fadeInUp} className="mb-5 flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300">
            {SITE.title}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-300">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            {SITE.availability}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text block sm:inline">
            {SITE.shortName}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl"
        >
          {SITE.tagline}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-4 max-w-xl text-sm text-slate-500"
        >
          Next.js · TypeScript · MERN · PostgreSQL · AI integrations
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <GradientButton onClick={() => scrollTo("projects")}>
            View My Work
          </GradientButton>
          <GradientButton
            variant="outline"
            onClick={() => scrollTo("contact")}
          >
            Contact Me
          </GradientButton>
        </motion.div>

        <motion.a
          variants={fadeInUp}
          href="#about"
          className="mt-16 inline-flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-cyan-400"
          aria-label="Scroll to about"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <HiArrowDown className="animate-bounce text-xl" />
        </motion.a>
      </motion.div>
    </section>
  );
}
