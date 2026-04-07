"use client";
import React from "react";
import { IoRemoveOutline } from "react-icons/io5";

export default function Hero({ id }) {
  return (
    <section id={id} className="bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center px-5">
        {/* Main Text */}
        <h1 className="text-white font-serif italic text-center text-6xl sm:text-7xl md:text-8xl leading-tight">
          Hello, I Am <br /> Muzna Ali Siddiqui Sabzwari
        </h1>

        {/* Decorative Icon */}
        <div className="mt-10 flex items-center justify-center">
          <IoRemoveOutline className="text-[#DAA760] text-8xl sm:text-9xl" />
        </div>
      </div>
    </section>
  );
}