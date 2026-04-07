"use client";
import React from "react";
import Image from "next/image";

export default function Resume({ id }) {
  return (
    <section
      id={id}
      className="bg-[#0F0F0F] text-white min-h-screen p-10 flex flex-col items-center"
    >
      {/* Page Header */}
      <h1 className="text-5xl font-serif text-center mb-5 max-sm:text-4xl">
        My Resume
      </h1>
      <p className="text-gray-400 font-serif text-center text-lg mb-10 max-sm:text-base">
        Overview of my experience, education, certifications, and languages.
      </p>

      {/* Resume Image */}
      <div className="w-full flex justify-center">
        <Image
          src="/Assets/Images/Muzna_Ali_Resume.webp"
          alt="Muzna Ali Resume"
          width={1200}
          height={1600}
          className="rounded-xl shadow-xl object-contain max-w-full transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Download Button */}
      <a
        href="/Assets/Images/Muzna_Ali_Resume.webp"
        download
        className="mt-6 px-6 py-3 bg-[#DAA760] text-black font-semibold rounded-xl hover:bg-[#c9974f] transition-colors duration-300"
      >
        Download Resume
      </a>
    </section>
  );
}