import React, { useRef, useMemo } from 'react';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";
import CustomTabs from '@/components/CustomTabs';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MemoizedCustomTabs = React.memo(CustomTabs);

const OptimizedCarousel = React.memo(({ children }: any) => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  return (
    <Carousel className="w-full text-black" plugins={[plugin.current]}>
      <CarouselContent>
        {children}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
});

OptimizedCarousel.displayName = 'OptimizedCarousel';

const Facilities: React.FC = () => {
  const tabsData = useMemo(() => [
    {
      label: '50-Foot Hand Wash Tunnel',
      content: (
        <p className="text-sm md:text-base">
          Indulge your vehicle in the ultimate pampering experience at Wash Me Car Wash. 
          Our 50-foot hand wash tunnel combines cutting-edge technology with a gentle touch, 
          ensuring a pristine finish every time. No brushes here – just a safe and effective 
          brush-free system. Simply put your vehicle in neutral, relax, and let Wash Me Car 
          Wash elevate your car care routine.
        </p>
      ),
    },
    {
      label: '5 Self-Service Bays (Open 24 Hrs)',
      content: (
        <p className="text-sm md:text-base">
          Take control of your car care journey with Wash Me Car Wash&apos;s five self-service bays, 
          available 24/7 for your convenience. Whether you&apos;re driving a car, motorcycle, or 
          towing a trailer, our self-service bays cater to all your needs. Enjoy a bright and 
          clean environment, equipped with user-friendly tools that make maintaining your 
          vehicle a breeze. At Wash Me Car Wash, it&apos;s more than just self-service – it&apos;s a 
          personalized experience designed for you.
        </p>
      ),
    },
  ], []);

  const carouselImages = useMemo(() => [
    { src: "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/fot.webp", alt: "Step 1" },
    { src: "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/fet.webp", alt: "Step 2" },
    { src: "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/hou.webp", alt: "Step 3" },
    { src: "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/moter.webp", alt: "Step 4" },
    { src: "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/sddsfaa.webp", alt: "Step 5" },
    { src: "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/phone.webp", alt: "Step 6" },
  ], []);

  return (
    <div className="w-full bg-primaryBlue-200 px-5 pb-3 text-white bg-[url('https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png')]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-2">
        <Image
          src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/1stlogo.png"
          alt="Logo"
          width={200}
          height={100}
          className="h-[100px] w-auto hidden lg:block"
          priority
        />
        <div className="w-full sm:hidden">
          <OptimizedCarousel>
            {["logo11.png", "logo22.png", "100.png", "google.png"].map((img, index) => (
              <CarouselItem key={index} className="flex justify-center items-center">
                <Image
                  src={`https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/${img}`}
                  alt={`Logo ${index + 1}`}
                  width={200}
                  height={200}
                  className="w-auto h-auto"
                />
              </CarouselItem>
            ))}
          </OptimizedCarousel>
        </div>
        <div className="w-full text-center flex-col flex items-center justify-center">
          <div className="w-full items-center sm:flex hidden justify-center mt-7">
            {["1stlogo.png", "100.png", "google.png"].map((img, index) => (
              <Image
                key={index}
                src={`https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/${img}`}
                alt={`Image ${index + 1}`}
                width={200}
                height={100}
                className="h-[100px] w-auto lg:hidden"
              />
            ))}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mt-8 text-center">
            State-of-the-Art Car Wash Facilities
          </h1>
          <MemoizedCustomTabs tabs={tabsData} />
        </div>
        <Image
          src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/100.png"
          alt="100% Image"
          width={100}
          height={100}
          className="h-[100px] w-auto hidden lg:block"
        />
        <Image
          src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/google.png"
          alt="Google Reviews Image"
          width={100}
          height={100}
          className="h-[100px] w-auto hidden lg:block"
        />
      </div>

      <div className="w-full flex justify-center items-center text-black">
        <OptimizedCarousel>
          {carouselImages.map((img, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex justify-center items-center">
              <Image
                src={img.src}
                alt={img.alt}
                width={365}
                height={400}
                className="w-[365px] object-cover rounded-xl border-2 border-white"
              />
            </CarouselItem>
          ))}
        </OptimizedCarousel>
      </div>
    </div>
  );
};

export default React.memo(Facilities);