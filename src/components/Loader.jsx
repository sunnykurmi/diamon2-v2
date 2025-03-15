import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Loader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [animationCycle, setAnimationCycle] = useState(0);

  useEffect(() => {
    // Increase progress smoothly until 99%
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 99 ? prev + 1 : prev));
    }, 30);

    // Function to handle full load
    const handleLoad = () => {
      clearInterval(interval);
      setProgress(100);

      // Ensure loader is shown for at least 2 seconds
      setTimeout(() => {
        setIsLoaded(true);
        setTimeout(() => setIsAnimating(false), 700); // Smooth fade-out
      }, 2000);
    };

    // Check if already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // Restart animation cycle when the last image completes
  useEffect(() => {
    if (!isLoaded) {
      const cycleInterval = setInterval(() => {
        setAnimationCycle((prev) => prev + 1);
      }, 2500); // Delay matches animation time

      return () => clearInterval(cycleInterval);
    }
  }, [isLoaded]);

  return (
    <>
      {isAnimating && (
        <motion.div
          initial={{ y: 0 }}
          animate={isLoaded ? { y: "-110%", opacity: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full h-[100vh] fixed top-0 z-[999] bg-white flex flex-col items-center justify-evenly"
        >
          {/* Logo */}
          <div className="w-full center">
            <img className=" w-[40%] md:w-[12%]" src="/images/logo_text_2.png" alt="Logo" />
          </div>

          {/* Image Loader Animation (Looping Effect) */}
          <div className=" w-[70%] md:w-[20vw] h-[60vh] relative overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`${animationCycle}-${i}`} // Ensure re-render on cycle change
                className="w-full h-full overflow-hidden absolute"
                initial={{ top: 500 }}
                animate={{ top: 0 }}
                transition={{ duration: 0.5, delay: i * 0.5 }}
              >
                <motion.img
                  initial={{ top: -500, scale: 1.2 }}
                  animate={{ top: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.5 }}
                  className="w-[100%] object-cover h-[100%] absolute"
                  src={`/images/collection/cln_${(i % 5) + 1}.webp`}
                  alt=""
                />
              </motion.div>
            ))}
          </div>

          {/* Loading Percentage */}
          <div className="w-full text-center font-semibold text-xl">
            {progress}%
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Loader;
