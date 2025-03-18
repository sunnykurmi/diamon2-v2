import React, { useEffect } from "react";
import gsap from "gsap";

export default function Scroll() {
  useEffect(() => {
    import("gsap/ScrollTrigger").then((module) => {
      const ScrollTrigger = module.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#stores",
          start: "top top",
          end: "+=" + window.innerHeight * 4,
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
      tl.to("#slide4", { y: "-100vh" }, "hello2");
      tl.fromTo(
        "#lastslide",
        {
          y: "-100vh",
          scale: 1.5,
        },
        {
          y: 0,
          scale: 1,
        },
        "hello2"
      );
    });
  }, []);

  return (
    <div>
      <div
        id="stores"
        className="w-full cursor-default overflow-hidden h-[100vh]  relative"
      >
        <div
          id="slide1"
          className="w-full h-full  overflow-hidden z-[1] top-0 flex items-center justify-center"
        >
          <div className="w-full h-full z-[1] bg-[] absolute"></div>
          <div className=" txt1  absolute flex flex-col gap-3 md:gap-5 text-white z-[1] left-[5%] bottom-[15%]  ">
            <p className="  text-3xl md:text-5xl  spectral-light">
              Diamond2 Flagship Store
            </p>
            <p className="text-sm  md:text-xl montserrat font-medium">
              Wisma Atira, Singapore
            </p>
            <a href="https://g.co/kgs/bbA1hkQ">
              <button className="bg-[#6D1D45] px-2 py-1 text-xs md:text-lg  md:px-4 md:py-2 w-fit rounded-sm md:rounded-lg text-white ">
                Locate Us
              </button>
            </a>
          </div>
          <img
            className=" max-[640px]:hidden  w-full h-full object-cover"
            src="/images/stores/laptop_2.webp"
            alt=""
          />
          <img
            className=" min-[640px]:hidden  w-full h-full object-cover"
            src="/images/stores/mobile_4.webp"
            alt=""
          />
        </div>
        <div
          id="slide2"
          className="w-full h-full overflow-hidden z-[2]  absolute  flex items-center justify-center"
        >
          <div className="w-full h-full bg-[] z-[2]  absolute"></div>
          <div className=" txt2 absolute flex flex-col gap-3 md:gap-5 text-white z-[2] left-[5%] bottom-[15%] md:top-[15%]  ">
            <p className="  text-3xl md:text-5xl  spectral-light">
              Diamond2 Store
            </p>
            <p className="text-sm  md:text-xl montserrat font-medium">
              Vivo City, Singapore
            </p>
            <a href="https://g.co/kgs/b4TMHAj">
              <button className="bg-[#6D1D45] px-2 py-1 text-xs md:text-lg  md:px-4 md:py-2 w-fit rounded-sm md:rounded-lg text-white ">
                Locate Us
              </button>
            </a>
          </div>
          <img
            className=" max-[640px]:hidden w-full h-full object-cover"
            src="/images/stores/laptop_3.webp"
            alt=""
          />
          <img
            className=" min-[640px]:hidden  w-full h-full object-cover"
            src="/images/stores/mobile_2.webp"
            alt=""
          />
        </div>
        <div
          id="slide3"
          className="w-full h-full overflow-hidden z-[3] absolute  flex items-center justify-center"
        >
          <div className="w-full h-full bg-[]  z-[3] absolute"></div>
          <div className=" txt3 absolute flex flex-col gap-3 md:gap-5 text-[#ffffff] z-[3] left-[5%] md:right-[5%] bottom-[10%]  ">
            <p className="  text-3xl md:text-5xl  spectral-light">
              Diamond2 Experience Center
            </p>
            <p className="text-sm  md:text-xl montserrat font-medium">India</p>
            <a href="https://g.co/kgs/kvCEJsj">
              <button className="bg-[#6D1D45] px-2 py-1 text-xs md:text-lg  md:px-4 md:py-2 w-fit rounded-sm md:rounded-lg text-white ">
                Locate Us
              </button>
            </a>
          </div>
          <img
            className=" max-[640px]:hidden w-full h-full object-cover"
            src="/images/stores/laptop_1.webp"
            alt=""
          />
          <img
            className=" min-[640px]:hidden  w-full h-full object-cover"
            src="/images/stores/mobile_1_1.webp"
            alt=""
          />

        </div>
        <div
          id="slide4"
          className="w-full h-full overflow-hidden z-[4] absolute  flex items-center justify-center bg-white"
        >
          <div id="lastslide" className="flex flex-col-reverse md:flex-row w-full p-2 md:p-10 h-full items-center  ">
            <div className=" w-full md:w-[40%]  h-full center flex-col gap-1 md:gap-3 mb-4 md:mb-0">
              <p className=" spectral-extralight-italic capitalize text-[#6d1d45] italic text-5xl mb-5 md:text-5xl lg:text-6xl ">
                Coming Soon
              </p>
              <p className=" spectral-extralight-italic capitalize text-[#6d1d45] italic text-2xl md:text-2xl lg:text-4xl ">
                Abu Dhabi
              </p>
              <p className=" spectral-extralight-italic capitalize text-[#6d1d45] italic text-2xl md:text-2xl lg:text-4xl ">
                Dubai
              </p>
              <p className=" spectral-extralight-italic capitalize text-[#6d1d45] italic text-2xl md:text-2xl lg:text-4xl ">
                Milan
              </p>
              <p className=" spectral-extralight-italic capitalize text-[#6d1d45] italic text-2xl md:text-2xl lg:text-4xl ">
                Paris
              </p>
              <p className=" spectral-extralight-italic capitalize text-[#6d1d45] italic text-2xl md:text-2xl lg:text-4xl ">
                London
              </p>
              <p className=" spectral-extralight-italic capitalize text-[#6d1d45] italic text-2xl md:text-2xl lg:text-4xl ">
                Doha
              </p>
            </div>
            <div className=" w-full md:w-[60%] h-full center flex-col">
              <img
                className="w-full h-full object-contain"
                src="/images/stores/coming_soon_store.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
