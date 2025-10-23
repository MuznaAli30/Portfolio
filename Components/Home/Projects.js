"use client";
import React from "react";
import Image from "next/image";
import park from "../../public/Assets/Images/park.webp"; 
import todo from "../../public/Assets/Images/todo.webp"; 
import tour from "../../public/Assets/Images/tour.webp"; 
import cafe from "../../public/Assets/Images/cafe.webp"; 
import task from "../../public/Assets/Images/task.webp"; 
import lifetune from "../../public/Assets/Images/lifetune.webp"; 
import mysight from "../../public/Assets/Images/mysight.webp"; 
import bus from "../../public/Assets/Images/bus.webp"; 
import darbar from "../../public/Assets/Images/darbar.webp"; 

export default function Project({ id }) {
  const projects = [
    {
      image: park,
      name: "Parking Management System (MERN + TypeScript)",
      desc: "Built CRUD system for parking slots and feedback.",
      live: "https://github.com/MuznaAli30/Parking-Frontend",
    },
    {
      image: todo,
      name: "Todo Website (React + Redux + Firebase)",
      desc: "Task management app with Firebase and LocalStorage.",
      live: "https://github.com/MuznaAli30/Todo-Firebase",
    },
    {
      image: tour,
      name: "Image Take Tour (HTML + Tailwind)",
      desc: "My first project to learn frontend development.",
      live: "https://muznaali30.github.io/Image-Take-Tour/",
    },
    {
      image: cafe,
      name: "New Cafe (HTML + CSS)",
      desc: "My first frontend project focusing on clean design.",
      live: "https://muznaali30.github.io/newCafe/",
    },
    {
      image: task,
      name: "Manage Tasks (MERN + Tailwind)",
      desc: "MERN-based responsive app with Replit backend.",
      live: "https://rainbow-rabanadas-c2bfce.netlify.app/",
    },
    {
      image: lifetune,
      name: "Lifetune (React Native + Tailwind CSS)",
      desc: "Learned React Native and backend communication.",
      live: "https://www.linkedin.com/posts/activity-7308555400138711041-FqjL",
    },
    {
      image: mysight,
      name: "My Sight (AI + SPM)",
      desc: "Frontend developer for an academic project focused on AI and SPM.",
      live: "https://mysight3300.netlify.app/",
    },
    {
      image: bus,
      name: "Business Frontend (Webflow)",
      desc: "Designed and developed a responsive frontend using Webflow.",
      live: "https://my-bizneszone-68c682.webflow.io/",
    },
    {
      image: darbar,
      name: "Make Reservations Website (Next.js + Tailwind CSS)",
      desc: "Created a modern UI website to enhance frontend skills.",
      live: "https://sovy-restaurant-website.netlify.app/",
    },
  ];

  return (
    <section id={id} className="px-5 py-16 bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Title */}
        <h2 className="text-white text-5xl font-serif mb-4 text-center max-sm:text-5xl">My Projects</h2>

        {/* Description */}
        <p className="text-gray-300 font-serif text-center w-full md:w-2/3 mb-12">
          Here are some of my frontend, full-stack, and mobile development projects built using React, Next.js, MERN Stack, and more.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-1">
          {projects.map((project, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl hover:scale-105 duration-500 text-center"
            >
              <Image
                src={project.image}
                alt={project.name}
                className="rounded-xl mb-4 w-full h-64 object-cover hover:opacity-70 duration-500"
              />
              <h3 className="text-white font-serif text-xl font-medium mb-2">{project.name}</h3>
              <p className="text-gray-300 font-serif mb-4">{project.desc}</p>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="text-[#DAA760] underline"
                >
                  Preview
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
