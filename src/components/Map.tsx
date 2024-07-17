"use client";

import React, { useMemo } from "react";
import { mapData } from "@/AllWebsiteData";
import LeafletMap from "./GoogleMapsApi";
import GoogleMap from "./GoogleMaps";

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
  const center = { lat: 46.14494173764884, lng: -122.92794998751265 };

  return (
    <>
      <h1 className="text-2xl font-bold uppercase">Location</h1>
      <p className="font-semibold text-lg mb-2">{address}</p>
   <GoogleMap 
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
        center={center}
        zoom={17}
      />   
    </>
  )
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
