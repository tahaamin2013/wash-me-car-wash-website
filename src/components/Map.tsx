"use client";

import { mapData } from "@/AllWebsiteData";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import React, { useMemo } from "react";

const HoursOfOperation = React.memo(() => (
  <div className="w-full h-[305px] rounded-xl justify-between border-green border p-4 flex flex-col">
    {mapData.hours.map((day) => (
      <div
        key={day.day}
        className="flex w-full justify-between font-semibold text-lg"
      >
        <p>{day.day}</p>
        <p>{day.time}</p>
      </div>
    ))}
  </div>
));

HoursOfOperation.displayName = "HoursOfOperation";

const LocationInfo = React.memo(({ address }: any) => {
  return (
    <>
      <h1 className="text-2xl font-bold uppercase">Location</h1>
      <p className="font-semibold text-lg mb-2">{address}</p>
      <Link
        target="_blank"
        href="https://www.google.com/maps/place/Wash+Me+Car+Wash/@46.144836,-122.9307085,17z/data=!4m6!3m5!1s0x54946c94ec9bed79:0x41eb6feac6768b1b!8m2!3d46.14486!4d-122.9279929!16s%2Fg%2F1tds6drw?entry=ttu"
      >
        <CldImage
          draggable={false}
          width={700}
          height={400}
          alt="Map Image"
          className="rounded-xl"
          src="https://res.cloudinary.com/dni4hpqo3/image/upload/v1721253270/Wash%20Me%20Car%20Wash%20Images/Reviews/mapimage_ehgm78.png"
        />
      </Link>
    </>
  );
});

LocationInfo.displayName = "LocationInfo";

const Map = () => {
  const memoizedAddress = useMemo(() => mapData.location.address, []);

  return (
      <div className="bg-primaryBlue-200 lg:grid gap-6 grid-cols-2 px-7 py-6 items-center text-white overflow-hidden shadow-xl">
        <div className="flex flex-col items-center mt-6 mb-1 justify-center">
          <div className="flex flex-col mb-4 lg:hidden w-full items-center mt-6 justify-center">
            <LocationInfo address={memoizedAddress} />
          </div>
          <h1 className="text-2xl font-bold uppercase mb-8">
            HOURS OF OPERATION
          </h1>
          <HoursOfOperation />
        </div>

        <div className="hidden lg:flex flex-col w-full items-center mt-6 mb-1 justify-center">
          <LocationInfo address={memoizedAddress} />
        </div>
      </div>
  );
};

export default Map;
