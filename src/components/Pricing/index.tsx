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

    {
      title: "SUV. Vans Full-Sized Pickups",
      price: "17",
      image: [
        "https://res.cloudinary.com/dni4hpqo3/image/upload/v1721151091/image_gkz2ey.png",
        "https://res.cloudinary.com/dni4hpqo3/image/upload/v1721151137/image_kgbel4.png",
        "https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,f_auto,h_103,q_auto/v1721152889/image_qy0epu.png",
      ],
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
        title: "SUV TRUCK Club",
        price: "39.95",
        link: "https://touch4wash.com/hugesavings/hugesavingmembers.php?flk=a68d0e837cb627acbfc0e9a24343e4ac",
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
          className="w-auto max-w-full"
        />
        <CldImage
          src="https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,f_auto,q_auto,w_137/v1720984059/Wash%20Me%20Car%20Wash%20Images/pricing/Frame-1_j60xj5.webp"
          height={256}
          width={232}
          alt="Simonize Double Bond image"
          loading="lazy"
          className="w-auto max-w-full"
        />
        <h1 className="font-bold text-3xl sm:text-4xl capitalize text-center sm:text-left">
          Choose your plan
        </h1>
      </div>

      <div className="flex md:flex-row flex-col w-full items-start mt-4 justify-center gap-[50px] mb-3">
        {pricingData.map((pricing, index) => (
          <PricingContainer key={index} data={pricing} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
