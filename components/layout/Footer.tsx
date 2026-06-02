"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { SITE, SOCIAL_LINKS, NAV_ITEMS } from "@/lib/site";
import { SectionId } from "@/types";

export default function Footer() {
  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/60 bg-[color:var(--bg-primary)] py-14">
      <div className="section-container">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold gradient-text">{SITE.shortName}</p>
            <p className="mt-1 text-sm text-slate-400">{SITE.title}</p>
            <p className="mt-3 text-xs text-slate-500">{SITE.location}</p>
          </div>

          <div className="text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Quick links
            </p>
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {NAV_ITEMS.filter((item) => item.href !== "hero").map((item) => (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(item.href)}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-right">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Connect
            </p>
            <div className="flex flex-col items-center gap-2 md:items-end">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-cyan-400"
              >
                <MdEmail className="text-cyan-400" />
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-cyan-400"
              >
                <MdPhone className="text-violet-400" />
                {SITE.phoneDisplay}
              </a>
            </div>
            <div className="mt-4 flex justify-center gap-4 md:justify-end">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-slate-400 transition-all hover:text-cyan-400 hover:scale-110"
                  aria-label={link.name}
                >
                  {link.icon === "github" ? <FaGithub /> : <FaLinkedin />}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800/60 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © {SITE.year} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
