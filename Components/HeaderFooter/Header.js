"use client";
import React, { useState } from "react";
import { FiBarChart2 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header1() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close sidebar if open
    }
  };

  const items = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Resume", id: "Resume" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div className="bg-transparent text-white font-serif w-full flex justify-around items-center p-5 max-lg:hidden absolute">
        <div className="flex space-x-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="hover:text-[#c8934d] duration-500 cursor-pointer"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="flex space-x-5 text-md">
          <a
            href="https://www.linkedin.com/in/muzna-ali-siddiqui-226220282"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-[#c8934d] duration-500 cursor-pointer" />
          </a>

          <a
            href="https://github.com/MuznaAli30?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-[#c8934d] duration-500 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="bg-transparent flex max-md:visible 2xl:hidden xl:hidden lg:hidden">
        <div className="bg-transparent text-white w-full flex justify-between items-center p-3 absolute">
          <button onClick={toggleSidebar} className="cursor-pointer">
            <FiBarChart2 className="text-5xl text-white rotate-[270deg] duration-700" />
          </button>
        </div>

        {/* Sidebar Overlay */}
        <div
          className={`bg-[#312D2B] fixed h-screen transition-all z-10 opacity-55 ${
            isOpen
              ? "w-[45%] max-sm:w-full delay-500 duration-500"
              : "w-0 overflow-hidden delay-700 duration-500"
          }`}
        ></div>

        {/* Sidebar */}
        <div
          className={`bg-[#130F0C] fixed h-screen transition-all z-10 ${
            isOpen
              ? "w-[45%] max-sm:w-[75%] duration-500 delay-700"
              : "w-0 overflow-hidden duration-500"
          }`}
        >
          <div className="h-full flex flex-col">
            <div className="w-full flex justify-end p-3">
              <div className="p-2 text-xl cursor-pointer" onClick={toggleSidebar}>
                <RxCross2 />
              </div>
            </div>

            <div className="flex-1 overflow-auto p-3 scroll-smooth">
              <div className="flex flex-col space-y-5 ml-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="text-white hover:text-[#c8934d] cursor-pointer"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.name}
                  </div>
                ))}
              </div>

              {/* Social Media in Sidebar */}
              <div className="flex space-x-5 text-md mt-10 ml-4">
                <a
                  href="https://www.linkedin.com/in/muzna-ali-siddiqui-226220282"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="hover:text-[#c8934d] duration-500 cursor-pointer" />
                </a>

                <a
                  href="https://github.com/MuznaAli30?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="hover:text-[#c8934d] duration-500 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
