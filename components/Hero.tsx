import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full pt-36 overflow-hidden">
      <div>
        <Spotlight
          className="-left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[80vh] top-10 " fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-screen" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 z-[0] flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-[0]">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Felipe Arango"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Fullstack developer
          </p>

          <p className="text-xs">FLUTTER | AWS | NODEJS | REACT</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
