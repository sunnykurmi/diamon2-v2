import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="w-full h-screen py-14 text-white bg-[#6d1d45]">
        <div className="h-[90%] flex flex-col md:gap-5 gap-10 items-center justify-center w-full center text-white  ">
          <div className="w-full center ">
            <img
              className="w-[10%] md:w-[5%] lg:w-[3%] "
              src="/images/logowhite.png"
              alt=""
            />
          </div>
          <div className="w-full center">
            <p className="spectral-light-italic text-2xl md:text-4xl lg:text-5xl">
              Subscribe to our Newsletter
            </p>
          </div>
          <div className="w-full center flex-col  gap-5">
            <p className=" px-10 md:px-0 text-center text-xs md:text-xl lg:text-2xl spectral-extralight">
              Discover our latest collections, news and exclusive events from
              Diamond2
            </p>
            <div className=" w-[95%]  lg:w-[55%]   flex flex-col md:flex-row gap-5 items-center justify-between">
              <input
                className="border-white text-xs md:text-xl h-10 md:h-14 montserrat border md:border-2 outline-none  w-[90%] bg-transparent text-white pl-2 md:pl-5 font-medium"
                type="text"
                name=""
                placeholder="Enter your email"
                id=""
              />
              <button className=" w-[90%] px-4 py-2 md:py-0 md:px-0  md:w-[25%] md:h-full bg-white text-[#6d1d45] hover:bg-[#6d1d45] hover:border-white hover:text-white border-2 transition-all duration-300 uppercase text-xs md:text-lg font-medium  montserrat">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="h-[10%] w-full px-5   md:px-20 flex items-center justify-between ">
          <img className="h-full" src="/images/signature.png" alt="" />
          <p
            onClick={scrollToTop}
            className="text-xl   spectral-light-italic cursor-pointer"
          >
            Back on top
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
