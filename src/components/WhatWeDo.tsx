import { washingSteps } from "@/AllWebsiteData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image'
import React, { useMemo, useRef, useState, useCallback } from "react";

const WhatWeDo: React.FC = () => {
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const toggleAutoplay = useCallback(() => {
    if (autoplayEnabled) {
      plugin.current.stop();
    } else {
      plugin.current.reset();
    }
    setAutoplayEnabled(!autoplayEnabled);
  }, [autoplayEnabled]);

  const carouselItems = useMemo(() => washingSteps.map((item, index) => (
    <CarouselItem
      key={item.title}
      className="z-10 flex flex-col lg:flex-row justify-center text-left bg-primaryBlue-200 rounded-xl h-[600px] sm:h-[400px] text-white overflow-hidden shadow-xl"
    >
      <Image
        width={700}
        height={500}
        src={item.Image}
        alt={`${item.title} image`}
        className="w-[700px] h-[500px] object-cover object-top"
        loading="lazy"
      />
      <div className="mt-4 flex flex-col flex-wrap ml-6">
        <h2 className="text-left text-white font-bold text-2xl">
          {item.title}
        </h2>
        <p className="text-sm mt-3 mb-3">{item.description}</p>
      </div>
    </CarouselItem>
  )), []);

  return (
    <section
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
        onMouseEnter={toggleAutoplay}
        onMouseLeave={toggleAutoplay}
      >
        <CarouselContent>
          {carouselItems}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default WhatWeDo;