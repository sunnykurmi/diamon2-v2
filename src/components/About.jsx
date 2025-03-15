import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";

const About = () => {
  const image = "/images/stores/sketch.webp";
  const imageflip = "/images/stores/sketchflip.webp";

  useEffect(() => {

    if(window.innerWidth<=640){
      return;
    }

    import("gsap/ScrollTrigger").then((module) => {
      const ScrollTrigger = module.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".parent",
          start: "top bottom",
          end: "bottom center",
          scrub: true, // Smooth animation
          //   markers: true, // Show debugging markers
        },
      });

      tl.fromTo(
        ".sketch_image_1",
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        "ss"
      );

      tl.fromTo(
        ".sketch_image_2",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        "ss"
      );

      tl.fromTo(
        ".txt_anim",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "ss"
      );

      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".parent",
          start: "top top",
          scrub: true, // Smooth animation
          // markers: true, // Show debugging markers
        },
      });

      tl2.fromTo(
        ".sketch_image_1",
        { scale: 1, x: 0, opacity: 1 },
        { scale: 1.5, x: -100, opacity: 0, duration: 1 },
        "ss"
      );
      tl2.fromTo(
        ".sketch_image_2",
        { scale: 1, x: 0, opacity: 1 },
        { scale: 1.5, x: 100, opacity: 0, duration: 1 },
        "ss"
      );
      tl2.fromTo(
        ".txt_anim",
        { y: 0, opacity: 1 },
        { y: -100, opacity: 0, duration: 1, delay: 0.3 },
        "ss"
      );
    });
  }, []);

  return (
    <div>
      <div className="parent h-fit pt-20 md:pt-0  w-full relative overflow-hidden flex items-center justify-center">
        <div className=" max-[640px]:hidden w-1/2 h-full center">
          <img
            src={image}
            className="w-full sketch_image_1 h-full object-contain"
            alt=""
          />
        </div>
        <div className=" max-[640px]:hidden w-1/2 h-full center">
          <img
            src={imageflip}
            className="w-full sketch_image_2 h-full object-contain "
            alt=""
          />
        </div>
        <div className=" relative md:absolute gap-2 w-full px-5 md:px-0  md:w-[25vw] flex items-center justify-evenly flex-col">
          <p className="spectral-extralight-italic overflow-hidden  mb-4 text-3xl md:text-[2vw] leading-tight text-center text-[#6D1D45]">
            <span className="block txt_anim ">
              A World Beyond Mined Diamonds
            </span>
          </p>
          <p className="      text-xs  md:text-[.8vw] montserrat font-normal opacity-80 text-center overflow-hidden">
            <span className="block txt_anim">
              Our revolutionary lab-grown Diamond2<sup>®</sup> is an innovative
              breakthrough that seeks to disrupt the tradition-bound world of
              fine jewellery dominated by the mined diamonds.
            </span>
          </p>
          <p className=" text-xs  md:text-[.8vw] montserrat font-normal opacity-80 text-center overflow-hidden">
            <span className="block txt_anim">
              The Diamond2<sup>®</sup> fine jewellery collection is designed and
              developed by our in-house creative team based in Milan, Italy, the
              world’s design capital.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
