import React from "react";

const KnowMore = () => {
  const cards = [
    {
      img: "/images/blogs/blog_cvr_2.webp",
      name: "What is Diamond2 ?",
      link: "/blogs/blog1",
    },
    {
      img: "/images/blogs/oldpic.webp",
      name: "Why Diamond2",
      link: "/blogs/blog2",
    },
    {
      img: "/images/blogs/blog_cvr_1.webp",
      name: "Diamond2 by Cut",
      link: "/blogs/blog3",
    },
  ];

  return (
    <div>
      <div className="w-full h-fit  md:h-[70vh] xl:h-screen gap-5 md:gap-0  flex-col flex items-center justify-evenly px-5 md:px-10 lg:px-32 py-10 md:py-0">
        <p className=" spectral-extralight-italic capitalize text-[#6d1d45] italic text-3xl md:text-4xl lg:text-6xl">
          Know More
        </p>
        <div className=" h-fit   justify-items-center  flex flex-col md:flex-row gap-5   ">
          {cards.map((item, i) => (
            <div
              key={item.id}
              className="w-full md:w-[25vw]   h-fit center flex-col  "
            >
              <div className=" w-[75vw] h-[75vw] md:w-[25vw] md:h-[25vw]   rounded-sm overflow-hidden  transition-transform duration-500">
                <a href={item.link}>
                  <img
                    src={item.img}
                    alt=""
                    className="object-cover h-full w-full hover:scale-110 transition-transform duration-500"
                  />
                </a>
              </div>
              <div className="w-[75vw]   pt-1 md:pt-5  flex items-center justify-start md:justify-center  md:text-center ">
                <a href={item.link}>
                  <p className=" opacity-80 text-xs   lg:text-base xl:text-xl 2xl:text-4xl   capitalize text-[#6d1d45]">
                    {item.name}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
