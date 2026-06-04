"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  HiDownload,
  HiAcademicCap,
  HiBriefcase,
  HiBadgeCheck,
  HiTranslate,
} from "react-icons/hi";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import {
  RESUME_SUMMARY,
  RESUME_EXPERIENCE,
  RESUME_EDUCATION,
  RESUME_CERTIFICATIONS,
  RESUME_LANGUAGES,
  RESUME_DOWNLOAD,
} from "@/lib/resume";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function TimelineItem({
  title,
  subtitle,
  period,
  meta,
  children,
}: {
  title: string;
  subtitle: string;
  period: string;
  meta?: string;
  children: ReactNode;
}) {
  return (
    <div className="relative pl-8 sm:pl-10">
      <span
        className="absolute left-0 top-2 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 ring-4 ring-cyan-500/20"
        aria-hidden
      />
      <span
        className="absolute left-[5px] top-5 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 to-transparent"
        aria-hidden
      />
      <div className="glass-card mb-6 p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="text-sm font-medium text-cyan-400">{subtitle}</p>
            {meta && <p className="mt-0.5 text-xs text-slate-500">{meta}</p>}
          </div>
          <Badge variant="muted">{period}</Badge>
        </div>
        {children}
      </div>
    </div>
  );
}

export default function ResumeSection() {
  return (
    <AnimatedSection id="resume">
      <div className="section-container">
        <SectionHeading
          eyebrow="Resume"
          title="Experience & Education"
          subtitle="A structured overview of my background — download the full PDF anytime."
        />

        <motion.div
          className="mx-auto max-w-5xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          <motion.div variants={fadeInUp} className="glass-card mb-10 p-6 sm:p-8">
            <p className="text-center text-base leading-relaxed text-slate-300 sm:text-lg">
              {RESUME_SUMMARY}
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href={RESUME_DOWNLOAD.pdf}
                download={RESUME_DOWNLOAD.filename}
                className="btn-gradient"
              >
                <span className="flex items-center gap-2">
                  <HiDownload className="text-lg" />
                  Download PDF Resume
                </span>
              </a>
            </div>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="mb-6 flex items-center gap-2">
                <HiBriefcase className="text-xl text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">Experience</h3>
              </div>
              {RESUME_EXPERIENCE.map((job) => (
                <TimelineItem
                  key={job.id}
                  title={job.role}
                  subtitle={job.company}
                  period={job.period}
                  meta={`${job.location} · ${job.tools.join(" · ")}`}
                >
                  <ul className="space-y-2">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </TimelineItem>
              ))}

              <div className="mb-6 mt-4 flex items-center gap-2">
                <HiAcademicCap className="text-xl text-violet-400" />
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              {RESUME_EDUCATION.map((edu) => (
                <TimelineItem
                  key={edu.id}
                  title={edu.degree}
                  subtitle={edu.school}
                  period={edu.period}
                  meta={edu.location}
                >
                  <p className="text-sm text-slate-400">
                    Pursuing a Bachelor&apos;s in Software Engineering with a
                    focus on full-stack web development and AI integrations.
                  </p>
                </TimelineItem>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
            <div className="gradient-border p-4 text-center">
                <p className="text-sm text-slate-400">
                Prefer reading? Check my Medium articles
                </p>
                <a
                  href={"https://medium.com/me/stories?tab=posts-published"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  Open Medium Link in new tab →
                </a>
              </div>
              <div className="glass-card p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-2">
                  <HiBadgeCheck className="text-xl text-pink-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Certifications
                  </h3>
                </div>
                <ul className="space-y-4">
                  {RESUME_CERTIFICATIONS.map((cert) => (
                    <li key={cert.id} className="border-l-2 border-cyan-500/30 pl-4">
                      <p className="font-medium text-white">{cert.title}</p>
                      <p className="text-sm text-cyan-400/90">{cert.issuer}</p>
                      {cert.detail && (
                        <p className="mt-1 text-xs text-slate-500">{cert.detail}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-2">
                  <HiTranslate className="text-xl text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {RESUME_LANGUAGES.map((lang) => (
                    <span key={lang} className="skill-pill">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              

              <div className="gradient-border p-4 text-center">
                <p className="text-sm text-slate-400">
                  Prefer a printable version?
                </p>
                <a
                  href={RESUME_DOWNLOAD.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  Open resume in new tab →
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
