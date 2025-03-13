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
      <div className="w-full  md:h-screen  flex-col flex items-center justify-evenly px-5 md:px-32">
        <p className=" spectral-light-italic capitalize text-[#6d1d45] italic text-4xl md:text-6xl ">
          Our collections
        </p>
        <div className="w-full h-fit md:h-[60vh]  grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-20 ">
          {collection.map((item) => (
            <div key={item.id} className="w-full h-full ">
              <div className="w-full h-[50vh] rounded-sm overflow-hidden hover:scale-105 transition-transform duration-500">
                <img
                  src={item.img}
                  alt=""
                  className="object-cover h-full w-full hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="w-full h-[10vh]  center text-center">
                <p className="text-2xl spectral-light capitalize text-[#6d1d45]">
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
