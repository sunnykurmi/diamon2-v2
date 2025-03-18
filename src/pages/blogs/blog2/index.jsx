"use client"
import { RiArrowDropUpLine, RiArrowLeftLine, RiArrowRightSLine, RiCheckLine, RiFacebookBoxFill, RiFacebookBoxLine, RiFacebookLine, RiInstagramFill, RiInstagramLine } from '@remixicon/react';
import React, { useState } from 'react';

const page = () => {


  const [linkCopied, setLinkCopied] = useState(false);

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setLinkCopied(true);
      setTimeout(() => {
        setLinkCopied(false);
      }, 1000);
    });
  };

  return (
    <div>
      <div className=" h-20 border-b-2 text-[#262626] border-[#0000000b] border-opacity-30  center w-full p-5 montserrat">
        <img className=' w-[30%]  md:w-[12%]' src="/images/logo_text_2.png" alt="" />
      </div>
      <div className=" h-32 flex text-[#262626] items-center justify-between  px-5 md:px-32  w-full p-5 montserrat">
        <div className=" w-fit md:w-[30%] flex items-center gap-2 text-xs font-light h-full ">
          <a href="/" className='underline cursor-pointer'  >Home</a>
          <RiArrowRightSLine opacity={.5} size={16} />
          <a href="">Blogs</a>
          <RiArrowRightSLine opacity={.5} size={16} />
          <a href="">Why Diamond2?</a>
        </div>
        <div className="w-[30%] flex items-center justify-end gap-2  text-xs font-light h-full ">
          <p className='underline cursor-pointer' onClick={handleShareClick}>
            {linkCopied ? <p className='flex items-center'> Link copied   <RiCheckLine opacity={.5} size={16} /></p> : 'Share'}</p>
        </div>
      </div>
      <div className="w-full  text-[#262626]   flex flex-col text-center items-center  spectral-regular ">
        
        <div className="center flex-col gap-10  w-full pb-10">
          <p className=' text-3xl md:text-7xl   tracking-tighter spectral-light'>Why
            DIAMOND2?</p>
        </div>
        <div className=" w-full p-5  md:w-[40vw] h-[80vh] md:h-[120vh] ">
          <img className='w-full h-full object-cover' src="/images/blogs/blog_cvr_2.webp" alt="" />
        </div>
        <div className="w-[90%] md:w-[40vw] montserrat opacity-90 md:text-xl  text-start py-10 md:px-5">
          <p>Our exceptional lab-grown Diamond2
            possesses a fire and brilliance
            that equals that of the mined diamonds and respects mother nature. <br /><br />
            Thanks to our advanced technologies, Diamond2 
            offers an ethically
            and responsibly produced lab-grown diamond that is truly oneof-a-kind. Diamond2
            is able to place into the hands of its clients
            an aesthetically stunning lab-grown diamond without the high
            environmental toll associated with mining for diamonds and other
            precious stones. Our lab-grown diamond deliver unparalleled
            consistency in shape and sparkle together with a scintillating
            appearance and hardness that equals of the mined diamonds.</p> <br /><br />
        </div>
      </div>
      <div className="w-full h-[10vh]  md:h-[30vh] p-5 md:px-20  bg-gray-50 flex">
        <div className="h-full w-1/2 flex items-center">
          <img className=' w-[80%] md:w-[22%]' src="/images/logo_text_2.png" alt="" />
        </div>
        <div className="h-full w-1/2 flex items-center montserrat justify-end ">
          <div className="flex max-[600px]:text-xs   gap-2">
            <a href="https://www.instagram.com/diamond2official/?igsh=MXEyaG5hajJudjhkbQ%3D%3D#" target="_blank" rel="noreferrer">
              <p className="hover:opacity-70 transition-all ease-linear duration-100" >
                Instagram </p>
            </a>
            <a href="https://www.facebook.com/share/19yq86hQSB/?mibextid=wwXIfr" target="_blank" rel="noreferrer" >

              <p className="hover:opacity-70 cursor-pointer transition-all ease-linear duration-100" >Facebook</p>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default page;



