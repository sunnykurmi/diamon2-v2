import React, { useEffect, useRef } from "react";

const Hero = () => {
  const heroVideo = "/videos/hero_card_vid_2.MP4";
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => console.log("Autoplay prevented:", error));
    }
  }, []);

  return (
    <div>
      <div className="w-full relative h-screen center">
        <video
          ref={videoRef}
          src={heroVideo}
          className="w-full h-full object-cover"
          muted
          autoPlay
          playsInline
          loop
          preload="auto"
        ></video>
        <div className="overlay absolute w-full h-full bg-[#00000077] z-10"></div>
        <div className="w-full px-5 md:px-0 md:w-[80%] absolute z-20 bottom-20 md:bottom-10 text-center center flex-col capitalize text-white">
          <p className="text-[15vw] md:text-[9vw] spectral-extralight-italic">
            coming soon
          </p>
          <p className="text-xs md:text-base lg:text-lg w-full lg:w-[70%] montserrat font-light md:font-medium opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            tempora laboriosam numquam, blanditiis deleniti quod nisi delectus
            aperiam sint rem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
