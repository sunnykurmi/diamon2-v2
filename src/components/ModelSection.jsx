import React, { Suspense } from "react";
import Scene from "./Scene";

const ModelSection = () => {
  return (
    <div>
      <div className="  w-full h-[100vh] flex flex-col lg:flex-row    p-5 py-10 ">
        <div className=" w-full lg:w-[50%]  h-full center">
          <div className=" w-full h-[50%]  center  md:w-[80%] md:h-[80%] ">
            <Suspense
              fallback={
                <div className="text-black text-lg">Loading 3D Model...</div>
              }
            >
              <Scene />
            </Suspense>
          </div>
        </div>
        <div className=" w-full h-[50%]   lg:w-[50%] spectral-light md:h-full  flex flex-col gap-10 items-center justify-center text-center">
          <p className="capitalize text-2xl md:text-4xl  ">
            {" "}
            <span className="text-[#6d1d45] italic text-4xl md:text-6xl   ">
              {" "}
              Jewellery Collection
            </span>
          </p>
          <p className=" w-full montserrat  text-sm  lg:w-[70%] leading-5  lg:text-lg  mb-20 md:mb-0">
            Diamond2® reimagines the world of fine jewellery with timeless
            contemporary designs featuring our revolutionary lab-grown diamond.{" "}
            <br />
            <br /> Driven by the desire to redefine the classical canons of fine
            jewellery, Diamond2® presents an inspiring collection of exquisitely
            crafted Solitaire pieces that exalt the properties of our pioneering
            lab-grown diamond.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModelSection;
