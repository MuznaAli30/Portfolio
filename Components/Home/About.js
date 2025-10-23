"use client";
import React from "react";
import Image from "next/image";
import me from "../../public/Assets/Images/me.webp";

export default function About({ id }) {
  return (
    <>
    <section id={id}>
      <div className="flex flex-row justify-evenly text-white bg-black max-lg:flex-col max-sm:w-[90%] max-sm:overflow-x-hidden">
        {/* Left side image */}

        <div className="flex flex-col justify-around items-center">
          <div className="text-white relative max-lg:top-8 m-5 w-[60%]  mb-96 max-lg:mb-16">
            <Image className="rounded-full" src={me} alt="Fresh Food" />
          </div>
        </div>
        {/* Right side content */}
        <div className="flex relative flex-col max-lg:top-0 max-sm:m-[10%] max-lg:m-[10%]">
          <div className="text-3xl max-sm:text-xl text-[#DAA760] font-sans mb-7 flex flex-col items-start max-sm:ml-3">
            About
          </div>
          <div className="text-5xl max-sm:text-3xl font-serif mb-7 flex flex-col items-start max-sm:ml-3">
            Muzna Ali Siddiqui
          </div>

          {/* Info points */}
          <ul className="text-white mb-8 space-y-2 text-lg max-sm:text-sm list-disc list-inside">
            <li>
              <span className="text-gray-300 font-light">Nationality:</span>{" "}
              Pakistan
            </li>
            <li>
              <span className="text-gray-300 font-light">Languages:</span>{" "}
              English
            </li>
            <li>
              <span className="text-gray-300 font-light">Languages:</span> Urdu
            </li>
            <li>
              <span className="text-gray-300 font-light">Address:</span> Karcahi
            </li>
            <li>
              <span className="text-gray-300 font-light">Phone:</span> +92 330
              2445132
            </li>
            <li>
              <span className="text-gray-300 font-light">Email:</span>
              {"  "}
              muznasabzwari@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black flex items-center  justify-evenly flex-row max-lg:flex-col max-sm:w-[90%] max-sm:overflow-x-hidden"></div>
      </section>
    </>
  );
}
