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
        <div className="flex flex-col w-full sm:w-2/5 text-center sm:text-left max-sm:w-[70%] max-md:items-start max-md:gap-4">
  <h2 className="text-[#DAA760] font-sans text-3xl sm:text-4xl mb-3">About</h2>
  <h1 className="font-serif text-4xl sm:text-5xl mb-6 max-md:w-full max-md:text-left">
    Muzna Ali Siddiqui
  </h1>

  {/* Info points */}
  <ul className="list-disc list-inside text-lg sm:text-xl space-y-2 text-gray-200 max-md:text-justify max-md:w-full">
    <li><span className="font-light text-gray-400">Nationality:</span> Pakistan</li>
    <li><span className="font-light text-gray-400">Languages:</span> English, Urdu</li>
    <li><span className="font-light text-gray-400">Address:</span> Karachi</li>
    <li><span className="font-light text-gray-400">Phone:</span> +92 330 2445132</li>
    <li><span className="font-light text-gray-400">Email:</span> muznasabzwari@gmail.com</li>
  </ul>
</div>

      </div>
    </section>
  );
}