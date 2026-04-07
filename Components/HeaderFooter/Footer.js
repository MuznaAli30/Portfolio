"use client";
import React from "react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white font-sans p-8 flex flex-col items-center justify-center gap-8">
      
      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
        <div className="flex items-center gap-3">
          <MdEmail className="text-[#DAA760] text-2xl" />
          <span className="text-lg">muznaalisiddiquisabzwari@gmail.com</span>
        </div>

        <div className="flex items-center gap-3">
          <MdPhone className="text-[#DAA760] text-2xl" />
          <span className="text-lg">+92 330 2445132</span>
        </div>

        <div className="flex items-center gap-3">
          <MdLocationOn className="text-[#DAA760] text-2xl" />
          <span className="text-lg">Karachi, Pakistan</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-8 text-3xl justify-center">
        <a
          href="https://www.linkedin.com/in/muzna-ali-siddiqui-226220282"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#E3D2AF] transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/MuznaAli30?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#E3D2AF] transition-colors duration-300"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}