import React, { useMemo } from "react";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const PricingContainer: React.FC<any> = ({ data }: any) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const renderImage = useMemo(() => {
    if (Array.isArray(data.image) && data.image.length > 1) {
      return (
        <Carousel plugins={[plugin.current]} className="w-full h-20 p-0">
          <CarouselContent>
            {data.image.map((img: string, imgIndex: number) => (
              <CarouselItem
                key={img}
                className="w-fit h-fit flex justify-center items-center"
              >
                <CldImage
                  loading="lazy"
                  alt={`${data.title} image ${imgIndex + 1}`}
                  src={img}
                  width={280}
                  height={200}
                  className="w-44 hover:scale-110 transition-all duration-300"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      );
    } else {
      return (
        <CldImage
          loading="lazy"
          alt={`${data.title} image`}
          src={Array.isArray(data.image) ? data.image[0] : data.image}
          width={320}
          height={250}
          className="w-52 hover:scale-110 transition-all duration-300"
        />
      );
    }
  }, [data.image, data.title]);

  const renderServices = useMemo(() =>
    data.services.map((service: string) => (
      <span
        key={service}
        className="flex items-center justify-center w-full gap-2"
      >
        <FaCheck fill="green" />
        {service}
      </span>
    )),
    [data.services]
  );

  return (
    <div className="border p-4 bg-white w-full rounded-2xl flex flex-col justify-center items-center text-center sm:w-[400px] px-5 shadow-xl py-12">
      {renderImage}
      <h1 className="text-2xl font-bold capitalize">{data.title}</h1>
      <h2 className="text-2xl font-bold mt-2 uppercase">
        hand wash <br /> ONE-TIME
      </h2>
      <p className="font-bold text-5xl mb-2 text-black flex items-start justify-center">
        <span className="text-lg font-bold">$</span>
        {data.price}
      </p>
      <div className="flex flex-col gap-1 mb-1">
        {renderServices}
      </div>
      <div className="mt-3 border-0 border-t-2 border-black">
        <div className="font-bold text-lg">
          <p className="text-[#717c33]">Join</p>
          <h3>Our Monthly Car Wash Membership Includes Teflon Wax</h3>
          <p className="text-[#717c33]">&</p>
          <span className="text-red-600 text-xl">SAVE MONEY!</span>
        </div>
        <Link
          target="_blank"
          href="https://touch4wash.com/hugesavings/hugesavingmembers.php?flk=2266b543ddd7762a69f0a4c0173dfbdd"
          className="flex items-center text-xl rounded-md w-full justify-center my-2"
        >
          <button
            aria-label="Compact Club Membership button"
            className="bg-primaryGreen text-black  rounded-xl font-bold py-2 px-4 hover:text-white text-lg"
          >
            {data.membership.title} <br />
            Membership
          </button>
        </Link>
        <p className="font-bold text-5xl mb-2 text-black flex items-start justify-center">
          <span className="text-lg font-bold">$</span>
          {data.membership.price}
        </p>
        <p className="font-sans text-[10px] uppercase">4 Washes Per Month</p>
        <p className="flex flex-col gap-1 mb-1 w-full items-center justify-center">
          Click the Above Link <br />
          Or
          <br />
          Scan the QR Code Below By Utilizing Your Smartphone Camera
        </p>
        <div className="w-full flex justify-center">
          <Image
            loading="lazy"
            className="mt-3"
            src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/1st%20qr.png"
            width={150}
            height={250}
            alt="Compact Club"
          />
        </div>
        <p>
          For Instant Access to Our Exclusive Membership Benefits without the
          need to download the app
        </p>
      </div>
    </div>
  );
};

export default React.memo(PricingContainer);