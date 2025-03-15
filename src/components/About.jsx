import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";

const About = () => {
  const image = "/images/stores/sketch_11zon.webp";
  const imageflip = "/images/stores/sketchflip_11zon.webp";

  useEffect(() => {
    if (window.innerWidth <= 640) {
      return;
    }

    import("gsap/ScrollTrigger").then((module) => {
      const ScrollTrigger = module.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".parent",
          start: "top 50%",
          end: "bottom top",
          scrub: 1, // Smooth animation
          // markers: true, // Debugging markers
        },
        defaults: { duration: 1, ease: "power1.out" }, // Global animation defaults
      });

      tl.fromTo(
        ".sketch_image_1",
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1 },
        "start"
      )
        .fromTo(
          ".sketch_image_2",
          { x: 200, opacity: 0 },
          { x: 0, opacity: 1 },
          "start"
        )
        .fromTo(
          ".txt_anim",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1 },
          "start"
        )
        .to(
          ".sketch_image_1",
          { scale: 1.5, x: -100, opacity: 0, duration: 3 ,delay:1.5 },
          "fadeOut"
        )
        .to(
          ".sketch_image_2",
          { scale: 1.5, x: 100, opacity: 0, duration: 3 ,delay:1.5 },
          "fadeOut"
        )
        .to(
          ".txt_anim",
          { y: -100, opacity: 0, duration: 3 ,delay:1.5 },
          "fadeOut"
        );
    });
  }, []);

  return (
    <div>
      <div className="parent h-fit py-20 md:py-0 w-full relative overflow-hidden flex items-center justify-center">
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
            className="w-full sketch_image_2 h-full object-contain"
            alt=""
          />
        </div>
        <div className="relative md:absolute gap-2 w-full px-5 md:px-0 md:w-[25vw] flex items-center justify-evenly flex-col">
          <p className="spectral-extralight-italic overflow-hidden mb-4 text-3xl md:text-[2vw] leading-tight text-center text-[#6D1D45]">
            <span className="block txt_anim">A World Beyond Mined Diamonds</span>
          </p>
          <p className="text-xs md:text-[.8vw] montserrat font-normal opacity-80 text-center overflow-hidden">
            <span className="block txt_anim">
              Our revolutionary lab-grown Diamond2<sup>®</sup> is an innovative
              breakthrough that seeks to disrupt the tradition-bound world of
              fine jewellery dominated by the mined diamonds.
            </span>
          </p>
          <p className="text-xs md:text-[.8vw] montserrat font-normal opacity-80 text-center overflow-hidden">
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
