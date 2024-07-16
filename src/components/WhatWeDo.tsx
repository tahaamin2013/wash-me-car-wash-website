import { WhatWeDoData } from "@/AllWebsiteData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React, { useRef } from "react";

const WhatWeDo: React.FC = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  return (
    <div
      id="Our Services"
      className="flex mx-7 flex-col justify-center items-center my-5"
    >
      <div className="text-center flex flex-col gap-2 mb-2">
        <p className="tracking-widest text-blue">WHAT WE DO</p>
        <h1 className="text-2xl sm:text-3xl font-bold">
          Step-by-Step Guide to Washing Success
        </h1>
      </div>

      <Carousel
        plugins={[plugin.current]}
        className="h-full w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {WhatWeDoData.map((item, index) => (
            <CarouselItem
              key={index}
              className="z-10 flex flex-col lg:flex-row justify-center text-left bg-primaryBlue-200 rounded-xl h-[600px] sm:h-[400px] text-white overflow-hidden shadow-xl"
            >
                <Image
                  width={500}
                  height={500}
                  src={item.image}
                  loading="lazy"
                  alt={`Step ${index + 1} image`}
                  className="w-[700px] h-[500px] object-cover object-top lg:block hidden"
                />
                <div className="mt-4 flex flex-col flex-wrap ml-6">
                  <h1 className="text-left text-white font-bold text-2xl">
                    {item.title}
                  </h1>
                  <p className="text-sm mt-3 mb-3">{item.description}</p>
                </div>
                <Image
                  width={500}
                  height={500}
                  loading="lazy"
                  src={item.image}
                  alt={`Step ${index + 1} image`}
                  className="w-screen h-screen object-cover object-top lg:hidden block"
                />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default WhatWeDo;
