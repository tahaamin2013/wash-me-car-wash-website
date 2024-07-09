import React from "react";
import { mapData } from "@/AllWebsiteData";

const Map = () => {
  return (
    <div
      key="1"
      className="bg-myBlue lg:grid gap-6 grid-cols-2 px-7 py-6 items-center text-white overflow-hidden shadow-xl"
      style={{
        backgroundImage: mapData.backgroundImageUrl,
      }}
    >
      <div className="flex flex-col items-center mt-6 mb-1 justify-center">
        <div className="flex flex-col mb-4 lg:hidden w-full items-center mt-6 justify-center">
          <h1 className="text-2xl mb-7 font-bold uppercase">Location</h1>
          <p className="font-semibold text-lg mb-2">
            {mapData.location.address}
          </p>
          <iframe
            className="sm:h-[300px] h-[400px] w-full overflow-hidden rounded-md"
            src={mapData.location.iframeSrc}
            width="600"
            height="300"
            aria-hidden="false"
          />
        </div>
        <h1 className="text-2xl font-bold uppercase mb-8">
          HOURS OF OPERATION
        </h1>
        <div className="w-full h-[305px] rounded-xl justify-between border-green border p-4 flex flex-col">
          {mapData.hours.map((day, index) => (
            <div
              key={index}
              className="flex w-full justify-between font-semibold text-lg"
            >
              <p>{day.day}</p>
              <p>{day.time}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex flex-col w-full items-center mt-6 mb-1 justify-center">
        <h1 className="text-2xl font-bold uppercase">Location</h1>
        <p className="font-semibold text-lg mb-2">{mapData.location.address}</p>
        <iframe
          className="sm:w-full sm:h-[300px] h-[400px] w-full overflow-hidden rounded-md"
          src={mapData.location.iframeSrc}
          width="600"
          height="300"
          aria-hidden="false"
        />
      </div>
    </div>
  );
};

export default Map;
