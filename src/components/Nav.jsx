import { RiFacebookLine, RiInstagramLine } from "@remixicon/react";
import Image from "next/image";
import React from "react";

const Nav = () => {
  const logo = "/images/logo_text.png";

  return (
    <div>
      <div className="w-full h-[10vh] backdrop-blur-lg  absolute text-white top-0 left-0 z-50  flex items-center justify-between px-5 md:px-20 ">
        <div className="w-[20%] h-full  flex items-center  md:gap-5">
          <a
            href="https://www.instagram.com/diamond2official/?igsh=MXEyaG5hajJudjhkbQ%3D%3D#"
            target="_blank"
            rel="noreferrer"
          >
            <RiInstagramLine className=" scale-75 md:scale-100  hover:opacity-70 cursor-pointer hover:scale-110 transition-all ease-linear duration-100" />
          </a>
          <a
            href="https://www.facebook.com/share/19yq86hQSB/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
          >
            <RiFacebookLine className=" scale-75 md:scale-100 hover:opacity-70 cursor-pointer hover:scale-110 transition-all ease-linear duration-100" />
          </a>
        </div>
        <div className="w-[20%] h-full  center">
          <Image
            className="scale-125 md:scale-100"
            width={150}
            height={100}
            src={logo}
            alt="logo"
          />
        </div>
        <div className="w-[20%] h-full  flex items-center justify-end ">
          <a href="#stores">

          <button className="bg-[#6D1D45] px-2 py-1 text-xs md:text-lg whitespace-nowrap md:px-4 md:py-2 rounded-sm md:rounded-lg text-white ">
            Locate Us
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
