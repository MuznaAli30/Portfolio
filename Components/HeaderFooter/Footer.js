import React from "react";
import { LuClock9, LuChefHat } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-black  bottom-0">
      <div className="flex justify-around items-center max-lg:flex-col max-lg:items-start max-sm:items-center max-sm:justify-center">
        <div className="flex items-center gap-2 m-2 cursor-pointer max-sm:hidden">
          <MdEmail className="text-[#d08829] text-2xl " />
          <div className="max-md:text-lg text-white max-sm:w-full ">
            muznaalisiddiquisabzwari@gmail.com
          </div>
        </div>
        <div className="flex items-center gap-5 m-2 cursor-pointer">
          <MdPhone className="text-[#d08829] text-2xl" />
          <div className="max-md:text-lg text-white max-sm:w-full">
            +92 330 2445132
          </div>
        </div>

        <div className="flex items-center gap-5 m-2 cursor-pointer">
          <MdLocationOn className="text-[#d08829] text-2xl" />
          <div className="max-md:text-lg text-white max-sm:w-full">
            Karachi, Pakistan
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-around gap-96 mt-16 max-sm:justify-between max-lg:gap-5 max-lg:flex-col">
        <div className="flex">
          <div className="flex items-center justify-around text-3xl gap-24 text-md font-medium text-[#d08829] max-lg:gap-10 max-lg:items-center">
            <a
              href="https://www.linkedin.com/in/muzna-ali-siddiqui-226220282"
              target="_blank"
              className="hover:text-[#e3d2af]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/MuznaAli30?tab=repositories"
              target="_blank"
              className="hover:text-[#e3d2af]"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
