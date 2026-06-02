"use client";

import { useEffect, useCallback, ReactNode } from "react";
import { createPortal } from "react-dom";
import {
  HiX,
  HiHome,
  HiUser,
  HiCode,
  HiCollection,
  HiDocumentText,
  HiMail,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NAV_ITEMS, SITE, SOCIAL_LINKS } from "@/lib/site";
import { SectionId } from "@/types";

const NAV_ICONS: Record<SectionId, ReactNode> = {
  hero: <HiHome className="text-lg" aria-hidden />,
  about: <HiUser className="text-lg" aria-hidden />,
  skills: <HiCode className="text-lg" aria-hidden />,
  projects: <HiCollection className="text-lg" aria-hidden />,
  resume: <HiDocumentText className="text-lg" aria-hidden />,
  contact: <HiMail className="text-lg" aria-hidden />,
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: SectionId) => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  onNavigate,
}: MobileMenuProps) {
  const handleNavigate = useCallback(
    (id: SectionId) => {
      onClose();
      window.setTimeout(() => onNavigate(id), 280);
    },
    [onClose, onNavigate]
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (typeof document === "undefined" || !isOpen) {
    return null;
  }

  return createPortal(
    <div className="mobile-menu-root" role="presentation">
      <button
        type="button"
        className="mobile-menu-backdrop"
        onClick={onClose}
        aria-label="Close menu"
        tabIndex={-1}
      />

      <aside
        id="mobile-navigation"
        className="mobile-drawer mobile-drawer--open"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="mobile-drawer__glow" aria-hidden />

        <header className="mobile-drawer__header">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Menu
            </p>
            <p className="text-sm font-bold text-white">{SITE.shortName}</p>
          </div>
          <button
            type="button"
            className="mobile-menu-trigger"
            onClick={onClose}
            aria-label="Close menu"
          >
            <HiX />
          </button>
        </header>

        <nav className="mobile-drawer__nav" aria-label="Mobile navigation">
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <button
                  type="button"
                  className="mobile-nav-item"
                  onClick={() => handleNavigate(item.href)}
                >
                  <span className="mobile-nav-item__icon">
                    {NAV_ICONS[item.href]}
                  </span>
                  <span className="mobile-nav-item__label">{item.label}</span>
                  <span className="mobile-nav-item__arrow" aria-hidden>
                    →
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <footer className="mobile-drawer__footer">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Connect
          </p>
          <div className="mb-4 flex gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-btn"
                onClick={onClose}
              >
                {link.icon === "github" ? <FaGithub /> : <FaLinkedin />}
                <span className="text-xs font-medium">{link.name}</span>
              </a>
            ))}
          </div>
          <button
            type="button"
            className="btn-gradient w-full cursor-pointer py-3 text-sm"
            onClick={() => handleNavigate("contact")}
          >
            <span>Get in Touch</span>
          </button>
          <p className="mt-3 text-center text-[10px] text-slate-600">
            {SITE.availability}
          </p>
        </footer>
      </aside>
    </div>,
    document.body
  );
}
