import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React, { useRef } from "react";

const WhatWeDo: React.FC = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const data = [
    {
      image:
        "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/23.webp",
      title: "Step 1: Washing the Wheels",
      description:
        "In the first step, attention is given to the wheels of the car. This involves a thorough cleaning process to remove dirt, brake dust, and other debris from the wheels, ensuring a fresh and polished look.",
    },
    {
      image:
        "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/washing-the-weels.webp",
      title: "Step 2: Darrin Carefully Prewashes the Lower Car",
      description:
        "Darrin, the car detailing professional, takes special care to prewash the lower parts of the car. This step is crucial for removing initial layers of grime and preparing the vehicle for a comprehensive cleaning.",
    },
    {
      image:
        "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/full%20(1).webp",
      title: "Step 3: Beginning of the Full Body Wash Even Before the Tunnel",
      description:
        "The full-body wash commences, starting even before the car enters the cleaning tunnel. This stage involves a general surface cleaning to eliminate surface dirt and contaminants from the entire vehicle.",
    },
    {
      image:
        "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/fsd%20(2).webp",
      title: "Step 4: Full Body Hand Wash Before the Tunnel",
      description:
        "Before entering the automated cleaning tunnel, a meticulous hand wash is performed on the entire body of the car. This step ensures a detailed cleaning, addressing specific areas that may require extra attention.",
    },
    {
      image:
        "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/get%20(1)%20(1).webp",
      title: "Step 5: Getting Ready for the Pre-Soak Rinse",
      description:
        "Preparations are made for the pre-soak rinse, a step that involves applying a specialized cleaning solution to loosen and break down stubborn dirt and grime before the main washing process.",
    },
    {
      image:
        "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/in%20(1).webp",
      title:
        "Step 6: Inside the Tunnel with Another Hand Wash Using Lambswool Mittens",
      description:
        "As the car enters the cleaning tunnel, another round of hand washing takes place. This time, lambswool mittens are utilized for a gentle yet effective cleaning, ensuring that every nook and cranny is thoroughly addressed.",
    },
    {
      image:
        "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/li.webp",
      title: "Last Step: Teflon Wax Then Dry",
      description:
        "In the final step, Teflon wax is applied to the car's surface. This not only enhances the vehicle's shine but also provides a protective layer against environmental elements. The car is then carefully dried, completing the detailing process and leaving it looking polished and well-maintained.",
    },
  ];

  return (
    <div
      id="Our Services"
      className="flex flex-col w-full justify-center items-center mt-3"
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
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <div
                className="bg-blue rounded-xl h-[600px] sm:h-[400px] text-white overflow-hidden shadow-xl"
                style={{
                  backgroundImage:
                    "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
                }}
              >
                <div className="z-10 flex flex-col lg:flex-row justify-center h-full text-left">
                  <img
                    src={item.image}
                    alt={`Step ${index + 1} image`}
                    className="w-[700px] h-[500px] object-cover object-top lg:block hidden"
                  />
                  <div className="mt-4 flex flex-col flex-wrap ml-6">
                    <h1 className="text-left text-white">
                      <h1 className="font-bold text-2xl">{item.title}</h1>
                      <p className="text-sm mt-3 mb-3">{item.description}</p>
                    </h1>
                  </div>
                  <img
                    src={item.image}
                    alt={`Step ${index + 1} image`}
                    className="w-screen h-screen object-cover object-top lg:hidden block"
                  />
                </div>
              </div>
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
