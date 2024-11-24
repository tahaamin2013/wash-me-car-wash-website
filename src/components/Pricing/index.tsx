"use client";

import Image from 'next/image'
import React from "react";
import PricingContainer from "./PricingContainer";

const Pricing: React.FC = () => {
  const pricingData = [
    {
      title: "Small Cars",
      price: "15",
      image:
        "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/car3.png",
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
        img2: '/1.png',
        link: "https://touch4wash.com/hugesavings/hugesavingmembers.php?flk=2266b543ddd7762a69f0a4c0173dfbdd",
      },
    },

    {
      title: "Mid-Sized Cars",
      price: "16",
      image:
        "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/sedan.png",
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
        img2: "/2.png",
        link: "https://touch4wash.com/hugesavings/hugesavingmembers.php?flk=d283035156d4b2fd9776ac54c0a05cd7",
      },
    },

    {
      title: "SUV. Vans Full-Sized Pickups",
      price: "17",
      image: [
        "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/car1.png",
        "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/car2.png",
        "/van (1).png",
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
        img2: "/3.png",
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
        <Image
          src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/Frame-1.png"
          height={256}
          width={232}
          alt="Simonize Double Bond image"
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
