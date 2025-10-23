"use client";
import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaLinux,
  FaWindows,
  FaTools,
  FaBrain,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiVercel,
  SiPostman,
  SiJupyter,
  SiMysql,
  SiCloudinary,
  SiDjango,
  SiAngular,
  SiWebflow,
  SiFigma,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills({ id }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // All icons with categories
  const skills = [
    // Frontend
    {
      icon: <FaHtml5 className="text-orange-500 text-6xl" />,
      text: "HTML5",
      category: "FRONTEND",
    },
    {
      icon: <FaCss3Alt className="text-blue-500 text-6xl" />,
      text: "CSS3",
      category: "FRONTEND",
    },
    {
      icon: <SiTailwindcss className="text-cyan-400 text-6xl" />,
      text: "Tailwind CSS",
      category: "FRONTEND",
    },
    {
      icon: <SiRedux className="text-purple-500 text-6xl" />,
      text: "Redux",
      category: "FRONTEND",
    },
    {
      icon: <FaReact className="text-blue-400 text-6xl" />,
      text: "React.js",
      category: "FRONTEND",
    },
    {
      icon: <SiNextdotjs className="text-white text-6xl" />,
      text: "Next.js",
      category: "FRONTEND",
    },
    {
      icon: <SiDjango className="text-green-700 text-6xl" />,
      text: "Django",
      category: "FRONTEND",
    },
    {
      icon: <SiAngular className="text-red-600 text-6xl" />,
      text: "Angular",
      category: "FRONTEND",
    },
    {
      icon: <SiWebflow className="text-indigo-500 text-6xl" />,
      text: "Webflow",
      category: "FRONTEND",
    },
    {
      icon: <SiFigma className="text-pink-500 text-6xl" />,
      text: "Figma",
      category: "FRONTEND",
    },

    // Backend
    {
      icon: <FaNodeJs className="text-green-500 text-6xl" />,
      text: "Node.js",
      category: "BACKEND",
    },
    {
      icon: <SiMongodb className="text-green-600 text-6xl" />,
      text: "MongoDB",
      category: "BACKEND",
    },
    {
      icon: <SiFirebase className="text-yellow-400 text-6xl" />,
      text: "Firebase",
      category: "BACKEND",
    },
    {
      icon: <FaReact className="text-blue-400 text-6xl" />,
      text: "Express.js",
      category: "BACKEND",
    },

    // Languages
    {
      icon: <FaPython className="text-yellow-300 text-6xl" />,
      text: "Python",
      category: "LANGUAGES",
    },
    {
      icon: <SiTypescript className="text-blue-500 text-6xl" />,
      text: "TypeScript",
      category: "LANGUAGES",
    },
    {
      icon: <FaJava className="text-red-500 text-6xl" />,
      text: "Java",
      category: "LANGUAGES",
    },
    {
      icon: <FaReact className="text-yellow-500 text-6xl" />,
      text: "JavaScript",
      category: "LANGUAGES",
    },
    {
      icon: <FaPython className="text-gray-400 text-6xl" />,
      text: "C++",
      category: "LANGUAGES",
    },

    // Tools & Tech
    {
      icon: <FaGitAlt className="text-orange-500 text-6xl" />,
      text: "GitHub",
      category: "TOOLS",
    },
    {
      icon: <SiCloudinary className="text-blue-400 text-6xl" />,
      text: "Cloudinary",
      category: "TOOLS",
    },
    {
      icon: <SiVercel className="text-white text-6xl" />,
      text: "Vercel",
      category: "TOOLS",
    },
    {
      icon: <SiPostman className="text-orange-400 text-6xl" />,
      text: "Postman",
      category: "TOOLS",
    },
    {
      icon: <SiJupyter className="text-yellow-500 text-6xl" />,
      text: "Jupyter",
      category: "TOOLS",
    },

    // OS
    {
      icon: <FaLinux className="text-yellow-400 text-6xl" />,
      text: "Linux (Ubuntu)",
      category: "OS",
    },
    {
      icon: <FaWindows className="text-blue-500 text-6xl" />,
      text: "Windows",
      category: "OS",
    },

    // Database
    {
      icon: <SiMongodb className="text-green-600 text-6xl" />,
      text: "MongoDB",
      category: "DB",
    },
    {
      icon: <SiMysql className="text-blue-500 text-6xl" />,
      text: "MySQL",
      category: "DB",
    },
    {
      icon: <SiFirebase className="text-yellow-400 text-6xl" />,
      text: "Firebase",
      category: "DB",
    },

    // Other Skills
    {
      icon: <FaBrain className="text-pink-400 text-6xl" />,
      text: "Problem Solving",
      category: "OTHER",
    },
    {
      icon: <FaTools className="text-gray-400 text-6xl" />,
      text: "Debugging",
      category: "OTHER",
    },
    {
      icon: <FaReact className="text-cyan-400 text-6xl" />,
      text: "Team Collaboration",
      category: "OTHER",
    },
    {
      icon: <FaBrain className="text-green-400 text-6xl" />,
      text: "Quick Learner",
      category: "OTHER",
    },
  ];

  const filteredSkills =
    selectedCategory === "ALL"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <>
      {" "}
      <section id={id}>
        <div className="flex items-center justify-center flex-col my-32">
          <div className="text-white mb-10 font-serif text-6xl max-sm:text-5xl">My Skills</div>
          {/* Category Buttons */}
          <div className="text-white flex flex-row items-center max-sm:text-md justify-around mb-16 z-30 gap-10 max-lg:gap-5 flex-wrap max-sm:w-[70%]">
            {[
              "ALL",
              "FRONTEND",
              "BACKEND",
              "LANGUAGES",
              "TOOLS",
              "OS",
              "DB",
              "OTHER",
            ].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer duration-500 ${
                  selectedCategory === category
                    ? "text-[#DAA760] underline underline-offset-4"
                    : "hover:text-[#DAA760]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="text-white grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 w-[80%] text-center">
            {filteredSkills.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-[#111] p-6 rounded-2xl hover:bg-[#1a1a1a] transition duration-500"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                {item.icon}
                <p className="text-[#DAA760] mt-4 text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
