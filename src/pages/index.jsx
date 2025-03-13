import About from "@/components/About";
import Collection from "@/components/Collection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import KnowMore from "@/components/KnowMore";
import ModelSection from "@/components/ModelSection";
import Nav from "@/components/Nav";
import Scroll from "@/components/Scroll";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <ModelSection />
      <Collection />
      <Scroll />
      <KnowMore />
      <Footer />
    </div>
  );
};

export default Home;
