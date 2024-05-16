"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";
import Link from "next/link";

interface Plan {
  name: string;
  price: string;
  options: string[];
  nooptions: string[];
  minutes: string;
}

const Pricing: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<string>("small");
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  useEffect(() => {
    console.log(`Selected Car: ${selectedCar}`);
  }, [selectedCar]);
  return (
    <div
      id="#MemberShips"
      className="font-sans text-center mt-8 my-8 flex justify-center items-center flex-col"
    >
      <div className="flex flex-row items-center gap-0 sm:gap-[40px]">
        <Image
          src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/Frame-1.png"
          alt="image of house"
          className="w-[200px] h-[200px] ml-0"
          width={200}
          height={200}
        />
        <div>
          <h1 className="text-4xl mb-2 font-bold">Choose Your Plan</h1>
        </div>
        <div />
      </div>

      <div className="flex md:flex-row flex-col w-full items-start mt-4 justify-center gap-[50px] mb-3">
        <div
          className="border p-4 bg-white w-full rounded-2xl flex flex-col justify-center items-center text-center sm:w-[400px] px-5 shadow-xl py-12"
          style={{
            backgroundImage:
              "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
          }}
        >
          <Image
            alt="car image"
            src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/car3.png"
            width={320}
            height={250}
            loading="eager"
            className="w-52 hover:scale-110 transition-all duration-300"
          />
          <h1 className="text-2xl font-bold capitalize">
            <span className="text-blue">Small Cars </span>
            <br />{" "}
          </h1>
          <h1 className="text-2xl font-bold mt-2 uppercase">
            hand wash <br /> ONE-TIME
          </h1>
          <p className="font-bold text-5xl mb-2 text-black flex items-start justify-center">
            <span className="text-lg font-bold">$</span>15
          </p>
          <p className="flex flex-col gap-1 mb-1">
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
              Tire and All over Pre-soak
            </span>
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
              Tri Color Foam
            </span>
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
              Full Body Hand Wash
            </span>
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
              High Pressure Dry
            </span>
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
              Spot Free Rinse
            </span>
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
              Free Vacuum
            </span>
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
              Add $2 For Wax
            </span>
          </p>
<hr />
<div className="mt-3 border-0 border-t-2 border-black">
            <p className="font-sans text-2xl font-bold uppercase">
              4 Washes Per Month
            </p>
            <p className="font-bold text-5xl mb-2 text-black flex items-start justify-center">
              <span className="text-lg font-bold">$</span>34.95
            </p>
            <p className="flex flex-col gap-1 mb-1 w-full items-center justify-center">
              <Link
                target="_blank"
                href="https://touch4wash.com/hugesavings/hugesavingmembers.php?flk=2266b543ddd7762a69f0a4c0173dfbdd"
                className="flex items-center text-xl rounded-md"
              >
                <Button
                  size="lg"
                  className="bg-green text-black font-bold py-8 text-lg"
                >
                  Compact Club <br />
                  Membership
                </Button>
              </Link>

              <p className="mt-3">
                Click the Above Link <br />
                Or
                <br />
                Scan the QR Code Below By Utilizing Your Smartphone Camera
              </p>
            </p>
            <div className="w-full flex justify-center">
              <Image
                className="mt-3"
                src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/1st%20qr.png"
                width={150}
                height={250}
                loading="eager"
                alt="Compact Club"
              />
            </div>
            <p>
              For Instant Access to Our Exclusive Membership Benefits without
              the need to download the app
            </p>
          </div>
        </div>

        <div
          className="border p-4 bg-white w-full rounded-2xl flex flex-col justify-center items-center text-center sm:w-[400px] px-5 shadow-xl py-12"
          style={{
            backgroundImage:
              "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
          }}
        >
          <Image
            alt="car image"
            src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/sedan.png"
            width={320}
            height={250}
            loading="eager"
            className="w-52 hover:scale-110 transition-all duration-300"
          />
          <h1 className="text-2xl font-bold capitalize">
            <span className="text-blue">Mid-Sized Cars </span>
            <br />{" "}
          </h1>

          <h1 className="text-2xl font-bold mt-2 uppercase">
            hand wash <br /> ONE-TIME
          </h1>
          <p className="font-bold text-5xl mb-2 text-black flex items-start justify-center">
            <span className="text-lg font-bold">$</span>16
          </p>
          <p className="flex flex-col gap-1 mb-1">
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
             Tire and All over Pre-soak
            </span>
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
              Tri Color Foam
            </span>
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
              Full Body Hand Wash
            </span>
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
              High Pressure Dry
            </span>
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
              Spot Free Rinse
            </span>
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
              Free Vacuum
            </span>
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
              Add $2 For Wax
            </span>
          </p>
          <div className="mt-3 border-0 border-t-2 border-black">
            <p className="font-sans text-2xl font-bold uppercase">
              4 Washes Per Month
            </p>
            <p className="font-bold text-5xl mb-2 text-black flex items-start justify-center">
              <span className="text-lg font-bold">$</span>36.95
            </p>
            <p className="flex flex-col gap-1 mb-1 w-full items-center justify-center">
              <Link
                target="_blank"
                href="https://touch4wash.com/hugesavings/hugesavingmembers.php?flk=d283035156d4b2fd9776ac54c0a05cd7"
                className="flex items-center text-xl rounded-md"
              >
                <Button
                  size="lg"
                  className="bg-green text-black font-bold py-8 text-lg"
                >
                  Mid Size Club <br /> Membership
                </Button>
              </Link>

              <p className="mt-3">
                Click the Above Link <br />
                Or
                <br />
                Scan the QR Code Below By Utilizing Your Smartphone Camera
              </p>
            </p>
            <div className="w-full flex justify-center">
              <Image
                className="mt-3"
                loading="eager"
                src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/2nd%20qr.png"
                width={150}
                height={250}
                alt="Compact Club"
              />
            </div>
            <p>
              For Instant Access to Our Exclusive Membership Benefits without
              the need to download the app
            </p>
          </div>
        </div>

        <div
          className="border p-4 bg-white w-full flex flex-col justify-center items-center text-center sm:w-[400px] px-5 shadow-lg rounded-xl"
          style={{
            backgroundImage:
              "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
          }}
        >
          <Carousel plugins={[plugin.current]} className="w-full h-[7rem] p-0">
            <CarouselContent>
              <CarouselItem className="w-full flex justify-center items-center">
                <Image
                  alt="car image"
                  src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/car2.png"
                  width={320}
                  height={250}
                  loading="eager"
                  className="w-52 hover:scale-110 transition-all duration-300"
                />
              </CarouselItem>

              <CarouselItem className="w-full flex justify-center items-center">
                <Image
                  alt="car image"
                  src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/car1.png"
                  width={320}
                  height={250}
                  loading="eager"
                  className="w-52 hover:scale-110 transition-all duration-300"
                />
              </CarouselItem>
              <CarouselItem className="w-full flex justify-center items-center">
                <Image
                  alt="car image"
                  src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/van.png"
                  width={320}
                  loading="eager"
                  height={250}
                  className="w-52 hover:scale-110 transition-all duration-300"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <h1 className="text-2xl font-bold capitalize">
            <span className="text-blue">SUV. Vans full-sized Pickups</span>
            <br />{" "}
          </h1>
          <h1 className="text-2xl font-bold mt-2 uppercase">
            Hand Wash <br /> ONE-TIME
          </h1>
          <p className="font-bold text-5xl mb-2 text-black flex items-start justify-center">
            <span className="text-lg font-bold">$</span>17
          </p>
          <p className="flex flex-col gap-1 mb-1">
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
             Tire and All over Pre-soak
            </span>
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
              Tri Color Foam
            </span>
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
              Full Body Hand Wash
            </span>
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
              High Pressure Dry
            </span>
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
              Spot Free Rinse
            </span>
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
              Free Vacuum
            </span>
            <span className="flex items-center justify-center w-full gap-2">
              <FaCheck fill="green" />
              Add $2 For Wax
            </span>
          </p>
          <div className="mt-3 border-0 border-t-2 border-black">
            <p className="font-sans text-2xl font-bold uppercase">
              4 Washes Per Month
            </p>
            <p className="font-bold text-5xl mb-2 text-black flex items-start justify-center">
              <span className="text-lg font-bold">$</span>39.95
            </p>

            <p className="flex flex-col gap-1 mb-1 w-full items-center justify-center">
              <Link
                target="_blank"
                href="https://touch4wash.com/hugesavings/hugesavingmembers.php?flk=a68d0e837cb627acbfc0e9a24343e4ac"
                className="flex items-center text-xl rounded-md"
              >
                <Button
                  size="lg"
                  className="bg-green text-black font-bold py-8 text-lg"
                >
                  SUV Truck Club <br /> Membership
                </Button>
              </Link>
              <p className="mt-3">
                Click the Above Link <br />
                Or
                <br />
                Scan the QR Code Below By Utilizing Your Smartphone Camera
              </p>
            </p>
            <div className="w-full flex justify-center">
              <Image
                className="mt-1"
                src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/last%20qr.png"
                width={150}
                height={250}
                loading="eager"
                alt="Compact Club"
              />
            </div>
            <p>
              For Instant Access to Our Exclusive Membership Benefits without
              the need to download the app
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
