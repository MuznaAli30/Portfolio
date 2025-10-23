import React from "react";
import { FaAsterisk } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";

export default function Hero({id}) {
  return (
    <> <section id={id}>
      <div className="max-w-full">
        <div className="bg-black flex items-center justify-center flex-col max-sm:overflow-x-hidden min-h-screen">

          {/* Main Text */}
          <div className="m-5 text-white text-7xl font-serif text-center italic max-lg:w-[90%]">
            Hello I Am<br></br> Muzna Ali Siddiqui Sabzwari
          </div>

          {/* Decorative Icons (bottom) */}
          <div className="m-5 flex flex-row items-center justify-center space-x-5">
            <IoRemoveOutline className="text-[#DAA760] text-9xl font-extrabold" />
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
