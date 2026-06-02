"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ReactNode } from "react";

interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function AnimatedSection({
  children,
  className = "",
  id,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={`py-20 sm:py-24 lg:py-28 ${className}`}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeInUp}
      {...props}
    >
      {children}
    </motion.section>
  );
}
