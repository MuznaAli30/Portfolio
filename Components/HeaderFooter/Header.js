"use client";
import React, { useState } from "react";
import { FiBarChart2 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Resume", id: "Resume" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="max-lg:flex max-md:hidden flex justify-between items-center w-full p-5 absolute font-serif text-white">
        <div className="flex space-x-6 text-lg">
          {navItems.map((item) => (
            <span
              key={item.id}
              className="cursor-pointer hover:text-[#DAA760] transition duration-300"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </span>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a href="https://www.linkedin.com/in/muzna-ali-siddiqui-226220282" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-[#DAA760] transition duration-300" />
          </a>
          <a href="https://github.com/MuznaAli30?tab=repositories" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-[#DAA760] transition duration-300" />
          </a>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="hidden max-md:flex fixed w-full z-50">
        <div className="flex justify-between items-center p-4 bg-transparent">
          <button onClick={toggleSidebar}>
            <FiBarChart2 className={`text-4xl text-white rotate-90 transition-transform duration-500`} />
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-screen bg-[#130F0C] z-40 transition-all duration-500 ${
            isOpen ? "w-3/4" : "w-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <RxCross2 className="text-3xl cursor-pointer text-white" onClick={toggleSidebar} />
            </div>
            <div className="flex-1 flex flex-col justify-start p-6 space-y-6 font-serif text-lg">
              {navItems.map((item) => (
                <span
                  key={item.id}
                  className="text-white cursor-pointer hover:text-[#DAA760] transition duration-300"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </span>
              ))}

              {/* Social Icons in Sidebar */}
              <div className="flex space-x-6 mt-10 text-xl">
                <a href="https://www.linkedin.com/in/muzna-ali-siddiqui-226220282" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="hover:text-[#DAA760] transition duration-300" />
                </a>
                <a href="https://github.com/MuznaAli30?tab=repositories" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="hover:text-[#DAA760] transition duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}