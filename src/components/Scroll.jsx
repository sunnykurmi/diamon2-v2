import React, { useEffect } from "react";
import gsap from "gsap";

export default function Scroll() {
  useEffect(() => {
    import("gsap/ScrollTrigger").then((module) => {
      const ScrollTrigger = module.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#parent",
          start: "top top",
          end: "+=" + window.innerHeight * 3,
          pin: true,
          // markers: true,
          scrub: true,
        },
      });
      tl.to("#slide2", { y: "-100vh" }, "hello");
      tl.fromTo(
        "#slide1 img",
        {
          scale: 1.5,
        },
        {
          scale: 1,
        },
        "hello"
      );
      tl.fromTo(
        "#slide2 img",
        {
          y: "-100vh",
          scale: 1.5,
        },
        {
          y: 0,
          scale: 1,
        },
        "hello"
      );
      tl.fromTo(
        ".txt2",
        {
          y: "-100vh",
        },
        {
          y: 0,
        },
        "hello"
      );
      tl.to("#slide3", { y: "-100vh" }, "hello1");
      tl.fromTo(
        "#slide3 img",
        {
          y: "-100vh",
          scale: 1.5,
        },
        {
          y: 0,
          scale: 1,
        },
        "hello1"
      );
      tl.fromTo(
        ".txt3",
        {
          y: "-100vh",
        },
        {
          y: 0,
        },
        "hello1"
      );
    });
  }, []);

  return (
    <div>
      <div
        id="parent"
        className="w-full cursor-default overflow-hidden h-[100vh]  relative"
      >
        <div
          id="slide1"
          className="w-full h-full  overflow-hidden z-[1] top-0 flex items-center justify-center"
        >
          <div className="w-full h-full bg-[#0000003f] absolute"></div>
          <div className=" txt1 absolute flex flex-col gap-5 text-white z-[1] left-[5%] bottom-[15%]  ">
            <p className="text-5xl  spectral-light">Diamond2 Flagship Store</p>
            <p className="text-xl montserrat font-medium">
              Wisma Atira ,Singapore
            </p>
            <button className="bg-[#6D1D45] px-4 py-2 w-fit rounded-lg text-white ">
              Locate Us
            </button>
          </div>
          <img
            className="w-full h-full object-cover"
            src="/images/stores/store_1_11zon.webp"
            alt=""
          />
        </div>
        <div
          id="slide2"
          className="w-full h-full overflow-hidden z-[2]  absolute  flex items-center justify-center"
        >
          <div className="w-full h-full bg-[#0000003f] z-[2]  absolute"></div>
          <div className=" txt2 absolute flex flex-col gap-5 text-white z-[2] left-[5%] top-[15%]  ">
            <p className="text-5xl  spectral-light">Diamond2 Store</p>
            <p className="text-xl montserrat font-medium">
              Vivo City ,Singapore
            </p>
            <button className="bg-[#6D1D45] px-4 py-2 w-fit rounded-lg text-white ">
              Locate Us
            </button>
          </div>
          <img
            className="w-full h-full object-cover"
            src="/images/stores/store_2_11zon.webp"
            alt=""
          />
        </div>
        <div
          id="slide3"
          className="w-full h-full overflow-hidden z-[3] absolute  flex items-center justify-center"
        >
          <div className="w-full h-full bg-[#0000003f]  z-[3] absolute"></div>
          <div className=" txt3 absolute flex flex-col gap-5 text-[#ffffff] z-[3] right-[5%] bottom-[10%]  ">
            <p className="text-5xl  spectral-light">Diamond2 Experience Center</p>
            <p className="text-xl montserrat font-medium">
             Haryana, India
            </p>
            <button className="bg-[#6D1D45] px-4 py-2 w-fit rounded-lg text-white ">
              Locate Us
            </button>
          </div>
          <img
            className="w-full h-full object-cover"
            src="/images/stores/store_3_11zon.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
