"use client";

import { motion } from "framer-motion";
import { MdEmail, MdPhone } from "react-icons/md";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/site";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ContactSection() {
  return (
    <AnimatedSection id="contact" className="mesh-bg">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Get In Touch"
          subtitle="Feel free to contact me via email or phone."
        />

        <motion.div
          className="mx-auto max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <motion.a
              variants={fadeInUp}
              href={`mailto:${SITE.email}`}
              className="glass-card group flex flex-col items-center p-8 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500/20">
                <MdEmail className="text-3xl" />
              </div>
              <p className="mb-1 text-sm font-medium uppercase tracking-wider text-slate-500">
                Email
              </p>
              <p className="break-all text-lg font-semibold text-white">
                {SITE.email}
              </p>
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href={`tel:${SITE.phone}`}
              className="glass-card group flex flex-col items-center p-8 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400 transition-colors group-hover:bg-violet-500/20">
                <MdPhone className="text-3xl" />
              </div>
              <p className="mb-1 text-sm font-medium uppercase tracking-wider text-slate-500">
                Phone
              </p>
              <p className="text-lg font-semibold text-white">{SITE.phone}</p>
            </motion.a>
          </div>

          <motion.p
            variants={fadeInUp}
            className="mt-10 text-center text-sm text-slate-500"
          >
            {SITE.location} · {SITE.availability}
          </motion.p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
