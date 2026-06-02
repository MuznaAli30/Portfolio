"use client";

import { useState, useEffect, useCallback } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MobileMenu from "@/components/layout/MobileMenu";
import { NAV_ITEMS, SITE, SOCIAL_LINKS } from "@/lib/site";
import { SectionId } from "@/types";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const scrollTo = useCallback((id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 transition-all duration-500 ${
          isOpen ? "z-[10020]" : "z-50"
        } ${
          scrolled || isOpen
            ? "border-b border-slate-800/60 bg-[#0a0e1a]/90 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="section-container flex h-16 items-center justify-between">
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="relative z-10 text-lg font-bold tracking-tight sm:text-xl"
          >
            <span className="gradient-text">{SITE.shortName}</span>
          </button>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <button
                  type="button"
                  onClick={() => scrollTo(item.href)}
                  className="nav-link"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                aria-label={link.name}
              >
                {link.icon === "github" ? <FaGithub /> : <FaLinkedin />}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="mobile-menu-trigger relative z-10 md:hidden"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </nav>
      </header>

      <MobileMenu
        isOpen={isOpen}
        onClose={closeMenu}
        onNavigate={scrollTo}
      />
    </>
  );
}
