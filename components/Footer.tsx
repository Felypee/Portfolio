import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="max-h-[60vh] w-full pt-8 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">Imagine something awesome</h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          We can create great things together.
        </p>
        <a href="mailto:felipearango9701@gmail.com">
          <MagicButton
            title="Send me an email"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Felipe Arango
        </p>
      </div>
    </footer>
  );
};

export default Footer;
