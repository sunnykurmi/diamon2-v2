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
      <div className="w-full  md:h-screen  flex-col flex items-center justify-evenly px-5 md:px-32">
        <p className=" spectral-light-italic capitalize text-[#6d1d45] italic text-4xl md:text-6xl ">
          Know More
        </p>
        <div className="w-full h-fit md:h-[60vh]  grid  grid-cols-1  md:grid-cols-3 gap-5 md:gap-20 ">
          {cards.map((item, i) => (
            <div key={i} className="w-full h-full ">
              <div className="w-full h-[50vh] rounded-sm overflow-hidden hover:scale-105 transition-transform duration-500">
                <a href={item.link}>
                  <img
                    src={item.img}
                    alt=""
                    className="object-cover h-full w-full hover:scale-110 transition-transform duration-500"
                  />
                </a>
              </div>
              <div className="w-full h-[10vh]  center text-center">
                <a href={item.link}>
                  <p className="text-2xl spectral-light capitalize text-[#6d1d45]">
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
