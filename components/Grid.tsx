"use client";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "@/node_modules/next/link";

const Grid = () => {
  return (
    <section id="about  pt-12">
      <h1 className="relative heading">
        The hardest <span className="text-purple">project</span>
      </h1>
      <a
        href={"https://apps.apple.com/us/app/ecloud4/id6447580403"}
        target="_blank"
        className="flex justify-center items-center relative pt-4 cursor-pointer"
      >
        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
          Check Live Site
        </p>
        <FaLocationArrow className="ms-3" color="#CBACF9" />
      </a>

      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
