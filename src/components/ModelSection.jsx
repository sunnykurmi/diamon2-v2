import React, { useState, Suspense } from "react";
import Scene from "./Scene";

const ModelSection = () => {
  // Manage selected colors
  const [ringColor, setRingColor] = useState("gold");
  const [diamondColor, setDiamondColor] = useState("green");

  // Color options
  const colors = [
    { ring: "gold", diamond: "red" },
    { ring: "silver", diamond: "purple" },
    { ring: "silver", diamond: "pink" },
    { ring: "silver", diamond: "blue" },
    { ring: "gold", diamond: "green" },
    { ring: "gold", diamond: "skyblue" },
  ];

  return (
    <div>
      <div className="w-full h-fit md:h-[100vh] flex flex-col lg:flex-row px-5 md:px-0 md:p-5 md:py-10">
        <div className="w-full lg:w-[50%] h-full center">
          <div className="w-full h-[50vh]  cursor-grab center flex-col md:w-[80%] md:h-[80%]">
            <Suspense fallback={<div className="text-black text-lg">Loading 3D Model...</div>}>
              <Scene ringColor={ringColor} diamondColor={diamondColor} />
            </Suspense>
              <div className="w-full h-10 mb-10 md:mb-0  center gap-4 md:gap-2">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className="size-5  md:size-8 rounded-full rotate-45 overflow-hidden cursor-pointer flex"
                    onClick={() => {
                      setRingColor(color.ring);
                      setDiamondColor(color.diamond);
                    }}
                  >
                    {/* Left side (Ring color) */}
                    <div className="w-1/2 h-full" style={{ backgroundColor: color.ring }}></div>
                    {/* Right side (Diamond color) */}
                    <div className="w-1/2 h-full" style={{ backgroundColor: color.diamond }}></div>
                  </div>
                ))}
              </div>
          </div>
        </div>
        <div className="w-full h-[50%] lg:w-[50%] md:h-full flex flex-col gap-5 items-center justify-center text-center">
          <p className="capitalize text-2xl md:text-4xl">
            <span className="text-[#6d1d45] spectral-extralight-italic text-3xl md:text-4xl lg:text-6xl">
              Jewellery Collection
            </span>
          </p>
          <p className="w-full flex flex-col montserrat font-normal opacity-80 leading-tight text-xs md:w-[70%] lg:text-lg mb-10 md:mb-0">
            <span>
              Diamond2® reimagines the world of fine jewellery with timeless contemporary designs featuring our revolutionary lab-grown diamond.
            </span>
            <span className="mt-3">
              Driven by the desire to redefine the classical canons of fine jewellery, Diamond2® presents an inspiring collection of exquisitely crafted Solitaire pieces that exalt the properties of our pioneering lab-grown diamond.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModelSection;
