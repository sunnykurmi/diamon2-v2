import React from "react";

const Collection = () => {
  const collection = [
    {
      id: 1,
      img: "/images/collection/Jewel_compressed.webp",
      name: "Fine Jewellery Collection",
    },
    {
      id: 2,
      img: "/images/collection/Jewel2_compressed.webp",
      name: "High Jewellery collection",
    },
    {
      id: 3,
      img: "/images/collection/Jewel3_compressed.webp",
      name: "Ceremony & Engagement Collection",
    },
  ];

  return (
    <div>
      <div className="w-full h-fit  md:h-[70vh] xl:h-screen gap-5 md:gap-0  flex-col flex items-center justify-evenly px-5 md:px-10 lg:px-32 py-10 md:py-0">
        <p className=" spectral-extralight-italic capitalize text-[#6d1d45] italic text-4xl md:text-4xl lg:text-6xl ">
          Our collections
        </p>
        <div className=" h-fit   justify-items-center  flex flex-col md:flex-row gap-5   ">
          {collection.map((item) => (
            <div key={item.id} className="w-full md:w-[25vw]   h-fit center flex-col  ">
              <div className=" w-[75vw] h-[75vw] md:w-[25vw] md:h-[25vw]   rounded-sm overflow-hidden  transition-transform duration-500">
                <img
                  src={item.img}
                  alt=""
                  className="object-cover h-full w-full hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="  mb-6 md:mb-0  w-[75vw] md:w-[25vw]  pt-1 md:pt-5  flex items-center justify-start md:justify-center  md:text-center ">
                <p className=" opacity-80 tracking-tighter text-xl  spectral-regular   lg:text-base xl:text-2xl    capitalize text-[#6d1d45]">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
