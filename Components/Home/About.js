"use client";
import React from "react";
import Image from "next/image";
import me from "../../public/Assets/Images/me1.webp";

export default function About({ id }) {
  return (
    <section id={id} className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto flex flex-row justify-evenly items-center gap-10 flex-wrap px-5 max-md:flex-col">

        {/* Left side image */}
        <div className="flex justify-center items-center w-1/2 max-w-[400px] sm:w-2/5">
          <Image
            src={me}
            alt="Muzna Ali"
            className="rounded-3xl object-cover shadow-xl"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        {/* Right side content */}
        <div className="flex flex-col w-full sm:w-2/5 text-center sm:text-left items-center sm:items-start max-sm:w-[70%] gap-4">

<h2 className="text-[#DAA760] font-sans text-3xl sm:text-4xl">
  About Me
</h2>

<h1 className="font-serif text-4xl sm:text-5xl">
  Muzna Ali Siddiqui
</h1>

<p className="text-lg sm:text-xl text-gray-200 leading-relaxed text-center sm:text-left">
  I am a MERN Stack Developer focused on building responsive and user-friendly web applications using React.js, Next.js, Tailwind CSS, Node.js, and MongoDB. 

  I enjoy creating clean, scalable solutions and continuously improving my skills by working on real-world projects. Currently, I am seeking internship opportunities to grow and contribute as a developer.
</p>

</div>

      </div>
    </section>
  );
}