"use client";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "@/node_modules/next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Grid = () => {
  return (
    <section
      className="flex flex-col items-center max-h-[100vh] w-full"
      id="about"
    >
      <h1 className="heading">
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

      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="overflow-visible  py-5"
      >
        <CarouselContent className="overflow-visible ">
          {gridItems.map((item, i) => (
            <CarouselItem key={i} className="pl-4 basis-1/2 lg:basis-1/4 ">
              <img
                src={item.img}
                className=" h-auto hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out"
                alt={`Carousel Item ${i + 1}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Grid;
