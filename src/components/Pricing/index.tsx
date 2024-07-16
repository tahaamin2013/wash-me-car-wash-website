"use client";

import { CldImage } from "next-cloudinary";
import React from "react";
import PricingContainer from "./PricingContainer";

const Pricing: React.FC = () => {
  const pricingData = [
    {
      title: "Small Cars",
      price: "15",
      image:
        "https://res.cloudinary.com/dni4hpqo3/image/upload/v1721148674/car3_fksbjh.webp",
      services: [
        "Tire and All over Pre-soak",
        "Tri Color Foam",
        "Full Body Hand Wash",
        "High Pressure Dry",
        "Spot Free Rinse",
        "Free Vacuum",
        "Add $2 For Wax",
      ],
      membership: {
        title: "Compact Club",
        price: "34.95",
        link: "https://touch4wash.com/hugesavings/hugesavingmembers.php?flk=2266b543ddd7762a69f0a4c0173dfbdd",
      },
    },
    
    {
      title: "Mid-Sized Cars",
      price: "16",
      image:
        "https://res.cloudinary.com/dni4hpqo3/image/upload/v1721149659/sedan_n4mh1x.webp",
      services: [
        "Tire and All over Pre-soak",
        "Tri Color Foam",
        "Full Body Hand Wash",
        "High Pressure Dry",
        "Spot Free Rinse",
        "Free Vacuum",
        "Add $2 For Wax",
      ],
      membership: {
        title: "Mid Size Club",
        price: "36.95",
        link: "https://touch4wash.com/hugesavings/hugesavingmembers.php?flk=d283035156d4b2fd9776ac54c0a05cd7",
      },
    },
  ];

  return (
    <div
      id="#MemberShips"
      className="font-sans text-center mt-8 my-8 flex justify-center items-center flex-col"
    >
      <div className="flex flex-wrap sm:justify-start justify-center items-center text-center gap-4 mb-16 w-full">
        <CldImage
          src="https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,f_auto,h_161,q_auto/v1720984049/Wash%20Me%20Car%20Wash%20Images/pricing/0365053m_grpsiy.webp"
          height={209}
          width={200}
          alt="PostCard Wash me car wash image"
          loading="lazy"
          className="w-auto h-auto max-w-full"
        />
        <CldImage
          src="https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,f_auto,q_auto,w_137/v1720984059/Wash%20Me%20Car%20Wash%20Images/pricing/Frame-1_j60xj5.webp"
          height={256}
          width={232}
          alt="Simonize Double Bond image"
          loading="lazy"
          className="w-auto h-auto max-w-full"
        />
        <h1 className="font-bold text-3xl sm:text-4xl capitalize text-center sm:text-left">
          Choose your plan
        </h1>
      </div>

      <div className="flex md:flex-row flex-col w-full items-start mt-4 justify-center gap-[50px] mb-3">
        {pricingData.map((pricing, index) => (
          <PricingContainer key={index} data={pricing} />
        ))}
        {/* <div
          className="border p-4 bg-white w-full rounded-2xl flex flex-col justify-center items-center text-center sm:w-[400px] px-5 shadow-xl py-12"
          style={{
            backgroundImage:
              "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
          }}
        >
          <Image
            loading="lazy"
            alt="car image"
            src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/car3.png"
            width={320}
            height={250}
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
            <h1 className="text-lg  font-bold">
              <span className=" text-[#717c33]">Join</span> <br /> Our Monthly
              Car Wash Membership <br />{" "}
              <h1 className="text-lg mb-1">Includes Teflon Wax</h1>
              <span className="text-[#717c33]"> & </span> <br />
              <span className=" uppercase text-red-600">save money!</span>
            </h1>
            <Link
              target="_blank"
              href="https://touch4wash.com/hugesavings/hugesavingmembers.php?flk=2266b543ddd7762a69f0a4c0173dfbdd"
              className="flex items-center text-xl rounded-md w-full justify-center my-2"
            >
              <Button
                size="lg"
                aria-label="Compact Club Membership button"
                className="bg-green text-black font-bold py-8 hover:text-white text-lg"
              >
                Compact Club <br />
                Membership
              </Button>
            </Link>
            <p className="font-bold text-5xl mb-2 text-black flex items-start justify-center">
              <span className="text-lg font-bold">$</span>34.95
            </p>
            <p className="font-sans text-[10px]  uppercase">
              4 Washes Per Month
            </p>
            <p className="flex flex-col gap-1 mb-1 w-full items-center justify-center">
              <p className="">
                Click the Above Link <br />
                Or
                <br />
                Scan the QR Code Below By Utilizing Your Smartphone Camera
              </p>
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
            loading="lazy"
            alt="car image"
            src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/sedan.png"
            width={320}
            height={250}
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
            <h1 className="text-lg  font-bold">
              <span className=" text-[#717c33]">Join</span> <br /> Our Monthly
              Car Wash Membership <br />{" "}
              <h1 className="text-lg mb-1">Includes Teflon Wax</h1>
              <span className="text-[#717c33]"> & </span> <br />{" "}
              <span className=" uppercase text-red-600">save money! </span>
            </h1>
            <Link
              target="_blank"
              href="https://touch4wash.com/hugesavings/hugesavingmembers.php?flk=d283035156d4b2fd9776ac54c0a05cd7"
              className="flex items-center text-xl rounded-md w-full justify-center my-2"
            >
              <Button
                size="lg"
                aria-label="Mid Size Club Membership"
                className="bg-green text-black  font-bold py-8 hover:text-white text-lg"
              >
                Mid Size Club <br /> Membership
              </Button>
            </Link>

            <p className="font-bold text-5xl mb-2 text-black flex items-start justify-center">
              <span className="text-lg font-bold">$</span>36.95
            </p>
            <p className="mt-3">
              <p className="font-sans text-[10px]  uppercase">
                4 Washes Per Month
              </p>
              <p className="flex flex-col gap-1 mb-1 w-full items-center justify-center">
                Click the Above Link <br />
                Or
                <br />
                Scan the QR Code Below By Utilizing Your Smartphone Camera
              </p>
            </p>
            <div className="w-full flex justify-center">
              <Image
                loading="lazy"
                className="mt-3"
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
                  loading="lazy"
                  alt="car image"
                  src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/car2.png"
                  width={320}
                  height={250}
                  className="w-52 hover:scale-110 transition-all duration-300"
                />
              </CarouselItem>

              <CarouselItem className="w-full flex justify-center items-center">
                <Image
                  loading="lazy"
                  alt="car image"
                  src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/car1.png"
                  width={320}
                  height={250}
                  className="w-52 hover:scale-110 transition-all duration-300"
                />
              </CarouselItem>
              <CarouselItem className="w-full flex justify-center items-center">
                <Image
                  loading="lazy"
                  alt="car image"
                  src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/van.png"
                  width={320}
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
            <p className="flex flex-col gap-1 mb-1 w-full items-center justify-center">
              <h1 className="text-lg  font-bold">
                <span className=" text-[#717c33]">Join</span> <br /> Our Monthly
                Car Wash Membership <br />{" "}
                <h1 className="text-lg mb-1">Includes Teflon Wax</h1>
                <span className="text-[#717c33]"> & </span>
                <br />{" "}
                <span className="text-red-600 uppercase">save money!</span>
              </h1>
              <Link
                target="_blank"
                href="https://touch4wash.com/hugesavings/hugesavingmembers.php?flk=a68d0e837cb627acbfc0e9a24343e4ac"
                className="flex items-center text-xl rounded-md w-full justify-center my-2"
              >
                <Button
                  size="lg"
                  aria-label="SUV Truck Club Membership button"
                  className="bg-green text-black font-bold py-8 hover:text-white text-lg"
                >
                  SUV Truck Club <br /> Membership
                </Button>
              </Link>
              <p className="font-bold text-5xl  text-black flex items-start justify-center">
                <span className="text-lg font-bold">$</span>39.95
              </p>
              <p className="">
                <p className="font-sans text-[10px]  uppercase">
                  4 Washes Per Month
                </p>
                Click the Above Link <br />
                Or
                <br />
                Scan the QR Code Below By Utilizing Your Smartphone Camera
              </p>
            </p>
            <div className="w-full flex justify-center">
              <Image
                loading="lazy"
                className="mt-1"
                src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/last%20qr.png"
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
        </div> */}
      </div>
    </div>
  );
};

export default Pricing;
