import { NavItem, SocialLink } from "@/types";

export const SITE = {
  name: "Muzna Ali Siddiqui Sabzwari",
  shortName: "Muzna Ali",
  title: "Full Stack Developer",
  tagline:
    "Building modern SaaS products, AI-powered apps, and scalable full-stack solutions.",
  email: "muznasabzwari@gmail.com",
  phone: "03302445132",
  phoneDisplay: "+92 330 2445132",
  location: "Karachi, Pakistan",
  availability: "Open to internships & full-time roles",
  year: new Date().getFullYear(),
  projectCount: 13,
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Resume", href: "resume" },
  { label: "Contact", href: "contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/MuznaAli30?tab=repositories",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muzna-ali-siddiqui-226220282",
    icon: "linkedin",
  },
];
